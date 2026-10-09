import { computed, ref } from "vue";
import { FILTER_SCHEMA } from "@/api/filters";
import { defineStore } from "pinia";

import { useRuntimeStore } from "@/api/wordpress";
import { normalizeShopSettings } from "@/api/normalize";
import {
  defaultFiltersOf,
  groupOf,
} from "@/utilities/blockSettings";

const isNotDisabled = (value) => value !== false && value !== "false" && value !== 0;

export const useShopStore = defineStore("shop", () => {
  const { api, runtime } = useRuntimeStore();
  const context = ref(runtime.context);
  const config = ref(runtime.config);
  const container = ref(runtime.container);
  const settings = ref(normalizeShopSettings(null));
  const accessValid = ref(false);
  const loading = ref(false);
  const error = ref(null);

  const isCustomerLoggedIn = computed(() => !!context.value.customerId);
  const currency = computed(
    () => context.value.shopCurrency || container.value.currency,
  );

  const style = computed(() => settings.value.style);

  const layout = computed(() => groupOf(config.value, "layout"));
  const controls = computed(() => groupOf(config.value, "controls"));
  const card = computed(() => groupOf(config.value, "card"));
  const defaultFilters = computed(() => defaultFiltersOf(config.value));
  const enabledFilters = computed(() =>
    Object.keys(FILTER_SCHEMA).filter((key) => FILTER_SCHEMA[key].typesKey).filter(
      (key) => config.value[`filter_${key}`] !== false,
    ),
  );
  const hideTimeZone = computed(() => !!settings.value.raw?.hide_time_zone);

  const booking = computed(() => ({
    freeRegistration: true,
    skipCaptcha: true,
    marketingConsent: !!settings.value.raw?.free_checkout_marketing_checkbox,
    waitingList: !!style.value.enable_waiting_list,
    privacyPolicyUrl: style.value.privacy_policy_link || "",
    termsOfUseUrl: style.value.terms_of_use_link || "",
  }));

  const showLanguageSelector = computed(
    () => isNotDisabled(controls.value.languageSelector),
  );
  const showViewToggle = computed(
    () => isNotDisabled(controls.value.viewModeSwitch),
  );
  const showEventImages = computed(
    () => isNotDisabled(card.value.eventImages),
  );
  const showSeparatorBadges = computed(
    () => isNotDisabled(controls.value.separatorBadges) &&
      true,
  );
  const showSeats = computed(
    () => isNotDisabled(card.value.seatsRemaining),
  );
  const descriptionWordLimit = computed(
    () => Number(card.value.descriptionWords) || 0,
  );
  const showQuickDateFilters = computed(
    () => !!controls.value.quickDateFilters && !isCalendarView.value,
  );
  const filtersInAside = computed(
    () => layout.value.filtersPosition === "aside",
  );
  const showCalendar = computed(
    () => !!layout.value.calendarPosition &&
      layout.value.calendarPosition !== "hidden" &&
      !isCalendarView.value,
  );
  const redirectToProductPage = computed(
    () => !!config.value.redirect_to_event_page,
  );
  // Opening an event goes to its WordPress page instead of the drawer.
  const openEventPage = computed(() => !!config.value.open_event_page);
  const shareDomainSuffix = computed(
    () => config.value.custom_domain_suffix ||
      style.value.ew_custom_domain_suffix ||
      "",
  );

  const viewModeOverride = ref("");

  const viewMode = computed(() => {
    if (viewModeOverride.value) return viewModeOverride.value;

    const fromBlock = layout.value.viewMode;

    if (fromBlock && fromBlock !== "default") return fromBlock;

    return style.value.ew_events_list_view || "list";
  });

  const isCategoryView = computed(() => viewMode.value === "category");
  const isCalendarView = computed(() => viewMode.value === "calendar");

  function setViewMode(next) {
    viewModeOverride.value = next || "";
  }
  const eventsPerPage = computed(
    () => layout.value.eventsPerPage || style.value.ew_events_list_page_size_default || 10,
  );

  function refreshContext() {
    context.value = runtime.context;
  }

  async function fetchSettings() {
    loading.value = true;
    error.value = null;

    try {
      settings.value = normalizeShopSettings(await api.fetchSettings());
      accessValid.value = true;
    } catch (e) {
      error.value = e;
      accessValid.value = false;
    } finally {
      loading.value = false;
    }

    return settings.value;
  }

  return {
    context,
    config,
    container,
    settings,
    style,
    accessValid,
    loading,
    error,
    isCustomerLoggedIn,
    currency,
    layout,
    controls,
    card,
    enabledFilters,
    defaultFilters,
    booking,
    hideTimeZone,
    showLanguageSelector,
    showViewToggle,
    showEventImages,
    showSeparatorBadges,
    showSeats,
    showCalendar,
    showQuickDateFilters,
    filtersInAside,
    isCategoryView,
    isCalendarView,
    redirectToProductPage,
    openEventPage,
    descriptionWordLimit,
    shareDomainSuffix,
    viewMode,
    eventsPerPage,
    setViewMode,
    refreshContext,
    fetchSettings,
  };
});
