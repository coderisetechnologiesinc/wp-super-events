const categories = [
  { label: "Waiting list", pattern: /wait[\s_-]*(?:ing[\s_-]*)?list/i },
  { label: "Payments", pattern: /payment|refund|invoice|receipt|billing/i },
  { label: "Reminders", pattern: /remind/i },
  { label: "Event updates", pattern: /cancel|reschedul|updat|chang|postpon|recording|follow[\s_-]*up|finished|completed/i },
  { label: "Bookings", pattern: /book|registr|confirm|ticket|reservation/i },
];
const order = ["Bookings", "Reminders", "Event updates", "Payments", "Waiting list", "Other"];

export function emailTemplateCategory(template) {
  const category = typeof template.category === "string" ? template.category : template.category?.name;
  if (typeof category === "string" && category.trim()) return category.trim();
  const name = [template.description, template.name, template.type].filter((value) => typeof value === "string").join(" ");
  return categories.find(({ pattern }) => pattern.test(name))?.label || "Other";
}

export function groupEmailTemplates(templates) {
  const groups = new Map();
  for (const template of templates) {
    const label = emailTemplateCategory(template);
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(template);
  }
  const rank = (label) => label === "Other" ? Number.MAX_SAFE_INTEGER : order.includes(label) ? order.indexOf(label) : order.length;
  return [...groups].sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([label, items]) => ({ label, templates: [...items].sort((a, b) => (a.description || a.name || "").localeCompare(b.description || b.name || "")) }));
}
