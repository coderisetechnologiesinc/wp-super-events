<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
function servv_get_post_by_meta_value($meta_key, $meta_value) {
    $posts = get_posts(array(
        'post_type'  => 'any', // Replace 'any' with your specific post type
        'meta_key'   => $meta_key,
        'meta_value' => $meta_value,
        'numberposts' => 1,
    ));
    return !empty($posts) ? $posts[0] : null; // Return the first post ID or null
}

function servv_parse_variant_id($variantId) {
    $variantId = (string) $variantId;
    $zeroPos = strrpos($variantId, '0');

    if ($zeroPos === false) {
        return [
            'event_id' => (int) $variantId,
            'occurrence_id' => null
        ];
    }
    $eventId = (int) substr($variantId, 0, $zeroPos);
    $occurrenceId = strlen($variantId) > ($zeroPos + 1) ? (int) substr($variantId, $zeroPos + 1) : null;

    return [
        'event_id' => $eventId,
        'occurrence_id' => $occurrenceId
    ];
}


function servv_build_api_query($params) {
    $queryParts = [];

    foreach ($params as $key => $value) {
        if (is_array($value)) {
            foreach ($value as $item) {
                $queryParts[] = urlencode($key) . '=' . urlencode($item);
            }
        } else {
            $queryParts[] = urlencode($key) . '=' . urlencode($value);
        }
    }

    return implode('&', $queryParts);
}


function get_array_item_by_field_value($field, $value, $array)
{
    $filtered = array_filter($array, function($item) use ($field, $value) {
        return $item[$field] == $value;
    });
    return reset($filtered);
}

function servv_format_amount_for_stripe($amount, $currency) {
    $zero_decimal_currencies = [
        'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA', 'PYG',
        'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
    ];

    $three_decimal_currencies = [
        'BHD', // Bahraini Dinar
        'JOD', // Jordanian Dinar
        'KWD', // Kuwaiti Dinar
        'OMR', // Omani Rial
        'TND'  // Tunisian Dinar
    ];

    $special_case_currencies = [
        'ISK', // Icelandic Króna
        'HUF', // Hungarian Forint
        'TWD', // New Taiwan Dollar
        'UGX'  // Ugandan Shilling
    ];

    $currency = strtoupper($currency); // Normalize currency code

    if (in_array($currency, $zero_decimal_currencies)) {
        return intval($amount); // No conversion needed (already in smallest unit)
    } elseif (in_array($currency, $three_decimal_currencies)) {
        return intval($amount * 1000); // Convert to 3 decimal places
    } elseif (in_array($currency, $special_case_currencies)) {
        return intval($amount * 100); // Convert to two-decimal format for Stripe compatibility
    } else {
        return intval($amount * 100); // Default: Multiply by 100 for standard currencies
    }
}

function servv_format_amount_from_stripe($amount, $currency) {
    $zero_decimal_currencies = [
        'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA', 'PYG',
        'RWF', 'UGX', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
    ];

    $three_decimal_currencies = [
        'BHD', // Bahraini Dinar
        'JOD', // Jordanian Dinar
        'KWD', // Kuwaiti Dinar
        'OMR', // Omani Rial
        'TND'  // Tunisian Dinar
    ];

    $special_case_currencies = [
        'ISK', // Icelandic Króna
        'HUF', // Hungarian Forint
        'TWD', // New Taiwan Dollar
        'UGX'  // Ugandan Shilling
    ];

    $currency = strtoupper($currency); // Normalize currency code

    if (in_array($currency, $zero_decimal_currencies)) {
        return floatval($amount); // No conversion needed (already in smallest unit)
    } elseif (in_array($currency, $three_decimal_currencies)) {
        return floatval($amount / 1000); // Convert from 3 decimal places
    } elseif (in_array($currency, $special_case_currencies)) {
        return floatval($amount / 100); // Convert from Stripe format
    } else {
        return floatval($amount / 100); // Default: Divide by 100 for standard currencies
    }
}

