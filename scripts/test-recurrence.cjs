const assert = require("node:assert/strict");
const { test } = require("node:test");
const path = require("node:path");
const babel = require("@babel/core");
const file = path.resolve(__dirname, "../src/utilities/recurrence.js");
const loader = require.extensions[".js"];
require.extensions[".js"] = (mod, filename) => {
  if (filename !== file) return loader(mod, filename);
  mod._compile(
    babel.transformFileSync(filename, {
      babelrc: false,
      configFile: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    }).code,
    filename,
  );
};
const { RECURRENCE_TYPES, recurrenceForType } = require(file);

test("the form offers daily, weekly and monthly patterns", () => {
  assert.deepEqual(
    RECURRENCE_TYPES.map(([type, label]) => [type, label]),
    [
      [1, "Daily"],
      [2, "Weekly"],
      [3, "Monthly"],
    ],
  );
});

test("switching type keeps only the fields that type defines", () => {
  const weekly = recurrenceForType(
    { type: 1, repeat_interval: 3, end_times: 4 },
    2,
    5,
  );
  // The event's own start day stands in until days are picked.
  assert.deepEqual(weekly.weekly_days, [5]);
  assert.equal(weekly.repeat_interval, 3);
  assert.equal(weekly.end_times, 4);

  const monthly = recurrenceForType({ ...weekly, weekly_days: [2, 4] }, 3, 5);
  assert.equal("weekly_days" in monthly, false);
  assert.equal(monthly.monthly_week, 1);
  assert.equal(monthly.monthly_week_day, 1);

  const daily = recurrenceForType(monthly, 1, 5);
  assert.deepEqual(Object.keys(daily).sort(), [
    "end_times",
    "repeat_interval",
    "type",
  ]);

  // A monthly pattern that already has a date of its own keeps it.
  const byDate = recurrenceForType({ type: 3, monthly_day: 12 }, 3, 5);
  assert.equal(byDate.monthly_day, 12);
  assert.equal("monthly_week" in byDate, false);
});

test("the last weekday of the month is -1, not a fifth week", () => {
  // The API reads 5 as "the fifth occurrence" and skips months that have only
  // four of that weekday; -1 is what means "last" (verified against the API).
  const last = recurrenceForType(
    { type: 3, monthly_week: -1, monthly_week_day: 6 },
    3,
  );
  assert.equal(last.monthly_week, -1);
  assert.equal(last.monthly_week_day, 6);
  // It also survives a detour through another pattern and back.
  const back = recurrenceForType(recurrenceForType(last, 2, 5), 3, 5);
  assert.equal(
    back.monthly_week,
    1,
    "a cleared monthly pattern restarts at First",
  );
  assert.equal("weekly_days" in back, false);
});

test("an end date survives a type change, and intervals default to 1", () => {
  const next = recurrenceForType(
    { type: 2, weekly_days: [2], end_date_time: "2026-11-01T00:00:00Z" },
    1,
  );
  assert.equal(next.end_date_time, "2026-11-01T00:00:00Z");
  assert.equal(next.repeat_interval, 1);
  assert.equal("end_times" in next, false);
});
