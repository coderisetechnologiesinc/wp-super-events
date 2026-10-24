"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_Integrations_ZoomSettingsPage_jsx"],{

/***/ "./src/Components/Containers/AnnotatedSection.jsx":
/*!********************************************************!*\
  !*** ./src/Components/Containers/AnnotatedSection.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Settings_SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/Settings/SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// variant "default" lays the title column out with flex and lets it shrink;
// "form" pins it to a fixed grid column, which keeps stacked form rows aligned.

const COLUMN_LAYOUT = {
  default: "flex flex-col md:flex-row gap-4 md:gap-8 items-start",
  form: "grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-4 md:gap-8"
};
const HEADER_LAYOUT = {
  default: "flex-shrink-0 w-full md:w-32 lg:w-64",
  form: ""
};
const CONTENT_LAYOUT = {
  default: "flex-1 w-full min-w-0",
  form: "w-full"
};
const AnnotatedSection = ({
  title,
  description,
  children,
  variant = "default",
  className = "",
  titleClassName = "",
  contentClassName = ""
}) => {
  const layout = COLUMN_LAYOUT[variant] ? variant : "default";
  if (variant === "settings") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `${_Pages_Settings_SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row} ${className}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _Pages_Settings_SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: titleClassName,
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `${_Pages_Settings_SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].value} ${contentClassName}`,
        children: [children, description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: _Pages_Settings_SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].hint,
          children: description
        })]
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `annotated-section ${COLUMN_LAYOUT[layout]} ${className}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `annotated-section-header ${HEADER_LAYOUT[layout]}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: `text-sm font-semibold text-gray-900 mb-1 ${titleClassName}`,
        style: {
          fontFamily: "'Inter', sans-serif"
        },
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-sm text-gray-600 hidden md:block leading-relaxed",
        style: {
          fontFamily: "'Inter', sans-serif"
        },
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `annotated-section-content ${CONTENT_LAYOUT[layout]} ${contentClassName}`,
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotatedSection);

/***/ }),

/***/ "./src/Components/Containers/BlockStack.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/BlockStack.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockStack.module.scss */ "./src/Components/Containers/BlockStack.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// Vertical layout primitive. `gap` keeps the historic numeric scale
// (4 → 16px); the token names are accepted too for new code.

const GAPS = {
  0: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap0,
  1: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap1,
  2: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap2,
  3: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap3,
  4: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap4,
  5: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap5,
  6: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap6,
  8: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap8,
  none: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap0,
  xs: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap1,
  sm: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap2,
  md: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap4,
  lg: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap6,
  xl: _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gap8
};
const BlockStack = ({
  gap = 4,
  cardsLayout,
  action,
  disabled,
  onAction,
  className = "",
  children,
  ...rest
}) => {
  var _GAPS$gap;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...rest,
    onClick: onAction ? () => onAction() : undefined,
    className: [_BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].stack, (_GAPS$gap = GAPS[gap]) !== null && _GAPS$gap !== void 0 ? _GAPS$gap : GAPS[4], cardsLayout ? _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cards : "", action || onAction ? _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].clickable : "", disabled ? _BlockStack_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : "", className].filter(Boolean).join(" "),
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStack);

/***/ }),

/***/ "./src/Components/Containers/PageContent.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Containers/PageContent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContent.module.scss */ "./src/Components/Containers/PageContent.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// A full-size page shell with responsive gutters and 24px content spacing.
// `className` lands on the column, where the call sites have always put it.

const PageContent = ({
  className = "",
  maxWidth,
  flush = false,
  children,
  ...rest
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: `${_PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].shell} ${flush ? _PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].flush : ""}`.trim(),
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...rest,
    className: `${_PageContent_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container} ${className}`.trim(),
    style: maxWidth ? {
      maxWidth
    } : undefined,
    children: children
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContent);

/***/ }),

/***/ "./src/Components/Controls/CheckboxItem.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Controls/CheckboxItem.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxItem.module.scss */ "./src/Components/Controls/CheckboxItem.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// `indeterminate` is the select-all's third state: some rows picked, not all.
// It fills the box like a checked one but draws a dash instead of a tick.

