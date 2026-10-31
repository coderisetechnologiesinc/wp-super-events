<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
require_once __DIR__ . '/ajax/events/routes.php';
require_once __DIR__ . '/ajax/zoom/routes.php';
require_once __DIR__ . '/ajax/calendar/routes.php';
require_once __DIR__ . '/ajax/mail/routes.php';
require_once __DIR__ . '/ajax/stripe/routes.php';
require_once __DIR__ . '/ajax/shop/routes.php';
require_once __DIR__ . '/ajax/filters/routes.php';
require_once __DIR__ . '/ajax/analytics/routes.php';
require_once __DIR__ . '/ajax/mobile/routes.php';


function servv_validate_ajax_permissions($request) {
    if (!is_user_logged_in()) {
        return new WP_Error('rest_forbidden', 'You are not allowed to access this resource.', array('status' => 403));
    }

    if (!current_user_can('edit_posts')) {
        return new WP_Error('rest_forbidden', 'You do not have permission to perform this action.', array('status' => 403));
    }

    return true;
}

function servv_validate_ajax_post_update_permissions($request) {
    $post_id = $request['post_id'];
    $post = get_post($post_id);
    if (!$post) {
        return new WP_Error('rest_forbidden', 'Post doesn\'t exist', array('status' => 404));
    }
    if (!is_user_logged_in()) {
        return new WP_Error('rest_forbidden', 'You are not allowed to access this resource.', array('status' => 403));
    }

    if (!current_user_can('edit_post', $post_id)) {
        return new WP_Error('rest_forbidden', 'You do not have permission to perform this action.', array('status' => 403));
    }

    return true;
}
