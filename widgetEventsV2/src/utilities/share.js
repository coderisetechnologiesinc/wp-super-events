export const SHARE_TARGETS = ["facebook", "x", "linkedin", "whatsapp", "email"];

const ENDPOINTS = {
  facebook: "https://www.facebook.com/sharer/sharer.php",
  x: "https://twitter.com/intent/tweet",
  linkedin: "https://www.linkedin.com/shareArticle",
  whatsapp: "https://api.whatsapp.com/send",
  email: "mailto:",
};

const PARAMS = {
  facebook: ({ url, title, image }) => ({ u: url, title, picture: image }),
  x: ({ url, title }) => ({ url, text: title }),
  linkedin: ({ url, title }) => ({ url, mini: true, title }),
  whatsapp: ({ url, title }) => ({ text: [title, url].filter(Boolean).join(" ") }),
  email: ({ url, title }) => ({ subject: title, body: url }),
};

export function toQuery(params) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "" || value === false) continue;

    query.append(key, String(value));
  }

  return query.toString();
}

export function shareLink(target, { url, title = "", image = "" } = {}) {
  const endpoint = ENDPOINTS[target];

  if (!endpoint || !url) return "";

  const query = toQuery(PARAMS[target]({ url, title, image }));

  return query ? `${endpoint}?${query}` : endpoint;
}

export function eventProductUrl({ origin, handle, variantId, prefix = "" }) {
  if (!handle || !origin) return "";

  const path = prefix ? `/${String(prefix).replace(/^\/+|\/+$/g, "")}` : "";
  const variant = variantId ? `?variant=${variantId}` : "";

  return `${origin}${path}/products/${handle}${variant}`;
}
