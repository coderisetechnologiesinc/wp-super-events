"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_SettingsPage_jsx"],{

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

/***/ "./src/Components/Containers/ServiceCard.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Containers/ServiceCard.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceCard.module.scss */ "./src/Components/Containers/ServiceCard.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// One card of the Settings and Integrations landings, from the design
// reference: a mark and a status on top, the copy, a groove, then what the
// card is for and the way into it.
//
// `tone` follows the reference's STATUS table: on = connected/configured,
// info = informational, warn = needs attention, neutral = everything else.

const TONES = {
  on: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].statusOn, _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dotOn],
  info: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].statusInfo, _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dotInfo],
  warn: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].statusWarn, _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dotWarn]
};
const ServiceCard = ({
  glyph,
  tile = "tint",
  // tint | raised
  title,
  description,
  status,
  tone = "neutral",
  meta,
  actionLabel,
  actionType = "secondary",
  onAction,
  disabled = false,
  accountLabel,
  onDisconnect,
  busy = false
}) => {
  const [statusTone, dotTone] = TONES[tone] || [];
  const clickable = Boolean(onAction) && !disabled && !onDisconnect;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].card, clickable ? _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].clickable : "", disabled ? _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dimmed : ""].filter(Boolean).join(" "),
    role: clickable ? "button" : undefined,
    tabIndex: clickable ? 0 : undefined,
    onClick: clickable ? onAction : undefined,
    onKeyDown: clickable ? e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onAction();
      }
    } : undefined,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].top,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tile, tile === "raised" ? _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tileRaised : _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].tileTint].join(" "),
        "aria-hidden": "true",
        children: glyph
      }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        className: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].status, statusTone].filter(Boolean).join(" "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: [_ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dot, dotTone].filter(Boolean).join(" ")
        }), status]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title,
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].description,
        children: description
      })]
    }), accountLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].account,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].avatar,
        "aria-hidden": "true",
        children: accountLabel.slice(0, 2).toUpperCase()
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].accountTitle,
          children: "Account"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].accountLabel,
          title: accountLabel,
          children: accountLabel
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].groove
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].foot,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].meta,
        children: meta
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: _ServiceCard_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].actions,
        children: [onDisconnect && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "danger-secondary",
          size: "sm",
          text: "Disconnect",
          disabled: busy,
          onAction: e => {
            e?.stopPropagation?.();
            onDisconnect();
          }
        }), actionLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: actionType,
          size: "sm",
          text: actionLabel,
          disabled: disabled || busy
          // The card already handles the click; this keeps it from firing
          // twice and still gives the action its own focus stop.
          ,
          onAction: e => {
            e?.stopPropagation?.();
            onAction?.();
          }
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceCard);

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
/* harmony import */ var _NewTimePeriodControl_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTimePeriodControl.module.scss */ "./src/Components/Controls/NewTimePeriodControl.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const NewTimePeriodControl = ({
  time,
  disabled = false,
  onChange = () => {}
}) => {
  const period = time ? moment__WEBPACK_IMPORTED_MODULE_1___default()(time).format("a") : "am";
  const handleToggle = () => {
    onChange(period === "am" ? "pm" : "am");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    type: "button",
    className: `${_NewTimePeriodControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].period} ${period === "pm" ? _NewTimePeriodControl_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].night : ""}`,
    "aria-label": `Time period: ${period.toUpperCase()}. Switch to ${period === "am" ? "PM" : "AM"}`,
    onClick: handleToggle,
    disabled: disabled,
    children: period
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTimePeriodControl);

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

/***/ "./src/Components/Pages/Integrations/N8NSettings.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Integrations/N8NSettings.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const METHOD_OPTIONS = ["POST", "GET", "PUT", "PATCH", "DELETE"];

// The three n8n workflows, each with a trigger toggle and a method/url/secret
// trio. Option keys are prefix + suffix throughout, matching what
// inc/ajax/shop/shop.php reads and writes.
const WORKFLOWS = [{
  key: "event_created",
  triggerTitle: "Event Created Trigger",
  triggerDescription: "Enable this to trigger the workflow whenever a new event is created.",
  settingsTitle: "Event Created Wrokflow Settings",
  settingsDescription: "Configure how n8n should handle new event creation. Define the HTTP method, the endpoint URL and the secret used to verify requests."
}, {
  key: "new_booking",
  triggerTitle: "New Booking Trigger",
  triggerDescription: "Enable this to trigger the workflow whenever a new booking is made.",
  settingsTitle: "New Booking Workflow Settings",
  settingsDescription: "Configure how n8n should handle new bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests."
}, {
  key: "canceled_booking",
  triggerTitle: "Canceled Booking Trigger",
  triggerDescription: "Enable this to trigger the workflow whenever a booking is canceled.",
  settingsTitle: "Canceled Booking Workflow Settings",
  settingsDescription: "Configure how n8n should handle canceled bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests."
}];
const N8NSettings = ({
  n8nSettingsData = {},
  settingsUpdate = () => {}
}) => {
  const responsiveInput = "w-full min-w-0";
  const handleValueChange = (key, val) => {
    let currValues = n8nSettingsData;
    if (!isNaN(Number.parseInt(val))) {
      currValues[key] = Number.parseInt(val) === 1 ? false : true;
    } else if (typeof val === "boolean") {
      currValues[key] = !currValues[key];
    } else {
      currValues[key] = val;
    }
    settingsUpdate(currValues);
  };

  // The toggle arrives either as a boolean or as the "1"/"0" the option stores.
  const isTriggerActive = value => typeof value === "boolean" ? value : Number.parseInt(value) === 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex flex-col w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col w-full gap-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "flex flex-col gap-4",
          children: WORKFLOWS.map(({
            key,
            triggerTitle,
            triggerDescription
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: `${responsiveInput} items-center`,
            title: triggerTitle,
            description: triggerDescription,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
              checked: isTriggerActive(n8nSettingsData[`${key}_active`]),
              onChange: () => handleValueChange(`${key}_active`, n8nSettingsData[`${key}_active`])
            })
          }, key))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
          gap: 4,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "font-semibold border-b pb-1 w-full self-end",
            children: "Triggers settings"
          }), WORKFLOWS.map(({
            key,
            settingsTitle,
            settingsDescription
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: responsiveInput,
            title: settingsTitle,
            description: settingsDescription,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_5__["default"], {
              gap: 2,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex flex-row w-full items-end gap-2 mb-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "flex-none",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    options: METHOD_OPTIONS.map(option => ({
                      value: option,
                      label: option
                    })),
                    value: n8nSettingsData[`${key}_method`] || null,
                    onChange: newVal => handleValueChange(`${key}_method`, newVal)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    width: "100%",
                    align: "left",
                    value: n8nSettingsData[`${key}_url`],
                    onChange: newVal => handleValueChange(`${key}_url`, newVal),
                    placeholder: "Endpoint URL"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "flex-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  width: "100%",
                  align: "left",
                  value: n8nSettingsData[`${key}_secret`],
                  onChange: newVal => handleValueChange(`${key}_secret`, newVal),
                  placeholder: "Secret"
                })
              })]
            })
          }, key))]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (N8NSettings);

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

/***/ "./src/Components/Pages/Settings/CheckoutSettings.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Settings/CheckoutSettings.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);

// components/Settings/CheckoutSettings.jsx




