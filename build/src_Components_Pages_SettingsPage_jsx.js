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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

// components/Settings/TranslationsSettings.jsx







const TranslationsSection = ({
  responsiveBlockStack,
  responsiveInput,
  getLangsSelectOptions,
  getDefaultWidgetLanguageName,
  handleDefaultLanguageChange,
  langForEdit,
  handleSelectLanguageforEdit,
  renderTranslations,
  onResetTranslations,
  resetting = false
}) => {
  const [confirmReset, setConfirmReset] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 0,
    cardsLayout: true,
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].rows,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Default translations",
      description: "Restore the bundled translations for all 12 languages and save them immediately.",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Reset all translations",
        type: "danger-secondary",
        disabled: resetting,
        onAction: () => setConfirmReset(true)
      })
    }), confirmReset && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "sm",
      title: "Reset all translations?",
      description: "This replaces custom translations in every language with the standard translations bundled with the plugin.",
      onClose: () => !resetting && setConfirmReset(false),
      footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: "Cancel",
          type: "secondary",
          disabled: resetting,
          onAction: () => setConfirmReset(false)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: resetting ? "Resetting…" : "Reset all translations",
          type: "danger",
          disabled: resetting,
          onAction: async () => {
            if (await onResetTranslations()) setConfirmReset(false);
          }
        })]
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        children: "Changes are saved for all languages. Your default widget language stays the same."
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Default language for widgets",
      description: "Translate text in widgets to any language",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Default language",
        options: getLangsSelectOptions().map(lang => ({
          value: lang.label,
          label: lang.label
        })),
        onChange: handleDefaultLanguageChange,
        value: getDefaultWidgetLanguageName()
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Language for translate",
      description: "Before choosing the default language, select one from the list. Then, edit the widget fields and save the changes",
      className: responsiveBlockStack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewSelectControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Language",
        options: getLangsSelectOptions().map(lang => ({
          value: lang.label,
          label: lang.label
        })),
        onChange: handleSelectLanguageforEdit,
        value: getLangsSelectOptions().map(lang => lang.label).find(label => label.startsWith(langForEdit))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Global Widgets Translations",
      className: responsiveBlockStack,
      children: renderTranslations()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Events Widget Translations",
      className: responsiveBlockStack,
      children: renderTranslations("mainWidget")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Filters Translations",
      className: responsiveBlockStack,
      children: renderTranslations("customFilters")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_AnnotatedSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "settings",
      title: "Registration Translations",
      className: responsiveBlockStack,
      children: renderTranslations("onProductWidget")
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationsSection);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.startcase */ "./node_modules/lodash.startcase/index.js");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_startcase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.capitalize */ "./node_modules/lodash.capitalize/index.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/BellIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ShoppingCartIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LanguageIcon.js");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SettingsPage.module.scss */ "./src/Components/Pages/SettingsPage.module.scss");
/* harmony import */ var _utilities_timezones__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/timezones */ "./src/utilities/timezones.js");
/* harmony import */ var _utilities_translations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/translations */ "./src/utilities/translations.js");
/* harmony import */ var _utilities_languages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/languages */ "./src/utilities/languages.js");
/* harmony import */ var _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utilities/numbers */ "./src/utilities/numbers.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Settings/SettingsSection */ "./src/Components/Pages/Settings/SettingsSection.jsx");
/* harmony import */ var _Settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Settings/GeneralSettings */ "./src/Components/Pages/Settings/GeneralSettings.jsx");
/* harmony import */ var _Settings_RemindersSettings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Settings/RemindersSettings */ "./src/Components/Pages/Settings/RemindersSettings.jsx");
/* harmony import */ var _Settings_CheckoutSettings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Settings/CheckoutSettings */ "./src/Components/Pages/Settings/CheckoutSettings.jsx");
/* harmony import */ var _Settings_TranslationsSection__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Settings/TranslationsSection */ "./src/Components/Pages/Settings/TranslationsSection.jsx");
/* harmony import */ var _Settings_WorkflowSettings__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Settings/WorkflowSettings */ "./src/Components/Pages/Settings/WorkflowSettings.jsx");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../CreateEvent/eventFormData */ "./src/Components/CreateEvent/eventFormData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
// SettingsPage.jsx - Refactored with card layout






















// Import new components









// A stored JSON column reaches us as a string, but a page that already parsed
// it writes the object back into the store — so both shapes have to be read.

const parseJsonObject = value => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  if (typeof value !== "string" || value.trim() === "") return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};

// Only an absent value is missing: 0 is a valid price, and `!value` handed a
// saved 0 straight back to the hardcoded default.
const isBlank = value => value === undefined || value === null || value === "";
const SettingsPage = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
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
  const stripeConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_15__.useServvStore)(s => s.stripeConnected);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_15__.useServvStore)(s => s.fetchSettings);
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
    if (/^ru(?:[-_]|$)/i.test(settings.widgets_default_language || "")) {
      settings.widgets_default_language = "en";
    }
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
    validatedSettings.settings = {
      ...newSettings.settings
    };
    validatedSettings.settings.widget_style_settings = parseJsonObject(newSettings.settings?.widget_style_settings);

    // Fill the gaps on the PARSED defaults. The old checks read
    // newSettings.settings.admin_dashboard, which is still the raw JSON
    // string, so every `?.default_*` on it was undefined and each saved value
    // was overwritten with the hardcoded one on every load.
    const dash = (0,_CreateEvent_eventFormData__WEBPACK_IMPORTED_MODULE_26__.readDefaults)(newSettings);
    if (isBlank(dash.default_timezone)) {
      dash.default_timezone = "America/Los_Angeles";
    }
    if (isBlank(dash.default_duration)) {
      dash.default_duration = 1;
    }
    if (isBlank(dash.default_start_time)) {
      dash.default_start_time = moment__WEBPACK_IMPORTED_MODULE_2___default()("10:00 am", "hh:mm a").format("hh:mm a");
    }
    if (isBlank(dash.default_price)) {
      dash.default_price = 10.0;
    }
    if (isBlank(dash.default_quantity)) {
      dash.default_quantity = 1;
    }
    if (isBlank(dash.default_event_type)) {
      dash.default_event_type = "offline";
    }
    validatedSettings.settings.admin_dashboard = dash;
    if (isBlank(newSettings.settings?.time_format_24_hours)) {
      validatedSettings.settings.time_format_24_hours = false;
    }
    if (!newSettings.currency || newSettings.currency.length === 0) {
      validatedSettings.currency = "sign";
    }
    // Read and written as settings.settings.hide_time_zone everywhere else;
    // the default used to land on the top level, where nothing looks for it.
    if (isBlank(newSettings.settings?.hide_time_zone)) {
      validatedSettings.settings.hide_time_zone = false;
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
    const translationTabs = [{
      label: "Translations",
      value: 6
    }];
    const planId = validatedSettings?.current_plan?.id;
    let tabs = [...baseTabs];
    if (planId) {
      if (!newSettings.is_wp_marketplace) {
        tabs.push(...translationTabs);
      }
    } else {
      tabs.push(...translationTabs);
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
  const saveSettings = async (nextSettings = settings, message = "Settings saved successfully.") => {
    if (!nextSettings?.settings) return false;
    const savedSettings = {
      ...(0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.coerceNumbers)(nextSettings, {
        first_reminder_hours: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger,
        second_reminder_hours: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger,
        members_reminder_hours: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger
      }),
      settings: {
        ...nextSettings.settings,
        admin_dashboard: (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.coerceNumbers)(nextSettings.settings.admin_dashboard, {
          default_price: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toNumber,
          default_quantity: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger
        }),
        widget_style_settings: (0,_utilities_translations__WEBPACK_IMPORTED_MODULE_12__.prepareWidgetTranslations)((0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.coerceNumbers)(nextSettings.settings.widget_style_settings, {
          ew_card_description_display_words_limit: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger,
          ew_list_item_description_display_words_limit: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger,
          ew_events_list_page_size_default: _utilities_numbers__WEBPACK_IMPORTED_MODULE_14__.toInteger
        }))
      }
    };
    setLoading(true);
    try {
      const saveSettingsResponse = await (0,_utilities_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"])({
        method: "PUT",
        url: "/wp-json/servv-plugin/v1/shop/settings",
        headers: {
          "X-WP-Nonce": servvData.nonce
        },
        data: {
          ...savedSettings,
          settings: {
            ...savedSettings.settings,
            admin_dashboard: JSON.stringify(savedSettings.settings.admin_dashboard),
            widget_style_settings: JSON.stringify(savedSettings.settings.widget_style_settings)
          }
        }
      });
      if (saveSettingsResponse?.status !== 200 || saveSettingsResponse.data?.error || saveSettingsResponse.data?.errorCode || saveSettingsResponse.data?.success === false) {
        throw new Error("Unable to save settings.");
      }
      setSettings(savedSettings);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(message);
      await fetchSettings();
      return true;
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.response?.data?.message || error.message || "Unable to save settings.");
      return false;
    } finally {
      setLoading(false);
    }
  };
  const resetTranslations = async () => {
    if (loading || !settings?.settings) return false;
    return saveSettings({
      ...settings,
      settings: {
        ...settings.settings,
        widget_style_settings: (0,_utilities_translations__WEBPACK_IMPORTED_MODULE_12__.prepareWidgetTranslations)(settings.settings.widget_style_settings, true)
      }
    }, "All translations reset to defaults.");
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
      if (settings?.current_plan && settings.current_plan.id !== 1) {
        await getZoomAccount();
        await getStripeAccount();
      }
      setLoading(false);
    } else {
      setLoading(true);
      getSettings();
      getN8nSettings();
      if (settings?.current_plan && settings.current_plan.id !== 1) {
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
    if (newVal === "" || Number(newVal) <= settings.free_registrants_limit) currentSettings.settings.admin_dashboard.default_quantity = newVal;
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
    currentSettings.first_reminder_hours = newVal;
    setSettings(currentSettings);
  };
  const handleSecondReminderHoursChange = newVal => {
    let currentSettings = {
      ...settings
    };
    currentSettings.second_reminder_hours = newVal;
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

  // Number inputs are left as typed — including the empty string while the
  // field is being cleared — and coerced in saveSettings.
  const handleDescriptionLengthChange = (view, length) => {
    let currentSettings = {
      ...settings
    };
    currentSettings.settings.widget_style_settings[view] = length;
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
    return filters.map((filter, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
    return Object.keys(translationSection).map((translation, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_18__["default"], {
      gap: 1,
      className: responsiveBlockStack,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("span", {
        className: "font-semibold",
        children: getFieldLabel(translation)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_17__["default"], {
          width: "100%",
          value: translationSection[translation],
          type: "text",
          align: "left",
          onChange: newVal => handleTranslationChange(section, langCode, translation, newVal)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("span", {
          className: "text-sm text-gray-500",
          children: langCode
        })]
      })]
    }, index));
  };
  const isBillingPlanRestriction = settings?.current_plan && settings.current_plan.id === 1;
  // console.log(loading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: false,
    withBackground: true,
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].page,
      children: [!activeSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_6__["default"], {
          breadcrumbs: [{
            label: t("Dashboard"),
            to: "/dashboard"
          }, {
            label: t("Settings")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
          eyebrow: "WP Super Events by ServvAI",
          title: t("Settings"),
          description: "Set defaults once so every new event starts right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)("div", {
            className: _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].divider
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
        className: activeSection ? _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].single : _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].grid,
        children: [(!activeSection || activeSection === "general") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_19__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_29__["default"],
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
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
        }), !activeSection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_19__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_30__["default"],
          title: "Email templates",
          description: "Customize booking confirmations, reminders, and event updates",
          statusText: "Manage notification email content",
          status: "available",
          sectionId: "email-templates",
          activeSection: activeSection,
          direct: true,
          onView: () => navigate("/templates")
        }), (!activeSection || activeSection === "reminders") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_19__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_31__["default"],
          title: "Reminders",
          description: "Email notifications and reminder settings",
          statusText: settings?.settings?.disable_emails === false ? "Reminders enabled" : "Reminders disabled",
          status: settings?.settings?.disable_emails === false ? "available" : "unavailable",
          onSave: saveAllSettings,
          onCancel: getSettingsInfo,
          sectionId: "reminders",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_RemindersSettings__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
        }), (!activeSection || activeSection === "checkout") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_19__["default"], {
          icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_32__["default"],
          title: "Checkout",
          description: "Fast checkout and marketing consent settings",
          statusText: settings?.settings?.free_events_skip_checkout ? "Fast checkout enabled" : "Standard checkout",
          status: "available",
          onSave: saveAllSettings,
          onCancel: getSettingsInfo,
          sectionId: "checkout",
          activeSection: activeSection,
          setActiveSection: setActiveSection,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_CheckoutSettings__WEBPACK_IMPORTED_MODULE_22__["default"], {
              settings: settings,
              handleFreeCheckoutChange: handleFreeCheckoutChange,
              handleSkipCaptchaChange: handleSkipCaptchaChange,
              handleMarketingConsentChange: handleMarketingConsentChange
            })
          })
        }), (!activeSection || activeSection === "translations") && settings && settings.is_wp_marketplace === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_SettingsSection__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_25__["default"], {
            isLoading: loading,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx)(_Settings_TranslationsSection__WEBPACK_IMPORTED_MODULE_23__["default"], {
              responsiveBlockStack: responsiveBlockStack,
              responsiveInput: responsiveInput,
              getLangsSelectOptions: getLangsSelectOptions,
              getDefaultWidgetLanguageName: getDefaultWidgetLanguageName,
              handleDefaultLanguageChange: handleDefaultLanguageChange,
              langForEdit: langForEdit,
              handleSelectLanguageforEdit: handleSelectLanguageforEdit,
              renderTranslations: renderTranslations,
              onResetTranslations: resetTranslations,
              resetting: loading
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
/* harmony export */   defaultTranslationLanguages: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.defaultTranslationLanguages),
/* harmony export */   filterSavedTranslations: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.filterSavedTranslations),
/* harmony export */   getTranslationsTpl: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.getTranslationsTpl),
/* harmony export */   languagesCodeName: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.languagesCodeName),
/* harmony export */   mergeTranslations: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.mergeTranslations),
/* harmony export */   prepareWidgetTranslations: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.prepareWidgetTranslations),
/* harmony export */   translationsKeysTpl: () => (/* reexport safe */ _translations_widget__WEBPACK_IMPORTED_MODULE_0__.translationsKeysTpl)
/* harmony export */ });
/* harmony import */ var _translations_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../translations/widget */ "./translations/widget/index.js");


