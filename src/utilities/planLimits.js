export const PLAN_LIMITS = [
  ["filters_limit", "Filters limit"],
  ["members_limit", "Members limit"],
  ["offline_events_limit", "In-person events limit"],
  ["offline_recurring_events_limit", "Recurring in-person events limit"],
  ["recurring_events_limit", "Recurring online events limit"],
  ["events_limit", "Online events limit"],
];
export const planLimit = (plan, key, fallback = null) => {
  const value = plan?.[key];
  if (value == null || value === "" || typeof value === "boolean") return fallback;
  const number = Number(value);
  return Number.isInteger(number) && number >= -1 ? number : fallback;
};
export const limitReached = (count, limit) => limit != null && limit !== -1 && count >= limit;
export const filterAllowance = (plan, filters = {}) => {
  const maxFiltersNumber = planLimit(plan, "filters_limit", 25);
  const membersLimit = planLimit(plan, "members_limit", Number(plan?.id) === 1 ? 0 : -1);
  const totalFilters = ["locations", "languages", "categories", "members"].reduce(
    (count, type) => count + (Array.isArray(filters[type]) ? filters[type].length : 0), 0,
  );
  const isLimitReached = limitReached(totalFilters, maxFiltersNumber);
  const isMembersLimitReached = limitReached(filters.members?.length || 0, membersLimit);
  const filterCategories = ["Locations", "Languages", "Categories", ...(membersLimit !== 0 ? ["Members"] : [])];
  return { maxFiltersNumber, membersLimit, totalFilters, isLimitReached, isMembersLimitReached, filterCategories };
};
export const recurringAllowed = (plan, location) => {
  const limit = planLimit(plan, location === "zoom" ? "recurring_events_limit" : "offline_recurring_events_limit");
  if (limit != null) return limit !== 0;
  return !!plan?.features?.some((feature) =>
    ["Recurring", "Recurring Events"].includes(feature.title) && String(feature.value) === "true",
  );
};
export const multiTicketsAllowed = (plan) => plan?.multi_tickets == null
  ? Number(plan?.id) !== 1
  : [true, "true", 1, "1"].includes(plan.multi_tickets);
