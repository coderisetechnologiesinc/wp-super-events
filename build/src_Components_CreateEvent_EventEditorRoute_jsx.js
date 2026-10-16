"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_CreateEvent_EventEditorRoute_jsx"],{

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

/***/ "./src/Components/Controls/NewButtonGroup.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Controls/NewButtonGroup.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewButtonGroup.module.scss */ "./src/Components/Controls/NewButtonGroup.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// A segment is either a plain string (its own label and value) or an object:
// { value, label, icon, title }. An entry with an icon and no label renders as
// a square icon segment — that is how the dashboard's view switcher is built.

const normalize = button => {
  var _button$value, _button$title;
  return typeof button === "object" && button !== null ? {
    value: (_button$value = button.value) !== null && _button$value !== void 0 ? _button$value : button.label,
    label: button.label,
    icon: button.icon,
    title: (_button$title = button.title) !== null && _button$title !== void 0 ? _button$title : button.label
  } : {
    value: button,
    label: button,
    icon: null,
    title: button
  };
};
const NewButtonGroup = ({
  title = "",
  buttons = [],
  active = null,
  onChange = () => {},
  disabled = false,
  view,
  ariaLabel,
  // Fill the container and split it evenly — how a labelled group reads in a
  // stacked form such as the Filters drawer.
  fullWidth = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: [_NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper, fullWidth ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapperFull : ""].filter(Boolean).join(" "),
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: [_NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].track, fullWidth ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].trackFull : ""].filter(Boolean).join(" "),
      role: "tablist",
      "aria-label": ariaLabel,
      children: buttons.map(button => {
        const segment = normalize(button);
        const isActive = active === segment.value;
        const iconOnly = Boolean(segment.icon) && !segment.label;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          type: "button",
          role: "tab",
          "aria-selected": isActive,
          "aria-label": iconOnly ? segment.title : undefined,
          title: segment.title,
          disabled: disabled,
          onClick: () => onChange(segment.value),
          className: [_NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].segment, isActive ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active : _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inactive, view ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].compact : "", iconOnly ? _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconOnly : ""].filter(Boolean).join(" "),
          children: [segment.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].icon,
            children: segment.icon
          }), segment.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: _NewButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text,
            children: segment.label
          })]
        }, segment.value);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewButtonGroup);

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

