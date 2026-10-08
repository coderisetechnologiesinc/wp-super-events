<?php
/** WordPress configuration and embedding for the Vue events widget. */
if (!defined('ABSPATH')) { exit; }

function servv_widget_v2_schema() {
    static $schema;
    if ($schema === null) {
        $schema = json_decode(file_get_contents(__DIR__ . '/widget-v2-schema.json'), true) ?: [];
    }
    return $schema;
}

function servv_widget_v2_defaults() {
    $defaults = [];
    foreach (servv_widget_v2_schema() as $field) {
        if (isset($field['id'])) {
            $defaults[$field['id']] = $field['default'] ?? '';
        }
    }
    return $defaults;
}

function servv_widget_v2_sanitize($input) {
    $output = [];
    if (!is_array($input)) { return $output; }
    foreach (servv_widget_v2_schema() as $field) {
        $key = $field['id'] ?? '';
        if (!$key || !array_key_exists($key, $input) || !is_scalar($input[$key])) { continue; }
        $value = $input[$key];
        switch ($field['type']) {
            case 'checkbox':
                $value = filter_var($value, FILTER_VALIDATE_BOOLEAN);
                break;
            case 'range':
                if (!is_numeric($value)) { continue 2; }
                $value = max($field['min'], min($field['max'], (float)$value));
                $step = $field['step'] ?? 1;
                $value = $field['min'] + round(($value - $field['min']) / $step) * $step;
                break;
            case 'select':
                if (!in_array((string)$value, array_column($field['options'], 'value'), true)) { continue 2; }
                $value = (string)$value;
                break;
            case 'color':
                if (!preg_match('/^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i', $value)) { continue 2; }
                $value = strtolower($value);
                break;
            case 'url':
                $value = str_replace(['"', '[', ']'], ['%22', '%5B', '%5D'], esc_url_raw($value, ['https', 'http']));
                break;
            default:
                $value = sanitize_text_field($value);
                // These values also become CSS/shortcode attributes.
                $value = str_replace([';', '{', '}', '<', '>', '[', ']', '"'], '', $value);
                $value = substr($value, 0, 300);
        }
        $output[$key] = $value;
    }
    return $output;
}

function servv_widget_v2_config($overrides = []) {
    return array_merge(servv_widget_v2_defaults(), servv_widget_v2_sanitize(get_option('servv_widget_v2_settings', [])), servv_widget_v2_sanitize($overrides));
}

function servv_widget_v2_admin_permissions() {
    check_ajax_referer('wp_rest', 'security');
    if (!current_user_can('manage_options')) {
        wp_send_json_error(['message' => 'You cannot edit widget settings.'], 403);
    }
}

add_action('wp_ajax_servv_widget_v2_settings', 'servv_widget_v2_settings');
function servv_widget_v2_settings() {
    servv_widget_v2_admin_permissions();
    if (isset($_POST['config'])) {
        $config = is_string($_POST['config']) ? json_decode(wp_unslash($_POST['config']), true) : null;
        if (!is_array($config)) { wp_send_json_error(['message' => 'Invalid widget settings.'], 400); }
        update_option('servv_widget_v2_settings', servv_widget_v2_sanitize($config), false);
    }
    wp_send_json_success(['config' => servv_widget_v2_config()]);
}

function servv_widget_v2_style_parts($skin) {
    $skin = (string)$skin;
    $separator = strpos($skin, '-');
    if ($separator === false) { return ['base' => $skin ?: 'default', 'scheme' => '']; }
    return ['base' => substr($skin, 0, $separator), 'scheme' => substr($skin, $separator + 1)];
}

function servv_widget_v2_skin_ids() {
    foreach (servv_widget_v2_schema() as $field) {
        if (($field['id'] ?? '') === 'widget_skin') {
            return array_column($field['options'] ?? [], 'value');
        }
    }
    return ['default'];
}

function servv_widget_v2_font_url($config) {
    $parts = servv_widget_v2_style_parts($config['widget_skin']);
    if ($parts['base'] === 'default' || $config['skin_custom_styles']) { return ''; }
    $families = [
        'polaris' => 'family=Inter:wght@400;450;550;650',
        'poster' => 'family=Anton&family=Archivo:wght@400;500;600;700',
        'neumorph' => 'family=Plus+Jakarta+Sans:wght@500;600;700;800',
        'swiss' => 'family=Inter:wght@400;500;700',
    ];
    if (!isset($families[$parts['base']])) { return ''; }
    return 'https://fonts.googleapis.com/css2?' . $families[$parts['base']] . '&display=swap';
}

function servv_widget_v2_sheets($config) {
    $parts = servv_widget_v2_style_parts($config['widget_skin']);
    $files = ['servv-events-v2.css'];
    if ($parts['base'] !== 'default') { $files[] = 'servv-events-v2-skin-' . $parts['base'] . '.css'; }
    if ($parts['scheme'] !== '') { $files[] = 'servv-events-v2-scheme-' . $config['widget_skin'] . '.css'; }
    $files[] = 'servv-events-v2-mobile.css';
    return $files;
}

