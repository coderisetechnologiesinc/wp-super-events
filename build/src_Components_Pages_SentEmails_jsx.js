"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_SentEmails_jsx"],{

/***/ "./src/Components/Containers/Badge.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Containers/Badge.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BadgeImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BadgeImage */ "./src/Components/Containers/BadgeImage.jsx");
/* harmony import */ var _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.module.scss */ "./src/Components/Containers/Badge.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// size  : small | medium | large
// type  : pill-colour | pill-outline | badge | badge-modern
// color : gray | brand | error | warning | success | info | purple |
//         blue-light | zoom | neutral

const COLORS = {
  gray: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].gray,
  brand: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].brand,
  error: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error,
  warning: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].warning,
  success: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success,
  info: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].info,
  purple: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].purple,
  "blue-light": _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].blueLight,
  zoom: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].zoom,
  neutral: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].neutral
};
const TYPES = {
  "pill-colour": _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pill,
  "pill-outline": _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pillOutline,
  badge: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].square,
  "badge-modern": _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modern
};
const SIZES = {
  small: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].small,
  medium: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].medium,
  large: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].large
};
const JUSTIFY = {
  start: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].justifyStart,
  center: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].justifyCenter,
  end: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].justifyEnd
};

// Extra class names some call sites still pass; anything unrecognised is kept
// as a literal class so legacy hooks keep working.
const EXTRAS = {
  "badge-short": _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].short
};
const Badge = ({
  text,
  icon = null,
  iconAfter = null,
  image = null,
  color,
  type,
  size,
  align,
  additionalType = null,
  fullWidth = false,
  justify = null,
  onAction = () => {}
}) => {
  const classes = [_Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].badge, SIZES[size] || SIZES.small, TYPES[type] || TYPES["badge-modern"], COLORS[color] || COLORS.gray, align === "center" ? _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].alignCenter : _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].alignEnd, justify ? JUSTIFY[justify] || "" : "", fullWidth ? _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fitContent : "", additionalType ? EXTRAS[additionalType] || additionalType : "", _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].clickable].filter(Boolean).join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes,
    onClick: onAction,
    children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
      children: icon
    }), image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_BadgeImage__WEBPACK_IMPORTED_MODULE_0__["default"], {
      image: image
    }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: text
    }), iconAfter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _Badge_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
      children: iconAfter
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./src/Components/Containers/BadgeImage.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/BadgeImage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BadgeImage = ({
  image
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "badge-image",
    style: {
      background: `url('${image}')`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeImage);

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

/***/ "./src/Components/Containers/PageHeader.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Containers/PageHeader.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.module.scss */ "./src/Components/Containers/PageHeader.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// The page header from the design reference: eyebrow, title, description on the
// left, actions on the right.
//
// Passing `title` renders that structure. Without it the children are laid out
// in the same row, which is how the existing call sites use the component.

const PageHeader = ({
  className = "",
  bottomLine,
  eyebrow,
  title,
  description,
  actions,
  children,
  ...rest
}) => {
  const classes = [_PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header, bottomLine ? _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bottomLine : "", className].filter(Boolean).join(" ");
  if (!title) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ...rest,
      className: classes,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
        children: children
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    ...rest,
    className: classes,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text,
        children: [eyebrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].eyebrow,
          children: eyebrow
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
          children: title
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description,
          children: description
        })]
      }), actions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _PageHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].actions,
        children: actions
      })]
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

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

