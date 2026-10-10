"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_Filters_FiltersListPage_jsx"],{

/***/ "./src/Components/Containers/BulkBar.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Containers/BulkBar.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectAllRow: () => (/* binding */ SelectAllRow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BulkBar.module.scss */ "./src/Components/Containers/BulkBar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// The select-all row and the bulk bar from events-views.html. The actions are
// the caller's — this only owns the count, the clear and the chrome.

const SelectAllRow = ({
  total = 0,
  selectedCount = 0,
  view = "rows",
  label,
  onToggleAll = () => {}
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: [_BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].selectAll, view === "rail" ? _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].insetRail : _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].insetRows].join(" "),
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: label || t("Select all"),
    checked: total > 0 && selectedCount === total,
    indeterminate: selectedCount > 0 && selectedCount < total,
    disabled: total === 0,
    onChange: onToggleAll
  })
});
const BulkBar = ({
  selectedCount = 0,
  noun = "event",
  nounPlural,
  onClear = () => {},
  children
}) => {
  if (selectedCount < 1) return null;
  const plural = nounPlural || `${noun}s`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bar,
    role: "status",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].count,
      children: selectedCount === 1 ? `1 ${t(noun)} ${t("selected")}` : `${selectedCount} ${t(plural)} ${t("selected")}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: _BulkBar_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spacer
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "ghost",
      size: "sm",
      text: t("Clear"),
      onAction: onClear
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulkBar);

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

/***/ "./src/Components/Pages/Filters/CreateFilterMenu.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Filters/CreateFilterMenu.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FILTER_TYPES: () => (/* binding */ FILTER_TYPES),
/* harmony export */   "default": () => (/* binding */ CreateFilterMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/TagIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LanguageIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js");
/* harmony import */ var _Containers_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/Dropdown */ "./src/Components/Containers/Dropdown.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/DisplayOptions.module.scss */ "./src/Components/Controls/DisplayOptions.module.scss");
/* harmony import */ var _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FiltersPage.module.scss */ "./src/Components/Pages/Filters/FiltersPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const FILTER_TYPES = {
  Locations: {
    label: "Location",
    note: "Where the event takes place",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  Categories: {
    label: "Category",
    note: "Topics and types of events",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  Members: {
    label: "Member",
    note: "Hosts, instructors and team members",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  Languages: {
    label: "Language",
    note: "Language of the event",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"]
  }
};
function CreateFilterMenu({
  types,
  disabled
}) {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const root = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ref: root,
    onKeyDown: event => {
      if (event.key === "Escape") {
        setOpen(false);
        root.current?.querySelector("button")?.focus();
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].root,
      dropdownClassName: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].createMenuPanel,
      surface: false,
      align: "right",
      status: open,
      onClose: () => setOpen(false),
      activator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Create filter",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
        disabled: disabled,
        onAction: () => setOpen(value => !value)
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].pop,
        "aria-label": "Create filter",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
          className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title,
          children: "Filter type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].note,
          children: "Choose an attribute for your events."
        }), types.map(type => {
          const {
            label,
            note,
            Icon
          } = FILTER_TYPES[type];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            type: "button",
            className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].opt,
            onClick: () => {
              setOpen(false);
              navigate(`/filters/new/${type}`);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Icon, {
              className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].menuIcon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label,
                children: label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: _Controls_DisplayOptions_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].hint,
                children: note
              })]
            })]
          }, type);
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/Components/Pages/Filters/FiltersEmptyState.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Filters/FiltersEmptyState.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersEmptyState)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js");
/* harmony import */ var _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FiltersPage.module.scss */ "./src/Components/Pages/Filters/FiltersPage.module.scss");
/* harmony import */ var _CreateFilterMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateFilterMenu */ "./src/Components/Pages/Filters/CreateFilterMenu.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function FiltersEmptyState({
  type,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].empty,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].emptyIcon,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: type ? `No ${type.toLowerCase()} yet` : "No filters yet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: type ? `Create your first ${_CreateFilterMenu__WEBPACK_IMPORTED_MODULE_1__.FILTER_TYPES[type].label.toLowerCase()} to help attendees find the right events.` : "Add locations, categories and languages to help attendees find the right events."
    }), children]
  });
}

/***/ }),

/***/ "./src/Components/Pages/Filters/FiltersList.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Pages/Filters/FiltersList.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _Containers_BulkBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Containers/BulkBar */ "./src/Components/Containers/BulkBar.jsx");
/* harmony import */ var _CreateFilterMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateFilterMenu */ "./src/Components/Pages/Filters/CreateFilterMenu.jsx");
/* harmony import */ var _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FiltersPage.module.scss */ "./src/Components/Pages/Filters/FiltersPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const FIELDS = {
  Locations: [{
    key: "details",
    label: "Details"
  }, {
    key: "operational_hours",
    label: "Operational hours"
  }],
  Languages: [],
  Categories: [{
    key: "details",
    label: "Description"
  }],
  Members: [{
    key: "email",
    label: "Email"
  }, {
    key: "phone",
    label: "Phone"
  }, {
    key: "description",
    label: "Description"
  }]
};
function FiltersList({
  title,
  filters,
  selected,
  onSelect,
  onDelete,
  onSelectAll,
  onClearSelection,
  loading
}) {
  const [confirm, setConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    Icon
  } = _CreateFilterMenu__WEBPACK_IMPORTED_MODULE_5__.FILTER_TYPES[title];
  const fields = FIELDS[title] || [];
  const grid = {
    gridTemplateColumns: `18px minmax(150px, 2fr) ${fields.map(() => "minmax(100px, 1fr)").join(" ")} 70px 76px`
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [confirm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "sm",
      title: confirm.length === 1 ? "Delete filter" : "Delete selected filters",
      description: "Deleted filters will no longer be available for events.",
      onClose: () => !loading && setConfirm(null),
      footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: "Cancel",
          type: "secondary",
          disabled: loading,
          onAction: () => setConfirm(null)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: loading ? "Deleting…" : "Delete",
          type: "danger",
          disabled: loading,
          onAction: async () => {
            await onDelete(title, confirm);
            setConfirm(null);
          }
        })]
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        children: ["Are you sure you want to delete", " ", confirm.length === 1 ? "this filter" : `these ${confirm.length} filters`, "?"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].toolbar,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: "Select all",
        ariaLabel: "Select all filters",
        checked: filters.length > 0 && selected.length === filters.length,
        indeterminate: selected.length > 0 && selected.length < filters.length,
        disabled: loading,
        onChange: onSelectAll
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].secondary,
        children: `${filters.length} ${filters.length === 1 ? "filter" : "filters"}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BulkBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selectedCount: selected.length,
      noun: "filter",
      onClear: onClearSelection,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "Delete",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
        type: "danger-secondary",
        size: "sm",
        disabled: loading,
        onAction: () => setConfirm([...selected])
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].list,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].valueHead,
        style: grid,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: "Name"
        }), fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: field.label
        }, field.key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: "Order"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {})]
      }), filters.map(filter => {
        var _filter$priority;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${_FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].row} ${_FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].valueRow} ${selected.includes(filter.id) ? _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picked : ""}`,
          style: grid,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].pick,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
              ariaLabel: `Select ${filter.name}`,
              checked: selected.includes(filter.id),
              disabled: loading,
              onChange: () => onSelect(filter.id)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].identity,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].mark,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Icon, {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
              className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].name,
              to: `/filters/new/${title}?id=${filter.id}`,
              children: filter.name
            })]
          }), fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].detail,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].mobileLabel,
              children: field.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              title: filter[field.key] || undefined,
              children: filter[field.key] || "—"
            })]
          }, field.key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].order,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].mobileLabel,
              children: "Order"
            }), (_filter$priority = filter.priority) !== null && _filter$priority !== void 0 ? _filter$priority : "—"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].rowActions,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
              className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].action,
              to: `/filters/new/${title}?id=${filter.id}`,
              "aria-label": `Edit ${filter.name}`,
              title: "Edit filter",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              type: "button",
              className: `${_FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].action} ${_FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].danger}`,
              "aria-label": `Delete ${filter.name}`,
              title: "Delete filter",
              disabled: loading,
              onClick: () => setConfirm([filter.id]),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {})
            })]
          })]
        }, filter.id);
      })]
    })]
  });
}

/***/ }),

/***/ "./src/Components/Pages/Filters/FiltersListPage.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Pages/Filters/FiltersListPage.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersListPage)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _FiltersList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FiltersList */ "./src/Components/Pages/Filters/FiltersList.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _FiltersEmptyState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FiltersEmptyState */ "./src/Components/Pages/Filters/FiltersEmptyState.jsx");
/* harmony import */ var _CreateFilterMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateFilterMenu */ "./src/Components/Pages/Filters/CreateFilterMenu.jsx");
/* harmony import */ var _useFilterLimits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useFilterLimits */ "./src/Components/Pages/Filters/useFilterLimits.js");
/* harmony import */ var _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FiltersPage.module.scss */ "./src/Components/Pages/Filters/FiltersPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

















const EMPTY = [];
function FiltersListPage() {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
  const {
    type: routeType
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)();
  const type = Object.keys(_CreateFilterMenu__WEBPACK_IMPORTED_MODULE_11__.FILTER_TYPES).find(key => key.toLowerCase() === routeType?.toLowerCase());
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.settings);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.filtersList);
  const getFilters = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.syncFiltersFromServer);
  const storeLoading = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.loading);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    isLimitReached,
    filterCategories
  } = (0,_useFilterLimits__WEBPACK_IMPORTED_MODULE_12__.useFilterLimits)(settings, filtersList);
  const filters = filtersList[type?.toLowerCase()] || EMPTY;
  const canCreate = Boolean(settings && filterCategories.includes(type) && !isLimitReached);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelected(previous => previous.filter(id => filters.some(filter => filter.id === id)));
  }, [filters, type]);
  const handleSelect = id => setSelected(prev => prev.includes(id) ? prev.filter(value => value !== id) : [...prev, id]);
  const handleSelectAll = () => setSelected(selected.length === filters.length ? [] : filters.map(filter => filter.id));
  const handleDelete = async (_, ids) => {
    setLoading(true);
    try {
      const results = await Promise.allSettled(ids.map(id => _utilities_adminApi__WEBPACK_IMPORTED_MODULE_4__["default"].delete(`/wp-json/servv-plugin/v1/filters/${type.toLowerCase()}/${id}`, {
        headers: {
          "X-WP-Nonce": window.servvData.nonce
        }
      })));
      const deleted = ids.filter((id, index) => results[index].status === "fulfilled");
      setSelected(prev => prev.filter(id => !deleted.includes(id)));
      await getFilters();
      if (deleted.length) react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${deleted.length} ${deleted.length === 1 ? "filter" : "filters"} deleted.`);
      if (deleted.length < ids.length) react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Some filters could not be deleted. Please try again.");
    } catch {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Unable to refresh filters. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const create = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Create filter",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__["default"], {}),
    onAction: () => navigate(`/filters/new/${type}`),
    disabled: !canCreate || loading
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flush: true,
    loading: loading || storeLoading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
        breadcrumbs: [{
          label: "Filters",
          to: "/filters"
        }, {
          label: type || "Unknown filter type"
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: type || "Filters",
        description: `Manage your ${type?.toLowerCase() || "filters"} — view, edit, and delete entries.`,
        actions: type && create
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: _FiltersPage_module_scss__WEBPACK_IMPORTED_MODULE_13__["default"].divider
      }), !type ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("p", {
        children: ["Unknown filter type. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
          to: "/filters",
          children: "Return to Filters"
        })]
      }) : !filters.length && !storeLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_FiltersEmptyState__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: type,
        children: create
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_FiltersList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: type,
        loading: loading || storeLoading,
        filters: filters,
        selected: selected,
        onSelect: handleSelect,
        onSelectAll: handleSelectAll,
        onClearSelection: () => setSelected([]),
        onDelete: handleDelete
      })]
    })
  });
}

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