function servv_get_post_image_url($post_id, $default = '') {
    $thumbnail = get_the_post_thumbnail_url($post_id, 'full');
    if ($thumbnail) return $thumbnail;

    $post = get_post($post_id);
    if ($post && preg_match('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches)) {
        return $matches[1];
    }

    // Fallback to default image
    return $default ?: false;
}


function servv_js_redirect($redirectUrl) {
    wp_register_script('servv-plugin-redirect', '', [], SERVV_PLUGIN_VERSION, true);
    wp_enqueue_script('servv-plugin-redirect');
    wp_add_inline_script('servv-plugin-redirect', 'window.location.href = "' . esc_js(esc_url_raw($redirectUrl)) . '";');
}

function servv_decode_speshial_characters($value) {
    return is_string($value) ? wp_specialchars_decode($value, ENT_QUOTES) : $value;
}

function servv_attach_existing_media(int $post_id, string $image_url): bool {
    $attachment_id = attachment_url_to_postid($image_url);

    if (!$attachment_id) {
        return false;
    }

    set_post_thumbnail($post_id, $attachment_id);
    return true;
}


/**
 * Attaches a cover to an event post, from either an existing media URL or the
 * base64 image_content carried by the create and update payloads. Returns an
 * empty string on success, or the message to report alongside the saved event:
 * a cover is never worth failing the event itself over.
 */
function servv_attach_event_image(int $post_id, string $image_url = '', string $image_content = ''): string {
    // The admin always uploads the cover as base64 image_content, so it takes
    // precedence: image_url only attaches media that already exists here.
    if (!empty($image_content)) {
        $attachment_id = servv_attach_image_from_base64($post_id, $image_content);
        return is_wp_error($attachment_id) ? $attachment_id->get_error_message() : '';
    }
    if (!empty($image_url)) {
        return servv_attach_existing_media($post_id, $image_url)
            ? '' : 'The selected media could not be found in this site\'s media library.';
    }
    return '';
}


function servv_attach_image_from_base64(int $post_id, string $imageContent) {
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/image.php';
    require_once ABSPATH . 'wp-admin/includes/media.php';

    if (preg_match('#^data:([^;]+);base64,#', $imageContent)) {
        $imageContent = preg_replace('#^data:[^;]+;base64,#', '', $imageContent);
    }

    $bytes = base64_decode($imageContent, true);
    if ($bytes === false) {
        return new WP_Error('invalid_base64', 'Invalid base64 image_content', ['status' => 400]);
    }

    $tmp = wp_tempnam('servv-image');
    if (!$tmp) {
        return new WP_Error('tmp_failed', 'Could not create temp file', ['status' => 500]);
    }

    if (file_put_contents($tmp, $bytes) === false) {
        @unlink($tmp);
        return new WP_Error('write_failed', 'Could not write temp image', ['status' => 500]);
    }

    $mime = wp_get_image_mime($tmp);
    if (!$mime) {
        @unlink($tmp);
        return new WP_Error('invalid_image', 'Unsupported or invalid image data', ['status' => 415]);
    }

    $mime_to_ext = [
        'image/jpeg' => 'jpg',
        'image/png'  => 'png',
        'image/gif'  => 'gif',
        'image/webp' => 'webp',
    ];

    if (!isset($mime_to_ext[$mime])) {
        @unlink($tmp);
        return new WP_Error('unsupported_type', 'Only JPG/PNG/GIF/WEBP are allowed', ['status' => 415]);
    }

    $filename = 'servv-' . wp_generate_password(12, false) . '.' . $mime_to_ext[$mime];

    $file = [
        'name'     => $filename,
        'type'     => $mime,
        'tmp_name' => $tmp,
        'error'    => 0,
        'size'     => filesize($tmp),
    ];

    $attachment_id = media_handle_sideload($file, $post_id);

    if (is_wp_error($attachment_id)) {
        @unlink($tmp);
        return $attachment_id;
    }

    set_post_thumbnail($post_id, $attachment_id);

    return (int) $attachment_id;
}