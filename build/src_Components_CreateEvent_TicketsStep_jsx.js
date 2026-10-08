"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_CreateEvent_TicketsStep_jsx"],{

/***/ "./src/Components/Containers/Dropdown.jsx":
/*!************************************************!*\
  !*** ./src/Components/Containers/Dropdown.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.module.scss */ "./src/Components/Containers/Dropdown.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// `surface` draws the white card around the menu. Pass false when the child is
// already a surface of its own (CalendarInline) so it isn't framed twice.

const Dropdown = ({
  activator,
  status,
  children,
  onClose,
  align = "right",
  surface = true,
  className = "",
  dropdownClassName = "",
  ...rest
}) => {
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [dropdownStyle, setDropdownStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    minWidth: 240
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!status) return;
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [status, onClose]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status && dropdownRef.current) {
      const dropdown = dropdownRef.current.querySelector(".dropdown-content-fix");
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        let newStyle = {
          minWidth: 240
        };
        if (rect.right > viewportWidth) {
          newStyle.right = 0;
          newStyle.left = "auto";
        }
        if (rect.left < 0) {
          newStyle.left = 0;
          newStyle.right = "auto";
        }
        setDropdownStyle({
          ...newStyle
        });
      }
    }
  }, [status, children]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ref: dropdownRef,
    className: [_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].root, className].filter(Boolean).join(" "),
    ...rest,
    children: [activator, status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: [_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].menu, dropdownClassName].filter(Boolean).join(" "),
      style: align === "left" ? {
        minWidth: 240,
        left: 0,
        right: "auto"
      } : {
        minWidth: 240,
        right: 0,
        left: "auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: ["dropdown-content-fix", surface ? _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].surface : ""].filter(Boolean).join(" "),
        style: dropdownStyle,
        children: children
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./src/Components/Containers/InteractiveCard.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/InteractiveCard.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const InteractiveCard = ({
  isPremium = false,
  background,
  onClick,
  subtitle,
  title,
  text,
  action,
  footer,
  children,
  style,
  className = "",
  selected = false
}) => {
  const computedBg = background !== null && background !== void 0 ? background : isPremium ? "#462986" : "#FFFFFF";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `relative flex flex-col rounded-2xl border p-6 flex-1 ${className}${onClick ? " cursor-pointer" : ""}`,
    style: {
      background: computedBg,
      border: selected ? "2px solid #7A5AF8" : "1px solid #E6EBE7",
      boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
      ...style
    },
    onClick: onClick,
    children: [selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-3 right-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.CheckMark, {})
    }), (subtitle || title || text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col items-center gap-2 text-center",
      children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: subtitle
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: title
      }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: text
      })]
    }), children, action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-auto pt-6",
      children: action
    }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-3 text-center",
      children: footer
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveCard);

/***/ }),

