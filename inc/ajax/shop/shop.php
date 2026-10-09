<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
function servv_get_shop_info($request)
{
    try {
        $responseBody = servvSendApiRequest('/wordpress/shop/info');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_shop_settings($request)
{
    $apiRoute =  '/wordpress/shop/settings';
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'PUT');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $brandingRaw = $requestBody['widget_style_settings'] ?? [];
    if (is_string($brandingRaw)) {
        $brandingRaw = json_decode($brandingRaw, true);
    }
    $branding = is_array($brandingRaw) ? $brandingRaw : [];
    $title = $branding['pw_title'] ?? '';
    $desc  = $branding['pw_description'] ?? '';
    $image = $branding['pw_avatar'] ?? '';
    update_option('servv_pw_title', $title);
    update_option('servv_pw_description', $desc);
    update_option('servv_pw_avatar', $image);

    return $responseBody;
}

function servv_get_shop_cards_settings($request)
{
    $settings = get_option('servv_shop_cards_settings', []);
    return $settings;
}

function servv_update_shop_cards_settings($request)
{
    $data = $request->get_json_params();
    if (!is_array($data)) {
        return new WP_Error(
            'invalid_payload',
            'Settings must be a JSON object',
            ['status' => 400]
        );
    }
    update_option('servv_shop_cards_settings', $data, false);
    return ['success' => true];
}

function servv_get_wordpress_settings($request)
{
    $name = $request->get_param('name');
    if(empty($name)) {
        return new WP_Error(400, 'Setting name is required', ['status' => 400]);
    }
    try {
        $responseBody = servvSendApiRequest('/wordpress/settings?name='.$name);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_wordpress_templates($request)
{
    try {
        $responseBody = servvSendApiRequest('/wordpress/templates');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_wordpress_template($request)
{
    $templateId = $request['template_id'];
    try {
        $responseBody = servvSendApiRequest('/wordpress/templates/'.$templateId);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_update_wordpress_template($request)
{
    $templateId = $request['template_id'];
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest('/wordpress/templates/'.$templateId, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_payment_plans($request)
{
    try {
        $responseBody = servvSendApiRequest('/wordpress/paymentplans');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_payment_plan_subscription($request)
{
    $planId = $request['plan_id'] ?? 0;
    if(empty($planId)) {
        wp_send_json_error(['message' => 'Empty plan id']);
        exit();
    }
    $isAnnual = $request['is_annual'] ?? false;
    try {
        $responseBody = servvSendApiRequest('/wordpress/paymentplans/'.$planId);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage()]);
        exit();
    }
    $apiRoute = '/payments/stripe/subscriptions/session/create';

    $data = [
        'plan_id' => (int)$planId,
        // servv_refresh drops the admin's cached plan: the subscription is
        // registered while the merchant is away on Stripe.
        'return_url'    => servv_get_hash_admin_url(SERVV_PLUGIN_SLUG, '',
            ['servv_refresh' => 'settings,billing']),
        'is_annual'    => (bool)$isAnnual,
    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_billing_portal_session($request)
{
    $apiRoute = '/payments/stripe/session/billing/portal';
    $data = [
        // The portal is where a plan gets changed or cancelled, so the cached
        // plan must not survive the trip either.
        'return_url'    => servv_get_hash_admin_url(SERVV_PLUGIN_SLUG, '',
            ['servv_refresh' => 'settings,billing'])
    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_complete_onboarding_item($request)
{
    $itemId = $request['item_id'];
    try {
        $responseBody = servvSendApiRequest('/wordpress/shop/onboarding/'.$itemId, [],  'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_seen_notification_item($request)
{
    $itemId = $request['item_id'];
    try {
        $responseBody = servvSendApiRequest('/wordpress/shop/notifications/'.$itemId, [],  'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_n8n_settings()
{
    return [
        'event_created_active' => get_option('servv_n8n_event_created_active', false),
        'event_created_url' => get_option('servv_n8n_event_created_url', ''),
        'event_created_method' => get_option('servv_n8n_event_created_method', ''),
        'event_created_secret' => get_option('servv_n8n_event_created_secret', ''),

        'new_booking_active' => get_option('servv_n8n_new_booking_active', false),
        'new_booking_url' => get_option('servv_n8n_new_booking_url', ''),
        'new_booking_method' => get_option('servv_n8n_new_booking_method', ''),
        'new_booking_secret' => get_option('servv_n8n_new_booking_secret', ''),

        'canceled_booking_active' => get_option('servv_n8n_canceled_booking_active', false),
        'canceled_booking_url' => get_option('servv_n8n_canceled_booking_url', ''),
        'canceled_booking_method' => get_option('servv_n8n_canceled_booking_method', ''),
        'canceled_booking_secret' => get_option('servv_n8n_canceled_booking_secret', ''),
    ];
}
function servv_update_n8n_settings($request)
{
    update_option('servv_n8n_event_created_active', $request->get_param('event_created_active', false));
    update_option('servv_n8n_event_created_url', $request->get_param('event_created_url', ''));
    update_option('servv_n8n_event_created_method', $request->get_param('event_created_method', ''));
    update_option('servv_n8n_event_created_secret', $request->get_param('event_created_secret', ''));

    update_option('servv_n8n_new_booking_active', $request->get_param('new_booking_active', false));
    update_option('servv_n8n_new_booking_method', $request->get_param('new_booking_method', ''));
    update_option('servv_n8n_new_booking_url', $request->get_param('new_booking_url', ''));
    update_option('servv_n8n_new_booking_secret', $request->get_param('new_booking_secret', ''));

    update_option('servv_n8n_canceled_booking_active', $request->get_param('canceled_booking_active', false));
    update_option('servv_n8n_canceled_booking_method', $request->get_param('canceled_booking_method', ''));
    update_option('servv_n8n_canceled_booking_url', $request->get_param('canceled_booking_url', ''));
    update_option('servv_n8n_canceled_booking_secret', $request->get_param('canceled_booking_secret', ''));
}