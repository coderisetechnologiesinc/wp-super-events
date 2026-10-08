"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Pages_BrandingPage_jsx"],{

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

/***/ "./src/Components/Modals/AnimatedModal.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Modals/AnimatedModal.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnimatedModal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedModal.module.scss */ "./src/Components/Modals/AnimatedModal.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const AnimatedModal = ({
  open,
  onClose,
  children
}) => {
  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(open);
  const [closing, setClosing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    }
  }, [open]);
  const close = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose?.();
    }, 160);
  };
  if (!visible) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: `${_AnimatedModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].overlay} ${closing ? _AnimatedModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].closing : ""}`,
    onClick: close,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `${_AnimatedModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].panel} ${closing ? _AnimatedModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].closing : ""}`,
      onClick: e => e.stopPropagation(),
      children: typeof children === "function" ? children({
        close
      }) : children
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedModal);

/***/ }),

/***/ "./src/Components/Modals/CustomLinksModal.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Modals/CustomLinksModal.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Shared_SortableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/SortableRow */ "./src/Components/Shared/SortableRow.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const CustomLinksModal = ({
  links,
  setLinks
}) => {
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  /* ✅ Drag reorder */
  const onDragEnd = ({
    active,
    over
  }) => {
    if (!over || active.id === over.id) return;
    setLinks(items => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.arrayMove)(items, oldIndex, newIndex);
    });
  };

  /* ✅ Remove */
  const removeLink = id => {
    setLinks(prev => prev.filter(l => l.id !== id));
  };

  /* ✅ Edit */
  const editLink = id => {
    const item = links.find(l => l.id === id);
    if (!item) return;
    setText(item.text);
    setUrl(item.url);
    removeLink(id);
  };

  /* ✅ Add */
  const addLink = () => {
    if (!text || !url) return;
    setLinks(prev => [...prev, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      text,
      url
    }]);
    setText("");
    setUrl("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {
      collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.closestCenter,
      onDragEnd: onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.SortableContext, {
        items: links.map(l => l.id),
        strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.verticalListSortingStrategy,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          children: links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_SortableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: link.id,
            title: link.text,
            subtitle: link.url,
            onEdit: () => editLink(link.id),
            onRemove: () => removeLink(link.id)
          }, link.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "border-t pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "100%",
          placeholder: "Link title",
          value: text,
          onChange: setText,
          align: "left",
          maxLength: "23"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "100%",
          placeholder: "https://example.com",
          value: url,
          onChange: setUrl,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          type: "button",
          onClick: addLink,
          disabled: !text || !url,
          className: "p-2 rounded-lg bg-[#7a5af8] text-white disabled:opacity-50",
          children: "Add"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLinksModal);

/***/ }),

/***/ "./src/Components/Modals/LinkInBioModal.jsx":
/*!**************************************************!*\
  !*** ./src/Components/Modals/LinkInBioModal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Shared_SortableItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/SortableItem */ "./src/Components/Shared/SortableItem.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const LinkInBioModal = ({
  /* ---------------- SOCIAL ---------------- */
  instagram,
  setInstagram,
  x,
  setX,
  youtube,
  setYoutube,
  facebook,
  setFacebook,
  tiktok,
  setTikTok,
  /* ---------------- LINKS ---------------- */
  linkTextInput,
  setLinkTextInput,
  linkUrlInput,
  setLinkUrlInput,
  links,
  setLinks,
  handleLinksDragEnd,
  handleRemoveLink,
  /* ---------------- VIDEOS ---------------- */
  videoInput,
  setVideoInput,
  youtubeVideos,
  setYoutubeVideos,
  handleRemoveYoutube,
  /* ---------------- ORDER ---------------- */
  order,
  setOrder,
  responsiveBlock
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        className: "step__content_title",
        children: "Social media"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "text-sm text-gray-500 mb-4",
        children: "Add your main social profiles shown inside the widget"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 4,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "Instagram Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "100%",
            placeholder: "https://instagram.com/yourname",
            value: instagram,
            onChange: setInstagram,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "X (Twitter) Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "100%",
            placeholder: "https://x.com/yourname",
            value: x,
            onChange: setX,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "YouTube Channel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "100%",
            placeholder: "https://youtube.com/@channel",
            value: youtube,
            onChange: setYoutube,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "Facebook Page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "100%",
            placeholder: "https://facebook.com/page",
            value: facebook,
            onChange: setFacebook,
            align: "left"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-semibold text-gray-800 mb-1",
            children: "TikTok Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "100%",
            placeholder: "https://tiktok.com/@yourname",
            value: tiktok,
            onChange: setTikTok,
            align: "left"
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkInBioModal);

/***/ }),

/***/ "./src/Components/Modals/ProfileBrandingModal.jsx":
/*!********************************************************!*\
  !*** ./src/Components/Modals/ProfileBrandingModal.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/CheckboxItem */ "./src/Components/Controls/CheckboxItem.jsx");
