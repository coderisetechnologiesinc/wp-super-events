<?php
// Verify partial registrant edits preserve all other occurrence capacities.
define('ABSPATH', __DIR__);
$quantities = [0 => 8, 'occ-1' => 5, 'occ-2' => 9];
$forwarded = [];
$normalUpdates = 0;
function get_post_meta($id, $key, $single = true) {
    global $quantities;
    if ($key === 'servv_event_id') return 100;
    if ($key === 'servv_event_location_type') return 'offline';
    if ($key === 'servv_event_quantities') return json_encode($quantities);
    return '';
}
function update_post_meta($id, $key, $value) { global $quantities; $quantities = json_decode($value, true); }
function servvSendApiRequest($route, $body, $method) { global $forwarded; $forwarded[] = [$route, $body, $method]; return ['success' => true]; }
function servv_attach_event_image(...$args) { return ''; }
function get_the_post_thumbnail_url(...$args) { return ''; }
function servvUpdateQuantityWithRequest($post, $event, $provider, $quantity) { global $normalUpdates, $quantities; $normalUpdates++; $quantities[0] = $quantity; }
require __DIR__ . '/../inc/ajax/events/events.php';
class FixtureRequest implements ArrayAccess {
    private $body; private $occ;
    function __construct($body, $occ = null) { $this->body = $body; $this->occ = $occ; }
    function get_param($key) { return $this->occ; }
    function get_json_params() { return $this->body; }
    function offsetExists($key): bool { return $key === 'post_id'; }
    function offsetGet($key): mixed { return 12; }
    function offsetSet($key, $value): void {}
    function offsetUnset($key): void {}
}
function check($condition) { if (!$condition) throw new Exception('Registrant capacity check failed'); }
$person = ['first_name' => 'Ada', 'last_name' => 'Lovelace', 'email' => 'ada@test.dev'];
servv_update_event(new FixtureRequest(['registrants' => [$person]], 'occ-1'));
check($quantities === [0 => 8, 'occ-1' => 4, 'occ-2' => 9]);
check($normalUpdates === 0);
check($forwarded[0][0] === '/offline/meetings/100?occurrence_id=occ-1');
check(!isset($forwarded[0][1]['product']));
servv_update_event(new FixtureRequest(['registrants' => [$person]]));
check($quantities[0] === 7 && $quantities['occ-1'] === 4 && $quantities['occ-2'] === 9);
$before = $quantities;
servv_update_event(new FixtureRequest(['notifications' => ['disable_emails' => false]]));
check($quantities === $before);
servv_update_event(new FixtureRequest(['product' => ['quantity' => 20], 'registrants' => [$person]]));
check($quantities[0] === 19 && $normalUpdates === 1);
echo "Registrant-only edits, occurrence isolation and existing full edits passed.\n";
