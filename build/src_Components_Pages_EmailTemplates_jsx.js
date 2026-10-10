"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_EmailTemplates_jsx"],{

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

/***/ "./src/Components/Pages/EmailTemplates.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Pages/EmailTemplates.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailTemplates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js");
/* harmony import */ var _Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/BreadCrumbs */ "./src/Components/Menu/BreadCrumbs.jsx");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill */ "./node_modules/quill/quill.js");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var _utilities_adminApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/adminApi */ "./src/utilities/adminApi.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Containers_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Containers/PageHeader */ "./src/Components/Containers/PageHeader.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmailTemplates.module.scss */ "./src/Components/Pages/EmailTemplates.module.scss");
/* harmony import */ var _emailTemplates_groups_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emailTemplates/groups.mjs */ "./src/Components/Pages/emailTemplates/groups.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















function RichEditor({
  value,
  disabled,
  onChange
}) {
  const container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange);
  callback.current = onChange;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const element = document.createElement("div");
    container.current.appendChild(element);
    const editor = new quill__WEBPACK_IMPORTED_MODULE_2__["default"](element, {
      theme: "snow",
      modules: {
        toolbar: [[{
          header: [1, 2, false]
        }], ["bold", "italic", "underline"], [{
          list: "ordered"
        }, {
          list: "bullet"
        }], ["link", "clean"]]
      }
    });
    editor.clipboard.dangerouslyPasteHTML(value || "", "silent");
    editor.enable(!disabled);
    editor.on("text-change", (_delta, _old, source) => {
      if (source === "user") callback.current(editor.getSemanticHTML());
    });
    const host = container.current;
    return () => {
      host.innerHTML = "";
    };
  }, [disabled]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    ref: container
  });
}
const contentOf = template => ({
  subject: template?.subject || "",
  text: template?.text || ""
});
const differs = (draft, template) => draft && (draft.subject !== (template.subject || "") || draft.text !== (template.text || ""));
function EmailTemplates() {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_5__.useServvStore)(state => state.settings);
  const [templates, setTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [drafts, setDrafts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Rich Text");
  const [revision, setRevision] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [notice, setNotice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const selected = templates.find(template => template.id === selectedId);
  const groups = (0,_emailTemplates_groups_mjs__WEBPACK_IMPORTED_MODULE_11__.groupEmailTemplates)(templates);
  const draft = drafts[selectedId] || contentOf(selected);
  const dirty = selected && differs(draft, selected);
  const restricted = !settings || Number(settings.current_plan?.id) === 1;
  const disabled = restricted || saving;
  const headers = {
    "X-WP-Nonce": window.servvData.nonce
  };
  async function load() {
    setLoading(true);
    setError("");
    try {
      var _groupEmailTemplates$;
      const response = await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_4__["default"].get("/wp-json/servv-plugin/v1/wordpress/templates", {
        headers
      });
      const items = response.data?.templates;
      if (!Array.isArray(items)) throw new Error("Invalid templates response");
      const sorted = [...items].sort((a, b) => (a.description || "").localeCompare(b.description || ""));
      setTemplates(sorted);
      setSelectedId((_groupEmailTemplates$ = (0,_emailTemplates_groups_mjs__WEBPACK_IMPORTED_MODULE_11__.groupEmailTemplates)(sorted)[0]?.templates[0]?.id) !== null && _groupEmailTemplates$ !== void 0 ? _groupEmailTemplates$ : null);
      setDrafts({});
    } catch {
      setError("Unable to load email templates. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    load();
  }, []);
  function change(field, value) {
    setDrafts(current => ({
      ...current,
      [selectedId]: {
        ...(current[selectedId] || contentOf(selected)),
        [field]: value
      }
    }));
    setNotice("");
  }
  async function save() {
    if (!selected || disabled || !dirty) return;
    if (!draft.subject.trim()) {
      setError("Enter an email subject before saving.");
      return;
    }
    const id = selectedId;
    const payload = {
      ...draft
    };
    setSaving(true);
    setError("");
    setNotice("");
    try {
      await _utilities_adminApi__WEBPACK_IMPORTED_MODULE_4__["default"].patch(`/wp-json/servv-plugin/v1/wordpress/templates/${id}`, payload, {
        headers
      });
      setTemplates(current => current.map(template => template.id === id ? {
        ...template,
        ...payload
      } : template));
      setNotice("Email template saved.");
    } catch {
      setError("Unable to save this template. Your changes are still available.");
    } finally {
      setSaving(false);
    }
  }
  function reset() {
    setDrafts(current => ({
      ...current,
      [selectedId]: contentOf(selected)
    }));
    setRevision(current => current + 1);
    setError("");
    setNotice("");
  }
  const preview = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;padding:24px;font:14px/1.6 system-ui,sans-serif;color:#17112d;overflow-wrap:anywhere}img,table{max-width:100%}img{height:auto}a{color:#6224e7}</style></head><body>${draft.text}</body></html>`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flush: true,
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].page,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Menu_BreadCrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
        breadcrumbs: [{
          label: t("Settings"),
          to: "/settings"
        }, {
          label: t("Email templates")
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Containers_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        eyebrow: "WP Super Events by ServvAI",
        title: "Email templates",
        description: "Customize the emails attendees receive for bookings, reminders, and event updates.",
        actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].actions,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: "View emails",
            type: "secondary",
            onAction: () => navigate("/notifications")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            text: saving ? "Saving…" : "Save template",
            onAction: save,
            disabled: loading || disabled || !dirty
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].divider
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].message,
        role: "alert",
        children: [error, !selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: "Try again",
          size: "sm",
          type: "secondary",
          onAction: load,
          disabled: loading
        })]
      }), notice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
        className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].message,
        role: "status",
        children: notice
      }), restricted && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
        className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].message,
        children: "Email template editing is available on a paid plan."
      }), !loading && !error && !templates.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("section", {
        className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].card,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
          children: "No email templates available"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          children: "Your notification templates will appear here when available."
        })]
      }), !!templates.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].layout,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("nav", {
          className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].templateList,
          "aria-label": "Email templates",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
            className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].eyebrow,
            children: "Templates"
          }), groups.map((group, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("section", {
            className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].templateGroup,
            "aria-labelledby": `email-template-group-${index}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h2", {
              id: `email-template-group-${index}`,
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].groupHeading,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                children: group.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("small", {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].groupCount,
                children: group.templates.length
              })]
            }), group.templates.map(template => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("button", {
              type: "button",
              disabled: saving,
              "aria-pressed": selectedId === template.id,
              className: `${_EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].templateItem} ${selectedId === template.id ? _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].active : ""}`,
              onClick: () => {
                setSelectedId(template.id);
                setError("");
                setNotice("");
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__["default"], {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].templateIcon,
                "aria-hidden": "true"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].templateName,
                children: template.description || `Template ${template.id}`
              }), differs(drafts[template.id], template) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("small", {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].unsavedBadge,
                children: "Unsaved"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__["default"], {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].templateArrow,
                "aria-hidden": "true"
              })]
            }, template.id))]
          }, group.label))]
        }), selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].workspace,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("section", {
            className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].card,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].cardHeader,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
                children: selected.description
              }), dirty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].eyebrow,
                children: "Unsaved changes"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].field,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                children: "Email subject"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
                value: draft.subject,
                disabled: disabled,
                onChange: event => change("subject", event.target.value),
                placeholder: "Enter email subject"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].cardHeader,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h3", {
                children: "Email content"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].modes,
                "aria-label": "Editor mode",
                children: ["Rich Text", "HTML"].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
                  type: "button",
                  "aria-pressed": mode === item,
                  disabled: saving,
                  className: mode === item ? _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].active : "",
                  onClick: () => setMode(item),
                  children: item
                }, item))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].editor,
              children: mode === "Rich Text" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(RichEditor, {
                value: draft.text,
                disabled: disabled,
                onChange: value => change("text", value)
              }, `${selectedId}-${revision}`) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("textarea", {
                "aria-label": "Email HTML",
                value: draft.text,
                disabled: disabled,
                onChange: event => change("text", event.target.value),
                spellCheck: false,
                rows: 16
              })
            }), Object.keys(selected.params || {}).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("details", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].parameters,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("summary", {
                children: "Template parameters"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                children: "Use these placeholders to include event and attendee details in your email."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("dl", {
                children: Object.entries(selected.params).map(([key, description]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("dt", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("code", {
                      children: key
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("dd", {
                    children: String(description)
                  })]
                }, key))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].footer,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                text: "Discard changes",
                type: "secondary",
                size: "sm",
                onAction: reset,
                disabled: disabled || !dirty
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("aside", {
            className: `${_EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].card} ${_EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].preview}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].cardHeader,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
                children: "Email preview"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].eyebrow,
                children: "Live preview"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
              children: "Placeholders are replaced with actual details when the email is sent."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: _EmailTemplates_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].subject,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                children: "Subject"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("strong", {
                children: draft.subject || "No subject"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("iframe", {
              title: "Email template preview",
              sandbox: "",
              srcDoc: preview,
              referrerPolicy: "no-referrer"
            })]
          })]
        })]
      })]
    })
  });
}

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

