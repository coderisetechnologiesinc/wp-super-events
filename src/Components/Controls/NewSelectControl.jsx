import React from "react";
import ReactSelect, { components } from "react-select";
import styles from "./NewSelectControl.module.scss";

const Caret = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    width={18}
    height={18}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <Caret />
  </components.DropdownIndicator>
);

// react-select renders its own DOM, so it is styled through the same tokens
// exposed as custom properties on #servv-wrap (see src/styles/base.scss).
const reactSelectStyles = (style) => ({
  container: (base) => ({ ...base, width: "100%", ...style }),
  control: (base, state) => ({
    ...base,
    minHeight: "40px",
    border: `1px solid ${
      state.isFocused ? "var(--sv-primary-border)" : "var(--sv-border-field)"
    }`,
    borderRadius: "var(--sv-radius-lg)",
    backgroundColor: "var(--sv-surface)",
    // No halo on focus: the border colour already says which select is
    // active, and the ring sat heavily on a control this wide.
    boxShadow: "var(--sv-shadow-field)",
    paddingLeft: "6px",
    paddingRight: "4px",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": { borderColor: "var(--sv-primary-border)" },
  }),
  valueContainer: (base) => ({ ...base, padding: "0 6px" }),
  placeholder: (base) => ({ ...base, color: "var(--sv-text-placeholder)" }),
  singleValue: (base) => ({ ...base, color: "var(--sv-text)" }),
  input: (base) => ({ ...base, color: "var(--sv-text)" }),
  multiValue: (base) => ({
    ...base,
    borderRadius: "99px",
    backgroundColor: "var(--sv-primary-surface)",
    border: "1px solid var(--sv-primary-border)",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "var(--sv-primary-strong)",
    fontSize: "12px",
    fontWeight: 600,
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "var(--sv-primary-strong)",
    borderRadius: "0 99px 99px 0",
    ":hover": {
      backgroundColor: "var(--sv-primary-border)",
      color: "var(--sv-primary-strong)",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "0 6px",
    color: "var(--sv-text-soft)",
    ":hover": { color: "var(--sv-primary)" },
  }),
  menu: (base) => ({
    ...base,
    overflow: "hidden",
    marginTop: "6px",
    borderRadius: "var(--sv-radius-2xl)",
    border: "1px solid var(--sv-border)",
    boxShadow: "0 12px 32px rgba(16, 24, 40, 0.14)",
    zIndex: 40,
  }),
  menuList: (base) => ({ ...base, padding: "6px" }),
  option: (base, state) => ({
    ...base,
    borderRadius: "7px",
    padding: "8px 10px",
    fontSize: "13px",
    fontWeight: 500,
    color: state.isSelected ? "var(--sv-primary-strong)" : "var(--sv-text-strong)",
    backgroundColor: state.isSelected
      ? "var(--sv-primary-surface)"
      : state.isFocused
        ? "var(--sv-primary-surface)"
        : "transparent",
    cursor: "pointer",
    ":active": { backgroundColor: "var(--sv-primary-surface)" },
  }),
});

const NewSelectControl = ({
  label = "",
  options = [],
  helpText = "",
  value = "",
  disabled = false,
  multiple = false,
  onChange = () => {},
  iconRight = null,
  style = {},
}) => {
  // A native <select> can only render text, so options carrying JSX labels
  // (badges, icons) go through react-select as well.
  const hasRichLabels = options.some(
    (option) => option && typeof option.label !== "string",
  );

  if (multiple) {
    const selected = Array.isArray(value) ? value.map(String) : [];
    const selectedOptions = options.filter((o) => selected.includes(o.value));

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <ReactSelect
          isMulti
          options={options}
          value={selectedOptions}
          onChange={(picked) => onChange((picked || []).map((o) => o.value))}
          isDisabled={disabled}
          placeholder={helpText || "Select..."}
          components={{ IndicatorSeparator: null, DropdownIndicator }}
          styles={reactSelectStyles(style)}
        />
      </div>
    );
  }

  if (hasRichLabels) {
    const selectedOption =
      options.find((o) => String(o.value) === String(value)) ?? null;

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <ReactSelect
          options={options}
          value={selectedOption}
          onChange={(picked) => onChange(picked ? picked.value : "")}
          isDisabled={disabled}
          isSearchable={false}
          placeholder={helpText || "Select..."}
          components={{ IndicatorSeparator: null, DropdownIndicator }}
          styles={reactSelectStyles(style)}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={`${styles.control} ${disabled ? styles.disabled : ""}`}
        style={style}
      >
        <select
          className={styles.native}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {helpText && (
            <option value="" disabled>
              {helpText}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {iconRight ? (
          <span className={styles.icon}>{iconRight}</span>
        ) : (
          <span className={styles.caret}>
            <Caret />
          </span>
        )}
      </div>
    </div>
  );
};

export default NewSelectControl;
