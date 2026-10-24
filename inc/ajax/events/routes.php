<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/qa/routes.php';
require_once __DIR__ . '/bookings/routes.php';
require_once __DIR__ . '/tickets/routes.php';

add_action('rest_api_init', function () {
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_data',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
        'args' => [
            'occurrence_id' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/data/generate', [
        'methods'  => 'POST',
        'callback' => 'servv_generate_event_data',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'with_image' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_event',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'occurrence_id' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<event_id>\d+)/(?P<type>\w+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_event_in_servv',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_event',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
        'args' => [
            'occurrence_id' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/occurrences', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_occurrences',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'page' => [
                'required' => false,
            ],
            'start_datetime' => [
                'required' => false,
            ],
            'end_datetime' => [
                'required' => false,
            ],
            'page_size' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/registrants', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_registrants',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'page' => [
                'required' => false,
            ],
            'page_size' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/registrants/resend', [
        'methods'  => 'POST',
        'callback' => 'servv_resend_event_registrants_emails',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/registrants/(?P<registrant_id>\d+)/resend', [
        'methods'  => 'POST',
        'callback' => 'servv_resend_event_registrant_email',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/registrants/(?P<registrant_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_event_registrant',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/waitinglist', [
        'methods'  => 'GET',
        'callback' => 'servv_get_waitinglist',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'page' => [
                'required' => false,
            ],
            'page_size' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/events/(?P<type>\w+)', [
        'methods'  => 'POST',
        'callback' => 'servv_create_event',
        'permission_callback' => 'servv_validate_ajax_permissions'
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/events/(?P<type>\w+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_events_list',
        'permission_callback' => 'servv_validate_ajax_permissions',
        'args' => [
            'type' => [
                'required' => true,
                'validate_callback' => function ($param, $request, $key) {
                    return in_array($param, ['offline', 'zoom']);
                },
            ],
            'page' => [
                'required' => false,
            ],
            'start_datetime' => [
                'required' => false,
            ],
            'end_datetime' => [
                'required' => false,
            ],
            'page_size' => [
                'required' => false,
            ],
            'search' => [
                'required' => false,
            ],
            'hide_recurring' => [
                'required' => false,
            ],
            'hide_one_time' => [
                'required' => false,
            ],
            'without_occurrences' => [
                'required' => false,
            ],
            'is_past' => [
                'required' => false,
            ],
        ],
    ]);
    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_questions',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions', [
        'methods'  => 'POST',
        'callback' => 'servv_create_event_question',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/answers', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_answers',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/(?P<question_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'servv_get_event_question',
        'permission_callback' => 'servv_validate_ajax_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/(?P<question_id>\d+)', [
        'methods'  => 'PATCH',
        'callback' => 'servv_update_event_question',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);

    register_rest_route(servv_plugin_get_config('plugin_api_namespace'), '/event/(?P<post_id>\d+)/questions/(?P<question_id>\d+)', [
        'methods'  => 'DELETE',
        'callback' => 'servv_delete_event_question',
        'permission_callback' => 'servv_validate_ajax_post_update_permissions',
    ]);
});