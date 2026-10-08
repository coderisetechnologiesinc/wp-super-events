<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action('wp_ajax_servv_create_payment_intent', 'servv_create_payment_intent'); // For logged-in users
add_action('wp_ajax_nopriv_servv_create_payment_intent', 'servv_create_payment_intent'); // For guests
add_action('wp_ajax_servv_create_checkout_session', 'servv_create_checkout_session');
add_action('wp_ajax_nopriv_servv_create_checkout_session', 'servv_create_checkout_session');
add_action('wp_ajax_servv_process_free_order', 'servv_process_free_order');
add_action('wp_ajax_nopriv_servv_process_free_order', 'servv_process_free_order');
add_action('wp_ajax_servv_get_event_info', 'servv_get_event_info');
add_action('wp_ajax_nopriv_servv_get_event_info', 'servv_get_event_info');
add_action('wp_ajax_servv_get_types_list', 'servv_get_types_list');
add_action('wp_ajax_nopriv_servv_get_types_list', 'servv_get_types_list');
add_action('wp_ajax_servv_get_event_questions_list', 'servv_get_event_questions_list');
add_action('wp_ajax_nopriv_servv_get_event_questions_list', 'servv_get_event_questions_list');
add_action('wp_ajax_servv_add_event_answer', 'servv_add_event_answer');
add_action('wp_ajax_nopriv_servv_add_event_answer', 'servv_add_event_answer');
add_action('wp_ajax_servv_add_to_waitinglist', 'servv_add_to_waitinglist');
add_action('wp_ajax_nopriv_servv_add_to_waitinglist', 'servv_add_to_waitinglist');
add_action('wp_ajax_servv_get_events_filtered_list_dates', 'servv_get_events_filtered_list_dates');
add_action('wp_ajax_nopriv_servv_get_events_filtered_list_dates', 'servv_get_events_filtered_list_dates');
add_action('wp_ajax_servv_get_events_filtered_list', 'servv_get_events_filtered_list');
add_action('wp_ajax_nopriv_servv_get_events_filtered_list', 'servv_get_events_filtered_list');
add_action('wp_ajax_servv_get_shop_settings', 'servv_get_shop_settings');
add_action('wp_ajax_nopriv_servv_get_shop_settings', 'servv_get_shop_settings');


add_action('rest_api_init', 'servv_plugin_register_orders_api_endpoint', 1);
function servv_plugin_register_orders_api_endpoint() {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), 'payment-success', [
        'methods' => 'POST',
        'callback' => 'servv_order_payment_success',
        'permission_callback' => 'servv_validate_request_from_servv_api'
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), 'payment-refund', [
        'methods' => 'POST',
        'callback' => 'servv_order_payment_refund',
        'permission_callback' => 'servv_validate_request_from_servv_api'
    ]);
}

function servv_get_event_info()
{
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/withproducts' :
        '/zoom/meetings/'.$servvEventId.'/withproducts';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    if(!empty($responseBody['meeting']['occurrences'])) {
        foreach ($responseBody['meeting']['occurrences'] as $k => $occurrence) {
            if(!empty($occurrence['product'] ?? [])) {
                $responseBody['meeting']['occurrences'][$k]['product']['current_quantity'] =
                    $quantities[$occurrence['id']] ?? null;
            }
        }
    } else {
        $responseBody['product']['current_quantity'] = $quantities[0] ?? null;
    }
    $responseBody['currency'] = get_option('servv_currency', 'USD');

    wp_send_json($responseBody);
    exit();
}

function servv_get_shop_settings()
{
    $security = sanitize_text_field(wp_unslash($_POST['security'] ?? ''));
    if (!wp_verify_nonce($security, 'payment_nonce') && !wp_verify_nonce($security, 'servv_platform_nonce')) {
        wp_send_json_error(['message' => 'Invalid widget nonce.'], 403);
    }

    $apiRoute = '/wordpress/widget/shop/settings';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }

    wp_send_json($responseBody);
    exit();
}

