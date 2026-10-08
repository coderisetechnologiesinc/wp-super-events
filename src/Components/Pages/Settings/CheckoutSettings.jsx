import styles from "./SettingsForm.module.scss";
// components/Settings/CheckoutSettings.jsx
import BlockStack from "../../Containers/BlockStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import CheckboxItem from "../../Controls/CheckboxItem";

const CheckoutSettings = ({
  settings,
  handleFreeCheckoutChange,
  handleSkipCaptchaChange,
  handleMarketingConsentChange,
}) => {
  return (
    <BlockStack gap={0}>
      <AnnotatedSection
        variant="settings"
        title="Enable Fast Checkout for Free Events"
        description="Activate fast checkout to speed up the booking process for free services"
      >
        <BlockStack gap={2} cardsLayout={true}>
          <CheckboxItem
            label="Enable Fast Checkout"
            checked={settings?.settings?.free_events_skip_checkout || 0}
            onChange={handleFreeCheckoutChange}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Skip Captcha on Fast Checkout"
        description="Activate to bypass captcha verification during fast checkout for free services."
      >
        <BlockStack gap={2} cardsLayout={true}>
          <CheckboxItem
            label="Skip Captcha"
            checked={settings?.settings?.free_events_skip_captcha || 0}
            onChange={handleSkipCaptchaChange}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Marketing Consent Checkbox"
        description="Turn on this option to show a checkbox at free checkout, so customers can sign up for marketing emails and newsletters"
      >
        <BlockStack gap={2} cardsLayout={true}>
          <CheckboxItem
            label="Marketing Consent"
            checked={settings?.settings?.free_checkout_marketing_checkbox || 0}
            onChange={handleMarketingConsentChange}
          />
        </BlockStack>
      </AnnotatedSection>
    </BlockStack>
  );
};

export default CheckoutSettings;