/***/ }),

/***/ "./translations/widget/index.js":
/*!**************************************!*\
  !*** ./translations/widget/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTranslationLanguages: () => (/* binding */ defaultTranslationLanguages),
/* harmony export */   filterSavedTranslations: () => (/* binding */ filterSavedTranslations),
/* harmony export */   getTranslationsTpl: () => (/* binding */ getTranslationsTpl),
/* harmony export */   languagesCodeName: () => (/* binding */ languagesCodeName),
/* harmony export */   mergeTranslations: () => (/* binding */ mergeTranslations),
/* harmony export */   prepareWidgetTranslations: () => (/* binding */ prepareWidgetTranslations),
/* harmony export */   translationsKeysTpl: () => (/* binding */ translationsKeysTpl)
/* harmony export */ });
/* harmony import */ var _zh_cn_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zh-cn.json */ "./translations/widget/zh-cn.json");
/* harmony import */ var _nl_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nl.json */ "./translations/widget/nl.json");
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en.json */ "./translations/widget/en.json");
/* harmony import */ var _fr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fr.json */ "./translations/widget/fr.json");
/* harmony import */ var _de_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./de.json */ "./translations/widget/de.json");
/* harmony import */ var _hi_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hi.json */ "./translations/widget/hi.json");
/* harmony import */ var _it_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./it.json */ "./translations/widget/it.json");
/* harmony import */ var _ja_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ja.json */ "./translations/widget/ja.json");
/* harmony import */ var _ko_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ko.json */ "./translations/widget/ko.json");
/* harmony import */ var _no_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./no.json */ "./translations/widget/no.json");
/* harmony import */ var _es_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./es.json */ "./translations/widget/es.json");
/* harmony import */ var _sv_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sv.json */ "./translations/widget/sv.json");












const defaults = {
  "zh-cn": _zh_cn_json__WEBPACK_IMPORTED_MODULE_0__,
  nl: _nl_json__WEBPACK_IMPORTED_MODULE_1__,
  en: _en_json__WEBPACK_IMPORTED_MODULE_2__,
  fr: _fr_json__WEBPACK_IMPORTED_MODULE_3__,
  de: _de_json__WEBPACK_IMPORTED_MODULE_4__,
  hi: _hi_json__WEBPACK_IMPORTED_MODULE_5__,
  it: _it_json__WEBPACK_IMPORTED_MODULE_6__,
  ja: _ja_json__WEBPACK_IMPORTED_MODULE_7__,
  ko: _ko_json__WEBPACK_IMPORTED_MODULE_8__,
  no: _no_json__WEBPACK_IMPORTED_MODULE_9__,
  es: _es_json__WEBPACK_IMPORTED_MODULE_10__,
  sv: _sv_json__WEBPACK_IMPORTED_MODULE_11__
};
const clone = value => JSON.parse(JSON.stringify(value));
const objectOf = value => value && typeof value === "object" && !Array.isArray(value) ? value : {};
const translationsKeysTpl = clone(_en_json__WEBPACK_IMPORTED_MODULE_2__);
const defaultTranslationLanguages = Object.keys(defaults);
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
  es: "es",
  sv: "sv"
};

// Each request gets independent editable dictionaries, never references to the
// JSON modules or another language's values.
const getTranslationsTpl = () => clone(defaults);
const filterSavedTranslations = value => Object.fromEntries(Object.entries(objectOf(value)).filter(([locale]) => !/^ru(?:[-_]|$)/i.test(locale.trim())));
const mergeTranslations = (recipientTranslations = {}, injectedTranslations = {}) => {
  const overrides = objectOf(injectedTranslations);
  const merged = {};
  for (const [locale, sections] of Object.entries(objectOf(recipientTranslations))) {
    merged[locale] = {};
    const saved = objectOf(overrides[locale]);
    for (const [section, fields] of Object.entries(objectOf(sections))) {
      merged[locale][section] = {};
      const injected = objectOf(saved[section]);
      for (const [key, value] of Object.entries(objectOf(fields))) {
        merged[locale][section][key] = typeof injected[key] === "string" ? injected[key] : value;
      }
    }
  }
  return merged;
};
const prepareWidgetTranslations = (widgetSettings, reset = false) => {
  const style = objectOf(widgetSettings);
  const saved = filterSavedTranslations(style.translations);
  return {
    ...style,
    ...(/^ru(?:[-_]|$)/i.test(style.widgets_default_language || "") ? {
      widgets_default_language: "en"
    } : {}),
    translations: reset ? getTranslationsTpl() : {
      ...saved,
      ...mergeTranslations(getTranslationsTpl(), saved)
    }
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

/***/ }),

/***/ "./translations/widget/de.json":
/*!*************************************!*\
  !*** ./translations/widget/de.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Datum","filter_label_locations":"Ort","filter_label_languages":"Sprache","filter_label_categories":"Kategorie","filter_label_members":"Mitglied","filter_label_teams":"Team","filter_all_dates":"Alle Termine","filter_all_locations":"Alle Orte","filter_all_languages":"Alle Sprachen","filter_all_categories":"Alle Kategorien","filter_all_members":"Alle Mitglieder","filter_all_teams":"Alle Teams","filterPropertyDetailsLabel":"Details","filterPropertyEmailLabel":"E-Mail","filterPropertyPhoneLabel":"Telefon","filterPropertyOperationalHoursLabel":"Öffnungszeiten"},"globalWidgetsTranslations":{"priceLabel":"Preis","filtersLabel":"Filter","calendarLabel":"Kalender","priceFreeLabel":"Kostenlos","dayLabelPlural":"T","dayLabelSingular":"T","hourLabelPlural":"Std.","hourLabelSingular":"Std.","minuteLabelPlural":"Min.","minuteLabelSingular":"Min.","loadingLabel":"Wird geladen","backLabel":"Zurück","closeLabel":"Schließen","nextLabel":"Weiter","previousLabel":"Zurück","languageLabel":"Sprache","timezoneLabel":"Zeitzone","eventTimeLabel":"Veranstaltungszeit","viewModeListLabel":"Liste","viewModeGridLabel":"Raster"},"mainWidget":{"openDialogButton":"Veranstaltung buchen","eventsListTitle":"Veranstaltungsliste","bundlesListTitle":"Paketliste","widgetEventsListSwitchLabel":"Veranstaltungen","widgetBundlesListSwitchLabel":"Pakete","bundleAddToCartButtonLabel":"In den Warenkorb","eventAddToCartButtonLabel":"In den Warenkorb","liveShoppingJoinButtonLabel":"Teilnehmen","liveShoppingStartCountdown":"in","bundleEventsListTitle":"Enthaltene Veranstaltungen","shareEventPanelTitle":"Diese Veranstaltung teilen","searchEventPlaceholder":"Suchen","itemsCounterLabel":"Einträge","singleEventItemsCounterLabel":"Eintrag","clearFiltersLabel":"löschen","bookButtonLabel":"Jetzt buchen","virtualAppointmentLabel":"Termin","virtualEventLabel":"Virtuell","inPersonEventLabel":"Veranstaltung","webinarLabel":"Webinar","liveShoppingLabel":"Live-Shopping","eventDetailsButtonLabel":"Details","eventDescriptionFieldLabel":"Beschreibung","todaySeparatorLabel":"Heute","tomorrowSeparatorLabel":"Morgen","filtersStepLabel":"Filter","resultStypeLabel":"Ergebnis","goToFiltersResultButton":"Weiter: Ergebnis","labelForMonthWithoutEvents":"Für diesen Monat sind keine Veranstaltungen geplant","nextMonthButton":"Weiter","availableQuantitySuffix":"verfügbar","widgetHeaderLabel":"Veranstaltungen","hostFilterLabel":"Gastgeber","allDatesLabel":"Alle","quickDateToday":"Heute","quickDateTomorrow":"Morgen","quickDateThisWeek":"Diese Woche","quickDateWeekend":"Wochenende","applyFiltersLabel":"Ergebnisse anzeigen","showMoreEventsLabel":"+ ### weitere","summaryAvailableLabel":"verfügbare Veranstaltungstermine","summaryWaitlistLabel":"Wartelistenmöglichkeiten","recurringEventLabel":"Wiederkehrend","relatedEventsLabel":"Ähnliche Veranstaltungen","addToCalendarLabel":"Zum Kalender hinzufügen","copyLinkLabel":"Link kopieren","copiedLabel":"Kopiert","loadingErrorLabel":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."},"onProductWidget":{"selectTimeButton":"Datum und Uhrzeit auswählen","selectDateAndTimeButton":"Datum und Uhrzeit auswählen","addToCartButton":"In den Warenkorb","registerInWaitingList":"Auf die Warteliste setzen","eventSoldOut":"Ausgebucht","appointmentSoldOut":"Ausgebucht","remainingBookingsLabel":"Nur noch ### Plätze!","addToCartLabel":"Bestätigen","questionsFormTitle":"Frageformular","additionalMembersFormTitle":"Mehrfachbuchung","memberFormDescription":"E-Mail-Adressen für weitere Empfänger hinzufügen","freeCheckoutNewslettersAgreement":"Klicken Sie hier, um Werbe-E-Mails und Newsletter zu erhalten","termsOfUseAgreement":"Durch Aktivieren dieses Kontrollkästchens stimmen Sie unseren folgenden Richtlinien zu:","termsOfUseAnd":"und","freeCheckoutCloseRegistrationButton":"Schließen","freeCheckoutInvalidEmailMessage":"Bitte geben Sie eine gültige E-Mail-Adresse ein","freeCheckoutMandatoryRequiermentsMessageHeader":"Bitte füllen Sie das folgende Formular mit Ihrer E-Mail-Adresse und Ihrem Namen aus, um die Anmeldung abzuschließen","freeRegistrationFormTitle":"Anmeldung","freeRegistrationFormDescription":"Bitte füllen Sie das folgende Formular mit Ihrer E-Mail-Adresse und Ihrem Namen aus, um die Anmeldung abzuschließen","fastRegistration":"Zur Kasse","memberFormMember":"Angemeldete Person","memberFormEmail":"E-Mail","memberFormFirstName":"Vorname","memberFormLastName":"Nachname","eventQuestionsFormTitle":"Frageformular zur Veranstaltung","submitQuestionsForm":"Absenden","mandatoryRequiermentsMessageHeader":"Dieses Feld ist erforderlich","mandatoryRequiermentsMessage":"Bitte füllen Sie dieses Feld aus","invalidEmailMessage":"Bitte geben Sie eine gültige E-Mail-Adresse ein.","noAvailableSlots":"Derzeit sind keine Termine verfügbar","registrationCompletedMessageTitle":"Anmeldung abgeschlossen!","privacyPolicyLinkText":"Datenschutzerklärung","termsOfUseLinkText":"Nutzungsbedingungen","registrationCompletedMessageDescription":"Sie haben sich erfolgreich angemeldet. Eine Bestätigungs-E-Mail wurde an die angegebene Adresse gesendet. Bitte prüfen Sie Ihren Posteingang.","waitingListNameLabel":"Name","waitingListEmailLabel":"E-Mail","memberFormPrimaryBadge":"Hauptkontakt","captchaRequiredMessage":"Bitte bestätigen Sie das CAPTCHA, um fortzufahren","genericErrorMessage":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."},"liveShoppingWidget":{"joinToCallButton":"Teilnehmen","enterAdmittedUser":"Eintreten","joinUserWithEmailButton":"Teilnehmen","usernameInputLabel":"Benutzername","emailInputLabel":"E-Mail","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Bitte geben Sie Ihren Benutzernamen und Ihre E-Mail-Adresse ein, um am Gespräch teilzunehmen","waitForConnectionMessage":"Bitte warten Sie, bis der Gastgeber Sie hereinlässt","reconnectionMessage":"Ein Fehler ist aufgetreten. Wir versuchen, Sie erneut zu verbinden","waitForAdmitMessage":"Bitte warten Sie, wir versuchen, Sie zu verbinden","connectionErrorMessage":"Bitte laden Sie die Seite neu","productAddedToCartMessage":"Das Produkt wurde dem Warenkorb hinzugefügt","emptyUsernameWarning":"Bitte geben Sie Ihren Benutzernamen ein","emptyEmailWarning":"Bitte geben Sie Ihre E-Mail-Adresse ein","wrongEmailFormatWarning":"Bitte geben Sie eine gültige E-Mail-Adresse ein","audioRequirmentsIssue":"Das System unterstützt keine VoIP-Verbindung, Sie können jedoch telefonisch teilnehmen","screenRequirmentsIssue":"Die Bildschirmfreigabe ist mit diesem Browser nicht kompatibel.","videoRequirmentsIssue":"Die Videoübertragung ist mit diesem Browser nicht kompatibel.","browserRequirmentsIssue":"Bitte aktualisieren Sie Ihren Browser"}}');

/***/ }),

