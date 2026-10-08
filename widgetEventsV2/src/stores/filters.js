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

  const visibleKeys = computed(() =>
    enabledKeys.value.filter((key) => !isHidden(key)),
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
    typesError,
    activeKeys,
    hasActiveFilters,
    hasFields,
    hasActiveServerFilters,
    clientFilters,
    optionsFor,
    isHidden,
    set,
    patch,
    clear,
    onChange,
    applyBlockSettings,
    fetchTypes,
  };
});