/***/ "./src/Components/Pages/EmailTemplates.module.scss":
/*!*********************************************************!*\
  !*** ./src/Components/Pages/EmailTemplates.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"page":"TjVgI6NB1gM96OewHVCK","actions":"GskUXxQPBznqW2OHXexA","cardHeader":"_dx73j3gqmTY2U6K1rvs","footer":"sjwTCQz4FbS4xNTgJPEA","divider":"wII9lnAyOpKaTeTWdrRN","layout":"hOvgcV0ITw1cSF3H4WSy","workspace":"NrVdTdNrhQgJrH2yGDAO","card":"sID3YS9JtBZzT95FsOTt","eyebrow":"EDBiXkxbuAlr7RyFPEft","templateList":"bsxFecfM72S0K93jExPm","templateGroup":"Z5hPbH2gRhYQR_j446_9","groupHeading":"uJ3NijnzpgdOP26xbYGV","groupCount":"m6bCSv2bH_HK3XUdQmm0","templateItem":"dHTWKyYjFgUEN3KI9eRt","active":"BY5p3__Sz1gvNKNjAdQD","templateIcon":"WE4fw8hyCafS28K_H1B5","templateName":"uFuEmUMprt12LjcKlGOa","templateArrow":"WowZj9Ev8ELfqRozCHWy","unsavedBadge":"DOSOarSWMGBKfCTt3Plr","modes":"dky6JQY21ldnrr3_pP4A","field":"Sz6D142J0aPWyJSRK54L","editor":"XjjhHZ8ElsMGxYiZRQ8N","parameters":"dXZf0rrzlItEF_R583zl","subject":"oNdzwFdMx17wPVZSnxwy","preview":"zd_xW6Tp7VJ3T4SP8S0Q","message":"ZcArbhkZEGHBUiOybxSM"});

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

/***/ "./src/Components/Pages/emailTemplates/groups.mjs":
/*!********************************************************!*\
  !*** ./src/Components/Pages/emailTemplates/groups.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailTemplateCategory: () => (/* binding */ emailTemplateCategory),
