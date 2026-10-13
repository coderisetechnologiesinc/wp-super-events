# Plan limits audit

Checked against the supplied Free (1) and Premium (2) catalog and the local plugin code on 2026-10-12. The local admin URL redirects to login in the audit session; rendering verification uses the actual PlansPage component with the supplied catalog fixtures, not an authenticated shop response.

## Numeric limits

| Field | Free / Premium | Display | Local enforcement | Remaining verification |
| --- | --- | --- | --- | --- |
| filters_limit | 2 / 25 | Plans and Filters usage | Shared quota across locations, languages, categories and members; creation menu, list, direct creation form and event modal | SERVV API must enforce writes atomically; local lists can be stale |
| members_limit | 0 / 10 | Plans | Member availability and independent creation cap; member quota does not block other filter types | Remote enforcement and existing values after downgrade |
| offline_events_limit | Unlimited / 1000 | Plans | Zero disallows creating this event type | Positive quota requires authoritative usage counts from API; no local aggregate check |
| offline_recurring_events_limit | 0 / 100 | Plans | Recurrence availability and save guard by event location | Positive quota, recurrence occurrence vs series counting and update behavior require API verification |
| events_limit | 0 / 1000 | Plans | Zero disallows creating a Zoom event | Positive quota requires authoritative usage counts from API |
| recurring_events_limit | 0 / 100 | Plans | Recurrence availability and save guard by event location | Positive quota requires authoritative usage counts from API |
| webinars_limit, recurring_webinars_limit | 0 / 0 | Not in the six requested rows | Current admin event form offers no webinar workflow | Remote API rules |
| live_shopping_events_limit, live_shopping_recurring_events_limit | 0 / 0 | Not in the six requested rows | Current admin event form offers no live shopping workflow | Remote API rules |
| recordings_limit | 0 / 0 | Not in the six requested rows | No active recording creation workflow in the audited admin routes | Remote API rules |
| journeys_limit / journeys_advanced | 0 / false for both | Not in the six requested rows | No journey authoring workflow in the audited admin routes | Remote API rules |

Zero is a real limit; -1 means unlimited. Missing or invalid filter quotas retain the existing fallback of 25. Missing member quota retains compatibility with free/paid plan IDs. No quota values are inferred for missing event fields.

## Feature restrictions

| Capability | Status |
| --- | --- |
| Recurring / Recurring Events | Corrected active event form: numeric location-specific quota has priority, both feature titles supported as fallback. Save guard also rejects recurrence when disabled. Legacy DateStep still uses the older feature title; active admin routes load UnifiedEventForm. |
| multi_tickets | Active form and save use the actual boolean flag, with legacy fallback only when absent. |
| Zoom and Stripe integrations | Existing UI largely gates by free/paid plan or IDs 2/3, not by the individual feature flags. Therefore arbitrary future catalog combinations are not fully respected. Remote authorization must be verified. |
| Reminders and Email Customization | Existing UI gates primarily by free-plan ID, not each feature. Individual flag enforcement is not complete. |
| widget_show_logo | No reference to this plan flag in widgetEventsV2 source; branding policy is not enforced there. |
| bundles_feature | No flag enforcement found in the active admin code. Legacy widget has bundle rendering; remote access policy requires checking. |
| User Management / Premium Support | Not local quota checks. No corresponding enforcement based on these feature entries established in this audit. |
| Unlimited Bookings, Events, Fast Checkout, Widgets, Notifications, Multi Booking, Custom Store Email | Catalog feature list is displayed. The active UI does not implement a general feature-policy engine; individual workflows are implemented independently. |
| is_usage_billing, capped_amount, usage_billing_* | Billing metadata; remote billing policy, not local event/filter counters. Both supplied plans disable usage billing. |
| application_fee_percent | Displayed on paid catalog card and payment options; actual charged fee must be verified on the backend/Stripe. |
| hidden | Hidden catalog entries are now omitted from plan cards. |
| trial_days, price, price_annual, price_*_stripe_id, is_wp_marketplace | Pricing, trial and checkout metadata. Activation goes through the API. Both supplied plans have zero trial days. |
| Free registration capacity | Existing active form/save cap uses shop free_registrants_limit, fallback 15; not part of the six plan fields. |
| payed_until / paid_until | Displayed only for paid current plan. No local entitlement-expiration policy is implemented; API must decide access. |

## Authority boundary

WordPress filter, event and ticket endpoints forward writes to SERVV. They do not implement a complete independent plan policy. UI guards improve the admin experience but do not secure direct REST calls or concurrent writes. Definitive enforcement requires server-side checks using fresh plan status and authoritative counts. The remote SERVV backend is outside this repository, so its enforcement is not confirmed by this audit. No production plan, billing or event mutations were performed.

## Verification

- `node scripts/test-plan-limits.cjs`: zero/unlimited/string quotas, member cap, recurrence by location, multiple ticket flags.
- Existing event form, filter-field and request-queue tests passed.
- Browser fixture renders the actual PlansPage with Free/Premium: Filters limit 2/25, all six rows, equal heading offsets, Paid until hidden on Free and present on Premium.
- Production build completed.