const CheckoutSettings = ({
  settings,
  handleFreeCheckoutChange,
  handleSkipCaptchaChange,
  handleMarketingConsentChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 0,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Enable Fast Checkout for Free Events",
      description: "Activate fast checkout to speed up the booking process for free services",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Enable Fast Checkout",
          checked: settings?.settings?.free_events_skip_checkout || 0,
          onChange: handleFreeCheckoutChange
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Skip Captcha on Fast Checkout",
      description: "Activate to bypass captcha verification during fast checkout for free services.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Skip Captcha",
          checked: settings?.settings?.free_events_skip_captcha || 0,
          onChange: handleSkipCaptchaChange
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Marketing Consent Checkbox",
      description: "Turn on this option to show a checkbox at free checkout, so customers can sign up for marketing emails and newsletters",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        cardsLayout: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Marketing Consent",
          checked: settings?.settings?.free_checkout_marketing_checkbox || 0,
          onChange: handleMarketingConsentChange
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/GeneralSettings.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Settings/GeneralSettings.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Controls/NewButtonGroup */ "./src/Components/Controls/NewButtonGroup.jsx");
/* harmony import */ var _Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Controls/NewTimeInputControl */ "./src/Components/Controls/NewTimeInputControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const GeneralSettings = ({
  settings,
  timezones,
  timeOptions,
  currencyOptions,
  durationOptions,
  eventTypes,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  stripeConnected,
  zoomAccount,
  handleTimezoneChange,
  handleTimeFormatChange,
  handleHideTimezoneChange,
  handleCurrencyChange,
  handleDefaultDurationChange,
  handleDefaultStartTimeChange,
  getDefaultStartTime,
  getDefaultEndTime,
  handleDefaultPriceChange,
  handleDefaultQuantityChange,
  handleDefaultTypeChange,
  handleDefaultEndTimeChange,
  getDurationOptions,
  formatDuration
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].panel,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].group,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        children: "Locale"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        children: "Used for display, emails, and exports."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].rows,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Time zone",
        description: "Set a default time zone.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].compact,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "",
            options: timezones.map(t => ({
              value: t.name,
              label: t.name
            })),
            value: settings?.settings?.admin_dashboard?.default_timezone && timezones.findIndex(t => t.id === settings?.settings?.admin_dashboard?.default_timezone) >= 0 ? timezones[timezones.findIndex(t => t.id === settings?.settings?.admin_dashboard?.default_timezone)].name : null,
            onChange: handleTimezoneChange
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Time format",
        description: "Set a default time format.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 4,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].compact,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "",
            options: timeOptions.map(option => ({
              value: option,
              label: option
            })),
            value: settings?.settings?.time_format_24_hours ? "24 hours" : "12 hours",
            onChange: handleTimeFormatChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            label: "Hide timezone abbreviation in email, widget and dashboard.",
            checked: settings?.settings?.hide_time_zone,
            onChange: handleHideTimezoneChange
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Currency format",
        description: "Set a default currency.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].compact,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "",
            options: currencyOptions.map(option => ({
              value: option,
              label: option
            })),
            value: settings?.settings?.widget_style_settings?.currency_format === "sign" ? "Currency sign: $ / 元" : "Alphabets: USD / CAD / CNY",
            onChange: handleCurrencyChange
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].group,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        children: "Event defaults"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        children: "Pre-filled on the create-event form."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].rows,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Duration",
        description: "Set a default event duration.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].compact,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "",
            options: getDurationOptions().map(option => ({
              value: option,
              label: option
            })),
            value: settings?.settings?.admin_dashboard?.default_duration ? Number.isInteger(settings.settings.admin_dashboard.default_duration) && settings.settings.admin_dashboard.default_duration <= 12 ? durationOptions()[settings.settings.admin_dashboard.default_duration - 1] : formatDuration(settings.settings.admin_dashboard.default_duration) : "1 hour",
            onChange: val => handleDefaultDurationChange(val)
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Start / end time",
        description: "Set a default start and end time.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].times,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              label: "Start time",
              time: getDefaultStartTime(),
              onChange: val => handleDefaultStartTimeChange(val),
              timeFormat: settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewTimeInputControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
              label: "End time",
              time: getDefaultEndTime(),
              onChange: val => handleDefaultEndTimeChange(val),
              timeFormat: settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Ticket price",
        description: "Set a default ticket price.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].number,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            width: "100%",
            value: settings && settings.settings && settings.settings.admin_dashboard ? settings.settings.admin_dashboard.default_price : 0.0,
            type: "number",
            align: "left",
            minValue: 0
            // disabled={isBillingPlanRestriction || !stripeConnected}
            ,
            onChange: newVal => handleDefaultPriceChange(newVal)
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Ticket quantity",
        description: `Set a default ticket quantity. The maximum number of tickets for your plan is ${settings?.free_registrants_limit || 15}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].number,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
            width: "100%",
            value: settings && settings.settings && settings.settings.admin_dashboard ? settings.settings.admin_dashboard.default_quantity : 0.0,
            type: "number",
            align: "left",
            minValue: 0,
            disabled: isBillingPlanRestriction ? 15 : null,
            onChange: newVal => handleDefaultQuantityChange(newVal)
          })
        })
      }), zoomAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "settings",
        title: "Location",
        description: "Set a default event location.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].compact,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Controls_NewButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "",
            buttons: eventTypes.map(type => type.label),
            active: settings && settings.settings && settings.settings.admin_dashboard && settings.settings.admin_dashboard.default_event_type ? eventTypes[eventTypes.map(type => type.value).indexOf(settings.settings.admin_dashboard.default_event_type)].label : "offline",
            disabled: isBillingPlanRestriction || !zoomAccount,
            onChange: newVal => handleDefaultTypeChange(newVal)
          })
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/RemindersSettings.jsx":
/*!*************************************************************!*\
  !*** ./src/Components/Pages/Settings/RemindersSettings.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const RemindersSettings = ({
  settings,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  handleEmailRemindersStateChange,
  handleFirstReminderStateChange,
  handleFirstReminderHoursChange,
  handleSecondReminderStateChange,
  handleSecondReminderHoursChange,
  handleFinishedReminderStateChange,
  handleNewAdditionalEmailsChange,
  handleAdditionalRemindersHoursChange,
  handleStaffMemberEmailChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 0,
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].rows,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Email notifications",
      description: "Enable email notifications",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 2,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Enable email notifications",
          checked: settings?.settings?.disable_emails === false,
          onChange: handleEmailRemindersStateChange,
          disabled: isBillingPlanRestriction
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "First reminder",
      description: "Enable first reminder and specify time to first reminder",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 4,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "First reminder",
          checked: settings?.settings?.first_reminder,
          onChange: handleFirstReminderStateChange,
          disabled: isBillingPlanRestriction
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          width: "100%",
          value: settings ? settings.first_reminder_hours : 0,
          type: "number",
          align: "left",
          disabled: isBillingPlanRestriction,
          onChange: newVal => handleFirstReminderHoursChange(newVal)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Second reminder",
      description: "Enable second reminder and specify time to second reminder",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 4,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Second reminder",
          checked: settings?.settings?.second_reminder,
          onChange: handleSecondReminderStateChange,
          disabled: isBillingPlanRestriction
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          width: "100%",
          value: settings ? settings.second_reminder_hours : 0,
          type: "number",
          align: "left",
          disabled: isBillingPlanRestriction,
          onChange: newVal => handleSecondReminderHoursChange(newVal)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Finished reminder",
      description: "Send notification after the event has ended",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 4,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Finished reminder",
          disabled: isBillingPlanRestriction,
          checked: settings?.settings?.finished_reminder || 0,
          onChange: handleFinishedReminderStateChange
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Additional Email Notification Settings",
      description: "Set up extra email alerts and reminders for your events. You can choose to skip staff notifications or add reminder emails at specific times before the event",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 8,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "section-description",
              children: "Additional reminder emails list (comma-separated)"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
              width: "100%",
              value: settings ? settings.additional_reminder_emails : "",
              disabled: isBillingPlanRestriction,
              type: "text",
              align: "left",
              onChange: newVal => handleNewAdditionalEmailsChange(newVal)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "input-container-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "section-description",
              children: "Additional reminder hours"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
              width: "100%",
              value: settings ? settings.members_reminder_hours : 0,
              type: "number",
              align: "left",
              disabled: isBillingPlanRestriction,
              onChange: newVal => handleAdditionalRemindersHoursChange(newVal)
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Skip Staff Email Notification",
            disabled: isBillingPlanRestriction,
            checked: settings?.settings?.skip_members_in_calendar_files || 0,
            onChange: handleStaffMemberEmailChange
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemindersSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/SettingsSection.jsx":
/*!***********************************************************!*\
  !*** ./src/Components/Pages/Settings/SettingsSection.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_ServiceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/ServiceCard */ "./src/Components/Containers/ServiceCard.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
// components/Settings/SettingsSection.jsx







const SettingsSection = ({
  icon: Icon,
  title = "General Settings",
  description = "Configure your general settings",
  editDescription,
  statusText = "Settings configured",
  status = "available",
  // "available" | "unavailable"
  children,
  onSave,
  onCancel,
  onView,
  // callback for View button
  direct = false,
  // if true, shows View button instead of Edit settings
  showActions = true,
  sectionId,
  activeSection,
  setActiveSection
}) => {
  const isEditing = activeSection === sectionId;
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("card");
  const handleSave = () => {
    if (onSave) onSave();
  };
  const handleCancel = () => {
    if (onCancel) onCancel();
    setMode("closing");
    setTimeout(() => {
      setMode("card");
    }, 250);
    setTimeout(() => {
      setActiveSection(null);
    }, 248);
  };
  if (mode === "card" && !isEditing) {
    // CARD VIEW — the Settings landing card from the design reference.
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_ServiceCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      glyph: Icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Icon, {}) : null,
      title: title,
      description: description,
      status: status === "available" ? t("Configured") : t("Not configured"),
      tone: status === "available" ? "on" : "neutral",
      meta: statusText,
      actionLabel: direct && onView ? t("View") : t("Configure"),
      onAction: () => {
        if (direct && onView) {
          onView();
          return;
        }
        setMode("editing");
        setActiveSection(sectionId);
      }
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
        breadcrumbs: [{
          label: t("Settings"),
          action: handleCancel
        }, {
          label: title
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: title,
        description: editDescription || description,
        actions: showActions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: t("Cancel"),
            type: "secondary",
            onAction: handleCancel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: t("Save changes"),
            type: "primary",
            onAction: handleSave
          })]
        }) : null,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].divider
        })
      })]
    }), sectionId === "general" ? children : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].panel,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].group,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: description
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: sectionId === "billing" ? _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].billing : undefined,
        children: children
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsSection);

/***/ }),

/***/ "./src/Components/Pages/Settings/TranslationsSection.jsx":
/*!***************************************************************!*\
  !*** ./src/Components/Pages/Settings/TranslationsSection.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);

// components/Settings/TranslationsSettings.jsx




const TranslationsSection = ({
  responsiveBlockStack,
  responsiveInput,
  getLangsSelectOptions,
  getDefaultWidgetLanguageName,
  handleDefaultLanguageChange,
  langForEdit,
  handleSelectLanguageforEdit,
  renderTranslations
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 0,
    cardsLayout: true,
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].rows,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Default language for widgets",
      description: "Translate text in widgets to any language",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Default language",
        options: getLangsSelectOptions().map(lang => ({
          value: lang.label,
          label: lang.label
        })),
        onChange: handleDefaultLanguageChange,
        value: getDefaultWidgetLanguageName()
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Language for translate",
      description: "Before choosing the default language, select one from the list. Then, edit the widget fields and save the changes",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Language",
        options: getLangsSelectOptions().map(lang => ({
          value: lang.label,
          label: lang.label
        })),
        onChange: handleSelectLanguageforEdit,
        value: getLangsSelectOptions().map(lang => lang.label).find(label => label.startsWith(langForEdit))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Global Widgets Translations",
      className: responsiveBlockStack,
      children: renderTranslations()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Events Widget Translations",
      className: responsiveBlockStack,
      children: renderTranslations("mainWidget")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Filters Translations",
      className: responsiveBlockStack,
      children: renderTranslations("customFilters")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Registration Translations",
      className: responsiveBlockStack,
      children: renderTranslations("onProductWidget")
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationsSection);

/***/ }),

/***/ "./src/Components/Pages/Settings/WidgetSettings.jsx":
/*!**********************************************************!*\
  !*** ./src/Components/Pages/Settings/WidgetSettings.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./src/Components/Pages/Settings/SettingsForm.module.scss");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/AnnotatedSection */ "./src/Components/Containers/AnnotatedSection.jsx");
/* harmony import */ var _Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Controls/NewSelectControl */ "./src/Components/Controls/NewSelectControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

// components/Settings/WidgetSettings.jsx







const WidgetSettings = ({
  settings,
  responsiveBlockStack,
  responsiveInlineStack,
  responsiveInput,
  availableViewMods,
  selectedView,
  availablePageSizes,
  selectedPageSize,
  handleViewModeChange,
  handleChangeFluidGrid,
  handleDescriptionLengthChange,
  handlePageSizeChange,
  renderAvailableFilters,
  handleAdditionalPropertyChange
}) => {
  var _settings$settings$wi, _settings$settings$wi2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 0,
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].rows,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "settings",
      title: "Display mode options",
      description: "These settings let you choose how your widget appears on the page. Each mode offers a unique experience, tailored to your needs.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: "",
          options: availableViewMods.map(option => ({
            value: option,
            label: option
          })),
          value: selectedView,
          onChange: handleViewModeChange
        }), settings?.settings?.widget_style_settings?.ew_events_list_view === "grid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Fluid grid",
          checked: settings?.settings?.widget_style_settings?.ew_events_grid_fluid_mode || false,
          onChange: handleChangeFluidGrid
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "settings",
      title: "Item settings",
      description: "Configure the display limits and default page sizes for various items.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
          gap: 4,
          cardsLayout: true,
          align: "left",
          className: responsiveInlineStack,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 2,
            cardsLayout: true,
            className: responsiveBlockStack,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "font-semibold",
              children: "Grid item description display limit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
                width: "100%",
                value: (_settings$settings$wi = settings?.settings?.widget_style_settings?.ew_card_description_display_words_limit) !== null && _settings$settings$wi !== void 0 ? _settings$settings$wi : "",
                type: "number",
                align: "left",
                onChange: newVal => handleDescriptionLengthChange("ew_card_description_display_words_limit", newVal)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-sm text-gray-500",
                children: "words"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 2,
            cardsLayout: true,
            className: responsiveBlockStack,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "font-semibold",
              children: "List item description display limit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
                width: "100%",
                value: (_settings$settings$wi2 = settings?.settings?.widget_style_settings?.ew_list_item_description_display_words_limit) !== null && _settings$settings$wi2 !== void 0 ? _settings$settings$wi2 : "",
                type: "number",
                align: "left",
                onChange: newVal => handleDescriptionLengthChange("ew_list_item_description_display_words_limit", newVal)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "text-sm text-gray-500",
                children: "words"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 1,
          cardsLayout: true,
          className: responsiveBlockStack,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "font-semibold",
            children: "Default page size"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            label: "",
            options: availablePageSizes.map(option => ({
              value: option,
              label: option
            })),
            value: selectedPageSize,
            onChange: handlePageSizeChange
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "settings",
      title: "Filter settings",
      description: "Select the filters to be displayed on the event widget.",
      className: responsiveBlockStack,
      children: settings?.settings?.widget_style_settings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 8,
        className: responsiveBlockStack,
        children: renderAvailableFilters()
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "settings",
      title: "Additional widget display settings",
      description: "Select which parts of the events widget users can see. Also, adjust the visibility of different components",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 8,
        cardsLayout: true,
        className: responsiveBlockStack,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "font-semibold border-b pb-1",
          children: "Widget elements"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Show language selector",
          checked: settings?.settings?.widget_style_settings?.ew_show_language_selector || false,
          onChange: () => handleAdditionalPropertyChange("ew_show_language_selector")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Display calendar permanently",
          checked: settings?.settings?.widget_style_settings?.permanently_open_calendar || true,
          onChange: () => handleAdditionalPropertyChange("permanently_open_calendar")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Show events counter",
          checked: settings?.settings?.widget_style_settings?.ew_events_counter || false,
          onChange: () => handleAdditionalPropertyChange("ew_events_counter")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "View mode switch",
          checked: !settings?.settings?.widget_style_settings?.ew_hide_view_mode_switch || false,
          onChange: () => handleAdditionalPropertyChange("ew_hide_view_mode_switch")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "font-semibold border-b pb-1",
          children: "Item elements"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Show event images",
          checked: settings?.settings?.widget_style_settings?.show_event_images || false,
          onChange: () => handleAdditionalPropertyChange("show_event_images")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Show images as square",
          checked: settings?.settings?.widget_style_settings?.ew_image_aspect || false,
          onChange: () => handleAdditionalPropertyChange("ew_image_aspect")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Show separator badges",
          checked: settings?.settings?.widget_style_settings?.show_events_list_separator_badge || false,
          onChange: () => handleAdditionalPropertyChange("show_events_list_separator_badge")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Share button",
          checked: settings?.settings?.widget_style_settings?.ew_show_share_button || false,
          onChange: () => handleAdditionalPropertyChange("ew_show_share_button")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Event type badge",
          checked: settings?.settings?.widget_style_settings?.ew_show_event_type_badge || false,
          onChange: () => handleAdditionalPropertyChange("ew_show_event_type_badge")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetSettings);

/***/ }),

/***/ "./src/Components/Pages/Settings/WorkflowSettings.jsx":
/*!************************************************************!*\
  !*** ./src/Components/Pages/Settings/WorkflowSettings.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Integrations_N8NSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Integrations/N8NSettings */ "./src/Components/Pages/Integrations/N8NSettings.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// components/Settings/WorkflowSettings.jsx




const WorkflowSettings = ({
  responsiveBlockStack,
  responsiveInlineStack,
  n8nCurentSettings,
  updateN8NSettings
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_0__["default"], {
    gap: 8,
    className: responsiveBlockStack,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
      gap: 4,
      cardsLayout: true,
      className: responsiveInlineStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Integrations_N8NSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
        n8nSettingsData: n8nCurentSettings,
        settingsUpdate: updateN8NSettings
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkflowSettings);

/***/ }),

/***/ "./src/Components/Pages/SettingsPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/SettingsPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.startcase */ "./node_modules/lodash.startcase/index.js");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_startcase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.capitalize */ "./node_modules/lodash.capitalize/index.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/BellIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Square3Stack3DIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LanguageIcon.js");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SettingsPage.module.scss */ "./src/Components/Pages/SettingsPage.module.scss");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var _utilities_translations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/translations */ "./src/utilities/translations.js");
/* harmony import */ var _utilities_languages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/languages */ "./src/utilities/languages.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Settings/SettingsSection */ "./src/Components/Pages/Settings/SettingsSection.jsx");
/* harmony import */ var _Settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Settings/GeneralSettings */ "./src/Components/Pages/Settings/GeneralSettings.jsx");
/* harmony import */ var _Settings_RemindersSettings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Settings/RemindersSettings */ "./src/Components/Pages/Settings/RemindersSettings.jsx");
/* harmony import */ var _Settings_CheckoutSettings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Settings/CheckoutSettings */ "./src/Components/Pages/Settings/CheckoutSettings.jsx");
/* harmony import */ var _Settings_WidgetSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Settings/WidgetSettings */ "./src/Components/Pages/Settings/WidgetSettings.jsx");
/* harmony import */ var _Settings_TranslationsSection__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Settings/TranslationsSection */ "./src/Components/Pages/Settings/TranslationsSection.jsx");
/* harmony import */ var _Settings_WorkflowSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Settings/WorkflowSettings */ "./src/Components/Pages/Settings/WorkflowSettings.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);
// SettingsPage.jsx - Refactored with card layout





















// Import new components









const SettingsPage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [zoomAccount, setZoomAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stripeAccount, setStripeAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [defaultEndTime, setDefaultEndTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(moment__WEBPACK_IMPORTED_MODULE_2___default()());
  const [tabsList, setTabsList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [n8nCurentSettings, setN8nSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isN8NSettingsUpdated, setIsN8NSettingsUpdated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [langForEdit, setLangForEdit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("English");
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const stripeConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_14__.useServvStore)(s => s.stripeConnected);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_14__.useServvStore)(s => s.fetchSettings);
  const timezones = Object.keys(_utilities_timezones__WEBPACK_IMPORTED_MODULE_11__.timezonesList).map(zone => ({
    id: zone,
    name: _utilities_timezones__WEBPACK_IMPORTED_MODULE_11__.timezonesList[zone]
  }));
  const viewModeOptions = [{
    label: "List",
    value: "list"
  }, {
    label: "Grid",
    value: "grid"
  }, {
    label: "Calendar",
    value: "calendar"
  }];
  const pageSizes = [{
    label: "12 items",
    value: 12
  }, {
    label: "24 items",
    value: 24
  }, {
    label: "48 items",
    value: 48
  }];
  const filters = ["Locations", "Languages", "Categories", "Members"];
  const availableViewMods = viewModeOptions.map(opt => opt.label);
  const availablePageSizes = pageSizes.map(opt => opt.label);
  const timeOptions = [{
    label: "24 hours",
    value: 24
  }, {
    label: "12 hours",
    value: 12
  }].map(format => format.label);
  const eventTypes = [{
    label: "Event",
    value: "offline"
  }, {
    label: "Zoom Event",
    value: "zoom"
  }];
  const currencyOptions = [{
    label: "Currency sign: $ / 元"
  }, {
    label: "Alphabets: USD / CAD / CNY"
  }].map(format => format.label);

  // Responsive helpers
  const responsiveBlockStack = "w-full min-w-0";
  const responsiveInlineStack = "flex-col md:flex-row w-full min-w-0";
  const responsiveInput = "w-full min-w-0";

  // All the handler functions and utility functions from original file
  // ... (keeping all existing functions: validateWidgetSettings, validateSettings, etc.)

  const validateWidgetSettings = async newSettings => {
    let settings = {
      ...newSettings
    };
    if (settings.ew_events_list_view === undefined) settings.ew_events_list_view = "list";
    if (settings.ew_events_grid_fluid_mode === undefined) settings.ew_events_grid_fluid_mode = false;
    if (settings.ew_card_description_display_words_limit === undefined) settings.ew_card_description_display_words_limit = 9;
    if (settings.ew_list_item_description_display_words_limit === undefined) settings.ew_list_item_description_display_words_limit = 9;
    if (settings.ew_events_list_page_size_default === undefined) settings.ew_events_list_page_size_default = 12;
    if (settings.available_filters === undefined) settings.available_filters = "locations,languages,categories,members";
    if (settings.ew_show_language_selector === undefined) settings.ew_show_language_selector = true;
    if (settings.ew_show_top_filters === undefined) settings.ew_show_top_filters = true;
    if (settings.show_calendar === undefined) settings.show_calendar = true;
    if (settings.permanently_open_calendar === undefined) settings.permanently_open_calendar = true;
    if (settings.show_widget_title === undefined) settings.show_widget_title = true;
    if (settings.ew_events_counter === undefined) settings.ew_events_counter = true;
    if (settings.ew_hide_view_mode_switch === undefined) settings.ew_hide_view_mode_switch = false;
    if (settings.show_event_images === undefined) settings.show_event_images = true;
    if (settings.ew_image_aspect === undefined) settings.ew_image_aspect = false;
    if (settings.show_events_list_separator_badge === undefined) settings.show_events_list_separator_badge = true;
    if (settings.ew_show_quantity === undefined) settings.ew_show_quantity = false;
    if (settings.ew_show_share_button === undefined) settings.ew_show_share_button = true;
    if (settings.ew_show_event_type_badge === undefined) settings.ew_show_event_type_badge = true;
    if (settings.translations === undefined) {
      settings.translations = (0,_utilities_translations__WEBPACK_IMPORTED_MODULE_12__.mergeTranslations)((0,_utilities_translations__WEBPACK_IMPORTED_MODULE_12__.getTranslationsTpl)(), settings?.settings?.widget_style_settings?.translations || {});
    }
    return settings;
  };
  const validateSettings = async newSettings => {
    let validatedSettings = {
      ...newSettings
    };
    validatedSettings.settings.widget_style_settings = validatedSettings.settings.widget_style_settings.length > 0 ? JSON.parse(validatedSettings.settings.widget_style_settings) : {};
    validatedSettings.settings.admin_dashboard = validatedSettings.settings.admin_dashboard.length > 0 ? JSON.parse(validatedSettings.settings.admin_dashboard) : {};
    if (!newSettings?.settings?.admin_dashboard?.default_timezone) {
      validatedSettings.settings.admin_dashboard.default_timezone = "America/Los_Angeles";
    }
    if (!newSettings?.settings?.admin_dashboard?.default_duration) {
      validatedSettings.settings.admin_dashboard.default_duration = 1;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_start_time) {
      validatedSettings.settings.admin_dashboard.default_start_time = moment__WEBPACK_IMPORTED_MODULE_2___default()("10:00 am", "hh:mm a").format("hh:mm a");
    }
    if (!newSettings?.settings?.admin_dashboard?.default_price) {
      validatedSettings.settings.admin_dashboard.default_price = 10.0;
    }
    if (!newSettings.settings) {
      validatedSettings.settings.time_format_24_hours = false;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_quantity) {
      validatedSettings.settings.admin_dashboard.default_quantity = 1;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_event_type) {
      validatedSettings.settings.admin_dashboard.default_event_type = "offline";
    }
    if (!newSettings.currency || newSettings.currency.length === 0) {
      validatedSettings.currency = "sign";
    }
    if (!newSettings.settings) {
      validatedSettings.hide_time_zone = false;
    }
    if (!newSettings.first_reminder_hours) {
      validatedSettings.first_reminder_hours = 24;
    }
    if (!newSettings.second_reminder_hours) {
      validatedSettings.second_reminder_hours = 2;
    }
    validatedSettings.settings.widget_style_settings = await validateWidgetSettings(validatedSettings.settings.widget_style_settings);
    const baseTabs = [{
      label: "General",
      value: 0
    }, {
      label: "Reminders",
      value: 1
    }];
    const widgetTabs = [{
      label: "Widget",
      value: 5
    }, {
      label: "Translations",
      value: 6
    }];
    const planId = validatedSettings?.current_plan?.id;
    let tabs = [...baseTabs];
    if (planId) {
      if (!newSettings.is_wp_marketplace) {
        tabs.push(...widgetTabs);
      }
    } else {
      tabs.push(...widgetTabs);
    }
    setTabsList(tabs);
    setSettings({
      ...validatedSettings
    });
  };
  const updateN8NSettings = newVal => {
    setN8nSettings({
      ...newVal
    });
    setIsN8NSettingsUpdated(true);
  };
  const getN8nSettings = async () => {
    setLoading(true);
    const getN8nResponse = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/wp-json/servv-plugin/v1/n8n/settings", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getN8nResponse?.status === 200) {
      setN8nSettings(getN8nResponse.data);
    }
    setLoading(false);
  };
  const saveN8nSettings = async () => {
    setLoading(true);
    let settingsForSave = n8nCurentSettings;
    if (settingsForSave?.new_booking_url?.length > 0 && !settingsForSave.new_booking_method?.length) {
      settingsForSave.new_booking_method = "POST";
    }
    if (settingsForSave?.canceled_booking_url?.length > 0 && !settingsForSave.canceled_booking_method?.length) {
      settingsForSave.canceled_booking_method = "POST";
    }
    if (settingsForSave?.event_created_url?.length > 0 && !settingsForSave.event_created_method?.length) {
      settingsForSave.event_created_method = "POST";
    }
    const saveN8nResponse = await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/n8n/settings",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: n8nCurentSettings
    });
    if (saveN8nResponse?.status === 200) {
      setLoading(false);
    }
  };
  const getSettings = async () => {
    const getSettingsResponse = await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"])("/wp-json/servv-plugin/v1/shop/info", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    }).catch(() => (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)("WP Super Events was unable to fetch settings."));
    if (getSettingsResponse?.status === 200) {
      await validateSettings(getSettingsResponse.data);
    }
  };
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/wp-json/servv-plugin/v1/zoom/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getZoomAccountResponse?.status === 200) {
      setZoomAccount(getZoomAccountResponse.data);
    }
  };
  const getStripeAccount = async () => {
    const getStripeAccountResponse = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/wp-json/servv-plugin/v1/stripe/account", {
      headers: {
        "X-WP-Nonce": servvData.nonce
      }
    });
    if (getStripeAccountResponse?.status === 200) {
      setStripeAccount(getStripeAccountResponse.data);
    }
  };
  const defaultWidgetLanguage = settings?.settings?.widget_style_settings?.widgets_default_language || "en";
  const translations = (0,_utilities_translations__WEBPACK_IMPORTED_MODULE_12__.mergeTranslations)((0,_utilities_translations__WEBPACK_IMPORTED_MODULE_12__.getTranslationsTpl)(), settings?.settings?.widget_style_settings?.translations || {});
  const getDefaultWidgetLanguageName = () => {
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_13__.getLanguagesList)();
    const langCode = fullList.filter(lang => lang.value === defaultWidgetLanguage)[0]?.label;
    return langCode || "English";
  };
  const saveSettings = async () => {
    setLoading(true);
    const saveSettingsResponse = await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/shop/settings",
      headers: {
        "X-WP-Nonce": servvData.nonce
      },
      data: {
        ...settings,
        settings: {
          ...settings.settings,
          admin_dashboard: JSON.stringify(settings.settings.admin_dashboard),
          widget_style_settings: JSON.stringify(settings.settings.widget_style_settings)
        }
      }
    }).catch(err => console.error(err));
    if (saveSettingsResponse?.status === 200) {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)("Settings saved successfully.");
      fetchSettings();
    }
    setLoading(false);
  };
  const saveAllSettings = async () => {
    if (servvData.servv_plugin_mode === "development") {
      await saveSettings();
      if (isN8NSettingsUpdated) {
        await saveN8nSettings();
      }
    } else {
      saveSettings();
      if (isN8NSettingsUpdated) {
        saveN8nSettings();
      }
    }
  };
  const getSettingsInfo = async () => {
    if (servvData.servv_plugin_mode === "development") {
      setLoading(true);
      await getSettings();
      await getN8nSettings();
      if (settings.current_plan && settings?.current_plan?.id !== 1) {
        await getZoomAccount();
        await getStripeAccount();
      }
      setLoading(false);
    } else {
      setLoading(true);
      getSettings();
      getN8nSettings();
      if (settings.curent_plan && settings?.current_plan?.id !== 1) {
        getZoomAccount();
        getStripeAccount();
      }
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getSettingsInfo();
  }, []);
  const durationOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      if (i === 1) options.push({
        label: "1 hour",
        value: 1
      });else options.push({
        label: `${i} hours`,
        value: i
      });
    }
    return options.map(option => option.label);
  };

  // All handler functions
  const handleTimezoneChange = zone => {
    let currentSettings = {
      ...settings
    };
    let currentSelectedTimezone = timezones.findIndex(timezone => timezone.name === zone);
    if (currentSelectedTimezone >= 0) {
      currentSettings.settings.admin_dashboard.default_timezone = timezones[currentSelectedTimezone].id;
      setSettings(currentSettings);
    }
  };
  const handleDefaultStartTimeChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.admin_dashboard.default_start_time = newVal.format("hh:mm a");
    setDefaultEndTime(newVal.clone().add(currentSettings.settings.admin_dashboard.default_duration, "hours"));
    setSettings(currentSettings);
  };
  const handleDefaultEndTimeChange = newVal => {
    let currentSettings = {
      ...settings
    };
    let startTime = moment__WEBPACK_IMPORTED_MODULE_2___default()(currentSettings.settings.admin_dashboard.default_start_time, "hh:mm a");
    const base = moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf("day");
    const startNormalized = base.clone().set({
      hour: startTime.hour(),
      minute: startTime.minute()
    });
    let endNormalized = base.clone().set({
      hour: newVal.hour(),
      minute: newVal.minute()
    });
    let diffMinutes = endNormalized.diff(startNormalized, "minutes");

    // If negative, end time is next day (crossed midnight)
    if (diffMinutes < 0) {
      endNormalized.add(1, "day");
      diffMinutes = endNormalized.diff(startNormalized, "minutes");
    }

    // console.log(
    //   "start:",
    //   startNormalized.format("hh:mm a"),
    //   "end:",
    //   newVal.format("hh:mm a"),
    //   "diff:",
    //   diffMinutes,
    // );

    currentSettings.settings.admin_dashboard.default_duration = diffMinutes > 0 ? diffMinutes / 60 : 1;
    setSettings(currentSettings);
  };
  const handleDefaultDurationChange = newVal => {
    let currentSettings = {
      ...settings
    };
    let duration = durationOptions().indexOf(newVal);
    currentSettings.settings.admin_dashboard.default_duration = duration + 1;
    const newTime = moment__WEBPACK_IMPORTED_MODULE_2___default()(currentSettings.settings.admin_dashboard.default_start_time, "hh:mm a");
    setDefaultEndTime(newTime.clone().add(duration + 1, "hours"));
    setSettings(currentSettings);
  };
  const handleTimeFormatChange = format => {
    let currentSettings = {
      ...settings
    };
    const newFormat = format === "24 hours";
    currentSettings.settings.time_format_24_hours = newFormat;
    setSettings(currentSettings);
  };
  const handleHideTimezoneChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.hide_time_zone = !currentSettings.settings.hide_time_zone;
    setSettings(currentSettings);
  };
  const handleCurrencyChange = currencyFormat => {
    let currentSettings = {
      ...settings
    };
    if (currencyFormat === "Alphabets: USD / CAD / CNY") currentSettings.settings.widget_style_settings.currency_format = "alphabets";else currentSettings.settings.widget_style_settings.currency_format = "sign";
    setSettings(currentSettings);
  };
  const handleDefaultPriceChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.admin_dashboard.default_price = newVal;
    setSettings(currentSettings);
  };
  const handleDefaultQuantityChange = newVal => {
    let currentSettings = {
      ...settings
    };
    if (newVal <= settings.free_registrants_limit) currentSettings.settings.admin_dashboard.default_quantity = newVal;
    setSettings(currentSettings);
  };
  const formatDuration = duration => {
    if (!duration) return "1 hour";
    const hours = Math.floor(duration);
    const minutes = Math.round((duration - hours) * 60);
    if (hours > 0 && minutes > 0) return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`;
    if (hours > 0) return `${hours} hour${hours !== 1 ? "s" : ""}`;
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  };
  const getDurationOptions = () => {
    const options = durationOptions();
    const duration = settings?.settings?.admin_dashboard?.default_duration;
    if (duration && !Number.isInteger(duration)) {
      const custom = formatDuration(duration);
      if (!options.includes(custom)) {
        options.push(custom);
      }
    }
    return options;
  };
  const getDefaultStartTime = () => {
    if (settings?.settings?.admin_dashboard?.default_start_time) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(settings.settings.admin_dashboard.default_start_time, "hh:mm a");
    }
    return moment__WEBPACK_IMPORTED_MODULE_2___default()("10:00 am", "hh:mm a");
  };
  const handleEmailRemindersStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.disable_emails = !currentSettings.settings.disable_emails;
    setSettings(currentSettings);
  };
  const handleFirstReminderStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.first_reminder = !currentSettings.settings.first_reminder;
    setSettings(currentSettings);
  };
  const handleSecondReminderStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.second_reminder = !currentSettings.settings.second_reminder;
    setSettings(currentSettings);
  };
  const handleFinishedReminderStateChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.finished_reminder = !currentSettings.settings.finished_reminder;
    setSettings(currentSettings);
  };
  const handleFirstReminderHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.first_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };
  const handleSecondReminderHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.second_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };
  const handleDefaultTypeChange = newVal => {
    let currentSettings = {
      ...settings
    };
    if (newVal === "Zoom Event") currentSettings.settings.admin_dashboard.default_event_type = "zoom";else currentSettings.settings.admin_dashboard.default_event_type = "offline";
    setSettings(currentSettings);
  };
  const handleFreeCheckoutChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.free_events_skip_checkout = !currentSettings.settings.free_events_skip_checkout;
    setSettings(currentSettings);
  };
  const handleSkipCaptchaChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.free_events_skip_captcha = !currentSettings.settings.free_events_skip_captcha;
    setSettings(currentSettings);
  };
  const handleMarketingConsentChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.free_checkout_marketing_checkbox = !currentSettings.settings.free_checkout_marketing_checkbox;
    setSettings(currentSettings);
  };
  const handleNewAdditionalEmailsChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.additional_reminder_emails = newVal;
    setSettings(currentSettings);
  };
  const handleAdditionalRemindersHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.members_reminder_hours = newVal;
    setSettings(currentSettings);
  };
  const handleStaffMemberEmailChange = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.skip_members_in_calendar_files = !currentSettings.settings.skip_members_in_calendar_files;
    setSettings(currentSettings);
  };
  const getDefaultEndTime = () => {
    if (settings?.settings?.admin_dashboard?.default_start_time && settings?.settings?.admin_dashboard?.default_duration) {
      let newTime = moment__WEBPACK_IMPORTED_MODULE_2___default()(settings.settings.admin_dashboard.default_start_time, "hh:mm a");
      newTime.add(settings.settings.admin_dashboard.default_duration, "hours");
      return newTime;
    }
    return moment__WEBPACK_IMPORTED_MODULE_2___default()("11:00 am", "hh:mm a");
  };
  const handleViewModeChange = val => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings.ew_events_list_view = val.toLowerCase();
    setSettings(currentSettings);
  };
  const handleChangeFluidGrid = () => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode = !currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode;
    setSettings(currentSettings);
  };
  const selectedView = settings?.settings?.widget_style_settings?.ew_events_list_view ? viewModeOptions[viewModeOptions.map(opt => opt.value).indexOf(settings.settings.widget_style_settings.ew_events_list_view)].label : "List";
  const selectedPageSize = settings?.settings?.widget_style_settings?.ew_events_list_page_size_default && pageSizes.map(opt => opt.value).indexOf(settings.settings.widget_style_settings.ew_events_list_page_size_default) >= 0 ? pageSizes[pageSizes.map(opt => opt.value).indexOf(settings.settings.widget_style_settings.ew_events_list_page_size_default)].label : "12 items";
  const handleDescriptionLengthChange = (view, length) => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings[view] = Number.parseInt(length);
    setSettings(currentSettings);
  };
  const handlePageSizeChange = val => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings.ew_events_list_page_size_default = Number.parseInt(val.split(" ")[0]);
    setSettings(currentSettings);
  };
  const handleSelectedFilterChange = filter => {
    let currentSettings = {
      ...settings
    };
    const filterSettings = settings.settings.widget_style_settings.available_filters || "";
    let selectedFilters = filterSettings.split(",").filter(f => f.length > 0);
    if (selectedFilters.indexOf(filter) >= 0) {
      selectedFilters = selectedFilters.filter(fil => fil !== filter);
    } else {
      selectedFilters.push(filter);
    }
    currentSettings.settings.widget_style_settings.available_filters = selectedFilters.join(",");
    setSettings(currentSettings);
  };
  const handleSelectLanguageforEdit = newVal => setLangForEdit(newVal);
  const renderAvailableFilters = () => {
    const filterSettings = settings.settings.widget_style_settings.available_filters || "";
    const selectedFilters = filterSettings.split(",");
    return filters.map((filter, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: filter,
      checked: selectedFilters.some(f => f.toLowerCase() === filter.toLowerCase()),
      onChange: () => handleSelectedFilterChange(filter.toLowerCase())
    }, index));
  };
  const handleAdditionalPropertyChange = prop => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings[prop] = !currentSettings.settings.widget_style_settings[prop];
    setSettings(currentSettings);
  };
  const getLangsSelectOptions = () => {
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_13__.getLanguagesList)();
    const currentLanguagesList = Object.keys(translations);
    return fullList.filter(lang => currentLanguagesList.includes(lang.value));
  };
  const handleDefaultLanguageChange = newVal => {
    let currentSettings = {
      ...settings
    };
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_13__.getLanguagesList)();
    const langCode = fullList.filter(lang => lang.label === newVal)[0]?.value;
    if (langCode) {
      currentSettings.settings.widget_style_settings.widgets_default_language = langCode;
      setSettings(currentSettings);
    }
  };
  const handleTranslationChange = (section, lang, field, newVal) => {
    const currentSettings = {
      ...settings
    };
    const widgetSettings = currentSettings.settings.widget_style_settings;
    const stored = widgetSettings.translations || {};
    const storedLang = stored[lang] || {};
    widgetSettings.translations = {
      ...stored,
      [lang]: {
        ...storedLang,
        [section]: {
          ...storedLang[section],
          [field]: newVal
        }
      }
    };
    setSettings(currentSettings);
  };
  const renderTranslations = (section = "globalWidgetsTranslations") => {
    const fullList = (0,_utilities_languages__WEBPACK_IMPORTED_MODULE_13__.getLanguagesList)();
    const langCode = fullList.filter(lang => lang.label === langForEdit)[0]?.value || "en";
    if (!langCode) return null;
    const translationSection = translations?.[langCode]?.[section] || {};
    const getFieldLabel = field => {
      if (section !== "customFilters") return lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default()(lodash_startcase__WEBPACK_IMPORTED_MODULE_4___default()(field));
      if (field === "filter_label_dates") return "Dates";
      if (field.startsWith("filter_label_")) {
        return lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default()(settings?.settings?.widget_style_settings?.[field]);
      }
      return lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default()(lodash_startcase__WEBPACK_IMPORTED_MODULE_4___default()(field).replace("Filter Property", ""));
    };
    return Object.keys(translationSection).map((translation, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_17__["default"], {
      gap: 1,
      className: responsiveBlockStack,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("span", {
        className: "font-semibold",
        children: getFieldLabel(translation)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_16__["default"], {
          width: "100%",
          value: translationSection[translation],
          type: "text",
          align: "left",
          onChange: newVal => handleTranslationChange(section, langCode, translation, newVal)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("span", {
          className: "text-sm text-gray-500",
          children: langCode
        })]
      })]
    }, index));
  };
  const isBillingPlanRestriction = settings?.current_plan && settings.current_plan.id === 1;
  // console.log(loading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: false,
    withBackground: true,
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].page,
      children: [!activeSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_6__["default"], {
          breadcrumbs: [{
            label: t("Dashboard"),
            to: "/dashboard"
          }, {
            label: t("Settings")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
          eyebrow: "WP Super Events by ServvAI",
          title: t("Settings"),
          description: "Set defaults once so every new event starts right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("div", {
            className: _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].divider
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
        className: activeSection ? _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].single : _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].grid,
        children: [(!activeSection || activeSection === "general") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_28__["default"],
          title: "General",
          description: "Time zone, format and event defaults",
          editDescription: "Time zone, formats, and the defaults every new event inherits.",
          statusText: "General settings configured",
          status: "available",
          onSave: saveAllSettings,
          onCancel: getSettingsInfo,
          sectionId: "general",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_19__["default"], {
              settings: settings,
              timezones: timezones,
              timeOptions: timeOptions,
              currencyOptions: currencyOptions,
              durationOptions: durationOptions,
              eventTypes: eventTypes,
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              isBillingPlanRestriction: isBillingPlanRestriction,
              stripeConnected: stripeConnected,
              zoomAccount: zoomAccount,
              handleTimezoneChange: handleTimezoneChange,
              handleTimeFormatChange: handleTimeFormatChange,
              handleHideTimezoneChange: handleHideTimezoneChange,
              handleCurrencyChange: handleCurrencyChange,
              handleDefaultDurationChange: handleDefaultDurationChange,
              handleDefaultStartTimeChange: handleDefaultStartTimeChange,
              getDefaultStartTime: getDefaultStartTime,
              getDefaultEndTime: getDefaultEndTime,
              handleDefaultPriceChange: handleDefaultPriceChange,
              handleDefaultQuantityChange: handleDefaultQuantityChange,
              handleDefaultTypeChange: handleDefaultTypeChange,
              handleDefaultEndTimeChange: handleDefaultEndTimeChange,
              getDurationOptions: getDurationOptions,
              formatDuration: formatDuration
            })
          })
        }), !activeSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_29__["default"],
          title: "Email templates",
          description: "Customize booking confirmations, reminders, and event updates",
          statusText: "Manage notification email content",
          status: "available",
          sectionId: "email-templates",
          activeSection: activeSection,
          direct: true,
          onView: () => navigate("/templates")
        }), (!activeSection || activeSection === "reminders") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_30__["default"],
          title: "Reminders",
          description: "Email notifications and reminder settings",
          statusText: settings?.settings?.disable_emails === false ? "Reminders enabled" : "Reminders disabled",
          status: settings?.settings?.disable_emails === false ? "available" : "unavailable",
          onSave: saveAllSettings,
          onCancel: getSettingsInfo,
          sectionId: "reminders",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_RemindersSettings__WEBPACK_IMPORTED_MODULE_20__["default"], {
              settings: settings,
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              isBillingPlanRestriction: isBillingPlanRestriction,
              handleEmailRemindersStateChange: handleEmailRemindersStateChange,
              handleFirstReminderStateChange: handleFirstReminderStateChange,
              handleFirstReminderHoursChange: handleFirstReminderHoursChange,
              handleSecondReminderStateChange: handleSecondReminderStateChange,
              handleSecondReminderHoursChange: handleSecondReminderHoursChange,
              handleFinishedReminderStateChange: handleFinishedReminderStateChange,
              handleNewAdditionalEmailsChange: handleNewAdditionalEmailsChange,
              handleAdditionalRemindersHoursChange: handleAdditionalRemindersHoursChange,
              handleStaffMemberEmailChange: handleStaffMemberEmailChange
            })
          })
        }), (!activeSection || activeSection === "checkout") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_31__["default"],
          title: "Checkout",
          description: "Fast checkout and marketing consent settings",
          statusText: settings?.settings?.free_events_skip_checkout ? "Fast checkout enabled" : "Standard checkout",
          status: "available",
          onSave: saveAllSettings,
          onCancel: getSettingsInfo,
          sectionId: "checkout",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_CheckoutSettings__WEBPACK_IMPORTED_MODULE_21__["default"], {
              settings: settings,
              handleFreeCheckoutChange: handleFreeCheckoutChange,
              handleSkipCaptchaChange: handleSkipCaptchaChange,
              handleMarketingConsentChange: handleMarketingConsentChange
            })
          })
        }), (!activeSection || activeSection === "widget") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_32__["default"],
          title: "Widget",
          description: "Display mode, filters, appearance, and embedding",
          statusText: "Open widget settings",
          status: "available",
          showActions: false,
          sectionId: "widget",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("p", {
            children: "Choose your widget layout and appearance, preview events, and generate a shortcode."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)("a", {
            href: window.servvData?.adminPages?.widget || "#/widget",
            children: "Open widget settings"
          })]
        }), (!activeSection || activeSection === "translations") && settings && settings.is_wp_marketplace === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_33__["default"],
          title: "Translations",
          description: "Translate widget text to any language",
          statusText: `Default: ${getDefaultWidgetLanguageName()}`,
          status: "available",
          onSave: saveAllSettings,
          onCancel: getSettingsInfo,
          sectionId: "translations",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx)(_Settings_TranslationsSection__WEBPACK_IMPORTED_MODULE_23__["default"], {
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              getLangsSelectOptions: getLangsSelectOptions,
              getDefaultWidgetLanguageName: getDefaultWidgetLanguageName,
              handleDefaultLanguageChange: handleDefaultLanguageChange,
              langForEdit: langForEdit,
              handleSelectLanguageforEdit: handleSelectLanguageforEdit,
              renderTranslations: renderTranslations
            })
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

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

