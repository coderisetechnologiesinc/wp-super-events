const FEW_SEATS_THRESHOLD = 5;

const PROVIDER_LABELS = {
  zoom: "Virtual",
  offline: "In-person",
};

const hasTimezoneDesignator = (value) => /(?:Z|[+-]\d{2}:?\d{2})$/.test(value);

export function toInstant(startTime) {
  if (!startTime) return null;

  const raw = hasTimezoneDesignator(startTime) ? startTime : `${startTime}Z`;
  const date = new Date(raw);

  return Number.isNaN(date.getTime()) ? null : date;
}

export function availabilityOf({ seatsRemaining, isRecording }) {
  if (isRecording) return "recording";
  if (typeof seatsRemaining !== "number") return "available";
  if (seatsRemaining <= 0) return "sold-out";
  if (seatsRemaining <= FEW_SEATS_THRESHOLD) return "few-left";

  return "available";
}

export function normalizeEvent(raw) {
  if (!raw) return null;

  const product = raw.product || {};
  const seatsRemaining =
    typeof product.current_quantity === "number" ? product.current_quantity : null;
  const isRecording = raw.type === "recording";
  const price = typeof product.price === "number" ? product.price : Number(product.price) || 0;

  return {
    id: raw.id,
    key: `${raw.id}:${raw.occurrence_id ?? ""}`,
    occurrenceId: raw.occurrence_id ?? null,
    isRecurring: !!raw.occurrence_id,
    title: raw.topic || "",
    description: raw.description || "",
    agenda: Array.isArray(raw.agenda) ? raw.agenda : [],
    type: raw.type || "",
    provider: raw.provider || "",
    formatLabel: PROVIDER_LABELS[raw.provider] || "",
    isLiveShopping: !!raw.is_live_shopping,
    isRecording,

    startsAt: toInstant(raw.start_time),
    endsAt: toInstant(raw.end_time),
    timezone: raw.timezone || "UTC",
    duration: Number(raw.duration) || 0,
    separatorLabel: raw.separator_label || "",

    categoryId: raw.category_id ?? null,
    languageId: raw.language_id ?? null,
    locationId: raw.location_id ?? null,
    memberIds: raw.members_id ?? null,

    productId: product.post_id ?? product.product_id ?? null,
    postUrl: product.post_url || "",
    parentProductId: product.post_id ?? product.parent_product_id ?? null,
    variantId: product.variant_id ?? null,
    price,
    isFree: price === 0,
    image: product.image_url || product.image_src || raw.image_url || "",
    seatsRemaining,
    availability: availabilityOf({ seatsRemaining, isRecording }),

    bookingLink:
      raw.custom_field_1_name === "partner" ? raw.custom_field_1_value || "" : "",
    productLocale:
      raw.custom_field_1_name === "product_locale" ? raw.custom_field_1_value || "" : "",
    raw,
  };
}

export const normalizeEvents = (list) =>
  (Array.isArray(list) ? list : []).map(normalizeEvent).filter(Boolean);

export function parseStyleSettings(raw) {
  let value = raw;

  for (let attempt = 0; attempt < 2 && typeof value === "string"; attempt += 1) {
    try {
      value = JSON.parse(value || "{}");
    } catch {
      return {};
    }
  }

  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

export function normalizeShopSettings(response) {
  return {
    raw: response || {},
    style: parseStyleSettings(response?.widget_style_settings),
    presentation: response?.widget_view_mode || "plain",
  };
}
