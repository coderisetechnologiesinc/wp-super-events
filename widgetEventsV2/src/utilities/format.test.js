import { describe, expect, it } from "vitest";

import {
  dayKey,
  formatAvailability,
  formatDayHeading,
  formatDuration,
  formatPrice,
  formatTime,
  formatTimeZone,
  truncateWords,
} from "./format";

const instant = new Date("2026-09-14T15:47:00Z");

describe("formatTime", () => {
  it("renders the wall clock of the event timezone, not the viewer's", () => {
    expect(formatTime(instant, { timeZone: "America/Toronto", hour12: true })).toBe("11:47 AM");
    expect(formatTime(instant, { timeZone: "Europe/Kyiv", hour12: true })).toBe("6:47 PM");
  });

  it("honours 24 hour shops", () => {
    expect(formatTime(instant, { timeZone: "America/Toronto", hour12: false })).toBe("11:47");
  });
});

describe("formatTimeZone", () => {
  it("names the event timezone", () => {
    expect(formatTimeZone(instant, { timeZone: "America/Toronto" })).toBe("EDT");
  });

  it.each([
    ["Europe/Kyiv", "EEST"],
    ["Europe/Berlin", "CEST"],
    ["Europe/Lisbon", "WEST"],
    ["Asia/Tokyo", "JST"],
    ["Australia/Sydney", "AEST"],
  ])("abbreviates %s instead of showing an offset", (timeZone, expected) => {
    expect(formatTimeZone(instant, { timeZone })).toBe(expected);
  });

  it.each([
    ["Europe/Kyiv", "EET"],
    ["Europe/Berlin", "CET"],
  ])("drops the standard word for %s in winter", (timeZone, expected) => {
    expect(formatTimeZone(new Date("2026-01-14T15:47:00Z"), { timeZone })).toBe(expected);
  });

  it("keeps abbreviations the platform already provides", () => {
    expect(formatTimeZone(instant, { timeZone: "UTC" })).toBe("UTC");
    expect(formatTimeZone(new Date("2026-01-14T15:47:00Z"), { timeZone: "Europe/London" })).toBe(
      "GMT",
    );
  });
});

describe("formatDuration", () => {
  it.each([
    [60, "1h"],
    [90, "1h 30m"],
    [45, "45m"],
    [0, ""],
  ])("%i minutes is %s", (minutes, expected) => {
    expect(formatDuration(minutes)).toBe(expected);
  });
});

describe("formatPrice", () => {
  it("shows the free label instead of a zero", () => {
    expect(formatPrice(0, { freeLabel: "Free" })).toBe("Free");
  });

  it("formats with the shop currency", () => {
    expect(formatPrice(45, { currency: "USD" })).toBe("$45.00");
  });
});

describe("truncateWords", () => {
  it("strips markup and cuts to the word limit", () => {
    expect(truncateWords("<p>one two three four</p>", 2)).toBe("one two…");
  });

  it("returns the text untouched without a limit", () => {
    expect(truncateWords("one two three", 0)).toBe("one two three");
  });
});

describe("formatAvailability", () => {
  const t = (_path, { fallback }) => fallback;

  it("says nothing when the shop does not track the quantity", () => {
    expect(formatAvailability({ availability: "available", seatsRemaining: null }, t)).toBe("");
  });

  it("counts the seats that are left", () => {
    expect(formatAvailability({ availability: "available", seatsRemaining: 12 }, t)).toBe("12 left");
  });

  it("reports a sold out event without a count", () => {
    expect(formatAvailability({ availability: "sold-out", seatsRemaining: 0 }, t)).toBe("Sold out");
  });
});

describe("dayKey", () => {
  it("buckets by the calendar day of the display timezone, not UTC", () => {
    const late = new Date("2026-09-25T23:30:00Z");

    expect(dayKey(late, { timeZone: "UTC" })).toBe("2026-09-25");
    expect(dayKey(late, { timeZone: "Europe/Kiev" })).toBe("2026-09-26");
  });

  it("returns an empty string without a date", () => {
    expect(dayKey(null, { timeZone: "UTC" })).toBe("");
  });
});

describe("formatDayHeading", () => {
  it("spells out the weekday and month for the separator", () => {
    expect(
      formatDayHeading(new Date("2026-09-25T12:00:00Z"), { locale: "en", timeZone: "UTC" }),
    ).toBe("Friday, September 25");
  });
});
