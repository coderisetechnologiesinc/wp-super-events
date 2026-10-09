<?php
/**
 * Plugin Name: WP Super Events – Event Booking & Tickets
 * Plugin URI: https://wpsuperevents.com
 * Description: Create event calendars, registrations, recurring events, tickets, and online or in-person events directly in WordPress.
 * Version: 2.1.0
 * Author: ServvAI
 * Author URI: https://wpsuperevents.com
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

const SERVV_PLUGIN_SLUG = 'servvai-event-booking';
const SERVV_EVENT_POST_TYPE = 'wp_super_events';

require_once __DIR__ . '/vendor-prefixed/autoload.php';
require_once __DIR__ . '/inc/helpers.php';
require_once __DIR__ . '/inc/api.php';
require_once __DIR__ . '/inc/n8n.php';
require_once __DIR__ . '/inc/widget-v2.php';

add_action('servv_plugin_delayed_install', 'servv_plugin_make_delayed_install');
add_action('rest_api_init', 'servv_plugin_register_api_endpoint', 1);

//Multisite Activation 
register_activation_hook(__FILE__, 'servv_plugin_activate_multisite');

function servv_plugin_activate_multisite($network_wide) {
    if (is_multisite() && $network_wide) {
        $sites = get_sites();
        foreach ($sites as $site) {
            switch_to_blog($site->blog_id);
            servv_plugin_activate_single_site();
            restore_current_blog();
        }
    } else {
        servv_plugin_activate_single_site();
    }
}

function servv_plugin_activate_single_site() {
    if (!wp_next_scheduled('servv_plugin_delayed_install')) {
        wp_schedule_single_event(time() + 5, 'servv_plugin_delayed_install');
    }
    update_option('servv_onboarding_status', 'pending', false);
    delete_option('servv_onboarding_redirect');
    if (function_exists('spawn_cron')) {
        spawn_cron();
    }
}

//Multisite Deactivation 
register_deactivation_hook(__FILE__, 'servv_plugin_deactivate_multisite');

function servv_plugin_deactivate_multisite($network_wide) {
    if (is_multisite() && $network_wide) {
        $sites = get_sites();
        foreach ($sites as $site) {
            switch_to_blog($site->blog_id);
            servv_plugin_deactivate_single_site();
            restore_current_blog();
        }
    } else {
        servv_plugin_deactivate_single_site();
    }
}

function servv_plugin_deactivate_single_site() {
    wp_clear_scheduled_hook('servv_plugin_delayed_install');
    delete_option('servv_install_status');

    try {
        servvSendApiRequest('/wordpress/uninstall', [], 'POST');
    } catch (Exception $e) {
    }
}

/**
 * Handle new site creation in a multisite network.
 * Automatically runs plugin setup for the new sub-site.
 */
 
add_action('wpmu_new_blog', 'servv_plugin_new_blog', 10, 6);
function servv_plugin_new_blog($blog_id, $user_id, $domain, $path, $site_id, $meta) {
    switch_to_blog($blog_id);
    servv_plugin_activate_single_site();
    restore_current_blog();
}

function servv_plugin_register_api_endpoint() {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/check-signature', [
            'methods' => 'GET',
            'callback' => 'servv_plugin_check_signature',
            'permission_callback' => '__return_true' // Allows public access
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/variant-info/(?P<event_id>\d+)/(?P<variant_id>\d+)', [
            'methods' => 'GET',
            'callback' => 'servv_get_product_info',
            'permission_callback' => 'servv_validate_request_from_servv_api'
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event-post/(?P<post_id>\d+)/quantity', [
            'methods' => 'PATCH',
            'callback' => 'servv_update_event_post_quantity',
            'permission_callback' => 'servv_validate_request_from_servv_api'
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event-post/(?P<post_id>\d+)/status', [
            'methods' => 'PATCH',
            'callback' => 'servv_update_event_post_status',
            'permission_callback' => 'servv_validate_request_from_servv_api'
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/widget/data', [
            'methods' => 'GET',
            'callback' => 'servv_get_widget_data',
            'permission_callback' => '__return_true',
    ]);
}

function servv_get_widget_data() {
    $page      = isset($_GET['page'])      ? intval($_GET['page'])      : 1;
    $page_size = isset($_GET['page_size']) ? intval($_GET['page_size']) : 12;

    try {
        $settings = servvSendApiRequest('/wordpress/widget/shop/settings');
    } catch (\Exception $e) {
        $settings = [];
    }

    try {
        $params = [
            'page'                => $page,
            'page_size'           => $page_size,
            'without_occurrences' => true,
        ];

        $queryString = servv_build_api_query($params);
        $responseBody = servvSendApiRequest('/wordpress/filter/meetings?' . $queryString);

        $currency = get_option('servv_currency', 'USD');
        $result = [];

        foreach ($responseBody['meetings'] ?? [] as $item) {
            $product      = $item['product'] ?? [];
            $occurrenceId = $item['occurrence_id'] ?? null;
            $post         = servv_get_post_by_meta_value('servv_event_id', $item['id']);

            if (empty($post)) continue;

            $postId = $post->ID;
            $product['post_id']   = $postId;
            $product['post_url']  = get_permalink($postId);
            $product['image_url'] = servv_get_post_image_url($postId);
            $product['currency']  = $currency;

            $quantities = get_post_meta($postId, 'servv_event_quantities', true);
            $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
            $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
            $product['current_quantity'] = $currentQuantity;

            $item['product'] = $product;
            $result[] = $item;
        }

        $responseBody['meetings'] = $result;

        return new WP_REST_Response([
            'settings'      => $settings,
            'meetings'      => $result,
            'page_count'    => $responseBody['page_count']    ?? 1,
            'total_records' => $responseBody['total_records'] ?? 0,
        ], 200);

    } catch (\Exception $e) {
        return new WP_REST_Response([
            'settings'      => $settings,
            'meetings'      => [],
            'page_count'    => 1,
            'total_records' => 0,
        ], 200);
    }
}

function servv_get_servv_event_post($postId) {
    $post = get_post($postId);
    if (!$post) {
        return new WP_Error('not_found', 'Unknown post.', ['status' => 404]);
    }

    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if (empty($servvEventId)) {
        return new WP_Error('not_found', 'Post is not linked to a Servv event.', ['status' => 404]);
    }

    return $post;
}

