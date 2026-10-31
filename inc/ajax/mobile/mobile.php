<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

const SERVV_MOBILE_API_VERSION = 3;
const SERVV_MOBILE_CALLBACK_SCHEME = 'servv-admin';
const SERVV_MOBILE_CONNECT_TTL = 15 * MINUTE_IN_SECONDS;

function servv_get_mobile_status($request)
{
    $user = wp_get_current_user();
    $installStatus = get_option('servv_install_status', '');

    return [
        'mobile_api_version' => SERVV_MOBILE_API_VERSION,
        'plugin_version'     => SERVV_PLUGIN_VERSION,
        'site_name'          => get_bloginfo('name'),
        'site_url'           => home_url(),
        'install_status'     => $installStatus,
        'ready'              => $installStatus === 'ok',
        'timezone'           => wp_timezone_string(),
        'currency'           => get_option('servv_currency', 'USD'),
        'user'               => [
            'id'             => $user->ID,
            'display_name'   => $user->display_name,
            'email'          => $user->user_email,
            'can_manage'     => current_user_can('manage_options'),
        ],
    ];
}

function servv_validate_mobile_connect_permissions($request)
{
    if (!current_user_can('manage_options')) {
        return new WP_Error('rest_forbidden', 'Only administrators can connect services.', ['status' => 403]);
    }
    return true;
}

function servv_mobile_connect_services()
{
    return [
        'zoom'     => ['auth' => '/zoom/authenticate/url', 'confirm' => '/zoom/authenticate/confirm', 'path' => 'zoom/connect', 'page' => 'servv-plugin-zoom-confirm-page'],
        'calendar' => ['auth' => '/calendar/authenticate/url', 'confirm' => '/calendar/authenticate/confirm', 'path' => 'calendar/connect', 'page' => 'servv-plugin-calendar-confirm-page'],
        'gmail'    => ['auth' => '/mail/gmail/authenticate/url', 'confirm' => '/mail/gmail/authenticate/confirm', 'path' => 'mail/connect', 'page' => 'servv-plugin-gmail-confirm-page'],
        'stripe'   => ['auth' => '/payments/stripe/authenticate/url', 'confirm' => null, 'path' => 'payments/stripe/connect', 'page' => 'servv-admin-page'],
    ];
}

function servv_get_mobile_connect_url($request)
{
    $service = $request['service'];
    $config = servv_mobile_connect_services()[$service];
    try {
        $response = servvSendApiRequest($config['auth']);
    } catch (\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode() ?: 500]);
    }
    $authUrl = $response['auth_url'] ?? '';
    if (empty($authUrl)) {
        return new WP_Error('servv_no_auth_url', 'The service did not return a connection link.', ['status' => 502]);
    }

    $userId = get_current_user_id();
    $token = wp_generate_password(32, false, false);
    $pending = ['service' => $service, 'user' => $userId];
    set_transient('servv_mobile_connect_'.$token, $pending, SERVV_MOBILE_CONNECT_TTL);
    if ($service === 'stripe') {
        // Stripe comes back without a token of ours, so the pending connect is
        // looked up by the user who started it.
        set_transient('servv_mobile_connect_stripe_'.$userId, $token, SERVV_MOBILE_CONNECT_TTL);
    }

    $siteUrl = wp_parse_url(site_url());
    $origin = $siteUrl['scheme'].'://'.$siteUrl['host'].(isset($siteUrl['port']) ? ':'.$siteUrl['port'] : '');
    $query = ['wordpress_url' => $authUrl, 'wordpress_return_url' => $origin];
    if ($service !== 'stripe') {
        $query['servv_nonce'] = $token;
    }

    return [
        'connect_url'     => rtrim(servv_plugin_get_config('shopify_app_url'), '/').'/'.$config['path'].'?'.http_build_query($query),
        'callback_scheme' => SERVV_MOBILE_CALLBACK_SCHEME,
    ];
}

function servv_mobile_complete_connect()
{
    $page = isset($_GET['page']) ? sanitize_key(wp_unslash($_GET['page'])) : '';
    $service = null;
    foreach (servv_mobile_connect_services() as $name => $config) {
        if ($config['page'] === $page) {
            $service = $name;
        }
    }
    if (!$service || !is_user_logged_in()) {
        return;
    }

    $userId = get_current_user_id();
    if ($service === 'stripe') {
        $section = isset($_GET['section']) ? sanitize_key(wp_unslash($_GET['section'])) : '';
        $token = $section === 'stripe-integration' ? get_transient('servv_mobile_connect_stripe_'.$userId) : '';
    } else {
        $token = isset($_GET['nonce']) ? sanitize_text_field(wp_unslash($_GET['nonce'])) : '';
    }
    if (empty($token) || !is_string($token)) {
        return;
    }
    $pending = get_transient('servv_mobile_connect_'.$token);
    if (!is_array($pending) || $pending['service'] !== $service || (int)$pending['user'] !== $userId) {
        return;
    }
    delete_transient('servv_mobile_connect_'.$token);
    delete_transient('servv_mobile_connect_stripe_'.$userId);

    $connected = true;
    try {
        if ($service === 'stripe') {
            $result = servv_confirm_stripe_connect(new WP_REST_Request('GET'));
            $connected = !is_wp_error($result);
        } else {
            $code = isset($_GET['code']) ? sanitize_text_field(wp_unslash($_GET['code'])) : '';
            if (empty($code)) {
                $connected = false;
            } else {
                servvSendApiRequest(servv_mobile_connect_services()[$service]['confirm'].'?code='.rawurlencode($code));
            }
        }
    } catch (\Exception $e) {
        $connected = false;
    }

    $callback = SERVV_MOBILE_CALLBACK_SCHEME.'://integrations?'.http_build_query([
        'service' => $service,
        'status'  => $connected ? 'connected' : 'failed',
    ]);
    header('Location: '.$callback, true, 302);
    exit;
}
