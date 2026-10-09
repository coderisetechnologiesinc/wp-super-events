import apiFetch from "@wordpress/api-fetch";
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

export default async function adminApiFetch(options) {
  if (!adminCacheEnabled() || !options.path || options.parse === false)
    return apiFetch(options);
  const url = canonicalRequestURL(`/wp-json${options.path}`);
  const method = (options.method || "GET").toUpperCase();
  const resource = requestResource(url.pathname);
  if (method === "GET" && resource && !options.signal) {
    const response = await cachedRequest({
      key: `api:${window.servvData.nonce}:${url.href}`,
      tags: [resource],
      ttl: resourceTtl(resource),
      load: async () => ({
        data: JSON.stringify(await apiFetch(options)),
        status: 200,
        statusText: "OK",
        headers: {},
      }),
      isValid: ({ data, status }) =>
        status >= 200 &&
        status < 300 &&
        isSuccessfulData(typeof data === "string" ? JSON.parse(data) : data),
    });
    return typeof response.data === "string"
      ? JSON.parse(response.data)
      : response.data;
  }
  const data = await apiFetch(options);
  if (method !== "GET" && method !== "HEAD" && isSuccessfulData(data)) {
    invalidateRequests(mutationResources(url.pathname));
  }
  return data;
}