/* harmony import */ var _Shared_StepBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/StepBlock */ "./src/Components/Shared/StepBlock.jsx");
/* harmony import */ var _Shared_ImageUploadField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/ImageUploadField */ "./src/Components/Shared/ImageUploadField.jsx");
/* harmony import */ var _Shared_UploadBars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/UploadBars */ "./src/Components/Shared/UploadBars.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const ProfileBrandingModal = ({
  /* ---------------- BUSINESS DETAILS ---------------- */
  title,
  setTitle,
  description,
  setDescription,
  address,
  setAddress,
  email,
  setEmail,
  /* ---------------- AVATAR ---------------- */
  hideAvatar,
  setHideAvatar,
  avatarUploading,
  avatarPreview,
  handleAvatarChange,
  handleSave,
  responsiveBlock
}) => {
  // console.log(avatarUploading);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Business details",
      description: "Update your title, description, and contact information",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Business title"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            width: "100%",
            placeholder: "Enter business title",
            value: title,
            onChange: setTitle,
            align: "left",
            maxLength: "30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "This will appear at the top of your widget."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Short description"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            width: "100%",
            placeholder: "Tell visitors what you offer",
            value: description,
            onChange: setDescription,
            align: "left",
            maxLength: "70"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Keep it short and clear (1\u20132 sentences)."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Business address"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            width: "100%",
            placeholder: "Business address",
            value: address,
            onChange: setAddress,
            align: "left",
            maxLength: "30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Optional \u2014 shown only if you provide one."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Contact email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            width: "100%",
            placeholder: "example@email.com",
            value: email,
            onChange: setEmail,
            align: "left",
            type: "email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Used for customer inquiries."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Avatar",
      description: "Upload a profile image shown in your widget header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_CheckboxItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Hide avatar",
          checked: hideAvatar,
          onChange: () => setHideAvatar(!hideAvatar)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_UploadBars__WEBPACK_IMPORTED_MODULE_6__["default"], {
          visible: avatarUploading
        }), avatarPreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: avatarPreview,
          alt: "Preview",
          className: "w-[120px] h-[120px] rounded-full border object-cover self-center"
        }), !hideAvatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "text-xs text-gray-500"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileBrandingModal);

/***/ }),

