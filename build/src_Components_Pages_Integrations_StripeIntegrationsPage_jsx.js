"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_Integrations_StripeIntegrationsPage_jsx"],{

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



// The page shell from the design reference: a padded frame around a centred
// 1180px column whose children are spaced 24px apart.
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
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
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

/***/ "./src/Components/Pages/Integrations/IntegrationLayout.jsx":
/*!*****************************************************************!*\
  !*** ./src/Components/Pages/Integrations/IntegrationLayout.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntegrationAccount: () => (/* binding */ IntegrationAccount),
/* harmony export */   IntegrationSection: () => (/* binding */ IntegrationSection),
/* harmony export */   "default": () => (/* binding */ IntegrationLayout)
/* harmony export */ });
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntegrationLayout.module.scss */ "./src/Components/Pages/Integrations/IntegrationLayout.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function IntegrationSection({
  title,
  description,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].card,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
      className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cardHeader,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cardBody,
      children: children
    })]
  });
}
function IntegrationAccount({
  label,
  status = "Connected"
}) {
  return label ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].account,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar,
      "aria-hidden": "true",
      children: String(label).slice(0, 2).toUpperCase()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].eyebrow,
        children: "Account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        children: label
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: `${_IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].status} ${status === "Connected" ? _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].connected : ""}`,
      children: status
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
    className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].hint,
    children: "Please connect your account."
  });
}
function IntegrationLayout({
  title,
  description,
  loading = false,
  actions,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    flush: true,
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_0__["default"], {
        breadcrumbs: [{
          label: "Integrations",
          to: "/integrations"
        }, {
          label: title
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].header,
        title: title,
        description: description,
        actions: actions
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].divider
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].sections,
        children: children
      })]
    })
  });
}

/***/ }),

/***/ "./src/Components/Pages/Integrations/StripeIntegrationsPage.jsx":
/*!**********************************************************************!*\
  !*** ./src/Components/Pages/Integrations/StripeIntegrationsPage.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IntegrationLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntegrationLayout */ "./src/Components/Pages/Integrations/IntegrationLayout.jsx");
/* harmony import */ var _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntegrationLayout.module.scss */ "./src/Components/Pages/Integrations/IntegrationLayout.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/stripe */ "./src/utilities/stripe.js");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _utilities_currencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/currencies */ "./src/utilities/currencies.js");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










