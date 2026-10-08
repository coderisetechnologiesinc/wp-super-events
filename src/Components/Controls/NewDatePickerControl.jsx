import React, { useState } from "react";
import moment from "moment";
import Dropdown from "../Containers/Dropdown";
import CalendarInline from "./CalendarInline";
import styles from "./NewDatePickerControl.module.scss";

const DEFAULT_FORMAT = "MMM DD, YYYY";

const toDate = (value) => {
  if (!value) return null;
  const parsed = moment.isMoment(value) ? value : moment(value);
  return parsed.isValid() ? parsed.startOf("day").toDate() : null;
};

// A calendar icon button that opens CalendarInline in a popover.
//
// mode="range" takes and emits { startDate, endDate } as Dates — the shape the
// filter pages already keep in state. mode="single" takes anything
// moment-parsable and emits a moment, matching the event form's handlers.
const NewDatePickerControl = ({
  mode = "range",
  value,
  onChange = () => {},
  label = "Select dates",
  displayFormat = DEFAULT_FORMAT,
  minDate,
  maxDate,
  disabled = false,
  fullWidth = false,
  className = "",
  variant = "toolbar",
  ariaLabel,
}) => {
  const [open, setOpen] = useState(false);
  const isRange = mode === "range";

  const selected = isRange
    ? { startDate: toDate(value?.startDate), endDate: toDate(value?.endDate) }
    : toDate(value);

  const before = toDate(minDate);
  const after = toDate(maxDate);
  const disabledDays =
    before || after
      ? { ...(before ? { before } : {}), ...(after ? { after } : {}) }
      : undefined;

  const triggerLabel = () => {
    if (!isRange) {
      return selected ? moment(selected).format(displayFormat) : label;
    }
    if (!selected.startDate) return label;

    const from = moment(selected.startDate).format(displayFormat);
    if (
      !selected.endDate ||
      selected.endDate.valueOf() === selected.startDate.valueOf()
    ) {
      return from;
    }
    return `${from} – ${moment(selected.endDate).format(displayFormat)}`;
  };

  const handleSelect = (next) => {
    if (!isRange) {
      if (!next) return;
      onChange(moment(next));
      setOpen(false);
      return;
    }

    onChange(next);
    // Hold the popover open until both ends of the range are picked.
    if (next?.startDate && next?.endDate) setOpen(false);
  };

  return (
    <Dropdown
      className={[styles.root, fullWidth ? styles.block : "", className]
        .filter(Boolean)
        .join(" ")}
      align="left"
      surface={false}
      status={open && !disabled}
      onClose={() => setOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
      activator={
        <button
          type="button"
          className={`${styles.button} ${
            variant === "field" ? styles.field : ""
          }`}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-expanded={open && !disabled}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="16"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.9"
            />
            <path
              d="M8 3v4M16 3v4M3 11h18"
              stroke="currentColor"
              strokeWidth="1.9"
            />
          </svg>

          <span className={styles.label}>{triggerLabel()}</span>
        </button>
      }
    >
      <CalendarInline
        mode={mode}
        value={selected}
        onChange={handleSelect}
        disabled={disabledDays}
      />
    </Dropdown>
  );
};

export default NewDatePickerControl;
