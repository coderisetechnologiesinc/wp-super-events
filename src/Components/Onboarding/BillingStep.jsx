import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getBillingPlans as getBillingPlansUtil,
  activateBillingPlan as activateBillingPlanUtil,
} from "../../utilities/billing";
import { loadStripe } from "@stripe/stripe-js";

import {
  CreditCardIcon,
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AnimatedModal from "../Modals/AnimatedModal";
import SpinnerLoader from "../Pages/SpinnerLoader";
import InteractiveCard from "../Containers/InteractiveCard";
import { useServvStore } from "../../store/useServvStore";

const BillingStep = ({
  attributes,
  setAttributes,
  goToNextStep,
  goToPreviousStep,
  onSave,
  loading: parentLoading,
  settings,
}) => {
  const [billingPlans, setBillingPlans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [stripeForm, setStripeForm] = useState(null);
  const { syncPlanAfterActivation } = useServvStore();
  useEffect(() => {
    getBillingPlans();
  }, []);

  const getBillingPlans = async () => {
    setLoading(true);
    const plans = await getBillingPlansUtil().catch(() =>
      toast("Unable to fetch billing plans."),
    );

    if (plans) {
      setBillingPlans(plans);
    }
    setLoading(false);
  };

  const activateBillingPlan = async (id, isAnnual = false) => {
    setLoading(true);
    setShowPaymentOptionsModal(false);

    const data = await activateBillingPlanUtil(id, isAnnual).catch(() => {
      toast("Unable to activate billing plan.");
      setLoading(false);
    });

    if (data) {
      const { client_secret, public_key } = data;
      const stripe = await loadStripe(public_key);

      const handleComplete = async () => {
        setLoading(true);
        checkout.destroy();
        toast("Your billing plan has been successfully activated.");
        setShowPaymentForm(false);
        setAttributes({ planActivated: true, planId: id });
        // Not fetchSettings: the plan reaches Servv through a webhook, so it
        // has to be waited for, past the cached copy.
        await syncPlanAfterActivation(id);
        setLoading(false);
      };

      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        onComplete: handleComplete,
      });

      setShowPaymentForm(true);
      checkout.mount("#servv-payment-element");
      setStripeForm(checkout);
    }
    setLoading(false);
  };

  const showPaymentOptions = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentOptionsModal(true);
  };

  const handleContinue = () => {
    onSave({
      ...attributes,
    });
  };

  const activePlanId = settings?.current_plan?.id || 1;
  useEffect(() => {
    if (activePlanId !== 1) {
      goToNextStep();
    }
  }, [activePlanId]);
  const isMarketplace = settings?.is_wp_marketplace === true;
  return (
    <div className="step__wrapper w-full">
      {/* Header */}
      <div className="step__header">
        <CreditCardIcon className="step__header_icon settings-icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Choose a Plan</h4>
          <p className="step__description">
            Select the plan that best fits your needs.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={`step__content w-full`}>
        <div className="flex flex-col gap-y-[24px] mb-[30px]">
          {!showPaymentForm ? (
            <SpinnerLoader
              isLoading={loading && !billingPlans}
              customStyling="top-[30px]"
            >
              <div
                className={`${
                  isMarketplace
                    ? "flex flex-row max-w-[640px] items-center mx-auto justify-center"
                    : "grid grid-cols-1 md:grid-cols-2 gap-6"
                }`}
              >
                {billingPlans?.map((plan, idx) => {
                  const isCurrent = activePlanId === plan.id;
                  const isUpgradeable = plan.id > (activePlanId || 0);
                  const premium = idx === billingPlans.length - 1;

                  if ((isMarketplace && plan.id !== 1) || !isMarketplace)
                    return (
                      <InteractiveCard
                        key={plan.id}
                        isPremium={premium}
                        style={{ minHeight: 0 }}
                        subtitle={
                          <p
                            className="text-sm font-bold tracking-widest uppercase"
                            style={{
                              background: premium
                                ? "linear-gradient(91.35deg, #FFFFFF 2.18%, #CAC5E6 16.69%, #C4CBF7 40.59%, #C3E2E9 67.97%, #E8A76B 98.12%)"
                                : undefined,
                              WebkitBackgroundClip: premium
                                ? "text"
                                : undefined,
                              backgroundClip: premium ? "text" : undefined,
                              WebkitTextFillColor: premium
                                ? "transparent"
                                : "#872CFA",
                            }}
                          >
                            {plan.name}
                          </p>
                        }
                        title={
                          <h2
                            className="text-3xl font-bold"
                            style={{ color: premium ? "#FFFFFF" : "#070908" }}
                          >
                            {plan.price > 0
                              ? `$${plan.price}/mo`
                              : plan.price_annual > 0
                              ? `$${plan.price_annual}/yr`
                              : "Free"}
                          </h2>
                        }
                        text={
                          plan.application_fee_percent > 0 ? (
                            <p
                              className="text-sm"
                              style={{
                                color: premium
                                  ? "rgba(255,255,255,0.6)"
                                  : "#717680",
                              }}
                            >
                              {plan.application_fee_percent}% transaction fee
                            </p>
                          ) : null
                        }
                        action={
                          isCurrent && activePlanId !== 1 ? (
                            <div className="flex flex-col items-center">
                              <span
                                className="text-xs font-semibold px-2 py-1 rounded-full"
                                style={{
                                  color: premium ? "#462986" : "#6941C6",
                                  background: premium ? "#FFFFFF" : "#F4EBFF",
                                }}
                              >
                                Active Plan
                              </span>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="w-full rounded-lg text-sm font-extrabold py-2.5 px-6 transition-opacity hover:opacity-90 disabled:opacity-50"
                              style={{
                                background:
                                  "linear-gradient(74.06deg, #583DFF -11.67%, #9B25F8 47.12%)",
                                border: "3px solid rgba(255, 255, 255, 0.35)",
                                boxShadow:
                                  "0px 4px 8px -2px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
                                color: "#FFFFFF",
                              }}
                              onClick={() => {
                                if (plan.id === 1) {
                                  goToNextStep();
                                } else if (isMarketplace) {
                                  activateBillingPlan(plan.id);
                                } else {
                                  showPaymentOptions(plan);
                                }
                              }}
                              disabled={loading}
                            >
                              Activate
                            </button>
                          )
                        }
                      />
                    );
                })}
              </div>
            </SpinnerLoader>
          ) : null}
        </div>
        <div id="servv-payment-element" />

        {/* Actions */}
        {/* {!loading && billingPlans && (
          <div className={`servv_actions mt-auto`}>

            <button
              type="button"
              className="servv_button servv_button--primary"
              onClick={goToNextStep}
              disabled={loading || parentLoading}
            >
              {parentLoading ? "Saving..." : "Continue"}
            </button>
          </div>
        )} */}
      </div>

      {/* Payment Options Modal */}
      <AnimatedModal
        open={showPaymentOptionsModal && !!selectedPlan}
        onClose={() => {
          setShowPaymentOptionsModal(false);
          setSelectedPlan(null);
        }}
      >
        {({ close }) => (
          <div className="relative w-full max-w-[600px] max-h-[85vh] bg-white rounded-xl shadow-lg flex flex-col">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full border border-[#D5D7DA] bg-white hover:bg-gray-50 shadow-md"
            >
              <XMarkIcon className="w-5 h-5 text-[#414651]" />
            </button>

            {/* Header */}
            <div className="text-center p-8 pb-4 flex-shrink-0">
              <h2 className="text-xl font-semibold text-[#181D27]">
                Activate {selectedPlan?.name}
              </h2>
              {selectedPlan?.application_fee_percent > 0 && (
                <p className="text-base text-[#717680] mt-1">
                  This plan includes a {selectedPlan.application_fee_percent}%
                  transaction fee.
                </p>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-4">
              <div className="flex flex-col gap-4">
                {selectedPlan?.price > 0 && (
                  <button
                    type="button"
                    className="servv_button servv_button--primary w-full"
                    onClick={() => {
                      activateBillingPlan(selectedPlan.id);
                      setShowPaymentOptionsModal(false);
                      close();
                    }}
                  >
                    Monthly — ${selectedPlan.price}/mo
                  </button>
                )}

                {selectedPlan?.price_annual > 0 && (
                  <button
                    type="button"
                    className="servv_button servv_button--secondary w-full"
                    onClick={() => {
                      activateBillingPlan(selectedPlan.id, true);
                      setShowPaymentOptionsModal(false);
                      close();
                    }}
                  >
                    Annual — ${selectedPlan.price_annual}/yr
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-8 pt-4 border-t border-gray-200 flex-shrink-0">
              <button
                type="button"
                className="servv_button servv_button--secondary"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </AnimatedModal>
    </div>
  );
};

export default BillingStep;