/***/ "./src/Components/Controls/ListPagination.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/ListPagination.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/ArrowRightIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const ListPagination = ({
  hasNext,
  hasPrev,
  onNext = () => {},
  onPrev = () => {},
  onSelect = () => {},
  pageNumber,
  pageCount,
  totalItems = null,
  showingItems = null
}) => {
  const renderPaginationPages = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: totalItems && showingItems && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text self-center",
        children: `${showingItems} of ${totalItems}`
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "pagination-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "pagination-control",
      disabled: !hasPrev,
      onClick: () => onPrev(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "pagination-control-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text",
        children: t("Previous")
      })]
    }), renderPaginationPages(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
      className: "pagination-control",
      disabled: !hasNext,
      onClick: () => onNext(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pagination-control-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "pagination-control-text",
        children: t("Next")
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPagination);

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

/***/ "./src/Components/Modals/ModalShell.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Modals/ModalShell.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalShell.module.scss */ "./src/Components/Modals/ModalShell.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SIZES = {
  sm: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].sm,
  md: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].md,
  lg: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lg,
  xl: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].xl
};

// The centred dialog from the design reference.
const ModalShell = ({
  title,
  eyebrow,
  description,
  footer,
  size = "lg",
  // Opt-in: the existing call sites close through their own controls only, so
  // the default keeps their behaviour unchanged.
  closeOnOverlay = false,
  children,
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].overlay,
    onClick: closeOnOverlay ? onClose : undefined,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `${_ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].dialog} ${SIZES[size] || SIZES.lg}`,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": typeof title === "string" ? title : undefined,
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [eyebrow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].eyebrow,
            children: eyebrow
          }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
            children: title
          }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description,
            children: description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].close,
          onClick: onClose,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].body,
        children: children
      }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _ModalShell_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer,
        children: footer
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalShell);

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

/***/ "./src/Components/Pages/SentEmails.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Pages/SentEmails.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useCacheRefresh */ "./src/hooks/useCacheRefresh.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SentEmails.module.scss */ "./src/Components/Pages/SentEmails.module.scss");
/* harmony import */ var _Controls_ListPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/ListPagination */ "./src/Components/Controls/ListPagination.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _utilities_mails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/mails */ "./src/utilities/mails.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);





