/***/ "./src/Components/Controls/NewRecurringControl.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/NewRecurringControl.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewSelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _CheckboxItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RadioGroup */ "./src/Components/Controls/RadioGroup.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _utilities_recurrence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/recurrence */ "./src/utilities/recurrence.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const NewRecurringControl = ({
  recurrence,
  onChange,
  defaultWeeklyDay = 1,
  // The unified form offers the type as cards of its own, so the control then
  // renders only the options of the chosen pattern.
  showTypeSelector = true
}) => {
  var _RECURRENCE_LABELS$ty;
  const {
    type,
    repeat_interval = 1,
    weekly_days = [],
    monthly_day = 1,
    monthly_week = 1,
    monthly_week_day = 1
  } = recurrence;
  const [monthlyType, setMonthlyType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!monthly_week_day);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (recurrence.monthly_week_day) setMonthlyType(false);
  }, [recurrence.monthly_week_day]);

  /* ---------------------------
     Recurrence type
  --------------------------- */

  const handleRecurrenceTypeChange = val => onChange((0,_utilities_recurrence__WEBPACK_IMPORTED_MODULE_7__.recurrenceForType)(recurrence, val, defaultWeeklyDay));
  const RECURRENCE_LABELS = {
    1: "Daily",
    2: "Weekly",
    3: "Monthly"
  };
  const LABEL_TO_TYPE = {
    Daily: 1,
    Weekly: 2,
    Monthly: 3
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!recurrence) {
      onChange({
        type: 1,
        repeat_interval: 1
      });
    }
  }, []);

  /* ---------------------------
     Options
  --------------------------- */

  const dailyRepeatOptions = Array.from({
    length: 14
  }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} day${i > 0 ? "s" : ""}`
  }));
  const weeklyRepeatOptions = Array.from({
    length: 14
  }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} week${i > 0 ? "s" : ""}`
  }));
  const monthlyRepeatOptions = [1, 2, 3].map(i => ({
    value: i,
    label: `${i} month${i > 1 ? "s" : ""}`
  }));
  const monthlyDayOptions = Array.from({
    length: 31
  }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`
  }));

  // "Last" is -1, not a fifth week: the API reads 5 as the fifth occurrence and
  // skips every month that has only four of that weekday.
  const monthlyWeekOptions = [{
    value: 1,
    label: "First"
  }, {
    value: 2,
    label: "Second"
  }, {
    value: 3,
    label: "Third"
  }, {
    value: 4,
    label: "Fourth"
  }, {
    value: -1,
    label: "Last"
  }];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => ({
    value: i + 1,
    label: d
  }));

  /* ---------------------------
     Weekly days
  --------------------------- */

  const toggleWeeklyDay = day => {
    const next = weekly_days.includes(day) ? weekly_days.filter(d => d !== day) : [...weekly_days, day];
    onChange({
      ...recurrence,
      weekly_days: next
    });
  };

  /* ---------------------------
     Render
  --------------------------- */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "mt-8 w-full flex flex-col gap-[24px]",
    children: [showTypeSelector && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          className: "step__content_title",
          children: "Recurrence type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
          buttons: ["Daily", "Weekly", "Monthly"],
          active: (_RECURRENCE_LABELS$ty = RECURRENCE_LABELS[type]) !== null && _RECURRENCE_LABELS$ty !== void 0 ? _RECURRENCE_LABELS$ty : null,
          onChange: label => {
            handleRecurrenceTypeChange(LABEL_TO_TYPE[label]);
          }
        })]
      })
    }), type === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "step__content_title",
        children: "Repeat every"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"]
      // label="Repeat every"
      , {
        options: dailyRepeatOptions,
        value: repeat_interval,
        onChange: v => onChange({
          ...recurrence,
          repeat_interval: Number(v)
        }),
        iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
        style: {
          width: "100%"
        }
      })]
    }), type === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "step__content_title",
        children: "Repeat every"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          options: weeklyRepeatOptions,
          value: repeat_interval,
          onChange: v => onChange({
            ...recurrence,
            repeat_interval: Number(v)
          }),
          iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
          style: {
            width: "100%"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          className: "step__content_title",
          children: "Occurs on"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "grid grid-cols-2 gap-2",
          children: days.map(d => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CheckboxItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
              label: d.label,
              checked: weekly_days.includes(d.value),
              onChange: () => toggleWeeklyDay(d.value)
            })
          }, d.value))
        })]
      })]
    }), type === 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "step__content_title",
        children: "Repeat every"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gap: 4,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          options: monthlyRepeatOptions,
          value: repeat_interval,
          onChange: v => onChange({
            ...recurrence,
            repeat_interval: Number(v)
          }),
          iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
          style: {
            width: "100%"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: "monthly-type",
          value: monthlyType ? "day" : "week",
          onChange: v => {
            const byDay = v === "day";
            setMonthlyType(byDay);
            const next = {
              ...recurrence
            };
            if (byDay) {
              delete next.monthly_week;
              delete next.monthly_week_day;
              next.monthly_day = Number(monthly_day) || 1;
            } else {
              delete next.monthly_day;
              next.monthly_week = Number(monthly_week) || 1;
              next.monthly_week_day = Number(monthly_week_day) || 1;
            }
            onChange(next);
          },
          options: [{
            value: "day",
            label: "Day of month"
          }, {
            value: "week",
            label: "Day of week"
          }]
        }), monthlyType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          options: monthlyDayOptions,
          value: monthly_day,
          onChange: v => onChange({
            ...recurrence,
            monthly_day: Number(v)
          }),
          iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
          style: {
            width: "100%"
          }
        }), !monthlyType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
          gap: 2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
            options: monthlyWeekOptions,
            value: monthly_week,
            onChange: v => onChange({
              ...recurrence,
              monthly_week: Number(v)
            }),
            iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
            style: {
              width: "100%"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NewSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
            options: days,
            value: monthly_week_day,
            onChange: v => onChange({
              ...recurrence,
              monthly_week_day: Number(v)
            }),
            iconRight: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
            style: {
              width: "100%"
            }
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewRecurringControl);

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

/***/ "./src/Components/CreateEvent/EventEditorRoute.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/CreateEvent/EventEditorRoute.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventEditorRoute)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _UnifiedEventForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnifiedEventForm */ "./src/Components/CreateEvent/UnifiedEventForm.jsx");
/* harmony import */ var _Pages_EventRegistrantsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/EventRegistrantsPage */ "./src/Components/Pages/EventRegistrantsPage.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function EventEditorRoute() {
  const [query] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();
  return query.has("registrants") || query.has("registrants_view") ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Pages_EventRegistrantsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_UnifiedEventForm__WEBPACK_IMPORTED_MODULE_0__["default"], {});
}

/***/ }),

/***/ "./src/Components/CreateEvent/EventTimeControl.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/CreateEvent/EventTimeControl.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventTimeControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventFormData */ "./src/Components/CreateEvent/eventFormData.js");
/* harmony import */ var _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnifiedEventForm.module.scss */ "./src/Components/CreateEvent/UnifiedEventForm.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// The displayed clock follows the shop preference; the API keeps local HH:mm.

function EventTimeControl({
  value,
  use24Hours,
  onChange,
  label = "Start time",
  disabled = false
}) {
  const display = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_1__.displayEventTime)(value, use24Hours);
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(display.time);
  const [period, setPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(display.period);
  const input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setText(display.time);
    setPeriod(display.period);
    input.current?.setCustomValidity("");
  }, [value, use24Hours]);
  const commit = (clock, meridiem) => {
    const next = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_1__.parseEventTime)(clock, meridiem, use24Hours);
    input.current?.setCustomValidity(next === null ? use24Hours ? "Enter a time from 00:00 to 23:59." : "Enter a time from 01:00 to 12:59 and select AM or PM." : "");
    if (next !== null) onChange(next);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].timeControl,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      ref: input,
      type: "text",
      inputMode: "numeric",
      required: true,
      "aria-label": label,
      disabled: disabled,
      placeholder: use24Hours ? "18:00" : "06:00",
      value: text,
      maxLength: 5,
      onChange: event => {
        setText(event.target.value.replace(/^(\d{2})(\d{1,2})$/, "$1:$2"));
        input.current.setCustomValidity("");
      },
      onBlur: () => commit(text, period)
    }), !use24Hours && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
      "aria-label": `${label} period`,
      disabled: disabled,
      value: period,
      onChange: event => {
        setPeriod(event.target.value);
        commit(text, event.target.value);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
        value: "AM",
        children: "AM"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
        value: "PM",
        children: "PM"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/Components/CreateEvent/NewEndDateControl.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/CreateEvent/NewEndDateControl.jsx ***!
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
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _utilities_numbers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/numbers */ "./src/utilities/numbers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const NewEndDateControl = ({
  recurrence,
  onChange,
  meetingType = "offline"
}) => {
  const {
    end_times,
    end_date_time
  } = recurrence;

  // "date" | "number"
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(end_times ? "number" : "date");
  const isZoom = meetingType === "zoom";
  const maxOccurrences = isZoom ? 60 : 365;
  const maxMonths = 12;
  const minDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().toDate();
  const maxDate = isZoom ? null : moment__WEBPACK_IMPORTED_MODULE_1___default()().add(maxMonths, "months").toDate();
  const endDate = end_date_time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(end_date_time).toDate() : moment__WEBPACK_IMPORTED_MODULE_1___default()().toDate();

  /* -----------------------------
     Handlers
  ----------------------------- */
  const handleModeChange = val => {
    setMode(val);
  };

  // The field stays clearable, so an empty box is kept as typed; anything else
  // is a whole count within the range this event type allows.
  const handleEndTimesChange = val => {
    onChange({
      ...recurrence,
      end_times: val === "" ? "" : Math.min(Math.max((0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_5__.toInteger)(val) || 1, 1), maxOccurrences),
      end_date_time: undefined
    });
  };
  const handleEndDateChange = val => {
    let dateVal = val;
    if (!isZoom && maxDate && moment__WEBPACK_IMPORTED_MODULE_1___default()(val).isAfter(maxDate)) {
      dateVal = maxDate;
    }
    onChange({
      ...recurrence,
      end_date_time: moment__WEBPACK_IMPORTED_MODULE_1___default()(dateVal).format("YYYY-MM-DDTHH:mm:ss[Z]"),
      end_times: undefined
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "step__content_block",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      className: "step__content_title",
      children: "Recurrence ends"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      buttons: ["On a date", "After occurrences"],
      active: mode === "date" ? "On a date" : "After occurrences",
      onChange: val => handleModeChange(val === "On a date" ? "date" : "number")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "mt-[20px]",
      children: [mode === "date" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "step__content_title",
          children: "Select end date"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mode: "single",
          value: endDate,
          onChange: handleEndDateChange,
          label: "Select end date",
          fullWidth: true,
          minDate: minDate,
          maxDate: maxDate
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "step__content_block",
        children: [mode === "number" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "step__content_title",
            children: "Number of occurrences"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: "number",
            width: "100%",
            value: end_times !== null && end_times !== void 0 ? end_times : "",
            minValue: 1,
            maxValue: maxOccurrences,
            placeholder: `1 – ${maxOccurrences}`,
            onChange: handleEndTimesChange
          }), !isZoom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "text-xs text-gray-600 mt-2",
            children: `Up to ${maxOccurrences} occurrences, within ${maxMonths} months, for in-person events`
          })]
        }), isZoom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "text-xs text-gray-600 mt-2",
          children: "Recurring meetings expire 365 days after the last occurrence. You can schedule up to 60 occurrences into the future."
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewEndDateControl);

/***/ }),

/***/ "./src/Components/CreateEvent/Registrant.jsx":
/*!***************************************************!*\
  !*** ./src/Components/CreateEvent/Registrant.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/Badge */ "./src/Components/Containers/Badge.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Registrant = ({
  id,
  firstName,
  lastName,
  email,
  status,
  onStatusChange,
  onSelect,
  selected
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "registrant group",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
      gap: 2,
      align: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        checked: selected,
        onChange: () => onSelect(id)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col gap-[6px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          className: "whitespace-nowrap",
          children: [firstName, " ", lastName]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "text-gray-600 truncate max-w-[220px]",
          children: email
        })]
      }), status === "create" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Draft",
        size: "medium",
        color: "success",
        type: "pill-colour"
      }), status === "delete" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Delete",
        size: "medium",
        color: "error",
        type: "pill-colour"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        type: "button",
        className: "servv_button servv_button--danger servv_button--sm ml-auto opacity-0 pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto",
        onClick: () => onStatusChange(id),
        children: !status || status === "create" ? "Delete" : "Revert"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registrant);

/***/ }),

/***/ "./src/Components/CreateEvent/RegistrantsStep.jsx":
/*!********************************************************!*\
  !*** ./src/Components/CreateEvent/RegistrantsStep.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _StepActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepActions */ "./src/Components/CreateEvent/StepActions.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Shared_DashboardPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/DashboardPagination */ "./src/Components/Shared/DashboardPagination.jsx");
/* harmony import */ var _Registrant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Registrant */ "./src/Components/CreateEvent/Registrant.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _utilities_registrants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/registrants */ "./src/utilities/registrants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












const RegistrantsStep = ({
  settings,
  attributes,
  setAttributes,
  changeStep,
  handleFormSubmit,
  registrantsView
}) => {
  const registrants = attributes.registrants || [];
  const [firstNameValue, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
  const [lastNameValue, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
  const [showError, setShowError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
  const [selectedRegistrants, setSelectedRegistrants] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const [zoomPageTokens, setZoomPageTokens] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    1: null
  });
  const [registrantsLoading, setRegistrantsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const PAGE_SIZE = 20;
  const visibleRegistrants = registrants.filter(reg => reg.status !== "delete");
  const totalPages = attributes?.regPagination?.pageCount || 1;
  const totalRecords = attributes?.regPagination?.total_records || totalPages * PAGE_SIZE;
  const paginatedRegistrants = visibleRegistrants;
  const isAddRegistrantDisabled = settings?.current_plan?.id === 1 || !settings.current_plan;
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  const searchParams = new URLSearchParams(location.search);
  const occurrenceId = searchParams.get("occurrence_id");
  const postID = Number(id);
  const getRegistrantId = reg => reg.id || reg.tempId;
  const handleSelectRegistrant = id => {
    setSelectedRegistrants(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalRecords, totalPages]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const visibleIds = visibleRegistrants.map(getRegistrantId);
    setSelectedRegistrants(prev => prev.filter(id => visibleIds.includes(id)));
  }, [visibleRegistrants.length]);

  /* ------------------ helpers ------------------ */

  const updateRegistrants = next => {
    setAttributes({
      ...attributes,
      registrants: next
    });
  };
  const handleRegistransSave = async () => {
    const registrantsForDelete = registrants.filter(reg => reg.id && reg.status === "delete");
    try {
      setRegistrantsLoading(true);
      await Promise.all(registrantsForDelete.map(reg => (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.deleteRegistrant)({
        postID,
        occurrenceId,
        registrantID: reg.id
      })));
      await handleFormSubmit();
      const cleanedRegistrants = registrants.filter(reg => reg.status !== "delete")
      // .filter((reg) => !reg.status)
      .map(reg => {
        const cleaned = {
          ...reg
        };
        delete cleaned.status;
        delete cleaned.tempId;
        return cleaned;
      });
      setAttributes({
        ...attributes,
        registrants: cleanedRegistrants
      });

      // changeStep("branding");
    } catch (error) {
      console.error("Failed to save registrants", error);
    } finally {
      setRegistrantsLoading(false);
    }
  };
  const loadRegistrants = async (page = 1) => {
    if (!postID) return;
    setRegistrantsLoading(true);
    try {
      const isZoom = attributes?.location === "zoom";

      // ---------------- NON-ZOOM (page-based) ----------------
      if (!isZoom) {
        const res = await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.fetchRegistrants)({
          postID,
          occurrenceId,
          page
        });
        setAttributes({
          ...attributes,
          registrants: res.registrants || [],
          regPagination: {
            pageCount: res.pagination?.pageCount || 1,
            pageNumber: page,
            total_records: res.pagination?.totalRecords || (res.pagination?.pageCount || 1) * PAGE_SIZE
          }
        });
        return;
      }

      // ---------------- ZOOM (token-based) ----------------
      const res = await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.fetchRegistrantsWithToken)({
        postID,
        occurrenceId,
        next_page_token: zoomPageTokens[page] || null,
        pageSize: PAGE_SIZE
      });
      setAttributes({
        ...attributes,
        registrants: res.registrants || [],
        regPagination: {
          pageCount: res.pagination?.nextPageToken ? page + 1 : page,
          // fake pages for UI
          pageNumber: page,
          total_records: res.pagination?.totalRecords || 0
        }
      });
      if (res.pagination?.nextPageToken) {
        setZoomPageTokens(prev => ({
          ...prev,
          [page + 1]: res.pagination.nextPageToken
        }));
      }
    } catch (e) {
      console.error("Failed to fetch registrants", e);
    } finally {
      setRegistrantsLoading(false);
    }
  };

  /* ------------------ add ------------------ */

  const handleRegistrantAdd = () => {
    if (!firstNameValue || !lastNameValue || !email) {
      setShowError(true);
      return;
    }
    const newRegistrant = {
      tempId: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      firstName: firstNameValue,
      lastName: lastNameValue,
      email,
      status: "create"
    };
    updateRegistrants([...registrants, newRegistrant]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setShowError(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    loadRegistrants(currentPage);
  }, [currentPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    loadRegistrants(1);
  }, []);

  /* ------------------ delete / toggle ------------------ */

  const onStatusChange = id => {
    const next = registrants.map(reg => {
      const regId = reg.id || reg.tempId;
      if (regId !== id) return reg;

      // existing → soft delete
      if (reg.id) {
        return {
          ...reg,
          status: reg.status === "delete" ? undefined : "delete"
        };
      }

      // new → hard delete
      return null;
    });
    updateRegistrants(next.filter(Boolean));
  };

  /* ------------------ render ------------------ */

  const renderRegistrants = () => {
    if (!paginatedRegistrants.length) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: "This event doesn't have any registrants yet"
      });
    }
    return paginatedRegistrants.map(registrant => {
      const id = getRegistrantId(registrant);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Registrant__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: id,
        firstName: registrant.firstName,
        lastName: registrant.lastName,
        email: registrant.email,
        status: registrant.status,
        selected: selectedRegistrants.includes(id),
        onSelect: handleSelectRegistrant,
        onStatusChange: onStatusChange
      }, id);
    });
  };
  /* ------------------ resend notifications ------------------ */

  const resend = async () => {
    if (selectedRegistrants.length === 0) return;
    try {
      setRegistrantsLoading(true);
      await Promise.all(selectedRegistrants.map(registrantID => (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.resendRegistrantNotification)({
        postID,
        registrantID,
        occurrenceId
      })));
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(`Notifications resent to ${selectedRegistrants.length} registrant${selectedRegistrants.length > 1 ? "s" : ""}.`);
      await loadRegistrants(currentPage);
    } catch (e) {
      console.error("Failed to resend notifications to selected", e);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Failed to resend notifications to selected registrants.");
    } finally {
      setRegistrantsLoading(false);
    }
  };
  const resendAll = async () => {
    try {
      setRegistrantsLoading(true);
      await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.resendAllNotifications)({
        postID,
        occurrenceId
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Notifications have been resent to all registrants.");
      await loadRegistrants(currentPage);
    } catch (e) {
      console.error("Failed to resend notifications to all", e);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Failed to resend notifications to all registrants.");
    } finally {
      setRegistrantsLoading(false);
    }
  };
  const exportToCSV = (rows, filename = "registrants.csv") => {
    const headers = ["First Name", "Last Name", "Email"];
    const csvContent = [headers.join(","), ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const handleExportRegistrants = async () => {
    if (!postID) return;
    setRegistrantsLoading(true);
    try {
      const isZoom = attributes?.location === "zoom";
      let allRegistrants = [];

      /* ---------------- NON-ZOOM (page-based) ---------------- */
      if (!isZoom) {
        let page = 1;
        let pageCount = 1;
        do {
          const res = await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.fetchRegistrants)({
            postID,
            occurrenceId,
            page
          });
          allRegistrants.push(...(res.registrants || []));
          pageCount = res.pagination?.pageCount || 1;
          page++;
        } while (page <= pageCount);
      }

      /* ---------------- ZOOM (token-based) ---------------- */
      if (isZoom) {
        let nextToken = null;
        do {
          const res = await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_8__.fetchRegistrantsWithToken)({
            postID,
            occurrenceId,
            next_page_token: nextToken,
            pageSize: PAGE_SIZE
          });
          allRegistrants.push(...(res.registrants || []));
          nextToken = res.pagination?.nextPageToken || null;
        } while (nextToken);
      }
      if (!allRegistrants.length) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.info("No registrants to export.");
        return;
      }

      /* ---------------- EXPORT ---------------- */
      const rows = allRegistrants.map(r => [r.firstName || "", r.lastName || "", r.email || ""]);
      exportToCSV(rows, "registrants.csv");
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(`Exported ${allRegistrants.length} registrants.`);
    } catch (e) {
      console.error("Export registrants failed", e);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Failed to export registrants.");
    } finally {
      setRegistrantsLoading(false);
    }
  };

  /* ------------------ UI ------------------ */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: `step__wrapper`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.Contacts, {
        className: "step__header_icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
          className: "step__header_title",
          children: "Registrants"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          className: "step__description",
          children: "Manage registrants"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "step__content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "step__content_title",
          children: "First name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          placeholder: "Enter first name",
          value: firstNameValue,
          disabled: isAddRegistrantDisabled,
          onChange: setFirstName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "step__content_title",
          children: "Last name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          placeholder: "Enter last name",
          value: lastNameValue,
          disabled: isAddRegistrantDisabled,
          onChange: setLastName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "step__content_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "step__content_title",
          children: "Email"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "email",
          placeholder: "Enter email address",
          value: email,
          disabled: isAddRegistrantDisabled,
          onChange: setEmail
        }), showError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          className: "text-sm text-error-500 mt-2",
          children: "Please fill in all fields"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "step__content_block",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            type: "button",
            className: "servv_button servv_button--primary mt-3",
            onClick: handleRegistrantAdd,
            disabled: email.length === 0 || firstNameValue.length === 0 || lastNameValue.length === 0 || isAddRegistrantDisabled,
            children: "Add registrant"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "step__content_delimeter"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: `step__content_block`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex flex-row justify-between items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: "step__content_title",
            children: "Registrants list"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "servv_actions",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: `servv_actions flex items-center gap-2 ml-auto `,
              children: [registrants.length > 0 && selectedRegistrants.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                className: "servv_button servv_button--secondary servv_button--sm",
                onClick: () => resend(id),
                children: "Resend to selected"
              }), registrants.length > 0 && selectedRegistrants.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                className: "servv_button servv_button--secondary servv_button--sm",
                onClick: () => resendAll(id),
                children: "Resend notifications"
              }), registrants.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
                type: "button",
                className: "servv_button servv_button--secondary servv_button--sm",
                onClick: () => handleExportRegistrants(),
                children: "Export"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
          isLoading: registrantsLoading,
          children: renderRegistrants()
        }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Shared_DashboardPagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
          currentPage: currentPage,
          totalPages: totalPages,
          totalRecords: totalRecords,
          pageSize: PAGE_SIZE,
          onPageChange: setCurrentPage
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StepActions__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onPrevious: registrantsView ? undefined : () => changeStep("branding"),
      onPrimary: handleRegistransSave,
      primaryText: "Save",
      primaryDisabled: registrants.filter(reg => reg.status && (reg.status === "create" || reg.status === "delete")).length === 0
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrantsStep);

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

/***/ "./src/Components/CreateEvent/UnifiedEventForm.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/CreateEvent/UnifiedEventForm.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnifiedEventForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowUpTrayIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/VideoCameraIcon.js");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_NewRecurringControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Controls/NewRecurringControl */ "./src/Components/Controls/NewRecurringControl.jsx");
/* harmony import */ var _Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/NewDatePickerControl */ "./src/Components/Controls/NewDatePickerControl.jsx");
/* harmony import */ var _EventTimeControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventTimeControl */ "./src/Components/CreateEvent/EventTimeControl.jsx");
/* harmony import */ var _NewEndDateControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NewEndDateControl */ "./src/Components/CreateEvent/NewEndDateControl.jsx");
/* harmony import */ var _RegistrantsStep__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RegistrantsStep */ "./src/Components/CreateEvent/RegistrantsStep.jsx");
/* harmony import */ var _useUnifiedEventForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useUnifiedEventForm */ "./src/Components/CreateEvent/useUnifiedEventForm.js");
/* harmony import */ var _eventFormData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eventFormData */ "./src/Components/CreateEvent/eventFormData.js");
/* harmony import */ var _utilities_recurrence__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utilities/recurrence */ "./src/utilities/recurrence.js");
/* harmony import */ var _coverImage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./coverImage */ "./src/Components/CreateEvent/coverImage.js");
/* harmony import */ var _Pages_Filters_CreateFilterModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Pages/Filters/CreateFilterModal */ "./src/Components/Pages/Filters/CreateFilterModal.jsx");
/* harmony import */ var _Pages_Filters_useFilterLimits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Pages/Filters/useFilterLimits */ "./src/Components/Pages/Filters/useFilterLimits.js");
/* harmony import */ var _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UnifiedEventForm.module.scss */ "./src/Components/CreateEvent/UnifiedEventForm.module.scss");
/* harmony import */ var _utilities_planLimits__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utilities/planLimits */ "./src/utilities/planLimits.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);

























// The same chevron the breadcrumbs draw, turned a quarter to point at the
// menu it opens.

const MenuChevron = ({
  open
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    transform: `rotate(${open ? -90 : 90}deg)`
  },
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("path", {
    d: "m9 6 6 6-6 6"
  })
});
const Section = ({
  step,
  title,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("section", {
  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].card,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("header", {
    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].cardHeader,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
      className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].eyebrow,
      children: ["Step ", step]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("h2", {
      children: title
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].body,
    children: children
  })]
});
const Field = ({
  label,
  hint,
  children
}) => {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("label", {
    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].field,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
      id: id,
      children: label
    }), react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {
      "aria-labelledby": id,
      ...(hint ? {
        "aria-describedby": `${id}-hint`
      } : {})
    }), hint && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
      id: `${id}-hint`,
      children: hint
    })]
  });
};
const Choice = ({
  selected,
  label,
  note,
  icon: Icon,
  onClick,
  disabled
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("button", {
  type: "button",
  className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].choice} ${selected ? _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].selected : ""}`,
  "aria-pressed": selected,
  onClick: onClick,
  disabled: disabled,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].radio
  }), Icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Icon, {
    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].formatIcon
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
      children: note
    })]
  })]
});
const Toggle = ({
  label,
  note,
  checked,
  onChange,
  disabled
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].toggleRow,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
      children: note
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
    type: "button",
    role: "switch",
    "aria-label": label,
    "aria-checked": checked,
    disabled: disabled,
    className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].toggle} ${checked ? _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].on : ""}`,
    onClick: () => onChange?.(!checked),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {})
  })]
});
function UnifiedEventForm() {
  var _meeting$duration, _ref, _event$product$quanti, _event$product$price, _activeTicket$quantit, _activeTicket$price;
  const {
    event,
    patch,
    settings,
    loading,
    saving,
    error,
    save,
    saveDraft,
    isNew,
    id,
    occurrence,
    registrantsView,
    recoverDraft,
    dirty,
    occurrences,
    loadOccurrences
  } = (0,_useUnifiedEventForm__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const filters = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.filtersList);
  const stripe = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.stripeConnected);
  const zoom = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.zoomConnected);
  const calendar = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.calendarConnected);
  const calendarSynced = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore)(s => s.calendarSynced);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();

  // BrandingStep renders the Google Calendar toggle from `calendar`, and the
  // dashboard bootstrap defers that read — this form can open before it ran,
  // or on a reload that never passed through the dashboard at all.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!calendarSynced) _store_useServvStore__WEBPACK_IMPORTED_MODULE_4__.useServvStore.getState().syncCalendarAccount();
  }, [calendarSynced]);
  const formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [editingTicket, setEditingTicket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [imageName, setImageName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [imageBusy, setImageBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [creatingFilter, setCreatingFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [occurrencesOpen, setOccurrencesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // Holds the navigation the confirm dialog will run if the edits are
  // abandoned, so one dialog serves every way out of the form.
  const [pendingLeave, setPendingLeave] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const occurrencesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const imageInputId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const confirmId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const meeting = event.meeting;
  // image_content holds a freshly picked data URL, sent to the API as base64;
  // featured_image_url is the cover already attached to the WordPress post.
  const cover = event.image_content || event.featured_image_url || "";
  const freePlan = Number(settings.current_plan?.id) === 1;
  // A disabled option in a native select carries no explanation of its own, so
  // the reason paid tickets are unavailable goes into the label.
  const paidTicketNote = freePlan ? " (plan upgrade required)" : !stripe ? " (connect Stripe)" : "";
  const recurringAllowed = (0,_utilities_planLimits__WEBPACK_IMPORTED_MODULE_20__.recurringAllowed)(settings.current_plan, event.location);
  const defaults = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_14__.readDefaults)(settings);
  // A filter kind the plan does not expose, or a store that has used up its
  // allowance, cannot gain values from here either.
  const {
    isLimitReached,
    isMembersLimitReached,
    filterCategories
  } = (0,_Pages_Filters_useFilterLimits__WEBPACK_IMPORTED_MODULE_18__.useFilterLimits)(settings, filters);
  const activeTickets = event.tickets.filter(t => t.action !== "remove");
  const activeTicket = activeTickets.find(t => t.id === editingTicket);
  const patchMeeting = update => patch({
    meeting: update
  });
  // The API numbers weekdays 1 Sunday through 7 Saturday, and a weekly
  // recurrence has to start from a day: the event's own is the sensible one.
  const startWeekday = () => {
    const start = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(meeting.startTime);
    return start.isValid() ? start.day() + 1 : 1;
  };
  const provider = event.location === "zoom" ? "zoom" : "offline";
  const recurring = Boolean(meeting.recurrence?.type);
  const use24Hours = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_14__.uses24HourClock)(settings);
  // Occurrence times arrive in UTC and are read in the event's own zone, the
  // way every other time on this form is.
  const occurrenceLabel = start => moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().utc(start).tz(meeting.timezone || "UTC").format(use24Hours ? "MMM D, YYYY · HH:mm" : "MMM D, YYYY · h:mm A");
  // Edits live only in this form until it is saved, so every way out of it
  // asks first.
  const leave = go => dirty ? setPendingLeave(() => go) : go();
  const openOccurrence = occurrenceId => leave(() => navigate(`/events/${provider}/${id}?occurrence_id=${encodeURIComponent(occurrenceId)}`));
  const patchTicket = (id, update) => patch({
    tickets: event.tickets.map(t => t.id === id ? {
      ...t,
      ...update,
      action: t.persisted ? "update" : undefined
    } : t)
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!occurrencesOpen) return;
    const close = e => {
      if (e.type === "keydown" && e.key !== "Escape") return;
      if (e.type === "mousedown" && occurrencesRef.current?.contains(e.target)) return;
      setOccurrencesOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [occurrencesOpen]);
  const addTicket = () => {
    const ticket = {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_23__["default"])(),
      title: "Standard",
      type: "free",
      quantity: Number(defaults.default_quantity) || 1,
      price: 0
    };
    patch({
      tickets: [...event.tickets, ticket]
    });
    setEditingTicket(ticket.id);
  };
  const publish = () => {
    if (imageBusy) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warning("Wait for the cover image to finish processing.");
      return;
    }
    if (formRef.current?.reportValidity()) save();
  };
  const updateStart = (part, value) => {
    const [date = "", time = "00:00:00"] = (meeting.startTime || "").split("T");
    patchMeeting({
      startTime: part === "date" ? `${value}T${time}` : `${date}T${value}:00`
    });
  };
  // Reading and re-encoding is asynchronous, so publishing stays blocked until
  // it finishes: otherwise the payload is built without image_content and the
  // cover is dropped without any error.
  const readImage = async file => {
    if (!file) return;
    setImageBusy(true);
    setImageError("");
    try {
      patch({
        image_content: await (0,_coverImage__WEBPACK_IMPORTED_MODULE_16__.readCoverImage)(file)
      });
      setImageName(file.name);
    } catch (failure) {
      setImageError(failure.message || "Unable to read this image.");
    } finally {
      setImageBusy(false);
    }
  };
  // What the chips below do on click, so a value created in the modal ends up
  // selected the same way.
  const selectFilterValue = (key, id) => patch({
    filters: {
      [key]: key === "members" ? [...(event.filters.members || []), Number(id)] : Number(id)
    }
  });
  const filterCards = [["location_id", "locations", "Location", "Where the event happens"], ["category_id", "categories", "Category", "Groups events in the public list"], ["members", "members", "Member", "Host shown to attendees"], ["language_id", "languages", "Language", "Language of the session"]];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flush: true,
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].root,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("header", {
        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].header,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          breadcrumbs: [{
            label: "Events",
            to: "/events"
          }, {
            label: registrantsView ? "Registrants" : isNew ? "New event" : "Edit event"
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].headingRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("h1", {
              children: registrantsView ? "Registrants" : isNew ? "New event" : "Edit event"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
              children: registrantsView ? meeting.topic : "Five sections, then publish. Everything else can be edited later."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].actions,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              text: "Cancel",
              type: "ghost",
              onAction: () => leave(() => navigate("/events")),
              disabled: saving
            }), !isNew && recurring && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].occurrences,
              ref: occurrencesRef,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                text: "Occurrences",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(MenuChevron, {
                  open: occurrencesOpen
                }),
                className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].occurrencesToggle,
                type: "secondary",
                onAction: () => {
                  if (!occurrencesOpen) loadOccurrences();
                  setOccurrencesOpen(open => !open);
                },
                disabled: saving
              }), occurrencesOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].occurrenceMenu,
                role: "menu",
                children: [occurrences === null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                  children: "Loading\u2026"
                }), occurrences?.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                  children: "No occurrences yet."
                }), occurrences?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                  type: "button",
                  role: "menuitem",
                  className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].occurrenceItem} ${String(occurrence) === item.id ? _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].currentOccurrence : ""}`,
                  onClick: () => {
                    setOccurrencesOpen(false);
                    if (String(occurrence) !== item.id) openOccurrence(item.id);
                  },
                  children: occurrenceLabel(item.start)
                }, item.id)), occurrence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                  type: "button",
                  role: "menuitem",
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].occurrenceItem,
                  onClick: () => {
                    setOccurrencesOpen(false);
                    leave(() => navigate(`/events/${provider}/${id}`));
                  },
                  children: "\u2190 Back to the whole series"
                })]
              })]
            }), !registrantsView && isNew && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              text: "Save draft",
              type: "secondary",
              onAction: saveDraft,
              disabled: loading || saving || imageBusy || Boolean(error)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              text: saving ? "Saving…" : isNew ? "Publish event" : "Save changes",
              onAction: publish,
              disabled: loading || saving || imageBusy || Boolean(error)
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].divider
        })]
      }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        role: "alert",
        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].warning,
        children: error
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("form", {
        ref: formRef,
        onSubmit: e => {
          e.preventDefault();
          save();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("fieldset", {
          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].fieldset,
          disabled: loading || saving,
          children: registrantsView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_RegistrantsStep__WEBPACK_IMPORTED_MODULE_12__["default"], {
            settings: settings,
            attributes: event,
            setAttributes: patch,
            changeStep: () => navigate(`/events/${event.location === "zoom" ? "zoom" : "offline"}/${id}${occurrence ? `?occurrence_id=${encodeURIComponent(occurrence)}` : ""}`),
            handleFormSubmit: save,
            registrantsView: true
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].layout,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].sections,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Section, {
                step: "1",
                title: "Basics",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                    children: ["Event title ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("em", {
                      children: "*"
                    })]
                  }),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                    required: true,
                    value: meeting.topic || "",
                    placeholder: "e.g. Autumn ceramics workshop",
                    onChange: e => patchMeeting({
                      topic: e.target.value
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                  label: "Description",
                  hint: "Shown on the public event page and in confirmation emails.",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("textarea", {
                    rows: "4",
                    value: meeting.agenda || "",
                    placeholder: "What will attendees learn or experience?",
                    onChange: e => patchMeeting({
                      agenda: e.target.value
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("details", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].details,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("summary", {
                    children: "Cover image and additional notes"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].detailsBody,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].upload,
                      children: [cover ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("img", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].cover,
                        src: cover,
                        alt: "Event cover"
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].coverEmpty,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_24__["default"], {
                          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].coverEmptyIcon
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                          children: "No cover image yet"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].fieldTitle,
                        children: "Cover image"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].uploadRow,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                          id: imageInputId,
                          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].fileInput,
                          type: "file",
                          accept: _coverImage__WEBPACK_IMPORTED_MODULE_16__.COVER_IMAGE_ACCEPT,
                          disabled: imageBusy,
                          onChange: e => {
                            readImage(e.target.files?.[0]);
                            // Allows re-picking the same file after an
                            // error, which fires no change event.
                            e.target.value = "";
                          }
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("label", {
                          className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].uploadButton} ${imageBusy ? _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].uploadBusy : ""}`,
                          htmlFor: imageInputId,
                          "aria-busy": imageBusy,
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__["default"], {
                            className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].uploadIcon
                          }), imageBusy ? "Preparing image…" : cover ? "Replace image" : "Upload image"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
                          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].uploadHint,
                          children: imageName || "JPG, PNG, GIF or WEBP · resized before upload"
                        })]
                      }), imageError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].uploadError,
                        role: "alert",
                        children: imageError
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                      label: "Additional note title",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                        value: event.custom_fields.custom_field_2_name || "",
                        onChange: e => patch({
                          custom_fields: {
                            custom_field_2_name: e.target.value
                          }
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                      label: "Additional note",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("textarea", {
                        rows: "2",
                        value: event.custom_fields.custom_field_2_value || "",
                        onChange: e => patch({
                          custom_fields: {
                            custom_field_2_value: e.target.value
                          }
                        })
                      })
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Section, {
                step: "2",
                title: "Format & location",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].formats,
                  children: [["offline", "In-person", "Physical address, shown on the public page", _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__["default"]], ["custom", "Online", "Meeting link sent with the confirmation", _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__["default"]], ["hybrid", "Hybrid", "Both an address and a meeting link", _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_27__["default"]]].map(([value, label, note, icon]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Choice, {
                    selected: event.location === value || value === "custom" && event.location === "zoom",
                    label: label,
                    note: note,
                    icon: icon,
                    disabled: !isNew && event.location === "zoom" !== (value === "zoom") && event.location === "zoom",
                    onClick: () => patch({
                      location: value,
                      custom_fields: {
                        custom_field_1_name: value === "custom" ? "Meeting link" : value === "hybrid" ? "Link" : "",
                        custom_field_1_value: value === "offline" ? "" : event.custom_fields.custom_field_1_value || ""
                      }
                    })
                  }, value))
                }), ["custom", "hybrid", "zoom"].includes(event.location) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                    label: "Meeting provider",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("select", {
                      value: event.location === "zoom" ? "zoom" : "custom",
                      disabled: !isNew,
                      onChange: e => patch({
                        location: e.target.value === "zoom" ? "zoom" : "custom"
                      }),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("option", {
                        value: "custom",
                        children: "Custom meeting link"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("option", {
                        value: "zoom",
                        disabled: !zoom,
                        children: ["Zoom", !zoom ? " — connect first" : ""]
                      })]
                    })
                  }), event.location !== "zoom" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                    label: "Meeting link",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                      type: "url",
                      required: true,
                      value: event.custom_fields.custom_field_1_value || "",
                      placeholder: "https://\u2026",
                      onChange: e => patch({
                        custom_fields: {
                          custom_field_1_name: event.location === "hybrid" ? "Link" : "Meeting link",
                          custom_field_1_value: e.target.value
                        }
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].divider
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].filterHeading,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
                    children: "Filters"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
                    children: "Four attributes drive the public filter bar. Unset values are hidden."
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].filters,
                  children: filterCards.map(([key, list, label, note]) => {
                    const options = filters?.[list] || [];
                    const selected = options.filter(option => key === "members" ? event.filters.members?.map(Number).includes(Number(option.id)) : Number(event.filters[key]) === Number(option.id));
                    const disabled = key === "location_id" && ["custom", "zoom"].includes(event.location);
                    // useFilterLimits names the kinds in title case.
                    const planAllows = filterCategories.includes(list.charAt(0).toUpperCase() + list.slice(1));
                    const canCreate = planAllows && !isLimitReached && !disabled && (list !== "members" || !isMembersLimitReached);
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].filterCard,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
                          children: label
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
                          children: note
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].filterValue,
                        children: selected.map(o => o.name).join(", ") || "Not set"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].chips,
                        children: [options.map(option => {
                          const checked = selected.includes(option);
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                            type: "button",
                            disabled: disabled,
                            "aria-pressed": checked,
                            className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].chip} ${checked ? _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].selected : ""}`,
                            onClick: () => patch({
                              filters: {
                                [key]: key === "members" ? checked ? (event.filters.members || []).filter(id => Number(id) !== Number(option.id)) : [...(event.filters.members || []), Number(option.id)] : checked ? null : Number(option.id)
                              }
                            }),
                            children: option.name
                          }, option.id);
                        }), canCreate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                          type: "button",
                          className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].chip} ${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].chipAdd}`,
                          onClick: () => setCreatingFilter(list),
                          children: "\uFF0B New"
                        })]
                      }), !options.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                        children: ["No ", label.toLowerCase(), " filters yet.", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
                          to: "/filters",
                          children: "Manage filters"
                        })]
                      }), !canCreate && planAllows && isLimitReached && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                        children: ["Your plan's filter allowance is used up.", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
                          to: "/filters",
                          children: "Manage filters"
                        })]
                      })]
                    }, key);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Section, {
                step: "3",
                title: "Schedule",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].schedule,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].field,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                      children: "Start date"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      mode: "single",
                      variant: "field",
                      fullWidth: true,
                      ariaLabel: "Start date",
                      value: (meeting.startTime || "").slice(0, 10),
                      minDate: isNew ? new Date() : undefined,
                      onChange: date => updateStart("date", date.format("YYYY-MM-DD"))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].field,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                      children: "Start time"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_EventTimeControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                      value: (meeting.startTime || "").slice(11, 16),
                      use24Hours: (0,_eventFormData__WEBPACK_IMPORTED_MODULE_14__.uses24HourClock)(settings),
                      onChange: time => updateStart("time", time)
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                    label: "Duration (minutes)",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                      type: "number",
                      required: true,
                      min: "1",
                      step: "1",
                      value: (_meeting$duration = meeting.duration) !== null && _meeting$duration !== void 0 ? _meeting$duration : "",
                      onChange: e => patchMeeting({
                        duration: e.target.value
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                  label: "Time zone",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("select", {
                    value: meeting.timezone,
                    onChange: e => patchMeeting({
                      timezone: e.target.value
                    }),
                    children: moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.names().map(zone => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("option", {
                      value: zone,
                      children: zone
                    }, zone))
                  })
                }), !occurrence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].fieldTitle,
                    children: "Recurrence"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].recurrence,
                    children: [["one", "One-time", "Single occurrence"], ["recurring", "Recurring", "Repeats daily, weekly or monthly"]].map(([value, label, note]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Choice, {
                      selected: value === "one" ? !meeting.recurrence : Boolean(meeting.recurrence),
                      label: label,
                      note: note,
                      disabled: value !== "one" && !recurringAllowed,
                      onClick: () => patchMeeting({
                        // Daily, every interval, one occurrence —
                        // the shape the API expects to start from.
                        // The pattern itself is chosen below, and
                        // an event that already recurs keeps it.
                        recurrence: value === "one" ? null : meeting.recurrence || {
                          type: 1,
                          repeat_interval: 1,
                          end_times: 1,
                          weekly_days: [startWeekday()]
                        }
                      })
                    }, value))
                  }), !recurringAllowed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("small", {
                    children: "Recurring events require a plan with the Recurring feature."
                  }), meeting.recurrence && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].recurringControls,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                      className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].recurrenceType,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].fieldTitle,
                        children: "Recurrence type"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].recurrence,
                        children: _utilities_recurrence__WEBPACK_IMPORTED_MODULE_15__.RECURRENCE_TYPES.map(([type, label, note]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Choice, {
                          selected: Number(meeting.recurrence.type) === type,
                          label: label,
                          note: note,
                          onClick: () => patchMeeting({
                            recurrence: (0,_utilities_recurrence__WEBPACK_IMPORTED_MODULE_15__.recurrenceForType)(meeting.recurrence, type, startWeekday())
                          })
                        }, type))
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_NewRecurringControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      recurrence: meeting.recurrence,
                      defaultWeeklyDay: startWeekday(),
                      showTypeSelector: false,
                      onChange: recurrence => patchMeeting({
                        recurrence
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_NewEndDateControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      recurrence: meeting.recurrence,
                      meetingType: event.location === "zoom" ? "zoom" : "offline",
                      onChange: recurrence => patchMeeting({
                        recurrence
                      })
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Section, {
                step: "4",
                title: "Tickets",
                children: [!activeTickets.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                  label: "Capacity",
                  hint: freePlan ? `Free plan: up to ${settings.free_registrants_limit || 15} registrations.` : "Total registrations available for this event.",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                    type: "number",
                    min: "1",
                    max: freePlan ? settings.free_registrants_limit || 15 : undefined,
                    required: true,
                    value: (_ref = (_event$product$quanti = event.product.quantity) !== null && _event$product$quanti !== void 0 ? _event$product$quanti : event.product.current_quantity) !== null && _ref !== void 0 ? _ref : 5,
                    onChange: e => patch({
                      product: {
                        quantity: e.target.value === "" ? "" : Number(e.target.value)
                      }
                    })
                  })
                }), !isNew && !activeTickets.length && !freePlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                  label: "Registration price",
                  hint: "Price for the existing single registration type.",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: (_event$product$price = event.product.price) !== null && _event$product$price !== void 0 ? _event$product$price : 0,
                    onChange: e => patch({
                      product: {
                        price: e.target.value === "" ? "" : Number(e.target.value)
                      }
                    })
                  })
                }), activeTickets.map(ticket => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].ticketRow,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
                      children: ticket.title
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("small", {
                      children: ["Capacity ", ticket.quantity || "—", ticket.start_datetime || ticket.end_datetime ? " · Scheduled sales" : " · Open sales"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
                    children: ticket.type === "free" ? "Free" : ticket.type === "donation" ? "Donation" : `${settings.settings?.currency || "USD"} ${Number(ticket.price || 0).toFixed(2)}`
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    text: editingTicket === ticket.id ? "Done" : "Edit",
                    type: "secondary",
                    size: "xs",
                    onAction: () => setEditingTicket(editingTicket === ticket.id ? null : ticket.id)
                  })]
                }, ticket.id)), activeTicket && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].ticketEditor,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                    label: "Ticket name",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                      required: true,
                      value: activeTicket.title,
                      onChange: e => patchTicket(activeTicket.id, {
                        title: e.target.value
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].schedule,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                      label: "Type",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("select", {
                        value: activeTicket.type,
                        onChange: e => patchTicket(activeTicket.id, {
                          type: e.target.value,
                          price: e.target.value === "free" ? 0 : Number(defaults.default_price) || 1
                        }),
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("option", {
                          value: "free",
                          children: "Free"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("option", {
                          value: "paid",
                          disabled: freePlan || !stripe,
                          children: `Paid${paidTicketNote}`
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("option", {
                          value: "donation",
                          disabled: freePlan || !stripe,
                          children: `Donation${paidTicketNote}`
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                      label: "Capacity",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                        type: "number",
                        min: "1",
                        step: "1",
                        required: true,
                        value: (_activeTicket$quantit = activeTicket.quantity) !== null && _activeTicket$quantit !== void 0 ? _activeTicket$quantit : "",
                        onChange: e => patchTicket(activeTicket.id, {
                          quantity: e.target.value === "" ? "" : Number(e.target.value)
                        })
                      })
                    }), activeTicket.type === "paid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Field, {
                      label: "Price",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("input", {
                        type: "number",
                        min: "0.01",
                        step: "0.01",
                        required: true,
                        value: (_activeTicket$price = activeTicket.price) !== null && _activeTicket$price !== void 0 ? _activeTicket$price : "",
                        onChange: e => patchTicket(activeTicket.id, {
                          price: e.target.value
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                    className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].schedule,
                    children: ["start_datetime", "end_datetime"].map(key => {
                      const label = key === "start_datetime" ? "Sales start" : "Sales end";
                      const value = activeTicket[key];
                      const update = (date, time) => patchTicket(activeTicket.id, {
                        [key]: `${date}T${time}:00`
                      });
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].field,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                          children: [label, " (optional)"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_NewDatePickerControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
                          mode: "single",
                          variant: "field",
                          fullWidth: true,
                          ariaLabel: `${label} date`,
                          label: "Select date",
                          value: value?.slice(0, 10),
                          onChange: date => update(date.format("YYYY-MM-DD"), value?.slice(11, 16) || "00:00")
                        }), value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_EventTimeControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            label: `${label} time`,
                            value: value.slice(11, 16),
                            use24Hours: (0,_eventFormData__WEBPACK_IMPORTED_MODULE_14__.uses24HourClock)(settings),
                            onChange: time => update(value.slice(0, 10), time)
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            text: "Clear",
                            type: "ghost",
                            size: "xs",
                            onAction: () => patchTicket(activeTicket.id, {
                              [key]: null
                            })
                          })]
                        })]
                      }, key);
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    text: "Remove ticket",
                    type: "danger-ghost",
                    onAction: () => {
                      patch({
                        tickets: event.tickets.flatMap(t => t.id !== activeTicket.id ? [t] : t.persisted ? [{
                          ...t,
                          action: "remove"
                        }] : [])
                      });
                      setEditingTicket(null);
                    }
                  })]
                }), ((0,_utilities_planLimits__WEBPACK_IMPORTED_MODULE_20__.multiTicketsAllowed)(settings.current_plan) || !activeTickets.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("button", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].addTicket,
                  type: "button",
                  onClick: addTicket,
                  children: "\uFF0B Add ticket type"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("aside", {
              className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].aside,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("section", {
                className: `${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].card} ${_UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].visibility}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].asideEyebrow,
                  children: "Step 5 \xB7 Visibility"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Toggle, {
                  label: "Public page",
                  note: "Listed on the events widget",
                  checked: !meeting.is_hidden,
                  onChange: value => patchMeeting({
                    is_hidden: !value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                  className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].divider
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Toggle, {
                  label: "Confirmation emails",
                  note: "Send event emails to attendees",
                  checked: !event.notifications.disable_emails,
                  onChange: value => patch({
                    notifications: {
                      disable_emails: !value
                    }
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(Toggle, {
                  label: "Google Calendar",
                  note: calendar ? "Add this event to your calendar" : "Connect Google Calendar to enable",
                  checked: Boolean(event.notifications.google_calendar),
                  disabled: !calendar,
                  onChange: value => patch({
                    notifications: {
                      google_calendar: value
                    }
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("section", {
                className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].warning,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
                  children: "Before you publish"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("ul", {
                  children: [!stripe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                    children: "Stripe is not connected \u2014 paid tickets are unavailable."
                  }), event.location === "zoom" && !zoom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                    children: "Connect Zoom before publishing an online meeting."
                  }), !activeTickets.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                    children: "This event uses a single registration capacity."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                    children: "Check the time zone and ticket availability."
                  })]
                }), !stripe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  text: "Connect Stripe",
                  type: "secondary",
                  size: "xs",
                  onAction: () => navigate("/integrations")
                })]
              }), isNew && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].draftNote,
                children: [recoverDraft ? "Your saved draft has been restored. " : "", "Saved drafts stay in this browser tab and are restored when you reopen New event."]
              })]
            })]
          })
        })
      }), creatingFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Pages_Filters_CreateFilterModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        type: creatingFilter,
        onClose: () => setCreatingFilter(null),
        onCreated: created => {
          const key = filterCards.find(([, list]) => list === creatingFilter)?.[0];
          if (key && created?.id) selectFilterValue(key, created.id);
        }
      }), pendingLeave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].confirmOverlay,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": confirmId,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].confirmDialog,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("strong", {
            id: confirmId,
            children: "Leave without saving?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
            children: "This event has changes that were never saved. Leaving now discards them."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: _UnifiedEventForm_module_scss__WEBPACK_IMPORTED_MODULE_19__["default"].confirmActions,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              text: "Stay on this page",
              type: "secondary",
              onAction: () => setPendingLeave(null)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              text: "Discard changes",
              onAction: () => {
                const go = pendingLeave;
                setPendingLeave(null);
                go();
              }
            })]
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/Components/CreateEvent/coverImage.js":
/*!**************************************************!*\
  !*** ./src/Components/CreateEvent/coverImage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COVER_IMAGE_ACCEPT: () => (/* binding */ COVER_IMAGE_ACCEPT),
