"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Onboarding_BrandingStep_jsx"],{

/***/ "./src/Components/Containers/InteractiveCard.jsx":
/*!*******************************************************!*\
  !*** ./src/Components/Containers/InteractiveCard.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const InteractiveCard = ({
  isPremium = false,
  background,
  onClick,
  subtitle,
  title,
  text,
  action,
  footer,
  children,
  style,
  className = "",
  selected = false
}) => {
  const computedBg = background !== null && background !== void 0 ? background : isPremium ? "#462986" : "#FFFFFF";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `relative flex flex-col rounded-2xl border p-6 flex-1 ${className}${onClick ? " cursor-pointer" : ""}`,
    style: {
      background: computedBg,
      border: selected ? "2px solid #7A5AF8" : "1px solid #E6EBE7",
      boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
      ...style
    },
    onClick: onClick,
    children: [selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute top-3 right-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_0__.CheckMark, {})
    }), (subtitle || title || text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col items-center gap-2 text-center",
      children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: subtitle
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: title
      }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: text
      })]
    }), children, action && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-auto pt-6",
      children: action
    }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-3 text-center",
      children: footer
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveCard);

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

/***/ "./src/Components/Onboarding/BrandingStep.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Onboarding/BrandingStep.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/media */ "./src/utilities/media.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Controls/NewInputControl */ "./src/Components/Controls/NewInputControl.jsx");
/* harmony import */ var _Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/InteractiveCard */ "./src/Components/Containers/InteractiveCard.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const BrandingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  brandingCompleted,
  settings,
  onSave,
  loading
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const avatarInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_6__.useServvStore)(s => s.fetchSettings);
  const [avatarUploading, setAvatarUploading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const pickValue = (current, incoming, fallback = undefined) => {
    if (current !== undefined && current !== null && current !== "") {
      return current;
    }
    if (incoming !== undefined && incoming !== null && incoming !== "") {
      return incoming;
    }
    return fallback;
  };
  const didInitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didInitRef.current) return;
    if (!settings?.settings?.widget_style_settings) return;
    didInitRef.current = true;
    let existing = {};
    try {
      existing = typeof settings.settings.widget_style_settings === "string" ? JSON.parse(settings.settings.widget_style_settings) : settings.settings.widget_style_settings || {};
    } catch (e) {
      console.warn("Invalid widget_style_settings JSON", e);
    }
    setAttributes({
      branding: {
        ...attributes.branding,
        title: pickValue(attributes.branding?.title, existing.pw_title, ""),
        description: pickValue(attributes.branding?.description, existing.pw_description, ""),
        avatar: pickValue(attributes.branding?.avatar, existing.pw_avatar, null),
        avatarPreview: pickValue(attributes.branding?.avatarPreview, existing.pw_avatar, null),
        banner: pickValue(attributes.branding?.banner, existing.pw_banner_image, null),
        bannerPreview: pickValue(attributes.branding?.bannerPreview, existing.pw_banner_image, null),
        backgroundType: pickValue(attributes.branding?.backgroundType, existing.pw_bg_type, "color"),
        backgroundColor: pickValue(attributes.branding?.backgroundColor, existing.pw_background_color, "#ffffff"),
        backgroundGradient: pickValue(attributes.branding?.backgroundGradient, existing.pw_background_gradient, "linear-gradient(135deg, #4f46e5, #9333ea)"),
        textColor: pickValue(attributes.branding?.textColor, existing.pw_text_color, "#000000"),
        _initialized: true
      }
    });
  }, [settings]);

  /* --------------------------------------------
     Image upload helper
  -------------------------------------------- */
  const uploadImageToMediaLibrary = async file => {
    try {
      return await (0,_utilities_media__WEBPACK_IMPORTED_MODULE_2__.uploadMedia)(file);
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Upload failed. Please try again.");
      return null;
    }
  };

  /* --------------------------------------------
     Avatar upload
  -------------------------------------------- */
  const handleAvatarChange = async file => {
    if (!file) return;
    setAvatarUploading(true);

    // Preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setAttributes({
        branding: {
          ...attributes.branding,
          avatarPreview: reader.result
        }
      });
    };
    reader.readAsDataURL(file);

    // Upload to WP media library
    const url = await uploadImageToMediaLibrary(file);
    if (url) {
      setAttributes({
        branding: {
          ...attributes.branding,
          avatar: url,
          avatarPreview: url
        }
      });
    }
    setAvatarUploading(false);
  };

  /* --------------------------------------------
     Submit
  -------------------------------------------- */
  const handleContinue = () => {
    if (!attributes.branding.title?.trim()) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Please enter a store name");
      return;
    }
    onSave(attributes.branding);
    goToNextStep();
  };
  const avatarSrc = attributes.branding.avatarPreview || attributes.branding.avatar;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "step__wrapper w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_3__.BrushIcon, {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
          className: "step__header_title",
          children: "Branding"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "step__description",
          children: "Personalize your widget appearance and profile information."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "step__content w-full max-w-[640px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "flex-1 flex flex-col",
          style: {
            padding: "24px",
            gap: "32px",
            borderRadius: "16px",
            border: "1px solid #E6EBE7",
            boxShadow: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
              className: "step__content_title flex flex-row items-center",
              children: ["Store Name", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ml-1 text-brand-700",
                children: "*"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Controls_NewInputControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
              placeholder: "Enter your store name",
              value: attributes.branding.title || "",
              onChange: val => setAttributes({
                branding: {
                  ...attributes.branding,
                  title: val
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "step__description",
              children: "This will appear at the top of your widget."
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "flex-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "step__content_title",
              children: "Logo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
              ref: avatarInputRef,
              type: "file",
              accept: "image/*",
              style: {
                display: "none"
              },
              onChange: e => {
                const file = e.target.files?.[0];
                if (file) handleAvatarChange(file);
              }
            }), avatarSrc ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "flex flex-col items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                src: avatarSrc,
                alt: "Avatar preview",
                className: "w-[96px] h-[96px] rounded-full border object-cover",
                style: {
                  opacity: avatarUploading ? 0.6 : 1
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                  type: "button",
                  className: "servv_upload__action",
                  onClick: () => avatarInputRef.current?.click(),
                  disabled: avatarUploading,
                  children: avatarUploading ? "Uploading..." : "Change"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                  type: "button",
                  className: "flex items-center gap-1 text-[13px] font-semibold text-red-500 cursor-pointer bg-none border-none",
                  style: {
                    background: "none",
                    border: "none"
                  },
                  onClick: () => setAttributes({
                    branding: {
                      ...attributes.branding,
                      avatar: "",
                      avatarPreview: ""
                    }
                  }),
                  disabled: avatarUploading,
                  children: "Remove"
                })]
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "servv_upload",
              onClick: () => avatarInputRef.current?.click(),
              style: {
                cursor: "pointer"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "servv_upload__icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_3__.UploadIcon, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "servv_upload__text",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                  type: "button",
                  className: "servv_upload__action",
                  children: avatarUploading ? "Uploading..." : "Click to upload"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "servv_upload__support",
                children: "PNG or JPG up to 5MB."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "servv_upload__support",
                children: "Recommended size: 400\xD7400px."
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "servv_actions mt-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          type: "button",
          className: "servv_button servv_button--primary",
          onClick: handleContinue,
          disabled: loading || !attributes.branding.title?.trim(),
          children: loading ? "Saving..." : "Continue"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandingStep);

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

/***/ })

}]);
//# sourceMappingURL=src_Components_Onboarding_BrandingStep_jsx.js.map?ver=576ba46b7855f9333a78