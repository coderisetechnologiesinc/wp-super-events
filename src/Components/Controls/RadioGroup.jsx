import React from "react";
import styles from "./RadioGroup.module.scss";

// The admin shell's radio group: one control per set of options rather than
// one per button.
const RadioGroup = ({
  name,
  value,
  options = [], // [{ value, label }]
  onChange,
  disabled = false,
  direction = "row", // row | column
  className = "",
}) => {
  return (
    <div
      className={[
        styles.group,
        direction === "column" ? styles.column : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {options.map((opt) => (
        <label key={opt.value} className={styles.option}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            disabled={disabled || opt.disabled}
          />
          <span className={styles.control} />
          <span className={styles.label}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
