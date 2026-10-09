import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useRuntimeStore } from "@/api/wordpress";
import {
  CLIENT_FILTER_KEYS,
  FILTER_SCHEMA,
  SERVER_FILTER_KEYS,
  activeFilterKeys,
  emptyFilters,
  isFilterActive,
  resolveDefaultsByName,
} from "@/api/filters";
import { rangeFilters } from "@/utilities/dateRanges";

const EMPTY_TYPES = {
  categories: [],
  teams: [],
  members: [],
  locations: [],
  languages: [],
};

export const useFiltersStore = defineStore("filters", () => {
  const { api } = useRuntimeStore();
  const selected = ref(emptyFilters());
  const eventTypes = ref({ ...EMPTY_TYPES });

  const themeDefaultNames = ref({});
  const themeDefaults = ref({});
  const hideOtherFilters = ref(false);
  const enabledKeys = ref([]);
  const typesLoading = ref(false);
  const typesLoaded = ref(false);
  const typesError = ref(null);

  let changeHandler = null;

  function onChange(handler) {
    changeHandler = handler;
  }

  const optionsFor = (key) =>
    eventTypes.value[FILTER_SCHEMA[key]?.typesKey] || [];

  const isHidden = (key) =>
    hideOtherFilters.value && themeDefaults.value[key] !== undefined;

  const activeKeys = computed(() => activeFilterKeys(selected.value));
  // A date choice of any shape: the calendar picks a single day, the quick
  // ranges pick a window. Whoever offers to clear it has to see both.
  const hasDateFilter = computed(() =>
    Boolean(
      selected.value.date ||
        selected.value.startDate ||
        selected.value.endDate,
    ),
  );
  const hasActiveFilters = computed(() => activeKeys.value.length > 0);
  const hasActiveServerFilters = computed(() =>
    SERVER_FILTER_KEYS.some((key) => isFilterActive(selected.value, key)),
  );

  const clientFilters = computed(() =>
    Object.fromEntries(
      CLIENT_FILTER_KEYS.map((key) => [
        key,
        isFilterActive(selected.value, key)
          ? selected.value[key]
          : themeDefaults.value[key] || "",
      ]),
    ),
  );

  // A filter kind the shop has no values for is a select with nothing but
  // "All" in it, so it is dropped. Client-side kinds (format, availability)
  // have no values to fetch and are judged only by what the block enabled.
  const hasOptions = (key) =>
    !FILTER_SCHEMA[key]?.typesKey || optionsFor(key).length > 0;

  // Nothing is shown before the types answer: which kinds have values is
  // unknown until then, and a bar that appears and then loses half its selects
  // reads as broken. A failed request counts as answered — the type-based
  // kinds stay hidden, the rest still work.
  const visibleKeys = computed(() =>
    typesLoaded.value
      ? enabledKeys.value.filter((key) => !isHidden(key) && hasOptions(key))
      : [],
  );

  const hasFields = computed(() =>
    visibleKeys.value.some((key) => FILTER_SCHEMA[key]?.typesKey),
  );

  function set(key, value) {
    if (!FILTER_SCHEMA[key]) return;

    selected.value = { ...selected.value, [key]: value };
    changeHandler?.();
  }

  function patch(values) {
    selected.value = { ...selected.value, ...values };
    changeHandler?.();
  }

  function clear() {
    selected.value = emptyFilters();
    changeHandler?.();
  }

  function clearDates() {
    patch(rangeFilters(null));
  }

  function applyBlockSettings({ defaults = {}, enabled = [] } = {}) {
    const { hideOthers, ...names } = defaults;

    themeDefaultNames.value = names;
    hideOtherFilters.value = !!hideOthers;
    enabledKeys.value = enabled;
    themeDefaults.value = resolveDefaultsByName(names, eventTypes.value);
  }

  async function fetchTypes() {
    typesLoading.value = true;
    typesError.value = null;

    try {
      eventTypes.value = {
        ...EMPTY_TYPES,
        ...(await api.fetchTypes()),
      };
      themeDefaults.value = resolveDefaultsByName(
        themeDefaultNames.value,
        eventTypes.value,
      );
    } catch (e) {
      typesError.value = e;
    } finally {
      typesLoading.value = false;
      typesLoaded.value = true;
    }

    return eventTypes.value;
  }

  return {
    selected,
    eventTypes,
    themeDefaults,
    hideOtherFilters,
    enabledKeys,
    visibleKeys,
    typesLoading,
    typesLoaded,
    typesError,
    activeKeys,
    hasDateFilter,
    hasActiveFilters,
    hasFields,
    hasActiveServerFilters,
    clientFilters,
    optionsFor,
    hasOptions,
    isHidden,
    set,
    patch,
    clear,
    clearDates,
    onChange,
    applyBlockSettings,
    fetchTypes,
  };
});