/***/ "./src/Components/Controls/CalendarInline.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/CalendarInline.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/dist/esm/DayPicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


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
  defaultMonth
}) => {
  var _value$startDate, _value$endDate;
  const isRange = mode === "range";
  const selected = isRange ? value?.startDate || value?.endDate ? {
    from: (_value$startDate = value.startDate) !== null && _value$startDate !== void 0 ? _value$startDate : undefined,
    to: (_value$endDate = value.endDate) !== null && _value$endDate !== void 0 ? _value$endDate : undefined
  } : undefined : value !== null && value !== void 0 ? value : undefined;
  const handleSelect = next => {
    var _next$from, _ref, _next$to;
    if (!isRange) {
      onChange(next);
      return;
    }
    onChange({
      startDate: (_next$from = next?.from) !== null && _next$from !== void 0 ? _next$from : null,
      endDate: (_ref = (_next$to = next?.to) !== null && _next$to !== void 0 ? _next$to : next?.from) !== null && _ref !== void 0 ? _ref : null
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "date-picker-menu",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_day_picker__WEBPACK_IMPORTED_MODULE_1__.DayPicker, {
      mode: mode,
      selected: selected,
      defaultMonth: defaultMonth !== null && defaultMonth !== void 0 ? defaultMonth : isRange ? selected?.from : selected,
      onSelect: handleSelect,
      disabled: disabled,
      weekStartsOn: 1 // Mo → Su
      ,
      showOutsideDays: true
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarInline);

/***/ }),

/***/ "./src/Components/Controls/NewDatePickerControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewDatePickerControl.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _CalendarInline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarInline */ "./src/Components/Controls/CalendarInline.jsx");
/* harmony import */ var _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewDatePickerControl.module.scss */ "./src/Components/Controls/NewDatePickerControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_FORMAT = "MMM DD, YYYY";
const toDate = value => {
  if (!value) return null;
  const parsed = moment__WEBPACK_IMPORTED_MODULE_1___default().isMoment(value) ? value : moment__WEBPACK_IMPORTED_MODULE_1___default()(value);
  return parsed.isValid() ? parsed.startOf("day").toDate() : null;
};

// A calendar icon button that opens CalendarInline in a popover.
//
// mode="range" takes and emits { startDate, endDate } as Dates — the shape the
// filter pages already keep in state. mode="single" takes anything
// moment-parsable and emits a moment, matching the event form's handlers.
const NewDatePickerControl = ({
  mode = "range",
  value,
  onChange = () => {},
  label = "Select dates",
  displayFormat = DEFAULT_FORMAT,
  minDate,
  maxDate,
  disabled = false,
  fullWidth = false,
  className = ""
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isRange = mode === "range";
  const selected = isRange ? {
    startDate: toDate(value?.startDate),
    endDate: toDate(value?.endDate)
  } : toDate(value);
  const before = toDate(minDate);
  const after = toDate(maxDate);
  const disabledDays = before || after ? {
    ...(before ? {
      before
    } : {}),
    ...(after ? {
      after
    } : {})
  } : undefined;
  const triggerLabel = () => {
    if (!isRange) {
      return selected ? moment__WEBPACK_IMPORTED_MODULE_1___default()(selected).format(displayFormat) : label;
    }
    if (!selected.startDate) return label;
    const from = moment__WEBPACK_IMPORTED_MODULE_1___default()(selected.startDate).format(displayFormat);
    if (!selected.endDate || selected.endDate.valueOf() === selected.startDate.valueOf()) {
      return from;
    }
    return `${from} – ${moment__WEBPACK_IMPORTED_MODULE_1___default()(selected.endDate).format(displayFormat)}`;
  };
  const handleSelect = next => {
    if (!isRange) {
      if (!next) return;
      onChange(moment__WEBPACK_IMPORTED_MODULE_1___default()(next));
      setOpen(false);
      return;
    }
    onChange(next);
    // Hold the popover open until both ends of the range are picked.
    if (next?.startDate && next?.endDate) setOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: [_NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root, fullWidth ? _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].block : "", className].filter(Boolean).join(" "),
    align: "left",
    surface: false,
    status: open && !disabled,
    onClose: () => setOpen(false),
    activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      type: "button",
      className: _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button,
      disabled: disabled,
      onClick: () => setOpen(prev => !prev),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
        className: _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].icon,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
          x: "3",
          y: "5",
          width: "18",
          height: "16",
          rx: "3",
          stroke: "currentColor",
          strokeWidth: "1.9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M8 3v4M16 3v4M3 11h18",
          stroke: "currentColor",
          strokeWidth: "1.9"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label,
        children: triggerLabel()
      })]
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CalendarInline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      mode: mode,
      value: selected,
      onChange: handleSelect,
      disabled: disabledDays
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewDatePickerControl);

/***/ }),

/***/ "./src/Components/Controls/NewInputControl.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Controls/NewInputControl.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewInputControl.module.scss */ "./src/Components/Controls/NewInputControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// A labelled field: NewInputFieldControl plus a label and error message.

const NewInputControl = ({
  label = "",
  helpText = "",
  placeholder = "",
  error,
  style = {},
  width = "100%",
  ...inputProps
}) => {
  let errorMessage = "";
  if (typeof error === "string") {
    errorMessage = error;
  } else if (error) {
    errorMessage = "This field is required.";
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].wrapper,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
      className: _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ...inputProps,
      placeholder: placeholder || helpText,
      error: Boolean(error),
      width: width,
      style: style
    }), errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _NewInputControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errorText,
      role: "alert",
      children: errorMessage
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewInputControl);

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

/***/ "./src/Components/Controls/NewTimeInputControl.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/NewTimeInputControl.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _NewTimePeriodControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTimePeriodControl */ "./src/Components/Controls/NewTimePeriodControl.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const NewTimeInputControl = ({
  label,
  time,
  disabled = false,
  timeFormat = "hh:mm a",
  onChange,
  align = "start",
  validationError = false
}) => {
  const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!time) return;
    const m = moment__WEBPACK_IMPORTED_MODULE_3___default()(time);
    setHours(timeFormat === "hh:mm a" ? m.format("hh") : m.format("HH"));
    setMinutes(m.format("mm"));
    // setHasError(false);
  }, [time, timeFormat]);
  const validateTime = (h, m) => {
    if (h === "" || m === "") return false;
    const hour = Number(h);
    const minute = Number(m);
    if (Number.isNaN(hour) || Number.isNaN(minute)) return false;
    if (timeFormat === "hh:mm a") {
      if (hour < 1 || hour > 12) return false;
    } else {
      if (hour < 0 || hour > 23) return false;
    }
    if (minute < 0 || minute > 59) return false;
    return true;
  };
  const commitTime = (h, m) => {
    const isValid = validateTime(h, m);
    setHasError(!isValid);
    if (!isValid) return;
    let hour = Number(h);
    const minute = Number(m);
    const base = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time) : moment__WEBPACK_IMPORTED_MODULE_3___default()();
    if (timeFormat === "hh:mm a") {
      const period = base.format("a");
      if (period === "pm" && hour !== 12) hour += 12;
      if (period === "am" && hour === 12) hour = 0;
    }
    const newTime = base.clone().set({
      hour,
      minute,
      second: 0
    });
    onChange(newTime);
  };
  const digitsOnly = v => v.replace(/[^\d]/g, "");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `input-container-col items-start ${align === "start" ? "grow" : "grow-0"} justify-between`,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "section-description",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "input-container-row items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: hours,
        onChange: v => setHours(digitsOnly(v)),
        onBlur: () => commitTime(hours, minutes),
        maxLength: 2,
        disabled: disabled,
        align: "center",
        width: "64px",
        error: hasError || validationError
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "section-description",
        children: ":"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: minutes,
        onChange: v => setMinutes(digitsOnly(v)),
        onBlur: () => commitTime(hours, minutes),
        maxLength: 2,
        disabled: disabled,
        align: "center",
        width: "64px",
        error: hasError || validationError
      }), timeFormat === "hh:mm a" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NewTimePeriodControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        time: time,
        onChange: val => {
          const t = time ? moment__WEBPACK_IMPORTED_MODULE_3___default()(time).clone() : moment__WEBPACK_IMPORTED_MODULE_3___default()();
          const hh = t.hour();
          if (val === "am" && hh >= 12) t.hour(hh - 12);
          if (val === "pm" && hh < 12) t.hour(hh + 12);
          onChange(t);
        },
        disabled: disabled
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTimeInputControl);

