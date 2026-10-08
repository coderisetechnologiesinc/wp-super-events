"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_WidgetPage_jsx"],{

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

/***/ "./src/Components/Pages/WidgetPage.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Pages/WidgetPage.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WidgetPage),
/* harmony export */   widgetShortcode: () => (/* binding */ widgetShortcode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/FunnelIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/RectangleStackIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/SwatchIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CalendarDaysIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js");
/* harmony import */ var _inc_widget_v2_schema_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inc/widget-v2-schema.json */ "./inc/widget-v2-schema.json");
/* harmony import */ var _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WidgetPage.module.scss */ "./src/Components/Pages/WidgetPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const fields = _inc_widget_v2_schema_json__WEBPACK_IMPORTED_MODULE_5__.filter(field => field.id);
const defaults = Object.fromEntries(fields.map(field => {
  var _field$default;
  return [field.id, (_field$default = field.default) !== null && _field$default !== void 0 ? _field$default : ''];
}));
const colorSwatch = value => {
  const raw = String(value || '#000000');
  return raw.length === 4 || raw.length === 5 ? '#' + raw.slice(1, 4).split('').map(char => char + char).join('') : raw.slice(0, 7);
};
const cleanText = value => String(value).replace(/[;{}<>\[\]"]/g, '').slice(0, 300);
function widgetShortcode(config) {
  return `[servv_events ${fields.map(field => {
    var _config$field$id;
    const value = (_config$field$id = config[field.id]) !== null && _config$field$id !== void 0 ? _config$field$id : defaults[field.id];
    return `${field.id}="${field.type === 'checkbox' ? value ? 'true' : 'false' : field.type === 'text' ? cleanText(value) : String(value).replace(/["\[\]]/g, char => encodeURIComponent(char))}"`;
  }).join(' ')}]`;
}
async function request(action, config, signal) {
  const response = await fetch(window.servvData.ajaxUrl, {
    method: 'POST',
    credentials: 'same-origin',
    signal,
    body: new URLSearchParams({
      action,
      security: window.servvData.nonce,
      ...(config ? {
        config: JSON.stringify(config)
      } : {})
    })
  });
  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result?.data?.message || 'Unable to load widget settings.');
  return result.data;
}
const sections = [];
for (const field of _inc_widget_v2_schema_json__WEBPACK_IMPORTED_MODULE_5__) {
  if (field.type === 'header') sections.push({
    title: field.content,
    fields: []
  });else if (field.id) sections[sections.length - 1].fields.push(field);
}
const sectionIcons = [_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__["default"], _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"], _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__["default"], _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__["default"], _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__["default"]];
function WidgetPage() {
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaults);
  const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaults);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [notice, setNotice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [previewError, setPreviewError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [previewLoading, setPreviewLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [previewConfig, setPreviewConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const form = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const shortcode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => widgetShortcode(config), [config]);
  const dirty = JSON.stringify(config) !== JSON.stringify(saved);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const controller = new AbortController();
    request('servv_widget_v2_settings', null, controller.signal).then(data => {
      setConfig(data.config);
      setSaved(data.config);
      setPreviewConfig(data.config);
    }).catch(error => {
      if (error.name !== 'AbortError') setError(error.message);
    }).finally(() => {
      if (!controller.signal.aborted) setLoading(false);
    });
    return () => controller.abort();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!previewConfig) return;
    const controller = new AbortController();
    setPreviewLoading(true);
    setPreviewError('');
    request('servv_widget_v2_preview', previewConfig, controller.signal).then(data => setPreview(data.html)).catch(error => {
      if (error.name !== 'AbortError') setPreviewError(error.message);
    }).finally(() => {
      if (!controller.signal.aborted) setPreviewLoading(false);
    });
    return () => controller.abort();
  }, [previewConfig]);
  function change(field, value) {
    setConfig(current => ({
      ...current,
      [field.id]: field.type === 'range' ? Number(value) : value
    }));
    setNotice('');
  }
  async function save(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const result = await request('servv_widget_v2_settings', config);
      setConfig(result.config);
      setSaved(result.config);
      setPreviewConfig(result.config);
      setNotice('Widget settings saved.');
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  }
  async function copy() {
    if (!form.current?.reportValidity()) return;
    try {
      await navigator.clipboard.writeText(shortcode);
      setNotice('Shortcode copied.');
    } catch {
      setError('Select the shortcode below and copy it manually.');
    }
  }
  function chooseImage(field) {
    if (!window.wp?.media) {
      setError('The media library is unavailable. Enter an image URL instead.');
      return;
    }
    const frame = window.wp.media({
      title: 'Choose widget background',
      button: {
        text: 'Use image'
      },
      library: {
        type: 'image'
      },
      multiple: false
    });
    frame.on('select', () => change(field, frame.state().get('selection').first().toJSON().url));
    frame.open();
  }
  function renderField(field) {
    var _config$field$id2;
    if (field.id === 'view_mode') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].modes,
      role: "radiogroup",
      "aria-label": "Display mode",
      children: field.options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
        className: config.view_mode === option.value ? _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].selected : '',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
          type: "radio",
          name: "view_mode",
          value: option.value,
          checked: config.view_mode === option.value,
          onChange: () => change(field, option.value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: option.label
        })]
      }, option.value))
    });
    if (field.type === 'checkbox') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
      className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].toggle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        type: "checkbox",
        role: "switch",
        checked: !!config[field.id],
        onChange: event => change(field, event.target.checked)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        children: [field.label, field.info && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
          children: field.info
        })]
      })]
    }, field.id);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
      className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].field,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: field.label
      }), field.type === 'select' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("select", {
        value: config[field.id],
        onChange: event => change(field, event.target.value),
        children: field.options.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
          value: option.value,
          children: option.label
        }, option.value))
      }) : field.type === 'color' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].colorControl,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
          type: "color",
          "aria-label": `${field.label} color picker`,
          value: colorSwatch(config[field.id]),
          onChange: event => change(field, event.target.value + (String(config[field.id]).length === 9 ? String(config[field.id]).slice(7) : ''))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
          type: "text",
          "aria-label": `${field.label} hex value`,
          value: config[field.id],
          pattern: "#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8}",
          required: true,
          onChange: event => change(field, event.target.value)
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        type: field.type === 'range' ? 'number' : field.type === 'color' ? 'color' : field.type === 'url' ? 'url' : 'text',
        value: (_config$field$id2 = config[field.id]) !== null && _config$field$id2 !== void 0 ? _config$field$id2 : '',
        min: field.min,
        max: field.max,
        step: field.step,
        required: field.type === 'range',
        onChange: event => change(field, event.target.value)
      }), field.id === 'background_image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "secondary",
        size: "sm",
        text: "Choose from media library",
        onAction: () => chooseImage(field)
      }), field.info && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
        children: field.info
      })]
    }, field.id);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: loading,
    withBackground: true,
    flush: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].page,
      maxWidth: "100%",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
        ref: form,
        onSubmit: save,
        onInvalidCapture: event => {
          const firstInvalid = form.current.querySelector(':invalid');
          const section = event.target.closest('[data-section]');
          if (section && Number(section.dataset.section) !== activeSection) {
            event.preventDefault();
            if (event.target !== firstInvalid) return;
            setActiveSection(Number(section.dataset.section));
            requestAnimationFrame(() => {
              firstInvalid.focus();
              firstInvalid.reportValidity();
            });
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
          eyebrow: "WP Super Events by ServvAI",
          title: "Widget",
          description: "Choose how events appear on the public page, then copy the shortcode.",
          actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].headerActions,
            children: [dirty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].dirty,
              children: "Unsaved changes"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
              text: saving ? 'Saving…' : 'Save settings',
              disabled: loading || saving,
              onAction: () => form.current.requestSubmit()
            })]
          })
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].error,
          role: "alert",
          children: error
        }), notice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].notice,
          role: "status",
          children: notice
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].divider
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].layout,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].sections,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("nav", {
              className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].navigation,
              "aria-label": "Widget settings",
              children: [...sections, {
                title: 'Embed your widget',
                fields: []
              }].map((section, index) => {
                const Icon = sectionIcons[index] || _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__["default"];
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                  type: "button",
                  "aria-pressed": activeSection === index,
                  className: activeSection === index ? _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].active : '',
                  onClick: () => setActiveSection(index),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].navIcon,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Icon, {
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    children: section.title
                  }), section.fields.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("small", {
                    children: section.fields.length
                  })]
                }, section.title);
              })
            }), sections.map((section, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
              "data-section": index,
              hidden: activeSection !== index,
              className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].card,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("header", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
                  children: section.title
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].fields,
                children: section.fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                  children: renderField(field)
                }, field.id))
              })]
            }, section.title)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
              hidden: activeSection !== sections.length,
              className: `${_WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].card} ${_WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].embed}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("header", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
                  children: "Embed your widget"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                  children: "Copy this shortcode into a WordPress page or a Shortcode block. It includes all selected settings."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("textarea", {
                "aria-label": "Widget shortcode",
                readOnly: true,
                value: shortcode,
                rows: 6,
                onFocus: event => event.target.select()
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].embedActions,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  text: "Copy shortcode",
                  onAction: copy,
                  disabled: loading
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: dirty ? 'Unsaved changes are included in this shortcode.' : 'Settings saved.'
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].hint,
                children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("code", {
                  children: "[servv_events]"
                }), " to follow the saved defaults. A shortcode with attributes keeps its own appearance."]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("aside", {
            className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].preview,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].previewHead,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
                  className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].live,
                  children: "Live preview"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].previewMeta,
                  children: "Live events. Registration and payment are disabled in preview."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                type: "secondary",
                size: "sm",
                text: previewLoading ? 'Loading…' : 'Update preview',
                onAction: () => {
                  if (form.current.reportValidity()) setPreviewConfig({
                    ...config
                  });
                },
                disabled: loading || previewLoading
              })]
            }), previewError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              role: "alert",
              className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].error,
              children: previewError
            }), preview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("iframe", {
              title: "Events widget preview",
              srcDoc: preview,
              className: _WidgetPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].frame
            })]
          })]
        })]
      })
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