/* harmony export */   COVER_IMAGE_TYPES: () => (/* binding */ COVER_IMAGE_TYPES),
/* harmony export */   readCoverImage: () => (/* binding */ readCoverImage)
/* harmony export */ });
// The cover image travels to the API as base64 inside the event payload, both
// on create and on update. A raw photo therefore inflates the JSON body by a
// third, and hosting stacks reject or truncate such bodies long before the
// 5 MB a file picker happily accepts (nginx client_max_body_size, PHP
// post_max_size, WAFs). Every picked file is re-encoded here so the payload
// stays small enough to survive production, and so unsupported camera formats
// fail with a message instead of a 415 from the server.

// What inc/helpers.php accepts after decoding the base64.
const COVER_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const COVER_IMAGE_ACCEPT = COVER_IMAGE_TYPES.join(",");
// Read from disk; anything larger is a camera original the browser would also
// struggle to decode.
const MAX_FILE_BYTES = 15 * 1024 * 1024;
// Sent to the API. 400 KB of base64 is ~534 KB on the wire, which fits inside
// the 1 MB body limit nginx ships with by default.
const MAX_PAYLOAD_BYTES = 400 * 1024;
const MAX_DIMENSION = 1600;
const base64Bytes = dataUrl => Math.ceil((dataUrl.length - dataUrl.indexOf(",") - 1) * 3 / 4);
const readFile = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(new Error("Unable to read this image."));
  reader.readAsDataURL(file);
});
const loadImage = dataUrl => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error("This image could not be processed. Save it as JPG, PNG, GIF or WEBP and try again."));
  image.src = dataUrl;
});