/***/ }),

/***/ "./src/Components/Controls/NewTimePeriodControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Controls/NewTimePeriodControl.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const NewTimePeriodControl = ({
  time,
  disabled = false,
  onChange = () => {}
}) => {
  const period = time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format("a") : "am";
  const handleToggle = () => {
    onChange(period === "am" ? "pm" : "am");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    type: "button",
    className: "servv-time-period",
    onClick: handleToggle,
    disabled: disabled,
    children: period
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTimePeriodControl);

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

/***/ "./src/Components/CreateEvent/StepActions.jsx":
/*!****************************************************!*\
  !*** ./src/Components/CreateEvent/StepActions.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// The footer every event-form and onboarding step ends with: an optional
// Save and Exit, an optional Previous, and the step's primary action.
//
// A handler left undefined drops its button, which is how the steps express
// "no Save and Exit while creating" or "nothing to continue to yet" — the call
// sites used to wrap each button in its own conditional for that.

const StepActions = ({
  onSaveAndExit,
  onPrevious,
  onPrimary,
  primaryText = "Continue",
  previousText = "Previous",
  saveAndExitText = "Save and Exit",
  primaryDisabled = false,
  className = "mt-auto"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  className: `servv_actions ${className}`,
  children: [onSaveAndExit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: "button",
    className: "servv_button servv_button--secondary",
    onClick: onSaveAndExit,
    children: saveAndExitText
  }), onPrevious && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: "button",
    className: "servv_button servv_button--secondary",
    onClick: onPrevious,
    children: previousText
  }), onPrimary && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: "button",
    className: "servv_button servv_button--primary",
    onClick: onPrimary,
    disabled: primaryDisabled,
    children: primaryText
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepActions);

/***/ }),

/***/ "./src/Components/CreateEvent/TicketsStep.jsx":
/*!****************************************************!*\
  !*** ./src/Components/CreateEvent/TicketsStep.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _StepActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepActions */ "./src/Components/CreateEvent/StepActions.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/InteractiveCard */ "./src/Components/Containers/InteractiveCard.jsx");