function servv_get_types_list()
{
    check_ajax_referer('payment_nonce', 'security');
    try {
        $responseBody = servvSendApiRequest("/wordpress/types");
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    wp_send_json($responseBody);
    exit();
}

function servv_create_payment_intent() {
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $occurrenceId = sanitize_text_field(wp_unslash($_POST['occurrence_id'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $additionalRegistrants = sanitize_text_field(wp_unslash($_POST['additional_registrants'] ?? ''));
    $additionalRegistrantsArr = [];
    $quantity = 1;
    if(!empty($additionalRegistrants)) {
        $additionalRegistrantsArr = explode(';', $additionalRegistrants);
        $quantity += count($additionalRegistrantsArr);
    }
    if(empty($email)) {
        wp_send_json_error(['message' => 'Empty email']);
        exit();
    }
    $post = get_post($postId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    if(!is_null($currentQuantity) && $currentQuantity < $quantity) {
        wp_send_json_error(['message' => 'Not enough current quantity']);
        exit();
    }

    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage()]);
        exit();
    }

    $price = $responseBody['product']['price'];
    $amount = $price * $quantity;
    $currency = get_option('servv_currency', 'USD');
    $stripeAmount = servv_format_amount_for_stripe($amount, $currency);

    $data = [
        'amount' => $stripeAmount,
        'currency' => $currency,
        'description' => 'Event Purchase: ' . get_the_title($postId),
        'event_id' => $servvEventId,
        'occurrence_id' => $occurrenceId,
        'quantity' => (string)$quantity,
        'email' => $email,
        'first_name' => sanitize_text_field(wp_unslash($_POST['first_name'] ?? '')),
        'last_name' => sanitize_text_field(wp_unslash($_POST['last_name'] ?? '')),
        'additional_registrants' => $additionalRegistrants,
    ];

    $apiRoute = '/payments/stripe/create';
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }

    wp_send_json_success(['message' => 'Payment successful!', 'client_secret' => $responseBody['client_secret']]);
    exit();
}

function servv_create_checkout_session()
{
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $occurrenceId = sanitize_text_field(wp_unslash($_POST['occurrence_id'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $ticketId = absint($_POST['ticket_id'] ?? 0);
    $donationAmount = isset($_POST['donation_amount']) ? abs(floatval($_POST['donation_amount'])) : 0;
    $additionalRegistrants = sanitize_text_field(wp_unslash($_POST['additional_registrants'] ?? ''));
    $sameForAll = isset($_POST['same_for_all']) && filter_var(wp_unslash($_POST['same_for_all']), FILTER_VALIDATE_BOOLEAN);
    $additionalRegistrantsArr = [];
    $quantity = 1;
    if(!empty($additionalRegistrants)) {
        $additionalRegistrantsArr = explode(';', $additionalRegistrants);
        $quantity += count($additionalRegistrantsArr);
    }
    if(empty($email)) {
        wp_send_json_error(['message' => 'Empty email']);
        exit();
    }
    $post = get_post($postId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    if(!is_null($currentQuantity) && $currentQuantity < $quantity) {
        wp_send_json_error(['message' => 'Not enough current quantity']);
        exit();
    }

    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage()]);
        exit();
    }

    $currency = get_option('servv_currency', 'USD');

    $tickets = $responseBody['tickets'] ?? null;
    $name = get_the_title($postId);
    if(!empty($tickets)) {
        $lineItems = servv_compose_tickets($ticketId, $donationAmount, $additionalRegistrantsArr, $tickets, $name, $currency);
    } else {
        $price = $responseBody['product']['price'];
        $stripeAmount = servv_format_amount_for_stripe($price, $currency);
        $lineItems = [[
            'amount' => $stripeAmount,
            'name' => $name,
            'quantity' => $quantity,
        ]];
    }

    $ticketId = (string)$ticketId;
    $donationAmount = (string)$donationAmount;
    if($ticketId == "0"){
        $ticketId = "";
    }
    if($donationAmount == "0"){
        $donationAmount = "";
    }

    $data = [
        'line_items' => $lineItems,
        'currency' => $currency,
        'event_id' => $servvEventId,
        'occurrence_id' => $occurrenceId,
        'quantity' => (int)$quantity,
        'email' => $email,
        'first_name' => sanitize_text_field(wp_unslash($_POST['first_name'] ?? '')),
        'last_name' => sanitize_text_field(wp_unslash($_POST['last_name'] ?? '')),
        'ticket_id' => $ticketId,
        'donation_amount' => $donationAmount,
        'additional_registrants' => $additionalRegistrants,
        'same_for_all' => $sameForAll,
        'return_url'    => get_permalink($postId)
    ];
    $apiRoute = '/payments/stripe/session/create';
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }

    wp_send_json_success(['message' => 'Payment successful!',
        'client_secret' => $responseBody['client_secret'] ?? '',
        'public_key' => $responseBody['public_key'] ?? '',
        'account_id' => $responseBody['account_id'] ?? '',
    ]);
    exit();
}

function servv_compose_tickets($ticketId, $donationAmount, $additionalRegistrantsArr, $tickets, $name, $currency)
{
    $ticketInfo = servv_validate_ticket($ticketId, $tickets, $donationAmount);
    $amount = $ticketInfo['is_donation'] ? $donationAmount : $ticketInfo['price'];
    $requestedTickets = [$ticketId => ['current' => $ticketInfo['current_quantity'], 'purchase' => 1]];
    $lineItems = [];
    $lineItem = [
        'amount' => servv_format_amount_for_stripe($amount, $currency),
        'name' => $name. '('.$ticketInfo['name'].')',
        'quantity' => 1,
        'ticket_id' => (int)$ticketId
    ];
    if($ticketInfo['is_donation']) {
        $lineItems[] = $lineItem;
    } else {
        $lineItems[$ticketId] = $lineItem;
    }
    foreach($additionalRegistrantsArr as $additionalRegistrant) {
        $additionalRegistrantsArr = explode(',', $additionalRegistrant);
        $ticketId = $additionalRegistrantsArr[3] ?? 0;
        $donationAmount = $additionalRegistrantsArr[4] ?? 0;

        $ticketInfo = servv_validate_ticket($ticketId, $tickets, $donationAmount);
        if(isset($requestedTickets[$ticketId])) {
            $requestedTickets[$ticketId]['purchase']++;
        } else {
            $requestedTickets[$ticketId] = ['current' => $ticketInfo['current_quantity'], 'purchase' => 1];

        }

        $amount = $ticketInfo['is_donation'] ? $donationAmount : $ticketInfo['price'];
        $lineItem = [
            'amount' => servv_format_amount_for_stripe($amount, $currency),
            'name' => $name. '('.$ticketInfo['name'].')',
            'quantity' => 1,
            'ticket_id' => (int)$ticketId
        ];
        if($ticketInfo['is_donation']) {
            $lineItems[] = $lineItem;
        } else {
            if(isset($lineItems[$ticketId])) {
                $lineItems[$ticketId]['quantity']++;
            } else {
                $lineItems[$ticketId] = $lineItem;
            }
        }
    }

    foreach ($requestedTickets as $requestedTicket) {
        if(!is_null($requestedTicket['current']) && $requestedTicket['purchase'] > $requestedTicket['current']) {
            wp_send_json_error(['message' => 'Not enough available tickets']);
            exit();
        }
    }

    return array_values($lineItems);

}

function servv_validate_ticket($ticketId, $tickets, $donationAmount)
{
    if(empty($ticketId)) {
        wp_send_json_error(['message' => 'Ticket is required']);
        exit();
    }

    $ticketInfo = get_array_item_by_field_value('id', $ticketId, $tickets);
    if(empty($ticketInfo)) {
        wp_send_json_error(['message' => 'Unknown ticket']);
        exit();
    }
    if(!empty($ticketInfo['start_datetime']) && strtotime($ticketInfo['start_datetime']) > time()) {
        wp_send_json_error(['message' => 'Ticket selling has not started yet']);
        exit();
    }
    if(!empty($ticketInfo['end_datetime']) && strtotime($ticketInfo['end_datetime']) < time()) {
        wp_send_json_error(['message' => 'Ticket selling has already finished']);
        exit();
    }
    if($ticketInfo['is_donation'] && $donationAmount <= 0) {
        wp_send_json_error(['message' => 'Donation amount is required']);
        exit();
    }
    return $ticketInfo;
}

function servv_process_free_order() {
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $occurrenceId = sanitize_text_field(wp_unslash($_POST['occurrence_id'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $ticketId = absint($_POST['ticket_id'] ?? 0);
    $donationAmount = isset($_POST['donation_amount']) ? abs(floatval($_POST['donation_amount'])) : 0;
    $additionalRegistrants = sanitize_text_field(wp_unslash($_POST['additional_registrants'] ?? ''));
    $sameForAll = isset($_POST['same_for_all']) && filter_var(wp_unslash($_POST['same_for_all']), FILTER_VALIDATE_BOOLEAN);
    $additionalRegistrantsArr = [];
    $quantity = 1;
    if(!empty($additionalRegistrants)) {
        $additionalRegistrantsArr = explode(';', $additionalRegistrants);
        $quantity += count($additionalRegistrantsArr);
    }
    if(empty($email)) {
        wp_send_json_error(['message' => 'Empty email']);
        exit();
    }
    $post = get_post($postId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    if(!is_null($currentQuantity) && $currentQuantity < $quantity) {
        wp_send_json_error(['message' => 'Not enough current quantity']);
        exit();
    }

    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage()]);
        exit();
    }

    $tickets = $responseBody['tickets'] ?? null;

    if(!empty($tickets)) {
        $lineItems = servv_compose_tickets($ticketId, 0, $additionalRegistrantsArr, $tickets, '', 'USD');
        $price = 0;
        foreach($lineItems as $lineItem) {
            $price += (float)$lineItem['amount'];
        }
    } else {
        $price = (float)$responseBody['product']['price'];
    }


    if($price > 0) {
        wp_send_json_error(['message' => 'Forbidden. Event is not free.']);
        exit();
    }

    $apiRoute = '/wordpress/neworder';
    $variantId = $postId.'0';
    if(!empty($occurrenceId)) {
        $variantId .= $occurrenceId;
    }
    $ticketId = (string)$ticketId;
    $donationAmount = (string)$donationAmount;
    if($ticketId == "0"){
        $ticketId = "";
    }
    if($donationAmount == "0"){
        $donationAmount = "";
    }
    $data = [
        'order_id'  => '',
        'event_id'  => (int)$servvEventId,
        'product_id' => $variantId,
        'price' => 0,
        'quantity' => $quantity,
        'email' => $email,
        'first_name' => sanitize_text_field(wp_unslash($_POST['first_name'] ?? '')),
        'last_name' => sanitize_text_field(wp_unslash($_POST['last_name'] ?? '')),
        'ticket_id' => $ticketId,
        'donation_amount' => $donationAmount,
        'additional_registrants' => $additionalRegistrants,
        'is_free'   => true,
        'same_for_all'   => $sameForAll,
        'event_provider' => $servvLocationType == 'offline' ? 'offline' : 'zoom',
        'event_type' => $servvEventType,

    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    if(!is_null($currentQuantity)) {
        $newQuantity = $currentQuantity - $quantity;
        !empty($occurrenceId) ? $quantities[$occurrenceId] = $newQuantity : $quantities[0] = $newQuantity;
        update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));
    }

    $n8nData = $data;
    $n8nData['wp_post_id'] = $postId;
    $n8nData['wp_post_url'] = get_permalink($postId);
    servv_n8n_new_booking_trigger($n8nData);
    wp_send_json_success(['message' => 'Free event successful!']);
    exit();

}

function servv_order_payment_success(WP_REST_Request $request)
{
    $requestData = json_decode($request->get_body(), true);
    $chargeId = $requestData['charge_id'] ?? null;
    $invoiceUrl = $requestData['invoice_url'] ?? null;
    $amount = $requestData['amount'] ?? null;
    $currency = $requestData['currency'] ?? '';
    $currency = strtoupper($currency);
    $event_id = $requestData['event_id'] ?? null;
    $occurrenceId = $requestData['occurrence_id'] ?? null;
    $quantity = $requestData['quantity'] ?? null;
    $email = $requestData['email'] ?? '';
    $firstName = $requestData['first_name'] ?? '';
    $lastName = $requestData['last_name'] ?? '';
    $ticketId = $requestData['ticket_id'] ?? '';
    $donationAmount = $requestData['donation_amount'] ?? '';
    $additionalRegistrants = $requestData['additional_registrants'] ?? '';
    $sameForAll = $requestData['same_for_all'] ?? 0;
    if(empty($email)) {
        return;
    }
    $post = servv_get_post_by_meta_value('servv_event_id', $event_id);
    if(empty($post)) {
        exit();
    }

    $postId = $post->ID;

    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    if(!is_null($currentQuantity)) {
        $newQuantity = $currentQuantity - $quantity;
        !empty($occurrenceId) ? $quantities[$occurrenceId] = $newQuantity : $quantities[0] = $newQuantity;
        update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));
    }

    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';

    $apiRoute = '/wordpress/neworder';
    $variantId = $postId.'0';
    if(!empty($occurrenceId)) {
        $variantId .= $occurrenceId;
    }
    $ticketId = (string)$ticketId;
    if($ticketId == "0"){
        $ticketId = "";
    }
    $donationAmount = (string)$donationAmount;
    if($donationAmount == "0"){
        $donationAmount = "";
    }
    $amount = servv_format_amount_from_stripe($amount, $currency);
    $data = [
        'order_id'  => $chargeId,
        'invoice_url'  => $invoiceUrl,
        'event_id'  => (int)$event_id,
        'product_id' => $variantId,
        'price' => (float)$amount,
        'quantity' => (int)$quantity,
        'email' => $email,
        'first_name' => $firstName,
        'last_name' => $lastName,
        'ticket_id' => $ticketId,
        'donation_amount' => $donationAmount,
        'additional_registrants' => $additionalRegistrants,
        'same_for_all' => (bool)$sameForAll,
        'event_provider' => $servvLocationType == 'offline' ? 'offline' : 'zoom',
        'event_type' => $servvEventType,

    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    $n8nData = $data;
    $n8nData['wp_post_id'] = $postId;
    $n8nData['wp_post_url'] = get_permalink($postId);
    servv_n8n_new_booking_trigger($n8nData);
}