// Scales down to MAX_DIMENSION and then searches for the highest JPEG quality
// that still fits the payload budget.
const compress = image => {
  const scale = Math.min(1, MAX_DIMENSION / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  // JPEG has no alpha channel, so transparency has to land on something.
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  const top = canvas.toDataURL("image/jpeg", 0.9);
  if (base64Bytes(top) <= MAX_PAYLOAD_BYTES) return top;
  let low = 0.3;
  let high = 0.9;
  let best = null;
  for (let step = 0; step < 8; step += 1) {
    const quality = (low + high) / 2;
    const candidate = canvas.toDataURL("image/jpeg", quality);
    if (base64Bytes(candidate) <= MAX_PAYLOAD_BYTES) {
      best = candidate;
      low = quality;
    } else {
      high = quality;
    }
  }
  return best || canvas.toDataURL("image/jpeg", 0.3);
};

// Resolves with a data URL ready for event.image_content, or rejects with a
// message that can be shown as-is.
const readCoverImage = async file => {
  if (!COVER_IMAGE_TYPES.includes(file.type)) throw new Error("Choose a JPG, PNG, GIF or WEBP image.");
  if (file.size > MAX_FILE_BYTES) throw new Error("Choose an image smaller than 15 MB.");
  const dataUrl = await readFile(file);
  // Small files are forwarded untouched: that keeps PNG transparency and
  // animated GIFs intact, which a canvas round-trip would flatten.
  if (base64Bytes(dataUrl) <= MAX_PAYLOAD_BYTES) return dataUrl;
  const compressed = compress(await loadImage(dataUrl));
  if (base64Bytes(compressed) > MAX_PAYLOAD_BYTES * 2) throw new Error("This image is too large to upload. Try a smaller or less detailed image.");
  return compressed;
};

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

/***/ }),