function servv_widget_v2_style($config) {
    $vars = [];
    $set = function ($name, $value) use (&$vars) { $vars[] = '--svv-v2-' . $name . ':' . $value; };
    $set('container-width', $config['container_max_width'] . 'px');
    $set('container-padding', $config['container_padding'] . 'px');
    $set('grid-columns', $config['grid_columns_desktop']);
    $set('image-ratio', $config['image_aspect_ratio']);
    $set('drawer-width', $config['drawer_width']);
    $set('font', $config['use_theme_styles'] ? 'inherit' : $config['font_family']);
    $set('heading-font', $config['heading_font'] ?: $config['font_family']);
    $set('bg', $config['use_theme_styles'] ? 'var(--wp--preset--color--base, #ffffff)' : $config['color_background']);
    $parts = servv_widget_v2_style_parts($config['widget_skin']);
    $themed = $parts['scheme'] === '' && (!$config['use_theme_styles'] || $parts['base'] === 'default' || $config['skin_custom_styles']);
    if ($themed) {
        $colors = [
            'color_text' => 'text', 'color_text_muted' => 'text-muted', 'color_surface' => 'surface',
            'color_border' => 'border', 'color_primary' => 'primary', 'color_primary_hover' => 'primary-hover',
            'color_primary_text' => 'primary-text', 'color_accent' => 'accent', 'card_background' => 'card-bg',
            'card_text' => 'card-text', 'color_success' => 'success', 'color_warning' => 'warning',
            'color_critical' => 'critical', 'color_info' => 'info', 'calendar_date_text' => 'calendar-text',
            'calendar_marked_background' => 'calendar-marked-bg', 'calendar_selected_background' => 'calendar-selected-bg',
            'calendar_selected_text' => 'calendar-selected-text', 'calendar_today_border' => 'calendar-today-border',
            'drawer_background' => 'drawer-bg',
        ];
        foreach ($colors as $key => $name) { $set($name, $config[$key]); }
        if ($config['use_theme_styles']) {
            $set('text', 'var(--wp--preset--color--contrast, #17112d)');
            $set('primary', 'var(--wp--preset--color--accent, #6224e7)');
        }
        $set('skin-bg', $config['color_background']);
        $set('drawer-backdrop', 'rgba(23,17,45,' . ($config['drawer_backdrop_opacity'] / 100) . ')');
    }
    if ($parts['base'] === 'default' || $config['skin_custom_styles']) {
        $set('skin-font', $config['font_family']);
        $set('skin-heading-font', $config['heading_font'] ?: $config['font_family']);
        $set('font-size', $config['font_size_base'] . 'px');
    }
    if ($parts['base'] === 'default') {
        $set('radius', $config['card_border_radius'] . 'px');
        $set('card-shadow', $config['card_shadow']);
    }
    if ($config['background_image']) {
        $set('bg-image', 'url("' . esc_url_raw($config['background_image']) . '")');
        $set('bg-image-size', $config['background_image_display'] === 'tile' ? 'auto' : $config['background_image_display']);
        $set('bg-image-repeat', $config['background_image_display'] === 'tile' ? 'repeat' : 'no-repeat');
    }
    if ($config['background_overlay_style'] !== 'none') {
        $gradient = $config['background_overlay_style'] === 'radial' ? 'radial-gradient(circle at center,' : 'linear-gradient(' . $config['background_overlay_angle'] . 'deg,';
        $set('bg-overlay', $gradient . $config['background_overlay_from'] . ',' . $config['background_overlay_to'] . ')');
    }
    $set('bg-overlay-opacity', $config['background_overlay_opacity'] / 100);
    foreach ([1, 2, 3] as $number) {
        $hex = ltrim($config['glass_blob_color_' . $number], '#');
        if (strlen($hex) === 3) { $hex = $hex[0].$hex[0].$hex[1].$hex[1].$hex[2].$hex[2]; }
        $set('glass-blob-' . $number, 'rgba(' . hexdec(substr($hex, 0, 2)) . ',' . hexdec(substr($hex, 2, 2)) . ',' . hexdec(substr($hex, 4, 2)) . ',' . ($config['glass_blob_opacity'] / 100) . ')');
    }
    return implode(';', $vars);
}

function servv_widget_v2_font_handle($config) {
    $parts = servv_widget_v2_style_parts($config['widget_skin']);
    return 'servv-events-v2-fonts-' . $parts['base'];
}

