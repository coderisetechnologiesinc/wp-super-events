import Vue from "vue";
import VueI18n from "vue-i18n";
import forEach from "lodash.foreach";
import {
  defaultTranslationLanguages,
  getTranslationsTpl,
  mergeTranslations,
} from "../../servicesShared/translations";

Vue.use(VueI18n);
let currentAppInstance = null;

let supportedLanguagesList = [...defaultTranslationLanguages];

const messages = mergeTranslations(getTranslationsTpl(), {});

export const setAppInstanceForI18n = (appInstance) => {
  currentAppInstance = appInstance;
};

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export const setTranslationMessages = (messagesScope = {}) => {
  // supportedLanguagesList = [];
  const mergedMessagesScope = mergeTranslations(
    getTranslationsTpl(),
    messagesScope
  );

  forEach(mergedMessagesScope, (langMessages, lang) => {
    if (!supportedLanguagesList.includes(lang)) supportedLanguagesList.push(lang);
    i18n.setLocaleMessage(lang, langMessages);
  });
};
export const setCurrentLanguage = (newLang = "en") => {
  if (!currentAppInstance) return;
  if (!supportedLanguagesList.includes(newLang)) newLang = "en";
  currentAppInstance.$i18n.locale = newLang;
};

export const detectPageLanguage = (successCallback) => {
  const { pathname } = window.location;
  const lang = pathname.split("/");

  if (lang && lang[1] && supportedLanguagesList.includes(lang[1])) {
    // setCurrentLanguage(lang[1]);
    successCallback(lang[1]);
  } else if (lang && lang[1] && !supportedLanguagesList.includes(lang[1])) {
    successCallback("");
  } else if (lang && !lang[1]) {
    successCallback("");
  }
};
