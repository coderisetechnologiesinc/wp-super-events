<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
require_once __DIR__ . '/ajax_routes.php';
require_once __DIR__ . '/ajax/events/events.php';
require_once __DIR__ . '/ajax/zoom/zoom.php';
require_once __DIR__ . '/ajax/calendar/calendar.php';
require_once __DIR__ . '/ajax/mail/mail.php';
require_once __DIR__ . '/ajax/stripe/stripe.php';
require_once __DIR__ . '/ajax/shop/shop.php';
require_once __DIR__ . '/ajax/filters/filters.php';
require_once __DIR__ . '/ajax/analytics/analytics.php';
require_once __DIR__ . '/ajax/mobile/mobile.php';
require_once __DIR__ . '/ajax/mobile/checkins.php';
