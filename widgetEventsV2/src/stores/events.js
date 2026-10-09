import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useRuntimeStore } from "@/api/wordpress";
import { isAbortError } from "@/api/client";
import { CLIENT_FILTER_KEYS } from "@/api/filters";
import { normalizeEvents } from "@/api/normalize";
import { useShopStore } from "./shop";
import { useFiltersStore } from "./filters";

const CLIENT_PREDICATES = {
  format: (event, value) => event.formatLabel === value,
  availability: (event, value) => event.availability === value,
};

const matchesClientFilters = (event, clientFilters) =>
  CLIENT_FILTER_KEYS.every((key) => {
    const value = clientFilters[key];
    const predicate = CLIENT_PREDICATES[key];

    return !value || !predicate || predicate(event, value);
  });

export const useEventsStore = defineStore("events", () => {
  const { api } = useRuntimeStore();
  const shop = useShopStore();
  const items = ref([]);
  const page = ref(1);
  const pageSize = ref(10);
  const totalRecords = ref(0);
  const pageCount = ref(1);
  const loading = ref(true);
  const error = ref(null);

  const datesByMonth = ref({});
  const datesLoaded = ref(false);
  // The endpoint answers with every date matching the current filters, so one
  // request serves the strip's two-month window, the calendar panel under it
  // and any month the visitor steps to. Asking per month made those views fire
  // a request each for neighbouring months on every filter change, and made
  // stepping a month wait on the network for data already paid for.
  let datesRequest = null;

  const filtersStore = useFiltersStore();

  filtersStore.onChange(() => {
    invalidateDates();
    fetchPage(1);
  });

  const visibleItems = computed(() =>
    items.value.filter((event) =>
      matchesClientFilters(event, filtersStore.clientFilters),
    ),
  );

  const requestArgs = () => ({
    filters: filtersStore.selected,
    defaults: filtersStore.themeDefaults,
  });

  async function fetchPage(nextPage = page.value) {
    loading.value = true;
    error.value = null;

    try {
      const data = await api.fetchMeetings({
        ...requestArgs(),
        page: nextPage,
        pageSize: pageSize.value,
      });

      const nextItems = normalizeEvents(data?.meetings);
      items.value = shop.viewMode === 'progressive' && nextPage > 1 ? [...items.value, ...nextItems] : nextItems;
      page.value = data?.page_number ?? nextPage;
      pageCount.value = data?.page_count ?? 1;
      totalRecords.value = data?.total_records ?? items.value.length;
      loading.value = false;
    } catch (e) {
      if (isAbortError(e)) return items.value;

      error.value = e;
      loading.value = false;
    }

    return items.value;
  }

  function setPageSize(size) {
    pageSize.value = size;

    return fetchPage(1);
  }

  function initPageSize(size) {
    if (Number.isFinite(size) && size > 0) pageSize.value = size;
  }

  function loadDates() {
    if (datesLoaded.value) return Promise.resolve();
    if (datesRequest) return datesRequest;

    datesRequest = (async () => {
      try {
        // A day already picked must not narrow the answer down to itself: the
        // strip and the calendar still show the whole window around it.
        const dates = await api.fetchDates({
          ...requestArgs(),
          filters: { ...filtersStore.selected, date: "" },
        });
        const grouped = {};

        (Array.isArray(dates) ? dates : []).forEach((value) => {
          const day = String(value).slice(0, 10);
          const month = day.slice(0, 7);

          if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return;
          (grouped[month] ||= []).push(day);
        });

        datesByMonth.value = grouped;
        datesLoaded.value = true;
      } catch (e) {
        if (!isAbortError(e)) error.value = e;
      } finally {
        datesRequest = null;
      }
    })();

    return datesRequest;
  }

  async function fetchDates(month) {
    await loadDates();

    if (!month) return Object.values(datesByMonth.value).flat();

    return datesByMonth.value[month] || [];
  }

  async function fetchCalendarMonth(month) {
    const start = new Date(`${month}-01T00:00:00Z`);
    const end = new Date(start); end.setUTCMonth(end.getUTCMonth() + 1); end.setUTCMilliseconds(-1);
    const filters = { ...filtersStore.selected, date: '', startDate: start.toISOString(), endDate: end.toISOString() };
    const result = [];
    let count = 1;
    for (let next = 1; next <= count; next++) {
      const data = await api.fetchMeetings({ filters, defaults: filtersStore.themeDefaults, page: next, pageSize: 50, scope: `calendar:${month}` });
      result.push(...normalizeEvents(data?.meetings));
      count = Number(data?.page_count) || 1;
    }
    return result.filter((event) => matchesClientFilters(event, filtersStore.clientFilters));
  }

  function invalidateDates() {
    datesByMonth.value = {};
    datesLoaded.value = false;
    // A reply still on its way answers the filters that have just been
    // replaced, so it is no longer shareable: the next caller starts a request
    // of its own, which aborts the stale one through its scope.
    datesRequest = null;
  }

  return {
    items,
    visibleItems,
    page,
    pageSize,
    pageCount,
    totalRecords,
    loading,
    error,
    datesByMonth,
    fetchPage,
    setPageSize,
    initPageSize,
    fetchDates,
    fetchCalendarMonth,
    invalidateDates,
  };
});