/***/ "./src/utilities/languages.js":
/*!************************************!*\
  !*** ./src/utilities/languages.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLanguageOption: () => (/* binding */ getLanguageOption),
/* harmony export */   getLanguagesList: () => (/* binding */ getLanguagesList)
/* harmony export */ });
const languagesList = [{
  code: "ab",
  name: "Abkhaz",
  nativeName: "аҧсуа"
}, {
  code: "aa",
  name: "Afar",
  nativeName: "Afaraf"
}, {
  code: "af",
  name: "Afrikaans",
  nativeName: "Afrikaans"
}, {
  code: "ak",
  name: "Akan",
  nativeName: "Akan"
}, {
  code: "sq",
  name: "Albanian",
  nativeName: "Shqip"
}, {
  code: "am",
  name: "Amharic",
  nativeName: "አማርኛ"
}, {
  code: "ar",
  name: "Arabic",
  nativeName: "العربية"
}, {
  code: "an",
  name: "Aragonese",
  nativeName: "Aragonés"
}, {
  code: "hy",
  name: "Armenian",
  nativeName: "Հայերեն"
}, {
  code: "as",
  name: "Assamese",
  nativeName: "অসমীয়া"
}, {
  code: "av",
  name: "Avaric",
  nativeName: "авар мацӀ, магӀарул мацӀ"
}, {
  code: "ae",
  name: "Avestan",
  nativeName: "avesta"
}, {
  code: "ay",
  name: "Aymara",
  nativeName: "aymar aru"
}, {
  code: "az",
  name: "Azerbaijani",
  nativeName: "azərbaycan dili"
}, {
  code: "bm",
  name: "Bambara",
  nativeName: "bamanankan"
}, {
  code: "ba",
  name: "Bashkir",
  nativeName: "башҡорт теле"
}, {
  code: "eu",
  name: "Basque",
  nativeName: "euskara, euskera"
}, {
  code: "be",
  name: "Belarusian",
  nativeName: "Беларуская"
}, {
  code: "bn",
  name: "Bengali",
  nativeName: "বাংলা"
}, {
  code: "bh",
  name: "Bihari",
  nativeName: "भोजपुरी"
}, {
  code: "bi",
  name: "Bislama",
  nativeName: "Bislama"
}, {
  code: "bs",
  name: "Bosnian",
  nativeName: "bosanski jezik"
}, {
  code: "br",
  name: "Breton",
  nativeName: "brezhoneg"
}, {
  code: "bg",
  name: "Bulgarian",
  nativeName: "български език"
}, {
  code: "my",
  name: "Burmese",
  nativeName: "ဗမာစာ"
}, {
  code: "ca",
  name: "Catalan; Valencian",
  nativeName: "Català"
}, {
  code: "ch",
  name: "Chamorro",
  nativeName: "Chamoru"
}, {
  code: "ce",
  name: "Chechen",
  nativeName: "нохчийн мотт"
}, {
  code: "ny",
  name: "Chichewa; Chewa; Nyanja",
  nativeName: "chiCheŵa, chinyanja"
}, {
  code: "zh-cn",
  name: "Chinese",
  nativeName: "中文 (Zhōngwén), 汉语, 漢語"
}, {
  code: "cv",
  name: "Chuvash",
  nativeName: "чӑваш чӗлхи"
}, {
  code: "kw",
  name: "Cornish",
  nativeName: "Kernewek"
}, {
  code: "co",
  name: "Corsican",
  nativeName: "corsu, lingua corsa"
}, {
  code: "cr",
  name: "Cree",
  nativeName: "ᓀᐦᐃᔭᐍᐏᐣ"
}, {
  code: "hr",
  name: "Croatian",
  nativeName: "hrvatski"
}, {
  code: "cs",
  name: "Czech",
  nativeName: "česky, čeština"
}, {
  code: "da",
  name: "Danish",
  nativeName: "dansk"
}, {
  code: "dv",
  name: "Divehi; Dhivehi; Maldivian;",
  nativeName: "ދިވެހި"
}, {
  code: "nl",
  name: "Dutch",
  nativeName: "Nederlands, Vlaams"
}, {
  code: "en",
  name: "English",
  nativeName: "English"
}, {
  code: "eo",
  name: "Esperanto",
  nativeName: "Esperanto"
}, {
  code: "et",
  name: "Estonian",
  nativeName: "eesti, eesti keel"
}, {
  code: "ee",
  name: "Ewe",
  nativeName: "Eʋegbe"
}, {
  code: "fo",
  name: "Faroese",
  nativeName: "føroyskt"
}, {
  code: "fj",
  name: "Fijian",
  nativeName: "vosa Vakaviti"
}, {
  code: "fi",
  name: "Finnish",
  nativeName: "suomi, suomen kieli"
}, {
  code: "fr",
  name: "French",
  nativeName: "français, langue française"
}, {
  code: "ff",
  name: "Fula; Fulah; Pulaar; Pular",
  nativeName: "Fulfulde, Pulaar, Pular"
}, {
  code: "gl",
  name: "Galician",
  nativeName: "Galego"
}, {
  code: "ka",
  name: "Georgian",
  nativeName: "ქართული"
}, {
  code: "de",
  name: "German",
  nativeName: "Deutsch"
}, {
  code: "el",
  name: "Greek, Modern",
  nativeName: "Ελληνικά"
}, {
  code: "gn",
  name: "Guaraní",
  nativeName: "Avañeẽ"
}, {
  code: "gu",
  name: "Gujarati",
  nativeName: "ગુજરાતી"
}, {
  code: "ht",
  name: "Haitian; Haitian Creole",
  nativeName: "Kreyòl ayisyen"
}, {
  code: "ha",
  name: "Hausa",
  nativeName: "Hausa, هَوُسَ"
}, {
  code: "he",
  name: "Hebrew (modern)",
  nativeName: "עברית"
}, {
  code: "hz",
  name: "Herero",
  nativeName: "Otjiherero"
}, {
  code: "hi",
  name: "Hindi",
  nativeName: "हिन्दी, हिंदी"
}, {
  code: "ho",
  name: "Hiri Motu",
  nativeName: "Hiri Motu"
}, {
  code: "hu",
  name: "Hungarian",
  nativeName: "Magyar"
}, {
  code: "ia",
  name: "Interlingua",
  nativeName: "Interlingua"
}, {
  code: "id",
  name: "Indonesian",
  nativeName: "Bahasa Indonesia"
}, {
  code: "ie",
  name: "Interlingue",
  nativeName: "Originally called Occidental; then Interlingue after WWII"
}, {
  code: "ga",
  name: "Irish",
  nativeName: "Gaeilge"
}, {
  code: "ig",
  name: "Igbo",
  nativeName: "Asụsụ Igbo"
}, {
  code: "ik",
  name: "Inupiaq",
  nativeName: "Iñupiaq, Iñupiatun"
}, {
  code: "io",
  name: "Ido",
  nativeName: "Ido"
}, {
  code: "is",
  name: "Icelandic",
  nativeName: "Íslenska"
}, {
  code: "it",
  name: "Italian",
  nativeName: "Italiano"
}, {
  code: "iu",
  name: "Inuktitut",
  nativeName: "ᐃᓄᒃᑎᑐᑦ"
}, {
  code: "ja",
  name: "Japanese",
  nativeName: "日本語 (にほんご／にっぽんご)"
}, {
  code: "jv",
  name: "Javanese",
  nativeName: "basa Jawa"
}, {
  code: "kl",
  name: "Kalaallisut, Greenlandic",
  nativeName: "kalaallisut, kalaallit oqaasii"
}, {
  code: "kn",
  name: "Kannada",
  nativeName: "ಕನ್ನಡ"
}, {
  code: "kr",
  name: "Kanuri",
  nativeName: "Kanuri"
}, {
  code: "ks",
  name: "Kashmiri",
  nativeName: "कश्मीरी, كشميري‎"
}, {
  code: "kk",
  name: "Kazakh",
  nativeName: "Қазақ тілі"
}, {
  code: "km",
  name: "Khmer",
  nativeName: "ភាសាខ្មែរ"
}, {
  code: "ki",
  name: "Kikuyu, Gikuyu",
  nativeName: "Gĩkũyũ"
}, {
  code: "rw",
  name: "Kinyarwanda",
  nativeName: "Ikinyarwanda"
}, {
  code: "ky",
  name: "Kirghiz, Kyrgyz",
  nativeName: "кыргыз тили"
}, {
  code: "kv",
  name: "Komi",
  nativeName: "коми кыв"
}, {
  code: "kg",
  name: "Kongo",
  nativeName: "KiKongo"
}, {
  code: "ko",
  name: "Korean",
  nativeName: "한국어 (韓國語), 조선말 (朝鮮語)"
}, {
  code: "ku",
  name: "Kurdish",
  nativeName: "Kurdî, كوردی‎"
}, {
  code: "kj",
  name: "Kwanyama, Kuanyama",
  nativeName: "Kuanyama"
}, {
  code: "la",
  name: "Latin",
  nativeName: "latine, lingua latina"
}, {
  code: "lb",
  name: "Luxembourgish, Letzeburgesch",
  nativeName: "Lëtzebuergesch"
}, {
  code: "lg",
  name: "Luganda",
  nativeName: "Luganda"
}, {
  code: "li",
  name: "Limburgish, Limburgan, Limburger",
  nativeName: "Limburgs"
}, {
  code: "ln",
  name: "Lingala",
  nativeName: "Lingála"
}, {
  code: "lo",
  name: "Lao",
  nativeName: "ພາສາລາວ"
}, {
  code: "lt",
  name: "Lithuanian",
  nativeName: "lietuvių kalba"
}, {
  code: "lu",
  name: "Luba-Katanga",
  nativeName: ""
}, {
  code: "lv",
  name: "Latvian",
  nativeName: "latviešu valoda"
}, {
  code: "gv",
  name: "Manx",
  nativeName: "Gaelg, Gailck"
}, {
  code: "mk",
  name: "Macedonian",
  nativeName: "македонски јазик"
}, {
  code: "mg",
  name: "Malagasy",
  nativeName: "Malagasy fiteny"
}, {
  code: "ms",
  name: "Malay",
  nativeName: "bahasa Melayu, بهاس ملايو‎"
}, {
  code: "ml",
  name: "Malayalam",
  nativeName: "മലയാളം"
}, {
  code: "mt",
  name: "Maltese",
  nativeName: "Malti"
}, {
  code: "mi",
  name: "Māori",
  nativeName: "te reo Māori"
}, {
  code: "mr",
  name: "Marathi (Marāṭhī)",
  nativeName: "मराठी"
}, {
  code: "mh",
  name: "Marshallese",
  nativeName: "Kajin M̧ajeļ"
}, {
  code: "mn",
  name: "Mongolian",
  nativeName: "монгол"
}, {
  code: "na",
  name: "Nauru",
  nativeName: "Ekakairũ Naoero"
}, {
  code: "nv",
  name: "Navajo, Navaho",
  nativeName: "Diné bizaad, Dinékʼehǰí"
}, {
  code: "nb",
  name: "Norwegian Bokmål",
  nativeName: "Norsk bokmål"
}, {
  code: "nd",
  name: "North Ndebele",
  nativeName: "isiNdebele"
}, {
  code: "ne",
  name: "Nepali",
  nativeName: "नेपाली"
}, {
  code: "ng",
  name: "Ndonga",
  nativeName: "Owambo"
}, {
  code: "nn",
  name: "Norwegian Nynorsk",
  nativeName: "Norsk nynorsk"
}, {
  code: "no",
  name: "Norwegian",
  nativeName: "Norsk"
}, {
  code: "ii",
  name: "Nuosu",
  nativeName: "ꆈꌠ꒿ Nuosuhxop"
}, {
  code: "nr",
  name: "South Ndebele",
  nativeName: "isiNdebele"
}, {
  code: "oc",
  name: "Occitan",
  nativeName: "Occitan"
}, {
  code: "oj",
  name: "Ojibwe, Ojibwa",
  nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ"
}, {
  code: "cu",
  name: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
  nativeName: "ѩзыкъ словѣньскъ"
}, {
  code: "om",
  name: "Oromo",
  nativeName: "Afaan Oromoo"
}, {
  code: "or",
  name: "Oriya",
  nativeName: "ଓଡ଼ିଆ"
}, {
  code: "os",
  name: "Ossetian, Ossetic",
  nativeName: "ирон æвзаг"
}, {
  code: "pa",
  name: "Panjabi, Punjabi",
  nativeName: "ਪੰਜਾਬੀ, پنجابی‎"
}, {
  code: "pi",
  name: "Pāli",
  nativeName: "पाऴि"
}, {
  code: "fa",
  name: "Persian",
  nativeName: "فارسی"
}, {
  code: "pl",
  name: "Polish",
  nativeName: "polski"
}, {
  code: "ps",
  name: "Pashto, Pushto",
  nativeName: "پښتو"
}, {
  code: "pt",
  name: "Portuguese",
  nativeName: "Português"
}, {
  code: "qu",
  name: "Quechua",
  nativeName: "Runa Simi, Kichwa"
}, {
  code: "rm",
  name: "Romansh",
  nativeName: "rumantsch grischun"
}, {
  code: "rn",
  name: "Kirundi",
  nativeName: "kiRundi"
}, {
  code: "ro",
  name: "Romanian, Moldavian, Moldovan",
  nativeName: "română"
}, {
  code: "ru",
  name: "Russian",
  nativeName: "русский язык"
}, {
  code: "sa",
  name: "Sanskrit (Saṁskṛta)",
  nativeName: "संस्कृतम्"
}, {
  code: "sc",
  name: "Sardinian",
  nativeName: "sardu"
}, {
  code: "sd",
  name: "Sindhi",
  nativeName: "सिन्धी, سنڌي، سندھی‎"
}, {
  code: "se",
  name: "Northern Sami",
  nativeName: "Davvisámegiella"
}, {
  code: "sm",
  name: "Samoan",
  nativeName: "gagana faa Samoa"
}, {
  code: "sg",
  name: "Sango",
  nativeName: "yângâ tî sängö"
}, {
  code: "sr",
  name: "Serbian",
  nativeName: "српски језик"
}, {
  code: "gd",
  name: "Scottish Gaelic; Gaelic",
  nativeName: "Gàidhlig"
}, {
  code: "sn",
  name: "Shona",
  nativeName: "chiShona"
}, {
  code: "si",
  name: "Sinhala, Sinhalese",
  nativeName: "සිංහල"
}, {
  code: "sk",
  name: "Slovak",
  nativeName: "slovenčina"
}, {
  code: "sl",
  name: "Slovene",
  nativeName: "slovenščina"
}, {
  code: "so",
  name: "Somali",
  nativeName: "Soomaaliga, af Soomaali"
}, {
  code: "st",
  name: "Southern Sotho",
  nativeName: "Sesotho"
}, {
  code: "es",
  name: "Spanish",
  nativeName: "español, castellano"
}, {
  code: "su",
  name: "Sundanese",
  nativeName: "Basa Sunda"
}, {
  code: "sw",
  name: "Swahili",
  nativeName: "Kiswahili"
}, {
  code: "ss",
  name: "Swati",
  nativeName: "SiSwati"
}, {
  code: "sv",
  name: "Swedish",
  nativeName: "svenska"
}, {
  code: "ta",
  name: "Tamil",
  nativeName: "தமிழ்"
}, {
  code: "te",
  name: "Telugu",
  nativeName: "తెలుగు"
}, {
  code: "tg",
  name: "Tajik",
  nativeName: "тоҷикӣ, toğikī, تاجیکی‎"
}, {
  code: "th",
  name: "Thai",
  nativeName: "ไทย"
}, {
  code: "ti",
  name: "Tigrinya",
  nativeName: "ትግርኛ"
}, {
  code: "bo",
  name: "Tibetan Standard, Tibetan, Central",
  nativeName: "བོད་ཡིག"
}, {
  code: "tk",
  name: "Turkmen",
  nativeName: "Türkmen, Түркмен"
}, {
  code: "tl",
  name: "Tagalog",
  nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
}, {
  code: "tn",
  name: "Tswana",
  nativeName: "Setswana"
}, {
  code: "to",
  name: "Tonga (Tonga Islands)",
  nativeName: "faka Tonga"
}, {
  code: "tr",
  name: "Turkish",
  nativeName: "Türkçe"
}, {
  code: "ts",
  name: "Tsonga",
  nativeName: "Xitsonga"
}, {
  code: "tt",
  name: "Tatar",
  nativeName: "татарча, tatarça, تاتارچا‎"
}, {
  code: "tw",
  name: "Twi",
  nativeName: "Twi"
}, {
  code: "ty",
  name: "Tahitian",
  nativeName: "Reo Tahiti"
}, {
  code: "ug",
  name: "Uighur, Uyghur",
  nativeName: "Uyƣurqə, ئۇيغۇرچە‎"
}, {
  code: "uk",
  name: "Ukrainian",
  nativeName: "українська"
}, {
  code: "ur",
  name: "Urdu",
  nativeName: "اردو"
}, {
  code: "uz",
  name: "Uzbek",
  nativeName: "zbek, Ўзбек, أۇزبېك‎"
}, {
  code: "ve",
  name: "Venda",
  nativeName: "Tshivenḓa"
}, {
  code: "vi",
  name: "Vietnamese",
  nativeName: "Tiếng Việt"
}, {
  code: "vo",
  name: "Volapük",
  nativeName: "Volapük"
}, {
  code: "wa",
  name: "Walloon",
  nativeName: "Walon"
}, {
  code: "cy",
  name: "Welsh",
  nativeName: "Cymraeg"
}, {
  code: "wo",
  name: "Wolof",
  nativeName: "Wollof"
}, {
  code: "fy",
  name: "Western Frisian",
  nativeName: "Frysk"
}, {
  code: "xh",
  name: "Xhosa",
  nativeName: "isiXhosa"
}, {
  code: "yi",
  name: "Yiddish",
  nativeName: "ייִדיש"
}, {
  code: "yo",
  name: "Yoruba",
  nativeName: "Yorùbá"
}, {
  code: "za",
  name: "Zhuang, Chuang",
  nativeName: "Saɯ cueŋƅ, Saw cuengh"
}];
const getLanguagesList = (selectComponentOptions = true, rawName = false) => {
  if (!selectComponentOptions) return languagesList;
  return languagesList.map(item => {
    return {
      value: item.code,
      label: rawName ? item.name : `${item.name} - ${item.nativeName}`
    };
  });
};
const getLanguageOption = (langCode, rawName = false) => {
  const selectedLang = languagesList.find(item => item.code === langCode);
  if (!selectedLang) {
    return null;
  }
  return {
    value: selectedLang.code,
    label: rawName ? selectedLang.name : `${selectedLang.name} - ${selectedLang.nativeName}`
  };
};

