// components/Settings/BillingSettings.jsx
import BlockStack from "../../Containers/BlockStack";
import PaymentOptionsModal from "../../Controls/PaymentOptionsModal";

const BillingSettings = ({
  responsiveBlockStack,
  showPaymentForm,
  renderBillingPlans,
  showPaymentOptionsModal,
  setShowPaymentOptionsModal,
  selectedPlan,
  setSelectedPlan,
  activateBillingPlan,
  isMarketplace = true,
}) => {
  return (
    <>
      <BlockStack gap={8} className={responsiveBlockStack}>
        {!showPaymentForm && (
          <div
            className={
              isMarketplace
                ? "flex flex-row min-w-0 w-full mx-auto max-w-[480px] flex-1 justify-center"
                : `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6`
            }
          >
            {renderBillingPlans()}
          </div>
        )}
        <div id="servv-payment-element"></div>
      </BlockStack>

      <PaymentOptionsModal
        open={showPaymentOptionsModal}
        onCancel={() => {
          setShowPaymentOptionsModal(false);
          setSelectedPlan(null);
        }}
        fee={selectedPlan?.application_fee_percent}
        onAcceptMonthly={() => activateBillingPlan(selectedPlan.id)}
        onAcceptAnnual={() => activateBillingPlan(selectedPlan.id, true)}
        price={selectedPlan?.price || 0}
        priceAnnual={selectedPlan?.price_annual || 0}
      />
    </>
  );
};

export default BillingSettings;
