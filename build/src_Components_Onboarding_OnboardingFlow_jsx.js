"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Onboarding_OnboardingFlow_jsx"],{

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

/***/ "./src/Components/Onboarding/OnboardingFlow.jsx":
/*!******************************************************!*\
  !*** ./src/Components/Onboarding/OnboardingFlow.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/attributes */ "./src/utilities/attributes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/events */ "./src/utilities/events.js");
/* harmony import */ var _utilities_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/settings */ "./src/utilities/settings.js");
/* harmony import */ var _utilities_accounts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/accounts */ "./src/utilities/accounts.js");
/* harmony import */ var _utilities_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/filters */ "./src/utilities/filters.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _Modals_ModalShell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Modals/ModalShell */ "./src/Components/Modals/ModalShell.jsx");
/* harmony import */ var _SkipOnboardingModalContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SkipOnboardingModalContent */ "./src/Components/Onboarding/SkipOnboardingModalContent.jsx");
/* harmony import */ var _utilities_stripe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/stripe */ "./src/utilities/stripe.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
















// Lazy load step components

const SettingsStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_Components_Onboarding_SettingsStep_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SettingsStep */ "./src/Components/Onboarding/SettingsStep.jsx")));
const FirstEventStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_Onboarding_FirstEventStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./FirstEventStep */ "./src/Components/Onboarding/FirstEventStep.jsx")));
const IntegrationsStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_Onboarding_IntegrationsStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./IntegrationsStep */ "./src/Components/Onboarding/IntegrationsStep.jsx")));
const BrandingStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_Onboarding_BrandingStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./BrandingStep */ "./src/Components/Onboarding/BrandingStep.jsx")));
const BillingStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_Onboarding_BillingStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./BillingStep */ "./src/Components/Onboarding/BillingStep.jsx")));
const StepperIcon = ({
  Icon,
  iconClass,
  active,
  showLine
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
  className: "stepper-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
    className: `icon-box ${active ? "is-active" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Icon, {
      className: `icon-box__svg ${iconClass}`
    })
  }), showLine && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
    className: "icon-line"
  })]
});
const StepperText = ({
  title,
  subtitle,
  active,
  completed
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: `stepper-text ${active ? "is-active" : ""} ${completed ? "is-completed" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "stepper-title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "stepper-subtitle",
      children: subtitle
    })]
  });
};
const OnboardingFlow = () => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.settings);
  const gmailConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.gmailConnected);
  const zoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.zoomConnected);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.filtersList);
  const fetchSettings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.fetchSettings);
  const syncGmailAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.syncGmailAccount);
  const syncCalendarAccount = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.syncCalendarAccount);
  const syncSingleFilterFromServer = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.syncSingleFilterFromServer);
  const [synchronization, setSynchronization] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [stripeConnected, setStripeConnected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [searchParams, setSearchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useSearchParams)();
  const activatePlan = searchParams.has("activate_plan");

  // Get initial step from URL or default to first step
  const stepFromUrl = searchParams.get("step");
  const [brandingCompleted, setBrandingCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [completedSteps, setCompletedSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showSkipModal, setShowSkipModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [skipConfirmed, setSkipConfirmed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    // Settings step
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    location: "",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    defaultEventType: "offline",
    // offline | zoom
    emailConnected: false,
    // First event step
    firstEvent: {
      topic: "",
      startTime: null,
      duration: 60,
      agenda: "",
      location: "offline"
    },
    // Branding step
    branding: {
      avatar: null,
      title: "",
      description: "",
      backgroundColor: "#ffffff",
      textColor: "#000000"
    }
  });
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    key: "billing",
    title: "Billing Plan",
    subtitle: "Choose your plan",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__["default"],
    iconClass: "icon--angled"
  },
  // {
  //   key: "branding",
  //   title: "Store Branding",
  //   subtitle: "Personalize your appearance",
  //   Icon: BrushIcon,
  //   iconClass: "icon--angled",
  // },
  {
    key: "integrations",
    title: "Integrations",
    subtitle: "Connect your services",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__["default"],
    iconClass: ""
  }, {
    key: "settings",
    title: "Global Settings",
    subtitle: "Configure your preferences",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__["default"],
    iconClass: ""
  }, {
    key: "first-event",
    title: "Create First Event",
    subtitle: "Set up your initial event",
    Icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__["default"],
    iconClass: ""
  }]);

  // Determine current step from URL or default
  const getValidStep = stepKey => {
    return steps.find(s => s.key === stepKey) ? stepKey : steps[0].key;
  };
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getValidStep(stepFromUrl));

  // Update URL when step changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!activatePlan) setSearchParams({
      step: currentStep
    }, {
      replace: true
    });
  }, [currentStep, setSearchParams]);

  // Handle returning from redirect (e.g., after email connection)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const returnStep = searchParams.get("return_step");
    const success = searchParams.get("success");
    const error = searchParams.get("error");
    if (returnStep) {
      const validStep = getValidStep(returnStep);
      setCurrentStep(validStep);
      if (success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(decodeURIComponent(success));
      }
      if (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(decodeURIComponent(error));
      }

      // Clean up URL params
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("return_step");
      newParams.delete("success");
      newParams.delete("error");
      setSearchParams(newParams, {
        replace: true
      });
    }
    setSynchronization(true);
    // syncGmailAccount();
    // syncZoomAccount();
    // syncSingleFilterFromServer("locations");
    // syncCalendarAccount();
    // getStripeAccount(servvData.nonce).then((account) => {
    //   if (account?.charges_enabled) setStripeConnected(true);
    // });
    setSynchronization(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!attributes.location && Array.isArray(filtersList?.locations) && filtersList.locations.length > 0) {
      const firstLocationName = filtersList.locations[0]?.name;
      if (firstLocationName) {
        setAttributes(prev => ({
          ...prev,
          location: firstLocationName
        }));
      }
    }
  }, [filtersList?.locations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!settings?.settings) return;
    let adminDashboard = {};
    try {
      adminDashboard = typeof settings.settings.admin_dashboard === "string" ? JSON.parse(settings.settings.admin_dashboard) : settings.settings.admin_dashboard || {};
    } catch (e) {
      console.warn("Invalid admin_dashboard JSON", e);
    }
    if (settings?.is_wp_marketplace === true && steps.filter(step => step.key === "branding").length === 0) {
      let newSteps = [...steps];
      newSteps.splice(1, 0, {
        key: "branding",
        title: "Store Branding",
        subtitle: "Personalize your appearance",
        Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_2__.BrushIcon,
        iconClass: "icon--angled"
      });
      setSteps(newSteps);
    }
    setAttributes(prev => ({
      ...prev,
      ...(adminDashboard.default_timezone && {
        timezone: adminDashboard.default_timezone
      }),
      ...(adminDashboard.default_event_type && {
        defaultEventType: adminDashboard.default_event_type === "zoom" ? "zoom" : "offline"
      }),
      ...(typeof settings.settings.time_format_24_hours === "boolean" && {
        timeFormat: settings.settings.time_format_24_hours ? "24h" : "12h"
      }),
      ...(settings.location && {
        location: settings.location
      })
    }));
  }, [settings]);
  const stepComponents = {
    billing: BillingStep,
    branding: BrandingStep,
    integrations: IntegrationsStep,
    settings: SettingsStep,
    "first-event": FirstEventStep
  };
  const StepComponent = stepComponents[currentStep];
  const mergeAttributes = patch => {
    setAttributes(prev => (0,_utilities_attributes__WEBPACK_IMPORTED_MODULE_1__.mergeAttributesPatch)(prev, patch));
  };
  const markStepCompleted = stepKey => {
    setCompletedSteps(prev => new Set([...prev, stepKey]));
  };
  const goToNextStep = () => {
    const currentIndex = steps.findIndex(s => s.key === currentStep);
    if (currentIndex < steps.length - 1) {
      markStepCompleted(currentStep);

      // if (currentIndex === 3) {
      //   navigate(
      //     `/events/new?onboarding_step=2&timezone=${attributes.timezone}`,
      //   );
      //   return;
      // }

      setCurrentStep(steps[currentIndex + 1].key);
    }
  };
  const goToPreviousStep = () => {
    const currentIndex = steps.findIndex(s => s.key === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].key);
    }
  };
  const handleStepClick = stepKey => {
    const clickedIndex = steps.findIndex(s => s.key === stepKey);

    // Allow going back to any previous step or completed step
    if (clickedIndex !== steps.length - 1) {
      setCurrentStep(stepKey);
    }
  };
  const handleFirstEventCreate = async eventData => {
    setLoading(true);
    try {
      const response = await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_6__.createEvent)(eventData.location, {
        meeting: {
          topic: eventData.topic,
          startTime: eventData.startTime,
          duration: eventData.duration,
          agenda: eventData.agenda,
          timezone: attributes.timezone,
          eventType: eventData.location === "offline" ? 1 : 2
        }
      });

      // Store event ID for later reference
      mergeAttributes({
        firstEventId: response.id
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("First event created successfully");
      goToNextStep();
    } catch (error) {
      console.error("Event creation error:", error);
      react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleBrandingComplete = async branding => {
    try {
      var _ref, _branding$avatar, _ref2, _branding$banner, _ref3, _branding$backgroundG;
      setLoading(true);
      let existing = {};
      try {
        existing = JSON.parse(settings?.settings?.widget_style_settings || "{}");
      } catch {
        existing = {};
      }
      const mergedSettings = {
        ...existing,
        /* Profile */
        pw_title: branding.title || existing.pw_title || "",
        pw_description: branding.description || existing.pw_description || "",
        pw_avatar: (_ref = (_branding$avatar = branding.avatar) !== null && _branding$avatar !== void 0 ? _branding$avatar : existing.pw_avatar) !== null && _ref !== void 0 ? _ref : null,
        pw_banner_image: (_ref2 = (_branding$banner = branding.banner) !== null && _branding$banner !== void 0 ? _branding$banner : existing.pw_banner_image) !== null && _ref2 !== void 0 ? _ref2 : null,
        /* Theme */
        pw_bg_type: branding.backgroundType || existing.pw_bg_type || "color",
        pw_background_color: branding.backgroundColor || existing.pw_background_color || "#ffffff",
        pw_background_gradient: (_ref3 = (_branding$backgroundG = branding.backgroundGradient) !== null && _branding$backgroundG !== void 0 ? _branding$backgroundG : existing.pw_background_gradient) !== null && _ref3 !== void 0 ? _ref3 : null,
        pw_text_color: branding.textColor || existing.pw_text_color || "#000000"
      };
      await (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_7__.saveSettings)({
        ...settings,
        settings: {
          ...settings.settings,
          widget_style_settings: JSON.stringify(mergedSettings)
        }
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("Branding saved successfully");
      await fetchSettings();
      setBrandingCompleted(true);
    } catch (err) {
      console.error(err);
      react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Failed to save branding");
    } finally {
      setLoading(false);
    }
  };
  const handleLocationSave = async location => {
    setLoading(true);
    await (0,_utilities_filters__WEBPACK_IMPORTED_MODULE_9__.createLocation)(location);
    // await syncSingleFilterFromServer("locations");
  };
  const connectGmail = async () => {
    await handleSettingsSave({
      sync: true
    });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    await (0,_utilities_accounts__WEBPACK_IMPORTED_MODULE_8__.getGmailConnectURL)();
  };
  const connectZoom = async () => {
    await handleSettingsSave({
      sync: true
    });
    localStorage.setItem("redirectToOnboarding", window.location.href);
    await (0,_utilities_accounts__WEBPACK_IMPORTED_MODULE_8__.getZoomConnectURL)();
  };
  const connectStripe = async () => {
    const url = await (0,_utilities_stripe__WEBPACK_IMPORTED_MODULE_13__.getStripeConnectURL)(servvData.nonce);
    if (url) {
      open(`${servvData.shopify_app}/payments/stripe/connect?wordpress_url=${encodeURIComponent(url.auth_url)}&wordpress_return_url=${encodeURIComponent(window.location.origin)}`, "_top");
    }
  };
  const handleSettingsSave = async ({
    sync = false
  }) => {
    setLoading(true);
    const adminDashboard = settings.admin_dashboard && Object.keys(settings.admin_dashboard).length > 0 ? settings.admin_dashboard : {};
    const payload = {
      ...settings,
      settings: {
        ...settings.settings,
        time_format_24_hours: attributes.timeFormat === "24h",
        admin_dashboard: JSON.stringify({
          ...adminDashboard,
          default_timezone: attributes.timezone,
          default_event_type: attributes.defaultEventType
        })
      }
    };
    try {
      await (0,_utilities_settings__WEBPACK_IMPORTED_MODULE_7__.saveSettings)(payload).catch(err => console.error(err));
      if (attributes.location && attributes.location.length > 0) {
        const exists = filtersList?.locations?.some(f => f.name === attributes.location) || false;
        if (!exists) {
          await handleLocationSave(attributes.location);
        }
      }
      if (sync) await fetchSettings();
      if (!sync) goToNextStep();
    } catch (error) {
      console.error("Settings save error:", error);
      react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Failed to save settings. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleSkipOnboarding = () => {
    const isBrandingStep = currentStep === "branding";
    const brandingCompleted = attributes?.branding?.title?.trim();
    if (isBrandingStep && brandingCompleted) {
      localStorage.setItem("onboardingSkipped", "1");
      navigate("/dashboard", {
        replace: true
      });
      return;
    }
    setShowSkipModal(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [currentStep]);
  if (activatePlan) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loading: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "create-event",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("main", {
          className: `create-event__content m-auto ${settings?.is_wp_marketplace ? "marketplace" : ""}`,
          ref: contentRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
            fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "step-loading",
              children: "Loading\u2026"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "step-slide w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(BillingStep, {
                attributes: attributes,
                setAttributes: mergeAttributes,
                currentStep: "billing",
                goToNextStep: () => navigate("/dashboard"),
                goToPreviousStep: () => navigate("/dashboard"),
                checkingEmail: synchronization,
                loading: loading,
                zoomConnected: zoomConnected,
                isGmailConnected: gmailConnected,
                stripeConnected: stripeConnected,
                onConnectGmail: connectGmail,
                onConnectZoom: connectZoom,
                onConnectStripe: connectStripe,
                brandingCompleted: brandingCompleted,
                settings: settings,
                onSave: handleBrandingComplete
              })
            })
          })
        })
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loading: loading,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "create-event",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("aside", {
        className: `create-event__sidebar ${settings?.is_wp_marketplace ? "marketplace" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "logo-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "logo-bg",
            style: {
              backgroundImage: `url(${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__})`
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "sidebar__logo servv-logo-png"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "sidebar__stepper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            children: steps.map((step, index) => {
              const isActive = step.key === currentStep;
              const isCompleted = completedSteps.has(step.key);
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "stepper__row",
                onClick: () => handleStepClick(step.key),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StepperIcon, {
                  Icon: step.Icon,
                  iconClass: step.iconClass,
                  active: isActive,
                  completed: isCompleted,
                  showLine: index < steps.length - 1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StepperText, {
                  title: step.title,
                  subtitle: step.subtitle,
                  active: isActive,
                  completed: isCompleted
                })]
              }, step.key);
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "sidebar__bottom-link",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.Support, {
            className: "bottom-link__icon",
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
            className: "bottom-link__text",
            onClick: () => window.open("/support", "_blank"),
            children: "Need Help?"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("main", {
        className: `create-event__content ${settings?.is_wp_marketplace ? "marketplace" : ""}`,
        ref: contentRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "servv-create-form-close",
          onClick: handleSkipOnboarding,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {
            className: "servv-create-form-close-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
          fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "step-loading",
            children: "Loading\u2026"
          }),
          children: StepComponent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "step-slide w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(StepComponent, {
              attributes: attributes,
              setAttributes: mergeAttributes,
              currentStep: currentStep,
              goToNextStep: goToNextStep,
              goToPreviousStep: goToPreviousStep,
              checkingEmail: synchronization,
              loading: loading,
              zoomConnected: zoomConnected,
              isGmailConnected: gmailConnected,
              stripeConnected: stripeConnected,
              onConnectGmail: connectGmail,
              onConnectZoom: connectZoom,
              onConnectStripe: connectStripe,
              brandingCompleted: brandingCompleted,
              settings: settings,
              onSave: currentStep === "settings" ? handleSettingsSave : currentStep === "first-event" ? handleFirstEventCreate : handleBrandingComplete
            })
          }, currentStep)
        })]
      }), showSkipModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Modals_ModalShell__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Skip onboarding",
        onClose: () => setShowSkipModal(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_SkipOnboardingModalContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
          confirmed: skipConfirmed,
          setConfirmed: setSkipConfirmed,
          closeModal: () => setShowSkipModal(false),
          onConfirm: () => {
            setShowSkipModal(false);
            localStorage.setItem("onboardingSkipped", window.location.origin);
            navigate("/dashboard?onboarding=skipped");
          }
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnboardingFlow);

/***/ }),

/***/ "./src/Components/Onboarding/SkipOnboardingModalContent.jsx":
/*!******************************************************************!*\
  !*** ./src/Components/Onboarding/SkipOnboardingModalContent.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_StepBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/StepBlock */ "./src/Components/Shared/StepBlock.jsx");
/* harmony import */ var _Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Containers/BlockStack */ "./src/Components/Containers/BlockStack.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SkipOnboardingModalContent = ({
  onConfirm,
  closeModal
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Shared_StepBlock__WEBPACK_IMPORTED_MODULE_0__["default"], {
  description: "You can skip onboarding now and configure everything later.",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Containers_BlockStack__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gap: 5,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex justify-end gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: "px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition",
        onClick: closeModal,
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: "px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition",
        onClick: onConfirm,
        children: "Skip onboarding"
      })]
    })
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipOnboardingModalContent);

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

/***/ "./src/utilities/attributes.js":
/*!*************************************!*\
  !*** ./src/utilities/attributes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeAttributesPatch: () => (/* binding */ mergeAttributesPatch)
/* harmony export */ });
// Shallow-merges a patch into the event attributes, one level deep: plain
// objects are merged with what is already there, while arrays and primitives
// replace it. Pass the result to a state setter's updater form.
const mergeAttributesPatch = (prev, patch) => {
  const next = {
    ...prev
  };
  Object.keys(patch).forEach(key => {
    const value = patch[key];
    const isPlainObject = typeof value === "object" && value !== null && !Array.isArray(value);
    next[key] = isPlainObject ? {
      ...(prev[key] || {}),
      ...value
    } : value;
  });
  return next;
};

/***/ }),

/***/ "./src/utilities/events.js":
/*!*********************************!*\
  !*** ./src/utilities/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   eventKey: () => (/* binding */ eventKey),
/* harmony export */   eventRoutePayload: () => (/* binding */ eventRoutePayload),
/* harmony export */   generateEventData: () => (/* binding */ generateEventData),
/* harmony export */   getEvent: () => (/* binding */ getEvent),
/* harmony export */   getFeaturedImage: () => (/* binding */ getFeaturedImage),
/* harmony export */   openEventPost: () => (/* binding */ openEventPost),
/* harmony export */   updateEvent: () => (/* binding */ updateEvent)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const getEvent = async (postId, occurrenceId = null) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/wp-json/servv-plugin/v1/event/${postId}`, {
    params: occurrenceId ? {
      occurrence_id: occurrenceId
    } : {},
    headers: headers()
  });
  return response.data;
};
const createEvent = async (location, data) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/events/${location}`, data, {
    headers: headers()
  });
  return response.data;
};
const generateEventData = async data => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/event/data/generate`, data, {
    headers: headers()
  });
  return response.data;
};
const updateEvent = async (postId, data, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${postId}`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].patch(url, data, {
    headers: headers()
  });
  return response.data;
};
const getFeaturedImage = async (postId, signal = null) => {
  const WP_API_BASE = `/wp-json/wp/v2/posts`;
  const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, {
    signal
  });
  console.log(res);
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
};

// Opens the public post an event is published as. The events endpoint only
// knows the post id, so the permalink has to come from WordPress itself.
const openEventPost = postId => {
  if (!postId) return;
  fetch(`/wp-json/wp/v2/posts/${postId}`).then(res => res.json()).then(post => {
    if (post?.link) open(post.link, "_blank");
  }).catch(e => console.log(e));
};

// One event can appear as its series and as a single occurrence, so neither id
// alone identifies a row.
const eventKey = event => `${event.id}${event.occurrence_id || ""}`;

// The shape Dashboard's handleOpenEvent expects. Kept in one place so every
// view — cards, rows, rail — navigates identically.
const eventRoutePayload = (event, {
  registrants = false
} = {}) => ({
  id: event.post_id,
  occurrence_id: event.occurrence_id,
  ...(registrants ? {
    registrants_view: true
  } : {})
});

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

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.b4e524fb.png";

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function Cog6ToothIcon({
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
    d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Cog6ToothIcon);
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

/***/ "./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/LinkIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function LinkIcon({
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
    d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LinkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function RocketLaunchIcon({
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
    d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(RocketLaunchIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_Components_Onboarding_OnboardingFlow_jsx.js.map?ver=7d428ec7bf75894ecf63