function servv_update_event_post_quantity($request) {
    $postId = (int)$request['post_id'];
    $post = servv_get_servv_event_post($postId);
    if (is_wp_error($post)) {
        return $post;
    }

    $params = $request->get_json_params();
    if (!is_array($params) || !array_key_exists('quantity', $params)) {
        return new WP_Error('bad_request', 'Quantity is required.', ['status' => 400]);
    }

    $occurrenceId = isset($params['occurrence_id']) ? sanitize_text_field((string)$params['occurrence_id']) : '';
    $quantityKey = $occurrenceId !== '' ? $occurrenceId : 0;
    $quantity = (int)$params['quantity'];

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    if (!is_array($quantities)) {
        $quantities = [];
    }

    $quantities[$quantityKey] = $quantity;
    update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));

    return new WP_REST_Response(['ok' => true], 200);
}

function servv_update_event_post_status($request) {
    $postId = (int)$request['post_id'];
    $post = servv_get_servv_event_post($postId);
    if (is_wp_error($post)) {
        return $post;
    }

    $params = $request->get_json_params();
    $status = isset($params['status']) ? sanitize_key($params['status']) : '';
    if (!in_array($status, ['draft', 'publish'], true)) {
        return new WP_Error('bad_request', 'Invalid post status.', ['status' => 400]);
    }

    if ($status === 'draft') {
        if (get_post_meta($postId, 'servv_auto_hidden', true) !== '1') {
            update_post_meta($postId, 'servv_auto_hidden_previous_status', $post->post_status);
        }
        update_post_meta($postId, 'servv_auto_hidden', '1');
    } else {
        if (get_post_meta($postId, 'servv_auto_hidden', true) !== '1') {
            return new WP_REST_Response(['ok' => true], 200);
        }
        $previousStatus = get_post_meta($postId, 'servv_auto_hidden_previous_status', true);
        if (in_array($previousStatus, ['publish', 'private'], true)) {
            $status = $previousStatus;
        }
    }

    $result = wp_update_post([
        'ID' => $postId,
        'post_status' => $status,
    ], true);

    if (is_wp_error($result)) {
        return $result;
    }

    if ($status !== 'draft') {
        delete_post_meta($postId, 'servv_auto_hidden');
        delete_post_meta($postId, 'servv_auto_hidden_previous_status');
    }

    return new WP_REST_Response(['ok' => true], 200);
}

function servv_plugin_make_delayed_install() {
    $siteDomain = wp_parse_url( servv_plugin_get_config('site_url'), PHP_URL_HOST );
    $siteName = get_bloginfo('name');
    $adminEmail = get_bloginfo('admin_email');
    $wpVersion = get_bloginfo('version');
    $pluginVersion = servv_plugin_get_config('plugin_version');
    $uuid = servv_plugin_get_uuid();
    $requestBody = [
            'site_domain' => $siteDomain,
            'site_name' => $siteName,
            'admin_email' => $adminEmail,
            'wp_version' => $wpVersion,
            'plugin_version' => $pluginVersion,
            'uuid' => $uuid
    ];

    $maxAttempts = 5;
    for ($attempt = 1; $attempt <= $maxAttempts; $attempt++) {
        try {
            $response = servvSendApiRequest('/wordpress/authenticate/install', $requestBody, 'POST');
            update_option('servv_install_status', 'ok');
            return;
        } catch (\Throwable $e) {
            error_log(sprintf(
                    'Install attempt %d/%d failed: %s',
                    $attempt, $maxAttempts, $e->getMessage()
            ));
            if ($attempt < $maxAttempts) {
                sleep(5);
            }
        }
    }
    update_option('servv_install_status', 'failed');
    // deactivate_plugins( plugin_basename( __FILE__ ) );
}


function servv_plugin_activate() {
    if (!wp_next_scheduled('servv_plugin_delayed_install')) {
        wp_schedule_single_event(time() + 5, 'servv_plugin_delayed_install');
    }
    if ( function_exists('spawn_cron') ) {
        spawn_cron();
    }
}

function servv_plugin_deactivate() {
    wp_clear_scheduled_hook('servv_plugin_delayed_install');
    delete_option('servv_install_status');

    try {
        servvSendApiRequest('/wordpress/uninstall', [], 'POST');
    } catch (Exception $e) {
    }
}

function servv_plugin_get_config($key) {
    $defaults = require __DIR__ . '/config.php';
    $dbSettings = is_multisite() ? get_site_option('servv_plugin_settings', []) : get_option('servv_plugin_settings', []);

    $config = array_merge($defaults, $dbSettings);
    return $config[$key] ?? null;
}
define('SERVV_PLUGIN_VERSION', '1.0.37');

// ─────────────────────────────────────────────────────────────────────────────
// Block Editor Registration + Editor Script Localization
// ─────────────────────────────────────────────────────────────────────────────

function servv_plugin_block_init() {
    $block = register_block_type_from_metadata(__DIR__ . '/build');

    $script_handle = $block->editor_script_handles[0] ?? null;
    if ($script_handle) {
        wp_localize_script(
            $script_handle,
            'servvData',
            [
                'servv_plugin_mode' => servv_plugin_get_config('servv_plugin_mode'),
                'nonce'             => wp_create_nonce("wp_rest"),
                'ajaxUrl'           => admin_url('admin-ajax.php'),
                'restUrl'           => esc_url_raw(rest_url()),
            ]
        );
    }
}
add_action('init', 'servv_plugin_block_init');

// ─────────────────────────────────────────────────────────────────────────────
// Frontend View Script Localization
// ─────────────────────────────────────────────────────────────────────────────

add_action('wp_enqueue_scripts', 'servv_localize_view_script');
function servv_localize_view_script() {
    $json = file_get_contents(plugin_dir_path(__FILE__) . 'build/block.json');
    $block_metadata = json_decode($json, true);

    $handle = $block_metadata['viewScriptHandle'] ?? 'create-block-servv-plugin-view-script';

    if (wp_script_is($handle, 'enqueued')) {
        wp_localize_script($handle, 'servvData', [
            'ajaxUrl'            => admin_url('admin-ajax.php'),
            'security'           => wp_create_nonce('payment_nonce'),
            'servv_plugin_mode'  => servv_plugin_get_config('servv_plugin_mode'),
        ]);
    }
}

add_action('wp_enqueue_scripts', function () {

    if (!is_singular()) return;

    $event_id = get_post_meta(get_the_ID(), 'servv_event_id', true);
    if (!$event_id) return;

    $asset = require plugin_dir_path(__FILE__) . 'build/checkout.asset.php';

    wp_enqueue_style(
        'servv-checkout-styles',
        plugin_dir_url(__FILE__) . 'build/checkout.css',
        [],
        $asset['version']
    );

    wp_enqueue_script(
        'servv-checkout',
        plugin_dir_url(__FILE__) . 'build/checkout.js',
        $asset['dependencies'], 
        $asset['version'],
        true
    );

    wp_localize_script('servv-checkout', 'servvCheckoutData', [
        'postId'  => get_the_ID(),
        'eventId' => $event_id,
        'stripeAccountId' => get_option('servv_stripe_account_id', ''),
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'restUrl' => rest_url(),
        'nonce'   => wp_create_nonce('payment_nonce'),
    ]);
});