function servv_order_payment_refund(WP_REST_Request $request)
{
    $requestData = json_decode($request->get_body(), true);
    $chargeId = $requestData['charge_id'] ?? null;
    $refundId = $requestData['refund_id'] ?? null;
    $currency = $requestData['currency'] ?? '';
    $currency = strtoupper($currency);
    $amount = $requestData['amount'] ?? 0;
    $refundAmount = $requestData['refund_amount'] ?? 0;
    $event_id = $requestData['event_id'] ?? null;
    $occurrenceId = $requestData['occurrence_id'] ?? null;
    $refundQuantity = $requestData['quantity'] ?? null;

    $post = servv_get_post_by_meta_value('servv_event_id', $event_id);
    if(empty($post)) {
        exit();
    }
    if($refundAmount < $amount) {
        exit();
    }
    $postId = $post->ID;
    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;


    $apiRoute = '/wordpress/refundorder';
    $variantId = $postId.'0';
    if(!empty($occurrenceId)) {
        $variantId .= $occurrenceId;
    }


    $data = [
        'order_id'  => $chargeId,
        'product_id' => $variantId,
        'quantity' => (int)$refundQuantity,
        'refund_id' => $refundId,
        'refund_amount' => 0,
//        'refund_amount' => $refundAmountConverted
    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $data, 'POST');
        //    $refundAmountConverted = servv_format_amount_from_stripe($refundAmount, $currency);
//    $amountConverted = servv_format_amount_from_stripe($amount, $currency);
//    $itemPrice = round($amountConverted/$quantity,2);
//    $refundQuantity = $itemPrice == 0 ? $quantity ?? 1 : round($refundAmountConverted/$itemPrice);
        if(!is_null($currentQuantity)) {
            $newQuantity = $currentQuantity + $refundQuantity;
            !empty($occurrenceId) ? $quantities[$occurrenceId] = $newQuantity : $quantities[0] = $newQuantity;
            update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));
        }
    } catch(\Exception $e) {}
}


