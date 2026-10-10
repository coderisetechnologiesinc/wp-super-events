"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_PlansPage_jsx"],{

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

/***/ "./src/Components/Controls/PaymentOptionsModal.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Controls/PaymentOptionsModal.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _PageActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _PaymentOptionsModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentOptionsModal.module.scss */ "./src/Components/Controls/PaymentOptionsModal.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const PaymentOptionsModal = ({
  open = false,
  title = "Payment option",
  text = "Select a payment option (monthly or annual)",
  price = 0,
  priceAnnual = 0,
  fee = 0,
  onAcceptMonthly = () => {},
  onAcceptAnnual = () => {},
  onCancel = () => {}
}) => {
  if (!open) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_0__["default"], {
    size: "sm",
    title: title,
    description: text,
    onClose: onCancel,
    footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: _PaymentOptionsModal_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].actions,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Cancel",
        type: "secondary",
        onAction: onCancel
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Monthly",
        onAction: onAcceptMonthly
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "Annual",
        onAction: onAcceptAnnual
      })]
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dl", {
      className: _PaymentOptionsModal_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].summary,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
          children: "Price monthly"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dd", {
          children: ["$", price]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
          children: "Price annual"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dd", {
          children: ["$", priceAnnual]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
          children: "Application fee"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dd", {
          children: [fee, " %"]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentOptionsModal);

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

/***/ "./src/Components/Pages/PlansPage.jsx":
/*!********************************************!*\
  !*** ./src/Components/Pages/PlansPage.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlansPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/lib/index.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Controls_PaymentOptionsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/PaymentOptionsModal */ "./src/Components/Controls/PaymentOptionsModal.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlansSupport.module.scss */ "./src/Components/Pages/PlansSupport.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













