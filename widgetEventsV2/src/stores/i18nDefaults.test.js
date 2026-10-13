import { afterEach, it, expect, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useShopStore } from "./shop";
import { useI18nStore } from "./i18n";

const setup = () => {
  const pinia = createPinia();
  pinia._servvRuntime = { ajaxUrl: "/ajax", nonce: "fixture", config: {}, context: {}, container: { locale: "fr-FR" } };
  setActivePinia(pinia);
  return { shop: useShopStore(), i18n: useI18nStore() };
};
afterEach(() => vi.unstubAllGlobals());
it("offers twelve translated languages when the API has no saved translations", async () => {
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, status: 200, json: async () => ({ widget_style_settings: "", translations_widget: "" }) })));
  const { shop, i18n } = setup();
  await shop.fetchSettings();
  expect(i18n.offeredLocales).toHaveLength(12);
  expect(i18n.locale).toBe("fr");
  expect(i18n.t("mainWidget.bookButtonLabel")).toBe("Réserver maintenant");
  i18n.setLocale("ja");
  expect(i18n.t("mainWidget.bookButtonLabel")).toBe("今すぐ予約");
});
it("keeps shop overrides but excludes Russian even if the API still returns it", async () => {
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, status: 200, json: async () => ({ widget_style_settings: { widgets_default_language: "ru", translations: { fr: { mainWidget: { bookButtonLabel: "Custom" } }, ru: { mainWidget: { bookButtonLabel: "Russian" } } } } }) })));
  const { shop, i18n } = setup();
  await shop.fetchSettings();
  expect(i18n.t("mainWidget.bookButtonLabel")).toBe("Custom");
  expect(i18n.availableLocales).not.toContain("ru");
  i18n.setLocale("ru");
  expect(i18n.locale).toBe("en");
  expect(i18n.t("onProductWidget.memberFormMember")).toBe("Registrant");
});
