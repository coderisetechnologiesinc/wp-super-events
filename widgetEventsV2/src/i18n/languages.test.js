import { describe, expect, it } from "vitest";

import {
  SUPPORTED_LOCALES,
  isSupportedLocale,
  languageName,
  selectableLocales,
} from "./languages";

describe("supported locales", () => {
  it("covers the thirteen languages the app translates", () => {
    expect(SUPPORTED_LOCALES).toEqual([
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
    ]);
  });

  it("accepts the codes however the payload spells them", () => {
    expect(isSupportedLocale("ZH-CN")).toBe(true);
    expect(isSupportedLocale("zh_cn")).toBe(true);
    expect(isSupportedLocale(" fr ")).toBe(true);
    expect(isSupportedLocale("pt")).toBe(false);
  });
});

describe("selectableLocales", () => {
  it("keeps only translated languages the widget supports", () => {
    expect(selectableLocales(["fr", "pt", "en", "klingon"])).toEqual(["en", "fr"]);
  });

  it("orders them like the shared list, not like the payload", () => {
    expect(selectableLocales(["sv", "en", "zh-cn"])).toEqual(["zh-cn", "en", "sv"]);
  });

  it("returns nothing when the shop has no translations", () => {
    expect(selectableLocales([])).toEqual([]);
  });
});

describe("languageName", () => {
  it("uses the names from the shared app list", () => {
    expect(languageName("zh-cn")).toBe("Chinese");
    expect(languageName("no")).toBe("Norwegian");
    expect(languageName("sv")).toBe("Swedish");
  });

  it("falls back to the runtime for anything unexpected", () => {
    expect(languageName("pt")).toBe("Portuguese");
    expect(languageName("klingon")).toBe("klingon");
  });
});
