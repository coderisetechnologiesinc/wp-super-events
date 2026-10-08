import React from "react";
import styles from "./NewInputFieldControl.module.scss";

// The single text-entry primitive: a bare input (or textarea) in the recessed
// field chrome. NewInputControl wraps this with a label and error text; use
// this directly when the surrounding markup already supplies them.
const ALIGN = {
  left: styles.left,
  center: styles.center,
  right: styles.right,
};

const NewInputFieldControl = ({
  id,
  placeholder = "",
  value = "",
  type = "text",
  inputMode,
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  onKeyDown = () => {},
  maxLength,
  minValue,
  maxValue,
  align = "left",
  step,
  width,
  textarea = false,
  rows = 4,
  className = "",
  style,
  error = false,
}) => {
  const InputTag = textarea ? "textarea" : "input";

  const wrapperClasses = [
    styles.field,
    error ? styles.error : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentClasses = [styles.content, textarea ? styles.textarea : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClasses}
      style={{ width: width || "384px", ...style }}
    >
      <div className={contentClasses}>
        <InputTag
          id={id}
          type={textarea ? undefined : type}
          inputMode={inputMode}
          rows={textarea ? rows : undefined}
          className={`${styles.native} ${ALIGN[align] || ALIGN.left}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          maxLength={maxLength}
          min={minValue}
          max={maxValue}
          step={step}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default NewInputFieldControl;
