<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

const SERVV_CHECKINS_DB_VERSION = '1';
const SERVV_CHECKIN_ACTIONS = ['check_in', 'cancel_check_in'];

function servv_checkins_tables()
{
    global $wpdb;
    return [
        'tickets'    => $wpdb->prefix.'servv_checkins',
        'operations' => $wpdb->prefix.'servv_checkin_operations',
    ];
}

function servv_checkins_install()
{
    if (get_option('servv_checkins_db_version') === SERVV_CHECKINS_DB_VERSION) {
        return;
    }
    global $wpdb;
    require_once ABSPATH.'wp-admin/includes/upgrade.php';
    $tables = servv_checkins_tables();
    $charset = $wpdb->get_charset_collate();
    dbDelta("CREATE TABLE {$tables['tickets']} (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        post_id bigint(20) unsigned NOT NULL,
        occurrence_id varchar(32) NOT NULL DEFAULT '',
        issued_ticket_id varchar(64) NOT NULL,
        status varchar(20) NOT NULL,
        changed_at datetime NOT NULL,
        revision bigint(20) unsigned NOT NULL,
        device_id varchar(64) NOT NULL DEFAULT '',
        user_id bigint(20) unsigned NOT NULL DEFAULT 0,
        PRIMARY KEY  (id),
        UNIQUE KEY ticket (post_id,occurrence_id,issued_ticket_id),
        KEY context_revision (post_id,occurrence_id,revision)
    ) $charset;");
    dbDelta("CREATE TABLE {$tables['operations']} (
        seq bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        operation_id varchar(36) NOT NULL,
        post_id bigint(20) unsigned NOT NULL,
        occurrence_id varchar(32) NOT NULL DEFAULT '',
        issued_ticket_id varchar(64) NOT NULL,
        action varchar(20) NOT NULL,
        occurred_at datetime NOT NULL,
        received_at datetime NOT NULL,
        device_id varchar(64) NOT NULL DEFAULT '',
        user_id bigint(20) unsigned NOT NULL DEFAULT 0,
        result varchar(20) NOT NULL,
        PRIMARY KEY  (seq),
        UNIQUE KEY operation (operation_id)
    ) $charset;");
    update_option('servv_checkins_db_version', SERVV_CHECKINS_DB_VERSION, false);
}

function servv_checkins_ticket_state($row, $postId, $occurrenceId, $issuedTicketId)
{
    return [
        'issued_ticket_id' => $issuedTicketId,
        'event_id'         => (int)$postId,
        'occurrence_id'    => $occurrenceId === '' ? null : $occurrenceId,
        'status'           => $row ? $row->status : 'not_checked_in',
        'changed_at'       => $row ? gmdate('Y-m-d\TH:i:s\Z', strtotime($row->changed_at.' UTC')) : null,
        'revision'         => $row ? (int)$row->revision : 0,
    ];
}

function servv_checkins_can_edit($postId)
{
    return $postId > 0 && current_user_can('edit_post', $postId) && !empty(get_post_meta($postId, 'servv_event_id', true));
}

function servv_get_mobile_checkins($request)
{
    servv_checkins_install();
    global $wpdb;
    $tables = servv_checkins_tables();
    $postId = (int)$request['event_id'];
    if (!servv_checkins_can_edit($postId)) {
        return new WP_Error('rest_forbidden', 'You cannot manage check-ins for this event.', ['status' => 403]);
    }
    $occurrenceId = (string)($request['occurrence_id'] ?? '');
    $since = (int)($request['since_revision'] ?? 0);
    $rows = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM {$tables['tickets']} WHERE post_id = %d AND occurrence_id = %s AND revision > %d ORDER BY revision",
        $postId, $occurrenceId, $since
    ));
    $revision = (int)$wpdb->get_var($wpdb->prepare(
        "SELECT COALESCE(MAX(revision), 0) FROM {$tables['tickets']} WHERE post_id = %d AND occurrence_id = %s",
        $postId, $occurrenceId
    ));
    return [
        'revision' => $revision,
        'reset'    => $since > $revision,
        'tickets'  => array_map(function ($row) use ($postId, $occurrenceId) {
            return servv_checkins_ticket_state($row, $postId, $occurrenceId, $row->issued_ticket_id);
        }, $rows ?: []),
    ];
}

function servv_sync_mobile_checkins($request)
{
    servv_checkins_install();
    $body = $request->get_json_params();
    $deviceId = substr(sanitize_text_field($body['device_id'] ?? ''), 0, 64);
    $operations = $body['operations'] ?? [];
    if (!is_array($operations) || count($operations) > 500) {
        return new WP_Error('servv_invalid_operations', 'Send between 1 and 500 operations.', ['status' => 400]);
    }
    $results = [];
    foreach ($operations as $operation) {
        $results[] = servv_apply_checkin_operation(is_array($operation) ? $operation : [], $deviceId);
    }
    return ['results' => $results];
}