/***/ "./translations/widget/en.json":
/*!*************************************!*\
  !*** ./translations/widget/en.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Dates","filter_label_locations":"Location","filter_label_languages":"Language","filter_label_categories":"Category","filter_label_members":"Member","filter_label_teams":"Team","filter_all_dates":"All dates","filter_all_locations":"All locations","filter_all_languages":"All languages","filter_all_categories":"All categories","filter_all_members":"All members","filter_all_teams":"All teams","filterPropertyDetailsLabel":"Details","filterPropertyEmailLabel":"Email","filterPropertyPhoneLabel":"Phone","filterPropertyOperationalHoursLabel":"Operational hours"},"globalWidgetsTranslations":{"priceLabel":"Price","filtersLabel":"Filters","calendarLabel":"Calendar","priceFreeLabel":"Free","dayLabelPlural":"d","dayLabelSingular":"d","hourLabelPlural":"h","hourLabelSingular":"h","minuteLabelPlural":"m","minuteLabelSingular":"m","loadingLabel":"Loading","backLabel":"Back","closeLabel":"Close","nextLabel":"Next","previousLabel":"Previous","languageLabel":"Language","timezoneLabel":"Timezone","eventTimeLabel":"Event time","viewModeListLabel":"List","viewModeGridLabel":"Grid"},"mainWidget":{"openDialogButton":"Book event","eventsListTitle":"Events list","bundlesListTitle":"Bundles list","widgetEventsListSwitchLabel":"Events","widgetBundlesListSwitchLabel":"Bundles","bundleAddToCartButtonLabel":"Add to Cart","eventAddToCartButtonLabel":"Add to Cart","liveShoppingJoinButtonLabel":"Join","liveShoppingStartCountdown":"in","bundleEventsListTitle":"Included events","shareEventPanelTitle":"Share this event","searchEventPlaceholder":"Search","itemsCounterLabel":"items","singleEventItemsCounterLabel":"item","clearFiltersLabel":"clear","bookButtonLabel":"Book now","virtualAppointmentLabel":"Appointment","virtualEventLabel":"Virtual","inPersonEventLabel":"Event","webinarLabel":"Webinar","liveShoppingLabel":"Live Shopping","eventDetailsButtonLabel":"Details","eventDescriptionFieldLabel":"Description","todaySeparatorLabel":"Today","tomorrowSeparatorLabel":"Tomorrow","filtersStepLabel":"Filters","resultStypeLabel":"Result","goToFiltersResultButton":"Next: Result","labelForMonthWithoutEvents":"There are no events scheduled for this month","nextMonthButton":"Next","availableQuantitySuffix":"left","widgetHeaderLabel":"Events","hostFilterLabel":"Host","allDatesLabel":"All","quickDateToday":"Today","quickDateTomorrow":"Tomorrow","quickDateThisWeek":"This Week","quickDateWeekend":"Weekend","applyFiltersLabel":"Show results","showMoreEventsLabel":"+ ### More","summaryAvailableLabel":"available event sessions","summaryWaitlistLabel":"waitlist opportunities","recurringEventLabel":"Recurring","relatedEventsLabel":"Related events","addToCalendarLabel":"Add to calendar","copyLinkLabel":"Copy link","copiedLabel":"Copied","loadingErrorLabel":"Something went wrong. Please try again later."},"onProductWidget":{"selectTimeButton":"Select the Date and Time","selectDateAndTimeButton":"Select the Date and Time","addToCartButton":"Add To Cart","registerInWaitingList":"Join the Waiting List","eventSoldOut":"Sold out","appointmentSoldOut":"Sold out","remainingBookingsLabel":"Only ### left!","addToCartLabel":"Confirm","questionsFormTitle":"Questions Form","additionalMembersFormTitle":"Multi Booking","memberFormDescription":"Add Email Addresses for Additional Recipients","freeCheckoutNewslettersAgreement":"Click here to receive marketing emails and newsletters","termsOfUseAgreement":"By selecting this checkbox, you agree to our","termsOfUseAnd":"and","freeCheckoutCloseRegistrationButton":"Close","freeCheckoutInvalidEmailMessage":"Please enter a valid email address","freeCheckoutMandatoryRequiermentsMessageHeader":"Please fill in the form below with your email and name to complete your registration","freeRegistrationFormTitle":"Registration","freeRegistrationFormDescription":"Please fill in the form below with your email and name to complete your registration","fastRegistration":"Checkout","memberFormMember":"Registrant","memberFormEmail":"Email","memberFormFirstName":"First Name","memberFormLastName":"Last Name","eventQuestionsFormTitle":"Event Questions Form","submitQuestionsForm":"Submit","mandatoryRequiermentsMessageHeader":"This field is mandatory","mandatoryRequiermentsMessage":"Please fill in this field","invalidEmailMessage":"Please enter a valid email address.","noAvailableSlots":"No appointment slots available at the moment","registrationCompletedMessageTitle":"Registration completed!","privacyPolicyLinkText":"Privacy Policy","termsOfUseLinkText":"Terms of Use","registrationCompletedMessageDescription":"You have successfully registered. A confirmation email has been sent to the provided email address. Please check your inbox.","waitingListNameLabel":"Name","waitingListEmailLabel":"Email","memberFormPrimaryBadge":"Primary contact","captchaRequiredMessage":"Please complete the captcha to continue","genericErrorMessage":"Something went wrong. Please try again."},"liveShoppingWidget":{"joinToCallButton":"Join","enterAdmittedUser":"Enter","joinUserWithEmailButton":"Join","usernameInputLabel":"Username","emailInputLabel":"Email","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Please enter your username and email to join the call","waitForConnectionMessage":"Please wait until the owner allows you in","reconnectionMessage":"Something has gone wrong, we are trying to reconnect you","waitForAdmitMessage":"Please wait, we are trying to connect you","connectionErrorMessage":"Please reload the page","productAddedToCartMessage":"The product has been added to the cart","emptyUsernameWarning":"Please enter your username","emptyEmailWarning":"Please enter your email","wrongEmailFormatWarning":"Please enter the correct email","audioRequirmentsIssue":"The system does not support VOIP, but you can join the audio by phone","screenRequirmentsIssue":"The screen is not compatible with the current web browser.","videoRequirmentsIssue":"The video is not compatible with the current web browser.","browserRequirmentsIssue":"Please update your browser"}}');

/***/ }),

/***/ "./translations/widget/es.json":
/*!*************************************!*\
  !*** ./translations/widget/es.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Fechas","filter_label_locations":"Ubicación","filter_label_languages":"Idioma","filter_label_categories":"Categoría","filter_label_members":"Miembro","filter_label_teams":"Equipo","filter_all_dates":"Todas las fechas","filter_all_locations":"Todas las ubicaciones","filter_all_languages":"Todos los idiomas","filter_all_categories":"Todas las categorías","filter_all_members":"Todos los miembros","filter_all_teams":"Todos los equipos","filterPropertyDetailsLabel":"Detalles","filterPropertyEmailLabel":"Correo electrónico","filterPropertyPhoneLabel":"Teléfono","filterPropertyOperationalHoursLabel":"Horario de atención"},"globalWidgetsTranslations":{"priceLabel":"Precio","filtersLabel":"Filtros","calendarLabel":"Calendario","priceFreeLabel":"Gratis","dayLabelPlural":"d","dayLabelSingular":"d","hourLabelPlural":"h","hourLabelSingular":"h","minuteLabelPlural":"min","minuteLabelSingular":"min","loadingLabel":"Cargando","backLabel":"Volver","closeLabel":"Cerrar","nextLabel":"Siguiente","previousLabel":"Anterior","languageLabel":"Idioma","timezoneLabel":"Zona horaria","eventTimeLabel":"Hora del evento","viewModeListLabel":"Lista","viewModeGridLabel":"Cuadrícula"},"mainWidget":{"openDialogButton":"Reservar evento","eventsListTitle":"Lista de eventos","bundlesListTitle":"Lista de paquetes","widgetEventsListSwitchLabel":"Eventos","widgetBundlesListSwitchLabel":"Paquetes","bundleAddToCartButtonLabel":"Añadir al carrito","eventAddToCartButtonLabel":"Añadir al carrito","liveShoppingJoinButtonLabel":"Unirse","liveShoppingStartCountdown":"en","bundleEventsListTitle":"Eventos incluidos","shareEventPanelTitle":"Compartir este evento","searchEventPlaceholder":"Buscar","itemsCounterLabel":"elementos","singleEventItemsCounterLabel":"elemento","clearFiltersLabel":"borrar","bookButtonLabel":"Reservar ahora","virtualAppointmentLabel":"Cita","virtualEventLabel":"Virtual","inPersonEventLabel":"Evento","webinarLabel":"Seminario web","liveShoppingLabel":"Compras en directo","eventDetailsButtonLabel":"Detalles","eventDescriptionFieldLabel":"Descripción","todaySeparatorLabel":"Hoy","tomorrowSeparatorLabel":"Mañana","filtersStepLabel":"Filtros","resultStypeLabel":"Resultado","goToFiltersResultButton":"Siguiente: Resultado","labelForMonthWithoutEvents":"No hay eventos programados para este mes","nextMonthButton":"Siguiente","availableQuantitySuffix":"disponibles","widgetHeaderLabel":"Eventos","hostFilterLabel":"Organizador","allDatesLabel":"Todas","quickDateToday":"Hoy","quickDateTomorrow":"Mañana","quickDateThisWeek":"Esta semana","quickDateWeekend":"Fin de semana","applyFiltersLabel":"Mostrar resultados","showMoreEventsLabel":"+ ### más","summaryAvailableLabel":"sesiones de eventos disponibles","summaryWaitlistLabel":"opciones de lista de espera","recurringEventLabel":"Recurrente","relatedEventsLabel":"Eventos relacionados","addToCalendarLabel":"Añadir al calendario","copyLinkLabel":"Copiar enlace","copiedLabel":"Copiado","loadingErrorLabel":"Se ha producido un error. Vuelve a intentarlo más tarde."},"onProductWidget":{"selectTimeButton":"Seleccionar fecha y hora","selectDateAndTimeButton":"Seleccionar fecha y hora","addToCartButton":"Añadir al carrito","registerInWaitingList":"Unirse a la lista de espera","eventSoldOut":"Agotado","appointmentSoldOut":"Agotado","remainingBookingsLabel":"¡Solo quedan ### plazas!","addToCartLabel":"Confirmar","questionsFormTitle":"Formulario de preguntas","additionalMembersFormTitle":"Reserva múltiple","memberFormDescription":"Añadir direcciones de correo de destinatarios adicionales","freeCheckoutNewslettersAgreement":"Haz clic aquí para recibir correos promocionales y boletines","termsOfUseAgreement":"Al marcar esta casilla, aceptas:","termsOfUseAnd":"y","freeCheckoutCloseRegistrationButton":"Cerrar","freeCheckoutInvalidEmailMessage":"Introduce una dirección de correo electrónico válida","freeCheckoutMandatoryRequiermentsMessageHeader":"Rellena el siguiente formulario con tu correo electrónico y tu nombre para completar el registro","freeRegistrationFormTitle":"Registro","freeRegistrationFormDescription":"Rellena el siguiente formulario con tu correo electrónico y tu nombre para completar el registro","fastRegistration":"Finalizar compra","memberFormMember":"Persona inscrita","memberFormEmail":"Correo electrónico","memberFormFirstName":"Nombre","memberFormLastName":"Apellidos","eventQuestionsFormTitle":"Formulario de preguntas del evento","submitQuestionsForm":"Enviar","mandatoryRequiermentsMessageHeader":"Este campo es obligatorio","mandatoryRequiermentsMessage":"Rellena este campo","invalidEmailMessage":"Introduce una dirección de correo electrónico válida.","noAvailableSlots":"No hay citas disponibles en este momento","registrationCompletedMessageTitle":"¡Registro completado!","privacyPolicyLinkText":"Política de privacidad","termsOfUseLinkText":"Condiciones de uso","registrationCompletedMessageDescription":"Te has registrado correctamente. Se ha enviado un correo de confirmación a la dirección indicada. Revisa tu bandeja de entrada.","waitingListNameLabel":"Nombre","waitingListEmailLabel":"Correo electrónico","memberFormPrimaryBadge":"Contacto principal","captchaRequiredMessage":"Completa el CAPTCHA para continuar","genericErrorMessage":"Se ha producido un error. Vuelve a intentarlo."},"liveShoppingWidget":{"joinToCallButton":"Unirse","enterAdmittedUser":"Entrar","joinUserWithEmailButton":"Unirse","usernameInputLabel":"Nombre de usuario","emailInputLabel":"Correo electrónico","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Introduce tu nombre de usuario y tu correo electrónico para unirte a la llamada","waitForConnectionMessage":"Espera a que el organizador te permita entrar","reconnectionMessage":"Se ha producido un error. Estamos intentando volver a conectarte","waitForAdmitMessage":"Espera, estamos intentando conectarte","connectionErrorMessage":"Vuelve a cargar la página","productAddedToCartMessage":"El producto se ha añadido al carrito","emptyUsernameWarning":"Introduce tu nombre de usuario","emptyEmailWarning":"Introduce tu correo electrónico","wrongEmailFormatWarning":"Introduce una dirección de correo electrónico válida","audioRequirmentsIssue":"El sistema no admite VoIP, pero puedes participar por teléfono","screenRequirmentsIssue":"La función de compartir pantalla no es compatible con este navegador.","videoRequirmentsIssue":"El vídeo no es compatible con este navegador.","browserRequirmentsIssue":"Actualiza tu navegador"}}');

/***/ }),

