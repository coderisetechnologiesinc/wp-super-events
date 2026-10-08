import { useState } from "react";
import { readEnumPref, writePref } from "../../../utilities/uiPrefs";

// The three ways a list of events can be drawn, and where its date filters
// live. Both are per-browser view preferences, kept per page — the reference's
// popover says "Affects this page only" — so the dashboard and the events list
// can be set up differently.
export const VIEWS = ["grid", "rows", "rail", "calendar"];
export const PLACEMENTS = ["toolbar", "filters"];

const VIEW_OPTIONS = [
  {
    value: "grid",
    label: "Card grid",
    hint: "Cover image, date and status on a card.",
  },
  {
    value: "rows",
    label: "Floating rows",
    hint: "Aligned columns, no rules — rows lift on hover.",
  },
  {
    value: "rail",
    label: "Date rail",
    hint: "Grouped by month, hung off a date tile.",
  },
  {
    value: "calendar",
    label: "Calendar",
    hint: "A month, week or day; the view picks its own range.",
  },
];

const PLACEMENT_OPTIONS = [
  {
    value: "toolbar",
    label: "In the toolbar",
    hint: "Always visible, above the list.",
  },
  {
    value: "filters",
    label: "In the Filters panel",
    hint: "Keeps the toolbar short; opens with the drawer.",
  },
];

const useDisplayOptions = (page, { defaultView = "grid" } = {}) => {
  const viewKey = `${page}:view`;
  const placementKey = `${page}:dateFilters`;

  const [view, setView] = useState(() =>
    readEnumPref(viewKey, VIEWS, defaultView),
  );
  const [datePlacement, setDatePlacement] = useState(() =>
    readEnumPref(placementKey, PLACEMENTS, "toolbar"),
  );

  const groups = [
    {
      key: "view",
      title: t("List view"),
      note: t("How events are laid out. Affects this page only."),
      value: view,
      onChange: (next) => {
        setView(next);
        writePref(viewKey, next);
      },
      options: VIEW_OPTIONS.map((option) => ({
        ...option,
        label: t(option.label),
        hint: t(option.hint),
      })),
    },
    {
      key: "dates",
      title: t("Date filters"),
      note: t("Where the range switcher and the calendar are shown."),
      value: datePlacement,
      onChange: (next) => {
        setDatePlacement(next);
        writePref(placementKey, next);
      },
      options: PLACEMENT_OPTIONS.map((option) => ({
        ...option,
        label: t(option.label),
        hint: t(option.hint),
      })),
    },
  ];

  return { view, datePlacement, groups };
};

export default useDisplayOptions;
