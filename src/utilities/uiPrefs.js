// Per-browser view preferences. These never leave the admin's own machine —
// they decide how a list is drawn, not what it contains, so there is nothing
// to sync to the shop.
const PREFIX = "servvUi:";

export const readPref = (key, fallback) => {
  try {
    const stored = window.localStorage.getItem(PREFIX + key);
    return stored === null ? fallback : stored;
  } catch {
    // Private mode, or storage blocked by the browser.
    return fallback;
  }
};

export const writePref = (key, value) => {
  try {
    window.localStorage.setItem(PREFIX + key, value);
  } catch {
    /* nothing to do — the preference simply will not survive the reload */
  }
};

// Reads a pref that only accepts a known set of values, so a stale or hand
// edited entry cannot put a list into a view that no longer exists.
export const readEnumPref = (key, allowed, fallback) => {
  const stored = readPref(key, fallback);
  return allowed.includes(stored) ? stored : fallback;
};
