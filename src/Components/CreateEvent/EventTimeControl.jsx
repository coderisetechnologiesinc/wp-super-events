import { useEffect, useRef, useState } from "react";
import { displayEventTime, parseEventTime } from "./eventFormData";
import styles from "./UnifiedEventForm.module.scss";

// The displayed clock follows the shop preference; the API keeps local HH:mm.
export default function EventTimeControl({
  value,
  use24Hours,
  onChange,
  label = "Start time",
  disabled = false,
}) {
  const display = displayEventTime(value, use24Hours);
  const [text, setText] = useState(display.time);
  const [period, setPeriod] = useState(display.period);
  const input = useRef(null);
  useEffect(() => {
    setText(display.time);
    setPeriod(display.period);
    input.current?.setCustomValidity("");
  }, [value, use24Hours]);
  const commit = (clock, meridiem) => {
    const next = parseEventTime(clock, meridiem, use24Hours);
    input.current?.setCustomValidity(
      next === null
        ? use24Hours
          ? "Enter a time from 00:00 to 23:59."
          : "Enter a time from 01:00 to 12:59 and select AM or PM."
        : "",
    );
    if (next !== null) onChange(next);
  };
  return (
    <div className={styles.timeControl}>
      <input
        ref={input}
        type="text"
        inputMode="numeric"
        required
        aria-label={label}
        disabled={disabled}
        placeholder={use24Hours ? "18:00" : "06:00"}
        value={text}
        maxLength={5}
        onChange={(event) => {
          setText(event.target.value.replace(/^(\d{2})(\d{1,2})$/, "$1:$2"));
          input.current.setCustomValidity("");
        }}
        onBlur={() => commit(text, period)}
      />
      {!use24Hours && (
        <select
          aria-label={`${label} period`}
          disabled={disabled}
          value={period}
          onChange={(event) => {
            setPeriod(event.target.value);
            commit(text, event.target.value);
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      )}
    </div>
  );
}