/***/ "./translations/widget/fr.json":
/*!*************************************!*\
  !*** ./translations/widget/fr.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Dates","filter_label_locations":"Lieu","filter_label_languages":"Langue","filter_label_categories":"Catégorie","filter_label_members":"Membre","filter_label_teams":"Équipe","filter_all_dates":"Toutes les dates","filter_all_locations":"Tous les lieux","filter_all_languages":"Toutes les langues","filter_all_categories":"Toutes les catégories","filter_all_members":"Tous les membres","filter_all_teams":"Toutes les équipes","filterPropertyDetailsLabel":"Détails","filterPropertyEmailLabel":"E-mail","filterPropertyPhoneLabel":"Téléphone","filterPropertyOperationalHoursLabel":"Horaires d’ouverture"},"globalWidgetsTranslations":{"priceLabel":"Prix","filtersLabel":"Filtres","calendarLabel":"Calendrier","priceFreeLabel":"Gratuit","dayLabelPlural":"j","dayLabelSingular":"j","hourLabelPlural":"h","hourLabelSingular":"h","minuteLabelPlural":"min","minuteLabelSingular":"min","loadingLabel":"Chargement","backLabel":"Retour","closeLabel":"Fermer","nextLabel":"Suivant","previousLabel":"Précédent","languageLabel":"Langue","timezoneLabel":"Fuseau horaire","eventTimeLabel":"Heure de l’événement","viewModeListLabel":"Liste","viewModeGridLabel":"Grille"},"mainWidget":{"openDialogButton":"Réserver un événement","eventsListTitle":"Liste des événements","bundlesListTitle":"Liste des offres groupées","widgetEventsListSwitchLabel":"Événements","widgetBundlesListSwitchLabel":"Offres groupées","bundleAddToCartButtonLabel":"Ajouter au panier","eventAddToCartButtonLabel":"Ajouter au panier","liveShoppingJoinButtonLabel":"Rejoindre","liveShoppingStartCountdown":"dans","bundleEventsListTitle":"Événements inclus","shareEventPanelTitle":"Partager cet événement","searchEventPlaceholder":"Rechercher","itemsCounterLabel":"éléments","singleEventItemsCounterLabel":"élément","clearFiltersLabel":"effacer","bookButtonLabel":"Réserver maintenant","virtualAppointmentLabel":"Rendez-vous","virtualEventLabel":"Virtuel","inPersonEventLabel":"Événement","webinarLabel":"Webinaire","liveShoppingLabel":"Shopping en direct","eventDetailsButtonLabel":"Détails","eventDescriptionFieldLabel":"Description","todaySeparatorLabel":"Aujourd’hui","tomorrowSeparatorLabel":"Demain","filtersStepLabel":"Filtres","resultStypeLabel":"Résultat","goToFiltersResultButton":"Suivant : Résultat","labelForMonthWithoutEvents":"Aucun événement n’est prévu ce mois-ci","nextMonthButton":"Suivant","availableQuantitySuffix":"restants","widgetHeaderLabel":"Événements","hostFilterLabel":"Organisateur","allDatesLabel":"Toutes","quickDateToday":"Aujourd’hui","quickDateTomorrow":"Demain","quickDateThisWeek":"Cette semaine","quickDateWeekend":"Week-end","applyFiltersLabel":"Afficher les résultats","showMoreEventsLabel":"+ ### de plus","summaryAvailableLabel":"sessions d’événements disponibles","summaryWaitlistLabel":"possibilités d’inscription sur liste d’attente","recurringEventLabel":"Récurrent","relatedEventsLabel":"Événements associés","addToCalendarLabel":"Ajouter au calendrier","copyLinkLabel":"Copier le lien","copiedLabel":"Copié","loadingErrorLabel":"Une erreur s’est produite. Veuillez réessayer plus tard."},"onProductWidget":{"selectTimeButton":"Choisir la date et l’heure","selectDateAndTimeButton":"Choisir la date et l’heure","addToCartButton":"Ajouter au panier","registerInWaitingList":"Rejoindre la liste d’attente","eventSoldOut":"Complet","appointmentSoldOut":"Complet","remainingBookingsLabel":"Plus que ### places !","addToCartLabel":"Confirmer","questionsFormTitle":"Formulaire de questions","additionalMembersFormTitle":"Réservation multiple","memberFormDescription":"Ajouter les adresses e-mail des destinataires supplémentaires","freeCheckoutNewslettersAgreement":"Cliquez ici pour recevoir des e-mails promotionnels et des newsletters","termsOfUseAgreement":"En cochant cette case, vous acceptez :","termsOfUseAnd":"et","freeCheckoutCloseRegistrationButton":"Fermer","freeCheckoutInvalidEmailMessage":"Veuillez saisir une adresse e-mail valide","freeCheckoutMandatoryRequiermentsMessageHeader":"Veuillez remplir le formulaire ci-dessous avec votre adresse e-mail et votre nom pour terminer votre inscription","freeRegistrationFormTitle":"Inscription","freeRegistrationFormDescription":"Veuillez remplir le formulaire ci-dessous avec votre adresse e-mail et votre nom pour terminer votre inscription","fastRegistration":"Paiement","memberFormMember":"Participant inscrit","memberFormEmail":"E-mail","memberFormFirstName":"Prénom","memberFormLastName":"Nom","eventQuestionsFormTitle":"Formulaire de questions sur l’événement","submitQuestionsForm":"Envoyer","mandatoryRequiermentsMessageHeader":"Ce champ est obligatoire","mandatoryRequiermentsMessage":"Veuillez remplir ce champ","invalidEmailMessage":"Veuillez saisir une adresse e-mail valide.","noAvailableSlots":"Aucun créneau de rendez-vous n’est disponible pour le moment","registrationCompletedMessageTitle":"Inscription terminée !","privacyPolicyLinkText":"Politique de confidentialité","termsOfUseLinkText":"Conditions d’utilisation","registrationCompletedMessageDescription":"Votre inscription a bien été enregistrée. Un e-mail de confirmation a été envoyé à l’adresse indiquée. Veuillez consulter votre boîte de réception.","waitingListNameLabel":"Nom","waitingListEmailLabel":"E-mail","memberFormPrimaryBadge":"Contact principal","captchaRequiredMessage":"Veuillez compléter le CAPTCHA pour continuer","genericErrorMessage":"Une erreur s’est produite. Veuillez réessayer."},"liveShoppingWidget":{"joinToCallButton":"Rejoindre","enterAdmittedUser":"Entrer","joinUserWithEmailButton":"Rejoindre","usernameInputLabel":"Nom d’utilisateur","emailInputLabel":"E-mail","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Veuillez saisir votre nom d’utilisateur et votre adresse e-mail pour rejoindre l’appel","waitForConnectionMessage":"Veuillez patienter jusqu’à ce que l’organisateur vous autorise à entrer","reconnectionMessage":"Une erreur s’est produite. Nous essayons de vous reconnecter","waitForAdmitMessage":"Veuillez patienter, nous essayons de vous connecter","connectionErrorMessage":"Veuillez recharger la page","productAddedToCartMessage":"Le produit a été ajouté au panier","emptyUsernameWarning":"Veuillez saisir votre nom d’utilisateur","emptyEmailWarning":"Veuillez saisir votre adresse e-mail","wrongEmailFormatWarning":"Veuillez saisir une adresse e-mail valide","audioRequirmentsIssue":"Le système ne prend pas en charge la VoIP, mais vous pouvez participer par téléphone","screenRequirmentsIssue":"Le partage d’écran n’est pas compatible avec ce navigateur.","videoRequirmentsIssue":"La vidéo n’est pas compatible avec ce navigateur.","browserRequirmentsIssue":"Veuillez mettre à jour votre navigateur"}}');

/***/ }),

/***/ "./translations/widget/hi.json":
/*!*************************************!*\
  !*** ./translations/widget/hi.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"तारीखें","filter_label_locations":"स्थान","filter_label_languages":"भाषा","filter_label_categories":"श्रेणी","filter_label_members":"सदस्य","filter_label_teams":"टीम","filter_all_dates":"सभी तारीखें","filter_all_locations":"सभी स्थान","filter_all_languages":"सभी भाषाएँ","filter_all_categories":"सभी श्रेणियाँ","filter_all_members":"सभी सदस्य","filter_all_teams":"सभी टीमें","filterPropertyDetailsLabel":"विवरण","filterPropertyEmailLabel":"ईमेल","filterPropertyPhoneLabel":"फ़ोन","filterPropertyOperationalHoursLabel":"कामकाज का समय"},"globalWidgetsTranslations":{"priceLabel":"कीमत","filtersLabel":"फ़िल्टर","calendarLabel":"कैलेंडर","priceFreeLabel":"निःशुल्क","dayLabelPlural":"दिन","dayLabelSingular":"दिन","hourLabelPlural":"घं.","hourLabelSingular":"घं.","minuteLabelPlural":"मि.","minuteLabelSingular":"मि.","loadingLabel":"लोड हो रहा है","backLabel":"वापस","closeLabel":"बंद करें","nextLabel":"अगला","previousLabel":"पिछला","languageLabel":"भाषा","timezoneLabel":"समय क्षेत्र","eventTimeLabel":"कार्यक्रम का समय","viewModeListLabel":"सूची","viewModeGridLabel":"ग्रिड"},"mainWidget":{"openDialogButton":"कार्यक्रम बुक करें","eventsListTitle":"कार्यक्रमों की सूची","bundlesListTitle":"पैकेजों की सूची","widgetEventsListSwitchLabel":"कार्यक्रम","widgetBundlesListSwitchLabel":"पैकेज","bundleAddToCartButtonLabel":"कार्ट में जोड़ें","eventAddToCartButtonLabel":"कार्ट में जोड़ें","liveShoppingJoinButtonLabel":"शामिल हों","liveShoppingStartCountdown":"शुरू होने में","bundleEventsListTitle":"शामिल कार्यक्रम","shareEventPanelTitle":"यह कार्यक्रम साझा करें","searchEventPlaceholder":"खोजें","itemsCounterLabel":"आइटम","singleEventItemsCounterLabel":"आइटम","clearFiltersLabel":"साफ़ करें","bookButtonLabel":"अभी बुक करें","virtualAppointmentLabel":"अपॉइंटमेंट","virtualEventLabel":"वर्चुअल","inPersonEventLabel":"कार्यक्रम","webinarLabel":"वेबिनार","liveShoppingLabel":"लाइव शॉपिंग","eventDetailsButtonLabel":"विवरण","eventDescriptionFieldLabel":"ब्योरा","todaySeparatorLabel":"आज","tomorrowSeparatorLabel":"कल","filtersStepLabel":"फ़िल्टर","resultStypeLabel":"परिणाम","goToFiltersResultButton":"अगला: परिणाम","labelForMonthWithoutEvents":"इस महीने कोई कार्यक्रम निर्धारित नहीं है","nextMonthButton":"अगला","availableQuantitySuffix":"बाकी","widgetHeaderLabel":"कार्यक्रम","hostFilterLabel":"आयोजक","allDatesLabel":"सभी","quickDateToday":"आज","quickDateTomorrow":"कल","quickDateThisWeek":"इस सप्ताह","quickDateWeekend":"सप्ताहांत","applyFiltersLabel":"परिणाम दिखाएँ","showMoreEventsLabel":"+ ### और","summaryAvailableLabel":"उपलब्ध कार्यक्रम सत्र","summaryWaitlistLabel":"प्रतीक्षा सूची में नाम जोड़ने के अवसर","recurringEventLabel":"आवर्ती","relatedEventsLabel":"संबंधित कार्यक्रम","addToCalendarLabel":"कैलेंडर में जोड़ें","copyLinkLabel":"लिंक कॉपी करें","copiedLabel":"कॉपी हो गया","loadingErrorLabel":"कुछ गलत हो गया। कृपया बाद में फिर कोशिश करें।"},"onProductWidget":{"selectTimeButton":"तारीख और समय चुनें","selectDateAndTimeButton":"तारीख और समय चुनें","addToCartButton":"कार्ट में जोड़ें","registerInWaitingList":"प्रतीक्षा सूची में शामिल हों","eventSoldOut":"सभी स्थान भर गए हैं","appointmentSoldOut":"सभी स्थान भर गए हैं","remainingBookingsLabel":"केवल ### स्थान बाकी हैं!","addToCartLabel":"पुष्टि करें","questionsFormTitle":"प्रश्न फ़ॉर्म","additionalMembersFormTitle":"एक से अधिक लोगों की बुकिंग","memberFormDescription":"अतिरिक्त प्राप्तकर्ताओं के ईमेल पते जोड़ें","freeCheckoutNewslettersAgreement":"मार्केटिंग ईमेल और न्यूज़लेटर पाने के लिए यहाँ क्लिक करें","termsOfUseAgreement":"इस बॉक्स को चुनकर आप निम्नलिखित से सहमत होते हैं:","termsOfUseAnd":"और","freeCheckoutCloseRegistrationButton":"बंद करें","freeCheckoutInvalidEmailMessage":"कृपया एक मान्य ईमेल पता दर्ज करें","freeCheckoutMandatoryRequiermentsMessageHeader":"पंजीकरण पूरा करने के लिए नीचे दिए गए फ़ॉर्म में अपना ईमेल पता और नाम भरें","freeRegistrationFormTitle":"पंजीकरण","freeRegistrationFormDescription":"पंजीकरण पूरा करने के लिए नीचे दिए गए फ़ॉर्म में अपना ईमेल पता और नाम भरें","fastRegistration":"चेकआउट","memberFormMember":"पंजीकृत व्यक्ति","memberFormEmail":"ईमेल","memberFormFirstName":"पहला नाम","memberFormLastName":"उपनाम","eventQuestionsFormTitle":"कार्यक्रम से जुड़े प्रश्नों का फ़ॉर्म","submitQuestionsForm":"जमा करें","mandatoryRequiermentsMessageHeader":"यह फ़ील्ड अनिवार्य है","mandatoryRequiermentsMessage":"कृपया यह फ़ील्ड भरें","invalidEmailMessage":"कृपया एक मान्य ईमेल पता दर्ज करें।","noAvailableSlots":"फ़िलहाल अपॉइंटमेंट के लिए कोई समय उपलब्ध नहीं है","registrationCompletedMessageTitle":"पंजीकरण पूरा हो गया!","privacyPolicyLinkText":"गोपनीयता नीति","termsOfUseLinkText":"उपयोग की शर्तें","registrationCompletedMessageDescription":"आपका पंजीकरण सफल हो गया है। दिए गए ईमेल पते पर पुष्टि का संदेश भेज दिया गया है। कृपया अपना इनबॉक्स देखें।","waitingListNameLabel":"नाम","waitingListEmailLabel":"ईमेल","memberFormPrimaryBadge":"मुख्य संपर्क","captchaRequiredMessage":"आगे बढ़ने के लिए कृपया CAPTCHA सत्यापन पूरा करें","genericErrorMessage":"कुछ गलत हो गया। कृपया फिर कोशिश करें।"},"liveShoppingWidget":{"joinToCallButton":"शामिल हों","enterAdmittedUser":"प्रवेश करें","joinUserWithEmailButton":"शामिल हों","usernameInputLabel":"उपयोगकर्ता नाम","emailInputLabel":"ईमेल","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"कॉल में शामिल होने के लिए अपना उपयोगकर्ता नाम और ईमेल पता दर्ज करें","waitForConnectionMessage":"कृपया आयोजक द्वारा प्रवेश की अनुमति दिए जाने तक प्रतीक्षा करें","reconnectionMessage":"कुछ गलत हो गया है। हम आपको दोबारा कनेक्ट करने की कोशिश कर रहे हैं","waitForAdmitMessage":"कृपया प्रतीक्षा करें, हम आपको कनेक्ट करने की कोशिश कर रहे हैं","connectionErrorMessage":"कृपया पेज दोबारा लोड करें","productAddedToCartMessage":"उत्पाद कार्ट में जोड़ दिया गया है","emptyUsernameWarning":"कृपया अपना उपयोगकर्ता नाम दर्ज करें","emptyEmailWarning":"कृपया अपना ईमेल पता दर्ज करें","wrongEmailFormatWarning":"कृपया एक मान्य ईमेल पता दर्ज करें","audioRequirmentsIssue":"सिस्टम VoIP का समर्थन नहीं करता, लेकिन आप फ़ोन से ऑडियो कॉल में शामिल हो सकते हैं","screenRequirmentsIssue":"स्क्रीन साझा करना इस ब्राउज़र के साथ संगत नहीं है।","videoRequirmentsIssue":"वीडियो इस ब्राउज़र के साथ संगत नहीं है।","browserRequirmentsIssue":"कृपया अपना ब्राउज़र अपडेट करें"}}');

/***/ }),