// ─────────────────────────────────────────────────────────────────────────────
// Stripe Script
// ─────────────────────────────────────────────────────────────────────────────

// function servv_enqueue_stripe_scripts() {
//     wp_register_script('servv-plugin-frontend', '', [],   SERVV_PLUGIN_VERSION, true);
//     wp_enqueue_script('servv-plugin-frontend');

//     wp_localize_script('servv-plugin-frontend', 'servvData', [
//         'ajaxUrl'  => admin_url('admin-ajax.php'),
//         'security' => wp_create_nonce('payment_nonce'),
//     ]);
// }
// add_action('wp_enqueue_scripts', 'servv_enqueue_stripe_scripts');

// ─────────────────────────────────────────────────────────────────────────────
// Frontend Shortcode Rendering
// ─────────────────────────────────────────────────────────────────────────────

add_filter('the_content', 'servv_add_event_purchase_form');
add_shortcode('servv_event_purchase_form', 'servv_render_event_purchase_form');

function servv_add_event_purchase_form($content) {
    $servvEventId = get_post_meta(get_the_ID(), 'servv_event_id', true);
    if (!empty($servvEventId)) {
        $content .= do_shortcode('[servv_event_purchase_form id="' . get_the_ID() . '"]');
    }
    return $content;
}


function servv_render_event_purchase_form($atts) {
    $atts = shortcode_atts(['id' => 0], $atts);
    ob_start();
    ?>
    <div id="servv-on-product-widget"></div>
    <input type="hidden" id="post-id" value="<?php echo esc_attr($atts['id']); ?>">
    <?php
    return ob_get_clean();
}

// ─────────────────────────────────────────────────────────────────────────────
// Admin App (React) + Localization
// ─────────────────────────────────────────────────────────────────────────────

add_action('admin_menu', 'servv_add_admin_page');
add_action('admin_page_access_denied', 'servv_recover_integration_return_page');

/**
 * Return URLs for the integrations live on the Servv side, and some of them
 * still point at admin pages this plugin no longer registers (the Stripe
 * Connect return is one). WordPress answers an unregistered page with
 * "Sorry, you are not allowed to access this page", which reads as a failed
 * connection even though the account was linked, so an administrator asking
 * for one of our pages is sent to the screen that owns it instead.
 */
function servv_recover_integration_return_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    $page = servv_get_current_admin_page();
    if (strpos($page, 'servv') !== 0) {
        return;
    }
    // A page we do register is a genuine denial, not a stale return URL.
    if (isset(servv_get_admin_screens()[$page])) {
        return;
    }
    $route = 'integrations';
    foreach (['stripe' => 'integrations/stripe', 'zoom' => 'integrations/zoom',
        'gmail' => 'integrations/gmail', 'calendar' => 'integrations/calendars'] as $needle => $target) {
        if (strpos($page, $needle) !== false) {
            $route = $target;
            break;
        }
    }
    wp_safe_redirect(servv_get_hash_admin_url('servv-integrations', $route));
    exit;
}
add_action('admin_enqueue_scripts', 'servv_admin_enqueue_scripts');
add_action('admin_init', 'servv_maybe_redirect_to_onboarding');
add_action('admin_post_servv_dismiss_onboarding', 'servv_handle_dismiss_onboarding');

function servv_get_admin_screens() {
    return [
        SERVV_PLUGIN_SLUG => [
            'label'       => 'Dashboard',
            'title'       => 'Dashboard',
            'route'       => 'dashboard',
            'type'        => 'react',
        ],
        'servv-onboarding' => [
            'label'       => 'Setup',
            'title'       => 'Setup',
            'type'        => 'native',
            'renderer'    => 'servv_render_onboarding_screen',
            'hidden'      => true,
        ],
        'servv-events' => [
            'label'       => 'Events',
            'title'       => 'Events',
            'route'       => 'events',
            'type'        => 'react',
        ],
        'servv-bookings' => [
            'label'       => 'Bookings',
            'title'       => 'Bookings',
            'route'       => 'bookings',
            'type'        => 'react',
        ],
        'servv-calendar' => [
            'label'       => 'Calendar',
            'title'       => 'Calendar',
            'route'       => 'calendar',
            'type'        => 'react',
            'hidden'      => true,
        ],
        'servv-filters' => [
            'label'       => 'Filters',
            'title'       => 'Filters',
            'route'       => 'filters',
            'type'        => 'react',
        ],
        'servv-integrations' => [
            'label'       => 'Integrations',
            'title'       => 'Integrations',
            'route'       => 'integrations',
            // Was 'hybrid' with servv_render_integrations_overview printing
            // native connection cards above the app. The React screen carries
            // that copy now, so no renderer runs around it.
            'type'        => 'react',
        ],
        'servv-pricing' => [
            'label'       => 'Plans',
            'title'       => 'Plans',
            'route'       => 'plans',
            'type'        => 'react',
        ],
        'servv-widget' => [
            'label' => 'Widget', 'title' => 'Widget', 'route' => 'widget', 'type' => 'react',
        ],
        'servv-settings' => [
            'label'       => 'Settings',
            'title'       => 'Settings',
            'route'       => 'settings',
            'type'        => 'react',
        ],
        'servv-support' => [
            'label'       => 'Support',
            'title'       => 'Support',
            'route'       => 'support',
            'type'        => 'react',
        ],
    ];
}

function servv_get_admin_screen($page = null) {
    $screens = servv_get_admin_screens();
    $page = $page ?: SERVV_PLUGIN_SLUG;
    return $screens[$page] ?? $screens[SERVV_PLUGIN_SLUG];
}

function servv_get_current_admin_page() {
    return isset($_GET['page']) ? sanitize_key(wp_unslash($_GET['page'])) : SERVV_PLUGIN_SLUG;
}

function servv_admin_screen_uses_react($screen) {
    return in_array($screen['type'] ?? 'react', ['react', 'hybrid'], true);
}

