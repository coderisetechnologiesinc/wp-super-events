"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_AnalyticsPage_jsx"],{

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

/***/ "./src/Components/Containers/TabsComponent.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Containers/TabsComponent.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TabsComponent = ({
  tabsList,
  selected,
  handleSelectChange,
  fullWidth
}) => {
  const renderTabs = () => {
    return tabsList.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
      style: {
        flex: "0 0 auto",
        minWidth: 120
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        onClick: () => handleSelectChange(tab.value),
        className: `tab-element ${selected === tab.value ? "tab-active" : ""}`,
        style: {
          minWidth: 120,
          whiteSpace: "nowrap",
          flex: "0 0 auto"
        },
        children: tab.label
      })
    }, tab.value));
  };

  // Responsive scroll for mobile
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "tabs-group-container",
    style: {
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      width: "100%",
      marginBottom: 16
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: "flex flex-row servv-tabs",
      style: {
        flexWrap: "nowrap",
        minWidth: "100%",
        width: "max-content",
        marginBottom: 0
      },
      children: renderTabs()
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabsComponent);

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
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/dist/esm/DayPicker.js");
/* harmony import */ var _CalendarInline_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarInline.module.scss */ "./src/Components/Controls/CalendarInline.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `date-picker-menu ${_CalendarInline_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].surface}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_day_picker__WEBPACK_IMPORTED_MODULE_2__.DayPicker, {
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
  className = "",
  variant = "toolbar",
  ariaLabel
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
    onKeyDown: event => {
      if (event.key === "Escape") setOpen(false);
    },
    activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      type: "button",
      className: `${_NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button} ${variant === "field" ? _NewDatePickerControl_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].field : ""}`,
      disabled: disabled,
      "aria-label": ariaLabel,
      "aria-expanded": open && !disabled,
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

/***/ "./src/Components/Controls/NewSelectControl.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Controls/NewSelectControl.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/index-641ee5b8.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewSelectControl.module.scss */ "./src/Components/Controls/NewSelectControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Caret = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.8,
  stroke: "currentColor",
  width: 18,
  height: 18,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  })
});
const DropdownIndicator = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_3__.c.DropdownIndicator, {
  ...props,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Caret, {})
});

