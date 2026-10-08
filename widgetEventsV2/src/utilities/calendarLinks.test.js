import { describe, expect, it } from "vitest";

import { endOf, googleCalendarUrl, icsFile, outlookCalendarUrl, toStamp } from "./calendarLinks";

const event = {
  id: 7,
  title: "Morning Yoga",
  description: "<p>Relax; breathe</p>",
  startsAt: new Date("2026-10-12T09:00:00Z"),
  duration: 90,
};

describe("event end", () => {
  it("prefers the given end time", () => {
    const ends = new Date("2026-10-12T10:00:00Z");

    expect(endOf({ ...event, endsAt: ends })).toBe(ends);
  });

  it("derives the end from the duration", () => {
    expect(endOf(event).toISOString()).toBe("2026-10-12T10:30:00.000Z");
  });
});

describe("toStamp", () => {
  it("formats an instant as a utc calendar stamp", () => {
    expect(toStamp(event.startsAt)).toBe("20261012T090000Z");
  });
});

describe("google and outlook links", () => {
  it("carries the title, span and page url", () => {
    const link = new URL(googleCalendarUrl(event, { url: "https://shop.test/p" }));

    expect(link.searchParams.get("text")).toBe("Morning Yoga");
    expect(link.searchParams.get("dates")).toBe("20261012T090000Z/20261012T103000Z");
    expect(link.searchParams.get("details")).toContain("https://shop.test/p");
  });

  it("strips html out of the description", () => {
    const link = new URL(googleCalendarUrl(event));

    expect(link.searchParams.get("details")).toBe("Relax; breathe");
  });

  it("sends iso bounds to outlook", () => {
    const link = new URL(outlookCalendarUrl(event));

    expect(link.searchParams.get("startdt")).toBe("2026-10-12T09:00:00.000Z");
    expect(link.searchParams.get("enddt")).toBe("2026-10-12T10:30:00.000Z");
  });

  it("returns nothing for an event without a start", () => {
    expect(googleCalendarUrl({ title: "x" })).toBe("");
    expect(outlookCalendarUrl(null)).toBe("");
  });
});

describe("ics file", () => {
  const file = icsFile(event, { url: "https://shop.test/p" });

  it("wraps one event with crlf line endings", () => {
    expect(file.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
    expect(file.trimEnd().endsWith("END:VCALENDAR")).toBe(true);
    expect(file).toContain("DTSTART:20261012T090000Z");
    expect(file).toContain("DTEND:20261012T103000Z");
  });

  it("escapes the characters the format reserves", () => {
    expect(file).toContain("SUMMARY:Morning Yoga");
    expect(file).toContain("DESCRIPTION:Relax\\; breathe\\nhttps://shop.test/p");
  });
});
