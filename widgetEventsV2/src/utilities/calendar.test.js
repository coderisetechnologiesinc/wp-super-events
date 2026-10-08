import { describe, expect, it } from "vitest";

import {
  addMonths,
  buildMonthGrid,
  dateKey,
  firstDayOfWeek,
  monthKey,
  weekdayNames,
  zonedDateKey,
} from "./calendar";

const september2026 = new Date(2026, 8, 1);

describe("buildMonthGrid", () => {
  it("pads the lead so the first day lands on its weekday", () => {
    const cells = buildMonthGrid(september2026, { firstDay: 1 });

    expect(cells.slice(0, 1)).toEqual([null]);
    expect(cells[1]).toMatchObject({ day: 1, key: "2026-09-01" });
  });

  it("shifts the lead when the week starts on sunday", () => {
    const cells = buildMonthGrid(september2026, { firstDay: 7 });

    expect(cells.slice(0, 2)).toEqual([null, null]);
    expect(cells[2]).toMatchObject({ day: 1 });
  });

  it("always fills whole weeks", () => {
    for (let m = 0; m < 12; m += 1) {
      expect(buildMonthGrid(new Date(2026, m, 1), { firstDay: 1 }).length % 7).toBe(0);
    }
  });

  it("covers every day of the month exactly once", () => {
    const days = buildMonthGrid(new Date(2024, 1, 1), { firstDay: 1 })
      .filter(Boolean)
      .map((cell) => cell.day);

    expect(days).toHaveLength(29);
    expect(days.at(-1)).toBe(29);
  });

  it("fills the pads with adjacent months when asked", () => {
    const cells = buildMonthGrid(september2026, { firstDay: 7, adjacent: true });

    expect(cells).not.toContain(null);
    expect(cells[0]).toMatchObject({ day: 30, key: "2026-08-30", outside: true });
    expect(cells[1]).toMatchObject({ day: 31, key: "2026-08-31", outside: true });
    expect(cells[2]).toMatchObject({ day: 1, key: "2026-09-01", outside: false });
    expect(cells.at(-1)).toMatchObject({ key: "2026-10-03", outside: true });
  });

  it("keeps whole weeks and a single run of in-month days with adjacent on", () => {
    for (let m = 0; m < 12; m += 1) {
      const cells = buildMonthGrid(new Date(2026, m, 1), { firstDay: 1, adjacent: true });
      const inMonth = cells.filter((cell) => !cell.outside);
      const firstIndex = cells.findIndex((cell) => !cell.outside);

      expect(cells.length % 7).toBe(0);
      expect(cells.slice(firstIndex, firstIndex + inMonth.length)).toEqual(inMonth);
      expect(inMonth.at(-1).day).toBe(new Date(2026, m + 1, 0).getDate());
    }
  });
});

describe("keys", () => {
  it("zero pads month and day", () => {
    expect(monthKey(new Date(2026, 8, 4))).toBe("2026-09");
    expect(dateKey(new Date(2026, 8, 4))).toBe("2026-09-04");
  });

  it("does not drift across a month boundary", () => {
    expect(monthKey(addMonths(new Date(2026, 11, 31), 1))).toBe("2027-01");
    expect(monthKey(addMonths(new Date(2026, 0, 31), -1))).toBe("2025-12");
  });
});

describe("weekdayNames", () => {
  it("starts on monday", () => {
    expect(weekdayNames("en", 1)[0]).toMatch(/^Mon/);
    expect(weekdayNames("en", 1).at(-1)).toMatch(/^Sun/);
  });

  it("starts on sunday", () => {
    expect(weekdayNames("en", 7)[0]).toMatch(/^Sun/);
  });

  it("supports the narrow format for tight containers", () => {
    const narrow = weekdayNames("en", 1, "narrow");

    expect(narrow).toHaveLength(7);
    expect(narrow.every((name) => name.length <= 2)).toBe(true);
  });

  it("returns seven localized names", () => {
    expect(weekdayNames("fr", 1)).toHaveLength(7);
    expect(weekdayNames("fr", 1)[0]).not.toBe(weekdayNames("en", 1)[0]);
  });
});

describe("firstDayOfWeek", () => {
  it("gives sunday for en-US and monday for most of europe", () => {
    expect(firstDayOfWeek("en-US")).toBe(7);
    expect(firstDayOfWeek("uk-UA")).toBe(1);
  });
});

describe("zonedDateKey", () => {
  const lateEvening = new Date("2026-10-12T23:30:00Z");

  it("labels an instant with the day it falls on in the given zone", () => {
    expect(zonedDateKey(lateEvening, "Europe/Kyiv")).toBe("2026-10-13");
    expect(zonedDateKey(lateEvening, "America/Toronto")).toBe("2026-10-12");
    expect(zonedDateKey(lateEvening, "UTC")).toBe("2026-10-12");
  });

  it("crosses the month and year boundary with the zone", () => {
    const newYearEve = new Date("2026-12-31T23:00:00Z");

    expect(zonedDateKey(newYearEve, "Asia/Tokyo")).toBe("2027-01-01");
    expect(zonedDateKey(newYearEve, "UTC")).toBe("2026-12-31");
  });

  it("falls back to the browser day without a zone or on a bad one", () => {
    expect(zonedDateKey(lateEvening, "")).toBe(dateKey(lateEvening));
    expect(zonedDateKey(lateEvening, "Not/AZone")).toBe(dateKey(lateEvening));
  });

  it("returns nothing for a missing date", () => {
    expect(zonedDateKey(null, "UTC")).toBe("");
  });
});
