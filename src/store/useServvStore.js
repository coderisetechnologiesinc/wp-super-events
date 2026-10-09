import { create } from "zustand";
import {
  invalidateRequests,
  resourceVersion,
  subscribeToInvalidation,
} from "../utilities/requestCache";

import { getSettings } from "../utilities/settings";
import { getFilters, getFilterType } from "../utilities/filters";
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
      set({ calendarConnected: !!calendar?.data?.id });
    } catch (e) {
      console.error("Calendar account sync error", e);
    }
  },

  syncAccountsAfterEvents: async () => {
    // All four answers are asked for at once and land in a single update: a
    // flag that flips while the rest are still in flight lets the setup guide
    // render a half-known state and then retract it. allSettled so one failing
    // service cannot leave the others unknown.
    const results = await Promise.allSettled([
      getZoomAccount(),
      getStripeAccount(),
      getGmailAccount(),
      getCalendarAccount?.(),
    ]);
    const [zoom, stripe, gmail, calendar] = results.map((result) =>
      result.status === "fulfilled" ? result.value?.data : null,
    );
    results
      .filter((result) => result.status === "rejected")
      .forEach((result) => console.error("Account sync error", result.reason));
    set({
      zoomConnected: !!zoom?.id,
      stripeConnected: !!stripe?.id,
      stripeCurrency: stripe?.currency ?? get().stripeCurrency,
      gmailConnected: !!gmail?.id,
      calendarConnected: !!calendar?.id,
      accountsSynced: true,
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
      const serverFilters = await getFilters(settings.current_plan.id);
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