/***/ }),

/***/ "./src/utilities/timezones.js":
/*!************************************!*\
  !*** ./src/utilities/timezones.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   timezonesList: () => (/* binding */ timezonesList)
/* harmony export */ });
const timezones = [{
  zone: "Pacific/Midway",
  gmt: "(GMT-11:00)",
  name: "Midway Island"
}, {
  zone: "US/Samoa",
  gmt: "(GMT-11:00)",
  name: "Samoa"
}, {
  zone: "US/Hawaii",
  gmt: "(GMT-10:00)",
  name: "Hawaii"
}, {
  zone: "US/Alaska",
  gmt: "(GMT-09:00)",
  name: "Alaska"
}, {
  zone: "US/Pacific",
  gmt: "(GMT-08:00)",
  name: "Pacific Time (US and Canada)"
}, {
  zone: "America/Tijuana",
  gmt: "(GMT-08:00)",
  name: "Tijuana"
}, {
  zone: "US/Arizona",
  gmt: "(GMT-07:00)",
  name: "Arizona"
}, {
  zone: "US/Mountain",
  gmt: "(GMT-07:00)",
  name: "Mountain Time (US and Canada)"
}, {
  zone: "America/Chihuahua",
  gmt: "(GMT-07:00)",
  name: "Chihuahua"
}, {
  zone: "America/Mazatlan",
  gmt: "(GMT-07:00)",
  name: "Mazatlan"
}, {
  zone: "America/Mexico_City",
  gmt: "(GMT-06:00)",
  name: "Mexico City"
}, {
  zone: "America/Monterrey",
  gmt: "(GMT-06:00)",
  name: "Monterrey"
}, {
  zone: "Canada/Saskatchewan",
  gmt: "(GMT-06:00)",
  name: "Saskatchewan"
}, {
  zone: "US/Central",
  gmt: "(GMT-06:00)",
  name: "Central Time (US and Canada)"
}, {
  zone: "US/Eastern",
  gmt: "(GMT-05:00)",
  name: "Eastern Time (US and Canada)"
}, {
  zone: "US/East-Indiana",
  gmt: "(GMT-05:00)",
  name: "Indiana (East)"
}, {
  zone: "America/Bogota",
  gmt: "(GMT-05:00)",
  name: "Bogota"
}, {
  zone: "America/Lima",
  gmt: "(GMT-05:00)",
  name: "Lima"
}, {
  zone: "America/Caracas",
  gmt: "(GMT-04:30)",
  name: "Caracas"
}, {
  zone: "Canada/Atlantic",
  gmt: "(GMT-04:00)",
  name: "Atlantic Time (Canada)"
}, {
  zone: "America/La_Paz",
  gmt: "(GMT-04:00)",
  name: "La_Paz"
}, {
  zone: "America/Santiago",
  gmt: "(GMT-04:00)",
  name: "Santiago"
}, {
  zone: "Canada/Newfoundland",
  gmt: "(GMT-03:30)",
  name: "Newfoundland"
}, {
  zone: "America/Buenos_Aires",
  gmt: "(GMT-03:00)",
  name: "Buenos Aires"
}, {
  zone: "Greenland",
  gmt: "(GMT-03:00)",
  name: "Greenland"
}, {
  zone: "Atlantic/Stanley",
  gmt: "(GMT-02:00)",
  name: "Stanley"
}, {
  zone: "Atlantic/Azores",
  gmt: "(GMT-01:00)",
  name: "Azores"
}, {
  zone: "Atlantic/Cape_Verde",
  gmt: "(GMT-01:00)",
  name: "Cape Verde Is."
}, {
  zone: "Africa/Casablanca",
  gmt: "(GMT)",
  name: "Casablanca"
}, {
  zone: "Europe/Dublin",
  gmt: "(GMT)",
  name: "Dublin"
}, {
  zone: "Europe/Lisbon",
  gmt: "(GMT)",
  name: "Libson"
}, {
  zone: "Europe/London",
  gmt: "(GMT)",
  name: "London"
}, {
  zone: "Africa/Monrovia",
  gmt: "(GMT)",
  name: "Monrovia"
}, {
  zone: "Europe/Amsterdam",
  gmt: "(GMT+01:00)",
  name: "Amsterdam"
}, {
  zone: "Europe/Belgrade",
  gmt: "(GMT+01:00)",
  name: "Belgrade"
}, {
  zone: "Europe/Berlin",
  gmt: "(GMT+01:00)",
  name: "Berlin"
}, {
  zone: "Europe/Bratislava",
  gmt: "(GMT+01:00)",
  name: "Bratislava"
}, {
  zone: "Europe/Brussels",
  gmt: "(GMT+01:00)",
  name: "Brussels"
}, {
  zone: "Europe/Budapest",
  gmt: "(GMT+01:00)",
  name: "Budapest"
}, {
  zone: "Europe/Copenhagen",
  gmt: "(GMT+01:00)",
  name: "Copenhagen"
}, {
  zone: "Europe/Ljubljana",
  gmt: "(GMT+01:00)",
  name: "Ljubljana"
}, {
  zone: "Europe/Madrid",
  gmt: "(GMT+01:00)",
  name: "Madrid"
}, {
  zone: "Europe/Paris",
  gmt: "(GMT+01:00)",
  name: "Paris"
}, {
  zone: "Europe/Prague",
  gmt: "(GMT+01:00)",
  name: "Prague"
}, {
  zone: "Europe/Rome",
  gmt: "(GMT+01:00)",
  name: "Rome"
}, {
  zone: "Europe/Sarajevo",
  gmt: "(GMT+01:00)",
  name: "Sarajevo"
}, {
  zone: "Europe/Skopje",
  gmt: "(GMT+01:00)",
  name: "Skopje"
}, {
  zone: "Europe/Stockholm",
  gmt: "(GMT+01:00)",
  name: "Stockholm"
}, {
  zone: "Europe/Vienna",
  gmt: "(GMT+01:00)",
  name: "Vienna"
}, {
  zone: "Europe/Warsaw",
  gmt: "(GMT+01:00)",
  name: "Warsaw"
}, {
  zone: "Europe/Zagreb",
  gmt: "(GMT+01:00)",
  name: "Zagreb"
}, {
  zone: "Europe/Athens",
  gmt: "(GMT+02:00)",
  name: "Athens"
}, {
  zone: "Europe/Bucharest",
  gmt: "(GMT+02:00)",
  name: "Bucharest"
}, {
  zone: "Africa/Cairo",
  gmt: "(GMT+02:00)",
  name: "Cairo"
}, {
  zone: "Africa/Harare",
  gmt: "(GMT+02:00)",
  name: "Harere"
}, {
  zone: "Europe/Helsinki",
  gmt: "(GMT+02:00)",
  name: "Helsinki"
}, {
  zone: "Europe/Istanbul",
  gmt: "(GMT+02:00)",
  name: "Istanbul"
}, {
  zone: "Asia/Jerusalem",
  gmt: "(GMT+02:00)",
  name: "Jerusalem"
}, {
  zone: "Europe/Kiev",
  gmt: "(GMT+02:00)",
  name: "Kiev"
}, {
  zone: "Europe/Minsk",
  gmt: "(GMT+02:00)",
  name: "Minsk"
}, {
  zone: "Europe/Riga",
  gmt: "(GMT+02:00)",
  name: "Riga"
}, {
  zone: "Europe/Sofia",
  gmt: "(GMT+02:00)",
  name: "Sofia"
}, {
  zone: "Europe/Tallinn",
  gmt: "(GMT+02:00)",
  name: "Tallinn"
}, {
  zone: "Europe/Vilnius",
  gmt: "(GMT+02:00)",
  name: "Vilnius"
}, {
  zone: "Asia/Baghdad",
  gmt: "(GMT+03:00)",
  name: "Baghdad"
}, {
  zone: "Asia/Kuwait",
  gmt: "(GMT+03:00)",
  name: "Kuwait"
}, {
  zone: "Africa/Nairobi",
  gmt: "(GMT+03:00)",
  name: "Nairobi"
}, {
  zone: "Asia/Riyadh",
  gmt: "(GMT+03:00)",
  name: "Riyadh"
}, {
  zone: "Asia/Tehran",
  gmt: "(GMT+03:30)",
  name: "Tehran"
}, {
  zone: "Europe/Moscow",
  gmt: "(GMT+04:00)",
  name: "Moscow"
}, {
  zone: "Asia/Baku",
  gmt: "(GMT+04:00)",
  name: "Baku"
}, {
  zone: "Europe/Volgograd",
  gmt: "(GMT+04:00)",
  name: "Volgograd"
}, {
  zone: "Asia/Muscat",
  gmt: "(GMT+04:00)",
  name: "Muscat"
}, {
  zone: "Asia/Tbilisi",
  gmt: "(GMT+04:00)",
  name: "Tbilisi"
}, {
  zone: "Asia/Yerevan",
  gmt: "(GMT+04:00)",
  name: "Yerevan"
}, {
  zone: "Asia/Kabul",
  gmt: "(GMT+04:30)",
  name: "Kabul"
}, {
  zone: "Asia/Karachi",
  gmt: "(GMT+05:00)",
  name: "Karachi"
}, {
  zone: "Asia/Tashkent",
  gmt: "(GMT+05:00)",
  name: "Tashkent"
}, {
  zone: "Asia/Kolkata",
  gmt: "(GMT+05:30)",
  name: "Kolkata"
}, {
  zone: "Asia/Kathmandu",
  gmt: "(GMT+05:45)",
  name: "Kathmandu"
}, {
  zone: "Asia/Yekaterinburg",
  gmt: "(GMT+06:00)",
  name: "Yekaterinburg"
}, {
  zone: "Asia/Almaty",
  gmt: "(GMT+06:00)",
  name: "Almaty"
}, {
  zone: "Asia/Dhaka",
  gmt: "(GMT+06:00)",
  name: "Dhaka"
}, {
  zone: "Asia/Novosibirsk",
  gmt: "(GMT+07:00)",
  name: "Novosibirsk"
}, {
  zone: "Asia/Bangkok",
  gmt: "(GMT+07:00)",
  name: "Bangkok"
}, {
  zone: "Asia/Jakarta",
  gmt: "(GMT+07:00)",
  name: "Jakarta"
}, {
  zone: "Asia/Krasnoyarsk",
  gmt: "(GMT+08:00)",
  name: "Krasnoyarsk"
}, {
  zone: "Asia/Chongqing",
  gmt: "(GMT+08:00)",
  name: "Chongqing"
}, {
  zone: "Asia/Hong_Kong",
  gmt: "(GMT+08:00)",
  name: "Hong Kong"
}, {
  zone: "Asia/Kuala_Lumpur",
  gmt: "(GMT+08:00)",
  name: "Kuala Lumpur"
}, {
  zone: "Australia/Perth",
  gmt: "(GMT+08:00)",
  name: "Perth"
}, {
  zone: "Asia/Singapore",
  gmt: "(GMT+08:00)",
  name: "Singapore"
}, {
  zone: "Asia/Taipei",
  gmt: "(GMT+08:00)",
  name: "Taipei"
}, {
  zone: "Asia/Ulaanbaatar",
  gmt: "(GMT+08:00)",
  name: "Ulaan Bataar"
}, {
  zone: "Asia/Urumqi",
  gmt: "(GMT+08:00)",
  name: "Urumqi"
}, {
  zone: "Asia/Irkutsk",
  gmt: "(GMT+09:00)",
  name: "Irkutsk"
}, {
  zone: "Asia/Seoul",
  gmt: "(GMT+09:00)",
  name: "Seoul"
}, {
  zone: "Asia/Tokyo",
  gmt: "(GMT+09:00)",
  name: "Tokyo"
}, {
  zone: "Australia/Adelaide",
  gmt: "(GMT+09:30)",
  name: "Adelaide"
}, {
  zone: "Australia/Darwin",
  gmt: "(GMT+09:30)",
  name: "Darwin"
}, {
  zone: "Asia/Yakutsk",
  gmt: "(GMT+10:00)",
  name: "Yakutsk"
}, {
  zone: "Australia/Brisbane",
  gmt: "(GMT+10:00)",
  name: "Brisbane"
}, {
  zone: "Australia/Canberra",
  gmt: "(GMT+10:00)",
  name: "Canberra"
}, {
  zone: "Pacific/Guam",
  gmt: "(GMT+10:00)",
  name: "Guam"
}, {
  zone: "Australia/Hobart",
  gmt: "(GMT+10:00)",
  name: "Hobart"
}, {
  zone: "Australia/Melbourne",
  gmt: "(GMT+10:00)",
  name: "Melbourne"
}, {
  zone: "Pacific/Port_Moresby",
  gmt: "(GMT+10:00)",
  name: "Port Moresby"
}, {
  zone: "Australia/Sydney",
  gmt: "(GMT+10:00)",
  name: "Sydney"
}, {
  zone: "Asia/Vladivostok",
  gmt: "(GMT+11:00)",
  name: "Vladivostok"
}, {
  zone: "Asia/Magadan",
  gmt: "(GMT+12:00)",
  name: "Magadan"
}, {
  zone: "Pacific/Auckland",
  gmt: "(GMT+12:00)",
  name: "Auckland"
}, {
  zone: "Pacific/Fiji",
  gmt: "(GMT+12:00)",
  name: "Fiji"
}];
const timezonesList = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Pago_Pago": "Pago Pago",
  "Pacific/Honolulu": "Hawaii",
  "America/Anchorage": "Alaska",
  "America/Vancouver": "Vancouver",
  "America/Los_Angeles": "Pacific Time (US and Canada)",
  "America/Tijuana": "Tijuana",
  "America/Edmonton": "Edmonton",
  "America/Denver": "Mountain Time (US and Canada)",
  "America/Phoenix": "Arizona",
  "America/Mazatlan": "Mazatlan",
  "America/Winnipeg": "Winnipeg",
  "America/Regina": "Saskatchewan",
  "America/Chicago": "Central Time (US and Canada)",
  "America/Mexico_City": "Mexico City",
  "America/Guatemala": "Guatemala",
  "America/El_Salvador": "El Salvador",
  "America/Managua": "Managua",
  "America/Costa_Rica": "Costa Rica",
  "America/Montreal": "Montreal",
  "America/New_York": "Eastern Time (US and Canada)",
  "America/Indianapolis": "Indiana (East)",
  "America/Panama": "Panama",
  "America/Bogota": "Bogota",
  "America/Lima": "Lima",
  "America/Halifax": "Halifax",
  "America/Puerto_Rico": "Puerto Rico",
  "America/Caracas": "Caracas",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Montevideo": "Montevideo",
  "America/Araguaina": "Brasilia",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Sao_Paulo": "Sao Paulo",
  "Atlantic/Azores": "Azores",
  "Canada/Atlantic": "Atlantic Time (Canada)",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  UTC: "Universal Time UTC",
  "Etc/Greenwich": "Greenwich Mean Time",
  "Europe/Belgrade": "Belgrade, Bratislava, Ljubljana",
  CET: "Sarajevo, Skopje, Zagreb",
  "Atlantic/Reykjavik": "Reykjavik",
  "Europe/Dublin": "Dublin",
  "Europe/London": "London",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca",
  "Africa/Nouakchott": "Nouakchott",
  "Europe/Oslo": "Oslo",
  "Europe/Copenhagen": "Copenhagen",
  "Europe/Brussels": "Brussels",
  "Europe/Berlin": "Amsterdam, Berlin, Rome, Stockholm, Vienna",
  "Europe/Helsinki": "Helsinki",
  "Europe/Amsterdam": "Amsterdam",
  "Europe/Rome": "Rome",
  "Europe/Stockholm": "Stockholm",
  "Europe/Vienna": "Vienna",
  "Europe/Luxembourg": "Luxembourg",
  "Europe/Paris": "Paris",
  "Europe/Zurich": "Zurich",
  "Europe/Madrid": "Madrid",
  "Africa/Bangui": "West Central Africa",
  "Africa/Algiers": "Algiers",
  "Africa/Tunis": "Tunis",
  "Africa/Harare": "Harare, Pretoria",
  "Africa/Nairobi": "Nairobi",
  "Europe/Warsaw": "Warsaw",
  "Europe/Prague": "Prague Bratislava",
  "Europe/Budapest": "Budapest",
  "Europe/Sofia": "Sofia",
  "Europe/Istanbul": "Istanbul",
  "Europe/Athens": "Athens",
  "Europe/Bucharest": "Bucharest",
  "Asia/Nicosia": "Nicosia",
  "Asia/Beirut": "Beirut",
  "Asia/Damascus": "Damascus",
  "Asia/Jerusalem": "Jerusalem",
  "Asia/Amman": "Amman",
  "Africa/Tripoli": "Tripoli",
  "Africa/Cairo": "Cairo",
  "Africa/Johannesburg": "Johannesburg",
  "Europe/Moscow": "Moscow",
  "Asia/Baghdad": "Baghdad",
  "Asia/Kuwait": "Kuwait",
  "Asia/Riyadh": "Riyadh",
  "Asia/Bahrain": "Bahrain",
  "Asia/Qatar": "Qatar",
  "Asia/Aden": "Aden",
  "Asia/Tehran": "Tehran",
  "Africa/Khartoum": "Khartoum",
  "Africa/Djibouti": "Djibouti",
  "Africa/Mogadishu": "Mogadishu",
  "Asia/Dubai": "Dubai",
  "Asia/Muscat": "Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Yekaterinburg",
  "Asia/Tashkent": "Islamabad, Karachi, Tashkent",
  "Asia/Calcutta": "India",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Novosibirsk": "Novosibirsk",
  "Asia/Almaty": "Almaty",
  "Asia/Dacca": "Dacca",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Bangkok": "Bangkok",
  "Asia/Saigon": "Vietnam",
  "Asia/Jakarta": "Jakarta",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Shanghai": "Beijing, Shanghai",
  "Asia/Hong_Kong": "Hong Kong",
  "Asia/Taipei": "Taipei",
  "Asia/Kuala_Lumpur": "Kuala Lumpur",
  "Asia/Singapore": "Singapore",
  "Australia/Perth": "Perth",
  "Asia/Yakutsk": "Yakutsk",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Port_Moresby": "Guam, Port Moresby",
  "Australia/Brisbane": "Brisbane",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Hobart": "Hobart",
  "Asia/Magadan": "Magadan",
  SST: "Solomon Islands",
  "Pacific/Noumea": "New Caledonia",
  "Asia/Kamchatka": "Kamchatka",
  "Pacific/Fiji": "Fiji Islands, Marshall Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Asia/Kolkata": "Mumbai, Kolkata, New Delhi",
  "Europe/Kiev": "Kiev",
  "America/Tegucigalpa": "Tegucigalpa",
  "Pacific/Apia": "Independent State of Samoa"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timezones);

