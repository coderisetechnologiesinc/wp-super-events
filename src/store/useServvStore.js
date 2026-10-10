import { create } from "zustand";
import {
  invalidateRequests,
  resourceVersion,
  subscribeToInvalidation,
} from "../utilities/requestCache";

import { getSettings } from "../utilities/settings";
import { getFilters, getFilterType } from "../utilities/filters";
import {
  needsGmailAccount,
  needsStripeAccount,
  needsZoomAccount,
} from "../utilities/planCapabilities";
import {
  getZoomAccount,
  getStripeAccount,
  getGmailAccount,
  getCalendarAccount,
} from "../utilities/accounts";

export const useServvStore = create((set, get) => ({
  settings: null,
  filtersList: {},
  filtersHash: null,
  zoomAccount: null,
  zoomConnected: false,
  // Connection flags start out false and are only answered by the account
  // sync, so "false" alone cannot be told apart from "not asked yet".
  accountsSynced: false,
  // The calendar answer follows the others instead of competing with them, so
  // it gets its own flag: the screens that render it wait on this one.
  calendarSynced: false,
  stripeConnected: false,
  stripeCurrency: "CAD",
  gmailConnected: false,
  calendarConnected: false,
  timeFormat: "hh:mm a",
  loading: false,
  errorMessage: null,

  fetchSettings: async () => {
    set({ loading: true, errorMessage: null });

    try {
      const res = await getSettings();

      if (res && !res.errorCode && !res.error) {
        set({
          settings: res,
          loading: false,
        });
      } else {
        set({
          loading: false,
          errorMessage: "We're facing an issue loading the settings.",
        });
      }
      return res;
    } catch (e) {
      console.error("Error loading settings", e);
      set({
        loading: false,
        errorMessage: "We're facing an issue loading the settings.",
      });
      return null;
    }
  },

  // Stripe confirms the payment in the browser, but the subscription reaches
  // Servv through a webhook, so a settings read right after checkout can still
  // answer with the old plan — and the cached copy would pin it there for the
  // rest of its TTL. The cache is dropped and the plan re-read until it
  // changes, for a bounded number of tries.
  syncPlanAfterActivation: async (expectedPlanId = null) => {
    const expected = Number(expectedPlanId) || null;
    const previous = Number(get().settings?.current_plan?.id) || null;
    const activated = (planId) =>
      Boolean(planId) && (expected ? planId === expected : planId !== previous);

    for (let attempt = 1; attempt <= 5; attempt++) {
      invalidateRequests(["settings", "billing"]);
      let fresh = null;
      try {
        fresh = await getSettings();
      } catch (e) {
        console.error("Plan sync error", e);
      }
      if (fresh && !fresh.errorCode && !fresh.error) {
        set({ settings: fresh });
        if (activated(Number(fresh.current_plan?.id) || null)) return fresh;
      }
      if (attempt < 5)
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return get().settings;
  },

  syncZoomAccount: async () => {
    try {
      const zoom = await getZoomAccount();
      set({ zoomConnected: !!zoom?.data?.id, zoomAccount: zoom.data });
    } catch (e) {
      console.error("Zoom account sync error", e);
    }
  },

  syncStripeAccount: async () => {
    try {
      const stripe = await getStripeAccount();
      set({
        stripeConnected: !!stripe?.data?.id,
        stripeCurrency: stripe?.data?.currency,
      });
    } catch (e) {
      console.error("Stripe account sync error", e);
    }
  },

  syncGmailAccount: async () => {
    try {
      const gmail = await getGmailAccount();
      set({ gmailConnected: !!gmail?.data?.id });
    } catch (e) {
      console.error("Gmail account sync error", e);
    }
  },

  syncCalendarAccount: async () => {
    try {
      const calendar = await getCalendarAccount?.();
      set({ calendarConnected: !!calendar?.data?.id, calendarSynced: true });
    } catch (e) {
      console.error("Calendar account sync error", e);
      // A failed read is still an answer: leaving the flag false would make
      // the screens that fall back to this ask again on every render.
      set({ calendarSynced: true });
    }
  },

  syncAccountsAfterEvents: async () => {
    // Only the accounts the plan and the chosen email provider can answer for.
    // A free shop has no Zoom and no Stripe to connect, and a paid shop that
    // sends through SMTP has no Gmail account to report — asking anyway spends
    // a PHP worker the proxy needs for the reads that do say something.
    const settings = get().settings;
    const reads = [
      ["zoom", getZoomAccount, needsZoomAccount(settings)],
      ["stripe", getStripeAccount, needsStripeAccount(settings)],
      ["gmail", getGmailAccount, needsGmailAccount(settings)],
    ].filter(([, , needed]) => needed);

    // The answers land in a single update: a flag that flips while the rest
    // are still in flight lets the setup guide render a half-known state and
    // then retract it. allSettled so one failing service cannot leave the
    // others unknown.
    const results = await Promise.allSettled(reads.map(([, read]) => read()));
    const answers = {};
    results.forEach((result, index) => {
      const [service] = reads[index];
      if (result.status === "fulfilled") answers[service] = result.value?.data;
      else console.error(`${service} account sync error`, result.reason);
    });
    const asked = (service) => reads.some(([name]) => name === service);

    // A service the plan does not expose reads as not connected — its screens
    // are closed to the shop either way. The account object itself is only
    // replaced when it was actually asked for, so a read skipped here cannot
    // discard what VenueStep fetched on its own.
    set({
      zoomConnected: !!answers.zoom?.id,
      zoomAccount: asked("zoom") ? answers.zoom ?? null : get().zoomAccount,
      stripeConnected: !!answers.stripe?.id,
      stripeCurrency: answers.stripe?.currency ?? get().stripeCurrency,
      gmailConnected: !!answers.gmail?.id,
      accountsSynced: true,
    });

    // Nothing on the dashboard renders the calendar connection, so its read
    // follows the batch rather than joining it. The screens that do render it
    // ask for it themselves if this never ran.
    return get().syncCalendarAccount();
  },

  // Fills the connection flags from answers a screen already has. The
  // integrations page asks for all four accounts regardless of plan, so its
  // results are what fill in whatever the sync above skipped or deferred.
  adoptAccountAnswers: (answers = {}) => {
    set({
      zoomConnected: !!answers.zoom?.id,
      zoomAccount: answers.zoom ?? get().zoomAccount,
      stripeConnected: !!answers.stripe?.id,
      stripeCurrency: answers.stripe?.currency ?? get().stripeCurrency,
      gmailConnected: !!answers.gmail?.id,
      calendarConnected: !!answers.calendar?.id,
      accountsSynced: true,
      calendarSynced: true,
    });
  },

  syncSingleFilterFromServer: async (filterId) => {
    const { settings } = get();
    const version = resourceVersion("filters");
    if (!settings?.current_plan?.id || !filterId) return;

    try {
      const result = await getFilterType(filterId);
      if (version !== resourceVersion("filters"))
        return get().syncSingleFilterFromServer(filterId);

      if (!result?.data) return;

      const newFiltersList = {
        ...get().filtersList,
        [filterId]: result.data,
      };

      const newHash = JSON.stringify(newFiltersList);

      set({
        filtersList: newFiltersList,
        filtersHash: newHash,
      });
    } catch (e) {
      console.error("Single filter sync error:", e);
    }
  },

  syncFiltersFromServer: async () => {
    const { settings } = get();
    const version = resourceVersion("filters");
    if (!settings?.current_plan?.id) return;

    try {
      const serverFilters = await getFilters(settings);
      if (version !== resourceVersion("filters"))
        return get().syncFiltersFromServer();
      const newHash = JSON.stringify(serverFilters);

      if (newHash !== get().filtersHash) {
        set({
          filtersList: serverFilters,
          filtersHash: newHash,
        });
      }
    } catch (e) {
      console.error("Filter sync error:", e);
    }
  },

  getCachedFilters: () => get().filtersList,
}));

// Connecting or disconnecting a service invalidates the accounts cache. The
// flags above decide what the setup guide shows and whether the events list
// asks the zoom endpoint, so they are read back instead of staying at whatever
// the page was opened with.
subscribeToInvalidation((tags) => {
  if (!tags.includes("accounts")) return;
  if (!useServvStore.getState().accountsSynced) return;
  useServvStore.getState().syncAccountsAfterEvents();
});
