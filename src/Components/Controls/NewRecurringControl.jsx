import React, { Fragment, useEffect, useState } from "react";
import NewSelectControl from "./NewSelectControl";
import InlineStack from "../Containers/InlineStack";
import BlockStack from "../Containers/BlockStack";
import CheckboxItem from "./CheckboxItem";
import RadioGroup from "./RadioGroup";
import NewButtonGroup from "../Controls/NewButtonGroup";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
const NewRecurringControl = ({ recurrence, onChange }) => {
  const {
    type,
    repeat_interval = 1,
    weekly_days = [],
    monthly_day = 1,
    monthly_week = 1,
    monthly_week_day = 1,
  } = recurrence;

  const [monthlyType, setMonthlyType] = useState(!monthly_week_day);

  useEffect(() => {
    if (recurrence.monthly_week_day) setMonthlyType(false);
  }, [recurrence.monthly_week_day]);

  /* ---------------------------
     Recurrence type
  --------------------------- */

  const handleRecurrenceTypeChange = (val) => {
    const base = recurrence ?? {
      type: val,
      repeat_interval: 1,
    };

    const next = { ...base, type: val };

    if (val === 1) {
      delete next.weekly_days;
      delete next.monthly_day;
      delete next.monthly_week;
      delete next.monthly_week_day;
    }

    if (val === 2) {
      delete next.monthly_day;
      delete next.monthly_week;
      delete next.monthly_week_day;
    }

    if (val === 3) {
      delete next.weekly_days;
      if (!next.monthly_day && !next.monthly_week_day) {
        next.monthly_week = Number(monthly_week) || 1;
        next.monthly_week_day = Number(monthly_week_day) || 1;
      }
    }

    onChange(next);
  };

  const RECURRENCE_LABELS = {
    1: "Daily",
    2: "Weekly",
    3: "Monthly",
  };

  const LABEL_TO_TYPE = {
    Daily: 1,
    Weekly: 2,
    Monthly: 3,
  };

  useEffect(() => {
    if (!recurrence) {
      onChange({
        type: 1,
        repeat_interval: 1,
      });
    }
  }, []);

  /* ---------------------------
     Options
  --------------------------- */

  const dailyRepeatOptions = Array.from({ length: 14 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} day${i > 0 ? "s" : ""}`,
  }));

  const weeklyRepeatOptions = Array.from({ length: 14 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} week${i > 0 ? "s" : ""}`,
  }));

  const monthlyRepeatOptions = [1, 2, 3].map((i) => ({
    value: i,
    label: `${i} month${i > 1 ? "s" : ""}`,
  }));

  const monthlyDayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const monthlyWeekOptions = ["First", "Second", "Third", "Fourth", "Last"].map(
    (v, i) => ({ value: i + 1, label: v }),
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
    (d, i) => ({ value: i + 1, label: d }),
  );

  /* ---------------------------
     Weekly days
  --------------------------- */

  const toggleWeeklyDay = (day) => {
    const next = weekly_days.includes(day)
      ? weekly_days.filter((d) => d !== day)
      : [...weekly_days, day];

    onChange({ ...recurrence, weekly_days: next });
  };

  /* ---------------------------
     Render
  --------------------------- */

  return (
    <div className="mt-8 w-full flex flex-col gap-[24px]">
      <div>
        <div className="step__content_block">
          <span className="step__content_title">Recurrence type</span>
          <NewButtonGroup
            buttons={["Daily", "Weekly", "Monthly"]}
            active={RECURRENCE_LABELS[type] ?? null}
            onChange={(label) => {
              handleRecurrenceTypeChange(LABEL_TO_TYPE[label]);
            }}
          />
        </div>
      </div>

      {/* Daily */}
      {type === 1 && (
        <div className="step__content_block">
          <span className="step__content_title">Repeat every</span>
          <NewSelectControl
            // label="Repeat every"
            options={dailyRepeatOptions}
            value={repeat_interval}
            onChange={(v) =>
              onChange({ ...recurrence, repeat_interval: Number(v) })
            }
            iconRight={<ChevronDownIcon />}
            style={{ width: "100%" }}
          />
        </div>
      )}

      {/* Weekly */}
      {type === 2 && (
        <div className="step__content_block">
          <span className="step__content_title">Repeat every</span>

          <BlockStack gap={4}>
            <NewSelectControl
              options={weeklyRepeatOptions}
              value={repeat_interval}
              onChange={(v) =>
                onChange({ ...recurrence, repeat_interval: Number(v) })
              }
              iconRight={<ChevronDownIcon />}
              style={{ width: "100%" }}
            />

            <span className="step__content_title">Occurs on</span>

            <div className="grid grid-cols-2 gap-2">
              {days.map((d) => (
                <label key={d.value} className="flex items-center gap-2">
                  <CheckboxItem
                    label={d.label}
                    checked={weekly_days.includes(d.value)}
                    onChange={() => toggleWeeklyDay(d.value)}
                  />
                </label>
              ))}
            </div>
          </BlockStack>
        </div>
      )}

      {/* Monthly */}
      {type === 3 && (
        <div className="step__content_block">
          <span className="step__content_title">Repeat every</span>

          <BlockStack gap={4}>
            <NewSelectControl
              options={monthlyRepeatOptions}
              value={repeat_interval}
              onChange={(v) =>
                onChange({ ...recurrence, repeat_interval: Number(v) })
              }
              iconRight={<ChevronDownIcon />}
              style={{ width: "100%" }}
            />

            <RadioGroup
              name="monthly-type"
              value={monthlyType ? "day" : "week"}
              onChange={(v) => {
                const byDay = v === "day";
                setMonthlyType(byDay);
                const next = { ...recurrence };
                if (byDay) {
                  delete next.monthly_week;
                  delete next.monthly_week_day;
                  next.monthly_day = Number(monthly_day) || 1;
                } else {
                  delete next.monthly_day;
                  next.monthly_week = Number(monthly_week) || 1;
                  next.monthly_week_day = Number(monthly_week_day) || 1;
                }
                onChange(next);
              }}
              options={[
                { value: "day", label: "Day of month" },
                { value: "week", label: "Day of week" },
              ]}
            />

            {monthlyType && (
              <NewSelectControl
                options={monthlyDayOptions}
                value={monthly_day}
                onChange={(v) =>
                  onChange({ ...recurrence, monthly_day: Number(v) })
                }
                iconRight={<ChevronDownIcon />}
                style={{ width: "100%" }}
              />
            )}

            {!monthlyType && (
              <InlineStack gap={2}>
                <NewSelectControl
                  options={monthlyWeekOptions}
                  value={monthly_week}
                  onChange={(v) =>
                    onChange({ ...recurrence, monthly_week: Number(v) })
                  }
                  iconRight={<ChevronDownIcon />}
                  style={{ width: "100%" }}
                />
                <NewSelectControl
                  options={days}
                  value={monthly_week_day}
                  onChange={(v) =>
                    onChange({
                      ...recurrence,
                      monthly_week_day: Number(v),
                    })
                  }
                  iconRight={<ChevronDownIcon />}
                  style={{ width: "100%" }}
                />
              </InlineStack>
            )}
          </BlockStack>
        </div>
      )}
    </div>
  );
};

export default NewRecurringControl;