/***/ "./src/Components/CreateEvent/useUnifiedEventForm.js":
/*!***********************************************************!*\
  !*** ./src/Components/CreateEvent/useUnifiedEventForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUnifiedEventForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _utilities_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/attributes */ "./src/utilities/attributes.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/events */ "./src/utilities/events.js");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _utilities_planLimits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/planLimits */ "./src/utilities/planLimits.js");
/* harmony import */ var _eventFormData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventFormData */ "./src/Components/CreateEvent/eventFormData.js");










function useUnifiedEventForm() {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.settings);
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const [query] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useSearchParams)();
  const occurrence = query.get("occurrence_id") || query.get("occurrenceId") || query.get("occ");
  const registrantsView = Boolean(query.get("registrants"));
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const [event, setEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => (0,_eventFormData__WEBPACK_IMPORTED_MODULE_8__.initialEvent)(settings));
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Boolean(id));
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [recoverDraft, setRecoverDraft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // null until the dropdown asks for them: a recurring event can have dozens,
  // and the event endpoint answers with an empty list on an occurrence anyway.
  const [occurrences, setOccurrences] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const initialized = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const saveLock = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  // What the form held when it was last loaded or saved. Anything else means
  // there are edits to lose.
  const baseline = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const saved = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const draftKey = `servv:event-draft:${window.servvData?.nonce}:${id || "new"}:${occurrence || ""}`;
  const patch = update => setEvent(prev => (0,_utilities_attributes__WEBPACK_IMPORTED_MODULE_4__.mergeAttributesPatch)(prev, update));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let active = true;
    initialized.current = false;
    setError("");
    if (!id) {
      setLoading(false);
      return () => {
        active = false;
      };
    }
    setLoading(true);
    (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.getEvent)(id, occurrence).then(async data => {
      const next = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_8__.loadEvent)(data, location.pathname.includes("/zoom/") ? "zoom" : "offline");
      if (occurrence) {
        const response = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/wp-json/servv-plugin/v1/event/${id}/tickets`, {
          params: {
            occurrence_id: occurrence
          },
          headers: {
            "X-WP-Nonce": window.servvData.nonce
          }
        });
        const tickets = Array.isArray(response.data) ? response.data : response.data.tickets;
        if (!Array.isArray(tickets)) throw new Error("Invalid occurrence tickets response");
        next.tickets = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_8__.loadEvent)({
          ...data,
          tickets
        }, next.location).tickets;
      }
      // The cover comes from the event endpoint itself: the wp/v2 media route
      // it used to be read from is hardened or cached away on many hosts, so
      // a saved image looked lost.
      if (!next.featured_image_url) {
        try {
          next.featured_image_url = (await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.getFeaturedImage)(id)) || "";
        } catch {
          /* optional cover */
        }
      }
      // Covers are only ever sent to the API as base64 image_content, so the
      // field holds a freshly picked image and nothing else.
      next.image_content = "";
      if (active) {
        setEvent(next);
        baseline.current = JSON.stringify(next);
        saved.current = false;
        initialized.current = true;
      }
    }).catch(() => {
      if (active) setError("Unable to load this event. Return to Events and try again.");
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [id, occurrence]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (id || initialized.current || !settings) return;
    let draft;
    try {
      draft = JSON.parse(sessionStorage.getItem(draftKey));
    } catch {
      /* storage unavailable */
    }
    const next = draft || (0,_eventFormData__WEBPACK_IMPORTED_MODULE_8__.initialEvent)(settings);
    setEvent(next);
    baseline.current = JSON.stringify(next);
    saved.current = false;
    setRecoverDraft(Boolean(draft));
    initialized.current = true;
  }, [settings, id, draftKey]);
  const dirty = !saved.current && baseline.current !== null && JSON.stringify(event) !== baseline.current;

  // Covers a reload or a closed tab; navigation inside the hash router is
  // guarded by the form itself, which can ask in its own words.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!dirty) return;
    const warn = e => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  // The series page carries its occurrences inline, an occurrence page does
  // not, so both read them from the endpoint that always answers.
  const loadOccurrences = async () => {
    if (!id || occurrences) return;
    try {
      const response = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].get(`/wp-json/servv-plugin/v1/event/${id}/occurrences`, {
        params: {
          page_size: 50,
          page: 1
        },
        headers: {
          "X-WP-Nonce": window.servvData.nonce
        }
      });
      setOccurrences((response.data?.meetings || []).map(m => {
        var _m$occurrence_id;
        return {
          id: String((_m$occurrence_id = m.occurrence_id) !== null && _m$occurrence_id !== void 0 ? _m$occurrence_id : ""),
          start: m.start_time
        };
      }).filter(o => o.id && o.start));
    } catch {
      setOccurrences([]);
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Unable to load the occurrences of this event.");
    }
  };
  const saveDraft = () => {
    try {
      sessionStorage.setItem(draftKey, JSON.stringify(event));
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Draft saved in this browser tab. It has not been published.");
    } catch {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Unable to save draft in this browser.");
    }
  };
  const save = async () => {
    var _recurrence$weekly_da;
    if (saveLock.current || error || loading) return;
    if (!settings?.current_plan) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Wait for your plan settings to load before publishing.");
      return;
    }
    const plan = settings.current_plan;
    const hasRecurrence = !!event.meeting.recurrence?.type;
    const eventLimitKey = event.location === "zoom" ? hasRecurrence ? "recurring_events_limit" : "events_limit" : hasRecurrence ? "offline_recurring_events_limit" : "offline_events_limit";
    if (!id && (0,_utilities_planLimits__WEBPACK_IMPORTED_MODULE_7__.planLimit)(plan, eventLimitKey) === 0) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Your plan does not include this event type.");
      return;
    }
    if (hasRecurrence && !(0,_utilities_planLimits__WEBPACK_IMPORTED_MODULE_7__.recurringAllowed)(plan, event.location)) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Your plan does not include recurring events of this type.");
      return;
    }
    // A weekly pattern is defined by the days it falls on, and the API has
    // nothing to schedule without them.
    const recurrence = event.meeting.recurrence;
    const weeklyDays = Array.isArray(recurrence?.weekly_days) ? recurrence.weekly_days : String((_recurrence$weekly_da = recurrence?.weekly_days) !== null && _recurrence$weekly_da !== void 0 ? _recurrence$weekly_da : "").split(",").filter(Boolean);
    if (Number(recurrence?.type) === 2 && !weeklyDays.length) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Select at least one day for a weekly recurrence.");
      return;
    }
    // The series ends either after a number of occurrences or on a date, and
    // the occurrence count can be cleared while it is being retyped.
    if (hasRecurrence && !(Number(recurrence.end_times) > 0) && !recurrence.end_date_time) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Set when the recurrence ends.");
      return;
    }
    const start = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(event.meeting.startTime, event.meeting.timezone);
    if (!event.meeting.topic?.trim() || !start.isValid() || !Number.isFinite(Number(event.meeting.duration)) || Number(event.meeting.duration) <= 0) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Enter an event title, a valid start date and a positive duration.");
      return;
    }
    if (!id && start.isBefore(moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()())) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Start time must be in the future.");
      return;
    }
    if (event.location === "zoom" && !_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore.getState().zoomConnected) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Connect Zoom before publishing this meeting.");
      return;
    }
    const tickets = event.tickets.filter(t => t.action !== "remove");
    if (tickets.length > 1 && !(0,_utilities_planLimits__WEBPACK_IMPORTED_MODULE_7__.multiTicketsAllowed)(plan)) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Your plan supports one ticket type per event.");
      return;
    }
    if (tickets.some(t => !t.title?.trim() || !Number.isInteger(Number(t.quantity)) || Number(t.quantity) < 1 || t.type === "paid" && !(Number(t.price) > 0))) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Each ticket needs a name, a positive whole-number capacity and a valid price.");
      return;
    }
    if (tickets.some(t => t.start_datetime && t.end_datetime && t.end_datetime <= t.start_datetime)) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Ticket sales must end after they start.");
      return;
    }
    const freePlan = Number(settings?.current_plan?.id) === 1;
    if (freePlan && tickets.some(t => t.type !== "free")) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Your current plan supports free registrations only.");
      return;
    }
    if (freePlan && tickets.reduce((sum, t) => sum + Number(t.quantity), 0) > Number(settings.free_registrants_limit || 15)) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Ticket capacity exceeds your plan's registration limit.");
      return;
    }
    if ((tickets.some(t => t.type !== "free") || !tickets.length && Number(event.product.price) > 0) && !_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore.getState().stripeConnected) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Connect Stripe before publishing paid registrations.");
      return;
    }
    saveLock.current = true;
    setSaving(true);
    try {
      const data = (0,_eventFormData__WEBPACK_IMPORTED_MODULE_8__.eventPayload)(event, !id, freePlan);
      let imageError = "";
      if (!id) {
        const created = await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.createEvent)(event.location === "zoom" ? "zoom" : "offline", data);
        imageError = created?.image_error || "";
      } else {
        // Reconcile each completed mutation immediately so retrying a later
        // failure cannot duplicate ticket creation or repeat deletion.
        for (const ticket of event.tickets) {
          if (ticket.persisted && !ticket.action) continue;
          if (!ticket.persisted && ticket.action === "remove") continue;
          const response = await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"])({
            method: ticket.action === "remove" ? "DELETE" : ticket.persisted ? "PATCH" : "POST",
            url: `/wp-json/servv-plugin/v1/event/${id}/tickets${ticket.persisted ? `/${ticket.id}` : ""}`,
            params: occurrence ? {
              occurrence_id: occurrence
            } : {},
            headers: {
              "X-WP-Nonce": window.servvData.nonce
            },
            ...(ticket.action !== "remove" ? {
              data: (0,_eventFormData__WEBPACK_IMPORTED_MODULE_8__.ticketPayload)(ticket, event.meeting.timezone)
            } : {})
          });
          const result = response.data?.ticket || response.data;
          if (!ticket.persisted && !result?.id) {
            setError("A ticket was saved without a returned ID. Reload this event before saving again.");
            throw new Error("Ticket created but no ticket ID returned. Reload before retrying.");
          }
          setEvent(prev => ({
            ...prev,
            tickets: prev.tickets.flatMap(t => t.id !== ticket.id ? [t] : ticket.action === "remove" ? [] : [{
              ...t,
              id: ticket.persisted ? t.id : result.id,
              persisted: true,
              action: undefined
            }])
          }));
        }
        const updated = await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.updateEvent)(id, data, occurrence);
        imageError = updated?.image_error || "";
      }
      try {
        sessionStorage.removeItem(draftKey);
      } catch {
        /* storage unavailable */
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(id ? "Event updated successfully." : "Event published successfully.");
      if (imageError) react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warning(`Cover image was not saved: ${imageError}`);
      saved.current = true;
      navigate("/events");
    } catch (failure) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(failure.response?.data?.message || failure.message || "Unable to save event. Please try again.");
    } finally {
      saveLock.current = false;
      setSaving(false);
    }
  };
  return {
    event,
    patch,
    settings: settings || {},
    loading: loading || !settings,
    saving,
    error,
    save,
    saveDraft,
    isNew: !id,
    id,
    occurrence,
    registrantsView,
    recoverDraft,
    dirty,
    occurrences,
    loadOccurrences
  };
}

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

/***/ "./src/Components/Pages/EventRegistrantsPage.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/EventRegistrantsPage.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventRegistrantsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PaperAirplaneIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/events */ "./src/utilities/events.js");
/* harmony import */ var _utilities_registrants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/registrants */ "./src/utilities/registrants.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EventRegistrantsPage.module.scss */ "./src/Components/Pages/EventRegistrantsPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















const PAGE_SIZE = 20;
const emptyContact = {
  firstName: "",
  lastName: "",
  email: ""
};
const failureMessage = failure => failure.response?.data?.message || failure.message || "Please try again.";
const csvCell = value => {
  let text = String(value || "");
  if (/^[=+@-]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
};
function EventRegistrantsPage() {
  const {
    id,
    provider
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useParams)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useNavigate)();
  const [query] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useSearchParams)();
  const occurrenceId = query.get("occurrence_id") || query.get("occurrenceId") || query.get("occ");
  const isZoom = provider === "zoom" || location.pathname.includes("/zoom/");
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_2__.useServvStore)(store => store.settings);
  const canAdd = !!settings?.current_plan && Number(settings.current_plan.id) !== 1;
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    pageCount: 1
  });
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [contact, setContact] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(emptyContact);
  const [contactError, setContactError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const tokens = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    1: null
  });
  const generation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const actionLock = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routeKey = `${id}:${isZoom}:${occurrenceId || ""}`;
  const previousRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(routeKey);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      generation.current++;
    };
  }, []);
  const fetchPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(number => isZoom ? (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrantsWithToken)({
    postID: id,
    occurrenceId,
    next_page_token: tokens.current[number],
    pageSize: PAGE_SIZE,
    throwOnError: true
  }) : (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrants)({
    postID: id,
    occurrenceId,
    page: number,
    throwOnError: true
  }), [id, occurrenceId, isZoom]);
  const load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async number => {
    const current = ++generation.current;
    setLoading(true);
    setError("");
    try {
      const result = await fetchPage(number);
      if (!mounted.current || current !== generation.current) return;
      setRows(result.registrants);
      setPagination(result.pagination);
      setSelected([]);
      if (result.pagination.nextPageToken) tokens.current[number + 1] = result.pagination.nextPageToken;else delete tokens.current[number + 1];
    } catch (failure) {
      if (mounted.current && current === generation.current) setError(`Unable to load registrants. ${failureMessage(failure)}`);
    } finally {
      if (mounted.current && current === generation.current) setLoading(false);
    }
  }, [fetchPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let active = true;
    setTitle("");
    (0,_utilities_events__WEBPACK_IMPORTED_MODULE_3__.getEvent)(id, occurrenceId).then(data => {
      if (active) setTitle(data.meeting?.topic || data.topic || "");
    }).catch(() => {});
    return () => {
      active = false;
    };
  }, [id, occurrenceId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (previousRoute.current !== routeKey) {
      previousRoute.current = routeKey;
      tokens.current = {
        1: null
      };
      setSelected([]);
      setModal(null);
      setRows([]);
      if (page !== 1) {
        setPage(1);
        return;
      }
    }
    load(page);
    return () => {
      generation.current++;
    };
  }, [routeKey, page, load]);
  const runAction = async (action, success) => {
    if (actionLock.current) return;
    actionLock.current = true;
    setBusy(true);
    try {
      await action();
      if (!mounted.current) return;
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(success);
      setModal(null);
      setContact(emptyContact);
      setSelected([]);
      await load(page);
    } catch (failure) {
      if (mounted.current) react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(failureMessage(failure));
    } finally {
      actionLock.current = false;
      if (mounted.current) setBusy(false);
    }
  };
  const create = () => {
    if (!canAdd) return;
    if (!contact.firstName.trim() || !contact.lastName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
      setContactError("Enter a first name, last name and valid email address.");
      return;
    }
    runAction(() => (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.addRegistrant)({
      postID: id,
      occurrenceId,
      ...contact
    }), "Registrant added.");
  };
  const performForSelected = async (action, ids) => {
    const results = await Promise.allSettled(ids.map(registrantID => action({
      postID: id,
      occurrenceId,
      registrantID
    })));
    const failed = results.filter(result => result.status === "rejected");
    if (failed.length) {
      await load(page);
      throw new Error(`${ids.length - failed.length} of ${ids.length} completed. ${failureMessage(failed[0].reason)}`);
    }
  };
  const resend = () => runAction(() => selected.length ? performForSelected(_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.resendRegistrantNotification, selected) : (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.resendAllNotifications)({
    postID: id,
    occurrenceId
  }), "Notifications resent.");
  const exportCSV = async () => {
    if (actionLock.current) return;
    actionLock.current = true;
    setBusy(true);
    try {
      const all = [];
      let number = 1,
        nextToken = null;
      const seen = new Set();
      do {
        const result = isZoom ? await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrantsWithToken)({
          postID: id,
          occurrenceId,
          next_page_token: nextToken,
          pageSize: PAGE_SIZE,
          throwOnError: true
        }) : await (0,_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.fetchRegistrants)({
          postID: id,
          occurrenceId,
          page: number,
          throwOnError: true
        });
        all.push(...result.registrants);
        if (!isZoom) {
          if (number >= (result.pagination.pageCount || 1)) break;
          number++;
        } else {
          nextToken = result.pagination.nextPageToken;
          if (nextToken && seen.has(nextToken)) throw new Error("Unable to finish the export: repeated pagination token.");
          seen.add(nextToken);
        }
      } while (!isZoom || nextToken);
      if (!all.length) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("No registrants to export.");
        return;
      }
      const csv = ["First Name,Last Name,Email", ...all.map(person => [person.firstName, person.lastName, person.email].map(csvCell).join(","))].join("\r\n");
      const url = URL.createObjectURL(new Blob([csv], {
        type: "text/csv;charset=utf-8;"
      }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "registrants.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`Exported ${all.length} registrants.`);
    } catch (failure) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(failureMessage(failure));
    } finally {
      actionLock.current = false;
      if (mounted.current) setBusy(false);
    }
  };
  const disabled = loading || busy;
  const allSelected = rows.length > 0 && selected.length === rows.length;
  const editPath = `/events/${isZoom ? "zoom" : "offline"}/${id}${occurrenceId ? `?occurrence_id=${encodeURIComponent(occurrenceId)}` : ""}`;
  const hasNext = isZoom ? !!pagination.nextPageToken : page < (pagination.pageCount || 1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breadcrumbs: [{
          label: "Events",
          to: "/events"
        }, {
          label: title || "Event",
          to: editPath
        }, {
          label: "Registrants"
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Registrants",
        description: title || "Manage attendees for this event.",
        actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Edit event",
            type: "secondary",
            onAction: () => navigate(editPath),
            disabled: busy
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Add registrant",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"], {}),
            disabled: disabled || !canAdd,
            onAction: () => {
              setContactError("");
              setModal({
                type: "add"
              });
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].divider
      }), !canAdd && settings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
        className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].note,
        children: "Manual registration is available on a paid plan."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("section", {
        className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].card,
        "aria-busy": disabled,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].toolbar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h2", {
              children: "Registrants list"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              children: selected.length ? `${selected.length} selected` : pagination.totalRecords != null ? `${pagination.totalRecords} registrants` : "Attendees registered for this event"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].actions,
            children: [selected.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Delete selected",
              type: "danger-secondary",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
              disabled: disabled,
              onAction: () => setModal({
                type: "delete",
                ids: selected
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: selected.length ? "Resend to selected" : "Resend notifications",
              type: "secondary",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"], {}),
              disabled: disabled || !rows.length || !!error,
              onAction: resend
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Export CSV",
              type: "secondary",
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__["default"], {}),
              disabled: disabled || !!error,
              onAction: exportCSV
            })]
          })]
        }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].state,
          role: "alert",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            children: error
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Try again",
            type: "secondary",
            onAction: () => load(page),
            disabled: disabled
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_13__["default"], {
          isLoading: loading,
          children: rows.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].table,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: `${_EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].row} ${_EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].tableHeader}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                ariaLabel: "Select all registrants on this page",
                checked: allSelected,
                indeterminate: selected.length > 0 && !allSelected,
                disabled: disabled,
                onChange: () => setSelected(allSelected ? [] : rows.map(person => person.id))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                children: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
                children: "Actions"
              })]
            }), rows.map(person => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].row,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                ariaLabel: `Select ${person.email}`,
                checked: selected.includes(person.id),
                disabled: disabled,
                onChange: () => setSelected(previous => previous.includes(person.id) ? previous.filter(value => value !== person.id) : [...previous, person.id])
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].name,
                children: [person.firstName, person.lastName].filter(Boolean).join(" ") || "Registrant"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
                className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].email,
                children: person.email
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                text: "Delete",
                type: "danger-ghost",
                size: "sm",
                icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"], {}),
                disabled: disabled,
                onAction: () => setModal({
                  type: "delete",
                  ids: [person.id]
                })
              })]
            }, person.id))]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].state,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h3", {
              children: "No registrants yet"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
              children: "Registrations for this event will appear here."
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].pagination,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
            children: ["Page ", page, !isZoom ? ` of ${pagination.pageCount || 1}` : ""]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].actions,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Previous",
              type: "secondary",
              disabled: disabled || page === 1,
              onAction: () => setPage(value => value - 1)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              text: "Next",
              type: "secondary",
              disabled: disabled || !hasNext || !!error,
              onAction: () => setPage(value => value + 1)
            })]
          })]
        })]
      }), modal?.type === "add" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Add registrant",
        description: "Register an attendee for this event.",
        onClose: () => !busy && setModal(null),
        footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Cancel",
            type: "secondary",
            disabled: busy,
            onAction: () => setModal(null)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: busy ? "Adding…" : "Add registrant",
            disabled: busy || !canAdd,
            onAction: create
          })]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].form,
          children: [[["firstName", "First name"], ["lastName", "Last name"], ["email", "Email"]].map(([key, label]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
            id: `registrant-${key}`,
            label: label,
            placeholder: label,
            type: key === "email" ? "email" : "text",
            value: contact[key],
            disabled: busy,
            onChange: value => {
              setContactError("");
              setContact(previous => ({
                ...previous,
                [key]: value
              }));
            }
          }, key)), contactError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            role: "alert",
            className: _EventRegistrantsPage_module_scss__WEBPACK_IMPORTED_MODULE_14__["default"].error,
            children: contactError
          })]
        })
      }), modal?.type === "delete" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: modal.ids.length === 1 ? "Delete registrant?" : "Delete selected registrants?",
        description: "These attendees will be removed from the event.",
        onClose: () => !busy && setModal(null),
        footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "Cancel",
            type: "secondary",
            disabled: busy,
            onAction: () => setModal(null)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: busy ? "Deleting…" : "Delete",
            type: "danger",
            disabled: busy,
            onAction: () => runAction(() => performForSelected(_utilities_registrants__WEBPACK_IMPORTED_MODULE_4__.deleteRegistrant, modal.ids), "Registrants deleted.")
          })]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
          children: ["This removes ", modal.ids.length, " ", modal.ids.length === 1 ? "registrant" : "registrants", "."]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/Components/Pages/Filters/CreateFilterModal.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Filters/CreateFilterModal.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _FilterFormSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterFormSection */ "./src/Components/Pages/Filters/FilterFormSection.jsx");