const CheckboxItem = ({
  label = "",
  name,
  checked = false,
  indeterminate = false,
  disabled = false,
  ariaLabel,
  onChange = () => {}
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: `${_CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item} ${disabled ? _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      type: "checkbox",
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange,
      className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input,
      "aria-label": ariaLabel || undefined,
      ref: node => {
        if (node) node.indeterminate = !checked && indeterminate;
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      className: `${_CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].box} ${!checked && indeterminate ? _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mixed : ""}`,
      children: [!checked && indeterminate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dash
      }), checked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
        className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].check,
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
          d: "M2.5 6.5L5 9L9.5 3",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _CheckboxItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
      children: label
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxItem);

/***/ }),

/***/ "./src/Components/Controls/NewInputFieldControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewInputFieldControl.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInputFieldControl.module.scss */ "./src/Components/Controls/NewInputFieldControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The single text-entry primitive: a bare input (or textarea) in the recessed
// field chrome. NewInputControl wraps this with a label and error text; use
// this directly when the surrounding markup already supplies them.

const ALIGN = {
  left: _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].left,
  center: _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].center,
  right: _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].right
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
  error = false
}) => {
  const InputTag = textarea ? "textarea" : "input";
  const wrapperClasses = [_NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].field, error ? _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error : "", disabled ? _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : "", className].filter(Boolean).join(" ");
  const contentClasses = [_NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, textarea ? _NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textarea : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: wrapperClasses,
    style: {
      width: width || "384px",
      ...style
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: contentClasses,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InputTag, {
        id: id,
        type: textarea ? undefined : type,
        inputMode: inputMode,
        rows: textarea ? rows : undefined,
        className: `${_NewInputFieldControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].native} ${ALIGN[align] || ALIGN.left}`,
        placeholder: placeholder,
        value: value,
        disabled: disabled,
        "aria-invalid": Boolean(error),
        maxLength: maxLength,
        min: minValue,
        max: maxValue,
        step: step,
        onChange: e => onChange(e.target.value),
        onBlur: onBlur,
        onKeyDown: onKeyDown,
        autoComplete: "off"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputFieldControl);

/***/ }),

/***/ "./src/Components/Controls/PageActionButton.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/PageActionButton.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageActionButton.module.scss */ "./src/Components/Controls/PageActionButton.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The one button primitive for the admin shell. Styling lives in the SCSS
// module next door; `className` stays a pass-through for layout-only tweaks
// from the call site (width, flex, alignment).

const VARIANTS = {
  primary: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].primary,
  secondary: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].secondary,
  danger: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].danger,
  "danger-secondary": _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dangerSecondary,
  ghost: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghost,
  "danger-ghost": _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dangerGhost
};
const SIZES = {
  md: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].md,
  sm: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].sm,
  xs: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].xs
};
const PageActionButton = ({
  text,
  icon,
  type = "primary",
  // primary | secondary | danger | danger-secondary | ghost | danger-ghost
  size = "md",
  // md | sm | xs
  onAction,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  ariaLabel,
  className = "",
  style = {},
  hidden
}) => {
  const classes = [_PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button, VARIANTS[type] || VARIANTS.primary, SIZES[size] || SIZES.md, fullWidth ? _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fullWidth : "", iconOnly ? _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconOnly : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
    type: "button",
    onClick: onAction,
    disabled: disabled,
    "aria-label": ariaLabel,
    className: classes,
    style: style,
    children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
      children: icon
    }), !iconOnly && text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _PageActionButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
      children: text
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageActionButton);

/***/ }),

/***/ "./src/Components/Controls/RadioGroup.jsx":
/*!************************************************!*\
  !*** ./src/Components/Controls/RadioGroup.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioGroup.module.scss */ "./src/Components/Controls/RadioGroup.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The admin shell's radio group: one control per set of options rather than
// one per button.

const RadioGroup = ({
  name,
  value,
  options = [],
  // [{ value, label }]
  onChange,
  disabled = false,
  direction = "row",
  // row | column
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: [_RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].group, direction === "column" ? _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].column : "", className].filter(Boolean).join(" "),
    children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
      className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].option,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "radio",
        name: name,
        value: opt.value,
        checked: value === opt.value,
        onChange: () => onChange(opt.value),
        disabled: disabled || opt.disabled
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].control
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _RadioGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        children: opt.label
      })]
    }, opt.value))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);

/***/ }),

/***/ "./src/Components/CreateEvent/eventFormData.js":
/*!*****************************************************!*\
  !*** ./src/Components/CreateEvent/eventFormData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayEventTime: () => (/* binding */ displayEventTime),
/* harmony export */   eventPayload: () => (/* binding */ eventPayload),
/* harmony export */   initialEvent: () => (/* binding */ initialEvent),
/* harmony export */   loadEvent: () => (/* binding */ loadEvent),
/* harmony export */   parseEventTime: () => (/* binding */ parseEventTime),
/* harmony export */   readDefaults: () => (/* binding */ readDefaults),
/* harmony export */   registrantsPayload: () => (/* binding */ registrantsPayload),
/* harmony export */   ticketPayload: () => (/* binding */ ticketPayload),
/* harmony export */   uses24HourClock: () => (/* binding */ uses24HourClock)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/numbers */ "./src/utilities/numbers.js");


const uses24HourClock = settings => [true, 1, "1", "true"].includes(settings?.settings?.time_format_24_hours);
const displayEventTime = (value, use24Hours) => {
  const parsed = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(value || "00:00", "HH:mm", true);
  return {
    time: parsed.isValid() ? parsed.format(use24Hours ? "HH:mm" : "hh:mm") : "",
    period: parsed.isValid() ? parsed.format("A") : "AM"
  };
};
const parseEventTime = (value, period, use24Hours) => {
  if (!/^\d{1,2}:\d{2}$/.test(value.trim())) return null;
  const [hours, minutes] = value.trim().split(":").map(Number);
  if (minutes > 59 || hours > (use24Hours ? 23 : 12) || !use24Hours && hours < 1) return null;
  const parsed = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(use24Hours ? value.trim() : `${value.trim()} ${period}`, use24Hours ? ["HH:mm", "H:mm"] : ["hh:mm A", "h:mm A"], true);
  return parsed.isValid() ? parsed.format("HH:mm") : null;
};
const readDefaults = settings => {
  const raw = settings?.settings?.admin_dashboard;
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};
const initialEvent = settings => {
  const defaults = readDefaults(settings);
  const timezone = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.zone(defaults.default_timezone) ? defaults.default_timezone : moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.guess();
  const start = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().tz(timezone).add(1, "day").second(0);
  const time = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(defaults.default_start_time, ["h:mm a", "HH:mm"], true);
  if (time.isValid()) start.hour(time.hour()).minute(time.minute());
  return {
    location: ["offline", "zoom", "custom", "hybrid"].includes(defaults.default_event_type) ? defaults.default_event_type : "offline",
    meeting: {
      topic: "",
      agenda: "",
      startTime: start.format("YYYY-MM-DDTHH:mm:ss"),
      timezone,
      duration: Number(defaults.default_duration || 1) * 60,
      recurrence: null,
      is_hidden: false
    },
    tickets: [],
    product: {
      price: 0,
      quantity: Number(defaults.default_quantity) || 5
    },
    filters: {},
    custom_fields: {},
    notifications: {
      google_calendar: false,
      disable_emails: false
    }
  };
};
const loadEvent = (data, location) => {
  var _ref, _data$product$current;
  const meeting = data.meeting || {};
  const timezone = meeting.timezone || "UTC";
  const start = meeting.start_time || meeting.occurrences?.[0]?.start_time;
  const customFields = data.custom_fields || {};
  return {
    ...data,
    location: location === "zoom" ? "zoom" : customFields.custom_field_1_value ? data.types?.location_id ? "hybrid" : "custom" : "offline",
    meeting: {
      ...meeting,
      startTime: start ? moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz(start, timezone).format("YYYY-MM-DDTHH:mm:ss") : "",
      recurrence: meeting.recurrence?.type ? {
        ...meeting.recurrence,
        weekly_days: typeof meeting.recurrence.weekly_days === "string" ? meeting.recurrence.weekly_days.split(",").map(Number) : meeting.recurrence.weekly_days
      } : null
    },
    tickets: (data.tickets || []).map(ticket => ({
      ...ticket,
      persisted: true,
      title: ticket.name,
      type: ticket.is_donation ? "donation" : Number(ticket.price) === 0 ? "free" : "paid",
      ...Object.fromEntries(["start_datetime", "end_datetime"].map(key => [key, ticket[key] ? moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().utc(ticket[key]).tz(timezone).format("YYYY-MM-DDTHH:mm:ss") : null]))
    })),
    product: {
      ...data.product,
      quantity: (_ref = (_data$product$current = data.product?.current_quantity) !== null && _data$product$current !== void 0 ? _data$product$current : data.product?.quantity) !== null && _ref !== void 0 ? _ref : 5
    },
    filters: data.types || {},
    custom_fields: customFields,
    notifications: data.notifications || {}
  };
};
const ticketPayload = (ticket, timezone) => ({
  name: ticket.title,
  quantity: (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(ticket.quantity),
  price: ticket.type === "free" ? 0 : ticket.type === "donation" ? null : (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toNumber)(ticket.price),
  is_donation: ticket.type === "donation",
  ...Object.fromEntries(["start_datetime", "end_datetime"].map(key => [key, ticket[key] ? moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz(ticket[key], timezone).utc().format("YYYY-MM-DDTHH:mm:ss[Z]") : null]))
});

// The API takes one recurrence shape per type, and the end condition is either
// a number of occurrences or an end date — never both. An event loaded for
// editing can carry leftovers from another variant (its own API response, or a
// type the user switched away from), so the body is rebuilt from scratch.
const recurrencePayload = (recurrence, isNew) => {
  const type = Number(recurrence.type);
  if (!type) return null;
  const payload = {
    type,
    repeat_interval: Number(recurrence.repeat_interval) || 1
  };
  if (type === 2) {
    var _recurrence$weekly_da;
    const days = Array.isArray(recurrence.weekly_days) ? recurrence.weekly_days : String((_recurrence$weekly_da = recurrence.weekly_days) !== null && _recurrence$weekly_da !== void 0 ? _recurrence$weekly_da : "").split(",").filter(Boolean);
    // 1 Sunday through 7 Saturday. PHP joins the array for the create call;
    // the update body reaches the API unchanged.
    const numbers = days.map(Number).filter(Number.isFinite);
    payload.weekly_days = isNew ? numbers : numbers.join(",");
  }
  if (type === 3) {
    if (recurrence.monthly_week_day) {
      payload.monthly_week = Number(recurrence.monthly_week) || 1;
      payload.monthly_week_day = Number(recurrence.monthly_week_day);
    } else {
      payload.monthly_day = Number(recurrence.monthly_day) || 1;
    }
  }
  // A cleared occurrence count is not an end condition, so the date is used.
  if (Number(recurrence.end_times) > 0) payload.end_times = (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(recurrence.end_times);else if (recurrence.end_date_time) payload.end_date_time = recurrence.end_date_time;
  return payload;
};
const eventPayload = (event, isNew, freePlan) => {
  const {
    meeting,
    filters
  } = event;
  const offline = event.location !== "zoom";
  // Hosts are ids in the form, but the event endpoint may describe them as
  // objects. An event that never had hosts sends no attribute at all.
  const members = Array.isArray(filters.members) ? filters.members.map(m => {
    var _m$id;
    return Number((_m$id = m?.id) !== null && _m$id !== void 0 ? _m$id : m);
  }).filter(Number.isFinite) : null;
  const type = meeting.recurrence?.type ? offline ? 2 : 8 : offline ? 1 : 2;
  const payload = {
    meeting: {
      topic: meeting.topic.trim(),
      agenda: meeting.agenda || "",
      timezone: meeting.timezone,
      duration: Number(meeting.duration),
      recurrence: meeting.recurrence ? recurrencePayload(meeting.recurrence, isNew) : null,
      is_hidden: Boolean(meeting.is_hidden),
      [isNew ? "startTime" : "start_time"]: meeting.startTime,
      [isNew ? "eventType" : "type"]: type
    },
    // Only the documented attributes are forwarded: the event endpoint returns
    // read-only extras next to them (the *_name labels, current_quantity) that
    // the API must not receive back on update.
    types: {
      location_id: ["zoom", "custom"].includes(event.location) ? null : filters.location_id || null,
      category_id: filters.category_id || null,
      language_id: filters.language_id || null,
      ...(members ? {
        members
      } : {})
    },
    custom_fields: event.custom_fields,
    notifications: {
      google_calendar: Boolean(event.notifications?.google_calendar),
      disable_emails: Boolean(event.notifications?.disable_emails)
    },
    // A cleared number input holds "" until it is saved, and the API only
    // takes numbers here — an empty field means 0.
    product: {
      quantity: event.product?.quantity == null ? null : (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(event.product.quantity),
      price: event.product?.price == null ? null : (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toNumber)(event.product.price)
    }
  };
  if (event.image_content?.startsWith("data:image/")) payload.image_content = event.image_content.split(",")[1];
  if (isNew && freePlan) payload.product = {
    quantity: event.tickets.filter(t => t.action !== "remove").reduce((sum, t) => sum + (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(t.quantity), 0) || (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_1__.toInteger)(event.product.quantity) || 1
  };
  if (isNew && !freePlan) payload.tickets = event.tickets.filter(t => t.action !== "remove").map(t => ticketPayload(t, meeting.timezone));
  if (!isNew && event.registrants) payload.registrants = event.registrants.filter(r => r.status === "create").map(r => ({
    first_name: r.firstName,
    last_name: r.lastName,
    email: r.email
  }));
  return payload;
};

// The event endpoint rejects an update that carries only registrants ("Invalid
// meeting type"), so a manual registration resends the event as loaded with
// the new registrants attached, the way the event form's registrants step does.
const registrantsPayload = (data, location, freePlan, registrants) => eventPayload({
  ...loadEvent(data, location),
  registrants: registrants.map(registrant => ({
    ...registrant,
    status: "create"
  }))
}, false, freePlan);

/***/ }),

/***/ "./src/Components/Menu/BreadCrumbs.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Menu/BreadCrumbs.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/textResolver */ "./src/utilities/textResolver.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const BackChevron = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "m14 6-6 6 6 6"
  })
});
const Separator = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  className: "sv-crumbs__sep",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#B4BCCE",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "m9 6 6 6-6 6"
  })
});
const BreadCrumbs = ({
  breadcrumbs = [],
  onBreadCrumbClick = () => {}
}) => {
  const items = breadcrumbs.filter(Boolean);
  const trail = items.slice(0, -1);
  const current = items[items.length - 1];
  const parent = trail[trail.length - 1];
  const announce = item => onBreadCrumbClick(item.label);
  const crumb = (item, className, children, extra = {}) => {
    const shared = {
      className,
      ...extra
    };
    if (item.to) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: item.to,
        ...shared,
        onClick: () => announce(item),
        children: children
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "button",
      ...shared,
      onClick: () => {
        item.action?.();
        announce(item);
      },
      children: children
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
    className: `sv-crumbs${items.length > 1 ? "" : " sv-crumbs--idle"}`,
    "aria-label": (0,_utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__.t)("Breadcrumb"),
    children: [parent && crumb(parent, "sv-crumbs__back", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BackChevron, {}), {
      title: `${(0,_utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__.t)("Back to")} ${parent.label}`,
      "aria-label": `${(0,_utilities_textResolver__WEBPACK_IMPORTED_MODULE_1__.t)("Back to")} ${parent.label}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "sv-crumbs__track",
      children: [trail.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [crumb(item, "sv-crumbs__link", item.label), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Separator, {})]
      }, item.label)), current && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "sv-crumbs__current",
        "aria-current": "page",
        children: current.label
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);

