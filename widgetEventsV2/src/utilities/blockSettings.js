import { FILTER_SCHEMA, THEME_DEFAULT_FILTER_KEYS } from "@/api/filters";

const GROUPS = {
  layout: {
    viewMode: "view_mode",
    eventsPerPage: "events_per_page",
    drawerSide: "drawer_side",
    drawerWidth: "drawer_width",
    calendarPosition: "calendar_position",
    filtersPosition: "filters_position",
  },
  controls: {
    search: "show_search",
    languageSelector: "show_language_selector",
    timezoneSelector: "show_timezone_selector",
    quickDateFilters: "show_quick_date_filters",
    mobileDateStrip: "show_mobile_date_strip",
    summaryCards: "show_summary_cards",
    shareButton: "show_share_button",
    pagination: "show_pagination",
    pageSizeSelector: "show_page_size_selector",
    viewModeSwitch: "show_view_mode_switch",
    separatorBadges: "show_separator_badges",
  },
  card: {
    imageAspectRatio: "image_aspect_ratio",
    eventImages: "show_event_images",
    descriptionWords: "card_description_words",
    seatsRemaining: "show_seats_remaining",
    price: "show_price",
    badges: "show_badges",
    gridColumns: "grid_columns_desktop",
  },
};

export const groupOf = (config, name) =>
  Object.fromEntries(
    Object.entries(GROUPS[name]).map(([key, id]) => [key, config[id]]),
  );

export const defaultFiltersOf = (config) => ({
  ...Object.fromEntries(
    THEME_DEFAULT_FILTER_KEYS.map((key) => [
      key,
      config[`default_filter_${key}`] || "",
    ]),
  ),
  hideOthers: !!config.default_filter_hide_others,
});

export const enabledFilterKeys = (apiSettings) => {
  const available = apiSettings?.available_filters;

  if (!Array.isArray(available)) return [];

  return Object.keys(FILTER_SCHEMA).filter((key) =>
    available.includes(FILTER_SCHEMA[key].typesKey),
  );
};