function servv_add_admin_page() {
    $screens = servv_get_admin_screens();
    add_menu_page('WP Super Events', 'WP Super Events', 'manage_options', SERVV_PLUGIN_SLUG, 'servv_render_admin_page','dashicons-calendar-alt');

    foreach ($screens as $slug => $screen) {
        add_submenu_page(
            SERVV_PLUGIN_SLUG,
            $screen['title'],
            $screen['label'],
            'manage_options',
            $slug,
            'servv_render_admin_page'
        );
    }

    add_submenu_page(SERVV_PLUGIN_SLUG, 'Zoom Integration', 'Zoom Integration', 'manage_options', 'servv-plugin-zoom-confirm-page', 'servv_plugin_zoom_confirm');
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Calendar Integration', 'Calendar Integration', 'manage_options', 'servv-plugin-calendar-confirm-page', 'servv_plugin_calendar_confirm');
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Gmail Integration', 'Gmail Integration', 'manage_options', 'servv-plugin-gmail-confirm-page', 'servv_plugin_gmail_confirm');
    add_submenu_page(SERVV_PLUGIN_SLUG, 'Stripe Integration', 'Stripe Integration', 'manage_options', 'servv-plugin-stripe-confirm-page', 'servv_plugin_stripe_confirm');

    // WordPress needs the current callback's submenu entry to resolve its
    // parent and registered page hook during the admin access check.
    $current_page = servv_get_current_admin_page();
    foreach ($screens as $slug => $screen) {
        if (!empty($screen['hidden']) && $current_page !== $slug) {
            remove_submenu_page(SERVV_PLUGIN_SLUG, $slug);
        }
    }
    foreach (['zoom', 'calendar', 'gmail', 'stripe'] as $integration) {
        $callback_page = 'servv-plugin-' . $integration . '-confirm-page';
        if ($current_page !== $callback_page) {
            remove_submenu_page(SERVV_PLUGIN_SLUG, $callback_page);
        }
    }
}

function servv_maybe_redirect_to_onboarding() {
    // Automatic setup navigation is temporarily disabled, including queued redirects.
    if (get_option('servv_onboarding_redirect') === '1') {
        delete_option('servv_onboarding_redirect');
    }
}

function servv_handle_dismiss_onboarding() {
    if (!current_user_can('manage_options')) {
        wp_die(esc_html__('You do not have permission to update WP Super Events setup.', 'servv-plugin'));
    }
    check_admin_referer('servv_dismiss_onboarding');
    update_option('servv_onboarding_status', 'dismissed', false);
    delete_option('servv_onboarding_redirect');
    wp_safe_redirect(wp_get_referer() ?: admin_url('admin.php?page=' . SERVV_PLUGIN_SLUG));
    exit;
}

function servv_is_onboarding_dismissed() {
    return get_option('servv_onboarding_status') === 'dismissed';
}

function servv_get_hash_admin_url($page, $route = '', $args = []) {
    $url = admin_url('admin.php?page=' . $page);
    if (!empty($args)) {
        $url = add_query_arg($args, $url);
    }
    if ($route !== '') {
        $url .= '#/' . ltrim($route, '/');
    }
    return $url;
}

function servv_get_native_notice_url($dismiss = false) {
    if (!$dismiss) {
        return admin_url('admin.php?page=servv-onboarding');
    }
    return wp_nonce_url(admin_url('admin-post.php?action=servv_dismiss_onboarding'), 'servv_dismiss_onboarding');
}

function servv_render_admin_notices($page) {
    $install_status = get_option('servv_install_status', '');
    if ($install_status === 'failed') {
        echo '<div class="notice notice-error"><p><strong>WP Super Events activation failed.</strong> Review your API configuration, then retry activation or contact support.</p></div>';
    } elseif ($install_status !== 'ok') {
        echo '<div class="notice notice-info"><p><strong>WP Super Events setup is still finishing.</strong> Some API-backed screens may load limited data until installation completes.</p></div>';
    }

    if (!function_exists('register_block_type')) {
        echo '<div class="notice notice-warning"><p><strong>Gutenberg blocks are unavailable.</strong> Activate the block editor to create and embed WP Super Events experiences.</p></div>';
    }

    // The setup prompt is the React <SetupGuide> banner on the dashboard now —
    // it reads the same `servv_onboarding_status` option through servvData.
}

function servv_render_admin_page() {
    if (!current_user_can('manage_options')) {
        wp_die(esc_html__('You do not have permission to manage WP Super Events.', 'servv-plugin'));
    }

    $page = servv_get_current_admin_page();
    $screen = servv_get_admin_screen($page);

    echo '<div class="wrap servv-native-admin-wrap">';
    servv_render_admin_notices($page);

    if (!empty($screen['renderer']) && is_callable($screen['renderer'])) {
        call_user_func($screen['renderer'], $screen, $page);
    }

    if (servv_admin_screen_uses_react($screen)) {
        printf(
            '<div id="servv-wrap" class="servv-react-island" data-default-route="%1$s" data-admin-page="%2$s"></div>',
            esc_attr($screen['route'] ?? 'dashboard'),
            esc_attr($page)
        );
    }
    echo '</div>';
}

function servv_safe_remote_status($route) {
    try {
        $response = servvSendApiRequest($route);
        return ['data' => is_array($response) ? $response : [], 'error' => null];
    } catch (Exception $e) {
        return ['data' => [], 'error' => $e->getMessage()];
    }
}

function servv_get_connection_status($service) {
    $routes = [
        'calendar' => '/calendar/account',
        'gmail'    => '/mail/gmail/account',
        'zoom'     => '/zoom/account',
        'stripe'   => '/payments/stripe/account',
    ];
    if (empty($routes[$service])) {
        return ['connected' => null, 'label' => 'Uses browser OAuth', 'detail' => '', 'error' => null];
    }
    $result = servv_safe_remote_status($routes[$service]);
    $data = $result['data'];
    $identity = $data['email'] ?? $data['google_calendar_email'] ?? $data['account_id'] ?? $data['id'] ?? '';
    $connected = !empty($identity) || !empty($data['charges_enabled']);
    return [
        'connected' => $connected,
        'label'     => $connected ? 'Connected' : 'Not connected',
        'detail'    => $identity,
        'error'     => $result['error'],
    ];
}

function servv_render_status_badge($status) {
    $class = 'servv-status-badge';
    if (!empty($status['error'])) {
        $class .= ' is-warning';
        $label = 'Needs attention';
    } elseif ($status['connected'] === true) {
        $class .= ' is-connected';
        $label = $status['label'];
    } elseif ($status['connected'] === false) {
        $class .= ' is-disconnected';
        $label = $status['label'];
    } else {
        $class .= ' is-neutral';
        $label = $status['label'];
    }
    return '<span class="' . esc_attr($class) . '">' . esc_html($label) . '</span>';
}

function servv_plugin_stripe_confirm() {
    servv_js_redirect(servv_get_hash_admin_url('servv-integrations', 'integrations/stripe',
        ['servv_refresh' => 'accounts']));
}

