import React, { Fragment, useState } from "react";
import moment from "moment";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import NewSelectControl from "../Controls/NewSelectControl";
import NewButtonGroup from "../Controls/NewButtonGroup";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const NewEndDateControl = ({
  recurrence,
  onChange,
  meetingType = "offline",
}) => {
  const { end_times, end_date_time } = recurrence;

  // "date" | "number"
  const [mode, setMode] = useState(end_times ? "number" : "date");

  const isZoom = meetingType === "zoom";
  const maxOccurrences = isZoom ? 60 : 365;
  const maxMonths = 12;

  const minDate = moment().toDate();
  const maxDate = isZoom ? null : moment().add(maxMonths, "months").toDate();

  const endDate = end_date_time
    ? moment(end_date_time).toDate()
    : moment().toDate();

  /* -----------------------------
     Options
  ----------------------------- */
  const numberOptions = Array.from({ length: maxOccurrences }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  /* -----------------------------
     Handlers
  ----------------------------- */
  const handleModeChange = (val) => {
    setMode(val);
  };

  const handleEndTimesChange = (val) => {
    let num = Number(val);
    if (isZoom && num > 60) num = 60;

    onChange({
      ...recurrence,
      end_times: num,
      end_date_time: undefined,
    });
  };

  const handleEndDateChange = (val) => {
    let dateVal = val;

    if (!isZoom && maxDate && moment(val).isAfter(maxDate)) {
      dateVal = maxDate;
    }

    onChange({
      ...recurrence,
      end_date_time: moment(dateVal).format("YYYY-MM-DDTHH:mm:ss[Z]"),
      end_times: undefined,
    });
  };

  return (
    <div className="step__content_block">
      <span className="step__content_title">Recurrence ends</span>

      {/* Tabs */}
      <NewButtonGroup
        buttons={["On a date", "After occurrences"]}
        active={mode === "date" ? "On a date" : "After occurrences"}
        onChange={(val) =>
          handleModeChange(val === "On a date" ? "date" : "number")
        }
      />

      {/* Date picker */}
      <div className="mt-[20px]">
        {mode === "date" && (
          <Fragment>
            <span className="step__content_title">Select end date</span>
            <NewDatePickerControl
              mode="single"
              value={endDate}
              onChange={handleEndDateChange}
              label="Select end date"
              fullWidth
              minDate={minDate}
              maxDate={maxDate}
            />
          </Fragment>
        )}

        {/* Occurrences selector */}
        <div className="step__content_block">
          {mode === "number" && (
            <Fragment>
              <span className="step__content_title">Select end date</span>
              <NewSelectControl
                // label="Occurrences"
                value={end_times || ""}
                options={numberOptions}
                helpText={
                  isZoom
                    ? "Max 60 occurrences for Zoom meetings"
                    : "Up to 12 months for in-person events"
                }
                onChange={handleEndTimesChange}
                iconRight={<ChevronDownIcon />}
                style={{ width: "100%" }}
              />
            </Fragment>
          )}

          {/* Zoom hint */}
          {isZoom && (
            <div className="text-xs text-gray-600 mt-2">
              Recurring meetings expire 365 days after the last occurrence. You
              can schedule up to 60 occurrences into the future.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEndDateControl;