/* harmony export */   groupEmailTemplates: () => (/* binding */ groupEmailTemplates)
/* harmony export */ });
const categories = [{
  label: "Waiting list",
  pattern: /wait[\s_-]*(?:ing[\s_-]*)?list/i
}, {
  label: "Payments",
  pattern: /payment|refund|invoice|receipt|billing/i
}, {
  label: "Reminders",
  pattern: /remind/i
}, {
  label: "Event updates",
  pattern: /cancel|reschedul|updat|chang|postpon|recording|follow[\s_-]*up|finished|completed/i
}, {
  label: "Bookings",
  pattern: /book|registr|confirm|ticket|reservation/i
}];
const order = ["Bookings", "Reminders", "Event updates", "Payments", "Waiting list", "Other"];
function emailTemplateCategory(template) {
  const category = typeof template.category === "string" ? template.category : template.category?.name;
  if (typeof category === "string" && category.trim()) return category.trim();
  const name = [template.description, template.name, template.type].filter(value => typeof value === "string").join(" ");
  return categories.find(({
    pattern
  }) => pattern.test(name))?.label || "Other";
}
function groupEmailTemplates(templates) {
  const groups = new Map();
  for (const template of templates) {
    const label = emailTemplateCategory(template);
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(template);
  }
  const rank = label => label === "Other" ? Number.MAX_SAFE_INTEGER : order.includes(label) ? order.indexOf(label) : order.length;
  return [...groups].sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b)).map(([label, items]) => ({
    label,
    templates: [...items].sort((a, b) => (a.description || a.name || "").localeCompare(b.description || b.name || ""))
  }));
}

/***/ })

}]);
//# sourceMappingURL=src_Components_Pages_EmailTemplates_jsx.js.map?ver=f0c6265e500e42419317