function servv_render_onboarding_screen() {
    $steps = [
        [
            'title'       => 'Configure business and event defaults',
            'description' => 'Review timezone, default duration, ticket defaults, checkout, notifications, and widget settings.',
            'url'         => servv_get_hash_admin_url('servv-settings', 'settings'),
            'button'      => 'Open settings',
        ],
        [
            'title'       => 'Connect Google Calendar and Gmail',
            'description' => 'Google connections use browser-based Google OAuth. No standalone Chrome extension or Chrome-only connection was found in this plugin.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations'),
            'button'      => 'Manage Google',
        ],
        [
            'title'       => 'Connect Zoom',
            'description' => 'Enable online event creation and meeting-link generation for virtual events.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations/zoom'),
            'button'      => 'Manage Zoom',
        ],
        [
            'title'       => 'Connect Stripe',
            'description' => 'Accept paid registrations and configure the payout account for ticket sales.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations/stripe'),
            'button'      => 'Manage Stripe',
        ],
        [
            'title'       => 'Create your first event',
            'description' => 'Create a one-time or recurring event, add tickets, and publish it to your site.',
            'url'         => servv_get_hash_admin_url('servv-events', 'events/new'),
            'button'      => 'Create event',
        ],
    ];

    echo '<div class="servv-admin-grid">';
    foreach ($steps as $index => $step) {
        echo '<div class="card servv-native-card">';
        echo '<h2>' . esc_html(($index + 1) . '. ' . $step['title']) . '</h2>';
        echo '<p>' . esc_html($step['description']) . '</p>';
        printf('<p><a class="button button-primary" href="%1$s">%2$s</a></p>', esc_url($step['url']), esc_html($step['button']));
        echo '</div>';
    }
    echo '</div>';

    echo '<form method="post" action="' . esc_url(admin_url('admin-post.php')) . '" class="servv-onboarding-actions">';
    echo '<input type="hidden" name="action" value="servv_dismiss_onboarding">';
    wp_nonce_field('servv_dismiss_onboarding');
    submit_button('Mark setup as reviewed', 'secondary', 'submit', false);
    echo ' <a class="button" href="' . esc_url(servv_get_hash_admin_url(SERVV_PLUGIN_SLUG, 'onboarding')) . '">Open guided setup flow</a>';
    echo '</form>';
}

// No longer wired to a screen: the Integrations screen is React-only and
// IntegrationsPage.jsx carries this copy. Kept for the native fallback.
function servv_render_integrations_overview() {
    $cards = [
        [
            'service'     => 'calendar',
            'title'       => 'Google Calendar',
            'description' => 'Sync event schedules to Google Calendar.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations/calendars'),
        ],
        [
            'service'     => 'gmail',
            'title'       => 'Gmail',
            'description' => 'Send event email notifications and reminders.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations/gmail'),
        ],
        [
            'service'     => 'zoom',
            'title'       => 'Zoom',
            'description' => 'Create and manage online event meetings.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations/zoom'),
        ],
        [
            'service'     => 'stripe',
            'title'       => 'Stripe',
            'description' => 'Accept paid registrations and manage payout settings.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations/stripe'),
        ],
        [
            'service'     => 'browser',
            'title'       => 'Google / Chrome browser',
            'description' => 'The plugin uses Google OAuth in the user browser for Calendar and Gmail. No separate Chrome connector exists in this codebase.',
            'url'         => servv_get_hash_admin_url('servv-integrations', 'integrations'),
        ],
    ];

    echo '<div class="servv-native-section">';
    echo '<h2>Connection Status</h2>';
    echo '<div class="servv-admin-grid">';
    foreach ($cards as $card) {
        $status = servv_get_connection_status($card['service']);
        echo '<div class="card servv-native-card">';
        echo '<div class="servv-card-title-row"><h3>' . esc_html($card['title']) . '</h3>' . wp_kses_post(servv_render_status_badge($status)) . '</div>';
        echo '<p>' . esc_html($card['description']) . '</p>';
        if (!empty($status['detail'])) {
            echo '<p><strong>Account:</strong> ' . esc_html($status['detail']) . '</p>';
        }
        if (!empty($status['error'])) {
            echo '<p class="description">Status could not be refreshed: ' . esc_html($status['error']) . '</p>';
        }
        printf('<p><a class="button" href="%1$s">%2$s</a></p>', esc_url($card['url']), esc_html__('Manage', 'servv-plugin'));
        echo '</div>';
    }
    echo '</div>';
    echo '</div>';
    echo '<hr class="servv-native-divider">';
    echo '<h2>Integration Settings</h2>';
}

function servv_fetch_recurring_events_preview() {
    $events = [];
    foreach (['/offline/meetings', '/zoom/meetings'] as $route) {
        $query = servv_build_api_query([
            'page'                => 1,
            'page_size'           => 25,
            'without_occurrences' => true,
        ]);
        $result = servv_safe_remote_status($route . '?' . $query);
        if (!empty($result['data']['meetings']) && is_array($result['data']['meetings'])) {
            $events = array_merge($events, $result['data']['meetings']);
        }
    }
    return array_values(array_filter($events, function ($event) {
        if (!empty($event['recurrence']) && is_array($event['recurrence'])) {
            return true;
        }
        return isset($event['recurrence']) && strtolower((string)$event['recurrence']) === 'recurring';
    }));
}

function servv_format_recurrence_summary($recurrence) {
    if (empty($recurrence)) {
        return 'One-time';
    }
    if (is_string($recurrence)) {
        return $recurrence;
    }
    $types = [1 => 'Daily', 2 => 'Weekly', 3 => 'Monthly'];
    $type = $types[(int)($recurrence['type'] ?? 0)] ?? 'Recurring';
    $interval = (int)($recurrence['repeat_interval'] ?? 1);
    $parts = [$type, 'every ' . max(1, $interval) . ' interval(s)'];
    if (!empty($recurrence['weekly_days']) && is_array($recurrence['weekly_days'])) {
        $parts[] = 'days: ' . implode(', ', array_map('intval', $recurrence['weekly_days']));
    }
    if (!empty($recurrence['end_times'])) {
        $parts[] = 'ends after ' . (int)$recurrence['end_times'] . ' occurrence(s)';
    }
    if (!empty($recurrence['end_date_time'])) {
        $parts[] = 'until ' . esc_html($recurrence['end_date_time']);
    }
    return implode(' · ', $parts);
}

