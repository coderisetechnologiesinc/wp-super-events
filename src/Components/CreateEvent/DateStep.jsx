import { CalendarIcon } from "../../assets/icons";
import StepActions from "./StepActions";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "react-router-dom";
import CalendarInline from "../Controls/CalendarInline";
import NewSelectControl from "../Controls/NewSelectControl";
import NewTimeInputControl from "../Controls/NewTimeInputControl";

import moment from "moment-timezone";
import { timezonesList } from "../../utilities/timezones";
import RadioGroup from "../Controls/RadioGroup";
import NewRecurringControl from "../Controls/NewRecurringControl";
import NewEndDateControl from "./NewEndDateControl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DateStep = ({
  attributes,
  setAttributes,
  settings,
  changeStep,
  isOccurrence,
  isNew,
  handleFormSubmit,
  isOnboarding,
}) => {
  const navigate = useNavigate();
  const { startTime, duration, timezone, recurrence } =
    attributes.meeting || {};

  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [userTimezone, setUserTimezone] = useState(null);
  const [internalEndTime, setInternalEndTime] = useState(null);
  const [hasInvalidDuration, setHasInvalidDuration] = useState(false);
  const [hasInvalidStartTime, setHasInvalidStartTime] = useState(false);
  /* ---------- moments ---------- */

  const startMoment = startTime ? moment(startTime) : moment();
  const endMoment = internalEndTime
    ? moment(internalEndTime)
    : startMoment.clone().add(duration ?? 0, "minutes");

  /* ---------- timezone options ---------- */

  const timezones = Object.keys(timezonesList).map((zone) => ({
    value: zone,
    label: timezonesList[zone],
  }));

  /* ---------- timezone init from settings ---------- */
  const [searchParams] = useSearchParams();
  const timezonFromOnboarding = searchParams.get("timezone");
  const getDefaultTimezoneFromSettings = () => {
    const hardDefault = "America/Los_Angeles";
    if (timezonFromOnboarding && timezonFromOnboarding.length > 0) {
      return timezonFromOnboarding;
    }
    const guessed = moment.tz.guess();

    const raw = settings?.settings?.admin_dashboard;

    if (!raw) {
      return moment.tz.zone(guessed) ? guessed : hardDefault;
    }

    try {
      const parsed = typeof raw === "string" ? JSON.parse(raw.trim()) : raw;

      const savedTz = parsed?.default_timezone;

      if (savedTz && moment.tz.zone(savedTz)) {
        return savedTz;
      }

      return moment.tz.zone(guessed) ? guessed : hardDefault;
    } catch (err) {
      console.warn("Invalid admin_dashboard JSON:", err);

      return moment.tz.zone(guessed) ? guessed : hardDefault;
    }
  };

  useEffect(() => {
    if (!settings) return;

    if (timezone) {
      setUserTimezone(timezone);
      return;
    }

    const tzFromSettings = getDefaultTimezoneFromSettings();

    setUserTimezone(tzFromSettings);

    setAttributes({
      meeting: {
        timezone: tzFromSettings,
      },
    });
  }, [settings?.settings]);

  useEffect(() => {
    if (!userTimezone) return;
    if (userTimezone === timezone) return;

    setAttributes({
      meeting: {
        timezone: userTimezone,
      },
    });
  }, [userTimezone]);

  useEffect(() => {
    if (startTime && duration !== undefined) {
      setInternalEndTime(
        moment(startTime)
          .add(duration, "minutes")
          .format("YYYY-MM-DDTHH:mm:ss"),
      );
    }
  }, [startTime, duration]);

  /* ---------- handlers ---------- */

  const handleDateChange = (selectedDate) => {
    if (!selectedDate) return;

    const newDate = moment(selectedDate);

    if (newDate.isSame(startMoment, "day")) return;

    const updated = newDate
      .hour(startMoment.hour())
      .minute(startMoment.minute());

    const timezone = attributes?.meeting?.timezone;
    const now = moment().tz(timezone);
    const userSelection = moment.tz(
      updated.format("YYYY-MM-DD HH:mm"),
      timezone,
    );
    setHasInvalidStartTime(userSelection.isBefore(now));

    setAttributes({
      meeting: {
        startTime: updated.format("YYYY-MM-DDTHH:mm:ss"),
      },
    });
  };

  const handleStartTimeChange = (newMoment) => {
    if (!newMoment) return;

    const updated = startMoment
      .clone()
      .hour(newMoment.hour())
      .minute(newMoment.minute())
      .second(0);
    const timezone = attributes?.meeting?.timezone;

    const userSelection = moment.tz(
      updated.format("YYYY-MM-DD HH:mm"),
      timezone,
    );

    const now = moment().tz(timezone);

    setHasInvalidStartTime(userSelection.isBefore(now));

    if (!updated.isSame(startMoment)) {
      setAttributes({
        meeting: {
          startTime: updated.format("YYYY-MM-DDTHH:mm:ss"),
        },
      });
    }
  };

  const validateStartTime = () => {
    const updated = startMoment.clone();
    const timezone = attributes?.meeting?.timezone;

    const userSelection = moment.tz(
      updated.format("YYYY-MM-DD HH:mm"),
      timezone,
    );
    const now = moment().tz(timezone);

    const isInPast = userSelection.isBefore(now);

    if (isInPast) {
      setHasInvalidStartTime(true);
      toast.warning("Date and time must be in the future.");
      return;
    }

    setHasInvalidStartTime(false);
    changeStep("venue");
  };

  const handleEndTimeChange = (newEndMoment) => {
    if (!newEndMoment) return;

    const fixedEndMoment = startMoment
      .clone()
      .hour(newEndMoment.hour())
      .minute(newEndMoment.minute())
      .second(0);

    setInternalEndTime(fixedEndMoment.format("YYYY-MM-DDTHH:mm:ss"));

    const newDuration = fixedEndMoment.diff(startMoment, "minutes");

    setHasInvalidDuration(newDuration <= 0);

    if (newDuration !== duration) {
      setAttributes({
        meeting: {
          duration: Math.max(0, newDuration),
        },
      });
    }
  };

  const handleTimezoneChange = (zone) => {
    const tz = typeof zone === "string" ? zone : zone?.value;

    if (!tz) return;

    setUserTimezone(tz);
  };

  const handleRecurrenceModeChange = (mode) => {
    setAttributes({
      meeting: {
        recurrence:
          mode === "recurring"
            ? {
                type: 1,
                repeat_interval: 1,
                end_times: 1,
              }
            : null,
      },
    });
  };

  /* ---------- time format ---------- */

  useEffect(() => {
    setTimeFormat(
      settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a",
    );
  }, [settings]);

  /* ---------- initial start ---------- */

  useEffect(() => {
    if (!startTime) {
      setAttributes({
        meeting: {
          startTime: moment().toISOString(),
          duration: duration ?? 60,
        },
      });
    }
  }, []);
  const isRecurringAvailable =
    settings?.current_plan?.features?.find((f) => f.title === "Recurring")
      ?.value === "true" || false;

  return (
    <div className="step__wrapper">
      {/* Header */}
      <div className="step__header">
        <CalendarIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Date and time</h4>
          <p className="step__description">
            Select the event's date, time, and frequency.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="step__content_date">
        <div className="flex flex-col gap-y-[24px]">
          {/* Calendar */}
          <div className="step__content_block">
            <span className="step__content_title">Calendar</span>
            <CalendarInline
              value={startMoment.toDate()}
              onChange={handleDateChange}
            />
          </div>

          {/* Timezone */}
          {/* <div className="step__content_block">
            <span className="step__content_title">Timezone</span>

            <NewSelectControl
              helpText="Select timezone"
              value={timezone || ""}
              options={timezones}
              onChange={handleTimezoneChange}
              iconRight={<ChevronDownIcon />}
            />
          </div> */}
        </div>

        {/* Time */}
        <div className="step__content_block">
          <span className="step__content_title">Time</span>

          <div className="step__time_control">
            <NewTimeInputControl
              time={startMoment}
              timeFormat={timeFormat}
              onChange={handleStartTimeChange}
              align="start"
              validationError={hasInvalidDuration || hasInvalidStartTime}
            />

            <div className="self-center">to</div>

            <NewTimeInputControl
              time={endMoment}
              timeFormat={timeFormat}
              onChange={handleEndTimeChange}
              align="end"
              validationError={hasInvalidDuration}
            />
          </div>
          {hasInvalidStartTime && (
            <div className="step__description">
              Start time cannot be in the past
            </div>
          )}
          {hasInvalidDuration && (
            <div className="step__description">
              End time must be after start time
            </div>
          )}

          {/* Recurrence */}
          {!isOccurrence && !isOnboarding && (
            <div className="mt-8">
              <span className="step__content_title">Recurrence</span>

              <RadioGroup
                name="recurrence-mode"
                value={recurrence ? "recurring" : "one-time"}
                options={[
                  { value: "one-time", label: "One-time" },
                  { value: "recurring", label: "Recurring" },
                ]}
                onChange={handleRecurrenceModeChange}
                disabled={!isRecurringAvailable}
              />

              {recurrence && isRecurringAvailable && (
                <NewRecurringControl
                  recurrence={recurrence}
                  onChange={(updatedRecurrence) => {
                    setAttributes({
                      meeting: {
                        recurrence: updatedRecurrence,
                      },
                    });
                  }}
                  meetingType="offline"
                />
              )}

              {recurrence && isRecurringAvailable && (
                <div className="my-8">
                  <NewEndDateControl
                    recurrence={recurrence}
                    onChange={(updatedRecurrence) =>
                      setAttributes({
                        meeting: {
                          recurrence: updatedRecurrence,
                        },
                      })
                    }
                    meetingType="offline"
                  />
                </div>
              )}
            </div>
          )}

          <StepActions
            className=""
            onSaveAndExit={isNew ? undefined : () => handleFormSubmit(true)}
            onPrevious={() => changeStep("branding")}
            onPrimary={() => validateStartTime()}
            primaryDisabled={hasInvalidStartTime}
          />
        </div>
      </div>
    </div>
  );
};

export default DateStep;
