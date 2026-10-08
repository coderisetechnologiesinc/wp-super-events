import styles from "./SettingsForm.module.scss";
import BlockStack from "../../Containers/BlockStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import NewSelectControl from "../../Controls/NewSelectControl";
import CheckboxItem from "../../Controls/CheckboxItem";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";
import NewButtonGroup from "../../Controls/NewButtonGroup";
import NewTimeInputControl from "../../Controls/NewTimeInputControl";
const GeneralSettings = ({
  settings,
  timezones,
  timeOptions,
  currencyOptions,
  durationOptions,
  eventTypes,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  stripeConnected,
  zoomAccount,
  handleTimezoneChange,
  handleTimeFormatChange,
  handleHideTimezoneChange,
  handleCurrencyChange,
  handleDefaultDurationChange,
  handleDefaultStartTimeChange,
  getDefaultStartTime,
  getDefaultEndTime,
  handleDefaultPriceChange,
  handleDefaultQuantityChange,
  handleDefaultTypeChange,
  handleDefaultEndTimeChange,
  getDurationOptions,
  formatDuration,
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <h2>Locale</h2>
        <p>Used for display, emails, and exports.</p>
      </div>
      <div className={styles.rows}>
        <AnnotatedSection
          variant="settings"
          title="Time zone"
          description="Set a default time zone."
        >
          <BlockStack gap={2} className={styles.compact}>
            <NewSelectControl
              label=""
              options={timezones.map((t) => ({ value: t.name, label: t.name }))}
              value={
                settings?.settings?.admin_dashboard?.default_timezone &&
                timezones.findIndex(
                  (t) =>
                    t.id ===
                    settings?.settings?.admin_dashboard?.default_timezone,
                ) >= 0
                  ? timezones[
                      timezones.findIndex(
                        (t) =>
                          t.id ===
                          settings?.settings?.admin_dashboard?.default_timezone,
                      )
                    ].name
                  : null
              }
              onChange={handleTimezoneChange}
            />
          </BlockStack>
        </AnnotatedSection>

        <AnnotatedSection
          variant="settings"
          title="Time format"
          description="Set a default time format."
        >
          <BlockStack gap={4} className={styles.compact}>
            <NewSelectControl
              label=""
              options={timeOptions.map((option) => ({
                value: option,
                label: option,
              }))}
              value={
                settings?.settings?.time_format_24_hours
                  ? "24 hours"
                  : "12 hours"
              }
              onChange={handleTimeFormatChange}
            />
            <CheckboxItem
              label="Hide timezone abbreviation in email, widget and dashboard."
              checked={settings?.settings?.hide_time_zone}
              onChange={handleHideTimezoneChange}
            />
          </BlockStack>
        </AnnotatedSection>

        <AnnotatedSection
          variant="settings"
          title="Currency format"
          description="Set a default currency."
        >
          <BlockStack gap={2} className={styles.compact}>
            <NewSelectControl
              label=""
              options={currencyOptions.map((option) => ({
                value: option,
                label: option,
              }))}
              value={
                settings?.settings?.widget_style_settings?.currency_format ===
                "sign"
                  ? "Currency sign: $ / 元"
                  : "Alphabets: USD / CAD / CNY"
              }
              onChange={handleCurrencyChange}
            />
          </BlockStack>
        </AnnotatedSection>
      </div>
      <div className={styles.group}>
        <h2>Event defaults</h2>
        <p>Pre-filled on the create-event form.</p>
      </div>
      <div className={styles.rows}>
        <AnnotatedSection
          variant="settings"
          title="Duration"
          description="Set a default event duration."
        >
          <BlockStack gap={2} cardsLayout={true} className={styles.compact}>
            <NewSelectControl
              label=""
              options={getDurationOptions().map((option) => ({
                value: option,
                label: option,
              }))}
              value={
                settings?.settings?.admin_dashboard?.default_duration
                  ? Number.isInteger(
                      settings.settings.admin_dashboard.default_duration,
                    ) &&
                    settings.settings.admin_dashboard.default_duration <= 12
                    ? durationOptions()[
                        settings.settings.admin_dashboard.default_duration - 1
                      ]
                    : formatDuration(
                        settings.settings.admin_dashboard.default_duration,
                      )
                  : "1 hour"
              }
              onChange={(val) => handleDefaultDurationChange(val)}
            />
          </BlockStack>
        </AnnotatedSection>

        <AnnotatedSection
          variant="settings"
          title="Start / end time"
          description="Set a default start and end time."
        >
          <BlockStack gap={2} cardsLayout={true}>
            <div className={styles.times}>
              <NewTimeInputControl
                label="Start time"
                time={getDefaultStartTime()}
                onChange={(val) => handleDefaultStartTimeChange(val)}
                timeFormat={
                  settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a"
                }
              />
              <NewTimeInputControl
                label="End time"
                time={getDefaultEndTime()}
                onChange={(val) => handleDefaultEndTimeChange(val)}
                timeFormat={
                  settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a"
                }
              />
            </div>
          </BlockStack>
        </AnnotatedSection>

        <AnnotatedSection
          variant="settings"
          title="Ticket price"
          description="Set a default ticket price."
        >
          <BlockStack gap={2} cardsLayout={true} className={styles.number}>
            <NewInputFieldControl
              width="100%"
              value={
                settings &&
                settings.settings &&
                settings.settings.admin_dashboard
                  ? settings.settings.admin_dashboard.default_price
                  : 0.0
              }
              type="number"
              align="left"
              minValue={0}
              // disabled={isBillingPlanRestriction || !stripeConnected}
              onChange={(newVal) => handleDefaultPriceChange(newVal)}
            />
          </BlockStack>
        </AnnotatedSection>

        <AnnotatedSection
          variant="settings"
          title="Ticket quantity"
          description={`Set a default ticket quantity. The maximum number of tickets for your plan is ${
            settings?.free_registrants_limit || 15
          }`}
        >
          <BlockStack gap={2} cardsLayout={true} className={styles.number}>
            <NewInputFieldControl
              width="100%"
              value={
                settings &&
                settings.settings &&
                settings.settings.admin_dashboard
                  ? settings.settings.admin_dashboard.default_quantity
                  : 0.0
              }
              type="number"
              align="left"
              minValue={0}
              disabled={isBillingPlanRestriction ? 15 : null}
              onChange={(newVal) => handleDefaultQuantityChange(newVal)}
            />
          </BlockStack>
        </AnnotatedSection>

        {zoomAccount && (
          <AnnotatedSection
            variant="settings"
            title="Location"
            description="Set a default event location."
          >
            <BlockStack gap={2} cardsLayout={true} className={styles.compact}>
              <NewButtonGroup
                title=""
                buttons={eventTypes.map((type) => type.label)}
                active={
                  settings &&
                  settings.settings &&
                  settings.settings.admin_dashboard &&
                  settings.settings.admin_dashboard.default_event_type
                    ? eventTypes[
                        eventTypes
                          .map((type) => type.value)
                          .indexOf(
                            settings.settings.admin_dashboard
                              .default_event_type,
                          )
                      ].label
                    : "offline"
                }
                disabled={isBillingPlanRestriction || !zoomAccount}
                onChange={(newVal) => handleDefaultTypeChange(newVal)}
              />
            </BlockStack>
          </AnnotatedSection>
        )}
      </div>
    </div>
  );
};

export default GeneralSettings;
