import { useMemo } from "react";
import { filterAllowance } from "../../../utilities/planLimits";

export const useFilterLimits = (settings, filtersList) => useMemo(
  () => filterAllowance(settings?.current_plan, filtersList),
  [settings?.current_plan, filtersList],
);