/***/ "./src/Components/Modals/SettingsCardWithModal.jsx":
/*!*********************************************************!*\
  !*** ./src/Components/Modals/SettingsCardWithModal.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var _AnimatedModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedModal */ "./src/Components/Modals/AnimatedModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SettingsCardWithModal = ({
  icon = _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"],
  title = "Profile",
  description = "Your profile details including specialization and location.",
  buttonText = "Edit information",
  statusText = "Information available",
  status = "available",
  // "available" | "unavailable"
  children,
  // modal body
  footerActions = null,
  handleSave = () => {}
}) => {
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const Icon = icon;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col justify-center items-center p-4 gap-3 w-full min-w-[330px] bg-white border-2 border-[#E9EAEB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] rounded-xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col items-start gap-3 w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex justify-between items-center w-full h-16",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative w-16 h-16 flex items-center justify-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "absolute inset-[6.25%] bg-[#F4EBFF] rounded-lg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "absolute inset-0 border-2 border-[#E9EAEB] rounded-[10.67px]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6941C6] bg-[#6941C6]/20",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                className: "w-full h-full text-[#6941C6] z-10"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex flex-col gap-1 w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "font-bold text-lg leading-7 text-[#181D27]",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-base leading-6 text-[#717680]",
            children: description
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "w-full h-px bg-[#E6E6EB]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex justify-between items-center w-full h-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          onClick: () => setOpen(true),
          className: "flex items-center gap-2 px-4 py-2.5 h-10 bg-white border border-[#D5D7DA] rounded-lg shadow-sm hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-5 h-5 text-[#414651]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-sm font-semibold text-[#414651]",
            children: buttonText
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex items-center gap-1",
          children: status === "available" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-5 h-5 text-[#039855]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-sm text-[#039855]",
              children: statusText
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "w-5 h-5 text-[#717680]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-sm text-[#717680]",
              children: "Not configured"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_AnimatedModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: open,
      onClose: () => setOpen(false),
      children: ({
        close
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative w-full max-w-[600px] max-h-[85vh] bg-white rounded-xl shadow-lg flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: close,
          className: "absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full border border-[#D5D7DA] bg-white hover:bg-gray-50 shadow-md",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-5 h-5 text-[#414651]"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "text-center p-8 pb-4 flex-shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
            className: "text-xl font-semibold text-[#181D27]",
            children: ["Edit ", title]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "text-base text-[#717680] mt-1",
            children: "Update your information below"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex-1 overflow-y-auto px-8 py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex flex-col gap-4",
            children: children
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex justify-between items-center gap-3 p-8 pt-4 border-t border-gray-200 flex-shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: footerActions
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            onClick: () => handleSave(),
            className: "px-5 py-2 bg-[#7A5AF8] text-white rounded-lg",
            children: "Save"
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsCardWithModal);

/***/ }),

/***/ "./src/Components/Modals/ThemeBrandingModal.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Modals/ThemeBrandingModal.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Shared_UploadBars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/UploadBars */ "./src/Components/Shared/UploadBars.jsx");
/* harmony import */ var _Shared_StepBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/StepBlock */ "./src/Components/Shared/StepBlock.jsx");
/* harmony import */ var _Shared_SortableItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/SortableItem */ "./src/Components/Shared/SortableItem.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const ThemeBrandingModal = ({
  /* ---------------- PAGE BACKGROUND ---------------- */
  bgType,
  setBgType,
  backgroundColor,
  setBackgroundColor,
  backgroundOpacity,
  setBackgroundOpacity,
  backgroundGradient,
  setBackgroundGradient,
  backgroundImagePreview,
  handleBackgroundImageChange,
  bgUploading,
  /* ---------------- TEXT ---------------- */
  textColor,
  setTextColor,
  textOpacity,
  setTextOpacity,
  headerTextColor,
  setHeaderTextColor,
  headerTextOpacity,
  setHeaderTextOpacity,
  /* ---------------- WIDGET BACKGROUND ---------------- */
  widgetBgType,
  setWidgetBgType,
  widgetBgColor,
  setWidgetBgColor,
  widgetBgGradient,
  setWidgetBgGradient,
  /* ---------------- IMAGES ---------------- */
  bannerUploading,
  bannerImagePreview,
  handleBannerChange,
  responsiveBlock,
  order,
  setOrder
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Page background",
      description: "Customize the main background behind your widget",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: [{
              key: "color",
              label: "Color"
            }, {
              key: "gradient",
              label: "Gradient"
            }, {
              key: "image",
              label: "Image"
            }].map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setBgType(item.key),
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${bgType === item.key ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`,
              children: item.label
            }, item.key))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Choose how your page background appears."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget text color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: textColor,
              onChange: e => setTextColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              width: "100%",
              align: "center",
              placeholder: "#111827",
              value: textColor,
              onChange: setTextColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
              className: "text-sm font-medium text-gray-700 mb-1",
              children: ["Text opacity: ", Math.round(textOpacity * 100), "%"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.01",
              value: textOpacity,
              onChange: e => setTextOpacity(parseFloat(e.target.value)),
              className: "w-full"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Adjust the color and opacity of widget text."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Header text color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: headerTextColor,
              onChange: e => setHeaderTextColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              width: "100%",
              align: "center",
              placeholder: "#111827",
              value: headerTextColor,
              onChange: setHeaderTextColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
              className: "text-sm font-medium text-gray-700 mb-1",
              children: ["Text opacity: ", Math.round(headerTextOpacity * 100), "%"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.01",
              value: headerTextOpacity,
              onChange: e => setHeaderTextOpacity(parseFloat(e.target.value)),
              className: "w-full"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Adjust the header text\u2019s color and opacity."
          })]
        }), bgType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: backgroundColor,
              onChange: e => setBackgroundColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              width: "100%",
              align: "center",
              placeholder: "#ffffff",
              value: backgroundColor,
              onChange: setBackgroundColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
              className: "text-sm font-medium text-gray-700 mb-1",
              children: ["Background opacity: ", Math.round(backgroundOpacity * 100), "%"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.01",
              value: backgroundOpacity,
              onChange: e => setBackgroundOpacity(parseFloat(e.target.value)),
              className: "w-full"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex gap-2 flex-wrap mt-2",
            children: ["#ffffff", "#f3f4f6", "#d1d5db", "#111827", "#4338ca", "#4f46e5", "#ec4899", "#10b981"].map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setBackgroundColor(c),
              className: "w-9 h-9 rounded-lg border border-gray-300 cursor-pointer hover:scale-110 transition-transform",
              style: {
                backgroundColor: c
              }
            }, c))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Select a solid color or use the color picker."
          })]
        }), bgType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Gradient preset"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex gap-3 flex-wrap",
            children: ["linear-gradient(135deg,#4f46e5,#9333ea)", "linear-gradient(135deg,#06b6d4,#3b82f6)", "linear-gradient(135deg,#f97316,#ef4444)", "linear-gradient(135deg,#10b981,#059669)"].map(g => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setBackgroundGradient(g),
              className: "w-[120px] h-[50px] rounded-lg border border-gray-300 hover:scale-105 transition-transform cursor-pointer",
              style: {
                background: g
              }
            }, g))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
              className: "text-sm font-medium text-gray-800 mb-1",
              children: "Custom gradient"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              width: "100%",
              align: "center",
              placeholder: "linear-gradient(...)",
              value: backgroundGradient,
              onChange: setBackgroundGradient
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Choose a preset or enter a custom CSS gradient."
          })]
        }), bgType === "image" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background image"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
            id: "backgroundUploadInput",
            type: "file",
            accept: "image/*",
            hidden: true,
            onChange: e => handleBackgroundImageChange(e.target.files[0])
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: bgUploading ? "Uploading..." : "Upload background",
            type: "secondary",
            disabled: bgUploading,
            className: "w-[200px]",
            onAction: () => document.getElementById("backgroundUploadInput").click()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Shared_UploadBars__WEBPACK_IMPORTED_MODULE_5__["default"], {
            visible: bgUploading
          }), backgroundImagePreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: backgroundImagePreview,
            alt: "Background preview",
            className: "mt-3 w-full max-w-[280px] h-[120px] rounded-xl border object-cover self-center"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Recommended size: 1920\xD71080px or higher. JPG or PNG."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Live preview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "w-full h-[110px] rounded-xl border border-gray-200",
            style: {
              background: bgType === "color" ? backgroundColor : bgType === "gradient" ? backgroundGradient : `url(${backgroundImagePreview}) center/cover`,
              opacity: bgType === "color" ? backgroundOpacity : 1
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Preview of your selected background."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Widget container background",
      description: "Background color/gradient for the widget content area",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Background type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 2,
            children: ["color", "gradient"].map(type => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
              type: "button",
              onClick: () => setWidgetBgType(type),
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${widgetBgType === type ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`,
              children: type === "color" ? "Color" : "Gradient"
            }, type))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Style the widget container background."
          })]
        }), widgetBgType === "color" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget background color"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
            gap: 3,
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
              type: "color",
              value: widgetBgColor,
              onChange: e => setWidgetBgColor(e.target.value),
              className: "w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
              width: "100%",
              align: "center",
              placeholder: "#ffffff",
              value: widgetBgColor,
              onChange: setWidgetBgColor
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Solid color for the widget container."
          })]
        }), widgetBgType === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget background gradient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            width: "100%",
            align: "center",
            placeholder: "linear-gradient(...)",
            value: widgetBgGradient,
            onChange: setWidgetBgGradient
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Enter a CSS gradient value."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Widget preview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "h-[80px] rounded-xl border border-gray-200",
            style: {
              background: widgetBgType === "color" ? widgetBgColor : widgetBgGradient
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-xs text-gray-500 mt-1",
            children: "Preview of your widget background."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "step__content_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
        className: "step__content_title",
        children: "Order"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        className: "text-sm text-gray-500 mb-4",
        children: "Drag and reorder widget sections"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_8__.DndContext, {
        collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_8__.closestCenter,
        onDragEnd: e => {
          const {
            active,
            over
          } = e;
          if (!over || active.id === over.id) return;
          setOrder(items => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);
            return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__.arrayMove)(items, oldIndex, newIndex);
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__.SortableContext, {
          items: order,
          strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_9__.verticalListSortingStrategy,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            gap: 2,
            children: order.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Shared_SortableItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
              id: item,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                className: "capitalize font-medium",
                children: item
              })
            }, item))
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "step__content_delimeter mt-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Card background",
      description: "Upload a banner image for the widget header area",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gap: 5,
        className: responsiveBlock,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "text-sm font-medium text-gray-800 mb-1",
            children: "Banner image"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
            id: "themeBannerUploadInput",
            type: "file",
            accept: "image/*",
            hidden: true,
            onChange: e => handleBannerChange(e.target.files?.[0])
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Shared_UploadBars__WEBPACK_IMPORTED_MODULE_5__["default"], {
            visible: bannerUploading
          }), bannerImagePreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
            src: bannerImagePreview,
            alt: "Banner preview",
            className: "mt-3 w-full h-[120px] rounded-xl border object-cover"
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeBrandingModal);

