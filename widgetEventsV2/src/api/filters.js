export const FILTER_SCHEMA = {
  category: {
    param: "category_id",
    typesKey: "categories",
    allLabel: "All categories",
    label: "Category",
    multiple: true,
    themeDefault: true,
  },
  team: {
    param: "team_id",
    typesKey: "teams",
    allLabel: "All teams",
    label: "Team",
    multiple: true,
    themeDefault: true,
  },
  member: {
    param: "member_id",
    typesKey: "members",
    allLabel: "All members",
    label: "Host",
    multiple: true,
    themeDefault: true,
  },
  location: {
    param: "location_id",
    typesKey: "locations",
    allLabel: "All locations",
    label: "Location",
    multiple: true,
    themeDefault: true,
  },
  language: {
    param: "language_id",
    typesKey: "languages",
    allLabel: "All languages",
    label: "Language",
    multiple: true,
    themeDefault: true,
  },
  search: {
    param: "search",
    label: "Search",
  },
  date: {
    param: "date",
    label: "Date",
  },
  startDate: {
    param: "start_datetime",
  },
  endDate: {
    param: "end_datetime",
  },
  format: {
    scope: "client",
    label: "Format",
    themeDefault: true,
  },
  availability: {
    scope: "client",
    label: "Availability",
    themeDefault: true,
  },
};

export const FILTER_KEYS = Object.keys(FILTER_SCHEMA);

export const SERVER_FILTER_KEYS = FILTER_KEYS.filter(
  (key) => FILTER_SCHEMA[key].scope !== "client",
);

export const CLIENT_FILTER_KEYS = FILTER_KEYS.filter(
  (key) => FILTER_SCHEMA[key].scope === "client",
);

export const THEME_DEFAULT_FILTER_KEYS = FILTER_KEYS.filter(
  (key) => FILTER_SCHEMA[key].themeDefault,
);

const isEmpty = (value) =>
  value === null ||
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);

export function emptyFilters() {
  return Object.fromEntries(
    FILTER_KEYS.map((key) => [key, FILTER_SCHEMA[key].multiple ? [] : ""]),
  );
}

export function isFilterActive(filters, key) {
  return !isEmpty(filters?.[key]);
}

export function activeFilterKeys(filters) {
  return FILTER_KEYS.filter((key) => isFilterActive(filters, key));
}

export function toRequestParams(filters = {}, { defaults = {} } = {}) {
  const params = {};

  for (const key of SERVER_FILTER_KEYS) {
    const value = isFilterActive(filters, key) ? filters[key] : defaults[key];

    if (isEmpty(value)) continue;

    params[FILTER_SCHEMA[key].param] = value;
  }

  return params;
}

export function resolveDefaultsByName(namedDefaults = {}, eventTypes = {}) {
  const resolved = {};

  for (const key of THEME_DEFAULT_FILTER_KEYS) {
    const raw = String(namedDefaults[key] || "").trim();

    if (!raw) continue;

    if (FILTER_SCHEMA[key].scope === "client") {
      resolved[key] = raw;
      continue;
    }

    const options = eventTypes[FILTER_SCHEMA[key].typesKey] || [];
    const names = raw.split('$').map((name) => name.trim().toLowerCase()).filter(Boolean);
    const matches = options.filter((option) => names.includes(String(option.name || '').trim().toLowerCase()) || names.includes(String(option.id)));
    if (matches.length) resolved[key] = FILTER_SCHEMA[key].multiple ? matches.map((option) => option.id) : matches[0].id;
  }

  return resolved;
}
