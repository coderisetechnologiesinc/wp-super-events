import axios from "./adminApi";

export const getStripeSettings = async (authToken) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/settings",
      headers: { "X-WP-Nonce": authToken },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe settings:", error);
    return null;
  }
};

export const getStripeAccount = async (authToken) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/account",
      headers: { "X-WP-Nonce": authToken },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe account:", error);
    return null;
  }
};

export const getStripeConnectURL = async (authToken, accountId = null) => {
  try {
    let url = "/wp-json/servv-plugin/v1/stripe/url";
    if (accountId) {
      url += `?account_id=${accountId}`;
    }

    const response = await axios({
      method: "GET",
      url: url,
      headers: { "X-WP-Nonce": authToken },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe connect URL:", error);
    return null;
  }
};

export const confirmStripe = async (authToken) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/confirm",
      headers: { "X-WP-Nonce": authToken },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Stripe connect URL:", error);
    return null;
  }
};
export const disconnectStripeAccount = async (authToken) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: "/wp-json/servv-plugin/v1/stripe/account",
      headers: { "X-WP-Nonce": authToken },
    });
    return response.status;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};

export const getDisconnectedStripeAccounts = async (authToken) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/wp-json/servv-plugin/v1/stripe/account/disconnected",
      headers: { "X-WP-Nonce": authToken },
    });
    return response.data;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};

export const updateStripeSettings = async (authToken, currency) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/wp-json/servv-plugin/v1/stripe/settings",
      headers: { "X-WP-Nonce": authToken },
      data: { currency: currency },
    });
    return response.data;
  } catch (error) {
    console.error("Error disconnecting Stripe connect URL:", error);
    return null;
  }
};