/***/ }),

/***/ "./src/Components/Menu/Spinner.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Menu/Spinner.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/BarLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const override = {
  display: "block",
  margin: "0 auto"
  //   borderColor: "#7319C6",
};
const Spinner = ({
  loading,
  color = "#7319C6"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "svv-sweet-loading",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spinners__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: color,
      loading: loading,
      cssOverride: override,
      size: 75,
      "aria-label": "Loading Spinner",
      "data-testid": "loader"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/Components/Pages/Integrations/ZoomSettingsPage.jsx":
/*!****************************************************************!*\
  !*** ./src/Components/Pages/Integrations/ZoomSettingsPage.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/RadioGroup */ "./src/Components/Controls/RadioGroup.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../CreateEvent/eventFormData */ "./src/Components/CreateEvent/eventFormData.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














const YES_NO_OPTIONS = [{
  value: "yes",
  label: "Yes"
}, {
  value: "no",
  label: "No"
}];
const ZoomSettingsPage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  const [zoomSettings, setZoomSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    use_pmi: false,
    waiting_room: true,
    host_video: false,
    join_before_host: false,
    mute_upon_entry: false,
    participant_video: false,
    auto_recording: "none",
    audio: "voip"
  });
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const updateZoomSettings = async () => {
    const newSettings = {
      ...settings
    };
    // The dashboard defaults live at settings.settings.admin_dashboard — reading
    // them one level up produced {} and wiped every default_* value on save.
    const adminDashboardSettings = {
      ...(0,_CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_11__.readDefaults)(settings)
    };
    adminDashboardSettings.zoom_meeting_default_settings = zoomSettings;
    // newSettings.settings.admin_dashboard = ""
    newSettings.settings.admin_dashboard = JSON.stringify(adminDashboardSettings);
    const updateZoomSettingsResponse = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_10__["default"].put("/wp-json/servv-plugin/v1/shop/settings", newSettings, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
  };
  const handleSettingsChange = (field, value) => {
    let newSettings = {
      ...zoomSettings
    };
    newSettings[field] = value;
    setZoomSettings(newSettings);
  };
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_10__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/zoom/account",
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getZoomAccountResponse && getZoomAccountResponse.status === 200) {
      if (getZoomAccountResponse.data.email) setAccount(getZoomAccountResponse.data);
      setAccountFetched(true);
    }
  };
  const getZoomSettings = async () => {
    const shopInfo = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_10__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (shopInfo && shopInfo.status === 200 && shopInfo.data.settings) {
      setSettings(shopInfo.data);
      const adminSettings = (0,_CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_11__.readDefaults)(shopInfo.data);
      if (adminSettings.zoom_meeting_default_settings) setZoomSettings(adminSettings.zoom_meeting_default_settings);
    }
  };
  const getInfo = async () => {
    await getZoomSettings();
    await getZoomAccount();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getInfo();
  }, []);
  const responsiveBlockStack = "w-full min-w-0";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "servv-dashboard-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
            className: "dashboard-title mt-6",
            children: t("Zoom Settings")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "dashboard-description",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__["default"], {
              breadcrumbs: [{
                label: "Integrations",
                action: () => navigate("../../integrations")
              }, {
                label: "Zoom",
                action: () => navigate("../integrations/zoom")
              }, {
                label: "Zoom Settings",
                action: () => {}
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "dashboard-actions",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            text: t("Save"),
            type: "primary",
            onAction: updateZoomSettings
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 8,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
            className: "text-lg font-semibold border-b pb-4",
            children: t("Account")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Account details",
            description: "Account email & name.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
              gap: 4,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [isAccountFetched && account.photo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
                  src: account.photo,
                  alt: "",
                  className: "w-8 h-8 rounded-full object-cover shrink-0"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  width: "100%",
                  value: isAccountFetched ? account.email : "",
                  type: "text",
                  align: "right",
                  disabled: true,
                  maxLength: 30
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Account name",
            description: "Set a default time zone.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
              gap: 4,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
                width: "100%",
                value: isAccountFetched ? account.full_name : "",
                type: "text",
                align: "right",
                disabled: true,
                maxLength: 30
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
            className: "text-lg font-semibold border-b pb-4",
            children: t("Zoom settings")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Meeting ID",
            description: "Set a meeting ID",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "meeting_id",
              value: zoomSettings.use_pmi ? "pmi" : "auto",
              options: [{
                value: "auto",
                label: "Generate automatically"
              }, {
                value: "pmi",
                label: "Personal meeting ID"
              }],
              onChange: val => handleSettingsChange("use_pmi", val === "pmi")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Video",
            description: "Show/hide host and guest video",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
              gap: 4,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                label: "Host video",
                name: "host_video",
                checked: zoomSettings.host_video,
                onChange: () => handleSettingsChange("host_video", !zoomSettings.host_video)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                label: "Guest video",
                name: "guest_video",
                checked: zoomSettings.participant_video,
                onChange: () => handleSettingsChange("participant_video", !zoomSettings.participant_video)
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Audio",
            description: "Set default audio settings",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "audio",
              value: zoomSettings.audio,
              options: [{
                value: "telephony",
                label: "Telephone"
              }, {
                value: "voip",
                label: "Computer audio"
              }, {
                value: "both",
                label: "Both"
              }],
              onChange: val => handleSettingsChange("audio", val)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Enable Join Before Host",
            description: "Enable or disabled join before host",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "join_before_host",
              value: zoomSettings.join_before_host ? "yes" : "no",
              options: YES_NO_OPTIONS,
              onChange: val => handleSettingsChange("join_before_host", val === "yes")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Enable Waiting Room",
            description: "Enable or disabled waiting room",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "waiting_room",
              value: zoomSettings.waiting_room ? "yes" : "no",
              options: YES_NO_OPTIONS,
              onChange: val => handleSettingsChange("waiting_room", val === "yes")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Automatically record meeting",
            description: "Record meeting on local computer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "auto_recording",
              value: zoomSettings.auto_recording,
              options: [{
                value: "local",
                label: "Yes"
              }, {
                value: "none",
                label: "No"
              }],
              onChange: val => handleSettingsChange("auto_recording", val)
            })
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomSettingsPage);

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/PageWrapper.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper.module.scss */ "./src/Components/Pages/PageWrapper.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// `flush` drops the wrapper's own side padding for pages that already frame
// themselves with <PageContent>, so the reference's 32px gutter is not doubled.

const PageWrapper = props => {
  const useNativeNavigation = Boolean(window.servvData?.nativeAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window.Intercom) {
      window.Intercom("update", {
        hide_default_launcher: true
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [props.withBackground && !useNativeNavigation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].backdrop
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: [_PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].root, props.flush ? "" : _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].gutterLeft].filter(Boolean).join(" "),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner,
        children: props.loading && !props.withoutSpinner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: [_PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content, props.flush ? "" : _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].gutterRight,
        // `loading` is a legacy global (input.css) blur, not a module class.
        props.loading ? "loading" : ""].filter(Boolean).join(" "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./src/utilities/numbers.js":
/*!**********************************!*\
  !*** ./src/utilities/numbers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceNumbers: () => (/* binding */ coerceNumbers),
/* harmony export */   toInteger: () => (/* binding */ toInteger),
/* harmony export */   toNumber: () => (/* binding */ toNumber)
/* harmony export */ });
// Number inputs keep whatever the user typed, including the empty string left
// behind when the last character is deleted — coercing on every keystroke would
// snap the field back to 0 and make it impossible to clear. These helpers are
// the save-time boundary instead: an empty or unparsable field becomes 0 (or an
// explicit fallback), never "", NaN or null.
const toNumber = (value, fallback = 0) => {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};
const toInteger = (value, fallback = 0) => Math.trunc(toNumber(value, fallback));
// Replaces only the keys the object already carries, so a setting the shop has
// never stored stays absent instead of being written as 0.
const coerceNumbers = (source, coercions) => {
  if (!source || typeof source !== "object") return source;
  const next = {
    ...source
  };
  Object.entries(coercions).forEach(([key, coerce]) => {
    if (key in next) next[key] = coerce(next[key]);
  });
  return next;
};

