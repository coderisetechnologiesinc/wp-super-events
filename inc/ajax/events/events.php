<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/qa/qa.php';
require_once __DIR__ . '/bookings/bookings.php';
require_once __DIR__ . '/tickets/tickets.php';
function servv_get_event_data($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $quantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    $responseBody['product']['current_quantity'] = $quantity;
    $responseBody['wp_post_url'] = get_permalink($postId);
    $responseBody['featured_image_url'] = get_the_post_thumbnail_url($postId, 'large') ?: '';
    return $responseBody;
}

function servv_get_event_occurrences($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/occurrences' :
        '/zoom/meetings/'.$servvEventId.'/occurrences';
    $params = array_filter($request->get_params(), function ($value) {
        return !empty($value);
    });
    unset($params['post_id']);
    $queryString = http_build_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_get_events_list($request)
{
    $postLocationType = $request['type'];
    $apiRoute = $postLocationType == 'offline' ? '/offline/meetings' : '/zoom/meetings';
    $params = array_filter($request->get_params(), function ($value) {
        return $value !== "";
    });
    unset($params['type']);
    $queryString = http_build_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}


function servv_delete_event($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    if(empty($occurrenceId)) {
        wp_delete_post($postId, true);
    } else {
        $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/occurrences' :
            '/zoom/meetings/'.$servvEventId.'/occurrences';
        try {
            $responseBodyOccurrences = servvSendApiRequest($apiRoute, [], 'GET');
        } catch(\Exception $e) {
            return new WP_Error($e->getCode(), 'Bad api get response. '.$e->getMessage(), ['status' => $e->getCode()]);
        }
        if(empty($responseBodyOccurrences['total_records'])){
            wp_delete_post($postId, true);
        }
    }
    return $responseBody;
}


function servv_delete_event_in_servv($request)
{
    $servvEventId = $request['event_id'];
    $servvLocationType = $request['type'];
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_create_event($request)
{
    $event = $request['meeting'] ?? [];
    $product = $request['product'] ?? [];
    $types = $request['types'] ?? [];
    $customFields = $request['custom_fields'] ?? [];
    $notifications = $request['notifications'] ?? [];
    $tickets =  $request['tickets'] ?? [];
    $eventLocationType = $request['type'] ?? '';
    $imageUrl = $request['image_url'] ?? '';
    $imageContent = $request['image_content'] ?? '';
    if(empty($event['startTime'] ?? '') || empty($event['duration'] ?? '')) {
        return new WP_Error(400, 'Invalid start time or duration.', array('status' => 400));
    }

    $postaData = [
        'post_title'   => $event['topic'] ?? '',
        'post_content' => $event['agenda'] ?? '',
        'post_status'  => 'publish',
        'post_type'    => 'post',
        'post_author'  => get_current_user_id(),
    ];

    $postId = wp_insert_post($postaData, true);

    if ( is_wp_error($postId) ) {
        return $postId;
    }

    try {
        $resultData = servvCreateEventSendRequest($postId, $postaData['post_title'], $event, $product, $types, $customFields,
            $notifications, $tickets, $eventLocationType);
    } catch (Exception $e) {
        return new WP_Error(400, 'Bad create post api response. '.$e->getMessage(), ['status' => 400]);
    }
    $imageError = servv_attach_event_image($postId, $imageUrl, $imageContent);
    if (!empty($imageError)) {
        $resultData['image_error'] = $imageError;
    }
    $resultData['featured_image_url'] = get_the_post_thumbnail_url($postId, 'large') ?: '';
    $resultData['wp_post_id'] = $postId;
    return $resultData;
}



function servv_update_event($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId :
        '/zoom/meetings/'.$servvEventId;
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    $requestBody = $request->get_json_params();
    if (empty($requestBody)) {
        return new WP_Error(400, 'Empty request body. The server may have rejected the request size.',
            ['status' => 400]);
    }
    $requestBody['shop_post_object_id'] = (int)$postId;
    $imageUrl = $requestBody['image_url'] ?? '';
    $imageContent = $requestBody['image_content'] ?? '';
    unset($requestBody['image_url'], $requestBody['image_content']);
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'PATCH');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    // A rejected cover must not undo an event the API has already updated.
    $imageError = servv_attach_event_image($postId, $imageUrl, $imageContent);
    if (!empty($imageError)) {
        $responseBody['image_error'] = $imageError;
    }
    $responseBody['featured_image_url'] = get_the_post_thumbnail_url($postId, 'large') ?: '';
    $product = $requestBody['product'] ?? [];
    $registrants = $requestBody['registrants'] ?? [];
    $quantity = $product['quantity'] !== null ? (int)$product['quantity'] - count($registrants) : null;

    if(!empty($occurrenceId)){
        $quantities = get_post_meta($postId, 'servv_event_quantities', true);
        $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
        $quantities[$occurrenceId] = $quantity;
        update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));
    } else {
        try {
            servvUpdateQuantityWithRequest($postId, $servvEventId, $servvLocationType, $quantity);
        } catch(Exception $e) {
            return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
        }
    }
    return $responseBody;
}


