import styles from "./SettingsForm.module.scss";
import BlockStack from "../../Containers/BlockStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import CheckboxItem from "../../Controls/CheckboxItem";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";

const RemindersSettings = ({
  settings,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  handleEmailRemindersStateChange,
  handleFirstReminderStateChange,
  handleFirstReminderHoursChange,
  handleSecondReminderStateChange,
  handleSecondReminderHoursChange,
  handleFinishedReminderStateChange,
  handleNewAdditionalEmailsChange,
  handleAdditionalRemindersHoursChange,
  handleStaffMemberEmailChange,
}) => {
  return (
    <BlockStack gap={0} className={styles.rows}>
      <AnnotatedSection
        variant="settings"
        title="Email notifications"
        description="Enable email notifications"
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} cardsLayout={true} className={responsiveBlockStack}>
          <CheckboxItem
            label="Enable email notifications"
            checked={settings?.settings?.disable_emails === false}
            onChange={handleEmailRemindersStateChange}
            disabled={isBillingPlanRestriction}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="First reminder"
        description="Enable first reminder and specify time to first reminder"
        className={responsiveBlockStack}
      >
        <BlockStack gap={4} cardsLayout={true} className={responsiveBlockStack}>
          <CheckboxItem
            label="First reminder"
            checked={settings?.settings?.first_reminder}
            onChange={handleFirstReminderStateChange}
            disabled={isBillingPlanRestriction}
          />
          <NewInputFieldControl
            width="100%"
            value={settings ? settings.first_reminder_hours : 0}
            type="number"
            align="left"
            disabled={isBillingPlanRestriction}
            onChange={(newVal) => handleFirstReminderHoursChange(newVal)}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Second reminder"
        description="Enable second reminder and specify time to second reminder"
        className={responsiveBlockStack}
      >
        <BlockStack gap={4} cardsLayout={true} className={responsiveBlockStack}>
          <CheckboxItem
            label="Second reminder"
            checked={settings?.settings?.second_reminder}
            onChange={handleSecondReminderStateChange}
            disabled={isBillingPlanRestriction}
          />
          <NewInputFieldControl
            width="100%"
            value={settings ? settings.second_reminder_hours : 0}
            type="number"
            align="left"
            disabled={isBillingPlanRestriction}
            onChange={(newVal) => handleSecondReminderHoursChange(newVal)}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Finished reminder"
        description="Send notification after the event has ended"
        className={responsiveBlockStack}
      >
        <BlockStack gap={4} cardsLayout={true} className={responsiveBlockStack}>
          <CheckboxItem
            label="Finished reminder"
            disabled={isBillingPlanRestriction}
            checked={settings?.settings?.finished_reminder || 0}
            onChange={handleFinishedReminderStateChange}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        variant="settings"
        title="Additional Email Notification Settings"
        description="Set up extra email alerts and reminders for your events. You can choose to skip staff notifications or add reminder emails at specific times before the event"
        className={responsiveBlockStack}
      >
        <BlockStack gap={8} className={responsiveBlockStack}>
          <BlockStack
            gap={2}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
            <div className="input-container-col">
              <div className="section-description">
                Additional reminder emails list (comma-separated)
              </div>
              <NewInputFieldControl
                width="100%"
                value={settings ? settings.additional_reminder_emails : ""}
                disabled={isBillingPlanRestriction}
                type="text"
                align="left"
                onChange={(newVal) => handleNewAdditionalEmailsChange(newVal)}
              />
            </div>
          </BlockStack>

          <BlockStack
            gap={2}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
            <div className="input-container-col">
              <div className="section-description">
                Additional reminder hours
              </div>
              <NewInputFieldControl
                width="100%"
                value={settings ? settings.members_reminder_hours : 0}
                type="number"
                align="left"
                disabled={isBillingPlanRestriction}
                onChange={(newVal) =>
                  handleAdditionalRemindersHoursChange(newVal)
                }
              />
            </div>
          </BlockStack>

          <BlockStack
            gap={2}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
            <CheckboxItem
              label="Skip Staff Email Notification"
              disabled={isBillingPlanRestriction}
              checked={settings?.settings?.skip_members_in_calendar_files || 0}
              onChange={handleStaffMemberEmailChange}
            />
          </BlockStack>
        </BlockStack>
      </AnnotatedSection>
    </BlockStack>
  );
};

export default RemindersSettings;