function servv_render_recurring_events_screen() {
    $timezone = wp_timezone_string() ?: 'UTC';
    echo '<div class="notice notice-info"><p><strong>Timezone:</strong> Recurring schedules are displayed using the site timezone: ' . esc_html($timezone) . '.</p></div>';
    echo '<div class="card servv-native-card">';
    echo '<h2>Supported recurrence rules</h2>';
    echo '<p>WP Super Events currently supports one-time, daily, weekly, monthly, custom repeat intervals, recurrence end counts, and recurrence end dates in the event builder.</p>';
    echo '</div>';

    $events = servv_fetch_recurring_events_preview();
    echo '<h2>Recurring Series</h2>';
    if (empty($events)) {
        echo '<div class="notice notice-warning inline"><p>No recurring series were returned by the event API. Create a recurring event or review API connectivity.</p></div>';
        echo '<p><a class="button button-primary" href="' . esc_url(servv_get_hash_admin_url('servv-events', 'events/new')) . '">Create recurring event</a> <a class="button" href="' . esc_url(servv_get_hash_admin_url('servv-events', 'events')) . '">View all events</a></p>';
        return;
    }

    echo '<table class="widefat striped servv-native-table"><thead><tr><th>Event</th><th>Type</th><th>Pattern</th><th>Starts</th><th>Actions</th></tr></thead><tbody>';
    foreach ($events as $event) {
        $title = $event['topic'] ?? $event['title'] ?? 'Untitled event';
        $type = strtolower((string)($event['type'] ?? 'offline'));
        $route_type = $type === 'zoom' ? 'zoom' : 'offline';
        $event_id = $event['id'] ?? '';
        $edit_url = $event_id ? servv_get_hash_admin_url('servv-events', 'events/' . $route_type . '/' . rawurlencode((string)$event_id)) : servv_get_hash_admin_url('servv-events', 'events');
        echo '<tr>';
        echo '<td><strong>' . esc_html($title) . '</strong></td>';
        echo '<td>' . esc_html(ucfirst($route_type)) . '</td>';
        echo '<td>' . esc_html(servv_format_recurrence_summary($event['recurrence'] ?? null)) . '</td>';
        echo '<td>' . esc_html($event['start_time'] ?? $event['startTime'] ?? 'Not available') . '</td>';
        echo '<td><a class="button button-small" href="' . esc_url($edit_url) . '">Manage</a></td>';
        echo '</tr>';
    }
    echo '</tbody></table>';
}

function servv_get_admin_diagnostics() {
    global $wp_version;
    return [
        'plugin'        => 'WP Super Events',
        'plugin_slug'   => SERVV_PLUGIN_SLUG,
        'plugin_version'=> SERVV_PLUGIN_VERSION,
        'wordpress'     => $wp_version,
        'php'           => PHP_VERSION,
        'site_url'      => home_url(),
        'install_status'=> get_option('servv_install_status', ''),
        'mode'          => servv_plugin_get_config('servv_plugin_mode'),
        'timezone'      => wp_timezone_string(),
        'gutenberg'     => function_exists('register_block_type'),
    ];

}

function servv_fetch_widget_settings_server() {

    $apiRoute = '/wordpress/widget/shop/settings';

    try {
        $response = servvSendApiRequest($apiRoute);
    } catch (\Exception $e) {

        error_log("SERVV SETTINGS API ERROR: " . $e->getMessage());

        return null;
    }

    return $response ?? null;
}




add_action("wp_head", function () {

     if (!is_singular()) return;

    global $post;
    if (!$post) return;

    if (!has_shortcode($post->post_content, "servvplatformwidget")) {
        return;
    }

    $title = get_option('servv_pw_title') ?: 'WP Super Events Widget Preview';
    $desc = get_option('servv_pw_description') ?: 'Book events directly from this page.';
    $image = get_option('servv_pw_avatar') ?: plugin_dir_url(__FILE__) . 'assets/default-og.png';

    if ($image && strpos($image, "http") !== 0) {
        $image = site_url($image);
    }

    $url = get_permalink();

    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta property="og:site_name" content="' . esc_attr(get_bloginfo("name")) . '">' . "\n";
    echo '<meta property="og:title" content="' . esc_attr($title) . '">' . "\n";
    echo '<meta property="og:description" content="' . esc_attr($desc) . '">' . "\n";
    echo '<meta property="og:url" content="' . esc_url($url) . '">' . "\n";
    echo '<meta property="og:image" content="' . esc_url($image) . '">' . "\n";


    echo '<meta property="og:image:width" content="1200">' . "\n";
    echo '<meta property="og:image:height" content="630">' . "\n";

    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
    echo '<meta name="twitter:title" content="' . esc_attr($title) . '">' . "\n";
    echo '<meta name="twitter:description" content="' . esc_attr($desc) . '">' . "\n";
    echo '<meta name="twitter:image" content="' . esc_url($image) . '">' . "\n";

    echo '<meta name="twitter:url" content="' . esc_url($url) . '">' . "\n";

});
// End Preview


