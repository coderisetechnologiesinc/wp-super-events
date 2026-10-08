import { create } from "zustand";
import { resourceVersion } from "../utilities/requestCache";

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
    try {
      const zoom = await getZoomAccount();
      set({ zoomConnected: !!zoom?.data?.id });

      const stripe = await getStripeAccount();
      set({ stripeConnected: !!stripe?.data?.id });
      set({ stripeCurrency: stripe?.data?.currency });

      const gmail = await getGmailAccount();
      set({ gmailConnected: !!gmail?.data?.id });

      const calendar = await getCalendarAccount?.();
      set({ calendarConnected: !!calendar?.data?.id });
    } catch (e) {
      console.error("Account sync error", e);
    }
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
