import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { selectableLocales } from "@/i18n/languages";
import { FALLBACK_LOCALE, createTranslator, resolveLocale } from "@/i18n/translate";
import { useShopStore } from "./shop";

export const useI18nStore = defineStore("i18n", () => {
  const shop = useShopStore();
  const requested = ref(null);

  const translations = computed(() => shop.style.translations || {});
  const availableLocales = computed(() => Object.keys(translations.value));
  const offeredLocales = computed(() => selectableLocales(availableLocales.value));
  const defaultLocale = computed(
    () => shop.style.widgets_default_language || FALLBACK_LOCALE,
  );

  const locale = computed(() =>
    resolveLocale(
      requested.value || shop.container.locale,
      availableLocales.value,
      defaultLocale.value,
    ),
  );

  const translator = computed(() =>
    createTranslator(translations.value, {
      locale: locale.value,
      defaultLocale: defaultLocale.value,
    }),
  );

  const t = (path, vars) => translator.value(path, vars);

  // "1 item" / "7 items". The singular has its own key, the same pair the v1
  // widget and the admin's translation defaults use, so wording a shop already
  // translated keeps working here.
  const itemsLabel = (count) =>
    Number(count) === 1
      ? t("mainWidget.singleEventItemsCounterLabel", { fallback: "item" })
      : t("mainWidget.itemsCounterLabel", { fallback: "items" });

  // The count and its word, in the order the locale writes them.
  const itemsCount = (count) => `${Number(count) || 0} ${itemsLabel(count)}`;

  function setLocale(next) {
    requested.value = next;
  }

  return {
    requested,
    locale,
    availableLocales,
    offeredLocales,
    defaultLocale,
    t,
    itemsLabel,
    itemsCount,
    setLocale,
  };
});