function servv_apply_checkin_operation($operation, $deviceId)
{
    global $wpdb;
    $tables = servv_checkins_tables();
    $operationId = strtolower(sanitize_text_field($operation['operation_id'] ?? ''));
    $issuedTicketId = substr(sanitize_text_field($operation['issued_ticket_id'] ?? ''), 0, 64);
    $postId = (int)($operation['event_id'] ?? 0);
    $occurrenceId = isset($operation['occurrence_id']) && $operation['occurrence_id'] !== null ? substr((string)$operation['occurrence_id'], 0, 32) : '';
    $action = $operation['action'] ?? '';
    $occurredAt = strtotime((string)($operation['occurred_at'] ?? ''));
    $baseRevision = isset($operation['base_revision']) ? (int)$operation['base_revision'] : null;

    $reject = function ($message) use ($operationId) {
        return ['operation_id' => $operationId, 'result' => 'rejected', 'message' => $message];
    };
    if (!preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/', $operationId)) {
        return $reject('Invalid operation_id.');
    }
    if ($issuedTicketId === '' || !in_array($action, SERVV_CHECKIN_ACTIONS, true) || !$occurredAt) {
        return $reject('Invalid operation.');
    }
    if (!servv_checkins_can_edit($postId)) {
        return $reject('You cannot manage check-ins for this event.');
    }

    $wpdb->query('START TRANSACTION');
    $existing = $wpdb->get_row($wpdb->prepare("SELECT result FROM {$tables['operations']} WHERE operation_id = %s", $operationId));
    $row = $wpdb->get_row($wpdb->prepare(
        "SELECT * FROM {$tables['tickets']} WHERE post_id = %d AND occurrence_id = %s AND issued_ticket_id = %s FOR UPDATE",
        $postId, $occurrenceId, $issuedTicketId
    ));
    if ($existing) {
        $wpdb->query('COMMIT');
        return [
            'operation_id' => $operationId,
            'result'       => 'duplicate',
            'original'     => $existing->result,
            'ticket'       => servv_checkins_ticket_state($row, $postId, $occurrenceId, $issuedTicketId),
        ];
    }

    $current = $row ? $row->status : 'not_checked_in';
    $target = $action === 'check_in' ? 'checked_in' : 'not_checked_in';
    if ($current === $target) {
        $result = 'already';
    } elseif ($row && $baseRevision !== null && (int)$row->revision > $baseRevision && $row->device_id !== $deviceId) {
        $result = 'conflict';
    } else {
        $result = 'applied';
    }

    if ($result === 'applied') {
        $forwarded = servv_checkins_forward_to_servv($postId, $occurrenceId, $issuedTicketId, $action);
        if (is_wp_error($forwarded)) {
            $wpdb->query('ROLLBACK');
            return [
                'operation_id' => $operationId,
                'result'       => 'retry',
                'message'      => $forwarded->get_error_message(),
            ];
        }
    }

    $now = gmdate('Y-m-d H:i:s');
    $wpdb->insert($tables['operations'], [
        'operation_id'     => $operationId,
        'post_id'          => $postId,
        'occurrence_id'    => $occurrenceId,
        'issued_ticket_id' => $issuedTicketId,
        'action'           => $action,
        'occurred_at'      => gmdate('Y-m-d H:i:s', $occurredAt),
        'received_at'      => $now,
        'device_id'        => $deviceId,
        'user_id'          => get_current_user_id(),
        'result'           => $result,
    ]);
    $seq = (int)$wpdb->insert_id;

    if ($result === 'applied') {
        $wpdb->replace($tables['tickets'], [
            'id'               => $row ? $row->id : null,
            'post_id'          => $postId,
            'occurrence_id'    => $occurrenceId,
            'issued_ticket_id' => $issuedTicketId,
            'status'           => $target,
            'changed_at'       => gmdate('Y-m-d H:i:s', $occurredAt),
            'revision'         => $seq,
            'device_id'        => $deviceId,
            'user_id'          => get_current_user_id(),
        ]);
        $row = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM {$tables['tickets']} WHERE post_id = %d AND occurrence_id = %s AND issued_ticket_id = %s",
            $postId, $occurrenceId, $issuedTicketId
        ));
    }
    $wpdb->query('COMMIT');

    return [
        'operation_id' => $operationId,
        'result'       => $result,
        'ticket'       => servv_checkins_ticket_state($row, $postId, $occurrenceId, $issuedTicketId),
    ];
}

function servv_checkins_forward_to_servv($postId, $occurrenceId, $issuedTicketId, $action)
{
    if (!preg_match('/^registrant-(\d+)$/', $issuedTicketId, $matches)) {
        return true;
    }
    if ((get_post_meta($postId, 'servv_event_location_type', true) ?: 'offline') !== 'offline') {
        return true;
    }
    $servvEventId = get_post_meta($postId, 'servv_event_id', true);
    $route = '/offline/meetings/'.$servvEventId.'/participants/'.$matches[1];
    if ($action === 'check_in' && $occurrenceId !== '') {
        $route .= '?occurrence_id='.rawurlencode($occurrenceId);
    }
    try {
        servvSendApiRequest($route, $action === 'check_in' ? ['occurrence_id' => $occurrenceId ?: null] : [], $action === 'check_in' ? 'POST' : 'DELETE');
    } catch (\Exception $e) {
        return new WP_Error('servv_checkin_forward_failed', 'Servv did not accept the check-in yet. It will be retried.');
    }
    return true;
}