/***/ }),

/***/ "./src/Components/Containers/BlockStack.module.scss":
/*!**********************************************************!*\
  !*** ./src/Components/Containers/BlockStack.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"stack":"BPxl7EaYWsRh7ulfBRlP","gap0":"iHAu1B_JyfMfzopelk7G","gap1":"MPGwAetEBvL5qxks8LEG","gap2":"KC6IjJkKRI0difjD0oeO","gap3":"jnK0kdrHyrYJj1z7GueZ","gap4":"u9lpBKp4FKgoAkLNt4AQ","gap5":"BEAfcY241WK8Iyzh0jk5","gap6":"Lp7N990cJKUntJoSsx2x","gap8":"w6Wo8QgbUcpEo0UgT0TH","cards":"v9VWwyQPOnpoDYvndXeA","clickable":"JFAMNDkfsbkA7c8w_VNu","disabled":"synf7uPQnXFYnDRxibS3"});

/***/ }),

/***/ "./src/Components/Containers/PageContent.module.scss":
/*!***********************************************************!*\
  !*** ./src/Components/Containers/PageContent.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"shell":"hYf27RiwlyFWwm5KClLO","flush":"a6Ch_fJZ7nWrwzrktMXT","container":"t_beMJmTHY9tOuVGYINQ","svRise":"hEL4_Hi3yhmLC95m6Gv9"});

/***/ }),