const STATUS_OPTIONS = [{
  value: "",
  label: "All statuses"
}, {
  value: "accepted",
  label: "Accepted"
}, {
  value: "failed",
  label: "Failed"
}, {
  value: "pending",
  label: "Pending"
}];
const STATUS_COLOR = {
  accepted: "success",
  sent: "success",
  delivered: "success",
  failed: "critical",
  bounced: "critical",
  pending: "warning"
};
const HARD_TZ_DEFAULT = "America/Los_Angeles";
const getTimezoneFromSettings = settings => {
  const guessed = moment_timezone__WEBPACK_IMPORTED_MODULE_13___default().tz.guess();
  const raw = settings?.settings?.admin_dashboard;
  if (!raw) return moment_timezone__WEBPACK_IMPORTED_MODULE_13___default().tz.zone(guessed) ? guessed : HARD_TZ_DEFAULT;
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw.trim()) : raw;
    const savedTz = parsed?.default_timezone;
    if (savedTz && moment_timezone__WEBPACK_IMPORTED_MODULE_13___default().tz.zone(savedTz)) return savedTz;
    return moment_timezone__WEBPACK_IMPORTED_MODULE_13___default().tz.zone(guessed) ? guessed : HARD_TZ_DEFAULT;
  } catch {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_13___default().tz.zone(guessed) ? guessed : HARD_TZ_DEFAULT;
  }
};
const SentEmails = () => {
  var _ref, _ref2, _emailContent$html_co;
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_16__.useServvStore)(s => s.settings);
  const timezone = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getTimezoneFromSettings(settings), [settings]);
  const isFreePlan = settings?.current_plan?.id === 1;
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [emails, setEmails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const [totalRecords, setTotalRecords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [selectedEmail, setSelectedEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [emailContent, setEmailContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [contentLoading, setContentLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [localSearch, setLocalSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [dates, setDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    startDate: null,
    endDate: null
  });
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const PAGE_SIZE = 20;
  const initialFetchDone = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useNavigate)();
  const fetchEmails = async (pageNum = 1, overrides = {}) => {
    setLoading(true);
    const q = "search" in overrides ? overrides.search : search;
    const d = "dates" in overrides ? overrides.dates : dates;
    const st = "status" in overrides ? overrides.status : status;
    const res = await (0,_utilities_mails__WEBPACK_IMPORTED_MODULE_12__.getSentEmails)({
      page: pageNum,
      page_size: PAGE_SIZE,
      q: q || undefined,
      date_from: d?.startDate ? moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(d.startDate).format("YYYY-MM-DD") : undefined,
      date_to: d?.endDate ? moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(d.endDate).format("YYYY-MM-DD") : undefined,
      email_status: st || undefined
    });
    if (res) {
      var _res$emails, _res$stats, _res$page_number, _res$page_count, _res$total_records;
      setEmails((_res$emails = res.emails) !== null && _res$emails !== void 0 ? _res$emails : []);
      setStats((_res$stats = res.stats) !== null && _res$stats !== void 0 ? _res$stats : null);
      setPage((_res$page_number = res.page_number) !== null && _res$page_number !== void 0 ? _res$page_number : 1);
      setPageCount((_res$page_count = res.page_count) !== null && _res$page_count !== void 0 ? _res$page_count : 1);
      setTotalRecords((_res$total_records = res.total_records) !== null && _res$total_records !== void 0 ? _res$total_records : 0);
    }
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (settings && !isFreePlan && !initialFetchDone.current) {
      initialFetchDone.current = true;
      fetchEmails(1);
    }
  }, [settings]);
  const handleSearchSubmit = () => {
    setSearch(localSearch);
    fetchEmails(1, {
      search: localSearch
    });
  };
  const handleSearchKeyPress = e => {
    if (e.key === "Enter") handleSearchSubmit();
  };
  const handleDatesChange = newDates => {
    setDates(newDates);
    fetchEmails(1, {
      dates: newDates
    });
  };
  const handleStatusChange = val => {
    setStatus(val);
    fetchEmails(1, {
      status: val
    });
  };
  (0,_hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_0__["default"])(["emails"], () => fetchEmails(page));
  const handleOpenEmail = async email => {
    setSelectedEmail(email);
    setEmailContent(null);
    setContentLoading(true);
    const content = await (0,_utilities_mails__WEBPACK_IMPORTED_MODULE_12__.getEmailContent)({
      id: email.id
    });
    setEmailContent(content);
    setContentLoading(false);
  };
  const handleCloseModal = () => {
    setSelectedEmail(null);
    setEmailContent(null);
  };
  const handlePrev = () => {
    const prev = page - 1;
    setPage(prev);
    fetchEmails(prev);
  };
  const handleNext = () => {
    const next = page + 1;
    setPage(next);
    fetchEmails(next);
  };
  const eventName = email => email.event_name || `Event #${email.event_id}`;
  const providerName = email => email.provider?.toUpperCase() || "—";
  const statusBadge = email => email.status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_10__["default"], {
    text: email.status.charAt(0).toUpperCase() + email.status.slice(1),
    type: "pill-colour",
    color: STATUS_COLOR[email.status.toLowerCase()] || "",
    size: "small",
    additionalType: "badge-short"
  }) : "—";
  const sentDate = email => email.status_updated_datetime ? moment_timezone__WEBPACK_IMPORTED_MODULE_13___default()(email.status_updated_datetime).tz(timezone).format("MMM DD, YYYY HH:mm") : "—";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      flush: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
          eyebrow: "WP Super Events by ServvAI",
          title: "Notifications",
          description: "History of all outgoing email notifications",
          actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
            text: "Templates",
            onAction: () => navigate("/templates"),
            disabled: isFreePlan
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].divider
          })
        }), stats && !isFreePlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].stats,
          children: [["Last 24h", stats.last_24_hours], ["Last 7 days", stats.last_week], ["Last 30 days", stats.last_month]].map(([label, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].stat,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("strong", {
              children: value !== null && value !== void 0 ? value : 0
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
              children: label
            })]
          }, label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].browser,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].toolbar,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].toolbarTitle,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h2", {
                children: "All notifications"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].count,
                children: totalRecords
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].controls,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].search,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  value: localSearch,
                  placeholder: "Search by event or recipient",
                  onChange: setLocalSearch,
                  onKeyDown: handleSearchKeyPress,
                  width: "100%",
                  disabled: isFreePlan
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
                text: "Search",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"], {}),
                type: "secondary",
                onAction: handleSearchSubmit,
                disabled: isFreePlan || loading
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
                value: dates,
                label: "Select dates",
                onChange: handleDatesChange,
                disabled: isFreePlan
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statusFilter,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  options: STATUS_OPTIONS,
                  value: status,
                  onChange: handleStatusChange,
                  disabled: isFreePlan
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
            isLoading: !settings || loading,
            customStyling: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loader,
            children: [emails.length > 0 && !isFreePlan ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].list,
              role: "table",
              "aria-label": "Notifications",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].head,
                role: "row",
                children: ["Event", "Recipient", "Provider", "Status", "Date"].map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  role: "columnheader",
                  children: label
                }, label))
              }), emails.map(email => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].row,
                role: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].event,
                  role: "cell",
                  "data-label": "Event",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].mark,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__["default"], {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                    type: "button",
                    className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title,
                    title: eventName(email),
                    onClick: () => handleOpenEmail(email),
                    children: eventName(email)
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].recipient,
                  role: "cell",
                  "data-label": "Recipient",
                  title: email.to || email.recipient,
                  children: email.to || email.recipient || "—"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  role: "cell",
                  "data-label": "Provider",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                    className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].provider,
                    children: providerName(email)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  role: "cell",
                  "data-label": "Status",
                  children: statusBadge(email)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].date,
                  role: "cell",
                  "data-label": "Date",
                  children: sentDate(email)
                })]
              }, email.id))]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].empty,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
                children: isFreePlan ? "Email history requires a paid plan" : "No notifications found"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
                children: isFreePlan ? "Upgrade your plan to view sent emails." : "Try another search, date range, or status."
              }), isFreePlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
                text: "View plans",
                onAction: () => navigate("/plans")
              })]
            }), !isFreePlan && pageCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Controls_ListPagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
              hasPrev: page > 1,
              hasNext: page < pageCount,
              pageNumber: page,
              pageCount: pageCount,
              totalItems: totalRecords,
              showingItems: emails.length,
              onPrev: handlePrev,
              onNext: handleNext
            })]
          })]
        })]
      })
    }), selectedEmail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: selectedEmail.subject || eventName(selectedEmail),
      eyebrow: "Notification",
      description: `${selectedEmail.to || selectedEmail.recipient || ""} · ${sentDate(selectedEmail)}`,
      onClose: handleCloseModal,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].metadata,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
          className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].provider,
          children: providerName(selectedEmail)
        }), statusBadge(selectedEmail)]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isLoading: contentLoading,
        customStyling: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].contentLoader,
        children: emailContent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: _SentEmails_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].emailContent,
          dangerouslySetInnerHTML: {
            __html: (_ref = (_ref2 = (_emailContent$html_co = emailContent.html_content) !== null && _emailContent$html_co !== void 0 ? _emailContent$html_co : emailContent.content) !== null && _ref2 !== void 0 ? _ref2 : emailContent.body) !== null && _ref !== void 0 ? _ref : "<p>No content available.</p>"
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
          children: "No content available."
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SentEmails);

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

