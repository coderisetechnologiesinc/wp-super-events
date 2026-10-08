export const SUPPORTED_LOCALES = [
  "zh-cn",
  "nl",
  "en",
  "fr",
  "de",
  "hi",
  "it",
  "ja",
  "ko",
  "no",
  "ru",
  "es",
  "sv",
];

const LANGUAGE_NAMES = {
  "zh-cn": "Chinese",
  nl: "Dutch",
  en: "English",
  fr: "French",
  de: "German",
  hi: "Hindi",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  no: "Norwegian",
  ru: "Russian",
  es: "Spanish",
  sv: "Swedish",
};

const normalize = (locale) => String(locale || "").trim().toLowerCase().replace("_", "-");

export const isSupportedLocale = (locale) => SUPPORTED_LOCALES.includes(normalize(locale));

export function languageName(locale) {
  const known = LANGUAGE_NAMES[normalize(locale)];

  if (known) return known;

  try {
    return new Intl.DisplayNames(["en"], { type: "language" }).of(locale) || locale;
  } catch {
    return locale;
  }
}

export function selectableLocales(available = []) {
  const byOrder = SUPPORTED_LOCALES.map((supported) =>
    available.find((locale) => normalize(locale) === supported),
  ).filter(Boolean);

  return byOrder;
}
