// Each recurrence type owns its own fields, and the API reads only those: a
// weekly_days left behind by a weekly pattern makes a monthly body ambiguous.
// Switching type therefore rebuilds the recurrence from the fields that type
// defines, the way the Shopify app's RecurringSettingsFormSection does.
// Weekdays are 1 Sunday through 7 Saturday.
export const RECURRENCE_TYPES = [
  [1, "Daily", "Every day, or every few days"],
  [2, "Weekly", "On chosen days of the week"],
  [3, "Monthly", "On a date or a weekday each month"],
];
export const recurrenceForType = (recurrence, type, defaultWeeklyDay = 1) => {
  const next = { ...(recurrence || {}), type: Number(type) };
  if (!next.repeat_interval) next.repeat_interval = 1;
  if (next.type !== 2) delete next.weekly_days;
  if (next.type !== 3) {
    delete next.monthly_day;
    delete next.monthly_week;
    delete next.monthly_week_day;
  }
  // A weekly pattern with no day, or a monthly one with neither a date nor a
  // weekday, is nothing the API can schedule.
  if (next.type === 2 && !next.weekly_days?.length)
    next.weekly_days = [Number(defaultWeeklyDay) || 1];
  if (next.type === 3 && !next.monthly_day && !next.monthly_week_day) {
    next.monthly_week = Number(recurrence?.monthly_week) || 1;
    next.monthly_week_day = Number(recurrence?.monthly_week_day) || 1;
  }
  return next;
};