function PlansPage() {
  var _shop$current_plan;
  const [shop, setShop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [plans, setPlans] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showPaymentForm, setShowPaymentForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const checkoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const checkoutHost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      checkoutRef.current?.destroy();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (showPaymentForm && checkoutRef.current && checkoutHost.current) {
      checkoutRef.current.mount(checkoutHost.current);
    }
  }, [showPaymentForm]);
  async function openPortal() {
    setBusy(true);
    try {
      const response = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].post("/wp-json/servv-plugin/v1/shop/billing/portal/session", {}, {
        headers: {
          "X-WP-Nonce": window.servvData.nonce
        }
      });
      if (response.data?.redirect_url) window.open(response.data.redirect_url, "_blank", "noopener,noreferrer");else throw new Error("Missing portal URL");
    } catch {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("WP Super Events was unable to open the billing portal.");
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  async function activatePlan(id, isAnnual = false) {
    setBusy(true);
    setSelectedPlan(null);
    try {
      const response = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].post(`/wp-json/servv-plugin/v1/shop/paymentplans/${id}`, {
        is_annual: isAnnual
      }, {
        headers: {
          "X-WP-Nonce": window.servvData.nonce
        }
      });
      const {
        client_secret,
        public_key
      } = response.data;
      const stripe = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)(public_key);
      if (!stripe || !client_secret) throw new Error("Checkout unavailable");
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: async () => {
          checkoutRef.current?.destroy();
          checkoutRef.current = null;
          if (!mounted.current) return;
          setShowPaymentForm(false);
          react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Your billing plan has been successfully activated.");
          // The wait below is a few seconds of webhook, so the page says so.
          if (mounted.current) setBusy(true);
          try {
            // Waits for the activated plan to actually come back, and drops the
            // cached settings on the way, before the page re-reads the shop.
            await _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__.useServvStore.getState().syncPlanAfterActivation(id);
            const refreshed = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
              headers: {
                "X-WP-Nonce": window.servvData.nonce
              }
            });
            if (mounted.current) setShop(refreshed.data);
          } catch {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Plan status could not be refreshed.");
          } finally {
            if (mounted.current) setBusy(false);
          }
        }
      });
      if (!mounted.current) {
        checkout.destroy();
        return;
      }
      checkoutRef.current?.destroy();
      checkoutRef.current = checkout;
      setShowPaymentForm(true);
    } catch {
      if (mounted.current) react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("WP Super Events was unable to activate the billing plan.");
    } finally {
      if (mounted.current) setBusy(false);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const controller = new AbortController();
    const options = {
      headers: {
        "X-WP-Nonce": window.servvData.nonce
      },
      signal: controller.signal
    };
    Promise.allSettled([_utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].get("/wp-json/servv-plugin/v1/shop/info", options), _utilities_adminApi__WEBPACK_IMPORTED_MODULE_6__["default"].get("/wp-json/servv-plugin/v1/shop/paymentplans", options)]).then(([shopResult, plansResult]) => {
      if (controller.signal.aborted) return;
      const nextErrors = {};
      if (shopResult.status === "fulfilled") setShop(shopResult.value.data);else nextErrors.shop = "Plan status could not be refreshed.";
      if (plansResult.status === "fulfilled") {
        var _plansResult$value$da;
        const catalog = (_plansResult$value$da = plansResult.value.data?.plans) !== null && _plansResult$value$da !== void 0 ? _plansResult$value$da : plansResult.value.data;
        setPlans((Array.isArray(catalog) ? catalog : Object.values(catalog || {})).filter(plan => plan && typeof plan === "object"));
      } else nextErrors.plans = "Available plans could not be loaded.";
      setErrors(nextErrors);
      setLoading(false);
    });
    return () => controller.abort();
  }, []);
  const current = (_shop$current_plan = shop?.current_plan) !== null && _shop$current_plan !== void 0 ? _shop$current_plan : shop?.plan;
  const currentName = typeof current === "object" && current ? current.name || "Current plan" : current || "No active plan detected";
  const isMarketplace = Boolean(shop?.is_wp_marketplace);
  const maxPlanId = Math.max(...plans.map(plan => Number(plan.id)));
  const visiblePlans = plans.filter(plan => !isMarketplace || Number(plan.id) !== 1);
  const currentPaid = Number(current?.price) > 0 || Number(current?.price_annual) > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].plansHeader,
        title: "Plans",
        description: "WP Super Events is free during the 2026 launch period through December 31, 2026. Paid plans are planned for 2027 and will be announced before the launch period ends.",
        actions: currentPaid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          text: "Billing settings",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
          type: "secondary",
          disabled: busy,
          onAction: openPortal
        }) : undefined
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].divider
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("section", {
        className: `${_PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].card} ${_PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].current}`,
        "aria-busy": loading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].eyebrow,
            children: "Current plan"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
            className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].planName,
            children: loading ? "Loading plan…" : currentName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
            children: "Launch period \xB7 through December 31, 2026"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].badge,
          children: "2026 launch period"
        })]
      }), errors.shop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].notice,
        role: "alert",
        children: errors.shop
      }), errors.plans ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].notice,
        role: "alert",
        children: errors.plans
      }) : !loading && !plans.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].notice,
        children: "No public paid plan catalog is available yet."
      }) : null, !showPaymentForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].planGrid,
        "aria-busy": loading || busy,
        children: visiblePlans.map((plan, index) => {
          var _plan$price, _plan$id;
          const price = Number((_plan$price = plan.price) !== null && _plan$price !== void 0 ? _plan$price : plan.monthly_price) || 0;
          const annual = Number(plan.price_annual) || 0;
          const isCurrent = current?.id != null && plan.id != null && String(current.id) === String(plan.id) || current && plan.name === currentName;
          const isUpgradeable = current?.id != null && Number(plan.id) > Number(current.id);
          const isPremium = Number(plan.id) === maxPlanId;
          const isPaid = price > 0 || annual > 0;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("section", {
            className: `${_PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].card} ${_PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].planCard} ${isPremium ? _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].premium : ""}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].planHeading,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
                className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].planLabel,
                children: plan.name || "Plan"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].price,
                children: price > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: ["$", price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                    children: "/mo"
                  })]
                }) : annual > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: ["$", annual, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                    children: "/yr"
                  })]
                }) : "Free"
              }), Number(plan.application_fee_percent) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p", {
                className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].fee,
                children: [plan.application_fee_percent, "% transaction fee"]
              }), plan.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                children: plan.description
              })]
            }), Array.isArray(plan.features) && plan.features.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
              className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].features,
              children: plan.features.map((feature, i) => {
                const object = feature && typeof feature === "object";
                const included = !object || feature.value === "true" || feature.value === true;
                const Icon = included ? _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__["default"] : _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__["default"];
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", {
                  className: included ? "" : _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].unavailable,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Icon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                    children: object ? feature.title || feature.name || "" : String(feature)
                  })]
                }, i);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].planActions,
              children: [isCurrent && isPaid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
                text: "Manage",
                fullWidth: true,
                disabled: busy,
                onAction: openPortal
              }) : !isCurrent && isUpgradeable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
                text: "Activate",
                fullWidth: true,
                disabled: busy || loading,
                onAction: () => isMarketplace ? activatePlan(plan.id) : setSelectedPlan(plan)
              }) : null, isCurrent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].badge,
                children: "Current plan"
              })]
            })]
          }, (_plan$id = plan.id) !== null && _plan$id !== void 0 ? _plan$id : index);
        })
      }), showPaymentForm && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("section", {
        className: _PlansSupport_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].card,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          id: "servv-payment-element",
          ref: checkoutHost
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PaymentOptionsModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        open: Boolean(selectedPlan),
        onCancel: () => setSelectedPlan(null),
        fee: selectedPlan?.application_fee_percent,
        price: selectedPlan?.price || 0,
        priceAnnual: selectedPlan?.price_annual || 0,
        onAcceptMonthly: () => selectedPlan && activatePlan(selectedPlan.id),
        onAcceptAnnual: () => selectedPlan && activatePlan(selectedPlan.id, true)
      })]
    })
  });
}

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

/***/ "./src/Components/Controls/PaymentOptionsModal.module.scss":
/*!*****************************************************************!*\
  !*** ./src/Components/Controls/PaymentOptionsModal.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"actions":"XBm1yg9GjmWaz3veZfFA","summary":"_mIM4zsN0ujrG6F5RcyE"});

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

/***/ "./src/Components/Pages/PlansSupport.module.scss":
/*!*******************************************************!*\
  !*** ./src/Components/Pages/PlansSupport.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"planCard":"fRgEbj5M3orqyhSYTZud","planHeading":"WQg8OdSbPcxlMORAs8zx","card":"gJ7kPiHbnFYuU96l5rxz","planLabel":"Q_72bu2MtVtONMSl0sDe","price":"Kre0K6uhjfMjYXoxsSqf","planActions":"nnuYZ_4i7qJ79C6q8Xfv","premium":"tWD3DsmYO3BkPZ5l4W_B","features":"HCuLbevyv514DTXmRM0w","fee":"PYZPK7JTi6tbxoErzFkd","unavailable":"n9BeBmvo1k1h6JUHlXRG","badge":"WDixQzYfQx7hxn_w0l8h","plansHeader":"ObOBPWL_GoIP31wv__Nx","divider":"icuLBkLGRuaWU4WUNfeZ","current":"WG4XQh_DpA080t3wL0E1","eyebrow":"Cg0qlOGDVrds06DNmTTk","planName":"CNgPHa7fYkj3Vjkgf5Lf","button":"xiViJ1qzfs15yE3nCuBg","planGrid":"nMHNXiRjKe5_6aquXh7h","featured":"JdUt4WqFGUuPwz0a_1GG","cardTitle":"BXlEOJr4qX3SBbTSa2qO","notice":"r4hwSKVuAiY9Aaem_cGD","supportLayout":"gwxe6rTqrwgLPthHeqNV","stack":"HJBWq5Ie3FFAK2aBKhg_","linkGrid":"OUHACuy2d5v18Wp5YOLe","resource":"OBo7FuOABt5lEKKiaWye","resourceIcon":"DW2ixlOakelIkqafkRDV","external":"JwAt5e_wn28nqAm3JHMQ","system":"u9rwpt3rhlKl3Be5T63t","facts":"Z9aqcj9l084v2CYoPmJW","report":"QYmj3g76RgXdpl_noU51","reportActions":"MlNwNs6VmHmz9J_5dtV8"});

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CheckCircleIcon({
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
    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CreditCardIcon({
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
    d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CreditCardIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function XCircleIcon({
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
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var RELEASE_TRAIN = 'acacia';

var runtimeVersionToUrlVersion = function runtimeVersionToUrlVersion(version) {
  return version === 3 ? 'v3' : version;
};

var ORIGIN = 'https://js.stripe.com';
var STRIPE_JS_URL = "".concat(ORIGIN, "/").concat(RELEASE_TRAIN, "/stripe.js");
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var STRIPE_JS_URL_REGEX = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';

var isStripeJSURL = function isStripeJSURL(url) {
  return V3_URL_REGEX.test(url) || STRIPE_JS_URL_REGEX.test(url);
};

var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(ORIGIN, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!isStripeJSURL(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(STRIPE_JS_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "6.1.0",
    startTime: startTime
  });
};

var stripePromise$1 = null;
var onErrorListener = null;
var onLoadListener = null;

var onError = function onError(reject) {
  return function (cause) {
    reject(new Error('Failed to load Stripe.js', {
      cause: cause
    }));
  };
};

var onLoad = function onLoad(resolve, reject) {
  return function () {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error('Stripe.js not available'));
    }
  };
};

var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise$1 !== null) {
    return stripePromise$1;
  }

  stripePromise$1 = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;

        // remove event listeners
        script.removeEventListener('load', onLoadListener);
        script.removeEventListener('error', onErrorListener); // if script exists, but we are reloading due to an error,
        // reload script to trigger 'load' event

        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }

      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener('load', onLoadListener);
      script.addEventListener('error', onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  }); // Resets stripePromise on error

  return stripePromise$1["catch"](function (error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var pk = args[0];
  var isTestKey = pk.match(/^pk_test/); // @ts-expect-error this is not publicly typed

  var version = runtimeVersionToUrlVersion(maybeStripe.version);
  var expectedVersion = RELEASE_TRAIN;

  if (isTestKey && version !== expectedVersion) {
    console.warn("Stripe.js@".concat(version, " was loaded on the page, but @stripe/stripe-js@").concat("6.1.0", " expected Stripe.js@").concat(expectedVersion, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var stripePromise;
var loadCalled = false;

var getStripePromise = function getStripePromise() {
  if (stripePromise) {
    return stripePromise;
  }

  stripePromise = loadScript(null)["catch"](function (error) {
    // clear cache on error
    stripePromise = null;
    return Promise.reject(error);
  });
  return stripePromise;
}; // Execute our own script injection after a tick to give users time to do their
// own script injection.


Promise.resolve().then(function () {
  return getStripePromise();
})["catch"](function (error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now(); // if previous attempts are unsuccessful, will re-load script

  return getStripePromise().then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/@stripe/stripe-js/lib/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/lib/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* reexport safe */ _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.loadStripe)
/* harmony export */ });
/* harmony import */ var _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/index.mjs */ "./node_modules/@stripe/stripe-js/dist/index.mjs");



/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_PlansPage_jsx.js.map?ver=8ee93801f2b0458ec665