/* harmony import */ var _filterFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterFields */ "./src/Components/Pages/Filters/filterFields.js");
/* harmony import */ var _utilities_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/filters */ "./src/utilities/filters.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FilterForm.module.scss */ "./src/Components/Pages/Filters/FilterForm.module.scss");
/* harmony import */ var _useFilterLimits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useFilterLimits */ "./src/Components/Pages/Filters/useFilterLimits.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











// Creates one filter value without leaving the page that needed it — the event
// form, so far. The filter pages stay the place to edit values, reorder them
// and set a location's hours; this only asks for what a value cannot be created
// without.
//
// onCreated receives the new value, so the caller can select what the host just
// created instead of making them find it in a list.

const CreateFilterModal = ({
  type,
  onClose,
  onCreated
}) => {
  const form = _filterFields__WEBPACK_IMPORTED_MODULE_5__.FILTER_FORMS[type];
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(store => store.settings);
  const filters = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(store => store.filtersList);
  const {
    isLimitReached,
    isMembersLimitReached,
    filterCategories
  } = (0,_useFilterLimits__WEBPACK_IMPORTED_MODULE_9__.useFilterLimits)(settings, filters);
  const creationBlocked = !settings || isLimitReached || !filterCategories.some(category => category.toLowerCase() === type) || type === "members" && isMembersLimitReached;
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)(s => s.syncSingleFilterFromServer);
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [showErrors, setShowErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (!form) return null;
  const errors = (0,_filterFields__WEBPACK_IMPORTED_MODULE_5__.filterFormErrors)(type, values);
  const change = (key, value) => {
    setShowErrors(false);
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const save = async () => {
    if (creationBlocked) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Your plan does not allow another filter of this type.");
      return;
    }
    if (Object.keys(errors).length) {
      setShowErrors(true);
      return;
    }
    setSaving(true);
    try {
      const created = await (0,_utilities_filters__WEBPACK_IMPORTED_MODULE_6__.saveFilter)(type, values);
      await syncSingleFilterFromServer(type);
      // The create response carries the new id on most collections; where it
      // does not, the refreshed list is matched by the name just submitted.
      const name = String(values.name || "").trim();
      const stored = _store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore.getState().filtersList?.[type]?.find(value => String(value.name || "").trim() === name);
      onCreated?.(created?.id ? {
        ...stored,
        ...created
      } : stored);
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${form.label} created.`);
      onClose();
    } catch (failure) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(failure.response?.data?.message || `Unable to create this ${form.label.toLowerCase()}. Please try again.`);
    } finally {
      setSaving(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_2__["default"], {
    eyebrow: "New filter",
    title: `New ${form.label.toLowerCase()}`,
    description: form.description,
    size: "md",
    onClose: saving ? () => {} : onClose,
    footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Cancel",
        type: "secondary",
        disabled: saving,
        onAction: onClose
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: saving ? "Creating…" : "Create filter",
        disabled: saving || creationBlocked,
        onAction: save
      })]
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].fieldGrid,
      children: form.fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_FilterFormSection__WEBPACK_IMPORTED_MODULE_4__.FilterField, {
        label: field.label,
        required: field.required,
        hint: field.hint,
        error: showErrors ? errors[field.key] : undefined,
        fullWidth: field.fullWidth,
        value: values[field.key] || "",
        type: "text",
        maxLength: field.maxLength,
        textarea: field.textarea,
        rows: field.rows,
        disabled: saving,
        onChange: value => change(field.key, value)
      }, field.key))
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateFilterModal);

/***/ }),

/***/ "./src/Components/Pages/Filters/FilterFormSection.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Filters/FilterFormSection.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterField: () => (/* binding */ FilterField),
/* harmony export */   FilterOrdering: () => (/* binding */ FilterOrdering),
/* harmony export */   "default": () => (/* binding */ FilterFormSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterForm.module.scss */ "./src/Components/Pages/Filters/FilterForm.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function FilterFormSection({
  title,
  description,
  children,
  grid = false
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
      className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cardHeader,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: `${_FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].cardBody} ${grid ? _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fieldGrid : ""}`,
      children: children
    })]
  });
}
function FilterField({
  label,
  required = false,
  hint,
  error,
  fullWidth = false,
  ...props
}) {
  const id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `${_FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].field} ${fullWidth ? _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fullWidth : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
      htmlFor: id,
      children: [label, required ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].required,
        children: " *"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].optional,
        children: "Optional"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ...props,
      id: id,
      width: "100%",
      error: Boolean(error)
    }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error,
      role: "alert",
      children: error
    }) : hint && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hint,
      children: hint
    })]
  });
}
function FilterOrdering({
  editing,
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FilterFormSection, {
    title: "Ordering",
    children: editing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ordering,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].priority,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FilterField, {
          label: "Priority",
          value: value !== null && value !== void 0 ? value : "",
          maxLength: 10,
          onChange: onChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hint,
        children: "Set the order in which this value appears in the filter list."
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: _FilterForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hint,
      children: "Priority can be edited after this filter is created."
    })
  });
}