/***/ }),

/***/ "./src/utilities/translations.js":
/*!***************************************!*\
  !*** ./src/utilities/translations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTranslationLanguages: () => (/* binding */ defaultTranslationLanguages),
/* harmony export */   getTranslationsTpl: () => (/* binding */ getTranslationsTpl),
/* harmony export */   languagesCodeName: () => (/* binding */ languagesCodeName),
/* harmony export */   mergeTranslations: () => (/* binding */ mergeTranslations),
/* harmony export */   translationsKeysTpl: () => (/* binding */ translationsKeysTpl)
/* harmony export */ });
/* harmony import */ var lodash_foreach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.foreach */ "./node_modules/lodash.foreach/index.js");
/* harmony import */ var lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_foreach__WEBPACK_IMPORTED_MODULE_0__);

const translationsKeysTpl = {
  customFilters: {
    filter_label_dates: "Dates",
    filter_label_locations: "Location",
    filter_label_languages: "Language",
    filter_label_categories: "Category",
    filter_label_members: "Member",
    filter_label_teams: "Team",
    filter_all_dates: "All dates",
    filter_all_locations: "All locations",
    filter_all_languages: "All languages",
    filter_all_categories: "All categories",
    filter_all_members: "All members",
    filter_all_teams: "All teams",
    filterPropertyDetailsLabel: "Details",
    filterPropertyEmailLabel: "Email",
    filterPropertyPhoneLabel: "Phone",
    filterPropertyOperationalHoursLabel: "Operational hours"
  },
  globalWidgetsTranslations: {
    priceLabel: "Price",
    filtersLabel: "Filters",
    calendarLabel: "Calendar",
    priceFreeLabel: "Free",
    dayLabelPlural: "d",
    dayLabelSingular: "d",
    hourLabelPlural: "h",
    hourLabelSingular: "h",
    minuteLabelPlural: "m",
    minuteLabelSingular: "m",
    loadingLabel: "Loading",
    backLabel: "Back",
    closeLabel: "Close",
    nextLabel: "Next",
    previousLabel: "Previous",
    languageLabel: "Language",
    timezoneLabel: "Timezone",
    eventTimeLabel: "Event time",
    viewModeListLabel: "List",
    viewModeGridLabel: "Grid"
  },
  mainWidget: {
    openDialogButton: "Book event",
    eventsListTitle: "Events list",
    bundlesListTitle: "Bundles list",
    widgetEventsListSwitchLabel: "Events",
    widgetBundlesListSwitchLabel: "Bundles",
    bundleAddToCartButtonLabel: "Add to Cart",
    eventAddToCartButtonLabel: "Add to Cart",
    liveShoppingJoinButtonLabel: "Join",
    liveShoppingStartCountdown: "in",
    bundleEventsListTitle: "Included events",
    shareEventPanelTitle: "Share this event",
    searchEventPlaceholder: "Search",
    itemsCounterLabel: "items",
    singleEventItemsCounterLabel: "item",
    clearFiltersLabel: "clear",
    bookButtonLabel: "Book now",
    virtualAppointmentLabel: "Appointment",
    virtualEventLabel: "Virtual",
    inPersonEventLabel: "Event",
    webinarLabel: "Webinar",
    liveShoppingLabel: "Live Shopping",
    eventDetailsButtonLabel: "Details",
    eventDescriptionFieldLabel: "Description",
    todaySeparatorLabel: "Today",
    tomorrowSeparatorLabel: "Tomorrow",
    filtersStepLabel: "Filters",
    resultStypeLabel: "Result",
    goToFiltersResultButton: "Next: Result",
    labelForMonthWithoutEvents: "There are no events scheduled for this month",
    nextMonthButton: "Next",
    availableQuantitySuffix: "left",
    widgetHeaderLabel: "Events",
    hostFilterLabel: "Host",
    allDatesLabel: "All",
    quickDateToday: "Today",
    quickDateTomorrow: "Tomorrow",
    quickDateThisWeek: "This Week",
    quickDateWeekend: "Weekend",
    applyFiltersLabel: "Show results",
    showMoreEventsLabel: "+ ### More",
    summaryAvailableLabel: "available event sessions",
    summaryWaitlistLabel: "waitlist opportunities",
    recurringEventLabel: "Recurring",
    relatedEventsLabel: "Related events",
    addToCalendarLabel: "Add to calendar",
    copyLinkLabel: "Copy link",
    copiedLabel: "Copied",
    loadingErrorLabel: "Something went wrong. Please try again later."
  },
  onProductWidget: {
    selectTimeButton: "Select the Date and Time",
    selectDateAndTimeButton: "Select the Date and Time",
    addToCartButton: "Add To Cart",
    registerInWaitingList: "Join the Waiting List",
    eventSoldOut: "Sold out",
    appointmentSoldOut: "Sold out",
    remainingBookingsLabel: "Hurry! Only ### left in stock!",
    addToCartLabel: "Confirm",
    questionsFormTitle: "Questions Form",
    additionalMembersFormTitle: "Multi Booking",
    memberFormDescription: "Add Email Addresses for Additional Recipients",
    freeCheckoutNewslettersAgreement: "Click here to receive marketing emails and newsletters",
    termsOfUseAgreement: "By selecting this checkbox, you agree to our",
    termsOfUseAnd: "and",
    freeCheckoutCloseRegistrationButton: "Close",
    freeCheckoutInvalidEmailMessage: "Please enter a valid email address",
    freeCheckoutMandatoryRequiermentsMessageHeader: "Please fill in the form below with your email and name to complete your registration",
    freeRegistrationFormTitle: "Registration",
    freeRegistrationFormDescription: "Please fill in the form below with your email and name to complete your registration",
    fastRegistration: "Checkout",
    memberFormMember: "Additional Registrant",
    memberFormEmail: "Email",
    memberFormFirstName: "First Name",
    memberFormLastName: "Last Name",
    eventQuestionsFormTitle: "Event Questions Form",
    submitQuestionsForm: "Submit",
    mandatoryRequiermentsMessageHeader: "This field is mandatory",
    mandatoryRequiermentsMessage: "Please fill in this field",
    invalidEmailMessage: "Please enter a valid email address.",
    noAvailableSlots: "No appointment slots available at the moment",
    registrationCompletedMessageTitle: "Registration completed!",
    privacyPolicyLinkText: "Privacy Policy",
    termsOfUseLinkText: "Terms of Use",
    registrationCompletedMessageDescription: "You have successfully registered. A confirmation email has been sent to the provided email address. Please check your inbox.",
    waitingListNameLabel: "Name",
    waitingListEmailLabel: "Email",
    memberFormPrimaryBadge: "Primary contact",
    captchaRequiredMessage: "Please complete the captcha to continue",
    genericErrorMessage: "Something went wrong. Please try again."
  },
  liveShoppingWidget: {
    joinToCallButton: "Join",
    enterAdmittedUser: "Enter",
    joinUserWithEmailButton: "Join",
    usernameInputLabel: "Username",
    emailInputLabel: "Email",
    usernameInputPlaceholder: "john.doe",
    emailInputPlaceholder: "john.doe@acme.com",
    loginFormTitle: "Please enter your username and email to join the call",
    waitForConnectionMessage: "Please wait until the owner allows you in",
    reconnectionMessage: "Something has gone wrong, we are trying to reconnect you",
    waitForAdmitMessage: "Please wait, we are trying to connect you",
    connectionErrorMessage: "Please reload the page",
    productAddedToCartMessage: "The product has been added to the cart",
    emptyUsernameWarning: "Please enter your username",
    emptyEmailWarning: "Please enter your email",
    wrongEmailFormatWarning: "Please enter the correct email",
    audioRequirmentsIssue: "The system does not support VOIP, but you can join the audio by phone",
    screenRequirmentsIssue: "The screen is not compatible with the current web browser.",
    videoRequirmentsIssue: "The video is not compatible with the current web browser.",
    browserRequirmentsIssue: "Please update your browser"
  }
};
const defaultTranslationLanguages = ["zh-cn", "nl", "en", "fr", "de", "hi", "it", "ja", "ko", "no", "ru", "es", "sv"];
const languagesCodeName = {
  "zh-cn": "zh-CN",
  nl: "nl",
  en: "en-US",
  fr: "fr",
  de: "de",
  hi: "hi",
  it: "it",
  ja: "ja",
  ko: "ko",
  no: "no",
  ru: "ru",
  es: "es",
  sv: "sv"
};
const getTranslationsTpl = () => {
  const tpl = {};
  lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()(defaultTranslationLanguages, langCode => {
    tpl[langCode] = translationsKeysTpl;
  });
  return tpl;
};
const mergeTranslations = (recipientTranslations = {}, injectedTranslations = {}) => {
  const languagesForProcessing = Object.keys(recipientTranslations);
  const mergedTranslations = {};
  lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()(languagesForProcessing, langCode => {
    if (injectedTranslations[langCode] === undefined) {
      mergedTranslations[langCode] = translationsKeysTpl;
    } else {
      const langData = {};
      lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()(recipientTranslations[langCode], (sectionValue, sectionName) => {
        if (injectedTranslations[langCode][sectionName] === undefined) {
          langData[sectionName] = recipientTranslations[langCode][sectionName];
        } else {
          if (!langData[sectionName]) langData[sectionName] = {};
          const fieldsForProcessing = Object.keys(recipientTranslations[langCode][sectionName]);
          lodash_foreach__WEBPACK_IMPORTED_MODULE_0___default()({
            ...recipientTranslations[langCode][sectionName],
            ...injectedTranslations[langCode][sectionName]
          }, (fieldValue, fieldName) => {
            if (fieldsForProcessing.includes(fieldName)) {
              langData[sectionName][fieldName] = fieldValue;
            }
          });
        }
      });
      mergedTranslations[langCode] = langData;
    }
  });
  return mergedTranslations;
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

/***/ "./src/Components/Containers/ServiceCard.module.scss":
/*!***********************************************************!*\
  !*** ./src/Components/Containers/ServiceCard.module.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"account":"USWONii7bVaDONOtHpiW","avatar":"zhq_n7m0_pjgB9uBN_hr","accountTitle":"j27VhWuBckQLryhdS2G4","accountLabel":"gTGTZb2L8JOw5FyvsLGc","actions":"HX1oNN4zbTuccOuZpGN1","card":"wX2droKC7DFE_9lH749Q","top":"l8b1UAvROXK_2KuM1AYg","tile":"YXTpnnmL4jp_O_xXNgqQ","tileTint":"pALCyVgNY3VCEI_i_NoQ","tileRaised":"SwOes9LNiInJG_Gdnqm6","status":"GGDnnZAjbmpelt2rFm2s","statusOn":"M9bYaAeDpSAmtTAiz4EJ","statusInfo":"lY6auS3fKqwoAPyMibpL","statusWarn":"N7xbD4s41KYPLhN_TehO","dot":"dB6_0zflrL2FsOjnVrzg","dotOn":"MV052Esfi8nfn5h9iYfT","dotInfo":"nGZniuneRHuH_cERWon2","dotWarn":"YBwDHAEb0SH7OtPl1Dre","title":"n0dcy8dv7TTzt0Q02_Wa","description":"D_CoUgiiurTxKwVtsQYF","groove":"EYaNm3vF4EcmLOpPjLUb","foot":"aAHIsBf9399odl9mO82w","meta":"bHZhfkJ_IdCQEhF2JRYt","clickable":"OlnSPy4lNydTGrEmU_W3","dimmed":"EFQ3zqls3zpiRdoIVHQy"});

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

/***/ "./src/Components/Controls/NewTimePeriodControl.module.scss":
/*!******************************************************************!*\
  !*** ./src/Components/Controls/NewTimePeriodControl.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"period":"lB1GutKgUBATDEvY9o5q","night":"SdUI8xTvuziJ8g5dP2kl"});

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

/***/ }),

/***/ "./src/Components/Pages/SettingsPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/SettingsPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"wMPDiPzM79snEZZc2rd4","divider":"PWPGbavQraSkaWwcBC5M","grid":"FgScv5bgK3RePP3L2pXM","single":"DcEGnqK0XSL4j66fcgyA"});

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
//# sourceMappingURL=src_Components_Pages_SettingsPage_jsx.js.map?ver=56cd9ea4a1b340273bd9