const StripeIntegrationsPage = props => {
  const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isAccountFetched, setAccountFetched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [connectedAccounts, setConnectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [connectedAccountsFetched, setConnectedAccountsFetched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const fetchAccount = async () => {
    const account = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.getStripeAccount)(servvData.nonce);
    // Always assigned: a disconnected account reads as null, and keeping the
    // previous one would hide the Connect button.
    setAccount(account?.id ? account : null);
    setAccountFetched(true);
    const settings = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.getStripeSettings)(servvData.nonce);
    if (settings) {
      setSelectedCurrency(settings.currency);
    }
  };
  // Stripe sends the merchant back to wordpress_return_url, so it has to be an
  // admin screen that still exists: a stale target lands on WordPress's
  // "not allowed to access this page" wall instead of the integration.
  const openStripeConnect = authUrl => {
    if (!authUrl) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Stripe did not return a connection link. Please try again.");
      return;
    }
    const returnUrl = `${servvData.adminPages?.integrations || window.location.href.split("#")[0]}#/integrations/stripe`;
    open(`${servvData.shopify_app}/payments/stripe/connect` + `?wordpress_url=${encodeURIComponent(authUrl)}` + `&wordpress_return_url=${encodeURIComponent(returnUrl)}`, "_top");
  };
  const handleConnectExistingAccount = async account_id => {
    const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.getStripeConnectURL)(servvData.nonce, account_id);
    setLoading(false);
    openStripeConnect(url?.auth_url);
  };
  const connectNewAccount = async () => {
    const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.getStripeConnectURL)(servvData.nonce);
    openStripeConnect(url?.auth_url);
  };
  const renderExistingAccounts = () => connectedAccounts.map(existing => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
    type: "button",
    className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].existingAccount,
    onClick: () => handleConnectExistingAccount(existing.account_id),
    children: [existing.name, existing.email, existing.account_id].filter(Boolean).join(" · ")
  }, existing.account_id));
  const handleGetConnectURL = async () => {
    setLoading(true);
    const existingAccounts = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.getDisconnectedStripeAccounts)(servvData.nonce);
    setLoading(false);
    if (existingAccounts?.length > 0) {
      setConnectedAccounts(existingAccounts);
      setConnectedAccountsFetched(true);
      return;
    }
    setLoading(true);
    const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.getStripeConnectURL)(servvData.nonce);
    setLoading(false);
    openStripeConnect(url?.auth_url);
  };
  const handleRemoveAccount = async () => {
    setLoading(true);
    const res = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.disconnectStripeAccount)(servvData.nonce);
    setLoading(false);
    if (res !== 200) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Unable to disconnect Stripe. Please try again.");
      return;
    }
    setAccount(null);
    // The account just disconnected joins the reconnectable ones, so the next
    // Connect press has to ask for that list again.
    setConnectedAccounts([]);
    setConnectedAccountsFetched(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchAccount();
  }, []);
  const handleSelectChange = currency => {
    const newCurrency = currency.split(" - ")[0];
    setSelectedCurrency(newCurrency);
  };
  const currencySelect = () => {
    let currencies = [];
    if (_utilities_currencies__WEBPACK_IMPORTED_MODULE_5__.currenciesList) {
      currencies = _utilities_currencies__WEBPACK_IMPORTED_MODULE_5__.currenciesList.map(currency => {
        let sequence = currency.symbol;
        return currency.abbreviation + " - " + he__WEBPACK_IMPORTED_MODULE_7___default().decode(sequence);
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: currencies.map(currency => ({
        value: currency,
        label: currency
      })),
      value: currencies.filter(currency => currency.indexOf(selectedCurrency) >= 0)[0],
      onChange: handleSelectChange
    });
  };
  const handleCurrencySave = async () => {
    if (selectedCurrency) {
      setLoading(true);
      await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_3__.updateStripeSettings)(servvData.nonce, selectedCurrency);
      setLoading(false);
    }
  };
  const incomplete = account && !account.charges_enabled;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_IntegrationLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "Stripe",
    glyph: "S",
    description: "Accept paid registrations and manage payout settings.",
    connected: Boolean(account),
    status: !isAccountFetched ? "Loading…" : incomplete ? "Connection incomplete" : undefined,
    accountLabel: account?.email,
    loading: loading,
    actions: isAccountFetched && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [!account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: connectedAccountsFetched && connectedAccounts.length > 0 ? "Connect new account" : "Connect",
        onAction: connectedAccountsFetched && connectedAccounts.length > 0 ? connectNewAccount : handleGetConnectURL
      }), incomplete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Resume integration",
        onAction: () => handleConnectExistingAccount(account.account_id)
      }), account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Disconnect",
        type: "danger-secondary",
        onAction: handleRemoveAccount
      })]
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_IntegrationLayout__WEBPACK_IMPORTED_MODULE_0__.IntegrationSection, {
      title: "Account",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_IntegrationLayout__WEBPACK_IMPORTED_MODULE_0__.IntegrationAccount, {
        label: account?.email,
        status: incomplete ? "Connection incomplete" : "Connected"
      })
    }), connectedAccountsFetched && connectedAccounts.length > 0 && !account && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_IntegrationLayout__WEBPACK_IMPORTED_MODULE_0__.IntegrationSection, {
      title: "Connect existing account",
      children: renderExistingAccounts()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_IntegrationLayout__WEBPACK_IMPORTED_MODULE_0__.IntegrationSection, {
      title: "Currency",
      description: "The currency used for paid registrations.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _IntegrationLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: currencySelect()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          text: "Save",
          disabled: !selectedCurrency || loading,
          onAction: handleCurrencySave
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeIntegrationsPage);

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

/***/ "./src/utilities/currencies.js":
/*!*************************************!*\
  !*** ./src/utilities/currencies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currenciesList: () => (/* binding */ currenciesList)
