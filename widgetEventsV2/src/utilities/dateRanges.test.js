import { describe, expect, it } from "vitest";

import { matchesRange, quickRange, rangeFilters } from "./dateRanges";

const monday = new Date("2026-10-12T12:00:00Z");

describe("quickRange", () => {
  it("returns a single day for today and tomorrow", () => {
    expect(quickRange("today", { now: monday, timeZone: "UTC" })).toEqual({
      from: "2026-10-12",
      to: "2026-10-12",
    });
    expect(quickRange("tomorrow", { now: monday, timeZone: "UTC" })).toEqual({
      from: "2026-10-13",
      to: "2026-10-13",
    });
  });

  it("spans the week from the locale's first day", () => {
    expect(quickRange("week", { now: monday, timeZone: "UTC", firstDay: 1 })).toEqual({
      from: "2026-10-12",
      to: "2026-10-18",
    });
    expect(quickRange("week", { now: monday, timeZone: "UTC", firstDay: 7 })).toEqual({
      from: "2026-10-11",
      to: "2026-10-17",
    });
  });

  it("jumps to the coming saturday and sunday", () => {
    expect(quickRange("weekend", { now: monday, timeZone: "UTC" })).toEqual({
      from: "2026-10-17",
      to: "2026-10-18",
    });
  });

  it("reads the day from the selected timezone, not the runtime", () => {
    const lateEvening = new Date("2026-10-12T23:30:00Z");

    expect(quickRange("today", { now: lateEvening, timeZone: "Europe/Kyiv" }).from).toBe(
      "2026-10-13",
    );
    expect(quickRange("today", { now: lateEvening, timeZone: "America/Toronto" }).from).toBe(
      "2026-10-12",
    );
  });

  it("ignores an unknown range", () => {
    expect(quickRange("decade", { now: monday })).toBe(null);
  });
});

describe("rangeFilters", () => {
  it("sends a single day as the date filter", () => {
    expect(rangeFilters({ from: "2026-10-12", to: "2026-10-12" })).toEqual({
      date: "2026-10-12",
      startDate: "",
      endDate: "",
    });
  });

  it("sends a span as datetime bounds", () => {
    expect(rangeFilters({ from: "2026-10-12", to: "2026-10-18" })).toEqual({
      date: "",
      startDate: "2026-10-12T00:00:00",
      endDate: "2026-10-18T23:59:59",
    });
  });

  it("clears every date filter for an empty range", () => {
    expect(rangeFilters(null)).toEqual({ date: "", startDate: "", endDate: "" });
  });
});

describe("matchesRange", () => {
  const range = { from: "2026-10-12", to: "2026-10-18" };

  it("recognises the range it applied", () => {
    expect(matchesRange(rangeFilters(range), range)).toBe(true);
  });

  it("does not confuse a single day with a span", () => {
    expect(matchesRange({ date: "2026-10-12" }, range)).toBe(false);
    expect(matchesRange(rangeFilters(range), { from: "2026-10-12", to: "2026-10-12" })).toBe(
      false,
    );
  });
});
