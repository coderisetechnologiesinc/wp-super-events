import axios from "./adminApi";

const headers = () => ({ "X-WP-Nonce": servvData.nonce });

export const getBillingPlans = async () => {
  const response = await axios.get(
    "/wp-json/servv-plugin/v1/shop/paymentplans",
    { headers: headers() },
  );
  return response.data.plans;
};

export const activateBillingPlan = async (id, isAnnual = false) => {
  const response = await axios.post(
    `/wp-json/servv-plugin/v1/shop/paymentplans/${id}`,
    { is_annual: isAnnual },
    { headers: headers() },
  );
  return response.data;
};

export const getBillingPortalSession = async () => {
  const response = await axios.post(
    "/wp-json/servv-plugin/v1/shop/billing/portal/session",
    null,
    { headers: headers() },
  );
  return response.data;
};
