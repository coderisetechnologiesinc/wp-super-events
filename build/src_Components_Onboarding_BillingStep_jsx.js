"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_Onboarding_BillingStep_jsx"],{

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

/***/ "./src/Components/Onboarding/BillingStep.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Onboarding/BillingStep.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_billing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/billing */ "./src/utilities/billing.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/lib/index.mjs");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/CreditCardIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");
/* harmony import */ var _Modals_AnimatedModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modals/AnimatedModal */ "./src/Components/Modals/AnimatedModal.jsx");
/* harmony import */ var _Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var _Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Containers/InteractiveCard */ "./src/Components/Containers/InteractiveCard.jsx");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const BillingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  onSave,
  loading: parentLoading,
  settings
}) => {
  const [billingPlans, setBillingPlans] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPaymentForm, setShowPaymentForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedPlan, setSelectedPlan] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [stripeForm, setStripeForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    syncPlanAfterActivation
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_7__.useServvStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getBillingPlans();
  }, []);
  const getBillingPlans = async () => {
    setLoading(true);
    const plans = await (0,_utilities_billing__WEBPACK_IMPORTED_MODULE_2__.getBillingPlans)().catch(() => (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Unable to fetch billing plans."));
    if (plans) {
      setBillingPlans(plans);
    }
    setLoading(false);
  };
  const activateBillingPlan = async (id, isAnnual = false) => {
    setLoading(true);
    setShowPaymentOptionsModal(false);
    const data = await (0,_utilities_billing__WEBPACK_IMPORTED_MODULE_2__.activateBillingPlan)(id, isAnnual).catch(() => {
      (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Unable to activate billing plan.");
      setLoading(false);
    });
    if (data) {
      const {
        client_secret,
        public_key
      } = data;
      const stripe = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(public_key);
      const handleComplete = async () => {
        setLoading(true);
        checkout.destroy();
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Your billing plan has been successfully activated.");
        setShowPaymentForm(false);
        setAttributes({
          planActivated: true,
          planId: id
        });
        // Not fetchSettings: the plan reaches Servv through a webhook, so it
        // has to be waited for, past the cached copy.
        await syncPlanAfterActivation(id);
        setLoading(false);
      };
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: handleComplete
      });
      setShowPaymentForm(true);
      checkout.mount("#servv-payment-element");
      setStripeForm(checkout);
    }
    setLoading(false);
  };
  const showPaymentOptions = plan => {
    setSelectedPlan(plan);
    setShowPaymentOptionsModal(true);
  };
  const handleContinue = () => {
    onSave({
      ...attributes
    });
  };
  const activePlanId = settings?.current_plan?.id || 1;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activePlanId !== 1) {
      goToNextStep();
    }
  }, [activePlanId]);
  const isMarketplace = settings?.is_wp_marketplace === true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "step__wrapper w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "step__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "step__header_icon settings-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "step__heading",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
          className: "step__header_title",
          children: "Choose a Plan"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "step__description",
          children: "Select the plan that best fits your needs."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: `step__content w-full`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "flex flex-col gap-y-[24px] mb-[30px]",
        children: !showPaymentForm ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isLoading: loading && !billingPlans,
          customStyling: "top-[30px]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: `${isMarketplace ? "flex flex-row max-w-[640px] items-center mx-auto justify-center" : "grid grid-cols-1 md:grid-cols-2 gap-6"}`,
            children: billingPlans?.map((plan, idx) => {
              const isCurrent = activePlanId === plan.id;
              const isUpgradeable = plan.id > (activePlanId || 0);
              const premium = idx === billingPlans.length - 1;
              if (isMarketplace && plan.id !== 1 || !isMarketplace) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Containers_InteractiveCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
                isPremium: premium,
                style: {
                  minHeight: 0
                },
                subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                  className: "text-sm font-bold tracking-widest uppercase",
                  style: {
                    background: premium ? "linear-gradient(91.35deg, #FFFFFF 2.18%, #CAC5E6 16.69%, #C4CBF7 40.59%, #C3E2E9 67.97%, #E8A76B 98.12%)" : undefined,
                    WebkitBackgroundClip: premium ? "text" : undefined,
                    backgroundClip: premium ? "text" : undefined,
                    WebkitTextFillColor: premium ? "transparent" : "#872CFA"
                  },
                  children: plan.name
                }),
                title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
                  className: "text-3xl font-bold",
                  style: {
                    color: premium ? "#FFFFFF" : "#070908"
                  },
                  children: plan.price > 0 ? `$${plan.price}/mo` : plan.price_annual > 0 ? `$${plan.price_annual}/yr` : "Free"
                }),
                text: plan.application_fee_percent > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                  className: "text-sm",
                  style: {
                    color: premium ? "rgba(255,255,255,0.6)" : "#717680"
                  },
                  children: [plan.application_fee_percent, "% transaction fee"]
                }) : null,
                action: isCurrent && activePlanId !== 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "flex flex-col items-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    className: "text-xs font-semibold px-2 py-1 rounded-full",
                    style: {
                      color: premium ? "#462986" : "#6941C6",
                      background: premium ? "#FFFFFF" : "#F4EBFF"
                    },
                    children: "Active Plan"
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                  type: "button",
                  className: "w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50",
                  style: {
                    background: "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)",
                    border: "3px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
                    color: "#FFFFFF"
                  },
                  onClick: () => {
                    if (plan.id === 1) {
                      goToNextStep();
                    } else if (isMarketplace) {
                      activateBillingPlan(plan.id);
                    } else {
                      showPaymentOptions(plan);
                    }
                  },
                  disabled: loading,
                  children: "Activate"
                })
              }, plan.id);
            })
          })
        }) : null
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        id: "servv-payment-element"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Modals_AnimatedModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: showPaymentOptionsModal && !!selectedPlan,
      onClose: () => {
        setShowPaymentOptionsModal(false);
        setSelectedPlan(null);
      },
      children: ({
        close
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "relative w-full max-w-[600px] max-h-[85vh] bg-white rounded-xl shadow-lg flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          onClick: close,
          className: "absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full border border-[#D5D7DA] bg-white hover:bg-gray-50 shadow-md",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: "w-5 h-5 text-[#414651]"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "text-center p-8 pb-4 flex-shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h2", {
            className: "text-xl font-semibold text-[#181D27]",
            children: ["Activate ", selectedPlan?.name]
          }), selectedPlan?.application_fee_percent > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
            className: "text-base text-[#717680] mt-1",
            children: ["This plan includes a ", selectedPlan.application_fee_percent, "% transaction fee."]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "flex-1 overflow-y-auto px-8 py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [selectedPlan?.price > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              type: "button",
              className: "servv_button servv_button--primary w-full",
              onClick: () => {
                activateBillingPlan(selectedPlan.id);
                setShowPaymentOptionsModal(false);
                close();
              },
              children: ["Monthly \u2014 $", selectedPlan.price, "/mo"]
            }), selectedPlan?.price_annual > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              type: "button",
              className: "servv_button servv_button--secondary w-full",
              onClick: () => {
                activateBillingPlan(selectedPlan.id, true);
                setShowPaymentOptionsModal(false);
                close();
              },
              children: ["Annual \u2014 $", selectedPlan.price_annual, "/yr"]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "flex justify-end gap-3 p-8 pt-4 border-t border-gray-200 flex-shrink-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
            type: "button",
            className: "servv_button servv_button--secondary",
            onClick: close,
            children: "Cancel"
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingStep);

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

/***/ "./src/utilities/billing.js":
/*!**********************************!*\
  !*** ./src/utilities/billing.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateBillingPlan: () => (/* binding */ activateBillingPlan),
/* harmony export */   getBillingPlans: () => (/* binding */ getBillingPlans),
/* harmony export */   getBillingPortalSession: () => (/* binding */ getBillingPortalSession)
/* harmony export */ });
/* harmony import */ var _adminApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminApi */ "./src/utilities/adminApi.js");

const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const getBillingPlans = async () => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].get("/wp-json/servv-plugin/v1/shop/paymentplans", {
    headers: headers()
  });
  return response.data.plans;
};
const activateBillingPlan = async (id, isAnnual = false) => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/shop/paymentplans/${id}`, {
    is_annual: isAnnual
  }, {
    headers: headers()
  });
  return response.data;
};
const getBillingPortalSession = async () => {
  const response = await _adminApi__WEBPACK_IMPORTED_MODULE_0__["default"].post("/wp-json/servv-plugin/v1/shop/billing/portal/session", null, {
    headers: headers()
  });
  return response.data;
};

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
//# sourceMappingURL=src_Components_Onboarding_BillingStep_jsx.js.map?ver=168b8aefacc2d0d0f54c