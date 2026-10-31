<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mobile/status', [
        'methods'  => 'GET',
        'callback' => 'servv_get_mobile_status',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mobile/checkins', [
        'methods'  => 'GET',
        'callback' => 'servv_get_mobile_checkins',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'event_id' => ['required' => true],
            'occurrence_id' => ['required' => false],
            'since_revision' => ['required' => false],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mobile/checkins/sync', [
        'methods'  => 'POST',
        'callback' => 'servv_sync_mobile_checkins',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/mobile/connect/(?P<service>zoom|calendar|gmail|stripe)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_mobile_connect_url',
        'permission_callback' => 'servv_validate_mobile_connect_permissions',
    ]);
});

add_action('admin_init', 'servv_mobile_complete_connect', 1);
add_action('admin_page_access_denied', 'servv_mobile_complete_connect', 1);
