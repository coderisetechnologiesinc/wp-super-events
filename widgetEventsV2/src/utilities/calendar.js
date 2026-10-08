const MONDAY = 1;
const SUNDAY = 7;

export const pad = (value) => String(value).padStart(2, "0");

export const monthKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;

export const dateKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

export function zonedDateKey(date, timeZone) {
  if (!date) return "";
  if (!timeZone) return dateKey(date);

  try {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } catch {
    return dateKey(date);
  }
}

export const startOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);

export const addMonths = (date, amount) =>
  new Date(date.getFullYear(), date.getMonth() + amount, 1);

export function firstDayOfWeek(locale) {
  try {
    const info = new Intl.Locale(locale).getWeekInfo?.();

    if (info?.firstDay) return info.firstDay;
  } catch {
    /* falls through to the language default below */
  }

  return /^(en|ja|pt-BR|he|ar)\b/i.test(locale || "") ? SUNDAY : MONDAY;
}

export function weekdayNames(locale = "en", firstDay = MONDAY, format = "short") {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: format });
  const names = [];

  for (let offset = 0; offset < 7; offset += 1) {
    const isoDay = ((firstDay - 1 + offset) % 7) + 1;
    const sample = new Date(Date.UTC(2024, 0, 7 + isoDay));

    names.push(formatter.format(sample));
  }

  return names;
}

export function buildMonthGrid(month, { firstDay = MONDAY, adjacent = false } = {}) {
  const first = startOfMonth(month);
  const isoFirst = first.getDay() === 0 ? SUNDAY : first.getDay();
  const lead = (isoFirst - firstDay + 7) % 7;
  const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const cells = [];

  const cellFor = (dayOfMonth, outside) => {
    const date = new Date(first.getFullYear(), first.getMonth(), dayOfMonth);

    return { day: date.getDate(), date, key: dateKey(date), outside };
  };

  for (let i = lead; i > 0; i -= 1) cells.push(adjacent ? cellFor(1 - i, true) : null);

  for (let day = 1; day <= daysInMonth; day += 1) cells.push(cellFor(day, false));

  for (let trail = 1; cells.length % 7 !== 0; trail += 1) {
    cells.push(adjacent ? cellFor(daysInMonth + trail, true) : null);
  }

  return cells;
}
