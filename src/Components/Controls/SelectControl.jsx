// Legacy control, kept only for the public widget entry points
// (src/checkout.js, src/view.js). The admin shell uses NewSelectControl instead; do not
// reach for this one from anything under src/Components/Pages or
// src/Components/CreateEvent.
import React, { Fragment, useState, useRef, useEffect } from "react";

const SelectControl = ({
  label = "",
  options = [],
  helpText = "",
  selected = null,
  value = null,
  disabled = false,
  onSelectChange = () => {},
  onChange = () => {},
  iconRight = null,
  iconLeft = null,
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const currentValue = value !== null ? value : selected;
  const handleChange = (val) => {
    onSelectChange(val);
    onChange(val);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Rich options: { key, label } where label may be JSX
  const isRichOptions =
    options.length > 0 &&
    options[0] !== null &&
    typeof options[0] === "object" &&
    "key" in options[0];

  if (isRichOptions) {
    const selectedOption = options.find((o) => o.key === currentValue);

    return (
      <div
        className="input-container-col"
        ref={containerRef}
        style={{ width: "100%", position: "relative" }}
      >
        {label && <label className="section-description">{label}</label>}
        <div
          className="select-control-with-icon-container"
          style={{ width: "100%" }}
        >
          <button
            type="button"
            className="select-control select-control-with-icon text-sm p-4"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.5 : 1,
              background: "white",
              border: "none",
              textAlign: "left",
              color: "#000000",
              borderRadius: "5px",
              padding: "5px",
              ...style,
            }}
            disabled={disabled}
            onClick={() => setIsOpen((o) => !o)}
          >
            <span style={{ flex: 1, color: "black" }}>
              {selectedOption ? selectedOption.label : helpText}
            </span>
            {iconRight && (
              <span style={{ marginLeft: 8, flexShrink: 0, color: "black" }}>
                {iconRight}
              </span>
            )}
          </button>
        </div>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 200,
              background: "white",
              border: "1px solid #d5d7da",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              overflow: "hidden",
            }}
          >
            {options.map((option) => (
              <div
                key={option.key}
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  color: "#000000",
                  backgroundColor:
                    option.key === currentValue ? "#f9fafb" : "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f3f4f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    option.key === currentValue ? "#f9fafb" : "white")
                }
                onClick={() => {
                  handleChange(option.key);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Legacy: plain string options
  const renderOptions = () => {
    if (options.length > 0) {
      return (
        <Fragment>
          {helpText.length > 0 && (
            <option value="" key="" disabled selected={!currentValue}>
              {helpText}
            </option>
          )}
          {options.map((option) => (
            <option
              value={option}
              key={option}
              selected={currentValue === option}
            >
              {option}
            </option>
          ))}
        </Fragment>
      );
    }
  };

  const responsiveStyle = {
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
    ...style,
  };

  return (
    <div className="input-container-col" style={{ width: "100%" }}>
      <label htmlFor="timezone" className="section-description">
        {label}
      </label>
      <div
        className="select-control-with-icon-container"
        style={{ width: "100%" }}
      >
        <select
          name="timezone"
          id="timezone-select"
          className="select-control select-control-with-icon text-sm p-4"
          value={currentValue}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
          style={responsiveStyle}
        >
          {renderOptions()}
        </select>
        {iconRight !== null && iconRight}
      </div>
    </div>
  );
};

export default SelectControl;
