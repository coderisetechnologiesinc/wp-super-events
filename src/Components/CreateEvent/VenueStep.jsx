import { useEffect, useState } from "react";
import StepActions from "./StepActions";
import ConnectServiceModalContent from "../Modals/ConnectServiceModalContent";
import { MapMarkIcon } from "../../assets/icons";
import { ChevronDownIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import NewSelectControl from "../Controls/NewSelectControl";
import RadioGroup from "../Controls/RadioGroup";
import NewInputControl from "../Controls/NewInputControl";
import SelectDropdown from "./SelectDropdown";
import IntegrationCard from "../Containers/IntegrationCard";
import InteractiveCard from "../Containers/InteractiveCard";
import ModalShell from "../Modals/ModalShell";
import { useServvStore } from "../../store/useServvStore";
import { getZoomConnectURL } from "../../utilities/accounts";
const VENUE_OPTIONS = [
  {
    value: "offline",
    label: "In-Person",
    bg: "#065F46",
  },
  {
    value: "zoom",
    label: "Zoom",
    bg: "#1E3A8A",
  },
  {
    value: "custom",
    label: "Online",
    bg: "#4C1D95",
  },
  {
    value: "hybrid",
    label: "Hybrid",
    bg: "#92400E",
  },
];

const VenueStep = ({
  attributes,
  setAttributes,
  changeStep,
  zoomConnected,
  isNew,
  settings,
  handleFormSubmit,
  isOnboarding,
  setFullWidth,
}) => {
  const filtersList = useServvStore((s) => s.filtersList);
  const locationId = attributes?.filters?.location_id || "";
  const customFields = attributes.custom_fields || {};
  const zoomAccount = useServvStore((s) => s.zoomAccount);
  const [zoomConfirmed, setZoomConfirmed] = useState(false);
  const syncZoomAccount = useServvStore((s) => s.syncZoomAccount);
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [showZoomModal, setShowZoomModal] = useState(false);
  useEffect(() => {
    if (isOnboarding) setFullWidth?.(false);
  }, [isOnboarding]);

  useEffect(() => {
    if (zoomConnected) {
      syncZoomAccount();
    }
  }, [zoomConnected]);

  const { custom_field_1_name = "", custom_field_1_value = "" } = customFields;

  const locationOptions = [
    { value: null, label: "" },
    ...(filtersList?.locations?.map((loc) => ({
      value: String(loc.id),
      label: loc.name,
    })) ?? []),
  ];

  const handleLocationChange = (val) => {
    console.log(val);
    if (val === null) {
      setAttributes({
        filters: {
          ...(attributes.filters || {}),
          location_id: null,
        },
      });
    } else {
      setAttributes({
        filters: {
          ...(attributes.filters || {}),
          location_id: Number.parseInt(val),
        },
      });
    }
  };

  const updateCustomField = (key, value) => {
    setAttributes({
      custom_fields: {
        [key]: value,
      },
    });
  };

  const handleVenueChange = (newVal) => {
    let newEventType = 1;
    if (newVal === "offline") {
      if (attributes.meeting.recurrence) {
        newEventType = 2;
      } else {
        newEventType = 1;
      }
    } else if (newVal === "zoom") {
      if (attributes.meeting.recurrence) {
        newEventType = 4;
      } else {
        newEventType = 2;
      }
    } else if (newVal === "hybrid" || newVal === "online") {
      if (attributes.meeting.recurrence) {
        newEventType = 4;
      } else {
        newEventType = 2;
      }
    }
    let payload = {
      location: newVal,
      defaultLocationChanged: true,
      meeting: { ...attributes.meeting, eventType: newEventType },
    };
    if (newVal === "hybrid") {
      updateCustomField("custom_field_1_name", "Link");
      updateCustomField("custom_field_1_value", "");
    } else if (newVal === "custom") {
      updateCustomField("custom_field_1_name", "Meeting link");
      updateCustomField("custom_field_1_value", "");
    } else {
      updateCustomField("custom_field_1_name", "");
      updateCustomField("custom_field_1_value", "");
    }
    setAttributes(payload);
  };

  const handleVenueSelect = (val) => {
    handleVenueChange(val);
  };

  useEffect(() => {
    if (!settings?.settings?.admin_dashboard) {
      return;
    }

    const adminDashboard = settings.settings.admin_dashboard;

    try {
      if (typeof adminDashboard !== "string") {
        console.warn("adminDashboard is not a string:", typeof adminDashboard);
        return;
      }

      const parsed = JSON.parse(adminDashboard);

      if (!parsed || typeof parsed !== "object") {
        console.warn("Parsed adminDashboard is not a valid object");
        return;
      }

      const { default_event_type } = parsed;

      if (!default_event_type || typeof default_event_type !== "string") {
        return;
      }

      const shouldSetZoom =
        (default_event_type === "zoom" || default_event_type === "online") &&
        zoomConnected === true &&
        !attributes.defaultLocationChanged;

      if (shouldSetZoom) {
        handleVenueChange("zoom");
      }
    } catch (error) {
      console.error("Error parsing adminDashboard settings:", {
        error: error instanceof Error ? error.message : "Unknown error",
        rawData: adminDashboard,
      });
    }
  }, [
    settings,
    zoomConnected,
    attributes?.location,
    attributes.defaultLocationChanged,
  ]);

  useEffect(() => {
    console.log("", filtersList?.locations?.length);
    if (filtersList?.locations?.length === 1) {
      console.log(filtersList.locations[0].id);
      handleLocationChange(filtersList.locations[0].id);
    }
  }, [filtersList, settings]);

  const currentVenueType =
    custom_field_1_name === "Link"
      ? "hybrid"
      : custom_field_1_name === "Meeting link"
      ? "custom"
      : attributes.location;

  /* Fields shown after a card is selected (in onboarding mode) */
  const renderOnboardingFields = () => {
    const needsLocationSelect =
      currentVenueType === "offline" || currentVenueType === "hybrid";

    const needsLinkField =
      custom_field_1_name === "Link" || custom_field_1_name === "Meeting link";

    if (!needsLocationSelect && !needsLinkField && currentVenueType !== "zoom")
      return null;

    return (
      <div className="flex flex-col gap-4 mt-4 w-full max-w-[384px] self-stretch mx-auto">
        {needsLocationSelect && (
          <div className="step__content_block">
            <span className="step__content_title">Location</span>
            <NewSelectControl
              helpText="Select location"
              value={locationId}
              options={locationOptions}
              onChange={handleLocationChange}
              iconRight={<ChevronDownIcon />}
              style={{ width: "100%" }}
            />
          </div>
        )}

        {!zoomConnected && attributes.location === "zoom" && (
          <IntegrationCard
            icon={VideoCameraIcon}
            title="Zoom"
            description="Connect Zoom to provide unique meeting links to attendees"
            optional={true}
            connected={zoomConnected}
            onConnect={() => setShowZoomModal(true)}
            disabled={false}
          />
        )}
        {needsLinkField && (
          <div className="step__content_block">
            <span className="step__content_title">Meeting link</span>
            <NewInputControl
              placeholder="Enter Zoom, Meet, Teams or other meeting URL"
              value={custom_field_1_value}
              textarea={true}
              onChange={(val) => updateCustomField("custom_field_1_value", val)}
            />
          </div>
        )}
      </div>
    );
  };
  // console.log(!zoomConnected && attributes.location === "zoom");
  return (
    <div className="step__wrapper">
      <div className="step__header">
        <MapMarkIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Location</h4>
          <p className="step__description">Choose the event location</p>
        </div>
      </div>

      {isOnboarding ? (
        /* ── Onboarding card layout ── */
        <div className="step__content w-full">
          <div className="grid grid-cols-2 gap-4">
            {VENUE_OPTIONS.map((option) => {
              // const isDisabled = option.value === "zoom" && !zoomConnected;
              const isDisabled = false;
              return (
                <InteractiveCard
                  key={option.value}
                  onClick={
                    isDisabled
                      ? undefined
                      : () => handleVenueSelect(option.value)
                  }
                  selected={currentVenueType === option.value}
                  style={{
                    minHeight: 0,
                    opacity: isDisabled ? 0.45 : 1,
                    cursor: isDisabled ? "not-allowed" : "pointer",
                  }}
                  subtitle={
                    <p
                      className="text-sm font-bold tracking-widest uppercase"
                      style={{ color: "#872CFA" }}
                    >
                      Location
                    </p>
                  }
                  title={
                    <h2
                      className="text-3xl font-bold"
                      style={{ color: "#070908" }}
                    >
                      {option.label}
                    </h2>
                  }
                />
              );
            })}
          </div>

          {renderOnboardingFields()}

          <StepActions
            onPrevious={() => changeStep("date")}
            onPrimary={
              currentVenueType ? () => changeStep("tickets") : undefined
            }
          />
        </div>
      ) : (
        /* ── Default (non-onboarding) layout ── */
        <>
          <div className="step__content">
            <div className="step__content_block">
              <RadioGroup
                name="venue-mode"
                value={currentVenueType}
                className="w-[419px]"
                options={
                  !zoomConnected
                    ? [
                        { value: "offline", label: "In-Person" },
                        { value: "zoom", label: "Zoom", disabled: true },
                        { value: "custom", label: "Online" },
                        { value: "hybrid", label: "Hybrid" },
                      ]
                    : [
                        { value: "offline", label: "In-Person" },
                        { value: "zoom", label: "Zoom" },
                        { value: "custom", label: "Online" },
                        { value: "hybrid", label: "Hybrid" },
                      ]
                }
                disabled={!isNew}
                onChange={handleVenueChange}
              />
            </div>
          </div>

          <div className="step__content w-full">
            {(attributes.location === "offline" ||
              attributes.location === "hybrid") && (
              <div className="step__content_block">
                <span className="step__content_title">Location</span>
                <NewSelectControl
                  helpText="Select location"
                  value={locationId}
                  options={locationOptions}
                  onChange={handleLocationChange}
                  iconRight={<ChevronDownIcon />}
                  style={{ width: "100%" }}
                />
              </div>
            )}

            {attributes.location === "zoom" && zoomAccount && (
              <SelectDropdown
                id="zoom-account"
                title="Zoom account"
                options={[{ name: zoomAccount.email, id: zoomAccount.id }]}
                selected={zoomAccount.id || null}
                onSelect={() => {}}
                activeId={activeDropdownId}
                setActiveId={setActiveDropdownId}
              />
            )}

            {(custom_field_1_name === "Link" ||
              custom_field_1_name === "Meeting link") && (
              <div className="step__content_block">
                <span className="step__content_title">Meeting link</span>
                <NewInputControl
                  placeholder="Enter Zoom, Meet, Teams or other meeting URL"
                  value={custom_field_1_value}
                  textarea={true}
                  onChange={(val) =>
                    updateCustomField("custom_field_1_value", val)
                  }
                />
              </div>
            )}

            <StepActions
              onSaveAndExit={isNew ? undefined : () => handleFormSubmit(true)}
              onPrevious={() => changeStep("date")}
              onPrimary={() => changeStep("tickets")}
              primaryDisabled={attributes.location === "zoom" && !zoomAccount}
            />
          </div>
        </>
      )}
      {showZoomModal && (
        <ModalShell
          title="Connect Zoom"
          onClose={() => setShowZoomModal(false)}
        >
          <ConnectServiceModalContent
            service="zoom"
            confirmed={zoomConfirmed}
            setConfirmed={setZoomConfirmed}
            onConnect={() => {
            getZoomConnectURL();
            }}
            closeModal={() => setShowZoomModal(false)}
          />
        </ModalShell>
      )}
    </div>
  );
};

export default VenueStep;