// react-select renders its own DOM, so it is styled through the same tokens
// exposed as custom properties on #servv-wrap (see src/styles/base.scss).
const reactSelectStyles = style => ({
  container: base => ({
    ...base,
    width: "100%",
    ...style
  }),
  control: (base, state) => ({
    ...base,
    minHeight: "40px",
    border: `1px solid ${state.isFocused ? "var(--sv-primary-border)" : "var(--sv-border-field)"}`,
    borderRadius: "var(--sv-radius-lg)",
    backgroundColor: "var(--sv-surface)",
    // No halo on focus: the border colour already says which select is
    // active, and the ring sat heavily on a control this wide.
    boxShadow: "var(--sv-shadow-field)",
    paddingLeft: "6px",
    paddingRight: "4px",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": {
      borderColor: "var(--sv-primary-border)"
    }
  }),
  valueContainer: base => ({
    ...base,
    padding: "0 6px"
  }),
  placeholder: base => ({
    ...base,
    color: "var(--sv-text-placeholder)"
  }),
  singleValue: base => ({
    ...base,
    color: "var(--sv-text)"
  }),
  input: base => ({
    ...base,
    color: "var(--sv-text)"
  }),
  multiValue: base => ({
    ...base,
    borderRadius: "99px",
    backgroundColor: "var(--sv-primary-surface)",
    border: "1px solid var(--sv-primary-border)"
  }),
  multiValueLabel: base => ({
    ...base,
    color: "var(--sv-primary-strong)",
    fontSize: "12px",
    fontWeight: 600
  }),
  multiValueRemove: base => ({
    ...base,
    color: "var(--sv-primary-strong)",
    borderRadius: "0 99px 99px 0",
    ":hover": {
      backgroundColor: "var(--sv-primary-border)",
      color: "var(--sv-primary-strong)"
    }
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: "0 6px",
    color: "var(--sv-text-soft)",
    ":hover": {
      color: "var(--sv-primary)"
    }
  }),
  menu: base => ({
    ...base,
    overflow: "hidden",
    marginTop: "6px",
    borderRadius: "var(--sv-radius-2xl)",
    border: "1px solid var(--sv-border)",
    boxShadow: "0 12px 32px rgba(16, 24, 40, 0.14)",
    zIndex: 40
  }),
  menuList: base => ({
    ...base,
    padding: "6px"
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "7px",
    padding: "8px 10px",
    fontSize: "13px",
    fontWeight: 500,
    color: state.isSelected ? "var(--sv-primary-strong)" : "var(--sv-text-strong)",
    backgroundColor: state.isSelected ? "var(--sv-primary-surface)" : state.isFocused ? "var(--sv-primary-surface)" : "transparent",
    cursor: "pointer",
    ":active": {
      backgroundColor: "var(--sv-primary-surface)"
    }
  })
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
  style = {}
}) => {
  // A native <select> can only render text, so options carrying JSX labels
  // (badges, icons) go through react-select as well.
  const hasRichLabels = options.some(option => option && typeof option.label !== "string");
  if (multiple) {
    const selected = Array.isArray(value) ? value.map(String) : [];
    const selectedOptions = options.filter(o => selected.includes(o.value));
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isMulti: true,
        options: options,
        value: selectedOptions,
        onChange: picked => onChange((picked || []).map(o => o.value)),
        isDisabled: disabled,
        placeholder: helpText || "Select...",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator
        },
        styles: reactSelectStyles(style)
      })]
    });
  }
  if (hasRichLabels) {
    var _options$find;
    const selectedOption = (_options$find = options.find(o => String(o.value) === String(value))) !== null && _options$find !== void 0 ? _options$find : null;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper,
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        options: options,
        value: selectedOption,
        onChange: picked => onChange(picked ? picked.value : ""),
        isDisabled: disabled,
        isSearchable: false,
        placeholder: helpText || "Select...",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator
        },
        styles: reactSelectStyles(style)
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `${_NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].control} ${disabled ? _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].disabled : ""}`,
      style: style,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].native,
        value: value !== null && value !== void 0 ? value : "",
        onChange: e => onChange(e.target.value),
        disabled: disabled,
        children: [helpText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "",
          disabled: true,
          children: helpText
        }), options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: option.value,
          children: option.label
        }, option.value))]
      }), iconRight ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
        children: iconRight
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: _NewSelectControl_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].caret,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Caret, {})
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewSelectControl);

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

/***/ "./src/Components/Pages/AnalyticsPage.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/AnalyticsPage.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useCacheRefresh */ "./src/hooks/useCacheRefresh.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/settings */ "./src/utilities/settings.js");
/* harmony import */ var _utilities_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/analytics */ "./src/utilities/analytics.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/TabsComponent */ "./src/Components/Containers/TabsComponent.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var reaviz__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reaviz */ "./node_modules/reaviz/dist/index.js");
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
















