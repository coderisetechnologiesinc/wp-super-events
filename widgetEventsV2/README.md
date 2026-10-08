# WordPress events widget V2

Vue 3 / Pinia components and skins ported from `servv-react/widgetSrcEventsV2`.
The WordPress build uses `src/api/wordpress.js`; no Shopify cart, customer signatures,
collections, or direct Servv API credentials are required in the browser.

Open **WP Super Events → Widget** to save defaults, preview real events, and copy
an explicit shortcode. The background image can be selected from the WordPress
media library; hex colors support alpha channels. Preview cannot create
registrations or payments.

```text
[servv_events]
[servv_events view_mode="grid" widget_skin="swiss" events_per_page="12"]
```

Configuration priority: schema defaults → saved WordPress defaults → shortcode
attributes. Explicit `false` and `0` values are preserved. Each instance has its
own Pinia, request cancellation scopes, configuration, and scoped skin styles.
The existing `[servvai]` and `[servvplatformwidget]` shortcodes remain available.

`widget_skin` holds a style id: either a base style, or a base style plus a
colour scheme after the dash, as in `glass-obsidian`. The base decides the shapes
and the fonts, the scheme recolours it, and the sheets load base → style →
scheme → mobile. The instance carries the two halves as `data-svv-skin` and
`data-svv-scheme`. Everything under `src/styles` is a verbatim copy of
`servv-react/widgetSrcEventsV2/src/styles` except `_wordpress.scss`; the
per-instance scope that the copied sheets lack is added by
`scripts/build-skins.mjs`, so syncing a style change is a plain file copy.

Neumorph, Polaris, Poster and Swiss ship their own typography, so they also load
it from Google Fonts. Turning on `skin_custom_styles` replaces that typography
with the configured fonts and the web font is then not requested.

Below 544px of container width the filters collapse from the aside into a
drawer, and a scrollable strip of the dates that have events appears above the
list. Both come from the shared components; `show_mobile_date_strip` hides the
strip.

Settings schema: `inc/widget-v2-schema.json`, shared by PHP and the admin page.
Local settings are stored in the `servv_widget_v2_settings` option. Editing and
previewing require `manage_options` and the WordPress admin nonce. Public data
and bookings reuse the existing AJAX actions with `payment_nonce`.

| Widget operation | Existing WordPress AJAX action |
| --- | --- |
| Shop settings | `servv_get_shop_settings` |
| Filter types | `servv_get_types_list` |
| Event list | `servv_get_events_filtered_list` |
| Calendar dates | `servv_get_events_filtered_list_dates` |
| Event details and tickets | `servv_get_event_info` |
| Questions | `servv_get_event_questions_list` |
| Answers | `servv_add_event_answer` |
| Waiting list | `servv_add_to_waitinglist` |
| Free registration | `servv_process_free_order` |
| Stripe embedded checkout | `servv_create_checkout_session` |

WordPress `product.post_id`, `post_url`, and `image_url` replace Shopify product,
variant, and image identifiers. Recurring registrations include `occurrence_id`.
Ticket and donation selections use the existing server-side ticket validation.
Recurring occurrences have distinct rendering keys. Grouped categories respect
selected/default category filters; calendar mode loads all pages for its month.
Question answers use nested `answers[index][id/text]` fields; the handler continues
to accept older flat answers. No live orders or payments are created by the tests.

## Build and verify

```sh
npm ci --prefix widgetEventsV2
npm run build:widget-v2
npm run test:widget-v2
npm run build
php scripts/test-widget-v2.php
node scripts/test-widget-v2-browser.cjs
```

The browser test requires Playwright and a Chrome installation. It intercepts
all mock-site requests and checks isolated instances, skins, free registration,
and mobile layout. An optional HTML path argument checks read-only AJAX calls
on `servvplugin.local`; all live booking actions are prohibited by the harness.
Compiled files under `widgetEventsV2/dist` must be shipped with the plugin.
