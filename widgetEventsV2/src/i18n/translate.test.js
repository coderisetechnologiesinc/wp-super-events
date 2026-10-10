import { describe, expect, it } from "vitest";

import { createTranslator, interpolate, localeChain, resolveLocale } from "./translate";

const translations = {
  en: {
    mainWidget: { bookButtonLabel: "Book now", eventsListTitle: "Events list" },
    onProductWidget: { remainingBookingsLabel: "Hurry! Only ### left in stock!" },
  },
  fr: { mainWidget: { bookButtonLabel: "Réserver" } },
  "zh-cn": { mainWidget: { bookButtonLabel: "立即预订" } },
};

const available = Object.keys(translations);

describe("resolveLocale", () => {
  it("matches an exact locale", () => {
    expect(resolveLocale("fr", available, "en")).toBe("fr");
  });

  it("matches a regional locale against its base language", () => {
    expect(resolveLocale("fr-CA", available, "en")).toBe("fr");
  });

  it("matches a base language against a regional locale", () => {
    expect(resolveLocale("zh", available, "en")).toBe("zh-cn");
  });

  it("falls back to the shop default when the locale is unknown", () => {
    expect(resolveLocale("pt-BR", available, "fr")).toBe("fr");
  });

  it("ignores case and underscores", () => {
    expect(resolveLocale("ZH_CN", available, "en")).toBe("zh-cn");
  });
});

describe("localeChain", () => {
  it("orders requested, shop default, then english without duplicates", () => {
    expect(localeChain("fr", available, "en")).toEqual(["fr", "en"]);
    expect(localeChain("en", available, "en")).toEqual(["en"]);
  });
});

describe("createTranslator", () => {
  it("returns the requested locale string", () => {
    const t = createTranslator(translations, { locale: "fr", defaultLocale: "en" });

    expect(t("mainWidget.bookButtonLabel")).toBe("Réserver");
  });

  it("falls through to the next locale when a key is missing", () => {
    const t = createTranslator(translations, { locale: "fr", defaultLocale: "en" });

    expect(t("mainWidget.eventsListTitle")).toBe("Events list");
  });

  it("substitutes the ### placeholder the api uses", () => {
    const t = createTranslator(translations, { locale: "en", defaultLocale: "en" });

    expect(t("onProductWidget.remainingBookingsLabel", { count: 3 })).toBe(
      "Only 3 left!",
    );
  });

  it('preserves custom availability translations', () => {
    const t = createTranslator({ en: { onProductWidget: { remainingBookingsLabel: 'Only ### seats remaining' } } }, { locale: 'en' });
    expect(t('onProductWidget.remainingBookingsLabel', { count: 1 })).toBe('Only 1 seats remaining');
  });

  it("returns the given fallback when no locale has the key", () => {
    const t = createTranslator(translations, { locale: "en", defaultLocale: "en" });

    expect(t("mainWidget.missingKey", { fallback: "Details" })).toBe("Details");
    expect(t("mainWidget.missingKey")).toBe("");
  });

  it("survives empty translations", () => {
    expect(createTranslator({}, {})("mainWidget.bookButtonLabel", { fallback: "Book" })).toBe(
      "Book",
    );
  });
});

describe("interpolate", () => {
  it("replaces named placeholders", () => {
    expect(interpolate("{count} items", { count: 4 })).toBe("4 items");
  });
});
