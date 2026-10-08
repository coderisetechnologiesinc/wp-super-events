import React from "react";
import CheckboxItem from "../Controls/CheckboxItem";
import PageActionButton from "../Controls/PageActionButton";
import styles from "./BulkBar.module.scss";

// The select-all row and the bulk bar from events-views.html. The actions are
// the caller's — this only owns the count, the clear and the chrome.
export const SelectAllRow = ({
  total = 0,
  selectedCount = 0,
  view = "rows",
  label,
  onToggleAll = () => {},
}) => (
  <div
    className={[
      styles.selectAll,
      view === "rail" ? styles.insetRail : styles.insetRows,
    ].join(" ")}
  >
    <CheckboxItem
      label={label || t("Select all")}
      checked={total > 0 && selectedCount === total}
      indeterminate={selectedCount > 0 && selectedCount < total}
      disabled={total === 0}
      onChange={onToggleAll}
    />
  </div>
);

const BulkBar = ({
  selectedCount = 0,
  noun = "event",
  nounPlural,
  onClear = () => {},
  children,
}) => {
  if (selectedCount < 1) return null;

  const plural = nounPlural || `${noun}s`;

  return (
    <div className={styles.bar} role="status">
      <span className={styles.count}>
        {selectedCount === 1
          ? `1 ${t(noun)} ${t("selected")}`
          : `${selectedCount} ${t(plural)} ${t("selected")}`}
      </span>

      <span className={styles.spacer} />

      <PageActionButton
        type="ghost"
        size="sm"
        text={t("Clear")}
        onAction={onClear}
      />

      {children}
    </div>
  );
};

export default BulkBar;
