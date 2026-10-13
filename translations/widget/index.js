import zhCN from "./zh-cn.json";
import nl from "./nl.json";
import en from "./en.json";
import fr from "./fr.json";
import de from "./de.json";
import hi from "./hi.json";
import it from "./it.json";
import ja from "./ja.json";
import ko from "./ko.json";
import no from "./no.json";
import es from "./es.json";
import sv from "./sv.json";

const defaults = { "zh-cn": zhCN, nl, en, fr, de, hi, it, ja, ko, no, es, sv };
const clone = (value) => JSON.parse(JSON.stringify(value));
const objectOf = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};

export const translationsKeysTpl = clone(en);
export const defaultTranslationLanguages = Object.keys(defaults);
export const languagesCodeName = {
  "zh-cn": "zh-CN", nl: "nl", en: "en-US", fr: "fr", de: "de", hi: "hi",
  it: "it", ja: "ja", ko: "ko", no: "no", es: "es", sv: "sv",
};

// Each request gets independent editable dictionaries, never references to the
// JSON modules or another language's values.
export const getTranslationsTpl = () => clone(defaults);
export const filterSavedTranslations = (value) => Object.fromEntries(
  Object.entries(objectOf(value)).filter(([locale]) => !/^ru(?:[-_]|$)/i.test(locale.trim())),
);

export const mergeTranslations = (recipientTranslations = {}, injectedTranslations = {}) => {
  const overrides = objectOf(injectedTranslations);
  const merged = {};
  for (const [locale, sections] of Object.entries(objectOf(recipientTranslations))) {
    merged[locale] = {};
    const saved = objectOf(overrides[locale]);
    for (const [section, fields] of Object.entries(objectOf(sections))) {
      merged[locale][section] = {};
      const injected = objectOf(saved[section]);
      for (const [key, value] of Object.entries(objectOf(fields))) {
        merged[locale][section][key] = typeof injected[key] === "string" ? injected[key] : value;
      }
    }
  }
  return merged;
};

export const prepareWidgetTranslations = (widgetSettings, reset = false) => {
  const style = objectOf(widgetSettings);
  const saved = filterSavedTranslations(style.translations);
  return {
    ...style,
    ...(/^ru(?:[-_]|$)/i.test(style.widgets_default_language || "") ? { widgets_default_language: "en" } : {}),
    translations: reset ? getTranslationsTpl() : { ...saved, ...mergeTranslations(getTranslationsTpl(), saved) },
  };
};