function servv_admin_enqueue_scripts() {
    if (!isset($_GET['page'])) return;

    $page = sanitize_key(wp_unslash($_GET['page']));
    $screens = servv_get_admin_screens();
    if (!isset($screens[$page])) return;

    wp_enqueue_style(
        'servv-admin-style',
        plugins_url('admin.css', __FILE__),
        [],
        SERVV_PLUGIN_VERSION
    );

    $screen = servv_get_admin_screen($page);
    if (!servv_admin_screen_uses_react($screen)) {
        return;
    }

    wp_enqueue_media();
    $asset_file = include plugin_dir_path(__FILE__) . 'build/admin.asset.php';

    wp_enqueue_style(
        'servv-inter-font',
        'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900&display=swap',
        [],
        null
    );

    // Plus Jakarta Sans is the typeface of the current admin design system.
    wp_enqueue_style(
        'servv-ui-font',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        [],
        null
    );

     wp_enqueue_style(
        'servv-styles',
        plugins_url('build-assets/index.css', __FILE__),
        ['servv-inter-font'],
        SERVV_PLUGIN_VERSION
    );

    // Component styles compiled from the SCSS modules under src/. Loaded after
    // the Tailwind sheet so migrated components win over the legacy utilities.
    wp_enqueue_style(
        'servv-components',
        plugins_url('build/admin.css', __FILE__),
        ['servv-styles', 'servv-ui-font'],
        SERVV_PLUGIN_VERSION
    );
    wp_style_add_data('servv-components', 'rtl', 'replace');
    wp_enqueue_script(
        SERVV_PLUGIN_SLUG,
        plugins_url('build/admin.js', __FILE__),
        $asset_file['dependencies'],
        SERVV_PLUGIN_VERSION,
        true
    );
    $admin_routes = [];
    foreach ($screens as $slug => $admin_screen) {
        if (servv_admin_screen_uses_react($admin_screen) && !empty($admin_screen['route'])) {
            $admin_routes[] = [
                'url' => admin_url('admin.php?page=' . $slug),
                'route' => '/' . ltrim($admin_screen['route'], '/'),
            ];
        }
    }
    wp_localize_script(SERVV_PLUGIN_SLUG, 'servvData', [
        'page'              => $page,
        'nativeAdmin'       => true,
        'diagnostics'       => servv_get_admin_diagnostics(),
        'defaultRoute'      => $screen['route'] ?? 'dashboard',
        'adminRoutes'       => $admin_routes,
        'onboardingUrl'     => admin_url('admin.php?page=servv-onboarding'),
        'pluginUrl'         => plugin_dir_url(__FILE__),
        'nonce'             => wp_create_nonce("wp_rest"),
        'ajaxUrl'           => admin_url('admin-ajax.php'),
        'stripePublicKey'   => get_option('servv_stripe_public_key'),
        'stripeAccountId'   => get_option('servv_stripe_account_id'),
        'shopify_app'       => servv_plugin_get_config('shopify_app_url'),
        'servv_plugin_mode' => servv_plugin_get_config('servv_plugin_mode'),
        'postUrl'           => admin_url('post.php'),
        'adminUrl'          => admin_url('admin.php'),
        'install_status'    => get_option('servv_install_status', ''),
        // Scopes the admin's session data cache. Several WordPress installs
        // can share a browser (and a multisite network shares an origin), so
        // the site, the user and the plugin version decide the store.
        'cacheScope'        => substr(hash('sha256', implode('|', [
            (string) get_current_blog_id(),
            home_url(),
            (string) get_current_user_id(),
            SERVV_PLUGIN_VERSION,
        ])), 0, 16),
        'setupDismissed'    => servv_is_onboarding_dismissed(),
        'setupDismissUrl'   => servv_get_native_notice_url(true),
        'gutenberg_active'  => (int)function_exists( 'register_block_type' ),
        'homepage'          => home_url(),
        'env'               => (str_contains(servv_plugin_get_config('api_base_url'), 'testapi') ? 'test' : (str_contains(servv_plugin_get_config('api_base_url'), 'devapi') ? 'dev' : 'prod')),
        'adminPages'        => [
            'dashboard'         => admin_url('admin.php?page=' . SERVV_PLUGIN_SLUG),
            'events'            => admin_url('admin.php?page=servv-events'),
            'bookings'          => admin_url('admin.php?page=servv-bookings'),
            'calendar'          => admin_url('admin.php?page=servv-calendar'),
            'filters'           => admin_url('admin.php?page=servv-filters'),
            'integrations'      => admin_url('admin.php?page=servv-integrations'),
            'pricing'           => admin_url('admin.php?page=servv-pricing'),
            'widget'            => admin_url('admin.php?page=servv-widget'),
            'settings'          => admin_url('admin.php?page=servv-settings'),
            'support'           => admin_url('admin.php?page=servv-support'),
        ],
    ]);
}

// ─────────────────────────────────────────────────────────────────────────────
// Widget Vue.js Integration + Shortcode
// ─────────────────────────────────────────────────────────────────────────────

add_action('wp_enqueue_scripts', 'servv_load_vue_scripts');
add_shortcode('servvai', 'servv_widget_shortcode');

function servv_load_vue_scripts() {
    global $post;
    if (!is_a($post, 'WP_Post') || !has_shortcode($post->post_content, 'servvai')) {
        return;
    }

    $plugin_base_url = plugin_dir_url(__FILE__) . 'widget/dist/';
    $plugin_dir = plugin_dir_path(__FILE__) . 'widget/dist/';


    $load_order = ['vendors.js', 'common.js'];
    $all_handles = [];


    $js_dir = $plugin_dir . 'js/';
    

    foreach ($load_order as $filename) {
        $filepath = $js_dir . $filename;
        if (file_exists($filepath)) {
            $handle = 'servv_' . str_replace(['.js', '-', '.'], ['', '_', '_'], $filename);
            $deps = !empty($all_handles) ? [$all_handles[count($all_handles) - 1]] : [];
            
            wp_enqueue_script(
                $handle,
                $plugin_base_url . 'js/' . $filename,
                $deps,
                defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false,
                true
            );
            $all_handles[] = $handle;
        }
    }


    $js_files = glob($js_dir . '*.js');
    if ($js_files) {
        foreach ($js_files as $js_file) {
            $filename = basename($js_file);
            

            if (in_array($filename, ['vendors.js', 'common.js', 'servv-widget.js']) || 
                strpos($filename, '.map') !== false) {
                continue;
            }

            $handle = 'servv_' . str_replace(['.js', '-', '.'], ['', '_', '_'], $filename);
            $deps = !empty($all_handles) ? $all_handles : [];

            wp_enqueue_script(
                $handle,
                $plugin_base_url . 'js/' . $filename,
                $deps,
                defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false,
                true
            );
            $all_handles[] = $handle;
        }
    }


    $widget_js = $js_dir . 'servv-widget.js';
    if (file_exists($widget_js)) {
        wp_enqueue_script(
            'servv_widget',
            $plugin_base_url . 'js/servv-widget.js',
            $all_handles, 
            defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false,
            true
        );
        $all_handles[] = 'servv_widget';
    }

    // --- Load CSS files ---
    $css_files = glob($plugin_dir . 'css/*.css');
    if ($css_files) {
        foreach ($css_files as $css_file) {
            $filename = basename($css_file);
            $handle = 'servv_' . str_replace(['.css', '-', '.'], ['', '_', '_'], $filename);

            wp_enqueue_style(
                $handle,
                $plugin_base_url . 'css/' . $filename,
                [],
                defined('SERVV_PLUGIN_VERSION') ? SERVV_PLUGIN_VERSION : false
            );
        }
    }


    if (!empty($all_handles)) {

        $target_handle = in_array('servv_widget', $all_handles) ? 'servv_widget' : end($all_handles);
        
        wp_localize_script($target_handle, 'servvAjax', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('payment_nonce'),
            'assets_url' => $plugin_base_url,
        ]);
    }
}


