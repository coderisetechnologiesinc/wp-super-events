import { zonedDateKey } from "./calendar";

export const QUICK_RANGES = ["today", "tomorrow", "week", "weekend"];

const DAY = 86400000;

const shiftDays = (date, days) => new Date(date.getTime() + days * DAY);

export function zonedWeekday(date, timeZone) {
  const name = new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone || undefined,
    weekday: "short",
  }).format(date);

  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(name);
}

export function quickRange(kind, { now = new Date(), timeZone = "", firstDay = 1 } = {}) {
  const today = zonedDateKey(now, timeZone);

  if (kind === "today") return { from: today, to: today };
  if (kind === "tomorrow") {
    const key = zonedDateKey(shiftDays(now, 1), timeZone);

    return { from: key, to: key };
  }

  const weekday = zonedWeekday(now, timeZone);

  if (kind === "week") {
    const offset = (weekday - (firstDay % 7) + 7) % 7;

    return {
      from: zonedDateKey(shiftDays(now, -offset), timeZone),
      to: zonedDateKey(shiftDays(now, 6 - offset), timeZone),
    };
  }

  if (kind === "weekend") {
    const toSaturday = (6 - weekday + 7) % 7;

    return {
      from: zonedDateKey(shiftDays(now, toSaturday), timeZone),
      to: zonedDateKey(shiftDays(now, toSaturday + 1), timeZone),
    };
  }

  return null;
}

export const isSingleDay = (range) => !!range && range.from === range.to;

export function rangeFilters(range) {
  if (!range) return { date: "", startDate: "", endDate: "" };

  if (isSingleDay(range)) return { date: range.from, startDate: "", endDate: "" };

  return { date: "", startDate: `${range.from}T00:00:00`, endDate: `${range.to}T23:59:59` };
}

export function matchesRange(filters, range) {
  const wanted = rangeFilters(range);

  return (
    (filters.date || "") === wanted.date &&
    (filters.startDate || "") === wanted.startDate &&
    (filters.endDate || "") === wanted.endDate
  );
}
