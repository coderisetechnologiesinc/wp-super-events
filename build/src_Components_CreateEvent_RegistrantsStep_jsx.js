"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_CreateEvent_RegistrantsStep_jsx"],{

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

/***/ "./src/utilities/registrants.js":
/*!**************************************!*\
  !*** ./src/utilities/registrants.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRegistrant: () => (/* binding */ deleteRegistrant),
/* harmony export */   fetchRegistrants: () => (/* binding */ fetchRegistrants),
/* harmony export */   fetchRegistrantsWithToken: () => (/* binding */ fetchRegistrantsWithToken),
/* harmony export */   resendAllNotifications: () => (/* binding */ resendAllNotifications),
/* harmony export */   resendRegistrantNotification: () => (/* binding */ resendRegistrantNotification)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);



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
const withOccurrence = (url, occurrenceId) => occurrenceId ? `${url}&occurrence_id=${occurrenceId}` : url;
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
  occurrenceId = null
}) => {
  const url = withOccurrence(`/servv-plugin/v1/event/${postID}/registrants?page_size=20&page=${page}`, occurrenceId);
  try {
    const res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: url
    });
    return {
      registrants: mapRegistrants(res),
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count
      }
    };
  } catch (e) {
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
  pageSize = 20
}) => {
  let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=${pageSize}`;
  if (next_page_token) {
    url += `&next_page_token=${encodeURIComponent(next_page_token)}`;
  }
  url = withOccurrence(url, occurrenceId);
  try {
    var _res$total_records, _res$page_size;
    const res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
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
    path += `?occurrence_id=${occurrenceId}`;
  }
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
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
    path += `?occurrence_id=${occurrenceId}`;
  }
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
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
    url += `?occurrence_id=${occurrenceId}`;
  }
  return (0,axios__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url,
    method: "POST",
    headers: getNonceHeaders()
  });
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
//# sourceMappingURL=src_Components_CreateEvent_RegistrantsStep_jsx.js.map?ver=9b6c05a9c2adeb617ef2