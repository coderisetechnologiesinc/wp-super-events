import { useEffect, useState } from "react";
import moment from "moment";

// The range switcher both event lists carry. Past is one of the four, not a
// second control: all of them answer "which slice of time", and only this one
// sits on the other side of now.
export const TIME_RANGES = {
  upcoming: "upcoming",
  today: "today",
  week: "week",
  past: "past",
};

export const RANGES = [
  { label: "Upcoming", value: TIME_RANGES.upcoming },
  { label: "Today", value: TIME_RANGES.today },
  { label: "This week", value: TIME_RANGES.week },
  { label: "Past", value: TIME_RANGES.past },
];

// `applyRangePreset` comes from the events hook: it sets the window and the
// past flag together, so one fetch goes out with both.
const useTimeRange = (applyRangePreset) => {
  const [timeRange, setTimeRange] = useState(TIME_RANGES.upcoming);

  // Also called by hand when a view that owned the range — the calendar — is
  // left, so the switcher and the list agree again.
  const applyCurrentRange = () => {
    const now = moment();

    if (timeRange === TIME_RANGES.past) {
      // No window: the endpoint's own past flag decides what comes back.
      applyRangePreset({ past: true });
    } else if (timeRange === TIME_RANGES.today) {
      applyRangePreset({
        startDate: now.clone().startOf("day"),
        endDate: now.clone().endOf("day"),
      });
    } else if (timeRange === TIME_RANGES.week) {
      applyRangePreset({
        startDate: now.clone().startOf("week"),
        endDate: now.clone().endOf("week"),
      });
    } else {
      applyRangePreset({ startDate: now });
    }
  };

  useEffect(() => {
    applyCurrentRange();
  }, [timeRange]);

  return { timeRange, setTimeRange, ranges: RANGES, applyCurrentRange };
};

export default useTimeRange;