/***/ }),

/***/ "./src/Components/Modals/YoutubeLinksModal.jsx":
/*!*****************************************************!*\
  !*** ./src/Components/Modals/YoutubeLinksModal.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/InlineStack */ "./src/Components/Containers/InlineStack.jsx");
/* harmony import */ var _Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/NewInputFieldControl */ "./src/Components/Controls/NewInputFieldControl.jsx");
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Shared_SortableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/SortableRow */ "./src/Components/Shared/SortableRow.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const YoutubeLinksModal = ({
  youtubeVideos,
  setYoutubeVideos
}) => {
  const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const onDragEnd = ({
    active,
    over
  }) => {
    if (!over || active.id === over.id) return;
    setYoutubeVideos(items => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.arrayMove)(items, oldIndex, newIndex);
    });
  };
  const removeVideo = id => {
    setYoutubeVideos(prev => prev.filter(v => v.id !== id));
  };
  const editVideo = id => {
    const item = youtubeVideos.find(v => v.id === id);
    if (!item) return;
    setInput(item.url);
    removeVideo(id);
  };
  const addVideo = () => {
    if (!input) return;
    setYoutubeVideos(prev => [...prev, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      url: input
    }]);
    setInput("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {
      collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.closestCenter,
      onDragEnd: onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.SortableContext, {
        items: youtubeVideos.map(v => v.id),
        strategy: _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.verticalListSortingStrategy,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
          gap: 2,
          children: youtubeVideos.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Shared_SortableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: v.id,
            title: v.url,
            onEdit: () => editVideo(v.id),
            onRemove: () => removeVideo(v.id)
          }, v.id))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "border-t pt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Containers_InlineStack__WEBPACK_IMPORTED_MODULE_2__["default"], {
        gap: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputFieldControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: "100%",
          placeholder: "Type your link here",
          value: input,
          onChange: setInput,
          align: "left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          type: "button",
          onClick: addVideo,
          disabled: !input,
          className: "p-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50",
          children: "Add"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeLinksModal);