function servv_get_event_registrants($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/registrants' :
        '/zoom/meetings/'.$servvEventId.'/registrants';
    $params = array_filter($request->get_params(), function ($value) {
        return !empty($value);
    });
    unset($params['post_id']);
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $params['occurrence_id'] = $occurrenceId;
    }
    $queryString = http_build_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_get_waitinglist($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/waitinglist' :
        '/zoom/meetings/'.$servvEventId.'/waitinglist';
    $params = array_filter($request->get_params(), function ($value) {
        return !empty($value);
    });
    unset($params['post_id']);
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $params['occurrence_id'] = $occurrenceId;
    }
    $queryString = http_build_query($params);
    if (!empty($queryString)) {
        $apiRoute .= '?' . $queryString;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute);
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_resend_event_registrants_emails($request)
{
    $postId = $request['post_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/registrants/resend' :
        '/zoom/meetings/'.$servvEventId.'/registrants/resend';
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_resend_event_registrant_email($request)
{
    $postId = $request['post_id'];
    $registrantId = $request['registrant_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/registrants/'.$registrantId.'/resend' :
        '/zoom/meetings/'.$servvEventId.'/registrants/'.$registrantId.'/resend';
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    return $responseBody;
}

function servv_delete_event_registrant($request)
{
    $postId = $request['post_id'];
    $registrantId = $request['registrant_id'];
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    if(empty($servvEventId)) {
        return new WP_Error(404, 'Invalid post id.', array('status' => 404));
    }
    $servvLocationType = get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline';
    $apiRoute = $servvLocationType == 'offline' ? '/offline/meetings/'.$servvEventId.'/registrants/'.$registrantId :
        '/zoom/meetings/'.$servvEventId.'/registrants/'.$registrantId;
    $occurrenceId = $request->get_param('occurrence_id');
    if(!empty($occurrenceId)) {
        $apiRoute .= '?occurrence_id='.$occurrenceId;
    }
    try {
        $responseBody = servvSendApiRequest($apiRoute, [], 'DELETE');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }
    $quantities = get_post_meta($postId, 'servv_event_quantities', true);
    $quantities = !empty($quantities) ? json_decode($quantities, true) : [];
    $quantity = !empty($occurrenceId) ? $quantities[$occurrenceId] ?? null : $quantities[0] ?? null;
    if(!is_null($quantity)) {
        !empty($occurrenceId) ? $quantities[$occurrenceId]++ : $quantities[0]++;
        update_post_meta($postId, 'servv_event_quantities', json_encode($quantities));
    }
    return $responseBody;
}


function servv_generate_event_data($request)
{
    $apiRoute = '/wordpress/data/generate';
    $requestBody = $request->get_json_params();
    try {
        $responseBody = servvSendApiRequest($apiRoute, $requestBody, 'POST');
    } catch(\Exception $e) {
        return new WP_Error($e->getCode(), 'Bad api response. '.$e->getMessage(), ['status' => $e->getCode()]);
    }

    return $responseBody;
}