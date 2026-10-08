import React from "react";
import styles from "./CheckboxItem.module.scss";

// `indeterminate` is the select-all's third state: some rows picked, not all.
// It fills the box like a checked one but draws a dash instead of a tick.
const CheckboxItem = ({
  label = "",
  name,
  checked = false,
  indeterminate = false,
  disabled = false,
  ariaLabel,
  onChange = () => {},
}) => {
  return (
    <label
      className={`${styles.item} ${disabled ? styles.disabled : ""}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={styles.input}
        aria-label={ariaLabel || undefined}
        ref={(node) => {
          if (node) node.indeterminate = !checked && indeterminate;
        }}
      />

      <span
        className={`${styles.box} ${
          !checked && indeterminate ? styles.mixed : ""
        }`}
      >
        {!checked && indeterminate && <span className={styles.dash} />}
        {checked && (
          <svg
            className={styles.check}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6.5L5 9L9.5 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default CheckboxItem;