/***/ }),

/***/ "./src/Components/Pages/BrandingPage.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pages/BrandingPage.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/PageContent */ "./src/Components/Containers/PageContent.jsx");
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/media */ "./src/utilities/media.js");
/* harmony import */ var _utilities_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/settings */ "./src/utilities/settings.js");
/* harmony import */ var _Modals_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modals/SettingsCardWithModal */ "./src/Components/Modals/SettingsCardWithModal.jsx");
/* harmony import */ var _Modals_CustomLinksModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modals/CustomLinksModal */ "./src/Components/Modals/CustomLinksModal.jsx");
/* harmony import */ var _Modals_YoutubeLinksModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Modals/YoutubeLinksModal */ "./src/Components/Modals/YoutubeLinksModal.jsx");
/* harmony import */ var _Modals_ProfileBrandingModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modals/ProfileBrandingModal */ "./src/Components/Modals/ProfileBrandingModal.jsx");
/* harmony import */ var _Modals_LinkInBioModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Modals/LinkInBioModal */ "./src/Components/Modals/LinkInBioModal.jsx");
/* harmony import */ var _Modals_ThemeBrandingModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Modals/ThemeBrandingModal */ "./src/Components/Modals/ThemeBrandingModal.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _SpinnerLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);










/* ✅ Cards */



/* ✅ Modals */




/* ✅ Icons */