function servv_get_event_questions_list()
{
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $formType = absint($_POST['form_type'] ?? 0);
    $post = get_post($postId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/wordpress/events/questions/'.$servvEventId;
    $queryString = http_build_query([
        'event_provider' => $servvLocationType,
        'event_type' => $servvEventType,
        'form_type' => $formType
    ]);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    wp_send_json($responseBody);
    exit();
}

function servv_add_event_answer()
{
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- input is sanitized. False warning
    $raw_answers = wp_unslash( $_POST['answers'] ?? [] );
    $answers = is_array( $raw_answers )
        ? array_map(function ($answer) {
            return is_array($answer)
                ? ['id' => absint($answer['id'] ?? 0), 'text' => sanitize_text_field($answer['text'] ?? '')]
                : sanitize_text_field($answer);
        }, $raw_answers )
        : [];
    $occurrenceId = sanitize_text_field(wp_unslash($_POST['occurrence_id'] ?? ''));
    $post = get_post($postId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/wordpress/events/questions';
    $queryString = http_build_query([
        'event_provider' => $servvLocationType,
        'event_type' => $servvEventType,
        'occurrence_id' => $occurrenceId
    ]);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    $requestBody = [
        'customer_email' => $email,
        'questions' => $answers,
    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    wp_send_json($responseBody);
    exit();
}


function servv_add_to_waitinglist()
{
    check_ajax_referer('payment_nonce', 'security');

    $postId = absint($_POST['post_id'] ?? 0);
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $name = sanitize_text_field(wp_unslash($_POST['name'] ?? ''));
    $occurrenceId = sanitize_text_field(wp_unslash($_POST['occurrence_id'] ?? ''));
    $post = get_post($postId);
    if(empty($post)) {
        wp_send_json_error(['message' => 'Unknown post']);
        exit();
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        wp_send_json_error(['message' => 'Invalid post id.', 'status' => 404]);
        exit();
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $servvEventType = get_post_meta($postId, 'servv_event_type', true) ?: 'meeting';
    $apiRoute = '/wordpress/events/waitinglist/'.$servvEventId;
    $queryString = http_build_query([
        'event_provider' => $servvLocationType,
        'event_type' => $servvEventType,
        'occurrence_id' => $occurrenceId
    ]);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    $requestBody = [
        'email' => $email,
        'name' => $name,
    ];
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    wp_send_json($responseBody);
    exit();
}


function servv_get_events_filtered_list_dates()
{
    check_ajax_referer('payment_nonce', 'security');
    $apiRoute = '/wordpress/filter/meetings/dates';
    $params = [];
    if(!empty($_POST['date'])) {
        $params['date'] = sanitize_text_field(wp_unslash($_POST['date']));
    }
    if(!empty($_POST['start_datetime'])) {
        $params['start_datetime'] = sanitize_text_field(wp_unslash($_POST['start_datetime']));
    }
    if(!empty($_POST['end_datetime'])) {
        $params['end_datetime'] = sanitize_text_field(wp_unslash($_POST['end_datetime']));
    }
    if(!empty($_POST['search'])) {
        $params['search'] = sanitize_text_field(wp_unslash($_POST['search']));
    }
    if(!empty($_POST['location_id'])) {
        $params['location_id'] = array_map( 'absint', (array)$_POST['location_id']);
    }
    if(!empty($_POST['language_id'])) {
        $params['language_id'] = array_map( 'absint', (array)$_POST['language_id']);
    }
    if(!empty($_POST['category_id'])) {
        $params['category_id'] = array_map( 'absint', (array)$_POST['category_id']);
    }
    if(!empty($_POST['member_id'])) {
        $params['member_id'] = array_map( 'absint', (array)$_POST['member_id']);
    }
    if(!empty($_POST['team_id'])) {
        $params['team_id'] = array_map( 'absint', (array)$_POST['team_id']);
    }
    $queryString = servv_build_api_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }

    wp_send_json($responseBody);
    exit();
}


function servv_get_events_filtered_list()
{
    check_ajax_referer('payment_nonce', 'security');
    $apiRoute = '/wordpress/filter/meetings';
    $params = [];
    if(!empty($_POST['page'])) {
        $params['page'] = absint($_POST['page']);
    }
    if(!empty($_POST['page_size'])) {
        $params['page_size'] = absint($_POST['page_size']);
    }
    if(!empty($_POST['date'])) {
        $params['date'] = sanitize_text_field(wp_unslash($_POST['date']));
    }
    if(!empty($_POST['start_datetime'])) {
        $params['start_datetime'] = sanitize_text_field(wp_unslash($_POST['start_datetime']));
    }
    if(!empty($_POST['end_datetime'])) {
        $params['end_datetime'] = sanitize_text_field(wp_unslash($_POST['end_datetime']));
    }
    if(!empty($_POST['search'])) {
        $params['search'] = sanitize_text_field(wp_unslash($_POST['search']));
    }
    if(!empty($_POST['location_id'])) {
        $params['location_id'] = array_map( 'absint', (array)$_POST['location_id']);
    }
    if(!empty($_POST['language_id'])) {
        $params['language_id'] = array_map( 'absint', (array)$_POST['language_id']);
    }
    if(!empty($_POST['category_id'])) {
        $params['category_id'] = array_map( 'absint', (array)$_POST['category_id']);
    }
    if(!empty($_POST['member_id'])) {
        $params['member_id'] = array_map( 'absint', (array)$_POST['member_id']);
    }
    if(!empty($_POST['team_id'])) {
        $params['team_id'] = array_map( 'absint', (array)$_POST['team_id']);
    }
    if(!empty($_POST['without_occurrences'])) {
        $params['without_occurrences'] = (bool)$_POST['without_occurrences'];
    }
    $queryString = servv_build_api_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        wp_send_json_error(['message' => 'Bad api response. '.$e->getMessage(), 'status' => $e->getCode()]);
        exit();
    }
    $result = [];
    $currency = get_option('servv_currency', 'USD');
    foreach ($responseBody['meetings'] ?? [] as $k => $item) {
        $product = $item['product'] ?? [];
        $occurrenceId = $item['occurrence_id'] ?? null;
        $post = servv_get_post_by_meta_value('servv_event_id', $item['id']);
        if(empty($post)) {
            continue;
        }
        $postId = $post->ID;
        $product['post_id'] = $postId;
        $product['post_url'] = get_permalink($postId);
        $product['image_url'] = servv_get_post_image_url($postId);
        $product['currency'] = $currency;

        $quantities = get_post_meta($postId, 'servv_event_quantities', true);
        $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
        $currentQuantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
        $product['current_quantity'] = $currentQuantity;
        $item['product'] = $product;
        $result[] = $item;
    }
    $responseBody['meetings'] = $result;
    wp_send_json($responseBody);
    exit();
}