const BASE_CATEGORIES = ["Locations", "Languages", "Categories"];
const DEFAULT_FILTERS_LIMIT = 25;

// Which filter kinds the current plan exposes, and whether the store has hit
// its filter allowance.
//
// All three values are derived rather than held in state: the pages used to
// compute them in an effect that mutated the category array in place, so
// "Members" could go missing or appear several times depending on how many
// times the effect had run.
const useFilterLimits = (settings, filtersList) => {
  const plan = settings?.current_plan;
  const maxFiltersNumber = plan?.filters_limit || DEFAULT_FILTERS_LIMIT;
  const totalFilters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.values(filtersList || {}).reduce((total, arr) => total + (arr?.length || 0), 0), [filtersList]);

  // Member filters are gated behind a paid plan (plan id 1 is the free tier).
  const filterCategories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => !plan || plan.id !== 1 ? [...BASE_CATEGORIES, "Members"] : BASE_CATEGORIES, [plan]);
  return {
    maxFiltersNumber,
    isLimitReached: totalFilters >= maxFiltersNumber,
    filterCategories
  };
};

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

/***/ "./src/Components/Containers/BulkBar.module.scss":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/BulkBar.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"bar":"hSOmwKoK3j9LpC4zegTO","bulkSlideUp":"nLugcsMhaMgnxdZdNyQP","count":"cFNhdYdN4vSMrwAzvzxg","spacer":"bMguCiUk04seVwuAYKch","selectAll":"zpnccbY2H2DR1YORfn2k","insetRows":"IhnGQdFgJHjdgXZKde94","insetRail":"OuFAjert3JBScQrl2ydT"});

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

