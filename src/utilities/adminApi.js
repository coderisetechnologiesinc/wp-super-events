import axios from "axios";
import {
  adminCacheEnabled,
  cachedRequest,
  canonicalRequestURL,
  invalidateRequests,
  isSuccessfulData,
  mutationResources,
  requestResource,
  resourceTtl,
} from "./requestCache";

const api = axios.create();
const transport = axios.getAdapter(api.defaults.adapter);
api.defaults.adapter = async (config) => {
  const url = canonicalRequestURL(api.getUri(config));
  const sameOrigin = url.origin === window.location.origin;
  const enabled = adminCacheEnabled() && sameOrigin;
  const method = (config.method || "get").toLowerCase();
  const resource = enabled ? requestResource(url.pathname) : null;
  const load = async () => {
    const response = await transport(config);
    // Keep transport metadata out of the JSON cache. Axios parses the raw body
    // separately for each consumer, so callers may safely normalize/edit data.
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers.toJSON?.() || response.headers,
    };
  };

  if (
    method === "get" &&
    resource &&
    !config.signal &&
    !config.cancelToken &&
    !config.responseType
  ) {
    const nonce =
      config.headers.get?.("X-WP-Nonce") || window.servvData?.nonce || "";
    const response = await cachedRequest({
      key: `api:${nonce}:${url.href}`,
      tags: [resource],
      ttl: resourceTtl(resource),
      load,
      isValid: ({ data, status }) => {
        let parsed = data;
        try {
          if (typeof data === "string") parsed = JSON.parse(data);
        } catch {
          return false;
        }
        return status >= 200 && status < 300 && isSuccessfulData(parsed);
      },
    });
    return { ...response, config };
  }

  const response = await transport(config);
  if (
    enabled &&
    method !== "get" &&
    method !== "head" &&
    response.status >= 200 &&
    response.status < 300
  ) {
    let data = response.data;
    try {
      if (typeof data === "string") data = JSON.parse(data);
    } catch {
      /* empty responses are valid */
    }
    if (isSuccessfulData(data))
      invalidateRequests(mutationResources(url.pathname));
  }
  // Stripe's legacy confirm endpoint completes a connection via GET.
  if (
    enabled &&
    method === "get" &&
    url.pathname.endsWith("/stripe/confirm") &&
    response.status >= 200 &&
    response.status < 300
  ) {
    invalidateRequests(["accounts", "settings", "events"]);
  }
  return response;
};

export default api;