/***/ }),

/***/ "./src/Components/Pages/Filters/filterFields.js":
/*!******************************************************!*\
  !*** ./src/Components/Pages/Filters/filterFields.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FILTER_FORMS: () => (/* binding */ FILTER_FORMS),
/* harmony export */   filterFormErrors: () => (/* binding */ filterFormErrors)
/* harmony export */ });
// What a new filter value needs, per collection. Shared by anything that
// creates one without the full filter page: the fields a value cannot be
// created without, and nothing else. Priority is deliberately absent — the
// pages only offer it while editing — and so are a location's operational
// hours, which have their own time controls there.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s\-().]{7,20}$/;
const NAME = {
  key: "name",
  required: true,
  maxLength: 100,
  fullWidth: true,
  hint: "This name identifies the value in your event filters."
};
const DETAILS = {
  key: "details",
  label: "Details",
  maxLength: 200,
  textarea: true,
  rows: 3,
  fullWidth: true
};
const FILTER_FORMS = {
  locations: {
    label: "Location",
    description: "Where the event happens. Hours can be set afterwards.",
    fields: [{
      ...NAME,
      label: "Location name"
    }, DETAILS]
  },
  categories: {
    label: "Category",
    description: "Groups events in the public list.",
    fields: [{
      ...NAME,
      label: "Category name"
    }, DETAILS]
  },
  languages: {
    label: "Language",
    description: "The language the session is held in.",
    fields: [{
      ...NAME,
      label: "Language name"
    }]
  },
  members: {
    label: "Member",
    description: "The host shown to attendees.",
    fields: [{
      ...NAME,
      label: "Member name"
    }, {
      key: "email",
      label: "Email",
      maxLength: 150,
      validate: value => !value || EMAIL.test(value) ? "" : "Invalid email address"
    }, {
      key: "phone",
      label: "Phone",
      maxLength: 30,
      validate: value => !value || PHONE.test(value) ? "" : "Invalid phone number"
    }, {
      key: "description",
      label: "Description",
      maxLength: 200,
      textarea: true,
      rows: 3,
      fullWidth: true
    }]
  }
};
const filterFormErrors = (type, values = {}) => {
  const errors = {};
  (FILTER_FORMS[type]?.fields || []).forEach(field => {
    const value = values[field.key];
    if (field.required && !String(value || "").trim()) errors[field.key] = `${field.label} is required.`;else if (field.validate) {
      const error = field.validate(value);
      if (error) errors[field.key] = error;
    }
  });
  return errors;
};

/***/ }),

/***/ "./src/Components/Pages/Filters/useFilterLimits.js":
/*!*********************************************************!*\
  !*** ./src/Components/Pages/Filters/useFilterLimits.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilterLimits: () => (/* binding */ useFilterLimits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_planLimits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities/planLimits */ "./src/utilities/planLimits.js");


const useFilterLimits = (settings, filtersList) => (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utilities_planLimits__WEBPACK_IMPORTED_MODULE_1__.filterAllowance)(settings?.current_plan, filtersList), [settings?.current_plan, filtersList]);

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

/***/ "./src/Components/Shared/DashboardPagination.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Shared/DashboardPagination.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DashboardPagination = ({
  currentPage = 1,
  totalPages,
  totalRecords,
  pageSize = 10,
  maxVisiblePages = 3,
  onPageChange
}) => {
  if (totalPages <= 1) return null;
  const centerPages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const pages = [];
    const delta = Math.floor(maxVisiblePages / 2);
    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);
    if (currentPage <= delta + 1) {
      end = Math.min(totalPages - 1, maxVisiblePages + 1);
    }
    if (currentPage >= totalPages - delta) {
      start = Math.max(2, totalPages - maxVisiblePages);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);
  const showLeftEllipsis = centerPages.length > 0 && centerPages[0] > 2;
  const showRightEllipsis = centerPages.length > 0 && centerPages[centerPages.length - 1] < totalPages - 1;
  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);
  const goToPage = page => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "events-pagination-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      className: "events-pagination",
      role: "navigation",
      "aria-label": "Pagination",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "events-pagination__btn events-pagination__btn--prev",
        disabled: currentPage === 1,
        onClick: () => goToPage(currentPage - 1),
        "aria-label": "Previous page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M12.5 15L7.5 10L12.5 5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "events-pagination__numbers",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${currentPage === 1 ? "events-pagination__number--active" : ""}`,
          onClick: () => goToPage(1),
          children: "1"
        }), showLeftEllipsis && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "events-pagination__ellipsis",
          children: "\u2026"
        }), centerPages.map(page => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${page === currentPage ? "events-pagination__number--active" : ""}`,
          "aria-current": page === currentPage ? "page" : undefined,
          onClick: () => goToPage(page),
          children: page
        }, page)), showRightEllipsis && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "events-pagination__ellipsis",
          children: "\u2026"
        }), totalPages > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: `events-pagination__number ${currentPage === totalPages ? "events-pagination__number--active" : ""}`,
          onClick: () => goToPage(totalPages),
          children: totalPages
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "events-pagination__btn events-pagination__btn--next",
        disabled: currentPage === totalPages,
        onClick: () => goToPage(currentPage + 1),
        "aria-label": "Next page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M7.5 15L12.5 10L7.5 5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "events-pagination__info",
      children: ["Showing ", startRecord, "-", endRecord, " of ", totalRecords, " events"]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPagination);

/***/ }),

/***/ "./src/utilities/adminApiFetch.js":
/*!****************************************!*\
  !*** ./src/utilities/adminApiFetch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ adminApiFetch)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestCache */ "./src/utilities/requestCache.js");


async function adminApiFetch(options) {
  if (!(0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.adminCacheEnabled)() || !options.path || options.parse === false) return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  const url = (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.canonicalRequestURL)(`/wp-json${options.path}`);
  const method = (options.method || "GET").toUpperCase();
  const resource = (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.requestResource)(url.pathname);
  if (method === "GET" && resource && !options.signal) {
    const response = await (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.cachedRequest)({
      key: `api:${window.servvData.nonce}:${url.href}`,
      tags: [resource],
      ttl: (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.resourceTtl)(resource),
      load: async () => ({
        data: JSON.stringify(await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options)),
        status: 200,
        statusText: "OK",
        headers: {}
      }),
      isValid: ({
        data,
        status
      }) => status >= 200 && status < 300 && (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.isSuccessfulData)(typeof data === "string" ? JSON.parse(data) : data)
    });
    return typeof response.data === "string" ? JSON.parse(response.data) : response.data;
  }
  const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  if (method !== "GET" && method !== "HEAD" && (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.isSuccessfulData)(data)) {
    (0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.invalidateRequests)((0,_requestCache__WEBPACK_IMPORTED_MODULE_1__.mutationResources)(url.pathname));
  }
  return data;
}

/***/ }),

/***/ "./src/utilities/attributes.js":
/*!*************************************!*\
  !*** ./src/utilities/attributes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeAttributesPatch: () => (/* binding */ mergeAttributesPatch)
/* harmony export */ });
// Shallow-merges a patch into the event attributes, one level deep: plain
// objects are merged with what is already there, while arrays and primitives
// replace it. Pass the result to a state setter's updater form.
const mergeAttributesPatch = (prev, patch) => {
  const next = {
    ...prev
  };
  Object.keys(patch).forEach(key => {
    const value = patch[key];
    const isPlainObject = typeof value === "object" && value !== null && !Array.isArray(value);
    next[key] = isPlainObject ? {
      ...(prev[key] || {}),
      ...value
    } : value;
  });
  return next;
};

/***/ }),

/***/ "./src/utilities/events.js":
/*!*********************************!*\
  !*** ./src/utilities/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   eventAdminPath: () => (/* binding */ eventAdminPath),
/* harmony export */   eventKey: () => (/* binding */ eventKey),
/* harmony export */   eventRoutePayload: () => (/* binding */ eventRoutePayload),
/* harmony export */   generateEventData: () => (/* binding */ generateEventData),
/* harmony export */   getEvent: () => (/* binding */ getEvent),
/* harmony export */   getFeaturedImage: () => (/* binding */ getFeaturedImage),
/* harmony export */   openEventPost: () => (/* binding */ openEventPost),
/* harmony export */   updateEvent: () => (/* binding */ updateEvent)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const getEvent = async (postId, occurrenceId = null) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/wp-json/servv-plugin/v1/event/${postId}`, {
    params: occurrenceId ? {
      occurrence_id: occurrenceId
    } : {},
    headers: headers()
  });
  return response.data;
};
const createEvent = async (location, data) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/events/${location}`, data, {
    headers: headers()
  });
  return response.data;
};
const generateEventData = async data => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/event/data/generate`, data, {
    headers: headers()
  });
  return response.data;
};
const updateEvent = async (postId, data, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${postId}`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].patch(url, data, {
    headers: headers()
  });
  return response.data;
};
const getFeaturedImage = async (postId, signal = null) => {
  const WP_API_BASE = `/wp-json/wp/v2/posts`;
  const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, {
    signal,
    credentials: "same-origin",
    headers: headers()
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
};

// Opens the public post an event is published as. The events endpoint only
// knows the post id, so the permalink has to come from WordPress itself.
const openEventPost = postId => {
  if (!postId) return;
  fetch(`/wp-json/wp/v2/posts/${postId}`).then(res => res.json()).then(post => {
    if (post?.link) open(post.link, "_blank");
  }).catch(e => console.log(e));
};

// One event can appear as its series and as a single occurrence, so neither id
// alone identifies a row.
const eventKey = event => `${event.id}${event.occurrence_id || ""}`;

// The shape Dashboard's handleOpenEvent expects. Kept in one place so every
// view — cards, rows, rail — navigates identically.
const eventRoutePayload = (event, {
  registrants = false
} = {}) => ({
  id: event.post_id,
  occurrence_id: event.occurrence_id,
  provider: event.provider || (String(event.type).toLowerCase() === "zoom" ? "zoom" : "offline"),
  ...(registrants ? {
    registrants_view: true
  } : {})
});
const eventAdminPath = (selected, fallbackProvider = "offline") => {
  const provider = selected.provider || selected.type || fallbackProvider;
  const pathType = String(provider).toLowerCase() === "zoom" ? "zoom" : "offline";
  const query = new URLSearchParams();
  if (selected.occurrence_id != null && selected.occurrence_id !== "") query.set("occurrence_id", selected.occurrence_id);
  return `/events/${pathType}/${selected.id}${selected.registrants_view ? "/registrants" : ""}${query.size ? `?${query}` : ""}`;
};

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

/***/ "./src/utilities/planLimits.js":
/*!*************************************!*\
  !*** ./src/utilities/planLimits.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLAN_LIMITS: () => (/* binding */ PLAN_LIMITS),
/* harmony export */   filterAllowance: () => (/* binding */ filterAllowance),
/* harmony export */   limitReached: () => (/* binding */ limitReached),
/* harmony export */   multiTicketsAllowed: () => (/* binding */ multiTicketsAllowed),
/* harmony export */   planLimit: () => (/* binding */ planLimit),
/* harmony export */   recurringAllowed: () => (/* binding */ recurringAllowed)
/* harmony export */ });
const PLAN_LIMITS = [["filters_limit", "Filters limit"], ["members_limit", "Members limit"], ["offline_events_limit", "In-person events limit"], ["offline_recurring_events_limit", "Recurring in-person events limit"], ["recurring_events_limit", "Recurring online events limit"], ["events_limit", "Online events limit"]];
const planLimit = (plan, key, fallback = null) => {
  const value = plan?.[key];
  if (value == null || value === "" || typeof value === "boolean") return fallback;
  const number = Number(value);
  return Number.isInteger(number) && number >= -1 ? number : fallback;
};
const limitReached = (count, limit) => limit != null && limit !== -1 && count >= limit;
const filterAllowance = (plan, filters = {}) => {
  const maxFiltersNumber = planLimit(plan, "filters_limit", 25);
  const membersLimit = planLimit(plan, "members_limit", Number(plan?.id) === 1 ? 0 : -1);
  const totalFilters = ["locations", "languages", "categories", "members"].reduce((count, type) => count + (Array.isArray(filters[type]) ? filters[type].length : 0), 0);
  const isLimitReached = limitReached(totalFilters, maxFiltersNumber);
  const isMembersLimitReached = limitReached(filters.members?.length || 0, membersLimit);
  const filterCategories = ["Locations", "Languages", "Categories", ...(membersLimit !== 0 ? ["Members"] : [])];
  return {
    maxFiltersNumber,
    membersLimit,
    totalFilters,
    isLimitReached,
    isMembersLimitReached,
    filterCategories
  };
};
const recurringAllowed = (plan, location) => {
  const limit = planLimit(plan, location === "zoom" ? "recurring_events_limit" : "offline_recurring_events_limit");
  if (limit != null) return limit !== 0;
  return !!plan?.features?.some(feature => ["Recurring", "Recurring Events"].includes(feature.title) && String(feature.value) === "true");
};
const multiTicketsAllowed = plan => plan?.multi_tickets == null ? Number(plan?.id) !== 1 : [true, "true", 1, "1"].includes(plan.multi_tickets);

/***/ }),

/***/ "./src/utilities/recurrence.js":
/*!*************************************!*\
  !*** ./src/utilities/recurrence.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECURRENCE_TYPES: () => (/* binding */ RECURRENCE_TYPES),
/* harmony export */   recurrenceForType: () => (/* binding */ recurrenceForType)
/* harmony export */ });
// Each recurrence type owns its own fields, and the API reads only those: a
// weekly_days left behind by a weekly pattern makes a monthly body ambiguous.
// Switching type therefore rebuilds the recurrence from the fields that type
// defines, the way the Shopify app's RecurringSettingsFormSection does.
// Weekdays are 1 Sunday through 7 Saturday.
const RECURRENCE_TYPES = [[1, "Daily", "Every day, or every few days"], [2, "Weekly", "On chosen days of the week"], [3, "Monthly", "On a date or a weekday each month"]];
const recurrenceForType = (recurrence, type, defaultWeeklyDay = 1) => {
  const next = {
    ...(recurrence || {}),
    type: Number(type)
  };
  if (!next.repeat_interval) next.repeat_interval = 1;
  if (next.type !== 2) delete next.weekly_days;
  if (next.type !== 3) {
    delete next.monthly_day;
    delete next.monthly_week;
    delete next.monthly_week_day;
  }
  // A weekly pattern with no day, or a monthly one with neither a date nor a
  // weekday, is nothing the API can schedule.
  if (next.type === 2 && !next.weekly_days?.length) next.weekly_days = [Number(defaultWeeklyDay) || 1];
  if (next.type === 3 && !next.monthly_day && !next.monthly_week_day) {
    next.monthly_week = Number(recurrence?.monthly_week) || 1;
    next.monthly_week_day = Number(recurrence?.monthly_week_day) || 1;
  }
  return next;
};

/***/ }),

/***/ "./src/utilities/registrants.js":
/*!**************************************!*\
  !*** ./src/utilities/registrants.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRegistrant: () => (/* binding */ addRegistrant),
/* harmony export */   deleteRegistrant: () => (/* binding */ deleteRegistrant),
/* harmony export */   fetchRegistrants: () => (/* binding */ fetchRegistrants),
/* harmony export */   fetchRegistrantsWithToken: () => (/* binding */ fetchRegistrantsWithToken),
/* harmony export */   resendAllNotifications: () => (/* binding */ resendAllNotifications),
/* harmony export */   resendRegistrantNotification: () => (/* binding */ resendRegistrantNotification)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _adminApiFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminApiFetch */ "./src/utilities/adminApiFetch.js");



/* ------------------ helpers ------------------ */

// Shared registrant shape. The paged and token-paged fetches used to map their
// own subsets of this; callers read only the fields they need.
const mapRegistrant = registrant => {
  if (!registrant) return null;
  return {
    id: registrant.id,
    firstName: registrant.first_name,
    lastName: registrant.last_name,
    email: registrant.email,
    status: registrant.status,
    joinUrl: registrant.join_url,
    createdAt: registrant.created_datetime
  };
};
const mapRegistrants = res => res.registrants?.map(mapRegistrant).filter(Boolean) || [];
const withOccurrence = (url, occurrenceId) => occurrenceId ? `${url}&occurrence_id=${encodeURIComponent(occurrenceId)}` : url;
const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return {
      "X-WP-Nonce": servvData.nonce
    };
  }
  return {};
};

/* ------------------ fetch registrants ------------------ */

const fetchRegistrants = async ({
  postID,
  page = 1,
  occurrenceId = null,
  throwOnError = false
}) => {
  const url = withOccurrence(`/servv-plugin/v1/event/${postID}/registrants?page_size=20&page=${page}`, occurrenceId);
  try {
    const res = await (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
      path: url
    });
    return {
      registrants: mapRegistrants(res),
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count,
        totalRecords: res.total_records
      }
    };
  } catch (e) {
    if (throwOnError) throw e;
    return {
      registrants: [],
      pagination: {
        pageNumber: 1,
        pageCount: 1
      }
    };
  }
};
const fetchRegistrantsWithToken = async ({
  postID,
  next_page_token = null,
  occurrenceId = null,
  pageSize = 20,
  throwOnError = false
}) => {
  let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=${pageSize}`;
  if (next_page_token) {
    url += `&next_page_token=${encodeURIComponent(next_page_token)}`;
  }
  url = withOccurrence(url, occurrenceId);
  try {
    var _res$total_records, _res$page_size;
    const res = await (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
      path: url
    });
    const registrants = mapRegistrants(res);
    return {
      registrants,
      pagination: {
        nextPageToken: res.next_page_token || null,
        totalRecords: (_res$total_records = res.total_records) !== null && _res$total_records !== void 0 ? _res$total_records : registrants.length,
        pageSize: (_res$page_size = res.page_size) !== null && _res$page_size !== void 0 ? _res$page_size : pageSize
      }
    };
  } catch (e) {
    if (throwOnError) throw e;
    console.error("fetchRegistrantsWithToken failed", e);
    return {
      registrants: [],
      pagination: {
        nextPageToken: null,
        totalRecords: 0,
        pageSize
      }
    };
  }
};