/***/ "./src/Components/Controls/DisplayOptions.module.scss":
/*!************************************************************!*\
  !*** ./src/Components/Controls/DisplayOptions.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"lPGroU3OVaxIG4XQBEWX","pop":"JnafPR5HtTIoCbFYeekp","group":"YtEmvYvJAMyiIatP5ges","title":"EuQAHxDBOTE2wWxpdq9R","note":"DCyXNKx34VbyupoHs1wd","checks":"_f7wUWVYivOieYM3PK50","opt":"iUFbBqUzTHAeKSMW4mYh","optActive":"D4C_3dwPWffDAkcCtwIi","mark":"RhIpaAPRJDNOuz3yxnZl","label":"dZXeKYOIEzlsnTdD87c_","hint":"rlatAKPgLNpeU9LZxw98"});

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

/***/ "./src/Components/Pages/Filters/FiltersPage.module.scss":
/*!**************************************************************!*\
  !*** ./src/Components/Pages/Filters/FiltersPage.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"typeGrid":"prH6BnMZW1VmUWAGwlDa","typeCard":"H5wp2kCGs7wJrZL7K7oZ","cardHeader":"lwewMhwc4MAuvcMCrLXc","typeHeader":"QSad7tExCPZuRgi9_Jzt","eyebrow":"_q9BCzqExBlBB2l5NLri","cardBody":"KQLF_ZrRfaznhtN9nqCN","formCard":"rNRyMX8HJsamLybVmeA6","formBody":"Rqi4BVlIGDvKrIjD6N9N","typeFooter":"dYjfLScBjoWXmhn9MzGw","divider":"uGckAvjpOoJJ20PNcahE","list":"exvjh9a1_LrNYJa6nnjq","overviewHead":"EddYLQGN1Gbe0yRomu84","overviewRow":"qJo0VeQxm8JTJ61VDEdc","valueHead":"LLCT3f0RAfh0h3LFmvTO","row":"ei9y9xGDQu9PEGOEwe_k","picked":"vE2Hfm1BU0CDoQA6iKgt","identity":"PJw6cCQvjN5I2dXe2nzA","mark":"OEoNhLOXIQeyOYknyCAL","name":"jSK8qZHfbBuKqjhyiSDQ","secondary":"Q3rV9fdohkhfTJQ4D_2d","values":"ZySxfoRwaMteqNvkIpZD","count":"v3aN4iXUqQtFxOaID5ib","toolbar":"r6gC3mdJsxstUWU4RFaK","pick":"kdPB3wCdwbNsnMDYot0C","detail":"UT3OJDbVkHQ5a5G4ffIA","order":"OOhzWB8sE2ocpZMmPh84","mobileLabel":"Br1wGGNKgYUA7NvsVd9W","rowActions":"xEyfhP31HysBVD_tk3_O","action":"_q4aznNEkWLoEwnVkOus","danger":"H8X663PDcuM_BFGn_ggd","empty":"DI8xEmOuW6XFnrSNYVM3","emptyIcon":"FfPDwRylt7asen9jl6Wg","menuIcon":"w0rf0JRvwo42q9wRqDtM","limit":"d4i4zLQ11bhYQwkAvam6","valueRow":"O81MqCq6RbGjuOVUtBI7","createMenuPanel":"k8AUpSHm4M5X_tenqcaz"});

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

/***/ "./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function FunnelIcon({
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
    d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FunnelIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/LanguageIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/LanguageIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function LanguageIcon({
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
    d: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LanguageIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function MapPinIcon({
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
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MapPinIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PencilSquareIcon({
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
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilSquareIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PlusIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PlusIcon({
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
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/TagIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/TagIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function TagIcon({
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
    d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 6h.008v.008H6V6Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TagIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function TrashIcon({
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
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function UserGroupIcon({
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
    d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserGroupIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_Filters_FiltersListPage_jsx.js.map?ver=2826c139dfbe8f520c2b