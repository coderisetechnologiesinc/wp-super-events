import React, { useState } from "react";
import FiltersPanel from "./FiltersPanel";
import styles from "./FiltersDropdown.module.scss";

// The Filters button as the dashboard and the calendar show it: the applied
// count on the trigger, and the drawer from the reference behind it.
const FiltersDropdown = ({
  filtersList = {},
  selectedFilters = {},
  onSelect = () => {},
  onClear = () => {},
  isApplied = false,
  showFormat = false,
  eventType = "all",
  onEventTypeChange = () => {},
  // Optional: when the caller keeps its date filters in the drawer rather than
  // in its own toolbar. See FiltersPanel for the shape.
  dateFilters,
  // A caller whose filters are not filter groups passes its own sections, the
  // count to show on the trigger, and what Apply should do.
  sections,
  appliedCount,
  onApply,
}) => {
  const [open, setOpen] = useState(false);

  const count =
    appliedCount ??
    Object.values(selectedFilters).reduce(
      (total, group) => total + (Array.isArray(group) ? group.length : 0),
      0,
    ) + (showFormat && eventType !== "all" ? 1 : 0);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setOpen(true)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          aria-hidden="true"
        >
          <path
            d="M3 6h18M6 12h12M10 18h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>{t("Filters")}</span>
        {count > 0 && <span className={styles.count}>{count}</span>}
      </button>

      <FiltersPanel
        open={open}
        onClose={() => setOpen(false)}
        filtersList={filtersList}
        selectedFilters={selectedFilters}
        onSelect={onSelect}
        onClear={onClear}
        isApplied={isApplied}
        showFormat={showFormat}
        eventType={eventType}
        onEventTypeChange={onEventTypeChange}
        dateFilters={dateFilters}
        sections={sections}
        onApply={onApply}
        appliedCount={appliedCount}
      />
    </div>
  );
};

export default FiltersDropdown;
