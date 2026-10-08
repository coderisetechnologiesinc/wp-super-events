// Shallow-merges a patch into the event attributes, one level deep: plain
// objects are merged with what is already there, while arrays and primitives
// replace it. Pass the result to a state setter's updater form.
export const mergeAttributesPatch = (prev, patch) => {
  const next = { ...prev };

  Object.keys(patch).forEach((key) => {
    const value = patch[key];
    const isPlainObject =
      typeof value === "object" && value !== null && !Array.isArray(value);

    next[key] = isPlainObject ? { ...(prev[key] || {}), ...value } : value;
  });

  return next;
};
