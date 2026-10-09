// Server data cache for the admin. Entries live in memory and in localStorage:
// every WordPress admin screen is its own page load, so a cache that did not
// outlive the page — or the tab — meant settings, filters and accounts were
// fetched again on every menu click and every time the admin was reopened.
// Everything still expires by TTL, a save still invalidates what it touches,
// and the store is scoped to one site, user and plugin version through
// servvData.cacheScope, so several WordPress installs sharing a browser (a
// multisite network shares an origin) never read each other's data.
const STORAGE_VERSION = 2;
// A single oversized response must not cost the whole store its quota.
const MAX_STORED_VALUE = 128 * 1024;
const MAX_STORED_TOTAL = 1536 * 1024;
const entries = new Map();
const versions = new Map();
const listeners = new Set();
const MAX_ENTRIES = 200;
const clone = (value) =>
  value == null ? value : JSON.parse(JSON.stringify(value));
export const resourceVersion = (tag) => versions.get(tag) || 0;

// How long each kind of data may be served from the store. Lists stay short:
// they change as events are booked. The rest only changes through this admin,
// which invalidates on save, or through an integration return, which carries
// the marker read below.
const TTL = {
  settings: 1800000,
  filters: 1800000,
  billing: 1800000,
  accounts: 1800000,
};
export const resourceTtl = (resource) => TTL[resource] ?? 60000;

const dataStore = () => {
  try {
    return window.localStorage || null;
  } catch {
    // Browsers set to block site data throw on access alone.
    return null;
  }
};

// An integration return lands as a fresh page load whose data changed outside
// this browser, so the URL says which resources must not come from the store.
const refreshedTags = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("servv_refresh");
    if (!value) return [];

    params.delete("servv_refresh");
    const query = params.toString();
    window.history?.replaceState?.(
      null,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}${
        window.location.hash
      }`,
    );

    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
};

const storageKey = () =>
  `servv:cache:${STORAGE_VERSION}:${window.servvData?.cacheScope || "default"}`;

const forgetStore = () => {
  try {
    dataStore()?.removeItem(storageKey());
  } catch {
    /* unavailable */
  }
};

let hydrated = false;
const hydrate = () => {
  if (hydrated) return;
  hydrated = true;
  if (!adminCacheEnabled()) return;

  const store = dataStore();
  if (!store) return;

  try {
    const stored = JSON.parse(store.getItem(storageKey()) || "null");
    if (stored?.version !== STORAGE_VERSION) return;

    const now = Date.now();
    const stale = refreshedTags();
    Object.entries(stored.entries || {}).forEach(([key, entry]) => {
      if (!entry || !(entry.expiresAt > now)) return;
      if (entry.tags?.some((tag) => stale.includes(tag))) return;
      entries.set(key, {
        tags: entry.tags || [],
        expiresAt: entry.expiresAt,
        value: entry.value,
      });
    });
  } catch {
    forgetStore();
  }
};

let persistQueued = false;
const persist = () => {
  if (persistQueued || !adminCacheEnabled() || !dataStore()) return;
  persistQueued = true;
  // Written once per task: a page load fills many entries in a row.
  queueMicrotask(() => {
    persistQueued = false;
    const now = Date.now();
    const payload = { version: STORAGE_VERSION, entries: {} };
    let total = 0;

    for (const [key, entry] of entries) {
      // An entry still in flight has no expiry yet; one that has an expiry has
      // a value, even while its promise reference is being cleaned up.
      if (!(entry.expiresAt > now)) continue;
      const size = JSON.stringify(entry.value)?.length || 0;
      if (!size || size > MAX_STORED_VALUE) continue;
      total += size;
      if (total > MAX_STORED_TOTAL) break;
      payload.entries[key] = {
        tags: entry.tags,
        expiresAt: entry.expiresAt,
        value: entry.value,
      };
    }

    try {
      dataStore()?.setItem(storageKey(), JSON.stringify(payload));
    } catch {
      // Out of quota, or storage turned off mid-session.
      forgetStore();
    }
  });
};
const revision = (tags) => tags.map((tag) => versions.get(tag) || 0).join(":");
let pendingTags = new Set();
let notificationPending = false;

export const subscribeToInvalidation = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const invalidateRequests = (tags) => {
  if (!tags.length) return;
  hydrate();
  tags.forEach((tag) => {
    versions.set(tag, (versions.get(tag) || 0) + 1);
    pendingTags.add(tag);
  });
  for (const [key, entry] of entries) {
    if (entry.tags.some((tag) => tags.includes(tag))) entries.delete(key);
  }
  persist();
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
  hydrate();
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
      persist();
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