/* harmony import */ var _Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/RadioGroup */ "./src/Components/Controls/RadioGroup.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controls/NewTimeInputControl */ "./src/Components/Controls/NewTimeInputControl.jsx");
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const TicketsStep = ({
  attributes,
  setAttributes,
  changeStep,
  stripeConnected,
  isNew,
  settings,
  isError,
  handleFormSubmit,
  setError = () => {},
  isOnboarding,
  setFullWidth
}) => {
  var _activeTicket$quantit, _ref, _product$quantity, _activeTicket$price, _activeTicket$price2;
  const {
    quantity = 100,
    availability = "open" // "open" | "scheduled"
  } = attributes || {};
  const MIN_QTY = 1;
  const [MAX_QTY, SET_MAX_QTY] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.free_registrants_limit || 15);
  const [defaultQty, setDefaultQty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const [defaultPrice, setDefaultPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const isFreePlanRestricted = settings?.current_plan?.id === 1;
  const AVAILABILITY_OPTIONS = [{
    value: "open",
    label: "Open"
  }, {
    value: "scheduled",
    label: "Sales Start & End"
  }];
  const [TIYCKET_TYPES, setTicketTypes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    value: "free",
    label: "Free"
  }, {
    value: "paid",
    label: "Paid",
    disabled: true
  }, {
    value: "donation",
    label: "Donation",
    disabled: true
  }]);
  const tickets = attributes?.tickets || [];
  const timezone = attributes?.meeting?.timezone || "UTC";
  const product = attributes?.product;
  const hasProduct = product?.product_id && product?.product_id !== "0";
  const isProductMode = !tickets.length && hasProduct;
  const updateProduct = patch => {
    setAttributes({
      product: {
        ...product,
        ...patch
      }
    });
  };
  const updateTickets = next => {
    const updated = next.map(ticket => {
      if (ticket.action === "remove") return ticket;
      if (ticket.event_id) {
        return {
          ...ticket,
          action: ticket.action || "update"
        };
      }
      return ticket;
    });
    setAttributes({
      tickets: updated
    });
  };
  const updateTicket = (id, patch) => {
    updateTickets(tickets.map(t => t.id === id ? {
      ...t,
      ...patch
    } : t));
  };
  const getTimeFromISO = iso => {
    if (!iso) return "";
    return moment__WEBPACK_IMPORTED_MODULE_8___default()(iso).tz(timezone).format("HH:mm");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const visibleFreeTickets = tickets.filter(t => t.action !== "remove" && t.type === "free");
    const usedFreeQuantity = visibleFreeTickets.reduce((sum, ticket) => sum + Number(ticket.quantity || 0), 0);
    const remaining = Math.max(0, (settings.free_registrants_limit || 15) - usedFreeQuantity);
    SET_MAX_QTY(remaining);
  }, [tickets, settings.free_registrants_limit]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (settings?.settings?.admin_dashboard) {
      let adminSettings = JSON.parse(settings.settings.admin_dashboard);
      let defaultQtyFromSettings = Number.parseInt(adminSettings.default_quantity) || 1;
      setDefaultQty(defaultQtyFromSettings);
      let defaultPriceFromSettings = Number.parseFloat(adminSettings.default_price) || 1;
      setDefaultPrice(defaultPriceFromSettings);
    }
  }, [settings]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (stripeConnected) {
      setTicketTypes([{
        value: "free",
        label: "Free"
      }, {
        value: "paid",
        label: "Paid"
      }, {
        value: "donation",
        label: "Donation"
      }]);
    }
  }, [stripeConnected]);

  // useEffect(() => {
  //   if (!isFreePlanRestricted) return;

  //   if (!tickets.length) {
  //     setAttributes({
  //       tickets: [
  //         {
  //           id: uuidv4(),
  //           type: "free",
  //           title: "Standard",
  //           quantity: defaultQty,
  //           availability: "open",
  //         },
  //       ],
  //     });
  //   }
  // }, [isFreePlanRestricted]);

  const setTimeToISO = (iso, time) => {
    const base = iso ? moment__WEBPACK_IMPORTED_MODULE_8___default()(iso).tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_8___default()().tz(timezone);
    let hour, minute;
    if (typeof time === "string") {
      [hour, minute] = time.split(":").map(Number);
    } else if (typeof time === "object" && time !== null) {
      ({
        hour,
        minute
      } = time);
      if (time.period === "PM" && hour < 12) hour += 12;
      if (time.period === "AM" && hour === 12) hour = 0;
    } else {
      console.warn("Unsupported time format:", time);
      return base.format("YYYY-MM-DDTHH:mm:ss");
    }
    base.set({
      hour,
      minute,
      second: 0
    });
    return base.format("YYYY-MM-DDTHH:mm:ss");
  };
  const getSaleStartDate = () => {
    if (!activeTicket?.start_datetime) {
      return {
        date: null,
        label: "Select date"
      };
    }
    const dateMoment = moment__WEBPACK_IMPORTED_MODULE_8___default().tz(activeTicket.start_datetime, timezone);
    const dateStr = dateMoment.format("YYYY-MM-DD");
    return {
      date: dateStr,
      label: dateStr
    };
  };
  const getSaleEndDate = () => {
    if (!activeTicket?.end_datetime) {
      return {
        date: null,
        label: "Select date"
      };
    }
    const dateMoment = moment__WEBPACK_IMPORTED_MODULE_8___default().tz(activeTicket.end_datetime, timezone);
    const dateStr = dateMoment.format("YYYY-MM-DD");
    return {
      date: dateStr,
      label: dateStr
    };
  };
  const getSaleStartTime = () => {
    return activeTicket?.start_datetime ? moment__WEBPACK_IMPORTED_MODULE_8___default().tz(activeTicket.start_datetime, timezone) : moment__WEBPACK_IMPORTED_MODULE_8___default()().tz(timezone);
  };
  const getSaleEndTime = () => {
    return activeTicket?.end_datetime ? moment__WEBPACK_IMPORTED_MODULE_8___default().tz(activeTicket.end_datetime, timezone) : moment__WEBPACK_IMPORTED_MODULE_8___default()().add(1, "hour").tz(timezone);
  };
  const handleSaleStartDateChange = date => {
    const base = activeTicket?.start_datetime ? moment__WEBPACK_IMPORTED_MODULE_8___default().tz(activeTicket.start_datetime, "YYYY-MM-DDTHH:mm:ss", timezone) : moment__WEBPACK_IMPORTED_MODULE_8___default()().tz(timezone);
    const selectedMoment = moment__WEBPACK_IMPORTED_MODULE_8___default().isMoment(date) ? date : moment__WEBPACK_IMPORTED_MODULE_8___default()(date);
    const newDateTime = moment__WEBPACK_IMPORTED_MODULE_8___default().tz({
      year: selectedMoment.year(),
      month: selectedMoment.month(),
      date: selectedMoment.date(),
      hour: base.hour(),
      minute: base.minute(),
      second: 0
    }, timezone);
    const formatted = newDateTime.format("YYYY-MM-DDTHH:mm:ss");
    updateTicket(activeTicketId, {
      start_datetime: formatted
    });
  };
  const handleSaleEndDateChange = date => {
    const base = activeTicket?.end_datetime ? moment__WEBPACK_IMPORTED_MODULE_8___default().tz(activeTicket.end_datetime, "YYYY-MM-DDTHH:mm:ss", timezone) : moment__WEBPACK_IMPORTED_MODULE_8___default()().add(1, "day").tz(timezone);
    const selectedMoment = moment__WEBPACK_IMPORTED_MODULE_8___default().isMoment(date) ? date : moment__WEBPACK_IMPORTED_MODULE_8___default()(date);
    const newDateTime = moment__WEBPACK_IMPORTED_MODULE_8___default().tz({
      year: selectedMoment.year(),
      month: selectedMoment.month(),
      date: selectedMoment.date(),
      hour: base.hour(),
      minute: base.minute(),
      second: 0
    }, timezone);
    const formatted = newDateTime.format("YYYY-MM-DDTHH:mm:ss");
    updateTicket(activeTicketId, {
      end_datetime: formatted
    });
  };
  const handleSaleStartTimeChange = momentObj => {
    if (!momentObj) return;
    const formatted = momentObj.format("YYYY-MM-DDTHH:mm:ss");
    updateTicket(activeTicketId, {
      start_datetime: formatted
    });
  };
  const handleSaleEndTimeChange = momentObj => {
    if (!momentObj) return;
    const formatted = momentObj.format("YYYY-MM-DDTHH:mm:ss");
    updateTicket(activeTicketId, {
      end_datetime: formatted
    });
  };
  const [activeTicketId, setActiveTicketId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(tickets[0]?.id || null);
  const visibleTickets = tickets.filter(t => t.action !== "remove");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const current = tickets.find(ticket => ticket.id === activeTicketId);
    if (!current) return;
    if (current.start_datetime || current.end_datetime) {
      updateTicket(activeTicketId, {
        availability: "scheduled"
      });
    }
  }, [activeTicketId]);
  const removeTicket = id => {
    const ticketIndex = tickets.findIndex(t => t.id === id);
    if (ticketIndex === -1) return;
    const ticket = tickets[ticketIndex];
    if (ticket.event_id) {
      const updatedTickets = [...tickets];
      updatedTickets[ticketIndex] = {
        ...ticket,
        action: "remove"
      };
      updateTickets(updatedTickets);
      setActiveTicketId(null);
    } else {
      updateTickets(tickets.filter(t => t.id !== id));
      setActiveTicketId(null);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!activeTicketId && tickets.length) {
      setActiveTicketId(tickets[0].id);
    }
  }, [tickets]);
  const activeTicket = visibleTickets.find(t => t.id === activeTicketId);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!activeTicket && visibleTickets.length) {
      setActiveTicketId(visibleTickets[0].id);
    }
    if (!visibleTickets.length) {
      setActiveTicketId(null);
    }
  }, [visibleTickets, activeTicket]);
  const qty = (_activeTicket$quantit = activeTicket?.quantity) !== null && _activeTicket$quantit !== void 0 ? _activeTicket$quantit : MIN_QTY;
  const isFreeTicket = activeTicket?.type === "free";
  const productMaxQty = settings.free_registrants_limit || 15;
  const productQty = (_ref = (_product$quantity = product.quantity) !== null && _product$quantity !== void 0 ? _product$quantity : product.current_quantity) !== null && _ref !== void 0 ? _ref : productMaxQty;
  const activeFreeQty = isFreeTicket && typeof activeTicket?.quantity === "number" ? activeTicket.quantity : 0;
  const MAX_TICKET_QTY = isFreeTicket ? activeFreeQty + MAX_QTY : 500;
  const freeQuotaExcludingActive = (() => {
    if (!activeTicket) return MAX_QTY;
    if (activeTicket.type !== "free") {
      return MAX_QTY;
    }
    return MAX_QTY + Number(activeTicket.quantity || 0);
  })();
  const addTicket = () => {
    const remainingFreeQuota = MAX_QTY;
    const initialQty = remainingFreeQuota > 0 ? Math.min(defaultQty, remainingFreeQuota) : 0;
    const newTicket = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      type: "free",
      title: "Standard",
      quantity: initialQty,
      availability: "open"
    };
    updateTickets([...tickets, newTicket]);
    setActiveTicketId(newTicket.id);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isOnboarding) setFullWidth?.(false);
  }, [isOnboarding]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!isOnboarding || tickets.length) return;
    const initialQty = Math.min(defaultQty, MAX_QTY > 0 ? MAX_QTY : 1);
    const newTicket = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      type: "free",
      title: "Standard",
      quantity: initialQty,
      availability: "open"
    };
    updateTickets([newTicket]);
    setActiveTicketId(newTicket.id);
  }, [isOnboarding]);
  const handleOnboardingTypeSelect = type => {
    if (activeTicket?.type === type) return;
    if (activeTicket) {
      const prevQty = Number(activeTicket.quantity || MIN_QTY);
      let nextQty = prevQty;
      if (type === "free") {
        nextQty = Math.min(prevQty, freeQuotaExcludingActive);
      }
      nextQty = Math.max(MIN_QTY, nextQty);
      const patch = {
        type,
        quantity: nextQty
      };
      if (type === "paid" || type === "donation") {
        const currentPrice = Number(activeTicket?.price);
        patch.price = currentPrice > 0 ? String(activeTicket.price) : String(defaultPrice);
      }
      updateTicket(activeTicketId, patch);
    } else {
      const initialQty = type === "free" ? Math.min(defaultQty, MAX_QTY > 0 ? MAX_QTY : 1) : defaultQty;
      const newTicket = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        type,
        title: "Standard",
        quantity: initialQty,
        availability: "open",
        ...(type === "paid" ? {
          price: String(defaultPrice)
        } : {})
      };
      updateTickets([newTicket]);
      setActiveTicketId(newTicket.id);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "step__wrapper servv_tickets",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.TicketIcon, {
        className: "step__header_icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
          className: "step__header_title",
          children: "Tickets"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          className: "step__description",
          children: "Create ticket types and quantities"
        })]
      }), !isNew && attributes.meeting?.occurrences && attributes.meeting?.occurrences?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: "step__description",
        children: "This is a recurring event. To see tickets for a specific date, please view that occurrence."
      })]
    }), isOnboarding ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "step__content w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "grid grid-cols-2 gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: () => handleOnboardingTypeSelect("free"),
          selected: activeTicket?.type === "free",
          style: {
            minHeight: 0,
            cursor: "pointer"
          },
          subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-sm font-bold tracking-widest uppercase",
            style: {
              color: "#872CFA"
            },
            children: "Tickets"
          }),
          title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "text-3xl font-bold",
            style: {
              color: "#070908"
            },
            children: "Free"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: stripeConnected ? () => handleOnboardingTypeSelect("paid") : undefined,
          selected: activeTicket?.type === "paid",
          style: {
            minHeight: 0,
            opacity: stripeConnected ? 1 : 0.45,
            cursor: stripeConnected ? "pointer" : "not-allowed"
          },
          subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "text-sm font-bold tracking-widest uppercase",
            style: {
              color: "#872CFA"
            },
            children: stripeConnected ? "Tickets" : "Requires Stripe"
          }),
          title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "text-3xl font-bold",
            style: {
              color: "#070908"
            },
            children: "Paid"
          })
        })]
      }), activeTicket && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: isOnboarding ? "flex flex-col gap-4 mt-4 w-full max-w-[384px] self-stretch mx-auto" : `flex flex-col gap-4 mt-4`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: "step__content_title",
            children: "Title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            placeholder: "Enter title",
            disabled: isFreePlanRestricted,
            value: activeTicket.title || "",
            onChange: val => updateTicket(activeTicketId, {
              title: val
            })
          })]
        }), activeTicket.type === "paid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "step__content_block",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: "step__content_title",
            children: "Price"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: "text",
            inputMode: "decimal",
            placeholder: "Enter price, up to 1000",
            value: (_activeTicket$price = activeTicket.price) !== null && _activeTicket$price !== void 0 ? _activeTicket$price : "",
            error: isError ? "Please enter valid price" : "",
            onChange: val => {
              if (val === "") {
                updateTicket(activeTicketId, {
                  price: ""
                });
                setError(true);
                return;
              } else {
                setError(false);
              }
              if (!/^\d+(\.\d{0,2})?$/.test(val)) return;
              if (Number.parseFloat(val) > 1000) return;
              if (Number.parseInt(val) === 0) {
                setError(true);
              } else {
                setError(false);
              }
              updateTicket(activeTicketId, {
                price: val
              });
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "servv_ticket_quantity",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
            className: "step__content_title",
            children: "Quantity"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "servv_ticket_quantity__input",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              type: "button",
              onClick: () => {
                if (qty > MIN_QTY) updateTicket(activeTicketId, {
                  quantity: qty - 1
                });
              },
              disabled: qty <= MIN_QTY,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MinusIcon, {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
              type: "text",
              inputMode: "numeric",
              pattern: "[0-9]*",
              className: "servv_ticket_quantity__field",
              placeholder: "Enter a quantity",
              value: qty === "" ? "" : String(qty),
              onChange: e => {
                const raw = e.target.value;
                if (raw === "") {
                  updateTicket(activeTicketId, {
                    quantity: ""
                  });
                  return;
                }
                if (!/^\d+$/.test(raw)) return;
                const num = Number(raw);
                if (num >= MIN_QTY && num <= MAX_TICKET_QTY) updateTicket(activeTicketId, {
                  quantity: num
                });
              },
              onBlur: () => {
                if (activeTicket.quantity === "") updateTicket(activeTicketId, {
                  quantity: MIN_QTY
                });
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              type: "button",
              onClick: () => {
                if (qty < MAX_TICKET_QTY) updateTicket(activeTicketId, {
                  quantity: qty + 1
                });
              },
              disabled: qty >= MAX_TICKET_QTY,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {})
            })]
          }), isFreeTicket && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
            className: "servv_ticket_quantity__hint",
            children: ["Maximum number of tickets ", MAX_QTY]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StepActions__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onPrevious: () => changeStep("venue"),
        onPrimary: activeTicket ? () => handleFormSubmit(true) : undefined,
        primaryText: "Create",
        primaryDisabled: isError
      })]
    }) : isProductMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "step__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "step__content_block",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: `servv_ticket_card servv_ticket_card--active`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "servv_ticket_card__title",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: "Standard (free)"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "servv_ticket_card__count",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong", {
              children: productQty
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              children: productQty !== 1 ? "tickets" : "ticket"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "servv_ticket_quantity",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
          className: "step__content_title",
          children: "Quantity"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "servv_ticket_quantity__input",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            type: "button",
            onClick: () => {
              const qty = Number(productQty);
              if (qty > MIN_QTY) updateProduct({
                quantity: qty - 1
              });
            },
            disabled: Number(productQty) <= MIN_QTY,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MinusIcon, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
            type: "text",
            inputMode: "numeric",
            pattern: "[0-9]*",
            className: "servv_ticket_quantity__field",
            placeholder: "Enter a quantity",
            value: productQty === "" ? "" : String(productQty),
            onChange: e => {
              const raw = e.target.value;
              if (raw === "") {
                updateProduct({
                  quantity: ""
                });
                return;
              }
              if (!/^\d+$/.test(raw)) return;
              const num = Number(raw);
              if (num >= MIN_QTY && num <= productMaxQty) updateProduct({
                quantity: num
              });
            },
            onBlur: () => {
              if (!product.quantity) updateProduct({
                quantity: MIN_QTY
              });
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            type: "button",
            onClick: () => {
              const qty = Number(productQty);
              if (qty < productMaxQty) updateProduct({
                quantity: qty + 1
              });
            },
            disabled: Number(productQty) >= productMaxQty,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "servv_ticket_quantity__hint",
          children: ["Maximum number of tickets ", MAX_QTY]
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "step__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
          type: "button",
          className: "servv_ticket_add",
          onClick: addTicket,
          disabled: isFreePlanRestricted,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: "Add ticket"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "step__content_block",
          children: tickets.filter(t => t.action !== "remove").map(ticket => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: `servv_ticket_card ${activeTicketId === ticket.id ? "servv_ticket_card--active" : ""}`,
            onClick: () => setActiveTicketId(ticket.id),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "servv_ticket_card__title",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
                children: [ticket.title || "Untitled", " (", ticket.type, ")"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                className: "servv_ticket_card__remove",
                onClick: e => {
                  e.stopPropagation();
                  removeTicket(ticket.id);
                },
                disabled: isFreePlanRestricted,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MinusIcon, {})
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "servv_ticket_card__count",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong", {
                children: ticket.quantity
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                children: ticket.quantity > 1 ? "tickets" : "ticket"
              })]
            })]
          }, ticket.id))
        }), tickets.length > 0 && activeTicketId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "step__content_block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "step__content_title",
              children: "Type"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "ticket-type",
              value: activeTicket?.type || "free",
              options: TIYCKET_TYPES,
              disabled: isFreePlanRestricted,
              onChange: val => {
                const prevType = activeTicket?.type;
                const prevQty = Number(activeTicket?.quantity || MIN_QTY);
                let nextQty = prevQty;
                let nextPrice = activeTicket?.price;
                if (val === "free") {
                  nextQty = Math.min(prevQty, freeQuotaExcludingActive);
                  nextPrice = undefined;
                }
                if (prevType === "free" && val !== "free") {
                  nextQty = Math.min(prevQty, 500);
                }
                if (val === "paid") {
                  const currentPrice = Number(activeTicket?.price);
                  if (!currentPrice || currentPrice <= 0) {
                    nextPrice = String(defaultPrice);
                  }
                }
                nextQty = Math.max(MIN_QTY, nextQty);
                const patch = {
                  type: val,
                  quantity: nextQty
                };
                if (val === "paid" || val === "donation") {
                  var _nextPrice;
                  patch.price = (_nextPrice = nextPrice) !== null && _nextPrice !== void 0 ? _nextPrice : "";
                }
                updateTicket(activeTicketId, patch);
              }
            }), !stripeConnected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              className: "servv_ticket_quantity__hint text-justify",
              children: "To create paid or donation tickets, you need to connect your Stripe account."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "step__content_block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "step__content_title",
              children: "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              placeholder: "Enter title",
              value: activeTicket?.title || "",
              onChange: val => updateTicket(activeTicketId, {
                title: val
              })
            })]
          }), activeTicket?.type === "paid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "step__content_block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "step__content_title",
              children: "Price"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
              type: "text",
              inputMode: "decimal",
              placeholder: "Enter price, up to 1000",
              value: (_activeTicket$price2 = activeTicket?.price) !== null && _activeTicket$price2 !== void 0 ? _activeTicket$price2 : "",
              error: isError ? "Please enter valid price" : "",
              maxValue: 1000,
              onChange: val => {
                if (val === "") {
                  updateTicket(activeTicketId, {
                    price: ""
                  });
                  setError(true);
                  return;
                } else {
                  setError(false);
                }
                if (!/^\d+(\.\d{0,2})?$/.test(val)) return;
                const numVal = Number.parseFloat(val);
                if (numVal > 1000) {
                  // setError(true);
                  return;
                }
                if (Number.parseInt(val) === 0) {
                  setError(true);
                } else {
                  setError(false);
                }
                updateTicket(activeTicketId, {
                  price: val
                });
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "servv_ticket_quantity",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
              className: "step__content_title",
              children: "Quantity"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "servv_ticket_quantity__input",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                onClick: () => {
                  if (qty > MIN_QTY) {
                    updateTicket(activeTicketId, {
                      quantity: qty - 1
                    });
                  }
                },
                disabled: qty <= MIN_QTY,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.MinusIcon, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
                type: "text",
                inputMode: "numeric",
                pattern: "[0-9]*",
                className: "servv_ticket_quantity__field",
                placeholder: "Enter a quantity",
                value: qty === "" ? "" : String(qty),
                onChange: e => {
                  const raw = e.target.value;
                  if (raw === "") {
                    updateTicket(activeTicketId, {
                      quantity: ""
                    });
                    return;
                  }
                  if (!/^\d+$/.test(raw)) return;
                  const num = Number(raw);
                  if (num >= MIN_QTY && num <= MAX_TICKET_QTY) {
                    updateTicket(activeTicketId, {
                      quantity: num
                    });
                  }
                },
                onBlur: () => {
                  // normalize empty → MIN_QTY
                  if (activeTicket.quantity === "") {
                    updateTicket(activeTicketId, {
                      quantity: MIN_QTY
                    });
                  }
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                onClick: () => {
                  if (qty < MAX_TICKET_QTY) {
                    updateTicket(activeTicketId, {
                      quantity: qty + 1
                    });
                  }
                },
                disabled: qty >= MAX_TICKET_QTY,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {})
              })]
            }), isFreeTicket && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
              className: "servv_ticket_quantity__hint",
              children: ["Maximum number of tickets ", MAX_QTY]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "step__content_block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "step__content_title",
              children: "Availability"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "ticket-availability",
              value: activeTicket?.availability || "open",
              options: AVAILABILITY_OPTIONS,
              onChange: val => updateTicket(activeTicketId, {
                availability: val,
                ...(val === "open" ? {
                  start_datetime: undefined,
                  end_datetime: undefined
                } : {})
              }),
              disabled: settings?.current_plan?.id === 1 || !settings.current_plan
            })]
          }), activeTicket?.availability === "scheduled" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "servv_ticket_sales_block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "servv_datetime_row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "servv_datetime_col",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                  className: "step__content_title",
                  children: "Start date"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  mode: "single",
                  label: getSaleStartDate().label,
                  value: getSaleStartDate().date,
                  onChange: handleSaleStartDateChange,
                  fullWidth: true,
                  minDate: new Date()
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "servv_datetime_col",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                  className: "step__content_title",
                  children: "Start time"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  time: getSaleStartTime(),
                  onChange: handleSaleStartTimeChange
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "servv_datetime_row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "servv_datetime_col",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                  className: "step__content_title",
                  children: "End date"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  mode: "single",
                  label: getSaleEndDate().label,
                  value: getSaleEndDate().date,
                  onChange: handleSaleEndDateChange,
                  fullWidth: true,
                  minDate: new Date()
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "servv_datetime_col",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                  className: "step__content_title",
                  children: "End time"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  time: getSaleEndTime(),
                  onChange: handleSaleEndTimeChange
                })]
              })]
            })]
          })]
        })]
      })
    }), !isOnboarding && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StepActions__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSaveAndExit: isNew ? undefined : () => handleFormSubmit(true),
      onPrevious: () => changeStep("venue"),
      onPrimary: () => isOnboarding ? handleFormSubmit(true) : changeStep("filters"),
      primaryDisabled: isError
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketsStep);