/***/ "./translations/widget/it.json":
/*!*************************************!*\
  !*** ./translations/widget/it.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Date","filter_label_locations":"Luogo","filter_label_languages":"Lingua","filter_label_categories":"Categoria","filter_label_members":"Membro","filter_label_teams":"Team","filter_all_dates":"Tutte le date","filter_all_locations":"Tutti i luoghi","filter_all_languages":"Tutte le lingue","filter_all_categories":"Tutte le categorie","filter_all_members":"Tutti i membri","filter_all_teams":"Tutti i team","filterPropertyDetailsLabel":"Dettagli","filterPropertyEmailLabel":"Email","filterPropertyPhoneLabel":"Telefono","filterPropertyOperationalHoursLabel":"Orari di apertura"},"globalWidgetsTranslations":{"priceLabel":"Prezzo","filtersLabel":"Filtri","calendarLabel":"Calendario","priceFreeLabel":"Gratuito","dayLabelPlural":"g","dayLabelSingular":"g","hourLabelPlural":"h","hourLabelSingular":"h","minuteLabelPlural":"min","minuteLabelSingular":"min","loadingLabel":"Caricamento","backLabel":"Indietro","closeLabel":"Chiudi","nextLabel":"Avanti","previousLabel":"Precedente","languageLabel":"Lingua","timezoneLabel":"Fuso orario","eventTimeLabel":"Ora dell’evento","viewModeListLabel":"Elenco","viewModeGridLabel":"Griglia"},"mainWidget":{"openDialogButton":"Prenota evento","eventsListTitle":"Elenco eventi","bundlesListTitle":"Elenco pacchetti","widgetEventsListSwitchLabel":"Eventi","widgetBundlesListSwitchLabel":"Pacchetti","bundleAddToCartButtonLabel":"Aggiungi al carrello","eventAddToCartButtonLabel":"Aggiungi al carrello","liveShoppingJoinButtonLabel":"Partecipa","liveShoppingStartCountdown":"tra","bundleEventsListTitle":"Eventi inclusi","shareEventPanelTitle":"Condividi questo evento","searchEventPlaceholder":"Cerca","itemsCounterLabel":"elementi","singleEventItemsCounterLabel":"elemento","clearFiltersLabel":"cancella","bookButtonLabel":"Prenota ora","virtualAppointmentLabel":"Appuntamento","virtualEventLabel":"Virtuale","inPersonEventLabel":"Evento","webinarLabel":"Webinar","liveShoppingLabel":"Shopping in diretta","eventDetailsButtonLabel":"Dettagli","eventDescriptionFieldLabel":"Descrizione","todaySeparatorLabel":"Oggi","tomorrowSeparatorLabel":"Domani","filtersStepLabel":"Filtri","resultStypeLabel":"Risultato","goToFiltersResultButton":"Avanti: Risultato","labelForMonthWithoutEvents":"Non ci sono eventi programmati per questo mese","nextMonthButton":"Avanti","availableQuantitySuffix":"disponibili","widgetHeaderLabel":"Eventi","hostFilterLabel":"Organizzatore","allDatesLabel":"Tutte","quickDateToday":"Oggi","quickDateTomorrow":"Domani","quickDateThisWeek":"Questa settimana","quickDateWeekend":"Fine settimana","applyFiltersLabel":"Mostra risultati","showMoreEventsLabel":"+ ### altri","summaryAvailableLabel":"sessioni di eventi disponibili","summaryWaitlistLabel":"possibilità di iscrizione alla lista d’attesa","recurringEventLabel":"Ricorrente","relatedEventsLabel":"Eventi correlati","addToCalendarLabel":"Aggiungi al calendario","copyLinkLabel":"Copia link","copiedLabel":"Copiato","loadingErrorLabel":"Si è verificato un errore. Riprova più tardi."},"onProductWidget":{"selectTimeButton":"Seleziona data e ora","selectDateAndTimeButton":"Seleziona data e ora","addToCartButton":"Aggiungi al carrello","registerInWaitingList":"Iscriviti alla lista d’attesa","eventSoldOut":"Esaurito","appointmentSoldOut":"Esaurito","remainingBookingsLabel":"Solo ### posti rimasti!","addToCartLabel":"Conferma","questionsFormTitle":"Modulo di domande","additionalMembersFormTitle":"Prenotazione multipla","memberFormDescription":"Aggiungi gli indirizzi email dei destinatari aggiuntivi","freeCheckoutNewslettersAgreement":"Fai clic qui per ricevere email promozionali e newsletter","termsOfUseAgreement":"Selezionando questa casella, accetti:","termsOfUseAnd":"e","freeCheckoutCloseRegistrationButton":"Chiudi","freeCheckoutInvalidEmailMessage":"Inserisci un indirizzo email valido","freeCheckoutMandatoryRequiermentsMessageHeader":"Compila il modulo qui sotto con il tuo indirizzo email e il tuo nome per completare l’iscrizione","freeRegistrationFormTitle":"Iscrizione","freeRegistrationFormDescription":"Compila il modulo qui sotto con il tuo indirizzo email e il tuo nome per completare l’iscrizione","fastRegistration":"Procedi al pagamento","memberFormMember":"Persona iscritta","memberFormEmail":"Email","memberFormFirstName":"Nome","memberFormLastName":"Cognome","eventQuestionsFormTitle":"Modulo di domande sull’evento","submitQuestionsForm":"Invia","mandatoryRequiermentsMessageHeader":"Questo campo è obbligatorio","mandatoryRequiermentsMessage":"Compila questo campo","invalidEmailMessage":"Inserisci un indirizzo email valido.","noAvailableSlots":"Al momento non ci sono appuntamenti disponibili","registrationCompletedMessageTitle":"Iscrizione completata!","privacyPolicyLinkText":"Informativa sulla privacy","termsOfUseLinkText":"Condizioni d’uso","registrationCompletedMessageDescription":"L’iscrizione è stata completata. Un’email di conferma è stata inviata all’indirizzo indicato. Controlla la tua casella di posta.","waitingListNameLabel":"Nome","waitingListEmailLabel":"Email","memberFormPrimaryBadge":"Contatto principale","captchaRequiredMessage":"Completa il CAPTCHA per continuare","genericErrorMessage":"Si è verificato un errore. Riprova."},"liveShoppingWidget":{"joinToCallButton":"Partecipa","enterAdmittedUser":"Entra","joinUserWithEmailButton":"Partecipa","usernameInputLabel":"Nome utente","emailInputLabel":"Email","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Inserisci il tuo nome utente e il tuo indirizzo email per partecipare alla chiamata","waitForConnectionMessage":"Attendi che l’organizzatore ti permetta di entrare","reconnectionMessage":"Si è verificato un errore. Stiamo cercando di riconnetterti","waitForAdmitMessage":"Attendi, stiamo cercando di connetterti","connectionErrorMessage":"Ricarica la pagina","productAddedToCartMessage":"Il prodotto è stato aggiunto al carrello","emptyUsernameWarning":"Inserisci il tuo nome utente","emptyEmailWarning":"Inserisci il tuo indirizzo email","wrongEmailFormatWarning":"Inserisci un indirizzo email valido","audioRequirmentsIssue":"Il sistema non supporta il VoIP, ma puoi partecipare per telefono","screenRequirmentsIssue":"La condivisione dello schermo non è compatibile con questo browser.","videoRequirmentsIssue":"Il video non è compatibile con questo browser.","browserRequirmentsIssue":"Aggiorna il browser"}}');

/***/ }),

