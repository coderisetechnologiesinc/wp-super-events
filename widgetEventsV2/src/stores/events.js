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

  async function fetchDates(month) {
    if (datesByMonth.value[month]) return datesByMonth.value[month];

    try {
      const dates = await api.fetchDates({
        ...requestArgs(),
        month,
      });

      datesByMonth.value = { ...datesByMonth.value, [month]: dates || [] };
    } catch (e) {
      if (!isAbortError(e)) error.value = e;
    }

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