const BrandingPage = () => {
  const {
    settings
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_5__.useServvStore)();

  /* ======================================================
     STATE
  ====================================================== */

  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /* Profile */
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [hideAvatar, setHideAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [uploadedUrl, setUploadedUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [avatarPreview, setAvatarPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [avatarUploading, setAvatarUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [uploadedBannerUrl, setUploadedBannerUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [bannerImagePreview, setBannerImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [bannerUploading, setBannerUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  /* Link In Bio */
  const [instagram, setInstagram] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [tiktok, setTikTok] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [youtube, setYoutube] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [facebook, setFacebook] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [youtubeVideos, setYoutubeVideos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["events", "links", "videos"]);

  /* Theme */
  const [bgType, setBgType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("color");
  const [backgroundColor, setBackgroundColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ffffff");
  const [backgroundOpacity, setBackgroundOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [backgroundGradient, setBackgroundGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg, #4f46e5, #9333ea)");
  const [backgroundImagePreview, setBackgroundImagePreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [bgUploading, setBgUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#121633");
  const [textOpacity, setTextOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
  const [headerTextColor, setHeaderTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#121633");
  const [headerTextOpacity, setHeaderTextOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.5);
  const [widgetBgType, setWidgetBgType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("color");
  const [widgetBgColor, setWidgetBgColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#ffffff");
  const [widgetBgGradient, setWidgetBgGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("linear-gradient(135deg, #ffffff, #f3f4f6)");
  const responsiveBlock = "w-full min-w-0";

  /* ======================================================
     LOAD SETTINGS
  ====================================================== */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _w$pw_background_opac, _w$pw_text_opacity, _w$pw_header_text_opa;
    if (!settings?.settings?.widget_style_settings) return;
    let w = settings.settings.widget_style_settings;
    if (typeof w === "string") {
      try {
        w = JSON.parse(w);
      } catch {
        return;
      }
    }

    /* Profile */
    setTitle(w.pw_title || "");
    setDescription(w.pw_description || "");
    setAddress(w.pw_address || "");
    setEmail(w.pw_email || "");
    setHideAvatar(w.pw_hide_avatar || false);
    setUploadedUrl(w.pw_avatar || null);
    setAvatarPreview(w.pw_avatar || "");
    setUploadedBannerUrl(w.pw_banner_image || null);
    setBannerImagePreview(w.pw_banner_image || "");

    /* Social */
    setInstagram(w.pw_instagram || "");
    setTikTok(w.pw_tiktok || "");
    setYoutube(w.pw_youtube || "");
    setX(w.pw_x || "");
    setFacebook(w.pw_facebook || "");
    setLinks(Array.isArray(w.pw_links) ? w.pw_links : []);
    setYoutubeVideos(Array.isArray(w.pw_youtube_videos) ? w.pw_youtube_videos : []);
    setOrder(Array.isArray(w.pw_content_order) ? w.pw_content_order : ["events", "links", "videos"]);

    /* Theme */
    setBgType(w.pw_bg_type || "color");
    setBackgroundColor(w.pw_background_color || "#ffffff");
    setBackgroundOpacity((_w$pw_background_opac = w.pw_background_opacity) !== null && _w$pw_background_opac !== void 0 ? _w$pw_background_opac : 1);
    setBackgroundGradient(w.pw_background_gradient || backgroundGradient);
    setTextColor(w.pw_text_color || "#121633");
    setTextOpacity((_w$pw_text_opacity = w.pw_text_opacity) !== null && _w$pw_text_opacity !== void 0 ? _w$pw_text_opacity : 0.5);
    setHeaderTextColor(w.pw_header_text_color || "#121633");
    setHeaderTextOpacity((_w$pw_header_text_opa = w.pw_header_text_opacity) !== null && _w$pw_header_text_opa !== void 0 ? _w$pw_header_text_opa : 0.5);
    setWidgetBgType(w.pw_widget_bg_type || "color");
    setWidgetBgColor(w.pw_widget_bg_color || "#ffffff");
    setWidgetBgGradient(w.pw_widget_bg_gradient || widgetBgGradient);
  }, [settings]);

  /* ======================================================
     UPLOAD HELPERS (✅ Missing Methods Restored)
  ====================================================== */

  const handleUploadError = error => {
    setTimeout(() => {
      if (!error?.response) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Network error. Check your internet connection.");
        return;
      }
      const {
        status,
        data
      } = error.response;
      if (status === 413) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("File is too large for the server.");
        return;
      }
      if (data?.code === "rest_upload_unknown_error") {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Upload failed on server. Please contact site administrator.");
        return;
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(data?.message || "Upload failed.");
    }, 0);
  };
  const uploadImageToMediaLibrary = async file => {
    try {
      return await (0,_utilities_media__WEBPACK_IMPORTED_MODULE_7__.uploadMedia)(file);
    } catch (error) {
      handleUploadError(error);
      return null;
    }
  };

  /* ---------------- Avatar Upload ---------------- */

  const handleAvatarChange = async file => {
    if (!file) return;
    setAvatarUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);

    // Upload to WP media library
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      setUploadedUrl(url);
    }
    setAvatarUploading(false);
  };

  /* ---------------- Banner Upload ---------------- */

  const handleBannerChange = async file => {
    if (!file) return;
    setBannerUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setBannerImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload banner image
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      setUploadedBannerUrl(url);
    }
    setBannerUploading(false);
  };

  /* ---------------- Background Upload ---------------- */

  const handleBackgroundImageChange = async file => {
    if (!file) return;
    setBgUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => setBackgroundImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Upload image
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      // If later you want to persist pw_background_image, add state:
      // setBackgroundImage(url);
      console.log("Background uploaded:", url);
    }
    setBgUploading(false);
  };

  /* ======================================================
     SAVE SETTINGS
  ====================================================== */

  const saveSettings = async () => {
    setLoading(true);
    let oldWidgetSettings = {};
    try {
      oldWidgetSettings = JSON.parse(settings.settings.widget_style_settings || "{}");
    } catch {}
    const newWidgetSettings = {
      ...oldWidgetSettings,
      pw_title: title,
      pw_description: description,
      pw_address: address,
      pw_email: email,
      pw_hide_avatar: hideAvatar,
      pw_avatar: uploadedUrl,
      pw_banner_image: uploadedBannerUrl,
      pw_instagram: instagram,
      pw_tiktok: tiktok,
      pw_youtube: youtube,
      pw_x: x,
      pw_facebook: facebook,
      pw_links: links,
      pw_youtube_videos: youtubeVideos,
      pw_content_order: order,
      pw_bg_type: bgType,
      pw_background_color: backgroundColor,
      pw_background_opacity: backgroundOpacity,
      pw_background_gradient: backgroundGradient,
      pw_text_color: textColor,
      pw_text_opacity: textOpacity,
      pw_header_text_color: headerTextColor,
      pw_header_text_opacity: headerTextOpacity,
      pw_widget_bg_type: widgetBgType,
      pw_widget_bg_color: widgetBgColor,
      pw_widget_bg_gradient: widgetBgGradient
    };
    try {
      await (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_8__.saveSettings)({
        ...settings,
        settings: {
          ...settings.settings,
          widget_style_settings: JSON.stringify(newWidgetSettings)
        }
      });
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)("Settings saved successfully.");
    } catch (err) {
      console.error(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Save failed.");
    }
    setLoading(false);
  };

  /* ======================================================
   ✅ STATUS TEXT HELPERS
  ====================================================== */

  const hasProfileInfo = title.trim() || description.trim() || address.trim() || email.trim() || uploadedUrl || uploadedBannerUrl;
  const hasSocialInfo = instagram.trim() || tiktok.trim() || youtube.trim() || x.trim() || facebook.trim();
  const hasCustomLinks = links.length > 0;
  const hasYoutubeVideos = youtubeVideos.length > 0;
  const hasThemeInfo = bgType !== "color" || backgroundColor !== "#ffffff" || widgetBgColor !== "#ffffff";
  const profileStatus = hasProfileInfo ? "Profile configured" : "No profile details set";
  const linkBioStatus = hasSocialInfo ? "Links configured" : "No links added yet";
  const themeStatus = hasThemeInfo ? "Theme customized" : "Using default theme";
  const customLinksStatus = hasCustomLinks ? `${links.length} link${links.length > 1 ? "s" : ""} added` : "No custom links yet";
  const youtubeStatus = hasYoutubeVideos ? `${youtubeVideos.length} video${youtubeVideos.length > 1 ? "s" : ""} added` : "No videos added yet";

  /* ======================================================
     UI
  ====================================================== */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loading: false,
    withBackground: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "dashboard-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "servv-dashboard-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "dashboard-heading",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h1", {
            className: "dashboard-title",
            children: "Branding"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
            className: "dashboard-description",
            children: "Customize your widget branding and store details"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "header-line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Containers_PageContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pt-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_15__.Profile,
            title: "Profile",
            statusText: profileStatus,
            description: "Business name, avatar and widget header branding.",
            buttonText: "Edit",
            handleSave: saveSettings,
            footerActions: (() => {
              const fileRef = React.useRef(null);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                  ref: fileRef,
                  type: "file",
                  accept: "image/*",
                  hidden: true,
                  onChange: e => {
                    const file = e.target.files?.[0];
                    // console.log(file);
                    if (file) handleAvatarChange(file);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  type: "button",
                  onClick: () => fileRef.current?.click(),
                  disabled: avatarUploading,
                  className: "px-5 py-2 bg-[#7A5AF8] text-white rounded-lg",
                  children: "Upload Avatar"
                })]
              });
            })(),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_16__["default"], {
              isLoading: loading,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_ProfileBrandingModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
                title: title,
                setTitle: setTitle,
                description: description,
                setDescription: setDescription,
                address: address,
                setAddress: setAddress,
                email: email,
                setEmail: setEmail,
                hideAvatar: hideAvatar,
                avatarUploading: avatarUploading,
                setHideAvatar: setHideAvatar,
                avatarPreview: avatarPreview
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"],
            title: "Social",
            description: "Add and update your social media links.",
            buttonText: "Edit",
            statusText: linkBioStatus,
            handleSave: saveSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_16__["default"], {
              isLoading: loading,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_LinkInBioModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
                instagram: instagram,
                setInstagram: setInstagram,
                tiktok: tiktok,
                setTikTok: setTikTok,
                youtube: youtube,
                setYoutube: setYoutube,
                x: x,
                setX: setX,
                facebook: facebook,
                setFacebook: setFacebook,
                links: links,
                setLinks: setLinks,
                youtubeVideos: youtubeVideos,
                setYoutubeVideos: setYoutubeVideos,
                order: order,
                setOrder: setOrder
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"],
            title: "Theme",
            description: "Colors, gradients, background and widget styling.",
            buttonText: "Edit",
            statusText: themeStatus,
            handleSave: saveSettings,
            footerActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
              type: "button",
              disabled: bannerUploading,
              onClick: () => document.getElementById("themeBannerUploadInput")?.click(),
              className: "px-5 py-2 bg-[#7A5AF8] text-white rounded-lg hover:bg-[#6941C6] font-semibold text-sm disabled:opacity-50",
              children: bannerUploading ? "Uploading..." : "Upload Banner"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_16__["default"], {
              isLoading: loading,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_ThemeBrandingModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                bgType: bgType,
                setBgType: setBgType,
                backgroundColor: backgroundColor,
                setBackgroundColor: setBackgroundColor,
                backgroundOpacity: backgroundOpacity,
                setBackgroundOpacity: setBackgroundOpacity,
                backgroundGradient: backgroundGradient,
                setBackgroundGradient: setBackgroundGradient,
                backgroundImagePreview: backgroundImagePreview,
                setBackgroundImagePreview: setBackgroundImagePreview,
                bgUploading: bgUploading,
                textColor: textColor,
                setTextColor: setTextColor,
                textOpacity: textOpacity,
                setTextOpacity: setTextOpacity,
                headerTextColor: headerTextColor,
                setHeaderTextColor: setHeaderTextColor,
                headerTextOpacity: headerTextOpacity,
                setHeaderTextOpacity: setHeaderTextOpacity,
                widgetBgType: widgetBgType,
                setWidgetBgType: setWidgetBgType,
                widgetBgColor: widgetBgColor,
                setWidgetBgColor: setWidgetBgColor,
                widgetBgGradient: widgetBgGradient,
                setWidgetBgGradient: setWidgetBgGradient,
                responsiveBlock: responsiveBlock,
                bannerImagePreview: bannerImagePreview,
                bannerUploading: bannerUploading,
                handleBannerChange: handleBannerChange,
                hideAvatar: hideAvatar,
                setHideAvatar: setHideAvatar,
                avatarUploading: setAvatarUploading,
                avatarPreview: setAvatarPreview,
                handleAvatarChange: handleAvatarChange,
                order: order,
                setOrder: setOrder
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
            icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"],
            title: "Links",
            statusText: customLinksStatus,
            description: "External links shown in your widget.",
            buttonText: "Edit",
            handleSave: saveSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_16__["default"], {
              isLoading: loading,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_CustomLinksModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                links: links,
                setLinks: setLinks
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_SettingsCardWithModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_15__.Youtube,
            title: "Videos",
            description: "Add video blocks inside widget.",
            statusText: youtubeStatus,
            buttonText: "Edit",
            handleSave: saveSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_SpinnerLoader__WEBPACK_IMPORTED_MODULE_16__["default"], {
              isLoading: loading,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Modals_YoutubeLinksModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                youtubeVideos: youtubeVideos,
                setYoutubeVideos: setYoutubeVideos
              })
            })
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandingPage);

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

/***/ "./src/Components/Shared/ImageUploadField.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Shared/ImageUploadField.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controls/PageActionButton */ "./src/Components/Controls/PageActionButton.jsx");
/* harmony import */ var _UploadBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadBars */ "./src/Components/Shared/UploadBars.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ImageUploadField = ({
  id,
  label,
  buttonText,
  uploading,
  preview,
  onFileSelect,
  // ✅ renamed
  shape = "square"
}) => {
  const handleInputChange = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (typeof onFileSelect !== "function") {
      console.error("❌ onFileSelect must be a function!", onFileSelect);
      return;
    }
    onFileSelect(file);

    // ✅ allow selecting same file again
    e.target.value = "";
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex flex-col gap-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "font-medium text-sm",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      id: id,
      type: "file",
      accept: "image/*",
      hidden: true,
      onChange: handleInputChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Controls_PageActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: uploading ? "Uploading..." : buttonText,
      type: "secondary",
      disabled: uploading,
      className: "w-[170px]",
      onAction: () => document.getElementById(id)?.click()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UploadBars__WEBPACK_IMPORTED_MODULE_2__["default"], {
      visible: uploading
    }), preview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: preview,
      alt: "Preview",
      className: shape === "circle" ? "w-[120px] h-[120px] rounded-full object-cover border self-center" : "h-[150px] rounded-lg object-cover border w-full"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUploadField);

/***/ }),

/***/ "./src/Components/Shared/SortableItem.jsx":
/*!************************************************!*\
  !*** ./src/Components/Shared/SortableItem.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SortableItem = ({
  id,
  children
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__.useSortable)({
    id
  });
  const style = {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_1__.CSS.Transform.toString(transform),
    transition
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: setNodeRef,
    style: style,
    ...attributes,
    className: "w-full",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center gap-3 p-3 bg-white border rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        ...listeners,
        className: "cursor-grab text-gray-400 select-none",
        children: "\u2630"
      }), children]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortableItem);

/***/ }),

/***/ "./src/Components/Shared/SortableRow.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Shared/SortableRow.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortableItem */ "./src/Components/Shared/SortableItem.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/TrashIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SortableRow = ({
  id,
  title,
  subtitle,
  onEdit,
  onRemove
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SortableItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center justify-between gap-3 w-full p-3 border rounded-lg bg-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col truncate flex-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "font-medium text-gray-900 truncate max-w-[300px]",
          children: title
        }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-sm text-gray-500 truncate max-w-[300px]",
          children: subtitle
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: onEdit,
          className: "p-2 rounded-lg hover:bg-gray-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-5 h-5 text-gray-600"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: onRemove,
          className: "p-2 rounded-lg hover:bg-red-50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-5 h-5 text-red-500"
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortableRow);

/***/ }),