/***/ "./translations/widget/ja.json":
/*!*************************************!*\
  !*** ./translations/widget/ja.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"日付","filter_label_locations":"場所","filter_label_languages":"言語","filter_label_categories":"カテゴリー","filter_label_members":"メンバー","filter_label_teams":"チーム","filter_all_dates":"すべての日付","filter_all_locations":"すべての場所","filter_all_languages":"すべての言語","filter_all_categories":"すべてのカテゴリー","filter_all_members":"すべてのメンバー","filter_all_teams":"すべてのチーム","filterPropertyDetailsLabel":"詳細","filterPropertyEmailLabel":"メールアドレス","filterPropertyPhoneLabel":"電話番号","filterPropertyOperationalHoursLabel":"営業時間"},"globalWidgetsTranslations":{"priceLabel":"料金","filtersLabel":"絞り込み","calendarLabel":"カレンダー","priceFreeLabel":"無料","dayLabelPlural":"日","dayLabelSingular":"日","hourLabelPlural":"時間","hourLabelSingular":"時間","minuteLabelPlural":"分","minuteLabelSingular":"分","loadingLabel":"読み込み中","backLabel":"戻る","closeLabel":"閉じる","nextLabel":"次へ","previousLabel":"前へ","languageLabel":"言語","timezoneLabel":"タイムゾーン","eventTimeLabel":"イベントの時間","viewModeListLabel":"リスト","viewModeGridLabel":"グリッド"},"mainWidget":{"openDialogButton":"イベントを予約","eventsListTitle":"イベント一覧","bundlesListTitle":"セット一覧","widgetEventsListSwitchLabel":"イベント","widgetBundlesListSwitchLabel":"セット","bundleAddToCartButtonLabel":"カートに追加","eventAddToCartButtonLabel":"カートに追加","liveShoppingJoinButtonLabel":"参加","liveShoppingStartCountdown":"開始まで","bundleEventsListTitle":"含まれるイベント","shareEventPanelTitle":"このイベントを共有","searchEventPlaceholder":"検索","itemsCounterLabel":"件","singleEventItemsCounterLabel":"件","clearFiltersLabel":"クリア","bookButtonLabel":"今すぐ予約","virtualAppointmentLabel":"予約枠","virtualEventLabel":"オンライン","inPersonEventLabel":"イベント","webinarLabel":"ウェビナー","liveShoppingLabel":"ライブショッピング","eventDetailsButtonLabel":"詳細","eventDescriptionFieldLabel":"説明","todaySeparatorLabel":"今日","tomorrowSeparatorLabel":"明日","filtersStepLabel":"絞り込み","resultStypeLabel":"結果","goToFiltersResultButton":"次へ：結果","labelForMonthWithoutEvents":"今月はイベントの予定がありません","nextMonthButton":"次へ","availableQuantitySuffix":"残り","widgetHeaderLabel":"イベント","hostFilterLabel":"主催者","allDatesLabel":"すべて","quickDateToday":"今日","quickDateTomorrow":"明日","quickDateThisWeek":"今週","quickDateWeekend":"週末","applyFiltersLabel":"結果を表示","showMoreEventsLabel":"+ さらに ### 件","summaryAvailableLabel":"予約可能なイベント開催枠","summaryWaitlistLabel":"キャンセル待ちに登録可能な開催枠","recurringEventLabel":"定期開催","relatedEventsLabel":"関連イベント","addToCalendarLabel":"カレンダーに追加","copyLinkLabel":"リンクをコピー","copiedLabel":"コピーしました","loadingErrorLabel":"エラーが発生しました。しばらくしてから再度お試しください。"},"onProductWidget":{"selectTimeButton":"日時を選択","selectDateAndTimeButton":"日時を選択","addToCartButton":"カートに追加","registerInWaitingList":"キャンセル待ちに登録","eventSoldOut":"満席","appointmentSoldOut":"満席","remainingBookingsLabel":"残りわずか ### 名！","addToCartLabel":"確認","questionsFormTitle":"質問フォーム","additionalMembersFormTitle":"複数名の予約","memberFormDescription":"追加の受信者のメールアドレスを入力","freeCheckoutNewslettersAgreement":"マーケティングメールやニュースレターの受信を希望する場合は、ここをクリックしてください","termsOfUseAgreement":"このチェックボックスを選択すると、以下に同意したものとみなされます：","termsOfUseAnd":"および","freeCheckoutCloseRegistrationButton":"閉じる","freeCheckoutInvalidEmailMessage":"有効なメールアドレスを入力してください","freeCheckoutMandatoryRequiermentsMessageHeader":"登録を完了するには、下のフォームにメールアドレスとお名前を入力してください","freeRegistrationFormTitle":"登録","freeRegistrationFormDescription":"登録を完了するには、下のフォームにメールアドレスとお名前を入力してください","fastRegistration":"お会計","memberFormMember":"登録者","memberFormEmail":"メールアドレス","memberFormFirstName":"名","memberFormLastName":"姓","eventQuestionsFormTitle":"イベントの質問フォーム","submitQuestionsForm":"送信","mandatoryRequiermentsMessageHeader":"この項目は必須です","mandatoryRequiermentsMessage":"この項目を入力してください","invalidEmailMessage":"有効なメールアドレスを入力してください。","noAvailableSlots":"現在、予約可能な時間枠はありません","registrationCompletedMessageTitle":"登録が完了しました！","privacyPolicyLinkText":"プライバシーポリシー","termsOfUseLinkText":"利用規約","registrationCompletedMessageDescription":"登録が完了しました。入力されたメールアドレスに確認メールを送信しました。受信トレイをご確認ください。","waitingListNameLabel":"氏名","waitingListEmailLabel":"メールアドレス","memberFormPrimaryBadge":"代表連絡先","captchaRequiredMessage":"続行するには CAPTCHA 認証を完了してください","genericErrorMessage":"エラーが発生しました。もう一度お試しください。"},"liveShoppingWidget":{"joinToCallButton":"参加","enterAdmittedUser":"入室","joinUserWithEmailButton":"参加","usernameInputLabel":"ユーザー名","emailInputLabel":"メールアドレス","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"通話に参加するには、ユーザー名とメールアドレスを入力してください","waitForConnectionMessage":"主催者が入室を許可するまでお待ちください","reconnectionMessage":"エラーが発生しました。再接続を試みています","waitForAdmitMessage":"接続を試みています。しばらくお待ちください","connectionErrorMessage":"ページを再読み込みしてください","productAddedToCartMessage":"商品をカートに追加しました","emptyUsernameWarning":"ユーザー名を入力してください","emptyEmailWarning":"メールアドレスを入力してください","wrongEmailFormatWarning":"有効なメールアドレスを入力してください","audioRequirmentsIssue":"このシステムは VoIP に対応していませんが、電話で音声に参加できます","screenRequirmentsIssue":"画面共有は現在のブラウザーに対応していません。","videoRequirmentsIssue":"ビデオは現在のブラウザーに対応していません。","browserRequirmentsIssue":"ブラウザーを更新してください"}}');

/***/ }),

/***/ "./translations/widget/ko.json":
/*!*************************************!*\
  !*** ./translations/widget/ko.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"날짜","filter_label_locations":"장소","filter_label_languages":"언어","filter_label_categories":"카테고리","filter_label_members":"구성원","filter_label_teams":"팀","filter_all_dates":"모든 날짜","filter_all_locations":"모든 장소","filter_all_languages":"모든 언어","filter_all_categories":"모든 카테고리","filter_all_members":"모든 구성원","filter_all_teams":"모든 팀","filterPropertyDetailsLabel":"상세 정보","filterPropertyEmailLabel":"이메일","filterPropertyPhoneLabel":"전화번호","filterPropertyOperationalHoursLabel":"운영 시간"},"globalWidgetsTranslations":{"priceLabel":"가격","filtersLabel":"필터","calendarLabel":"캘린더","priceFreeLabel":"무료","dayLabelPlural":"일","dayLabelSingular":"일","hourLabelPlural":"시간","hourLabelSingular":"시간","minuteLabelPlural":"분","minuteLabelSingular":"분","loadingLabel":"로딩 중","backLabel":"뒤로","closeLabel":"닫기","nextLabel":"다음","previousLabel":"이전","languageLabel":"언어","timezoneLabel":"시간대","eventTimeLabel":"이벤트 시간","viewModeListLabel":"목록","viewModeGridLabel":"그리드"},"mainWidget":{"openDialogButton":"이벤트 예약","eventsListTitle":"이벤트 목록","bundlesListTitle":"패키지 목록","widgetEventsListSwitchLabel":"이벤트","widgetBundlesListSwitchLabel":"패키지","bundleAddToCartButtonLabel":"장바구니에 담기","eventAddToCartButtonLabel":"장바구니에 담기","liveShoppingJoinButtonLabel":"참여","liveShoppingStartCountdown":"시작까지","bundleEventsListTitle":"포함된 이벤트","shareEventPanelTitle":"이 이벤트 공유","searchEventPlaceholder":"검색","itemsCounterLabel":"개","singleEventItemsCounterLabel":"개","clearFiltersLabel":"초기화","bookButtonLabel":"지금 예약","virtualAppointmentLabel":"예약","virtualEventLabel":"온라인","inPersonEventLabel":"이벤트","webinarLabel":"웨비나","liveShoppingLabel":"라이브 쇼핑","eventDetailsButtonLabel":"상세 정보","eventDescriptionFieldLabel":"설명","todaySeparatorLabel":"오늘","tomorrowSeparatorLabel":"내일","filtersStepLabel":"필터","resultStypeLabel":"결과","goToFiltersResultButton":"다음: 결과","labelForMonthWithoutEvents":"이번 달에는 예정된 이벤트가 없습니다","nextMonthButton":"다음","availableQuantitySuffix":"남음","widgetHeaderLabel":"이벤트","hostFilterLabel":"주최자","allDatesLabel":"전체","quickDateToday":"오늘","quickDateTomorrow":"내일","quickDateThisWeek":"이번 주","quickDateWeekend":"주말","applyFiltersLabel":"결과 보기","showMoreEventsLabel":"+ ###개 더 보기","summaryAvailableLabel":"예약 가능한 이벤트 회차","summaryWaitlistLabel":"대기자 명단 등록이 가능한 회차","recurringEventLabel":"정기 개최","relatedEventsLabel":"관련 이벤트","addToCalendarLabel":"캘린더에 추가","copyLinkLabel":"링크 복사","copiedLabel":"복사됨","loadingErrorLabel":"오류가 발생했습니다. 나중에 다시 시도해 주세요."},"onProductWidget":{"selectTimeButton":"날짜와 시간 선택","selectDateAndTimeButton":"날짜와 시간 선택","addToCartButton":"장바구니에 담기","registerInWaitingList":"대기자 명단에 등록","eventSoldOut":"매진","appointmentSoldOut":"매진","remainingBookingsLabel":"###자리만 남았습니다!","addToCartLabel":"확인","questionsFormTitle":"질문 양식","additionalMembersFormTitle":"여러 명 예약","memberFormDescription":"추가 수신자의 이메일 주소 입력","freeCheckoutNewslettersAgreement":"마케팅 이메일과 뉴스레터를 받으려면 여기를 클릭하세요","termsOfUseAgreement":"이 확인란을 선택하면 다음 사항에 동의하게 됩니다:","termsOfUseAnd":"및","freeCheckoutCloseRegistrationButton":"닫기","freeCheckoutInvalidEmailMessage":"유효한 이메일 주소를 입력해 주세요","freeCheckoutMandatoryRequiermentsMessageHeader":"등록을 완료하려면 아래 양식에 이메일 주소와 이름을 입력해 주세요","freeRegistrationFormTitle":"등록","freeRegistrationFormDescription":"등록을 완료하려면 아래 양식에 이메일 주소와 이름을 입력해 주세요","fastRegistration":"결제","memberFormMember":"등록자","memberFormEmail":"이메일","memberFormFirstName":"이름","memberFormLastName":"성","eventQuestionsFormTitle":"이벤트 질문 양식","submitQuestionsForm":"제출","mandatoryRequiermentsMessageHeader":"필수 항목입니다","mandatoryRequiermentsMessage":"이 항목을 입력해 주세요","invalidEmailMessage":"유효한 이메일 주소를 입력해 주세요.","noAvailableSlots":"현재 예약 가능한 시간대가 없습니다","registrationCompletedMessageTitle":"등록이 완료되었습니다!","privacyPolicyLinkText":"개인정보 처리방침","termsOfUseLinkText":"이용약관","registrationCompletedMessageDescription":"등록이 완료되었습니다. 입력하신 이메일 주소로 확인 이메일을 보냈습니다. 받은편지함을 확인해 주세요.","waitingListNameLabel":"이름","waitingListEmailLabel":"이메일","memberFormPrimaryBadge":"대표 연락처","captchaRequiredMessage":"계속하려면 CAPTCHA 인증을 완료해 주세요","genericErrorMessage":"오류가 발생했습니다. 다시 시도해 주세요."},"liveShoppingWidget":{"joinToCallButton":"참여","enterAdmittedUser":"입장","joinUserWithEmailButton":"참여","usernameInputLabel":"사용자 이름","emailInputLabel":"이메일","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"통화에 참여하려면 사용자 이름과 이메일 주소를 입력해 주세요","waitForConnectionMessage":"주최자가 입장을 허용할 때까지 기다려 주세요","reconnectionMessage":"오류가 발생했습니다. 다시 연결을 시도하고 있습니다","waitForAdmitMessage":"연결을 시도하고 있습니다. 잠시 기다려 주세요","connectionErrorMessage":"페이지를 새로고침해 주세요","productAddedToCartMessage":"상품이 장바구니에 추가되었습니다","emptyUsernameWarning":"사용자 이름을 입력해 주세요","emptyEmailWarning":"이메일 주소를 입력해 주세요","wrongEmailFormatWarning":"유효한 이메일 주소를 입력해 주세요","audioRequirmentsIssue":"시스템에서 VoIP를 지원하지 않지만 전화로 음성 통화에 참여할 수 있습니다","screenRequirmentsIssue":"화면 공유는 현재 브라우저와 호환되지 않습니다.","videoRequirmentsIssue":"영상은 현재 브라우저와 호환되지 않습니다.","browserRequirmentsIssue":"브라우저를 업데이트해 주세요"}}');

/***/ }),

