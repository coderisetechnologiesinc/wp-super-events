export const FALLBACK_LOCALE = "en";

const normalize = (value) => String(value || "").trim().toLowerCase().replace("_", "-");

const baseLanguage = (value) => normalize(value).split("-")[0];

export function resolveLocale(requested, available = [], defaultLocale = FALLBACK_LOCALE) {
  const pool = available.map(normalize);
  const candidates = [
    normalize(requested),
    baseLanguage(requested),
    normalize(defaultLocale),
    baseLanguage(defaultLocale),
    FALLBACK_LOCALE,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;

    const exact = pool.indexOf(candidate);
    if (exact >= 0) return available[exact];

    const prefixed = pool.findIndex((locale) => baseLanguage(locale) === candidate);
    if (prefixed >= 0) return available[prefixed];
  }

  return available[0] || null;
}

export function localeChain(requested, available = [], defaultLocale = FALLBACK_LOCALE) {
  const chain = [
    resolveLocale(requested, available, defaultLocale),
    resolveLocale(defaultLocale, available, defaultLocale),
    resolveLocale(FALLBACK_LOCALE, available, FALLBACK_LOCALE),
  ];

  return chain.filter((locale, index) => locale && chain.indexOf(locale) === index);
}

const readPath = (source, path) =>
  path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), source);

export function interpolate(template, vars) {
  if (typeof template !== "string" || !vars) return template;

  let result = template;

  for (const [key, value] of Object.entries(vars)) {
    result = result.split(`{${key}}`).join(String(value));
  }

  if (vars.count !== undefined) result = result.split("###").join(String(vars.count));

  return result;
}

export function createTranslator(translations = {}, { locale, defaultLocale } = {}) {
  const available = Object.keys(translations);
  const chain = localeChain(locale, available, defaultLocale);

  return (path, vars) => {
    for (const candidate of chain) {
      const value = readPath(translations[candidate], path);

      if (typeof value === "string" && value.length > 0) return interpolate(value, vars);
    }

    return interpolate(vars?.fallback ?? "", vars);
  };
}
