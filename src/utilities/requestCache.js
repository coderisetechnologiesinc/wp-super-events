// Session-only server data cache. No API responses are persisted to storage.
const entries = new Map();
const versions = new Map();
const listeners = new Set();
const MAX_ENTRIES = 200;
const clone = (value) =>
  value == null ? value : JSON.parse(JSON.stringify(value));
export const resourceVersion = (tag) => versions.get(tag) || 0;
const revision = (tags) => tags.map((tag) => versions.get(tag) || 0).join(":");
let pendingTags = new Set();
let notificationPending = false;

export const subscribeToInvalidation = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const invalidateRequests = (tags) => {
  if (!tags.length) return;
  tags.forEach((tag) => {
    versions.set(tag, (versions.get(tag) || 0) + 1);
    pendingTags.add(tag);
  });
  for (const [key, entry] of entries) {
    if (entry.tags.some((tag) => tags.includes(tag))) entries.delete(key);
  }
  if (notificationPending) return;
  notificationPending = true;
  queueMicrotask(() => {
    notificationPending = false;
    const changed = [...pendingTags];
    pendingTags = new Set();
    listeners.forEach((listener) => listener(changed));
  });
};

export const refreshExpiredRequests = () => {
  const tags = new Set();
  entries.forEach((entry) => {
    if (!entry.promise && entry.expiresAt <= Date.now()) {
      entry.tags.forEach((tag) => tags.add(tag));
    }
  });
  invalidateRequests([...tags]);
};

export const cachedRequest = async ({
  key,
  tags,
  ttl = 60000,
  load,
  isValid = () => true,
}) => {
  const existing = entries.get(key);
  if (existing?.promise) return clone(await existing.promise);
  if (existing && existing.expiresAt > Date.now()) return clone(existing.value);

  const token = revision(tags);
  const entry = { tags, expiresAt: 0 };
  const promise = (async () => {
    const value = await load();
    // A save completed while this read was in flight. Its old response must
    // reach neither the cache nor the UI; join/start a read of the new data.
    if (token !== revision(tags)) {
      return cachedRequest({ key, tags, ttl, load, isValid });
    }
    if (isValid(value)) {
      entry.value = clone(value);
      entry.expiresAt = Date.now() + ttl;
    } else if (entries.get(key) === entry) {
      entries.delete(key);
    }
    return value;
  })();
  entry.promise = promise;
  entries.set(key, entry);
  try {
    return clone(await promise);
  } catch (error) {
    if (entries.get(key) === entry) entries.delete(key);
    throw error;
  } finally {
    entry.promise = null;
    // Evict settled oldest requests, without breaking in-flight deduplication.
    for (const [oldKey, oldEntry] of entries) {
      if (entries.size <= MAX_ENTRIES) break;
      if (!oldEntry.promise) entries.delete(oldKey);
    }
  }
};

export const isSuccessfulData = (data) => !data?.error && !data?.errorCode;

// Only known data endpoints are cached. OAuth URLs, generated content,
// downloads, and unknown GET actions always go to the server.
export const requestResource = (path) => {
  const endpoint = path.split("/servv-plugin/v1/")[1]?.replace(/\/$/, "");
  if (!endpoint) return null;
  if (
    /^(events\/(offline|zoom)|event\/[^/]+(?:\/(occurrences|tickets|registrants)(?:\/[^/]+)?)?)$/.test(
      endpoint,
    )
  )
    return "events";
  if (
    /^filters\/(locations|languages|categories|members)(?:\/[^/]+)?$/.test(
      endpoint,
    )
  )
    return "filters";
  if (
    endpoint === "shop/info" ||
    endpoint === "shop/settings" ||
    endpoint === "n8n/settings"
  )
    return "settings";
  if (/^shop\/paymentplans(?:\/[^/]+)?$/.test(endpoint)) return "billing";
  if (
    /^(zoom|stripe|gmail|calendar)\/account$/.test(endpoint) ||
    endpoint === "mail/smtp/account" ||
    endpoint === "stripe/settings" ||
    endpoint === "stripe/account/disconnected"
  )
    return "accounts";
  if (endpoint.startsWith("analytics/")) return "analytics";
  if (/^bookings(?:\/.*)?$/.test(endpoint)) return "bookings";
  if (/^wordpress\/templates(?:\/[^/]+)?$/.test(endpoint)) return "emails";
  if (/^mail\/(sent|templates)(?:\/.*)?$/.test(endpoint)) return "emails";
  return null;
};

export const mutationResources = (path) => {
  const endpoint = path.split("/servv-plugin/v1/")[1] || "";
  if (/^(event|events)\//.test(endpoint)) {
    if (endpoint === "event/data/generate") return [];
    if (endpoint.includes("resend")) return ["emails"];
    return ["events", "bookings", "analytics"];
  }
  const resource = requestResource(path);
  if (resource === "filters") return ["filters", "events", "analytics"];
  if (resource === "settings" || resource === "billing")
    return ["settings", "billing", "events", "analytics", "filters"];
  if (resource === "accounts") return ["accounts", "settings", "events"];
  if (resource === "bookings") return ["bookings", "events", "analytics"];
  return resource ? [resource] : [];
};

export const adminCacheEnabled = () =>
  typeof window !== "undefined" &&
  Boolean(window.servvData?.nativeAdmin) &&
  window.servvData?.install_status === "ok";

export const canonicalRequestURL = (input) => {
  const url = new URL(input, window.location.href);
  url.hash = "";
  url.searchParams.sort();
  return url;
};