/***/ "./translations/widget/nl.json":
/*!*************************************!*\
  !*** ./translations/widget/nl.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Datums","filter_label_locations":"Locatie","filter_label_languages":"Taal","filter_label_categories":"Categorie","filter_label_members":"Lid","filter_label_teams":"Team","filter_all_dates":"Alle datums","filter_all_locations":"Alle locaties","filter_all_languages":"Alle talen","filter_all_categories":"Alle categorieën","filter_all_members":"Alle leden","filter_all_teams":"Alle teams","filterPropertyDetailsLabel":"Details","filterPropertyEmailLabel":"E-mail","filterPropertyPhoneLabel":"Telefoon","filterPropertyOperationalHoursLabel":"Openingstijden"},"globalWidgetsTranslations":{"priceLabel":"Prijs","filtersLabel":"Filters","calendarLabel":"Kalender","priceFreeLabel":"Gratis","dayLabelPlural":"d","dayLabelSingular":"d","hourLabelPlural":"u","hourLabelSingular":"u","minuteLabelPlural":"min","minuteLabelSingular":"min","loadingLabel":"Laden","backLabel":"Terug","closeLabel":"Sluiten","nextLabel":"Volgende","previousLabel":"Vorige","languageLabel":"Taal","timezoneLabel":"Tijdzone","eventTimeLabel":"Tijd van het evenement","viewModeListLabel":"Lijst","viewModeGridLabel":"Raster"},"mainWidget":{"openDialogButton":"Evenement boeken","eventsListTitle":"Evenementenlijst","bundlesListTitle":"Bundellijst","widgetEventsListSwitchLabel":"Evenementen","widgetBundlesListSwitchLabel":"Bundels","bundleAddToCartButtonLabel":"In winkelwagen","eventAddToCartButtonLabel":"In winkelwagen","liveShoppingJoinButtonLabel":"Deelnemen","liveShoppingStartCountdown":"over","bundleEventsListTitle":"Inbegrepen evenementen","shareEventPanelTitle":"Dit evenement delen","searchEventPlaceholder":"Zoeken","itemsCounterLabel":"items","singleEventItemsCounterLabel":"item","clearFiltersLabel":"wissen","bookButtonLabel":"Nu boeken","virtualAppointmentLabel":"Afspraak","virtualEventLabel":"Virtueel","inPersonEventLabel":"Evenement","webinarLabel":"Webinar","liveShoppingLabel":"Live winkelen","eventDetailsButtonLabel":"Details","eventDescriptionFieldLabel":"Beschrijving","todaySeparatorLabel":"Vandaag","tomorrowSeparatorLabel":"Morgen","filtersStepLabel":"Filters","resultStypeLabel":"Resultaat","goToFiltersResultButton":"Volgende: Resultaat","labelForMonthWithoutEvents":"Er zijn deze maand geen evenementen gepland","nextMonthButton":"Volgende","availableQuantitySuffix":"beschikbaar","widgetHeaderLabel":"Evenementen","hostFilterLabel":"Organisator","allDatesLabel":"Alle","quickDateToday":"Vandaag","quickDateTomorrow":"Morgen","quickDateThisWeek":"Deze week","quickDateWeekend":"Weekend","applyFiltersLabel":"Resultaten tonen","showMoreEventsLabel":"+ ### meer","summaryAvailableLabel":"beschikbare evenementensessies","summaryWaitlistLabel":"mogelijkheden om op de wachtlijst te komen","recurringEventLabel":"Terugkerend","relatedEventsLabel":"Gerelateerde evenementen","addToCalendarLabel":"Toevoegen aan kalender","copyLinkLabel":"Link kopiëren","copiedLabel":"Gekopieerd","loadingErrorLabel":"Er is iets misgegaan. Probeer het later opnieuw."},"onProductWidget":{"selectTimeButton":"Datum en tijd selecteren","selectDateAndTimeButton":"Datum en tijd selecteren","addToCartButton":"In winkelwagen","registerInWaitingList":"Aanmelden voor de wachtlijst","eventSoldOut":"Volgeboekt","appointmentSoldOut":"Volgeboekt","remainingBookingsLabel":"Nog maar ### plaatsen!","addToCartLabel":"Bevestigen","questionsFormTitle":"Vragenformulier","additionalMembersFormTitle":"Meervoudige boeking","memberFormDescription":"E-mailadressen voor extra ontvangers toevoegen","freeCheckoutNewslettersAgreement":"Klik hier om marketingmails en nieuwsbrieven te ontvangen","termsOfUseAgreement":"Door dit vakje aan te vinken, ga je akkoord met:","termsOfUseAnd":"en","freeCheckoutCloseRegistrationButton":"Sluiten","freeCheckoutInvalidEmailMessage":"Voer een geldig e-mailadres in","freeCheckoutMandatoryRequiermentsMessageHeader":"Vul hieronder je e-mailadres en naam in om je inschrijving te voltooien","freeRegistrationFormTitle":"Inschrijving","freeRegistrationFormDescription":"Vul hieronder je e-mailadres en naam in om je inschrijving te voltooien","fastRegistration":"Afrekenen","memberFormMember":"Ingeschreven deelnemer","memberFormEmail":"E-mail","memberFormFirstName":"Voornaam","memberFormLastName":"Achternaam","eventQuestionsFormTitle":"Vragenformulier voor het evenement","submitQuestionsForm":"Verzenden","mandatoryRequiermentsMessageHeader":"Dit veld is verplicht","mandatoryRequiermentsMessage":"Vul dit veld in","invalidEmailMessage":"Voer een geldig e-mailadres in.","noAvailableSlots":"Er zijn momenteel geen afspraken beschikbaar","registrationCompletedMessageTitle":"Inschrijving voltooid!","privacyPolicyLinkText":"Privacybeleid","termsOfUseLinkText":"Gebruiksvoorwaarden","registrationCompletedMessageDescription":"Je bent succesvol ingeschreven. Er is een bevestigingsmail naar het opgegeven e-mailadres gestuurd. Controleer je inbox.","waitingListNameLabel":"Naam","waitingListEmailLabel":"E-mail","memberFormPrimaryBadge":"Hoofdcontactpersoon","captchaRequiredMessage":"Voltooi de CAPTCHA om door te gaan","genericErrorMessage":"Er is iets misgegaan. Probeer het opnieuw."},"liveShoppingWidget":{"joinToCallButton":"Deelnemen","enterAdmittedUser":"Binnengaan","joinUserWithEmailButton":"Deelnemen","usernameInputLabel":"Gebruikersnaam","emailInputLabel":"E-mail","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Voer je gebruikersnaam en e-mailadres in om aan het gesprek deel te nemen","waitForConnectionMessage":"Wacht totdat de organisator je binnenlaat","reconnectionMessage":"Er is iets misgegaan. We proberen je opnieuw te verbinden","waitForAdmitMessage":"Even geduld, we proberen je te verbinden","connectionErrorMessage":"Laad de pagina opnieuw","productAddedToCartMessage":"Het product is toegevoegd aan de winkelwagen","emptyUsernameWarning":"Voer je gebruikersnaam in","emptyEmailWarning":"Voer je e-mailadres in","wrongEmailFormatWarning":"Voer een geldig e-mailadres in","audioRequirmentsIssue":"Het systeem ondersteunt geen VoIP, maar je kunt telefonisch deelnemen","screenRequirmentsIssue":"Scherm delen is niet compatibel met deze browser.","videoRequirmentsIssue":"Video is niet compatibel met deze browser.","browserRequirmentsIssue":"Werk je browser bij"}}');

/***/ }),

/***/ "./translations/widget/no.json":
/*!*************************************!*\
  !*** ./translations/widget/no.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Datoer","filter_label_locations":"Sted","filter_label_languages":"Språk","filter_label_categories":"Kategori","filter_label_members":"Medlem","filter_label_teams":"Team","filter_all_dates":"Alle datoer","filter_all_locations":"Alle steder","filter_all_languages":"Alle språk","filter_all_categories":"Alle kategorier","filter_all_members":"Alle medlemmer","filter_all_teams":"Alle team","filterPropertyDetailsLabel":"Detaljer","filterPropertyEmailLabel":"E-post","filterPropertyPhoneLabel":"Telefon","filterPropertyOperationalHoursLabel":"Åpningstider"},"globalWidgetsTranslations":{"priceLabel":"Pris","filtersLabel":"Filtre","calendarLabel":"Kalender","priceFreeLabel":"Gratis","dayLabelPlural":"d","dayLabelSingular":"d","hourLabelPlural":"t","hourLabelSingular":"t","minuteLabelPlural":"min","minuteLabelSingular":"min","loadingLabel":"Laster","backLabel":"Tilbake","closeLabel":"Lukk","nextLabel":"Neste","previousLabel":"Forrige","languageLabel":"Språk","timezoneLabel":"Tidssone","eventTimeLabel":"Tidspunkt for arrangementet","viewModeListLabel":"Liste","viewModeGridLabel":"Rutenett"},"mainWidget":{"openDialogButton":"Bestill arrangement","eventsListTitle":"Arrangementsliste","bundlesListTitle":"Pakkeliste","widgetEventsListSwitchLabel":"Arrangementer","widgetBundlesListSwitchLabel":"Pakker","bundleAddToCartButtonLabel":"Legg i handlekurven","eventAddToCartButtonLabel":"Legg i handlekurven","liveShoppingJoinButtonLabel":"Bli med","liveShoppingStartCountdown":"om","bundleEventsListTitle":"Inkluderte arrangementer","shareEventPanelTitle":"Del dette arrangementet","searchEventPlaceholder":"Søk","itemsCounterLabel":"elementer","singleEventItemsCounterLabel":"element","clearFiltersLabel":"tøm","bookButtonLabel":"Bestill nå","virtualAppointmentLabel":"Avtale","virtualEventLabel":"Virtuelt","inPersonEventLabel":"Arrangement","webinarLabel":"Webinar","liveShoppingLabel":"Direktesendt shopping","eventDetailsButtonLabel":"Detaljer","eventDescriptionFieldLabel":"Beskrivelse","todaySeparatorLabel":"I dag","tomorrowSeparatorLabel":"I morgen","filtersStepLabel":"Filtre","resultStypeLabel":"Resultat","goToFiltersResultButton":"Neste: Resultat","labelForMonthWithoutEvents":"Det er ingen arrangementer planlagt denne måneden","nextMonthButton":"Neste","availableQuantitySuffix":"ledige","widgetHeaderLabel":"Arrangementer","hostFilterLabel":"Arrangør","allDatesLabel":"Alle","quickDateToday":"I dag","quickDateTomorrow":"I morgen","quickDateThisWeek":"Denne uken","quickDateWeekend":"Helg","applyFiltersLabel":"Vis resultater","showMoreEventsLabel":"+ ### flere","summaryAvailableLabel":"tilgjengelige arrangementstider","summaryWaitlistLabel":"muligheter for venteliste","recurringEventLabel":"Gjentakende","relatedEventsLabel":"Relaterte arrangementer","addToCalendarLabel":"Legg til i kalenderen","copyLinkLabel":"Kopier lenke","copiedLabel":"Kopiert","loadingErrorLabel":"Noe gikk galt. Prøv igjen senere."},"onProductWidget":{"selectTimeButton":"Velg dato og klokkeslett","selectDateAndTimeButton":"Velg dato og klokkeslett","addToCartButton":"Legg i handlekurven","registerInWaitingList":"Meld deg på ventelisten","eventSoldOut":"Utsolgt","appointmentSoldOut":"Utsolgt","remainingBookingsLabel":"Bare ### plasser igjen!","addToCartLabel":"Bekreft","questionsFormTitle":"Spørreskjema","additionalMembersFormTitle":"Bestilling for flere","memberFormDescription":"Legg til e-postadresser for flere mottakere","freeCheckoutNewslettersAgreement":"Klikk her for å motta markedsføringsmeldinger og nyhetsbrev","termsOfUseAgreement":"Ved å merke av i denne boksen godtar du:","termsOfUseAnd":"og","freeCheckoutCloseRegistrationButton":"Lukk","freeCheckoutInvalidEmailMessage":"Oppgi en gyldig e-postadresse","freeCheckoutMandatoryRequiermentsMessageHeader":"Fyll ut skjemaet nedenfor med e-postadressen og navnet ditt for å fullføre påmeldingen","freeRegistrationFormTitle":"Påmelding","freeRegistrationFormDescription":"Fyll ut skjemaet nedenfor med e-postadressen og navnet ditt for å fullføre påmeldingen","fastRegistration":"Gå til kassen","memberFormMember":"Påmeldt deltaker","memberFormEmail":"E-post","memberFormFirstName":"Fornavn","memberFormLastName":"Etternavn","eventQuestionsFormTitle":"Spørreskjema for arrangementet","submitQuestionsForm":"Send inn","mandatoryRequiermentsMessageHeader":"Dette feltet er obligatorisk","mandatoryRequiermentsMessage":"Fyll ut dette feltet","invalidEmailMessage":"Oppgi en gyldig e-postadresse.","noAvailableSlots":"Ingen avtaletider er tilgjengelige for øyeblikket","registrationCompletedMessageTitle":"Påmeldingen er fullført!","privacyPolicyLinkText":"Personvernerklæring","termsOfUseLinkText":"Bruksvilkår","registrationCompletedMessageDescription":"Du er påmeldt. En bekreftelse er sendt til den oppgitte e-postadressen. Sjekk innboksen din.","waitingListNameLabel":"Navn","waitingListEmailLabel":"E-post","memberFormPrimaryBadge":"Hovedkontakt","captchaRequiredMessage":"Fullfør CAPTCHA-en for å fortsette","genericErrorMessage":"Noe gikk galt. Prøv igjen."},"liveShoppingWidget":{"joinToCallButton":"Bli med","enterAdmittedUser":"Gå inn","joinUserWithEmailButton":"Bli med","usernameInputLabel":"Brukernavn","emailInputLabel":"E-post","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Oppgi brukernavn og e-postadresse for å bli med i samtalen","waitForConnectionMessage":"Vent til arrangøren slipper deg inn","reconnectionMessage":"Noe gikk galt. Vi prøver å koble deg til igjen","waitForAdmitMessage":"Vent litt, vi prøver å koble deg til","connectionErrorMessage":"Last inn siden på nytt","productAddedToCartMessage":"Produktet er lagt i handlekurven","emptyUsernameWarning":"Oppgi brukernavnet ditt","emptyEmailWarning":"Oppgi e-postadressen din","wrongEmailFormatWarning":"Oppgi en gyldig e-postadresse","audioRequirmentsIssue":"Systemet støtter ikke VoIP, men du kan delta via telefon","screenRequirmentsIssue":"Skjermdeling er ikke kompatibel med denne nettleseren.","videoRequirmentsIssue":"Video er ikke kompatibel med denne nettleseren.","browserRequirmentsIssue":"Oppdater nettleseren din"}}');

/***/ }),