/***/ "./src/utilities/mails.js":
/*!********************************!*\
  !*** ./src/utilities/mails.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteSMTPAccount: () => (/* binding */ deleteSMTPAccount),
/* harmony export */   getEmailContent: () => (/* binding */ getEmailContent),
/* harmony export */   getSMTPAccount: () => (/* binding */ getSMTPAccount),
/* harmony export */   getSentEmails: () => (/* binding */ getSentEmails),
/* harmony export */   saveSMTPAccount: () => (/* binding */ saveSMTPAccount)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const getSentEmails = async ({
  event_id,
  occurrence_id,
  event_name,
  email_status,
  date_from,
  date_to,
  q,
  email,
  page,
  page_size
} = {
  page: 1,
  page_size: 20
}) => {
  const url = `/wp-json/servv-plugin/v1/mail/sent`;
  const queryParams = new URLSearchParams();
  const append = (key, value) => {
    if (value !== undefined && value !== null) queryParams.append(key, value);
  };
  append("page", page);
  append("page_size", page_size);
  append("event_id", event_id);
  append("occurrence_id", occurrence_id);
  append("event_name", event_name);
  append("date_from", date_from);
  append("date_to", date_to);
  append("status", email_status);
  append("email", email);
  append("q", q);
  try {
    const getEmailsResponse = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      params: queryParams
    });
    if (getEmailsResponse && getEmailsResponse.status === 200) {
      return getEmailsResponse.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
const getEmailContent = async ({
  id
}) => {
  const url = `/wp-json/servv-plugin/v1/mail/sent/${id}`;
  try {
    const getEmailContentResponse = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getEmailContentResponse && getEmailContentResponse.status === 200) {
      return getEmailContentResponse.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
const getSMTPAccount = async () => {
  const url = `/wp-json/servv-plugin/v1/mail/smtp/account`;
  try {
    const getSMTPAccountResponse = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getSMTPAccountResponse && getSMTPAccountResponse.status === 200) {
      return getSMTPAccountResponse.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
const saveSMTPAccount = async ({
  email,
  host,
  port,
  username,
  password
}) => {
  const url = `/wp-json/servv-plugin/v1/mail/smtp/account`;
  try {
    const saveSMTPAccountResponse = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, {
      email,
      host,
      port: port ? parseInt(port, 10) : port,
      username,
      password
    }, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (saveSMTPAccountResponse && saveSMTPAccountResponse.status === 200) {
      return {
        email,
        host,
        port,
        username,
        password,
        is_valid: true
      };
    }
  } catch (e) {
    console.log(e);
    return {
      error: e.response.status
    };
  }
};
const deleteSMTPAccount = async () => {
  const url = `/wp-json/servv-plugin/v1/mail/smtp/account`;
  try {
    const deleteSMTPAccountResponse = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].delete(url, {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (deleteSMTPAccountResponse && deleteSMTPAccountResponse.status === 200) {
      return {
        status: deleteSMTPAccountResponse.status
      };
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

/***/ }),

/***/ "./src/Components/Containers/Badge.module.scss":
/*!*****************************************************!*\
  !*** ./src/Components/Containers/Badge.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"badge":"JxGi9YQLB5u_pTE2GNb1","pill":"G7yAY4p1rlqbcZACX3Mw","pillOutline":"WQyQybnPruy65Ta_1J50","square":"SSEl7wMstgLwN1cx9hEQ","modern":"xiKD9pffPbfVXuL16TAm","small":"nBze3h7uuHskhsJY7Wv_","medium":"F2aOpLA9zad_b55t8uCq","large":"WaCf5z8nR5_FNR6Yo9zI","gray":"N7P77dEnwGRupb_DFXCB","brand":"_1zsqZa9hgQMszwVFQW4","success":"deEAJaiXYAjMyulG5q1r","warning":"Enb1Qz0wpSxty9wXMgAx","error":"UTG2CqQj6VPHl2IHFDDe","info":"ubChuXqj0ve3ijAal6wK","blueLight":"wRXiOhzd86kLipLKge5N","zoom":"MjC5gW1TeicQpT7swrxZ","purple":"RDdFKXsyKbcreA4jsyVr","neutral":"xcB3YHpivKfsRpZ4aRPn","alignCenter":"AYqrL77tpeXGJvvs_8yQ","alignEnd":"fH56LbFWVsKYx5xUD_iV","justifyStart":"ATsImFabPDxW5FXYExCs","justifyCenter":"aD0HxIDzzhIWvjwuFm79","justifyEnd":"fiTtjwhi9Ek8s9tvrSRF","fitContent":"zXB8tPuKAXZbezX9v5Se","short":"hfTRgNXt3LdK6MsXSICF","clickable":"ksG92hcZ8IKnk9HX7wj8","icon":"EWbVeZnuXbO6PRCQu_lR"});

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

/***/ "./src/Components/Containers/PageHeader.module.scss":
/*!**********************************************************!*\
  !*** ./src/Components/Containers/PageHeader.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"UJKBfoKQX0ArollQPz1S","bottomLine":"EPa4Qs8Sg0DGkgQqTqgN","row":"OUo7N4uA10rjSEMICOeL","text":"sgJsCMx9FF0yFMt2kZ3Z","eyebrow":"ktHdDumXPTPovEbmrc1M","title":"yq9VS55_ovalh9J5Nb6w","description":"sj2HMNvNWGjuE5qbOg9r","actions":"PUXWCGzj1cI1x1_j3IoJ"});

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

/***/ "./src/Components/Modals/ModalShell.module.scss":
/*!******************************************************!*\
  !*** ./src/Components/Modals/ModalShell.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"overlay":"zaqd_YWTGq9h9BrDhnml","svFade":"lQqxKZGLcAKV1Jn8Vt2F","dialog":"XXcDzcz01ytVnY3hpKJj","svPop":"DdditGgnQd2jVs8QrqsH","sm":"HW1Ittu6VG1nOuS1qg32","md":"vJ0FZD6KHZ4i9D5apaFY","lg":"YHKB1jznvv4OseMsi_Az","xl":"Efc0HlnFAqkwM15HiCNa","header":"R3wk4fdBZ02XilBUvvKA","eyebrow":"WERcf127A0gFANECWp8h","title":"iXgumjbKr876OyoPtlx9","description":"MPu8eTML6zZvnQl6CbB4","close":"MV0wlpfgIbnXq6oksmES","body":"EySeA5xUa9n4fl1YJ9vW","footer":"uM3hTqX_1dotCASYgHwQ"});

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

/***/ "./src/Components/Pages/SentEmails.module.scss":
/*!*****************************************************!*\
  !*** ./src/Components/Pages/SentEmails.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"divider":"X5TMzaWcWPL3LHsHTVwk","browser":"wRskmmkYuQLO7wLMeV6z","list":"aU__70iDj7I0mDtMN2yn","toolbar":"FY5Yb8kUmsNOyNILVP7t","toolbarTitle":"AyFLgKp2Q6gXt7OoiLwR","count":"TV9hX0hoAEUk3gzaskel","controls":"GxlIUHo0RlV0IsZzE8fB","search":"pUX5aU29UsdGgSwvhVB8","statusFilter":"nzlq_N4ZPnwBjNKiriut","stats":"muXwfH0PvX8laZvxM4El","stat":"FywjYOo6EQwsdJOi5mZD","head":"XhktE8ojPKDwNlHKqCn0","row":"HjE3Rmrj9mMsMHsnorvt","event":"WBkYNW80PEV6HbtGQd6p","mark":"exMwoEOB74NEeC7FDaVa","title":"UaIQP7eYYQmtvsDWWU51","recipient":"Cwp8VcO90iKGJouisrN_","provider":"M5r82qIKrhlUnr9MvS2o","date":"cSO_pswWKJf8MmgXwHki","loader":"h4pwqsbRulFyDaivZUpy","contentLoader":"x8sfiC4a4HB4OOBVa3Q0","metadata":"AVKBM89SP677ZlPpT7gt","emailContent":"ACg1F9WzW0ZDWdI94cgz","empty":"vmHb6cQO2hEhLF1PDI9u"});

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

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowLeftIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/ArrowRightIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/ArrowRightIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ArrowRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function EnvelopeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EnvelopeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_SentEmails_jsx.js.map?ver=e0548cfc8830538e3577