// Number inputs keep whatever the user typed, including the empty string left
// behind when the last character is deleted — coercing on every keystroke would
// snap the field back to 0 and make it impossible to clear. These helpers are
// the save-time boundary instead: an empty or unparsable field becomes 0 (or an
// explicit fallback), never "", NaN or null.
export const toNumber = (value, fallback = 0) => {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};
export const toInteger = (value, fallback = 0) =>
  Math.trunc(toNumber(value, fallback));
// Replaces only the keys the object already carries, so a setting the shop has
// never stored stays absent instead of being written as 0.
export const coerceNumbers = (source, coercions) => {
  if (!source || typeof source !== "object") return source;
  const next = { ...source };
  Object.entries(coercions).forEach(([key, coerce]) => {
    if (key in next) next[key] = coerce(next[key]);
  });
  return next;
};