/***/ "./translations/widget/sv.json":
/*!*************************************!*\
  !*** ./translations/widget/sv.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"Datum","filter_label_locations":"Plats","filter_label_languages":"Språk","filter_label_categories":"Kategori","filter_label_members":"Medlem","filter_label_teams":"Team","filter_all_dates":"Alla datum","filter_all_locations":"Alla platser","filter_all_languages":"Alla språk","filter_all_categories":"Alla kategorier","filter_all_members":"Alla medlemmar","filter_all_teams":"Alla team","filterPropertyDetailsLabel":"Detaljer","filterPropertyEmailLabel":"E-post","filterPropertyPhoneLabel":"Telefon","filterPropertyOperationalHoursLabel":"Öppettider"},"globalWidgetsTranslations":{"priceLabel":"Pris","filtersLabel":"Filter","calendarLabel":"Kalender","priceFreeLabel":"Gratis","dayLabelPlural":"d","dayLabelSingular":"d","hourLabelPlural":"tim","hourLabelSingular":"tim","minuteLabelPlural":"min","minuteLabelSingular":"min","loadingLabel":"Laddar","backLabel":"Tillbaka","closeLabel":"Stäng","nextLabel":"Nästa","previousLabel":"Föregående","languageLabel":"Språk","timezoneLabel":"Tidszon","eventTimeLabel":"Evenemangstid","viewModeListLabel":"Lista","viewModeGridLabel":"Rutnät"},"mainWidget":{"openDialogButton":"Boka evenemang","eventsListTitle":"Evenemangslista","bundlesListTitle":"Paketlista","widgetEventsListSwitchLabel":"Evenemang","widgetBundlesListSwitchLabel":"Paket","bundleAddToCartButtonLabel":"Lägg i varukorgen","eventAddToCartButtonLabel":"Lägg i varukorgen","liveShoppingJoinButtonLabel":"Delta","liveShoppingStartCountdown":"om","bundleEventsListTitle":"Inkluderade evenemang","shareEventPanelTitle":"Dela det här evenemanget","searchEventPlaceholder":"Sök","itemsCounterLabel":"poster","singleEventItemsCounterLabel":"post","clearFiltersLabel":"rensa","bookButtonLabel":"Boka nu","virtualAppointmentLabel":"Tidsbokning","virtualEventLabel":"Virtuellt","inPersonEventLabel":"Evenemang","webinarLabel":"Webbinarium","liveShoppingLabel":"Liveshopping","eventDetailsButtonLabel":"Detaljer","eventDescriptionFieldLabel":"Beskrivning","todaySeparatorLabel":"I dag","tomorrowSeparatorLabel":"I morgon","filtersStepLabel":"Filter","resultStypeLabel":"Resultat","goToFiltersResultButton":"Nästa: Resultat","labelForMonthWithoutEvents":"Det finns inga evenemang inplanerade den här månaden","nextMonthButton":"Nästa","availableQuantitySuffix":"kvar","widgetHeaderLabel":"Evenemang","hostFilterLabel":"Arrangör","allDatesLabel":"Alla","quickDateToday":"I dag","quickDateTomorrow":"I morgon","quickDateThisWeek":"Den här veckan","quickDateWeekend":"Helg","applyFiltersLabel":"Visa resultat","showMoreEventsLabel":"+ ### till","summaryAvailableLabel":"tillgängliga evenemangstillfällen","summaryWaitlistLabel":"möjligheter till väntelista","recurringEventLabel":"Återkommande","relatedEventsLabel":"Relaterade evenemang","addToCalendarLabel":"Lägg till i kalendern","copyLinkLabel":"Kopiera länk","copiedLabel":"Kopierad","loadingErrorLabel":"Något gick fel. Försök igen senare."},"onProductWidget":{"selectTimeButton":"Välj datum och tid","selectDateAndTimeButton":"Välj datum och tid","addToCartButton":"Lägg i varukorgen","registerInWaitingList":"Anmäl dig till väntelistan","eventSoldOut":"Fullbokat","appointmentSoldOut":"Fullbokat","remainingBookingsLabel":"Bara ### platser kvar!","addToCartLabel":"Bekräfta","questionsFormTitle":"Frågeformulär","additionalMembersFormTitle":"Bokning för flera","memberFormDescription":"Lägg till e-postadresser för ytterligare mottagare","freeCheckoutNewslettersAgreement":"Klicka här för att få marknadsföringsmejl och nyhetsbrev","termsOfUseAgreement":"Genom att markera den här rutan godkänner du:","termsOfUseAnd":"och","freeCheckoutCloseRegistrationButton":"Stäng","freeCheckoutInvalidEmailMessage":"Ange en giltig e-postadress","freeCheckoutMandatoryRequiermentsMessageHeader":"Fyll i formuläret nedan med din e-postadress och ditt namn för att slutföra anmälan","freeRegistrationFormTitle":"Anmälan","freeRegistrationFormDescription":"Fyll i formuläret nedan med din e-postadress och ditt namn för att slutföra anmälan","fastRegistration":"Till kassan","memberFormMember":"Anmäld deltagare","memberFormEmail":"E-post","memberFormFirstName":"Förnamn","memberFormLastName":"Efternamn","eventQuestionsFormTitle":"Frågeformulär för evenemanget","submitQuestionsForm":"Skicka","mandatoryRequiermentsMessageHeader":"Det här fältet är obligatoriskt","mandatoryRequiermentsMessage":"Fyll i det här fältet","invalidEmailMessage":"Ange en giltig e-postadress.","noAvailableSlots":"Det finns inga bokningsbara tider för tillfället","registrationCompletedMessageTitle":"Anmälan är klar!","privacyPolicyLinkText":"Integritetspolicy","termsOfUseLinkText":"Användarvillkor","registrationCompletedMessageDescription":"Du har anmält dig. Ett bekräftelsemejl har skickats till den angivna e-postadressen. Kontrollera din inkorg.","waitingListNameLabel":"Namn","waitingListEmailLabel":"E-post","memberFormPrimaryBadge":"Huvudkontakt","captchaRequiredMessage":"Slutför CAPTCHA-verifieringen för att fortsätta","genericErrorMessage":"Något gick fel. Försök igen."},"liveShoppingWidget":{"joinToCallButton":"Delta","enterAdmittedUser":"Gå in","joinUserWithEmailButton":"Delta","usernameInputLabel":"Användarnamn","emailInputLabel":"E-post","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"Ange ditt användarnamn och din e-postadress för att delta i samtalet","waitForConnectionMessage":"Vänta tills arrangören släpper in dig","reconnectionMessage":"Något gick fel. Vi försöker ansluta dig igen","waitForAdmitMessage":"Vänta, vi försöker ansluta dig","connectionErrorMessage":"Ladda om sidan","productAddedToCartMessage":"Produkten har lagts i varukorgen","emptyUsernameWarning":"Ange ditt användarnamn","emptyEmailWarning":"Ange din e-postadress","wrongEmailFormatWarning":"Ange en giltig e-postadress","audioRequirmentsIssue":"Systemet stöder inte VoIP, men du kan delta via telefon","screenRequirmentsIssue":"Skärmdelning är inte kompatibel med den här webbläsaren.","videoRequirmentsIssue":"Video är inte kompatibelt med den här webbläsaren.","browserRequirmentsIssue":"Uppdatera din webbläsare"}}');

/***/ }),

/***/ "./translations/widget/zh-cn.json":
/*!****************************************!*\
  !*** ./translations/widget/zh-cn.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"customFilters":{"filter_label_dates":"日期","filter_label_locations":"地点","filter_label_languages":"语言","filter_label_categories":"类别","filter_label_members":"成员","filter_label_teams":"团队","filter_all_dates":"所有日期","filter_all_locations":"所有地点","filter_all_languages":"所有语言","filter_all_categories":"所有类别","filter_all_members":"所有成员","filter_all_teams":"所有团队","filterPropertyDetailsLabel":"详情","filterPropertyEmailLabel":"电子邮箱","filterPropertyPhoneLabel":"电话","filterPropertyOperationalHoursLabel":"营业时间"},"globalWidgetsTranslations":{"priceLabel":"价格","filtersLabel":"筛选","calendarLabel":"日历","priceFreeLabel":"免费","dayLabelPlural":"天","dayLabelSingular":"天","hourLabelPlural":"小时","hourLabelSingular":"小时","minuteLabelPlural":"分钟","minuteLabelSingular":"分钟","loadingLabel":"加载中","backLabel":"返回","closeLabel":"关闭","nextLabel":"下一步","previousLabel":"上一步","languageLabel":"语言","timezoneLabel":"时区","eventTimeLabel":"活动时间","viewModeListLabel":"列表","viewModeGridLabel":"网格"},"mainWidget":{"openDialogButton":"预订活动","eventsListTitle":"活动列表","bundlesListTitle":"套餐列表","widgetEventsListSwitchLabel":"活动","widgetBundlesListSwitchLabel":"套餐","bundleAddToCartButtonLabel":"加入购物车","eventAddToCartButtonLabel":"加入购物车","liveShoppingJoinButtonLabel":"加入","liveShoppingStartCountdown":"距离开始还有","bundleEventsListTitle":"包含的活动","shareEventPanelTitle":"分享此活动","searchEventPlaceholder":"搜索","itemsCounterLabel":"项","singleEventItemsCounterLabel":"项","clearFiltersLabel":"清除","bookButtonLabel":"立即预订","virtualAppointmentLabel":"预约","virtualEventLabel":"线上","inPersonEventLabel":"活动","webinarLabel":"网络研讨会","liveShoppingLabel":"直播购物","eventDetailsButtonLabel":"详情","eventDescriptionFieldLabel":"描述","todaySeparatorLabel":"今天","tomorrowSeparatorLabel":"明天","filtersStepLabel":"筛选","resultStypeLabel":"结果","goToFiltersResultButton":"下一步：结果","labelForMonthWithoutEvents":"本月暂无安排的活动","nextMonthButton":"下一步","availableQuantitySuffix":"剩余","widgetHeaderLabel":"活动","hostFilterLabel":"主办方","allDatesLabel":"全部","quickDateToday":"今天","quickDateTomorrow":"明天","quickDateThisWeek":"本周","quickDateWeekend":"周末","applyFiltersLabel":"显示结果","showMoreEventsLabel":"+ 还有 ### 项","summaryAvailableLabel":"可预订的活动场次","summaryWaitlistLabel":"可加入候补名单的场次","recurringEventLabel":"定期活动","relatedEventsLabel":"相关活动","addToCalendarLabel":"添加到日历","copyLinkLabel":"复制链接","copiedLabel":"已复制","loadingErrorLabel":"发生错误，请稍后重试。"},"onProductWidget":{"selectTimeButton":"选择日期和时间","selectDateAndTimeButton":"选择日期和时间","addToCartButton":"加入购物车","registerInWaitingList":"加入候补名单","eventSoldOut":"已满","appointmentSoldOut":"已满","remainingBookingsLabel":"仅剩 ### 个名额！","addToCartLabel":"确认","questionsFormTitle":"问题表单","additionalMembersFormTitle":"多人预订","memberFormDescription":"添加其他收件人的电子邮箱地址","freeCheckoutNewslettersAgreement":"点击此处接收营销邮件和新闻通讯","termsOfUseAgreement":"勾选此框即表示您同意以下条款：","termsOfUseAnd":"和","freeCheckoutCloseRegistrationButton":"关闭","freeCheckoutInvalidEmailMessage":"请输入有效的电子邮箱地址","freeCheckoutMandatoryRequiermentsMessageHeader":"请在下方表单中填写您的电子邮箱和姓名，以完成报名","freeRegistrationFormTitle":"报名","freeRegistrationFormDescription":"请在下方表单中填写您的电子邮箱和姓名，以完成报名","fastRegistration":"结账","memberFormMember":"报名者","memberFormEmail":"电子邮箱","memberFormFirstName":"名","memberFormLastName":"姓","eventQuestionsFormTitle":"活动问题表单","submitQuestionsForm":"提交","mandatoryRequiermentsMessageHeader":"此项为必填项","mandatoryRequiermentsMessage":"请填写此项","invalidEmailMessage":"请输入有效的电子邮箱地址。","noAvailableSlots":"目前没有可预约的时段","registrationCompletedMessageTitle":"报名完成！","privacyPolicyLinkText":"隐私政策","termsOfUseLinkText":"使用条款","registrationCompletedMessageDescription":"您已成功报名。确认邮件已发送至您提供的电子邮箱，请查收。","waitingListNameLabel":"姓名","waitingListEmailLabel":"电子邮箱","memberFormPrimaryBadge":"主要联系人","captchaRequiredMessage":"请完成验证码验证以继续","genericErrorMessage":"发生错误，请重试。"},"liveShoppingWidget":{"joinToCallButton":"加入","enterAdmittedUser":"进入","joinUserWithEmailButton":"加入","usernameInputLabel":"用户名","emailInputLabel":"电子邮箱","usernameInputPlaceholder":"john.doe","emailInputPlaceholder":"john.doe@acme.com","loginFormTitle":"请输入用户名和电子邮箱以加入通话","waitForConnectionMessage":"请等待主办方允许您进入","reconnectionMessage":"发生错误，我们正在尝试重新连接","waitForAdmitMessage":"请稍候，我们正在尝试为您建立连接","connectionErrorMessage":"请刷新页面","productAddedToCartMessage":"商品已加入购物车","emptyUsernameWarning":"请输入用户名","emptyEmailWarning":"请输入电子邮箱","wrongEmailFormatWarning":"请输入有效的电子邮箱地址","audioRequirmentsIssue":"系统不支持网络语音通话，但您可以通过电话接入音频","screenRequirmentsIssue":"屏幕共享与当前浏览器不兼容。","videoRequirmentsIssue":"视频与当前浏览器不兼容。","browserRequirmentsIssue":"请更新浏览器"}}');

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_SettingsPage_jsx.js.map?ver=6bb4d37fa8f95187a8e5