const AnalyticsPage = () => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [totalRevenue, setTotalRevenue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [filteredByDateRevenue, setFilteredByDateRevenue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [registrants, setRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [registrantsTotal, setTotalRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const tabsList = [{
    label: "Revenue",
    value: 0
  }, {
    label: "Registrants",
    value: 1
  }, {
    label: "Events",
    value: 2
  }, {
    label: "Filters",
    value: 3
  }];
  const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [selectedMonth, setSelectedMonth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [isMonthSelected, setIsMonthSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [eventsStatistic, setEventsStatistic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [filtersStatistic, setFiltersStatistic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [filtersStatisticFilteredByDate, setFiltersStatisticFilteredByDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [revenueDates, setRevenueDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    startDate: null,
    endDate: null
  });

  // Tab change handler
  const handleSelectTabChange = val => {
    setSelectedTab(val);
    if (val === 1 && !registrantsTotal) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchTotalRegistrants();
    }
    if (val === 2 && !eventsStatistic) {
      fetchEventsAnalytics();
    }
    if (val === 3 && !filtersStatistic) {
      setIsMonthSelected(false);
      setSelectedMonth("");
      setSelectedYear("");
      fetchFiltersStatistic();
    }
  };

  // Settings fetch
  const loadSettings = async () => {
    setLoading(true);
    try {
      const data = await (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_2__.getSettings)();
      if (data) {
        setSettings(data);
      }
    } catch (e) {
      console.error("Failed to fetch settings", e);
    }
    setLoading(false);
  };

  // Total revenue fetch (fixed logic)
  const fetchTotalRevenue = async (from = null, to = null) => {
    setLoading(true);
    try {
      const data = await (0,_utilities_analytics__WEBPACK_IMPORTED_MODULE_3__.getAnalyticsRevenue)(from, to);
      if (data) {
        if (!from && !to) {
          setTotalRevenue(data.total || 0);
        } else {
          setFilteredByDateRevenue(data.total || 0);
        }
      }
    } catch (e) {
      console.error("Error fetching revenue", e);
    }
    setLoading(false);
  };

  // Registrants fetch
  const fetchTotalRegistrants = async (month = null, forceTotal = false) => {
    setLoading(true);
    try {
      const useMonth = !forceTotal && (isMonthSelected || month);
      const year = useMonth ? selectedYear : null;
      const monthIndex = useMonth ? monthOptions.indexOf(selectedMonth) : null;
      const data = await (0,_utilities_analytics__WEBPACK_IMPORTED_MODULE_3__.getAnalyticsRegistrants)(year, monthIndex);
      if (data) {
        if (!useMonth) {
          setTotalRegistrants(data);
        } else {
          setRegistrants(data);
        }
      }
    } catch (e) {
      console.error("Error fetching registrants", e);
    }
    setLoading(false);
  };

  // Month/year toggle for registrants/filters
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isMonthSelected) {
      if (selectedTab === 1) fetchTotalRegistrants(true);
      if (selectedTab === 3) fetchFiltersStatistic(true);
    }
  }, [isMonthSelected, selectedMonth, selectedYear]);

  // Registrants total
  const getRegistrantsTotal = () => {
    let total = {
      unique: 0,
      total: 0
    };
    const dataSource = isMonthSelected ? registrants : registrantsTotal;
    if (dataSource) {
      total = Object.values(dataSource).reduce((acc, curr) => {
        acc.unique += curr.unique;
        acc.total += curr.total;
        return acc;
      }, {
        unique: 0,
        total: 0
      });
    }
    return total;
  };

  // Registrants diagram data
  const getDataForRegistrants = () => {
    let dataForDiagram = [];
    const dataSource = isMonthSelected ? registrants : registrantsTotal;
    if (dataSource) {
      dataForDiagram = [{
        key: "Events",
        data: [{
          key: "Unique",
          data: dataSource?.offline?.unique || 0
        }, {
          key: "Total",
          data: dataSource?.offline?.total || 0
        }]
      }, {
        key: "Zoom Events",
        data: [{
          key: "Unique",
          data: dataSource?.online_zoom?.unique || 0
        }, {
          key: "Total",
          data: dataSource?.online_zoom?.total || 0
        }]
      }];
    }
    return dataForDiagram;
  };

  // Filters analytics fetch (from your provided code)
  const fetchFiltersStatistic = async (month = null, forceTotal = false) => {
    setLoading(true);
    const useMonth = !forceTotal && (isMonthSelected || month);
    const year = useMonth ? selectedYear : null;
    const monthIndex = useMonth ? monthOptions.indexOf(selectedMonth) : null;
    const data = await (0,_utilities_analytics__WEBPACK_IMPORTED_MODULE_3__.getAnalyticsTypes)(year, monthIndex).catch(error => console.log(error));
    if (data) {
      if (!useMonth) setFiltersStatistic(data);else setFiltersStatisticFilteredByDate(data);
      setLoading(false);
      return data;
    }
    setLoading(false);
    return null;
  };

  // Events analytics fetch
  const fetchEventsAnalytics = async () => {
    setLoading(true);
    let statistic = eventsStatistic ? {
      ...eventsStatistic
    } : {};
    try {
      const {
        happened,
        cancelled,
        active
      } = await (0,_utilities_analytics__WEBPACK_IMPORTED_MODULE_3__.getAnalyticsEvents)();
      if (happened) statistic = {
        ...statistic,
        happened
      };
      if (cancelled) statistic = {
        ...statistic,
        cancelled
      };
      if (active) statistic = {
        ...statistic,
        active
      };
      setEventsStatistic(statistic);
    } catch (e) {
      console.error("Error fetching events analytics", e);
    }
    setLoading(false);
  };

  // Event counts
  const getActiveEvents = () => {
    return eventsStatistic?.active ? eventsStatistic.active.offline + eventsStatistic.active.online_zoom : 0;
  };
  const getHappenedEvents = () => {
    return eventsStatistic?.happened ? eventsStatistic.happened.offline + eventsStatistic.happened.online_zoom : 0;
  };
  const getCanceledEvents = () => {
    return eventsStatistic?.cancelled ? eventsStatistic.cancelled.offline + eventsStatistic.cancelled.online_zoom : 0;
  };

  // Month/year select handlers
  const handleMonthSelect = val => {
    if (val === "") return;
    setSelectedMonth(val);
    if (selectedYear === "") {
      setSelectedYear(new Date().getFullYear());
    }
  };
  const handleYearSelect = val => {
    if (val === "") return;
    setSelectedYear(val);
    if (selectedMonth === "") {
      setSelectedMonth(monthOptions[1]);
    }
  };

  // Pie chart helpers for filter analytics
  const getCategoriesData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const categoryNames = filtersData.offline.categories.map(cat => cat.name);
    const categoriesStatistic = categoryNames.map(categoryName => {
      const offlineCategory = filtersData.offline.categories.find(cat => cat.name === categoryName);
      const onlineCategory = filtersData.online_zoom.categories.find(cat => cat.name === categoryName);
      return {
        key: categoryName,
        data: (offlineCategory?.value || 0) + (onlineCategory?.value || 0)
      };
    });
    if (categoriesStatistic.filter(cat => cat.data > 0).length > 0) return categoriesStatistic;else return null;
  };
  const getLanguagesData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const languageNames = filtersData.offline.languages.map(lang => lang.name);
    const languagesStatistic = languageNames.map(languageName => {
      const offlineLang = filtersData.offline.languages.find(lang => lang.name === languageName);
      const onlineLang = filtersData.online_zoom.languages.find(lang => lang.name === languageName);
      return {
        key: languageName,
        data: (offlineLang?.value || 0) + (onlineLang?.value || 0)
      };
    });
    return languagesStatistic.some(lang => lang.data > 0) ? languagesStatistic : null;
  };
  const getMembersData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const memberNames = filtersData.offline.members.map(mem => mem.name);
    const membersStatistic = memberNames.map(memberName => {
      const offlineMem = filtersData.offline.members.find(mem => mem.name === memberName);
      const onlineMem = filtersData.online_zoom.members.find(mem => mem.name === memberName);
      return {
        key: memberName,
        data: (offlineMem?.value || 0) + (onlineMem?.value || 0)
      };
    });
    return membersStatistic.some(mem => mem.data > 0) ? membersStatistic : null;
  };
  const getLocationsData = () => {
    const filtersData = isMonthSelected !== null ? filtersStatistic : filtersStatisticFilteredByDate;
    if (!filtersData || !filtersData.offline || !filtersData.online_zoom) return null;
    const locationNames = filtersData.offline.locations.map(loc => loc.name);
    const locationsStatistic = locationNames.map(locationName => {
      const offlineLoc = filtersData.offline.locations.find(loc => loc.name === locationName);
      const onlineLoc = filtersData.online_zoom.locations.find(loc => loc.name === locationName);
      return {
        key: locationName,
        data: (offlineLoc?.value || 0) + (onlineLoc?.value || 0)
      };
    });
    return locationsStatistic.some(loc => loc.data > 0) ? locationsStatistic : null;
  };

  // Pie chart block
  const renderPieBlock = (title, data) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 min-w-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
        className: "font-semibold text-gray-700 text-lg border-b pb-2",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "w-full h-64 md:h-80 lg:h-96 min-w-0",
        children: data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.PieChart, {
          id: title.toLowerCase(),
          height: "100%",
          data: data,
          series: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.PieArcSeries, {
            colorScheme: ["#B692F6", "#7319C6", "#8217E5", "#9D49EC"]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
          className: "text-gray-500",
          children: [t("No data available for"), title.toLowerCase(), t(".")]
        })
      })]
    });
  };

  // Filters analytics rendering
  const renderFiltersStatistic = () => {
    const membersData = getMembersData();
    const locationsData = getLocationsData();
    const languagesData = getLanguagesData();
    const categoriesData = getCategoriesData();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "flex flex-col md:flex-row flex-wrap gap-8 w-full min-w-0",
        children: [categoriesData && renderPieBlock(t("Categories"), categoriesData), locationsData && renderPieBlock(t("Locations"), locationsData), languagesData && renderPieBlock(t("Languages"), languagesData), membersData && renderPieBlock(t("Members"), membersData)]
      }), !membersData && !locationsData && !languagesData && !categoriesData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "w-full h-64 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          className: "flex flex-col items-center justify-start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            children: t("You don’t have Filter Statistics yet.")
          })
        })
      })]
    });
  };

  // Revenue datepicker effect
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (revenueDates.startDate && revenueDates.endDate) {
      fetchTotalRevenue(moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(revenueDates.startDate).format("YYYY-MM-DD"), moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(revenueDates.endDate).format("YYYY-MM-DD"));
    }
  }, [revenueDates]);
  (0,_hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_0__["default"])(["analytics"], async () => {
    await fetchTotalRevenue();
    if (revenueDates.startDate && revenueDates.endDate) {
      await fetchTotalRevenue(moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(revenueDates.startDate).format("YYYY-MM-DD"), moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(revenueDates.endDate).format("YYYY-MM-DD"));
    }
    if (registrantsTotal || selectedTab === 1) {
      await fetchTotalRegistrants(null, true);
      if (isMonthSelected) await fetchTotalRegistrants(true);
    }
    if (eventsStatistic || selectedTab === 2) await fetchEventsAnalytics();
    if (filtersStatistic || selectedTab === 3) {
      await fetchFiltersStatistic(null, true);
      if (isMonthSelected) await fetchFiltersStatistic(true);
    }
  });

  // Initial load
  const getData = async () => {
    await fetchTotalRevenue();
    await loadSettings();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getData();
  }, []);
  const monthOptions = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const yearOptions = ["", 2025, 2026];
  const {
    unique,
    total
  } = getRegistrantsTotal();

  // Month + year selects with a Reset, shown above both the registrants and the
  // filters charts. The two differ only in how the Reset aligns in the row.
  const renderPeriodFilters = (resetAlign, rowAlign = "") => {
    const periodOptions = values => values.map(option => ({
      value: option,
      label: String(option)
    }));
    const markSelected = handler => val => {
      handler(val);
      setIsMonthSelected(true);
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_8__["default"], {
      gap: 4,
      className: `flex-col sm:flex-row w-full ${rowAlign} min-w-0`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "w-full sm:w-48",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
          options: periodOptions(monthOptions),
          value: selectedMonth,
          onChange: markSelected(handleMonthSelect)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "w-full sm:w-48",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
          options: periodOptions(yearOptions),
          value: selectedYear,
          onChange: markSelected(handleYearSelect)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "Reset",
        icon: null,
        type: "primary",
        className: `p-3 ${resetAlign} w-full sm:w-auto`,
        onAction: () => {
          setIsMonthSelected(false);
          setSelectedMonth("");
          setSelectedYear("");
        }
      })]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loading: false,
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "servv-dashboard-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h1", {
            className: "dashboard-title",
            children: `Analytics`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            className: "dashboard-description mt-4",
            children: "Access analytics for your revenue, registrants, events, and filters"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
          gap: 8,
          cardsLayout: true,
          className: "w-full min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "w-full min-w-0 overflow-x-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_TabsComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
              tabsList: tabsList,
              value: selectedTab,
              handleSelectChange: handleSelectTabChange,
              fullWidth: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_14__["default"], {
            isLoading: loading,
            children: [selectedTab === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
              gap: 8,
              className: "w-full min-w-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: "flex flex-col md:flex-row justify-end items-end min-w-0 w-full",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                  className: "w-full md:w-72",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    value: revenueDates,
                    label: "Select Dates",
                    fullWidth: true,
                    onChange: setRevenueDates
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: "w-full h-64 md:h-80 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center min-w-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "flex flex-col items-center justify-start",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
                    className: "font-semibold text-brand-700 text-display-md",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.Count, {
                      from: 0,
                      to: !revenueDates.startDate ? totalRevenue || 0 : filteredByDateRevenue || 0,
                      className: "font-semibold text-brand-700 text-display-md"
                    })
                  }), totalRevenue === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                    children: t("You haven’t made any Sales yet.")
                  })]
                })
              })]
            }), selectedTab === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
              gap: 8,
              className: "w-full min-w-0",
              children: [renderPeriodFilters("self-center", "items-start"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "w-full h-64 md:h-80 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col items-center justify-center min-w-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h2", {
                  className: "font-semibold text-brand-700 text-3xl",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.Count, {
                    from: 0,
                    to: unique + total,
                    className: "font-semibold"
                  }), ` Registrants`]
                }), unique + total === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
                  className: "text-gray-500 mt-2",
                  children: t("You don’t have any Registrants yet.")
                })]
              })]
            }), selectedTab === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: eventsStatistic ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: "w-full h-64 bg-gradient-to-b from-transparent to-[#ECE4F6] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-4 min-w-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
                    className: "font-semibold text-brand-700 text-lg",
                    children: t("Active Events")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.Count, {
                    from: 0,
                    to: getActiveEvents(),
                    className: "font-semibold text-brand-700 text-3xl"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
                    className: "font-semibold text-brand-700 text-lg",
                    children: t("Events Happened")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.Count, {
                    from: 0,
                    to: getHappenedEvents(),
                    className: "font-semibold text-brand-700 text-3xl"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "w-full md:w-1/3 flex flex-col items-center gap-2 min-w-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
                    className: "font-semibold text-brand-700 text-lg",
                    children: t("Events Cancelled")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reaviz__WEBPACK_IMPORTED_MODULE_11__.Count, {
                    from: 0,
                    to: getCanceledEvents(),
                    className: "font-semibold text-brand-700 text-3xl"
                  })]
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: "w-full h-64 flex items-center justify-center text-gray-500 min-w-0",
                children: t("No event analytics to display.")
              })
            }), selectedTab === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_7__["default"], {
              gap: 8,
              className: "w-full min-w-0",
              children: [renderPeriodFilters("self-end"), filtersStatistic && renderFiltersStatistic()]
            })]
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnalyticsPage);

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

