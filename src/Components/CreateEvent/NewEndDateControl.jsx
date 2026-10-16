import React, { Fragment, useState } from "react";
import moment from "moment";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import NewButtonGroup from "../Controls/NewButtonGroup";
import { toInteger } from "../../utilities/numbers";
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
     Handlers
  ----------------------------- */
  const handleModeChange = (val) => {
    setMode(val);
  };

  // The field stays clearable, so an empty box is kept as typed; anything else
  // is a whole count within the range this event type allows.
  const handleEndTimesChange = (val) => {
    onChange({
      ...recurrence,
      end_times:
        val === ""
          ? ""
          : Math.min(Math.max(toInteger(val) || 1, 1), maxOccurrences),
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

        {/* Occurrences */}
        <div className="step__content_block">
          {mode === "number" && (
            <Fragment>
              <span className="step__content_title">Number of occurrences</span>
              <NewInputFieldControl
                type="number"
                width="100%"
                value={end_times ?? ""}
                minValue={1}
                maxValue={maxOccurrences}
                placeholder={`1 – ${maxOccurrences}`}
                onChange={handleEndTimesChange}
              />
              {/* Zoom says the same in its standing note below. */}
              {!isZoom && (
                <div className="text-xs text-gray-600 mt-2">
                  {`Up to ${maxOccurrences} occurrences, within ${maxMonths} months, for in-person events`}
                </div>
              )}
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
