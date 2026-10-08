// Legacy control, kept only for the public widget entry points
// (src/checkout.js, src/view.js). The admin shell uses NewInputFieldControl instead; do not
// reach for this one from anything under src/Components/Pages or
// src/Components/CreateEvent.
import React, { Fragment } from "react";

const InputFieldControl = ({
  placeholder = "",
  value = "",
  type = "text",
  disabled = false,
  onChange = () => {},
  handleKeyPress = () => {},
  maxLength = "",
  minValue = "",
  maxValue = "",
  fullWidth = false,
  align = "center",
  image = null,
  suffix = "",
  width = null,
  prefix = "",
  prefixWidth = "w-12",
  step = null,
  className = "",
  style = {},
}) => {
  // Alignment helper
  const getAlignmentClass = () => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (type === "number" && maxValue && value > maxValue) {
      onChange(maxValue);
    } else if (type === "number" && minValue && value < minValue) {
      onChange(minValue);
    } else {
      onChange(value);
    }
  };

  // Responsive style for mobile
  const responsiveStyle = {
    // maxWidth: "100%",
    // width: "100%",
    boxSizing: "border-box",
    ...style,
  };

  // Input classes
  const inputClasses = `
    w-full min-w-[4rem]
    input-control
    px-3 py-2
    pl-6
    border border-gray-300 rounded-lg
    text-sm font-medium
    focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500
    disabled:bg-gray-100 disabled:cursor-not-allowed
    transition-colors duration-200
    section-description
    ${getAlignmentClass()}
    ${fullWidth ? "w-full" : ""}
    ${width ? "w-full" : ""}
    ${align === "right" ? "pr-1" : ""}
    ${className}
  `.trim();

  const inputStyle = {
    width: fullWidth ? "100%" : width || undefined,
    fontFamily: "'Inter', sans-serif",
    ...responsiveStyle,
  };

  // Main input (no image, no prefix)
  if (!image && prefix === "") {
    return (
      <div className="flex relative group justify-center items-center w-full">
        <input
          type={type}
          className={inputClasses}
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          min={minValue}
          max={maxValue}
          onChange={(e) => handleChange(e)}
          onKeyDown={handleKeyPress}
          step={step}
          autoComplete="off"
        />
        {suffix && (
          <span
            className="absolute text-gray-500 right-0 pr-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {suffix}
          </span>
        )}
      </div>
    );
  }

  // Input with prefix (e.g. currency)
  if (!image && prefix !== "") {
    return (
      <div className="flex w-full rounded-lg border border-gray-300 overflow-hidden text-md shadow-sm h-9">
        <div
          className={`flex items-center justify-center bg-gray-50 text-gray-600 text-md ${prefixWidth} border-r border-gray-300`}
        >
          {prefix}
        </div>
        <input
          type="text"
          inputMode="decimal"
          pattern="^\d+(\.\d{0,2})?$"
          className="w-full px-4 text-gray-800 placeholder-gray-400 text-md focus:outline-none bg-white [appearance:textfield]"
          placeholder="0.00"
          value={value}
          onChange={(e) => {
            let val = e.target.value.replace(/[^\d.]/g, "");

            if (val.includes(".")) {
              const [int, dec] = val.split(".");
              val = `${int}.${dec.slice(0, 2)}`;
            }

            if (val.startsWith("00")) val = "0";
            else if (val.startsWith("0") && val[1] !== ".") val = val.slice(1);

            onChange(val);
          }}
          style={responsiveStyle}
        />
      </div>
    );
  }

  // Input with image
  return (
    <div className="flex relative group justify-center items-center w-full">
      <span className="flex absolute left-0 bg-transparent rounded text-base text-gray-600 p-2">
        <div
          className="size-6"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "1.7rem",
            height: "1.7rem",
          }}
        ></div>
      </span>
      <input
        type={type}
        className={`
          input-control section-description description-image
          ${getAlignmentClass()}
          ${align === "right" ? "pr-1 pl-8" : ""}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        maxLength={maxLength}
        min={minValue}
        max={maxValue}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
};
export default InputFieldControl;