/***/ "./src/Components/Pages/SpinnerLoader.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpinnerLoader.module.scss */ "./src/Components/Pages/SpinnerLoader.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// `customStyling` is a pass-through for the overlay's box — call sites use it
// to give the spinner a height when there are no children to cover.

const SpinnerLoader = ({
  isLoading,
  children,
  customStyling = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: isLoading ? _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].blurred : "",
      children: children
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: [_SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].overlay, customStyling].filter(Boolean).join(" "),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);

/***/ }),

/***/ "./src/utilities/analytics.js":
/*!************************************!*\
  !*** ./src/utilities/analytics.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnalyticsEvents: () => (/* binding */ getAnalyticsEvents),
/* harmony export */   getAnalyticsRegistrants: () => (/* binding */ getAnalyticsRegistrants),
/* harmony export */   getAnalyticsRevenue: () => (/* binding */ getAnalyticsRevenue),
/* harmony export */   getAnalyticsTypes: () => (/* binding */ getAnalyticsTypes)
/* harmony export */ });
/* harmony import */ var _requestCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestCache */ "./src/utilities/requestCache.js");
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");


const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const getAnalyticsRevenue = async (from = null, to = null) => {
  let url = "/wp-json/servv-plugin/v1/analytics/revenue";
  if (from && to) url += `?from=${from}&to=${to}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
    headers: headers()
  });
  return response.data;
};
const getAnalyticsRegistrants = async (year = null, month = null) => {
  let url = "/wp-json/servv-plugin/v1/analytics/registrants";
  if (year != null && month != null) url += `?date_year=${year}&date_month=${month}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
    headers: headers()
  });
  return response.data;
};
const getAnalyticsTypes = async (year = null, month = null) => {
  let url = "/wp-json/servv-plugin/v1/analytics/types";
  if (year != null && month != null) url += `?date_year=${year}&date_month=${month}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, {
    headers: headers()
  });
  return response.data;
};
const getAnalyticsEvents = async () => {
  const version = (0,_requestCache__WEBPACK_IMPORTED_MODULE_0__.resourceVersion)("analytics");
  const [happened, cancelled, active] = await Promise.all([_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/wp-json/servv-plugin/v1/analytics/happened", {
    headers: headers()
  }), _adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/wp-json/servv-plugin/v1/analytics/cancelled", {
    headers: headers()
  }), _adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/wp-json/servv-plugin/v1/analytics/active", {
    headers: headers()
  })]);
  if (version !== (0,_requestCache__WEBPACK_IMPORTED_MODULE_0__.resourceVersion)("analytics")) return getAnalyticsEvents();
  return {
    happened: happened.data,
    cancelled: cancelled.data,
    active: active.data
  };
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

/***/ "./src/Components/Controls/CalendarInline.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Controls/CalendarInline.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"surface":"auHDDkDXjHxTPLfjeqp2"});

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"HwtSSogopbnUP9_7iCDB","button":"F2l5K1tOxIJTh0jK3Kpp","field":"_m3eRE8MaRxi1n_fwL05","icon":"x9Ei7o54rk9kgx3hWQh3","label":"GHYx3uCSPULDwTUL_kND","block":"due974qaf_ShRcdQYcxi"});

/***/ }),

/***/ "./src/Components/Controls/NewSelectControl.module.scss":
/*!**************************************************************!*\
  !*** ./src/Components/Controls/NewSelectControl.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"Rn5YIp3pNNjfTZfs0Hun","label":"tILluilS7Kg08Ty_wuDz","control":"i0ovci9B8ZljxNo0kHsG","disabled":"PWKaKx8kbAa85Q7B8UNO","native":"_cngarf9_pEgPKjdzZgR","caret":"YeLk6FzAtgYmHZ3hiWy5","icon":"WIeIIcBBdl2AgJCO8Yws"});

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

/***/ "./src/Components/Pages/SpinnerLoader.module.scss":
/*!********************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"NvXIBF17sKtsJ5DppGj6","blurred":"s8xU0aT_Upum9VaMUtFv","overlay":"rwBQn7Ep0HRpuD73wvEE"});

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_AnalyticsPage_jsx.js.map?ver=1231616b1390531be22b