/***/ }),

/***/ "./src/Components/Containers/Dropdown.module.scss":
/*!********************************************************!*\
  !*** ./src/Components/Containers/Dropdown.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"Q6YwFze7pNwAmhdBzAGO","menu":"lY9gKiKMaPORXMiAcGOK","surface":"seqzcz7VZqZZnhfbs0wM"});

/***/ }),

/***/ "./src/Components/Controls/NewDatePickerControl.module.scss":
/*!******************************************************************!*\
  !*** ./src/Components/Controls/NewDatePickerControl.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"HwtSSogopbnUP9_7iCDB","button":"F2l5K1tOxIJTh0jK3Kpp","icon":"x9Ei7o54rk9kgx3hWQh3","label":"GHYx3uCSPULDwTUL_kND","block":"due974qaf_ShRcdQYcxi"});

/***/ }),

/***/ "./src/Components/Controls/NewInputControl.module.scss":
/*!*************************************************************!*\
  !*** ./src/Components/Controls/NewInputControl.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"IFKo2Oy4jAQImQYKp3th","label":"NWAvKcaQuc1HAdNqx3XR","errorText":"zP6FRtHJ4yJjeWueA9uo"});

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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


/***/ })

}]);
//# sourceMappingURL=src_Components_CreateEvent_TicketsStep_jsx.js.map?ver=fdd156040d585af8d8ec