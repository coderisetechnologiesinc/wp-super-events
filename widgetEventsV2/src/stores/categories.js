import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useRuntimeStore } from "@/api/wordpress";
import { isAbortError } from "@/api/client";
import { normalizeEvents } from "@/api/normalize";
import { useFiltersStore } from "./filters";
import { useShopStore } from "./shop";

const EMPTY_PAGE = { events: [], totalRecords: 0 };

const configuredIds = (raw) =>
  String(raw ?? "")
    .split(",")
    .map((value) => Number.parseInt(value, 10))
    .filter((value) => Number.isFinite(value));

export const useCategoriesStore = defineStore("categories", () => {
  const { api } = useRuntimeStore();
  const shop = useShopStore();
  const filters = useFiltersStore();

  const pages = ref({});
  const offsets = ref({});
  const loadingIds = ref([]);
  const error = ref(null);

  const rowLength = computed(() => Number(shop.card.gridColumns) || 3);

  const list = computed(() => {
    const available = filters.optionsFor("category");
    const wanted = filters.selected.category?.length ? filters.selected.category : filters.themeDefaults.category || configuredIds(shop.style.ew_events_categories);

    if (!wanted.length) return available;

    return available.filter((category) => wanted.map(String).includes(String(category.id)));
  });

  const keyOf = (categoryId, page) => `${categoryId}:${page}`;

  const offsetOf = (categoryId) => offsets.value[categoryId] || 0;
  const pageOf = (categoryId) =>
    pages.value[keyOf(categoryId, offsetOf(categoryId))] || EMPTY_PAGE;

  const eventsOf = (categoryId) => pageOf(categoryId).events;
  const totalOf = (categoryId) => pageOf(categoryId).totalRecords;
  const isLoading = (categoryId) => loadingIds.value.includes(categoryId);

  const pageCountOf = (categoryId) =>
    Math.ceil(totalOf(categoryId) / rowLength.value) || 0;

  const hasPrev = (categoryId) => offsetOf(categoryId) > 0;
  const hasNext = (categoryId) =>
    offsetOf(categoryId) + 1 < pageCountOf(categoryId);

  let version = 0;
  async function load(categoryId, page = 0) {
    const current = version;
    const cacheKey = keyOf(categoryId, page);

    if (pages.value[cacheKey]) {
      offsets.value = { ...offsets.value, [categoryId]: page };

      return pages.value[cacheKey];
    }

    loadingIds.value = [...loadingIds.value, categoryId];

    try {
      const data = await api.fetchMeetings({
        filters: { ...filters.selected, category: [categoryId] },
        defaults: filters.themeDefaults,
        page: page + 1,
        pageSize: rowLength.value,
        scope: `meetings:category:${categoryId}`,
      });
      if (current !== version) return EMPTY_PAGE;
      const loaded = {
        events: normalizeEvents(data?.meetings),
        totalRecords: data?.total_records ?? 0,
      };

      pages.value = { ...pages.value, [cacheKey]: loaded };
      offsets.value = { ...offsets.value, [categoryId]: page };
    } catch (e) {
      if (current === version && !isAbortError(e)) error.value = e;
    } finally {
      if (current === version) loadingIds.value = loadingIds.value.filter((id) => id !== categoryId);
    }

    return pages.value[cacheKey] || EMPTY_PAGE;
  }

  const next = (categoryId) =>
    hasNext(categoryId) ? load(categoryId, offsetOf(categoryId) + 1) : null;

  const prev = (categoryId) =>
    hasPrev(categoryId) ? load(categoryId, offsetOf(categoryId) - 1) : null;

  function reset() {
    version++;
    loadingIds.value = [];
    pages.value = {};
    offsets.value = {};
    error.value = null;
  }

  function loadAll() {
    return Promise.all(list.value.map((category) => load(category.id, 0)));
  }

  function refresh() {
    reset();

    return loadAll();
  }

  return {
    list,
    error,
    rowLength,
    eventsOf,
    totalOf,
    offsetOf,
    pageCountOf,
    hasPrev,
    hasNext,
    isLoading,
    load,
    loadAll,
    next,
    prev,
    reset,
    refresh,
  };
});
