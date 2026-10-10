// What the shop's plan and chosen email provider make worth asking the server
// for. A read that cannot answer anything its screen renders is not merely
// wasted work: it competes for the PHP workers the proxy needs to validate
// the requests that do matter (see requestQueue).
//
// Every answer comes out of /shop/info, which the admin reads first, so these
// cost nothing themselves.

// Price, not plan id: ids are a Servv-side detail, and a shop that pays
// nothing is what actually decides the gates below.
//
// A plan that has not loaded is deliberately NOT read as free — skipping a
// read on absent data would show a paid shop its connected accounts as
// disconnected.
export const isFreePlan = (settings) => {
  const price = Number(settings?.current_plan?.price);
  return Number.isFinite(price) && price === 0;
};

// Zoom and Stripe are paid-plan integrations: a free shop can neither create a
// Zoom event nor sell a ticket, so neither account tells its screens anything.
export const needsZoomAccount = (settings) => !isFreePlan(settings);

export const needsStripeAccount = (settings) => !isFreePlan(settings);

// The sender is whatever `email_provider` names, and an unset value means
// Gmail. SMTP replaces Gmail — except on a free plan, where SMTP is not
// available, so Gmail stays the account to ask about even if the shop's
// settings still name SMTP from an earlier paid period.
export const needsGmailAccount = (settings) =>
  settings?.settings?.email_provider !== "smtp" || isFreePlan(settings);

// Members are a paid-plan filter kind — `members_limit` is 0 on free.
export const needsMembersFilter = (settings) => !isFreePlan(settings);