/***/ "./src/Components/Pages/WidgetPage.module.scss":
/*!*****************************************************!*\
  !*** ./src/Components/Pages/WidgetPage.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"YeNcZhHrw859ywmiejLz","headerActions":"G23PS2pI_innkjjzhEjh","dirty":"ZtMobkFM4VMfr_dVRNPL","divider":"l01Im0zl8SBxo7Rycwi8","layout":"NCCsdkgeiE9jBvP7iZR7","sections":"EISRP33rZ_UIYfPYE_Jg","card":"jPvcx6geJNRb7twtODBM","preview":"axKap8bJ5jIssqwR54nZ","navigation":"lcGiUA4N7W9Ps0RFV7X4","active":"MvsqYTtERLMlitP9j6FN","navIcon":"gCeZL9fQZuTH1DGGHFyx","hint":"WauthnymorOBTHC0dEya","fields":"bx2J7WtOeEyJey4uEQsp","field":"XWBPTaT0TIJokn9z6ciS","toggle":"U_SLuVpOZZvTNgDLwPRy","modes":"ASyS2N9qbQhiRREEmhHM","selected":"pgh6dGXQ7cAViGz8FCNm","previewHead":"Zhpz7IBCI4ZjNsAZL7pJ","live":"uc4uS5zQmzxxqrBi2x9u","previewMeta":"Ckb08KELs6Ayih8gIIzL","frame":"m0n7eyNNr8oYDkIT_pdB","embed":"BdrkuDhhs8SH9GMmhwUD","embedActions":"pMtebq5NO69H_wEmSPJT","error":"sM9SFVT5LjMlnlvXiu9T","notice":"vlYxZdcUfOdGCOzNiU_7","colorControl":"hkcuHjSFbggRT9b4QX3b"});

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/CalendarDaysIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/CalendarDaysIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CalendarDaysIcon({
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
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarDaysIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CodeBracketIcon({
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
    d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CodeBracketIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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

/***/ "./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PhotoIcon({
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
    d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhotoIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/RectangleStackIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/RectangleStackIcon.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function RectangleStackIcon({
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
    d: "M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(RectangleStackIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function Squares2X2Icon({
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
    d: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Squares2X2Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/SwatchIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/SwatchIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function SwatchIcon({
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
    d: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SwatchIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./inc/widget-v2-schema.json":
/*!***********************************!*\
  !*** ./inc/widget-v2-schema.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"type":"header","content":"Placement and content"},{"type":"checkbox","id":"show_events_widget","label":"Show events widget","default":true},{"type":"select","id":"view_mode","label":"View mode","options":[{"value":"grid","label":"Grid"},{"value":"list","label":"List"},{"value":"calendar","label":"Calendar"}],"default":"list"},{"type":"range","id":"events_per_page","label":"Events per page","min":1,"max":50,"step":1,"default":10,"info":"Number of events on each page."},{"type":"select","id":"drawer_side","label":"Drawer side","options":[{"value":"right","label":"Right"},{"value":"left","label":"Left"}],"default":"right"},{"type":"select","id":"drawer_width","label":"Drawer width","default":"640px","options":[{"value":"480px","label":"480px"},{"value":"640px","label":"640px"},{"value":"800px","label":"800px"}]},{"type":"checkbox","id":"redirect_to_event_page","label":"Open the event page when booking","default":false},{"type":"checkbox","id":"show_timezone_selector","label":"Timezone selector","default":true},{"type":"select","id":"calendar_position","label":"Calendar panel","options":[{"value":"left","label":"Left of the list"},{"value":"right","label":"Right of the list"},{"value":"hidden","label":"Hidden"}],"default":"left"},{"type":"select","id":"filters_position","label":"Filters","info":"The side panel keeps the filters in one vertical rail with the calendar.","options":[{"value":"content","label":"Above the list"},{"value":"aside","label":"In the side panel"}],"default":"aside"},{"type":"checkbox","id":"show_search","label":"Search field","default":true},{"type":"checkbox","id":"show_view_mode_switch","label":"View mode switch","info":"Also has to be enabled in the Servv app.","default":true},{"type":"checkbox","id":"show_language_selector","label":"Language selector","default":true,"info":"Shown when the shop has more than one translated language, unless it is turned off in the Servv app settings."},{"type":"checkbox","id":"show_quick_date_filters","label":"Quick date filters","default":true},{"type":"checkbox","id":"show_mobile_date_strip","label":"Mobile date strip","info":"A scrollable row of dates that have events, shown above the list on narrow screens.","default":true},{"type":"checkbox","id":"show_summary_cards","label":"Availability summary cards","default":false},{"type":"checkbox","id":"show_share_button","label":"Share button","default":true},{"type":"checkbox","id":"show_separator_badges","label":"Day separators","info":"Only in list view, and only when separator badges are on in the Servv app.","default":true},{"type":"checkbox","id":"show_pagination","label":"Pagination","default":true},{"type":"checkbox","id":"show_page_size_selector","label":"Events per page selector","default":true},{"type":"header","content":"Filters"},{"type":"checkbox","id":"filter_category","label":"Category filter","default":true,"info":"A filter shows up only when it is also enabled in the Servv app."},{"type":"checkbox","id":"filter_team","label":"Team filter","default":true},{"type":"checkbox","id":"filter_member","label":"Host filter","default":true},{"type":"checkbox","id":"filter_location","label":"Location filter","default":true},{"type":"checkbox","id":"filter_language","label":"Language filter","default":true},{"type":"text","id":"default_filter_team","label":"Default team","default":""},{"type":"text","id":"default_filter_member","label":"Default host","default":""},{"type":"text","id":"default_filter_category","label":"Default category","info":"Enter the name exactly as it appears in the Servv app. Which filters are shown is set there too."},{"type":"text","id":"default_filter_location","label":"Default location"},{"type":"text","id":"default_filter_language","label":"Default language"},{"type":"checkbox","id":"default_filter_hide_others","label":"Hide other choices for defaulted filters","default":false},{"type":"header","content":"Event card"},{"type":"checkbox","id":"show_event_images","label":"Event images","default":true},{"type":"select","id":"image_aspect_ratio","label":"Image ratio","options":[{"value":"16 / 9","label":"16:9"},{"value":"4 / 3","label":"4:3"},{"value":"1 / 1","label":"Square"}],"default":"16 / 9"},{"type":"checkbox","id":"show_seats_remaining","label":"Seats remaining","default":true},{"type":"checkbox","id":"show_price","label":"Price","default":true},{"type":"checkbox","id":"show_badges","label":"Badges","default":true},{"type":"range","id":"card_description_words","label":"Description word limit","info":"0 keeps the limit set in the Servv app.","min":0,"max":120,"step":5,"default":0},{"type":"range","id":"grid_columns_desktop","label":"Grid columns on desktop","min":1,"max":4,"step":1,"default":3},{"type":"select","id":"card_shadow","label":"Card shadow","options":[{"value":"none","label":"None"},{"value":"0 1px 2px rgba(23, 17, 45, .06)","label":"Small"},{"value":"0 6px 18px -8px rgba(23, 17, 45, .2)","label":"Medium"},{"value":"0 20px 60px rgba(23, 17, 45, .14)","label":"Large"}],"default":"0 1px 2px rgba(23, 17, 45, .06)"},{"type":"header","content":"Appearance"},{"type":"select","id":"widget_skin","label":"Widget style","info":"Every style other than Default ships its own palette and shapes, and Neumorph, Polaris, Poster and Swiss set their own fonts too. Adaptive follows the theme\'s colours, corner radius and fonts. To recolour any style, turn Use theme colours off. A style with a colour scheme after the dash keeps that style\'s shapes and uses the scheme\'s own palette. Corner radius and card shadow always stay with the style.","options":[{"value":"default","label":"Default"},{"value":"default-citrus","label":"Default — Citrus"},{"value":"default-oxblood","label":"Default — Oxblood"},{"value":"default-neon","label":"Default — Neon (dark)"},{"value":"adaptive","label":"Adaptive (theme)"},{"value":"glass","label":"Glass"},{"value":"glass-tropic","label":"Glass — Tropic"},{"value":"glass-obsidian","label":"Glass — Obsidian (dark)"},{"value":"neumorph","label":"Neumorph"},{"value":"neumorph-terracotta","label":"Neumorph — Terracotta"},{"value":"neumorph-inkwell","label":"Neumorph — Inkwell (dark)"},{"value":"plastic","label":"Plastic"},{"value":"polaris","label":"Polaris"},{"value":"polaris-electric","label":"Polaris — Electric"},{"value":"polaris-admin-dark","label":"Polaris — Admin dark (dark)"},{"value":"poster","label":"Poster"},{"value":"poster-hazard","label":"Poster — Hazard"},{"value":"poster-blackout","label":"Poster — Blackout (dark)"},{"value":"swiss","label":"Swiss"},{"value":"swiss-concrete","label":"Swiss — Concrete"},{"value":"swiss-nightgrid","label":"Swiss — Night grid (dark)"}],"default":"default"},{"type":"checkbox","id":"skin_custom_styles","label":"Style the chosen widget style myself","default":false,"info":"Off keeps the palette and fonts each style ships. On hands Plastic, Polaris, Poster and Swiss the colour, font, base size and background settings below. Default always uses them; Glass always keeps its own look."},{"type":"color","id":"glass_blob_color_1","label":"Glass: first glow","default":"#6224e7"},{"type":"color","id":"glass_blob_color_2","label":"Glass: second glow","default":"#38aaff"},{"type":"color","id":"glass_blob_color_3","label":"Glass: third glow","default":"#ff8cbe"},{"type":"range","id":"glass_blob_opacity","label":"Glass: glow intensity","info":"Set to 0 for a flat tinted background. A background image replaces the glows entirely.","min":0,"max":40,"step":1,"unit":"%","default":22},{"type":"checkbox","id":"use_theme_styles","label":"Use theme colours","default":true,"info":"When on, the widget inherits the theme palette and the colours below are ignored. The Font settings apply either way."},{"type":"color","id":"color_text","label":"Text","default":"#17112d"},{"type":"color","id":"color_text_muted","label":"Secondary text","default":"#6b6878"},{"type":"color","id":"color_background","label":"Widget background","default":"#ffffff"},{"type":"color","id":"color_surface","label":"Panel background","default":"#f7f6fb"},{"type":"color","id":"color_border","label":"Borders","default":"#ddd9e9"},{"type":"color","id":"color_primary","label":"Primary button","default":"#6224e7"},{"type":"color","id":"color_primary_hover","label":"Primary button hover","default":"#4a18b4"},{"type":"color","id":"color_primary_text","label":"Primary button text","default":"#ffffff"},{"type":"color","id":"color_accent","label":"Accent","default":"#ff8f5c"},{"type":"color","id":"card_background","label":"Card background","default":"#ffffff"},{"type":"color","id":"card_text","label":"Card text","default":"#17112d","info":"Kept separate from widget text so a dark background image does not hide the text inside cards."},{"type":"range","id":"card_border_radius","label":"Corner radius","min":0,"max":24,"step":1,"default":8,"unit":"px"},{"type":"range","id":"container_max_width","label":"Maximum width","min":960,"max":1600,"step":40,"default":1440,"unit":"px"},{"type":"range","id":"container_padding","label":"Outer padding","min":0,"max":48,"step":4,"default":24,"unit":"px"},{"type":"text","id":"font_family","label":"Font","default":"system-ui, sans-serif"},{"type":"text","id":"heading_font","label":"Heading font","info":"Headings do not follow the font above — set them here.","default":"system-ui, sans-serif"},{"type":"range","id":"font_size_base","label":"Base font size","min":12,"max":20,"step":1,"default":16,"unit":"px"},{"type":"color","id":"color_success","label":"Success","default":"#147a52","info":"Available seats, confirmed registration. Used in both styling modes; lighter tints are derived."},{"type":"color","id":"color_warning","label":"Warning","default":"#9a6500","info":"Few seats left, closing soon."},{"type":"color","id":"color_critical","label":"Critical","default":"#b42318","info":"Sold out, cancelled, errors."},{"type":"color","id":"color_info","label":"Info","default":"#1d5fd0","info":"Waitlist, recurring events, recordings."},{"type":"header","content":"Background"},{"type":"url","id":"background_image","label":"Background image","info":"The focal point set on the image is used to position it.","default":""},{"type":"select","id":"background_image_display","label":"Image display","options":[{"value":"cover","label":"Fill the widget"},{"value":"contain","label":"Fit inside the widget"},{"value":"tile","label":"Tile"}],"default":"cover"},{"type":"select","id":"background_overlay_style","label":"Gradient overlay","options":[{"value":"none","label":"None"},{"value":"linear","label":"Linear"},{"value":"radial","label":"Radial"}],"default":"none","info":"Sits above the image and below the events. Use it to keep text readable."},{"type":"color","id":"background_overlay_from","label":"Gradient start","default":"#17112d99"},{"type":"color","id":"background_overlay_to","label":"Gradient end","default":"#17112d00"},{"type":"range","id":"background_overlay_angle","label":"Gradient angle","min":0,"max":360,"step":15,"default":180,"info":"0 points up, 90 points right. Ignored by the radial overlay.","unit":"deg"},{"type":"range","id":"background_overlay_opacity","label":"Overlay opacity","min":0,"max":100,"step":5,"default":100,"unit":"%"},{"type":"header","content":"Calendar and drawer"},{"type":"color","id":"calendar_date_text","label":"Date text","default":"#17112d"},{"type":"color","id":"calendar_marked_background","label":"Dates with events","default":"#efe9ff"},{"type":"color","id":"calendar_selected_background","label":"Selected date background","default":"#6224e7"},{"type":"color","id":"calendar_selected_text","label":"Selected date text","default":"#ffffff"},{"type":"color","id":"calendar_today_border","label":"Today border","default":"#c7c1d8"},{"type":"color","id":"drawer_background","label":"Drawer background","default":"#ffffff"},{"type":"range","id":"drawer_backdrop_opacity","label":"Drawer backdrop opacity","min":0,"max":100,"step":5,"default":45,"unit":"%"}]');

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_WidgetPage_jsx.js.map?ver=2e115968bd43dda658a8