function servv_widget_v2_enqueue($config, $with_fonts = true) {
    $base = plugin_dir_url(dirname(__DIR__) . '/servv.php') . 'widgetEventsV2/dist/';
    $path = dirname(__DIR__) . '/widgetEventsV2/dist/';
    $font = $with_fonts ? servv_widget_v2_font_url($config) : '';
    if ($font !== '') { wp_enqueue_style(servv_widget_v2_font_handle($config), $font, [], null); }
    foreach (servv_widget_v2_sheets($config) as $file) {
        if (is_file($path . $file)) { wp_enqueue_style('servv-' . basename($file, '.css'), $base . $file, [], filemtime($path . $file)); }
    }
    wp_enqueue_script('servv-events-v2', $base . 'servv-events-v2.js', [], is_file($path . 'servv-events-v2.js') ? filemtime($path . 'servv-events-v2.js') : SERVV_PLUGIN_VERSION, true);
}

add_shortcode('servv_events', 'servv_widget_v2_shortcode');
function servv_widget_v2_shortcode($atts = [], $content = null, $tag = '', $preview = false) {
    $config = servv_widget_v2_config(is_array($atts) ? $atts : []);
    if (!$config['show_events_widget']) { return ''; }
    servv_widget_v2_enqueue($config);
    $runtime = [
        'config' => $config, 'preview' => $preview,
        'stripeAccountId' => get_option('servv_stripe_account_id', ''),
        'ajaxUrl' => admin_url('admin-ajax.php'), 'nonce' => wp_create_nonce('payment_nonce'),
        // Registration collects the primary contact for guests and signed-in visitors alike.
        'context' => ['customerId' => '', 'shopCurrency' => get_option('servv_currency', 'USD')],
        'container' => ['currency' => get_option('servv_currency', 'USD'), 'locale' => str_replace('_', '-', determine_locale()), 'collections' => []],
    ];
    $id = wp_unique_id('servv-events-v2-');
    $glass_filter = '';
    $parts = servv_widget_v2_style_parts($config['widget_skin']);
    $inline_style = servv_widget_v2_style($config);
    if ($parts['base'] === 'glass') {
        $filter_id = $id . '-glass';
        $inline_style .= ';--svv-glass-distortion:url(#' . $filter_id . ')';
        $glass_filter = '<svg aria-hidden="true" focusable="false" width="0" height="0" style="position:absolute;overflow:hidden"><filter id="' . esc_attr($filter_id) . '" x="0%" y="0%" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise"/><feGaussianBlur in="noise" stdDeviation="2" result="blurred"/><feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G"/></filter></svg>';
    }
    $late_styles = '';
    if (!$preview && did_action('wp_head')) {
        ob_start();
        $handles = array_map(function ($file) { return 'servv-' . basename($file, '.css'); }, servv_widget_v2_sheets($config));
        if (servv_widget_v2_font_url($config) !== '') { array_unshift($handles, servv_widget_v2_font_handle($config)); }
        wp_print_styles($handles);
        $late_styles = ob_get_clean();
    }
    return $late_styles . '<div id="' . esc_attr($id) . '" class="svv-wgt-v2-container alignwide" data-servv-events-v2 data-svv-skin="' . esc_attr($parts['base']) . '" data-svv-scheme="' . esc_attr($parts['scheme']) . '" style="' . esc_attr($inline_style) . '">' .
        '<script type="application/json" data-servv-config>' . wp_json_encode($runtime, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) . '</script>' .
        $glass_filter . '<div data-servv-app></div></div>';
}

// Enqueue styles before wp_head for ordinary post/page shortcode placements.
add_action('wp_enqueue_scripts', function () {
    $post = get_post();
    if ($post && has_shortcode($post->post_content, 'servv_events')) {
        servv_widget_v2_enqueue(servv_widget_v2_config());
        // Multiple instances can use different skins. All are small, scoped stylesheets.
        foreach (servv_widget_v2_skin_ids() as $skin) {
            servv_widget_v2_enqueue(array_merge(servv_widget_v2_config(), ['widget_skin' => $skin]), false);
        }
    }
});

add_action('wp_ajax_servv_widget_v2_preview', function () {
    servv_widget_v2_admin_permissions();
    $raw_config = $_POST['config'] ?? '{}';
    $config = is_string($raw_config) ? json_decode(wp_unslash($raw_config), true) : null;
    if (!is_array($config)) { wp_send_json_error(['message' => 'Invalid widget settings.'], 400); }
    $markup = servv_widget_v2_shortcode($config, null, '', true);
    $base = plugin_dir_url(dirname(__DIR__) . '/servv.php') . 'widgetEventsV2/dist/';
    $styles = '';
    $font = servv_widget_v2_font_url(servv_widget_v2_config($config));
    if ($font !== '') { $styles .= '<link rel="stylesheet" href="' . esc_url($font) . '">'; }
    foreach (servv_widget_v2_sheets(servv_widget_v2_config($config)) as $file) {
        $styles .= '<link rel="stylesheet" href="' . esc_url($base . $file) . '">';
    }
    wp_send_json_success(['html' => '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' . $styles . '<style>body{margin:0;background:#fff}</style></head><body>' . $markup . '<script src="' . esc_url($base . 'servv-events-v2.js') . '"></script></body></html>']);
});