/***/ "./src/Components/Shared/StepBlock.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Shared/StepBlock.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const StepBlock = ({
  title,
  description,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "step__content_block",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "step__content_title",
      children: title
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-sm text-gray-500 mb-4",
      children: description
    }), children]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepBlock);

/***/ }),

/***/ "./src/Components/Shared/UploadBars.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Shared/UploadBars.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const UploadBars = ({
  visible
}) => {
  if (!visible) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "upload-bars",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadBars);

/***/ }),

/***/ "./src/utilities/media.js":
/*!********************************!*\
  !*** ./src/utilities/media.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadMedia: () => (/* binding */ uploadMedia)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const uploadMedia = async file => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wp-json/wp/v2/media", formData, {
    headers: {
      "X-WP-Nonce": servvData.nonce
    },
    timeout: 30000
  });
  return response.data.source_url;
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

/***/ "./src/Components/Modals/AnimatedModal.module.scss":
/*!*********************************************************!*\
  !*** ./src/Components/Modals/AnimatedModal.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"overlay":"TGn8m83T0B_NsCHTYCOZ","svFade":"sdJAszeOgMWoi0qgaU0P","panel":"REGkLoohoWNHGLrB50QN","svPop":"mtjR5dQk0_uqd80N_R4L","closing":"G61Zw30dvOfUnKKuQbvn","svFadeOut":"tcaNBH8NwDQZ7BaLPHqS","svPopOut":"hvz7KD3CNAqpTeSi2EUv"});

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
//# sourceMappingURL=src_Components_Pages_BrandingPage_jsx.js.map?ver=b3e9a73be226c10b96d3