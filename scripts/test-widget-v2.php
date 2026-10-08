<?php
// Standalone checks for schema validation and shortcode output; no database writes.
define('ABSPATH', __DIR__);
define('SERVV_PLUGIN_VERSION', 'test');
function add_action(...$args) {}
function add_shortcode(...$args) {}
function get_option($key, $default = false) { return $key === 'servv_widget_v2_settings' ? ['view_mode' => 'grid', 'events_per_page' => 12] : $default; }
function sanitize_text_field($value) { return trim(strip_tags((string)$value)); }
function sanitize_hex_color($value) { return preg_match('/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i', $value) ? $value : null; }
function esc_url_raw($value, $protocols = []) { return preg_match('/^https?:\/\//', $value) ? $value : ''; }
function esc_url($value) { return htmlspecialchars($value, ENT_QUOTES); }
function esc_attr($value) { return htmlspecialchars((string)$value, ENT_QUOTES); }
function plugin_dir_url($file) { return 'https://site.test/wp-content/plugins/servv/'; }
function wp_enqueue_style(...$args) {}
function wp_enqueue_script(...$args) {}
function wp_create_nonce($action) { return 'nonce-' . $action; }
function admin_url($path) { return 'https://site.test/wp-admin/' . $path; }
function determine_locale() { return 'en_US'; }
function wp_unique_id($prefix) { static $id = 0; return $prefix . ++$id; }
function wp_json_encode($value, $flags = 0) { return json_encode($value, $flags); }
function did_action($name) { return 0; }
require __DIR__ . '/../inc/widget-v2.php';
function check($condition, $message) { if (!$condition) { throw new Exception($message); } }
$defaults = servv_widget_v2_defaults();
foreach (servv_widget_v2_schema() as $field) {
    if (isset($field['id'])) { check(array_key_exists($field['id'], $defaults), 'Missing default'); }
}
$config = servv_widget_v2_config(['view_mode' => 'list', 'show_search' => 'false', 'events_per_page' => '999']);
check($config['view_mode'] === 'list', 'Shortcode overrides saved defaults');
check($config['show_search'] === false, 'False must remain boolean false');
check($config['events_per_page'] == 50, 'Numeric settings must be clamped');
check(servv_widget_v2_config()['view_mode'] === 'grid', 'Saved defaults are applied');
$unsafe = servv_widget_v2_sanitize(['unknown' => 'x', 'color_primary' => 'red;display:none', 'widget_skin' => 'bad', 'font_family' => 'Arial;}</style><script>alert(1)</script>', 'background_image' => 'javascript:alert(1)']);
check(!isset($unsafe['unknown'], $unsafe['color_primary'], $unsafe['widget_skin']), 'Unknown or invalid settings must be rejected');
check($unsafe['background_image'] === '', 'Unsafe URL rejected');
check(strpos($unsafe['font_family'], ';') === false, 'CSS delimiters removed');
check(servv_widget_v2_sanitize(['background_overlay_from' => '#17112d99'])['background_overlay_from'] === '#17112d99', 'Alpha colors preserved');
$one = servv_widget_v2_shortcode(['widget_skin' => 'swiss', 'show_search' => 'false']);
$two = servv_widget_v2_shortcode(['widget_skin' => 'poster']);
check(strpos($one, 'servv-events-v2-1') !== false && strpos($two, 'servv-events-v2-2') !== false, 'Unique instance ids');
check(strpos($one, 'svv-wgt-v2-container alignwide') !== false, 'Shortcode supports WordPress wide layouts');
check(strpos($one, 'data-svv-skin="swiss"') !== false, 'Skin belongs to the instance');
preg_match('/data-servv-config>(.*?)<\/script>/', $one, $matches);
$runtime = json_decode($matches[1], true);
check($runtime['nonce'] === 'nonce-payment_nonce', 'Public AJAX nonce');
check($runtime['config']['show_search'] === false, 'Typed runtime config');
check($runtime['context']['customerId'] === '', 'Always collect primary contact');
check(servv_widget_v2_shortcode(['show_events_widget' => 'false']) === '', 'Hidden widgets do not render');
foreach (servv_widget_v2_skin_ids() as $skin) {
    check(strpos(servv_widget_v2_style(servv_widget_v2_config(['widget_skin' => $skin])), '--svv-v2-container-width:') !== false, 'Every style supports layout variables');
}

