// Column visibility for the configurable tables (events, bookings). Only the
// visibility map is persisted, not the labels, so it stays small and survives
// relabelling or translation; a column added later falls back to its default.
export const loadHeadings = (storageKey, defaultHeadings) => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return defaultHeadings;

    const savedMap = JSON.parse(saved); // { [value]: boolean }
    return defaultHeadings.map((h) =>
      h.value in savedMap ? { ...h, visible: savedMap[h.value] } : h,
    );
  } catch {
    return defaultHeadings;
  }
};

export const saveHeadings = (storageKey, updated) => {
  try {
    const savedMap = Object.fromEntries(
      updated.map((h) => [h.value, h.visible]),
    );
    localStorage.setItem(storageKey, JSON.stringify(savedMap));
  } catch {}
};