/* ------------------ delete registrant ------------------ */

const deleteRegistrant = async ({
  postID,
  registrantID,
  occurrenceId = null
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`;
  if (occurrenceId) {
    path += `?occurrence_id=${encodeURIComponent(occurrenceId)}`;
  }
  return (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
    path,
    method: "DELETE"
  });
};

/* ------------------ resend one ------------------ */

const resendRegistrantNotification = async ({
  postID,
  registrantID,
  occurrenceId = null
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
  if (occurrenceId) {
    path += `?occurrence_id=${encodeURIComponent(occurrenceId)}`;
  }
  return (0,_adminApiFetch__WEBPACK_IMPORTED_MODULE_1__["default"])({
    path,
    method: "POST"
  });
};

/* ------------------ resend all ------------------ */

const resendAllNotifications = async ({
  postID,
  occurrenceId = null
}) => {
  let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
  if (occurrenceId) {
    url += `?occurrence_id=${encodeURIComponent(occurrenceId)}`;
  }
  return (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url,
    method: "POST",
    headers: getNonceHeaders()
  });
};
const addRegistrant = async ({
  postID,
  occurrenceId = null,
  firstName,
  lastName,
  email
}) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`/wp-json/servv-plugin/v1/event/${postID}`, {
    registrants: [{
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim()
    }]
  }, {
    headers: getNonceHeaders(),
    params: occurrenceId ? {
      occurrence_id: occurrenceId
    } : {}
  });
  return response.data;
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

/***/ "./src/Components/Controls/NewButtonGroup.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Controls/NewButtonGroup.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"JYs_3UJOiQFZ5_Ezkeeo","wrapperFull":"UAo90UATGeQRmc30vP33","title":"UjbXHfOe0TBrHLwf0Knb","track":"mAjfcVBL7MyaMYdJ9cWA","segment":"t0D_ZPrlgfZLrhryiCAp","active":"Wb0ziMZTJjqXvYgnqtYh","inactive":"XoWoUSevPmu1zPubCh1_","trackFull":"TZTstZOXbFiFgIOfEQ8q","iconOnly":"DpB4oocu7lvFMLpQ5Qhs","compact":"px78WAZRdXjUlT8FfGQ6","icon":"P7ggfyTePFEQFoR84lEO","text":"c28p99_lcFX9oVKhjAST"});

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

/***/ "./src/Components/CreateEvent/UnifiedEventForm.module.scss":
/*!*****************************************************************!*\
  !*** ./src/Components/CreateEvent/UnifiedEventForm.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"timeControl":"G5MqN3QTDf0f1ZRP7n2c","root":"cuF89BwKIpGdzKThM6AU","header":"TP01_oU1_ToRX2QvbZgv","sections":"sleWB6ChmtSgnqg9lLsb","headingRow":"q59ZKFZI0ev6y_Q14lWc","actions":"_DzciE1nbrOwbp3SfFwb","occurrences":"_uA01EpZBXr_QEbag5Tw","occurrencesToggle":"br7GrpwgbEUkxGz_Y9Jt","occurrenceMenu":"TciIBgJ9ehsPdGPykGOI","occurrenceItem":"Whvsj7LdeFKOesoPFnRo","currentOccurrence":"Ce_BfoKKfLK8v_OAqyni","confirmOverlay":"dPNA0TxsqyZCXIp9ipxx","confirmDialog":"yjdqWgSyVz39YozGiMc3","confirmActions":"T1Qye25braypSF4MaGET","divider":"AOuZDwhPKBn9XbvsRS_d","fieldset":"QnQ_XIVqLVDaqpysIdW5","layout":"O4FNiakiDPiy7TPwkroc","card":"dDwEbnVy1pHADesI6KtL","cardHeader":"oNXP75IxKkXLBBBAlTwv","eyebrow":"u7X97eyKICFl2_UFQ3KE","asideEyebrow":"pczVkaxP3ZG7JDRTUM2r","body":"lG6yeAhE3CxgHJZ4X0s7","field":"MzxTqOE3jQGBmRsh99A1","fieldTitle":"pXW4XerjQy0b3dxOPxiw","filterHeading":"nsfdvZ3QYFxsa4ZXeZe7","formats":"SghLMok5_SHtiyAFbfMQ","choice":"y9Y6b3Ni8Q2HqJIt1yBP","selected":"soheQdEFDIsOVHVNmtCw","radio":"jzv8jZiWF7NBWLSgBC0k","formatIcon":"oAaVYIHlHFq0s0OlugpY","filters":"Mhs6VM9jJcuS8feQXogt","filterCard":"xEUvbyb9V3BYKd1xv9zh","filterValue":"rghRT3z2In_h6FA2mCCl","chips":"YTG9Yu2HeyBnRrKHaWYf","chip":"qZFvDT9XEYEX02vaLEbE","chipAdd":"qHceRAdyzoEk5VXo5rA5","schedule":"nwMs3lgMP6RehUI4k9nn","recurrence":"TaLkekVKQSxRdZHp_IrJ","recurrenceType":"MT08ajYbOodBFSqSYrFR","recurringControls":"E4rjJmWRomPycrKrbvdn","ticketRow":"UL1APrfzeWEUwZcj6qe9","ticketEditor":"OrLAk9z0kfiTlYkOrmNp","addTicket":"VMFWTk04GNTNfjFfXb7O","aside":"zO1O2hivf4A3vShPRhvE","visibility":"BchTe1XQSeR9fIYFt8hu","toggleRow":"ta3RznGWMYheqbARdUgP","toggle":"yx1SPhnlgptdz990EgBD","on":"LQJcUuxcOHk1YdH739dC","warning":"qDF0DpEg5rz7I8vERdwQ","draftNote":"KYZchE4xVEXYFuScCZkJ","details":"cNHEn1Sn1DvtqiJ1itLr","detailsBody":"k8d89AxvOe7YphF_CDzW","cover":"QuLBR5XH9444KLpaJZrx","upload":"Gydv5VUuUF7vjRvikufg","coverEmpty":"e8YpA2PJ7vo9P2TEHx3z","coverEmptyIcon":"V3dbOMdOaW93yPWKmoh2","uploadRow":"_HOjpq4lSItujlsMthhw","fileInput":"_NCKMsVti_ALE62MpFsA","uploadButton":"unrzdvUtmqx4rF3z2UWw","uploadBusy":"lPJDgGYQUEFPfBmHQKa8","uploadIcon":"TjQGXnyw2LNWb178p35N","uploadHint":"KsyYOBH9PljAPwDPIFfe","uploadError":"zxjBUQl7CbWMln37CMpn"});

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

/***/ "./src/Components/Pages/EventRegistrantsPage.module.scss":
/*!***************************************************************!*\
  !*** ./src/Components/Pages/EventRegistrantsPage.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"divider":"ZomF4BqatqqcUoAwhaJo","card":"rFYTfZKc8Z50Lcp5cpaz","toolbar":"VDZsXqit36qpVC9xMGRm","actions":"UbL0J6IP61ZnvYHkQEJQ","row":"RFZ7rydAiqlJ4aDESRvY","tableHeader":"qmQjhOQ2QTXaFyCEARrY","name":"njRSc3wEnAo3SYJRiXvV","email":"xTYq6igeHtUk7hcykxeP","pagination":"KuyfVDofb44itB16T4so","state":"mr9Azb2BOpUVBKiB0pUs","note":"gIayzBSxE0djO8rGFOTg","form":"o1Juglv7mk7reUMiaUK1","error":"a_1Zbg1qv8X2KC8BLI7t"});

/***/ }),

/***/ "./src/Components/Pages/Filters/FilterForm.module.scss":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/Filters/FilterForm.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"layout":"uwuR254aylSmBYNYnMYN","sections":"haInXcveXbCJcMk4ILmQ","card":"RZj3GyLsSpdkSytrH11H","cardHeader":"GTTJrMZweuT2YkiBo1b3","eyebrow":"S9rPtYRN1mgp1IWi2FTS","cardBody":"Rbh7Rug7wRj_AbfZhjra","fieldGrid":"fG0hA8a5o0sB4wCPM3Hw","field":"Ix0lZTD3Uz6SOHSlqQew","fullWidth":"unAJYKilCzDzC87aX1hs","required":"bTKTESDYvH5174FSTRAh","optional":"hS8BKtNFvE550PYvwR4j","hint":"S9uz1NIhVAuEu3mQo9qG","error":"A_QFYiL4ogkj_pcYgLAz","ordering":"UaWnAlElIr8HXN_6gPP9","priority":"kLI3oDce3GGf0WszqhdZ","hours":"OipoCl47a5CLwc_xTrcy","chips":"MsxEVxG8o02QuN2MuTQf","kindChip":"jDlSzQhIUPgVeq3L02a8","modeChip":"vhYeKF8DcJEIUp6SuY4J","preview":"OzQKCneELWCjyyElmYp4","previewHeader":"t_EEix4mDs1er8qo_VEo","existingFilters":"dNDZtq0HyLESSA3VcSFQ","currentFilter":"tTlGID8QtShlCSQP2nUu"});

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
//# sourceMappingURL=src_Components_CreateEvent_EventEditorRoute_jsx.js.map?ver=ed37763e313d2c13cb69