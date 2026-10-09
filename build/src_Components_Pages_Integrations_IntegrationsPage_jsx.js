"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_Integrations_IntegrationsPage_jsx"],{

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

/***/ "./src/Components/Pages/Integrations/IntegrationsPage.jsx":
/*!****************************************************************!*\
  !*** ./src/Components/Pages/Integrations/IntegrationsPage.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Containers_ServiceCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Containers/ServiceCard */ "./src/Components/Containers/ServiceCard.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks/useCacheRefresh */ "./src/hooks/useCacheRefresh.js");
/* harmony import */ var _IntegrationsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IntegrationsPage.module.scss */ "./src/Components/Pages/Integrations/IntegrationsPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













// The integrations landing. The copy comes from the native WordPress screen
// this replaced (servv_render_integrations_overview in servv.php) — that one
// no longer renders, so these are the single source of those strings.

const IntegrationsPage = ({
  handleResetSubpage = () => {},
  resetSelectedSubpage = false
}) => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore)(s => s.settings);
  const zoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore)(s => s.zoomConnected);
  const stripeConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore)(s => s.stripeConnected);
  const gmailConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore)(s => s.gmailConnected);
  const calendarConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore)(s => s.calendarConnected);
  const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const loadAccounts = async () => {
    const services = ["calendar", "gmail", "zoom", "stripe"];
    const results = await Promise.allSettled(services.map(service => _utilities_adminApi__WEBPACK_IMPORTED_MODULE_7__["default"].get(`/wp-json/servv-plugin/v1/${service}/account`, {
      headers: {
        "X-WP-Nonce": window.servvData.nonce
      }
    })));
    setAccounts(previous => {
      const next = {
        ...previous
      };
      results.forEach((result, index) => {
        if (result.status === "fulfilled") next[services[index]] = result.value.data;
      });
      return next;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadAccounts();
  }, []);
  (0,_hooks_useCacheRefresh__WEBPACK_IMPORTED_MODULE_9__["default"])(["accounts"], loadAccounts);
  const disconnect = async service => {
    setBusy(service);
    try {
      await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_7__["default"].delete(`/wp-json/servv-plugin/v1/${service}/account`, {
        headers: {
          "X-WP-Nonce": window.servvData.nonce
        }
      });
      setAccounts(previous => ({
        ...previous,
        [service]: null
      }));
      await _store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore.getState().syncAccountsAfterEvents();
    } catch {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error("Unable to disconnect the account. Please try again.");
    } finally {
      setBusy(null);
    }
  };
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resetSelectedSubpage) handleResetSubpage(false);
  }, [resetSelectedSubpage]);

  // Stripe sends the admin back here with a section parameter after connecting.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const params = new URLSearchParams(new URL(window.location).search);
    if (params.get("section") === "stripe-integration") {
      window.history.pushState({}, "", `${window.location.origin}${servvData.adminUrl}?page=servvai-event-booking`);
      navigate("/integrations/stripe");
    }
  }, []);

  // Zoom and Stripe are paid-plan features.
  const isFeatureAvailable = settings?.current_plan?.id === 2 || settings?.current_plan?.id === 3;
  let analyticsId = "";
  try {
    const raw = settings?.settings?.widget_style_settings;
    analyticsId = (typeof raw === "string" ? JSON.parse(raw) : raw)?.google_analytics_id || "";
  } catch {
    /* Leave the status unconfigured when settings are unavailable. */
  }
  const cards = [{
    key: "calendars",
    glyph: "G",
    title: "Google Calendar",
    // From the native screen.
    description: "Sync event schedules to Google Calendar.",
    connected: calendarConnected,
    route: "/integrations/calendars"
  }, {
    key: "gmail",
    glyph: "M",
    title: "Gmail",
    description: "Send event email notifications and reminders.",
    connected: gmailConnected,
    route: "/integrations/gmail"
  }, {
    key: "zoom",
    glyph: "Z",
    title: "Zoom",
    description: "Create and manage online event meetings.",
    connected: zoomConnected,
    route: "/integrations/zoom",
    requiresPlan: true
  }, {
    key: "stripe",
    glyph: "S",
    title: "Stripe",
    description: "Accept paid registrations and manage payout settings.",
    connected: stripeConnected,
    route: "/integrations/stripe",
    requiresPlan: true
  }, ...(settings?.is_wp_marketplace ? [{
    key: "analytics",
    glyph: "A",
    title: "Google Analytics",
    description: "Track visits, clicks, and conversions for your events in one place.",
    connected: analyticsId.length > 2,
    route: "/integrations/analytics"
  }] : [])];
  const paymentsOffline = isFeatureAvailable && !("stripe" in accounts ? accounts.stripe?.charges_enabled : stripeConnected);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: !settings,
    withBackground: true,
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _IntegrationsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].page,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: t("Integrations"),
        description: "Payments, calendars, and email \u2014 connected in the same place",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: _IntegrationsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].divider
        })
      }), paymentsOffline && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: _IntegrationsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].notice,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          "aria-hidden": "true",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("path", {
            d: "M12 8v4m0 3.5v.5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "9"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: _IntegrationsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].noticeText,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("strong", {
            children: t("Payments are not live.")
          }), " ", t("Connect Stripe to sell paid tickets — free registrations work already.")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "primary",
          size: "sm",
          text: t("Connect Stripe"),
          onAction: () => navigate("/integrations/stripe")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: _IntegrationsPage_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].grid,
        children: [...cards].sort((a, b) => a.key === "stripe" ? -1 : b.key === "stripe" ? 1 : 0).map(card => {
          const service = card.key === "calendars" ? "calendar" : card.key;
          const account = accounts[service];
          const accountLabel = account?.google_calendar_email || account?.email || account?.name || (service === "analytics" ? analyticsId : "");
          const connected = service in accounts ? Boolean(service === "zoom" || service === "gmail" ? account?.email : account?.id) : card.connected;
          const incomplete = service === "stripe" && connected && !account?.charges_enabled;
          const locked = card.requiresPlan && !isFeatureAvailable;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Containers_ServiceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            tile: "raised",
            glyph: card.glyph,
            title: t(card.title),
            description: t(card.description),
            status: incomplete ? t("Connection incomplete") : connected ? t("Connected") : t("Not connected"),
            tone: incomplete ? "warn" : connected ? "on" : "neutral",
            meta: locked ? t("Available on a paid plan") : undefined,
            actionLabel: connected ? t("Manage") : t("Connect"),
            actionType: connected ? "secondary" : "primary",
            accountLabel: connected ? accountLabel : undefined,
            onDisconnect: connected && !locked && service !== "analytics" ? () => disconnect(service) : undefined,
            busy: busy === service,
            disabled: locked,
            onAction: () => navigate(card.route)
          }, card.key);
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationsPage);

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

/***/ "./src/Components/Pages/Integrations/IntegrationsPage.module.scss":
/*!************************************************************************!*\
  !*** ./src/Components/Pages/Integrations/IntegrationsPage.module.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"NKBTD9w5uh_ac5BdJljW","divider":"Vy902aqOjRGLYP56t9vu","grid":"Ghfl_3TFk_RuBU4TCOQe","notice":"mrs8XfkNpeaN4AS36yuW","noticeText":"TLdQOyQgQgfQYl1JGQ5f","footnote":"QUaPjq4y1qqT60AinAXQ"});

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
//# sourceMappingURL=src_Components_Pages_Integrations_IntegrationsPage_jsx.js.map?ver=4e4843beee062da8a483