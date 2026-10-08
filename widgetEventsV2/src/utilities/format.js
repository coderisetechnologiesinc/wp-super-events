const formatterCache = new Map();

const dateTimeFormatter = (locale, options) => {
  const key = `${locale}|${JSON.stringify(options)}`;

  if (!formatterCache.has(key)) {
    formatterCache.set(key, new Intl.DateTimeFormat(locale, options));
  }

  return formatterCache.get(key);
};

export function formatDate(date, { locale = "en", timeZone } = {}) {
  if (!date) return "";

  return dateTimeFormatter(locale, {
    timeZone,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

export function formatTime(date, { locale = "en", timeZone, hour12 = true } = {}) {
  if (!date) return "";

  return dateTimeFormatter(locale, {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12,
  }).format(date);
}

const zoneName = (date, locale, timeZone, timeZoneName) => {
  const parts = dateTimeFormatter(locale, {
    timeZone,
    hour: "numeric",
    timeZoneName,
  }).formatToParts(date);

  return parts.find((part) => part.type === "timeZoneName")?.value || "";
};

const isOffsetName = (value) => !value || /^(GMT|UTC)[+\-\u2212]/.test(value);

const initialsOf = (name) => {
  const words = name.split(/\s+/).filter(Boolean);
  const kept = name.includes("European") ? words.filter((word) => word !== "Standard") : words;

  return kept
    .map((word) => (/^[A-Z]/.test(word) ? word[0] : ""))
    .join("");
};

export function formatTimeZone(date, { locale = "en", timeZone } = {}) {
  if (!date || !timeZone) return "";

  const short = zoneName(date, locale, timeZone, "short");

  if (!isOffsetName(short)) return short;

  const long = zoneName(date, "en", timeZone, "long");

  if (isOffsetName(long)) return short;

  const initials = initialsOf(long);

  return initials.length > 1 ? initials : short;
}

export function formatDuration(minutes, { hourLabel = "h", minuteLabel = "m" } = {}) {
  const total = Number(minutes) || 0;

  if (total <= 0) return "";

  const hours = Math.floor(total / 60);
  const rest = total % 60;

  return [hours ? `${hours}${hourLabel}` : "", rest ? `${rest}${minuteLabel}` : ""]
    .filter(Boolean)
    .join(" ");
}

export function formatPrice(amount, { locale = "en", currency = "USD", freeLabel = "Free" } = {}) {
  if (!amount) return freeLabel;

  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  } catch {
    return `${amount}`;
  }
}

export function truncateWords(text, limit) {
  if (!text || !limit) return text || "";

  const words = String(text).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean);

  if (words.length <= limit) return words.join(" ");

  return `${words.slice(0, limit).join(" ")}…`;
}

export function formatAvailability({ availability, seatsRemaining } = {}, t) {
  if (availability === "sold-out") {
    return t("onProductWidget.eventSoldOut", { fallback: "Sold out" });
  }

  if (typeof seatsRemaining !== "number") return "";

  if (availability === "few-left") {
    return t("onProductWidget.remainingBookingsLabel", {
      count: seatsRemaining,
      fallback: `${seatsRemaining} left`,
    });
  }

  return `${seatsRemaining} ${t("mainWidget.availableQuantitySuffix", { fallback: "left" })}`;
}

export function dayKey(date, { timeZone } = {}) {
  if (!date) return "";

  return dateTimeFormatter("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function formatDayHeading(date, { locale = "en", timeZone } = {}) {
  if (!date) return "";

  return dateTimeFormatter(locale, {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}
