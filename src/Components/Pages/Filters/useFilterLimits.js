import { useMemo } from "react";

const BASE_CATEGORIES = ["Locations", "Languages", "Categories"];
const DEFAULT_FILTERS_LIMIT = 25;

// Which filter kinds the current plan exposes, and whether the store has hit
// its filter allowance.
//
// All three values are derived rather than held in state: the pages used to
// compute them in an effect that mutated the category array in place, so
// "Members" could go missing or appear several times depending on how many
// times the effect had run.
export const useFilterLimits = (settings, filtersList) => {
  const plan = settings?.current_plan;
  const maxFiltersNumber = plan?.filters_limit || DEFAULT_FILTERS_LIMIT;

  const totalFilters = useMemo(
    () =>
      Object.values(filtersList || {}).reduce(
        (total, arr) => total + (arr?.length || 0),
        0,
      ),
    [filtersList],
  );

  // Member filters are gated behind a paid plan (plan id 1 is the free tier).
  const filterCategories = useMemo(
    () => (!plan || plan.id !== 1 ? [...BASE_CATEGORIES, "Members"] : BASE_CATEGORIES),
    [plan],
  );

  return {
    maxFiltersNumber,
    isLimitReached: totalFilters >= maxFiltersNumber,
    filterCategories,
  };
};