/***/ "./src/Components/Controls/CheckboxItem.module.scss":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/CheckboxItem.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"item":"L5QmqxV1Bu2rNw8DJeSB","input":"q8SEsQe7l63aMna9ck0i","box":"yem57zYUvpvi38MwhqOw","mixed":"GcjwpLI0WN2rVhrMlIQ9","dash":"SeY4qpLx7n1s3uZWp_Mk","check":"q8SHrYV01jys1Mf5huSK","label":"ebOb4aWbE8HyJh2PDpkO","disabled":"X9ZmoZnvOZHQ8fApo7kh"});

/***/ }),

/***/ "./src/Components/Controls/NewInputFieldControl.module.scss":
/*!******************************************************************!*\
  !*** ./src/Components/Controls/NewInputFieldControl.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"field":"mnkZ919trJuW2iv63ypl","content":"_FGd5GJTpG4M_jEm0TPQ","disabled":"qdwYYi7sJT_cRtD8ZXMF","textarea":"fx0sZxO2auf836gJwJSc","native":"EWAiYY_5e6MWQVZT0nkg","left":"BY4ZYyoot9eqQrv6a85U","center":"dAdXU7WqEMXyVrL4Ixvj","right":"jbHOWMLsSp0Wmi85kDYz","error":"D1cdINycMkHcDXE1A7an"});

/***/ }),