$scheme_markup = servv_widget_v2_shortcode(['widget_skin' => 'glass-obsidian']);
check(strpos($scheme_markup, 'data-svv-skin="glass"') !== false, 'A scheme keeps the base style selector');
check(strpos($scheme_markup, 'data-svv-scheme="obsidian"') !== false, 'A scheme names itself on the instance');
check(strpos(servv_widget_v2_shortcode(['widget_skin' => 'swiss']), 'data-svv-scheme=""') !== false, 'A base style carries no scheme');
check(servv_widget_v2_style_parts('polaris-admin-dark') === ['base' => 'polaris', 'scheme' => 'admin-dark'], 'A scheme name may hold dashes');
check(servv_widget_v2_style_parts('')['base'] === 'default', 'An empty style id falls back to Default');

check(servv_widget_v2_sheets(servv_widget_v2_config(['widget_skin' => 'glass-obsidian'])) === [
    'servv-events-v2.css',
    'servv-events-v2-skin-glass.css',
    'servv-events-v2-scheme-glass-obsidian.css',
    'servv-events-v2-mobile.css',
], 'A scheme sheet loads after its base style and before the mobile sheet');
check(servv_widget_v2_sheets(servv_widget_v2_config(['widget_skin' => 'default'])) === [
    'servv-events-v2.css',
    'servv-events-v2-mobile.css',
], 'Default loads no style sheet of its own');

$dist = __DIR__ . '/../widgetEventsV2/dist/';
foreach (servv_widget_v2_skin_ids() as $skin) {
    foreach (servv_widget_v2_sheets(servv_widget_v2_config(['widget_skin' => $skin])) as $file) {
        check(is_file($dist . $file), 'Every style in the schema has a built sheet: ' . $file);
    }
}

$palette = function ($atts) { return strpos(servv_widget_v2_style(servv_widget_v2_config($atts)), '--svv-v2-primary:') !== false; };
check($palette(['widget_skin' => 'default', 'use_theme_styles' => 'true']), 'Default takes the colour settings');
check($palette(['widget_skin' => 'swiss', 'use_theme_styles' => 'false']), 'Theme colours off hands the colour settings to every style');
check(!$palette(['widget_skin' => 'swiss', 'use_theme_styles' => 'true']), 'A style keeps its own palette while theme colours are on');
check($palette(['widget_skin' => 'swiss', 'use_theme_styles' => 'true', 'skin_custom_styles' => 'true']), 'A style the merchant opted in takes the colour settings');
check(!$palette(['widget_skin' => 'swiss-nightgrid', 'use_theme_styles' => 'false']), 'A scheme is its own palette and never defers');
check(!$palette(['widget_skin' => 'swiss-nightgrid', 'use_theme_styles' => 'true', 'skin_custom_styles' => 'true']), 'An opt-in never overrides a scheme');

$fonts = function ($atts) { return strpos(servv_widget_v2_style(servv_widget_v2_config($atts)), '--svv-v2-skin-font:') !== false; };
check($fonts(['widget_skin' => 'default']), 'Default takes the font settings');
check(!$fonts(['widget_skin' => 'poster']), 'A style keeps the typography it ships');
check($fonts(['widget_skin' => 'poster', 'skin_custom_styles' => 'true']), 'An opt-in hands the fonts over');
check($fonts(['widget_skin' => 'swiss-nightgrid', 'skin_custom_styles' => 'true']), 'A scheme recolours only, so the fonts still follow the opt-in');

$font = function ($atts) { return servv_widget_v2_font_url(servv_widget_v2_config($atts)); };
check($font(['widget_skin' => 'default']) === '', 'Default ships no web font of its own');
check(strpos($font(['widget_skin' => 'poster']), 'family=Anton') !== false, 'A style loads the typography it ships');
check(strpos($font(['widget_skin' => 'poster-hazard']), 'family=Anton') !== false, 'A scheme keeps the base style typography');
check($font(['widget_skin' => 'poster', 'skin_custom_styles' => 'true']) === '', 'An opt-in replaces the style font, so none is loaded');
check($font(['widget_skin' => 'plastic']) === '', 'A style without its own family loads nothing');
check($font(['widget_skin' => 'adaptive']) === '', 'Adaptive follows the theme typography');
check(servv_widget_v2_font_handle(servv_widget_v2_config(['widget_skin' => 'swiss-concrete'])) === 'servv-events-v2-fonts-swiss', 'One font handle per base style');

echo "Widget PHP checks passed: validation, defaults, overrides, unique instances, nonce, styles, schemes, fonts.\n";