/* harmony export */ });
const currenciesList = [{
  currency: "Albania Lek",
  abbreviation: "ALL",
  symbol: "&#76;&#101;&#107;"
}, {
  currency: "Afghanistan Afghani",
  abbreviation: "AFN",
  symbol: "&#1547;"
}, {
  currency: "Argentina Peso",
  abbreviation: "ARS",
  symbol: "&#36;"
}, {
  currency: "Aruba Guilder",
  abbreviation: "AWG",
  symbol: "&#402;"
}, {
  currency: "Australia Dollar",
  abbreviation: "AUD",
  symbol: "&#36;"
}, {
  currency: "Azerbaijan New Manat",
  abbreviation: "AZN",
  symbol: "&#1084;&#1072;&#1085;"
}, {
  currency: "Bahamas Dollar",
  abbreviation: "BSD",
  symbol: "&#36;"
}, {
  currency: "Barbados Dollar",
  abbreviation: "BBD",
  symbol: "&#36;"
}, {
  currency: "Belarus Ruble",
  abbreviation: "BYR",
  symbol: "&#112;&#46;"
}, {
  currency: "Belize Dollar",
  abbreviation: "BZD",
  symbol: "&#66;&#90;&#36;"
}, {
  currency: "Bermuda Dollar",
  abbreviation: "BMD",
  symbol: "&#36;"
}, {
  currency: "Bolivia Boliviano",
  abbreviation: "BOB",
  symbol: "&#36;&#98;"
}, {
  currency: "Bosnia and Herzegovina Convertible Marka",
  abbreviation: "BAM",
  symbol: "&#75;&#77;"
}, {
  currency: "Botswana Pula",
  abbreviation: "BWP",
  symbol: "&#80;"
}, {
  currency: "Bulgaria Lev",
  abbreviation: "BGN",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Brazil Real",
  abbreviation: "BRL",
  symbol: "&#82;&#36;"
}, {
  currency: "Brunei Darussalam Dollar",
  abbreviation: "BND",
  symbol: "&#36;"
}, {
  currency: "Cambodia Riel",
  abbreviation: "KHR",
  symbol: "&#6107;"
}, {
  currency: "Canada Dollar",
  abbreviation: "CAD",
  symbol: "&#36;"
}, {
  currency: "Cayman Islands Dollar",
  abbreviation: "KYD",
  symbol: "&#36;"
}, {
  currency: "Chile Peso",
  abbreviation: "CLP",
  symbol: "&#36;"
}, {
  currency: "China Yuan Renminbi",
  abbreviation: "CNY",
  symbol: "&#165;"
}, {
  currency: "Colombia Peso",
  abbreviation: "COP",
  symbol: "&#36;"
}, {
  currency: "Costa Rica Colon",
  abbreviation: "CRC",
  symbol: "&#8353;"
}, {
  currency: "Croatia Kuna",
  abbreviation: "HRK",
  symbol: "&#107;&#110;"
}, {
  currency: "Cuba Peso",
  abbreviation: "CUP",
  symbol: "&#8369;"
}, {
  currency: "Czech Republic Koruna",
  abbreviation: "CZK",
  symbol: "&#75;&#269;"
}, {
  currency: "Denmark Krone",
  abbreviation: "DKK",
  symbol: "&#107;&#114;"
}, {
  currency: "Dominican Republic Peso",
  abbreviation: "DOP",
  symbol: "&#82;&#68;&#36;"
}, {
  currency: "East Caribbean Dollar",
  abbreviation: "XCD",
  symbol: "&#36;"
}, {
  currency: "Egypt Pound",
  abbreviation: "EGP",
  symbol: "&#163;"
}, {
  currency: "El Salvador Colon",
  abbreviation: "SVC",
  symbol: "&#36;"
}, {
  currency: "Estonia Kroon",
  abbreviation: "EEK",
  symbol: "&#107;&#114;"
}, {
  currency: "Euro Member Countries",
  abbreviation: "EUR",
  symbol: "&#8364;"
}, {
  currency: "Falkland Islands (Malvinas) Pound",
  abbreviation: "FKP",
  symbol: "&#163;"
}, {
  currency: "Fiji Dollar",
  abbreviation: "FJD",
  symbol: "&#36;"
}, {
  currency: "Ghana Cedis",
  abbreviation: "GHC",
  symbol: "&#162;"
}, {
  currency: "Gibraltar Pound",
  abbreviation: "GIP",
  symbol: "&#163;"
}, {
  currency: "Guatemala Quetzal",
  abbreviation: "GTQ",
  symbol: "&#81;"
}, {
  currency: "Guernsey Pound",
  abbreviation: "GGP",
  symbol: "&#163;"
}, {
  currency: "Guyana Dollar",
  abbreviation: "GYD",
  symbol: "&#36;"
}, {
  currency: "Honduras Lempira",
  abbreviation: "HNL",
  symbol: "&#76;"
}, {
  currency: "Hong Kong Dollar",
  abbreviation: "HKD",
  symbol: "&#36;"
}, {
  currency: "Hungary Forint",
  abbreviation: "HUF",
  symbol: "&#70;&#116;"
}, {
  currency: "Iceland Krona",
  abbreviation: "ISK",
  symbol: "&#107;&#114;"
}, {
  currency: "India Rupee",
  abbreviation: "INR",
  symbol: "₹"
}, {
  currency: "Indonesia Rupiah",
  abbreviation: "IDR",
  symbol: "&#82;&#112;"
}, {
  currency: "Iran Rial",
  abbreviation: "IRR",
  symbol: "&#65020;"
}, {
  currency: "Isle of Man Pound",
  abbreviation: "IMP",
  symbol: "&#163;"
}, {
  currency: "Israel Shekel",
  abbreviation: "ILS",
  symbol: "&#8362;"
}, {
  currency: "Jamaica Dollar",
  abbreviation: "JMD",
  symbol: "&#74;&#36;"
}, {
  currency: "Japan Yen",
  abbreviation: "JPY",
  symbol: "&#165;"
}, {
  currency: "Jersey Pound",
  abbreviation: "JEP",
  symbol: "&#163;"
}, {
  currency: "Kazakhstan Tenge",
  abbreviation: "KZT",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Korea (North) Won",
  abbreviation: "KPW",
  symbol: "&#8361;"
}, {
  currency: "Korea (South) Won",
  abbreviation: "KRW",
  symbol: "&#8361;"
}, {
  currency: "Kyrgyzstan Som",
  abbreviation: "KGS",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Laos Kip",
  abbreviation: "LAK",
  symbol: "&#8365;"
}, {
  currency: "Latvia Lat",
  abbreviation: "LVL",
  symbol: "&#76;&#115;"
}, {
  currency: "Lebanon Pound",
  abbreviation: "LBP",
  symbol: "&#163;"
}, {
  currency: "Liberia Dollar",
  abbreviation: "LRD",
  symbol: "&#36;"
}, {
  currency: "Lithuania Litas",
  abbreviation: "LTL",
  symbol: "&#76;&#116;"
}, {
  currency: "Macedonia Denar",
  abbreviation: "MKD",
  symbol: "&#1076;&#1077;&#1085;"
}, {
  currency: "Malaysia Ringgit",
  abbreviation: "MYR",
  symbol: "&#82;&#77;"
}, {
  currency: "Mauritius Rupee",
  abbreviation: "MUR",
  symbol: "&#8360;"
}, {
  currency: "Mexico Peso",
  abbreviation: "MXN",
  symbol: "&#36;"
}, {
  currency: "Mongolia Tughrik",
  abbreviation: "MNT",
  symbol: "&#8366;"
}, {
  currency: "Mozambique Metical",
  abbreviation: "MZN",
  symbol: "&#77;&#84;"
}, {
  currency: "Namibia Dollar",
  abbreviation: "NAD",
  symbol: "&#36;"
}, {
  currency: "Nepal Rupee",
  abbreviation: "NPR",
  symbol: "&#8360;"
}, {
  currency: "Netherlands Antilles Guilder",
  abbreviation: "ANG",
  symbol: "&#402;"
}, {
  currency: "New Zealand Dollar",
  abbreviation: "NZD",
  symbol: "&#36;"
}, {
  currency: "Nicaragua Cordoba",
  abbreviation: "NIO",
  symbol: "&#67;&#36;"
}, {
  currency: "Nigeria Naira",
  abbreviation: "NGN",
  symbol: "&#8358;"
}, {
  currency: "Korea (North) Won",
  abbreviation: "KPW",
  symbol: "&#8361;"
}, {
  currency: "Norway Krone",
  abbreviation: "NOK",
  symbol: "&#107;&#114;"
}, {
  currency: "Oman Rial",
  abbreviation: "OMR",
  symbol: "&#65020;"
}, {
  currency: "Pakistan Rupee",
  abbreviation: "PKR",
  symbol: "&#8360;"
}, {
  currency: "Panama Balboa",
  abbreviation: "PAB",
  symbol: "&#66;&#47;&#46;"
}, {
  currency: "Paraguay Guarani",
  abbreviation: "PYG",
  symbol: "&#71;&#115;"
}, {
  currency: "Peru Nuevo Sol",
  abbreviation: "PEN",
  symbol: "&#83;&#47;&#46;"
}, {
  currency: "Philippines Peso",
  abbreviation: "PHP",
  symbol: "&#8369;"
}, {
  currency: "Poland Zloty",
  abbreviation: "PLN",
  symbol: "&#122;&#322;"
}, {
  currency: "Qatar Riyal",
  abbreviation: "QAR",
  symbol: "&#65020;"
}, {
  currency: "Romania New Leu",
  abbreviation: "RON",
  symbol: "&#108;&#101;&#105;"
}, {
  currency: "Russia Ruble",
  abbreviation: "RUB",
  symbol: "&#1088;&#1091;&#1073;"
}, {
  currency: "Saint Helena Pound",
  abbreviation: "SHP",
  symbol: "&#163;"
}, {
  currency: "Saudi Arabia Riyal",
  abbreviation: "SAR",
  symbol: "&#65020;"
}, {
  currency: "Serbia Dinar",
  abbreviation: "RSD",
  symbol: "&#1044;&#1080;&#1085;&#46;"
}, {
  currency: "Seychelles Rupee",
  abbreviation: "SCR",
  symbol: "&#8360;"
}, {
  currency: "Singapore Dollar",
  abbreviation: "SGD",
  symbol: "&#36;"
}, {
  currency: "Solomon Islands Dollar",
  abbreviation: "SBD",
  symbol: "&#36;"
}, {
  currency: "Somalia Shilling",
  abbreviation: "SOS",
  symbol: "&#83;"
}, {
  currency: "South Africa Rand",
  abbreviation: "ZAR",
  symbol: "&#82;"
}, {
  currency: "Korea (South) Won",
  abbreviation: "KRW",
  symbol: "&#8361;"
}, {
  currency: "Sri Lanka Rupee",
  abbreviation: "LKR",
  symbol: "&#8360;"
}, {
  currency: "Sweden Krona",
  abbreviation: "SEK",
  symbol: "&#107;&#114;"
}, {
  currency: "Switzerland Franc",
  abbreviation: "CHF",
  symbol: "&#67;&#72;&#70;"
}, {
  currency: "Suriname Dollar",
  abbreviation: "SRD",
  symbol: "&#36;"
}, {
  currency: "Syria Pound",
  abbreviation: "SYP",
  symbol: "&#163;"
}, {
  currency: "Taiwan New Dollar",
  abbreviation: "TWD",
  symbol: "&#78;&#84;&#36;"
}, {
  currency: "Thailand Baht",
  abbreviation: "THB",
  symbol: "&#3647;"
}, {
  currency: "Trinidad and Tobago Dollar",
  abbreviation: "TTD",
  symbol: "&#84;&#84;&#36;"
}, {
  currency: "Turkey Lira",
  abbreviation: "TRY",
  symbol: "₺"
}, {
  currency: "Turkey Lira",
  abbreviation: "TRL",
  symbol: "&#8356;"
}, {
  currency: "Tuvalu Dollar",
  abbreviation: "TVD",
  symbol: "&#36;"
}, {
  currency: "Ukraine Hryvna",
  abbreviation: "UAH",
  symbol: "&#8372;"
}, {
  currency: "United Kingdom Pound",
  abbreviation: "GBP",
  symbol: "&#163;"
}, {
  currency: "United States Dollar",
  abbreviation: "USD",
  symbol: "&#36;"
}, {
  currency: "Uruguay Peso",
  abbreviation: "UYU",
  symbol: "&#36;&#85;"
}, {
  currency: "Uzbekistan Som",
  abbreviation: "UZS",
  symbol: "&#1083;&#1074;"
}, {
  currency: "Venezuela Bolivar",
  abbreviation: "VEF",
  symbol: "&#66;&#115;"
}, {
  currency: "Viet Nam Dong",
  abbreviation: "VND",
  symbol: "&#8363;"
}, {
  currency: "Yemen Rial",
  abbreviation: "YER",
  symbol: "&#65020;"
}, {
  currency: "Zimbabwe Dollar",
  abbreviation: "ZWD",
  symbol: "&#90;&#36;"
}];