function servv_widget_shortcode($atts) {

    $themes = [
        'blue' => [
            'light' => [
                'brand-color-primary'   => '#165DFB',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#165DFB',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#2C7FFF',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#2C7FFF',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'green' => [
            'light' => [
                'brand-color-primary'   => '#62AC00',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#62AC00',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#66B101',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#66B101',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'orange' => [
            'light' => [
                'brand-color-primary'   => '#E07000',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#E07000',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#F49200',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#F49200',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'red' => [
            'light' => [
                'brand-color-primary'   => '#F9084B',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#F9084B',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#F91951',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#F91951',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'purple' => [
            'light' => [
                'brand-color-primary'   => '#9109F3',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#9109F3',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#A537FF',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#A537FF',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'light-red' => [
            'light' => [
                'brand-color-primary'   => '#EB4902',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#EB4902',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#F96600',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#F96600',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
        'cyan' => [
            'light' => [
                'brand-color-primary'   => '#00AB9C',
                'brand-color-secondary' => '#F1F5F9',
                'widget-background'     => '#FFFFFF',
                'text-main'             => '#020817',
                'text-secondary'        => '#64748B',
                'text-tertiary'         => '#94A3B8',
                'card-background'       => '#FFFFFF',
                'link-hover'            => '#00AB9C',
                'elements-background'   => '#F1F5F9',
                'elements-border'       => '#E2E8F0',
            ],
            'dark' => [
                'brand-color-primary'   => '#00C4AE',
                'brand-color-secondary' => '#1F2937',
                'widget-background'     => '#0B1020',
                'text-main'             => '#F8FAFC',
                'text-secondary'        => '#94A3B8',
                'text-tertiary'         => '#CBD5E1',
                'card-background'       => '#0B1020',
                'link-hover'            => '#00C4AE',
                'elements-background'   => '#111827',
                'elements-border'       => '#1F2937',
            ],
        ],
    ];


    $atts = array_merge(['preset' => 'light', 'style' => 'blue','location' => '',
        'category' => '',
        'member'   => '',
        'language' => '',], $atts);

    $presetName = $atts['preset']; // "light" or "dark"
    $styleName  = $atts['style'];  // "blue", "green", etc.
    $defaultLocation = $atts['location'];
    $defaultCategory = $atts['category'];
    $defaultMember = $atts['member'];
    $defaultLanguage = $atts['language'];
    // fallback if style doesn't exist
    if (!isset($themes[$styleName])) {
        $styleName = 'blue';
    }

    // fallback if preset doesn't exist
    if (!isset($themes[$styleName][$presetName])) {
        $presetName = 'light';
    }

    $finalVars = $themes[$styleName][$presetName];

    // Allow overrides from shortcode attributes
    foreach ($atts as $key => $value) {
        if ($key === 'preset' || $key === 'style') continue; 
        if ($value !== '' && array_key_exists($key, $finalVars)) {
            $finalVars[$key] = $value;
        }
    }
    
    // Build CSS variables
    $style  = '--servv-primary-color:'       . esc_attr($finalVars['brand-color-primary'])   . ';';
    $style .= '--servv-secondary-color:'     . esc_attr($finalVars['brand-color-secondary']) . ';';
    $style .= '--servv-widget-background:'   . esc_attr($finalVars['widget-background'])     . ';';
    $style .= '--servv-text-main:'           . esc_attr($finalVars['text-main'])             . ';';
    $style .= '--servv-text-secondary:'      . esc_attr($finalVars['text-secondary'])        . ';';
    $style .= '--servv-text-tertiary:'       . esc_attr($finalVars['text-tertiary'])         . ';';
    $style .= '--servv-card-background:'     . esc_attr($finalVars['card-background'])       . ';';
    $style .= '--servv-elements-background:' . esc_attr($finalVars['elements-background'])   . ';';
    $style .= '--servv-link-hover-color:'    . esc_attr($finalVars['link-hover'])            . ';';
    $style .= '--servv-elements-border:'     . esc_attr($finalVars['elements-border'])       . ';';

    $output  = '<style>:root { ' . $style . ' }</style>';
    $output .= '<div id="widget-wrapper" '
    . 'data-widget-location="' . esc_attr( $defaultLocation ) . '" '
    . 'data-widget-category="' . esc_attr( $defaultCategory ) . '" '
    . 'data-widget-member="' . esc_attr( $defaultMember ) . '" '
    . 'data-widget-language="' . esc_attr( $defaultLanguage ) . '">'
    . '<div id="servv-widget"></div>'
    . '</div>';

    return $output;
}

/**
 * --------------------------------------------------------------------------
 * Load Platform Widget Assets (Vue build)
 * --------------------------------------------------------------------------
 */
function servv_load_platformwidget_scripts() {

    $plugin_root_path = plugin_dir_path(__FILE__);
    $plugin_root_url  = plugin_dir_url(__FILE__);

    $assets_path = $plugin_root_path . 'platformWidget/dist/assets/';
    $assets_url  = $plugin_root_url  . 'platformWidget/dist/assets/';

    $js_file  = glob($assets_path . 'index-*.js');
    $css_file = glob($assets_path . 'index-*.css');

    if (empty($js_file)) {
        error_log('SERVV: JS entry file not found in ' . $assets_path);
        return;
    }

    $js_file  = basename($js_file[0]);
    $css_file = !empty($css_file) ? basename($css_file[0]) : null;

    $handle = 'servv-platform-widget';

    wp_enqueue_script(
        $handle,
        $assets_url . $js_file,
        [],
        null,
        true
    );

    if ($css_file) {
        wp_enqueue_style(
            $handle,
            $assets_url . $css_file,
            [],
            null
        );
    }


    $settings = servv_fetch_widget_settings_server();


    wp_add_inline_script(
        $handle,
        'window.servvPlatformAjax = ' . wp_json_encode([
            'ajax_url'   => admin_url('admin-ajax.php'),
            'nonce'      => wp_create_nonce('payment_nonce'),
            'assets_url' => $assets_url,
            'base_url'   => $plugin_root_url . 'platformWidget/dist/',
        ]) . ';' . "\n" .


        'window.__SERVV_SETTINGS__ = ' . wp_json_encode($settings) . ';',
        'before'
    );
}



/**
 * --------------------------------------------------------------------------
 * Shortcode Renderer
 * --------------------------------------------------------------------------
 */
add_shortcode('servvplatformwidget', 'servv_platformwidget_shortcode');
function servv_platformwidget_shortcode($atts) {
    servv_load_platformwidget_scripts();
    $atts = shortcode_atts([
        'preset'   => 'light',
        'style'    => 'blue',
        'location' => '',
        'category' => '',
        'member'   => '',
        'language' => '',
    ], $atts);

    ob_start();
    ?>
    <div id="platformwidget-wrapper"
         data-widget-location="<?php echo esc_attr($atts['location']); ?>"
         data-widget-category="<?php echo esc_attr($atts['category']); ?>"
         data-widget-member="<?php echo esc_attr($atts['member']); ?>"
         data-widget-language="<?php echo esc_attr($atts['language']); ?>">

        <div id="servv-platform-widget"></div>
    </div>
    <?php

    return ob_get_clean();
}