/***/ "./src/Components/Controls/PageActionButton.module.scss":
/*!**************************************************************!*\
  !*** ./src/Components/Controls/PageActionButton.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"KdySr5oFULfrhKhic35V","primary":"NU3RVqc5Fk7DJ5c4GHf_","secondary":"B48RwPm9xmg1M2dE2g6Q","danger":"q2iOAa3m1ACyQeXOmJaO","dangerSecondary":"YQXykqk_8YtO85727teT","ghost":"fxXHJtT4abc9Wa4LMvVL","dangerGhost":"pY19HOSltbDU49q6SaED","md":"t0fnm1wSsZTfyQQHuzNt","sm":"_Da3u_DsP7V7Jd4Z4lzg","xs":"pEHFbNwftcp4Oei9RRxp","fullWidth":"UyW29jrRG901Y4cS7AHm","iconOnly":"DmgZjtNgpAg3vfeKCEZw","icon":"M_1pjyLi4tiOcq2_oiwe","label":"lcGbrWicMbKyunggF77J"});

/***/ }),

/***/ "./src/Components/Controls/RadioGroup.module.scss":
/*!********************************************************!*\
  !*** ./src/Components/Controls/RadioGroup.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"group":"P9Kl2Un9_qsfvLsb3uXn","column":"R5Y7DlKBt9H_cGkGvei3","option":"y18GMs3wGuRXYbLPwafV","control":"B1dtgsinuS367twlIF3E","label":"pZKmCR2CTakFEnYqYww8"});

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.module.scss":
/*!******************************************************!*\
  !*** ./src/Components/Pages/PageWrapper.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"backdrop":"GwbBdwO7UxUbci6wtyds","root":"whZeFIc454jkDbuWw6zj","gutterLeft":"nH2l6oxNCJ28ihBOUf7w","gutterRight":"KKg_qLS4gdJXh4u6HnvG","spinner":"Al4EqMTkXH8MiW77lCyS","content":"DhHmGpnbQlurQkapo8Ei"});

/***/ }),

/***/ "./src/Components/Pages/Settings/SettingsForm.module.scss":
/*!****************************************************************!*\
  !*** ./src/Components/Pages/Settings/SettingsForm.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"JT7kNmv37AAffgBNdbeo","header":"XdPmWw9wDK2aRzFphicI","divider":"hn5l7Azl_nIaym7PE7je","panel":"UGfXxlFR5ilFD8sxO1_w","group":"epypZ8f4JEQzWHw04Em9","rows":"enc7xYHiOdSIdPo1aH0R","row":"fCwwvbEUlBhMFhgfRDmX","label":"lKHPeQYSSK_yL3kRvJO3","value":"L4o1zhrHutBPRTWb0ZvT","hint":"xwHDkkCCq_GtaMmJIQzd","compact":"_L8q5FLK_dXxJz2wM0kK","number":"OYUDThTk_5EYY672_Ewq","times":"J54nBoJExP4ccQrFweqG","billing":"UCeg6yegK1vwkimqA82d"});

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_Integrations_ZoomSettingsPage_jsx.js.map?ver=55df7125c8bb53347d40