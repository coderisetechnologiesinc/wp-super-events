import axios from "./adminApi";

const wpGet = async (endpoint) => {
  try {
    const response = await axios.get(`/wp-json/servv-plugin/v1/${endpoint}`, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });

    if (response.status === 200) {
      return { data: response.data, error: null };
    }

    return { data: null, error: "Unexpected status" };
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    return { data: null, error: err.message };
  }
};

// Fetches a service's OAuth URL and hands the browser to the Shopify app, which
// completes the handshake and returns here. The connect path matches the API
// service name everywhere except gmail, whose app route is /mail/connect.
export const openServiceConnectURL = async (service, connectPath = service) => {
  const response = await axios(`/wp-json/servv-plugin/v1/${service}/url`, {
    method: "GET",
    headers: { "X-WP-Nonce": servvData.nonce },
    redirect: "manual",
  });

  if (response?.status !== 200) return;

  open(
    `${servvData.shopify_app}/${connectPath}/connect` +
      `?wordpress_url=${encodeURIComponent(response.data.auth_url)}` +
      `&wordpress_return_url=${encodeURIComponent(window.location.origin)}` +
      `&servv_nonce=${response.data.nonce}`,
    "_top",
  );
};

export const getZoomAccount = async () => {
  return wpGet("zoom/account");
};

export const getStripeAccount = async () => {
  return wpGet("stripe/account");
};

export const getGmailAccount = async () => {
  return wpGet("gmail/account");
};

export const disconnectGmailAccount = async () => {
  const response = await axios.delete("/wp-json/servv-plugin/v1/gmail/account", {
    headers: { "X-WP-Nonce": servvData.nonce },
  });
  return response;
};

export const getGmailConnectURL = async () => openServiceConnectURL("gmail", "mail");

export const getCalendarAccount = async () => {
  return wpGet("calendar/account");
};

export const getCalendarConnectURL = async () =>
  openServiceConnectURL("calendar");

export const getZoomConnectURL = async () => openServiceConnectURL("zoom");
