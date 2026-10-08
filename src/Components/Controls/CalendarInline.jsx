import { DayPicker } from "react-day-picker";
import styles from "./CalendarInline.module.scss";

// The calendar surface shared by every date control: a DayPicker in servv
// chrome. Render it directly when the surrounding markup is already a panel
// (a modal, a form block); wrap it in NewDatePickerControl for a popover.
//
// react-day-picker speaks { from, to } for ranges while the admin pages store
// { startDate, endDate }; the translation lives here so no call site has to
// know about either shape.
const CalendarInline = ({
  mode = "single",
  value,
  onChange = () => {},
  disabled,
  defaultMonth,
}) => {
  const isRange = mode === "range";

  const selected = isRange
    ? value?.startDate || value?.endDate
      ? { from: value.startDate ?? undefined, to: value.endDate ?? undefined }
      : undefined
    : value ?? undefined;

  const handleSelect = (next) => {
    if (!isRange) {
      onChange(next);
      return;
    }
    onChange({
      startDate: next?.from ?? null,
      endDate: next?.to ?? next?.from ?? null,
    });
  };

  return (
    <div className={`date-picker-menu ${styles.surface}`}>
      <DayPicker
        mode={mode}
        selected={selected}
        defaultMonth={defaultMonth ?? (isRange ? selected?.from : selected)}
        onSelect={handleSelect}
        disabled={disabled}
        weekStartsOn={1} // Mo → Su
        showOutsideDays
      />
    </div>
  );
};

export default CalendarInline;