// export const getCurrencySymbol = (currencyCode) => {
//   const name = currencyCode.toLowerCase().trim();

//   let currencySymbol = name;

//   currenciesList.map((country) => {
//     const countryArray = country.currency.split(" ");
//     const currencyName = countryArray.pop().toLowerCase().trim();
//     const currencyAbbr = country.abbreviation.toLowerCase();
//     const countryName = countryArray.join(" ").toLowerCase().trim();

//     if (
//       name === currencyName ||
//       name === countryName ||
//       name === currencyAbbr
//     ) {
//       currencySymbol = country.symbol;
//     }
//   });
//   return currencySymbol;
// };

/***/ }),

/***/ "./src/utilities/stripe.js":
/*!*********************************!*\
  !*** ./src/utilities/stripe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmStripe: () => (/* binding */ confirmStripe),
/* harmony export */   disconnectStripeAccount: () => (/* binding */ disconnectStripeAccount),
/* harmony export */   getDisconnectedStripeAccounts: () => (/* binding */ getDisconnectedStripeAccounts),
/* harmony export */   getStripeAccount: () => (/* binding */ getStripeAccount),
/* harmony export */   getStripeConnectURL: () => (/* binding */ getStripeConnectURL),
/* harmony export */   getStripeSettings: () => (/* binding */ getStripeSettings),
/* harmony export */   updateStripeSettings: () => (/* binding */ updateStripeSettings)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const getStripeSettings = async authToken => {
  try {
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/settings",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe settings:", error);
    return null;
  }
};
const getStripeAccount = async authToken => {
  try {
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/account",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe account:", error);
    return null;
  }
};
const getStripeConnectURL = async (authToken, accountId = null) => {
  try {
    let url = "/wp-json/servv-plugin/v1/stripe/url";
    if (accountId) {
      url += `?account_id=${accountId}`;
    }
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: url,
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe connect URL:", error);
    return null;
  }
};
const confirmStripe = async authToken => {
  try {
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/confirm",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe connect URL:", error);
    return null;
  }
};
const disconnectStripeAccount = async authToken => {
  try {
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/stripe/account",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.status;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};
const getDisconnectedStripeAccounts = async authToken => {
  try {
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/account/disconnected",
      headers: {
        "X-WP-Nonce": authToken
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};
const updateStripeSettings = async (authToken, currency) => {
  try {
    const response = await (0,_adminApi__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: "/wp-json/servv-plugin/v1/stripe/settings",
      headers: {
        "X-WP-Nonce": authToken
      },
      data: {
        currency: currency
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};

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

/***/ "./src/Components/Pages/Integrations/IntegrationLayout.module.scss":
/*!*************************************************************************!*\
  !*** ./src/Components/Pages/Integrations/IntegrationLayout.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"qb79uKhie25HkfUpo3DC","status":"ntsU_UguRp6Mn_NoXIwy","connected":"zZPodN9LlqOvUyCwV2JR","divider":"SrWlvIprhCqDY9FFCVuK","sections":"txJTFKMQqbqNpjPBJWcQ","card":"kE6cXIAAp5LVNptyBHro","cardHeader":"jHxAjmVpzXBmjaEwfwYN","cardBody":"QL3gSSIkdefj776VMokN","account":"FG6OQOcbeJLmDZkKbo0i","avatar":"ADri5CQc7MkNuP3NKAYp","eyebrow":"D8nXYCb8WScQ_62ZiIoj","hint":"zuiO_eMKFMqBMRtZ2QgN","row":"guiFHrf6aQ_OHU7WdEzb","field":"jcVQvgNAOZHcmpmrbuhB","fieldGrid":"dZAn8YRpvUJoU3UXZs8o","error":"G8EGf1wmTkUljyoWyLdJ","actions":"HJljyvSx_7f48wi9un25","existingAccount":"f8TWulrz4e1IjTZysYZw"});

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

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_Integrations_StripeIntegrationsPage_jsx.js.map?ver=ff49cff84d5c5d3b16dc