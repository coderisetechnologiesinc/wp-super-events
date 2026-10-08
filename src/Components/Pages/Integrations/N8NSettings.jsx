import { Fragment } from "react";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import NewSelectControl from "../../Controls/NewSelectControl";
import NewInputFieldControl from "../../Controls/NewInputFieldControl";
import CheckboxItem from "../../Controls/CheckboxItem";
import BlockStack from "../../Containers/BlockStack";

const METHOD_OPTIONS = ["POST", "GET", "PUT", "PATCH", "DELETE"];

// The three n8n workflows, each with a trigger toggle and a method/url/secret
// trio. Option keys are prefix + suffix throughout, matching what
// inc/ajax/shop/shop.php reads and writes.
const WORKFLOWS = [
  {
    key: "event_created",
    triggerTitle: "Event Created Trigger",
    triggerDescription:
      "Enable this to trigger the workflow whenever a new event is created.",
    settingsTitle: "Event Created Wrokflow Settings",
    settingsDescription:
      "Configure how n8n should handle new event creation. Define the HTTP method, the endpoint URL and the secret used to verify requests.",
  },
  {
    key: "new_booking",
    triggerTitle: "New Booking Trigger",
    triggerDescription:
      "Enable this to trigger the workflow whenever a new booking is made.",
    settingsTitle: "New Booking Workflow Settings",
    settingsDescription:
      "Configure how n8n should handle new bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests.",
  },
  {
    key: "canceled_booking",
    triggerTitle: "Canceled Booking Trigger",
    triggerDescription:
      "Enable this to trigger the workflow whenever a booking is canceled.",
    settingsTitle: "Canceled Booking Workflow Settings",
    settingsDescription:
      "Configure how n8n should handle canceled bookings. Define the HTTP method, the endpoint URL and the secret used to verify requests.",
  },
];

const N8NSettings = ({ n8nSettingsData = {}, settingsUpdate = () => {} }) => {
  const responsiveInput = "w-full min-w-0";

  const handleValueChange = (key, val) => {
    let currValues = n8nSettingsData;

    if (!isNaN(Number.parseInt(val))) {
      currValues[key] = Number.parseInt(val) === 1 ? false : true;
    } else if (typeof val === "boolean") {
      currValues[key] = !currValues[key];
    } else {
      currValues[key] = val;
    }
    settingsUpdate(currValues);
  };

  // The toggle arrives either as a boolean or as the "1"/"0" the option stores.
  const isTriggerActive = (value) =>
    typeof value === "boolean" ? value : Number.parseInt(value) === 1;

  return (
    <Fragment>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full gap-16">
          <div className="flex flex-col gap-4">
            {WORKFLOWS.map(({ key, triggerTitle, triggerDescription }) => (
              <AnnotatedSection
                key={key}
                className={`${responsiveInput} items-center`}
                title={triggerTitle}
                description={triggerDescription}
              >
                <CheckboxItem
                  checked={isTriggerActive(n8nSettingsData[`${key}_active`])}
                  onChange={() =>
                    handleValueChange(
                      `${key}_active`,
                      n8nSettingsData[`${key}_active`],
                    )
                  }
                />
              </AnnotatedSection>
            ))}
          </div>

          <BlockStack gap={4}>
            <span className="font-semibold border-b pb-1 w-full self-end">
              Triggers settings
            </span>

            {WORKFLOWS.map(({ key, settingsTitle, settingsDescription }) => (
              <AnnotatedSection
                key={key}
                className={responsiveInput}
                title={settingsTitle}
                description={settingsDescription}
              >
                <BlockStack gap={2}>
                  <div className="flex flex-row w-full items-end gap-2 mb-2">
                    <div className="flex-none">
                      <NewSelectControl
                        options={METHOD_OPTIONS.map((option) => ({
                          value: option,
                          label: option,
                        }))}
                        value={n8nSettingsData[`${key}_method`] || null}
                        onChange={(newVal) =>
                          handleValueChange(`${key}_method`, newVal)
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <NewInputFieldControl
                        width="100%"
                        align="left"
                        value={n8nSettingsData[`${key}_url`]}
                        onChange={(newVal) =>
                          handleValueChange(`${key}_url`, newVal)
                        }
                        placeholder="Endpoint URL"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <NewInputFieldControl
                      width="100%"
                      align="left"
                      value={n8nSettingsData[`${key}_secret`]}
                      onChange={(newVal) =>
                        handleValueChange(`${key}_secret`, newVal)
                      }
                      placeholder="Secret"
                    />
                  </div>
                </BlockStack>
              </AnnotatedSection>
            ))}
          </BlockStack>
        </div>
      </div>
    </Fragment>
  );
};

export default N8NSettings;
