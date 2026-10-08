import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { createWordPressApi } from './wordpress';
import { normalizeEvent } from './normalize';
import { useShopStore } from '../stores/shop';
import { useEventsStore } from '../stores/events';
import { useBookingStore } from '../stores/booking';
import schema from '../../../inc/widget-v2-schema.json';
const config = Object.fromEntries(schema.filter((f) => f.id).map((f) => [f.id, f.default ?? '']));
const runtime = (nonce = 'one') => ({ ajaxUrl: '/wp-admin/admin-ajax.php', nonce, config: { ...config }, context: {}, container: { currency: 'CAD', locale: 'en' } });
const json = (data) => ({ ok: true, status: 200, json: async () => data });
const event = { id: 12, productId: 120, occurrenceId: 'occ-2', seatsRemaining: 4, isFree: true, availability: 'available' };
const person = { email: 'a@example.test', first_name: 'Anna', last_name: 'Smith' };
let requests;
beforeEach(() => { requests = []; vi.stubGlobal('fetch', vi.fn(async (url, options) => { requests.push({ url, params: options.body, signal: options.signal }); return json({}); })); });
afterEach(() => vi.unstubAllGlobals());
function piniaFor(data) { const pinia = createPinia(); pinia._servvRuntime = data; setActivePinia(pinia); return pinia; }
it('posts array filters and nonce to admin-ajax', async () => {
  await createWordPressApi(runtime()).fetchMeetings({ filters: { category: [3, 4], search: 'hello' }, page: 2, pageSize: 12 });
  const { url, params } = requests[0]; expect(url).toBe('/wp-admin/admin-ajax.php');
  expect(params.get('action')).toBe('servv_get_events_filtered_list'); expect(params.getAll('category_id[]')).toEqual(['3', '4']);
  expect(params.get('page')).toBe('2'); expect(params.get('page_size')).toBe('12'); expect(params.get('security')).toBe('one');
});
it('preserves question ids, text, occurrence and email as nested form fields', async () => {
  await createWordPressApi(runtime()).saveAnswers(120, { email: person.email, occurrenceId: 'occ-2', questions: [{ id: 5, text: '["one","two"]' }] });
  const params = requests[0].params; expect(params.get('answers[0][id]')).toBe('5'); expect(params.get('answers[0][text]')).toBe('["one","two"]');
  expect(params.get('occurrence_id')).toBe('occ-2'); expect(params.get('post_id')).toBe('120');
});
it('treats HTTP 200 wp_send_json_error as failure', async () => {
  fetch.mockResolvedValue(json({ success: false, data: { message: 'No seats left' } }));
  await expect(createWordPressApi(runtime()).registerFree(event, person)).rejects.toThrow('No seats left');
});
it('separates cancellation scopes between clients', async () => {
  const a = createWordPressApi(runtime()); const b = createWordPressApi(runtime('two'));
  await Promise.all([a.fetchMeetings(), b.fetchMeetings(), a.fetchMeetings()]);
  expect(requests[0].signal.aborted).toBe(true); expect(requests[1].signal.aborted).toBe(false);
});
it('normalizes WordPress ids and image fields', () => {
  expect(normalizeEvent({ id: 12, product: { product_id: 999, post_id: 120, post_url: 'https://site.test/event', image_url: 'https://site.test/image.jpg' } }))
    .toMatchObject({ productId: 120, postUrl: 'https://site.test/event', image: 'https://site.test/image.jpg' });
});
it('captures each Pinia runtime across async calls', async () => {
  const a = useShopStore(piniaFor(runtime('first')));
  const b = useShopStore(piniaFor({ ...runtime('second'), config: { ...config, view_mode: 'grid' } }));
  await a.fetchSettings(); await b.fetchSettings();
  expect(requests.map(({ params }) => params.get('security'))).toEqual(['first', 'second']);
  expect(a.viewMode).toBe('list'); expect(b.viewMode).toBe('grid');
});
function bookingSetup(handler, preview = false) {
  piniaFor({ ...runtime(), preview });
  fetch.mockImplementation(async (url, options) => { const params = options.body; requests.push({ params }); return json(handler(params.get('action'), params)); });
  return useBookingStore();
}
it('registers primary and additional attendees with occurrence, without cart calls', async () => {
  const booking = bookingSetup((action) => action === 'servv_process_free_order' ? { success: true, data: {} } : { questions: [] });
  await booking.start(event, { attendees: 2, registrants: [person, { ...person, email: 'b@example.test' }] });
  const order = requests.find(({ params }) => params.get('action') === 'servv_process_free_order').params;
  expect(order.get('email')).toBe(person.email); expect(order.get('post_id')).toBe('120'); expect(order.get('occurrence_id')).toBe('occ-2');
  expect(order.get('additional_registrants')).toBe('b@example.test,Anna,Smith'); expect(booking.step).toBe('confirmation');
});
it('creates Stripe session for a paid ticket on a free base event', async () => {
  const booking = bookingSetup((action) => action === 'servv_create_checkout_session' ? { success: true, data: { client_secret: 'secret', public_key: 'pk_test' } } : { questions: [] });
  await booking.start({ ...event, tickets: [{ id: 44, price: 25 }] }, { attendees: 1, registrants: [{ ...person, ticket_id: 44 }] });
  const order = requests.find(({ params }) => params.get('action') === 'servv_create_checkout_session').params;
  expect(order.get('ticket_id')).toBe('44'); expect(booking.step).toBe('payment'); expect(booking.completed).toBe(false);
  booking.paymentComplete(); expect(booking.step).toBe('confirmation');
});
it('stops before an order when questions fail', async () => {
  const booking = bookingSetup(() => ({ success: false, data: { message: 'Questions unavailable' } }));
  await booking.start(event, { registrants: [person] }); expect(booking.error).toBe('Questions unavailable');
  expect(requests.every(({ params }) => params.get('action') === 'servv_get_event_questions_list')).toBe(true);
});
it('saves before questions with contact and occurrence before order creation', async () => {
  const booking = bookingSetup((action, params) => action === 'servv_get_event_questions_list'
    ? { questions: params.get('form_type') === '1' ? [{ id: 5, type: 'open', text: 'Name?' }] : [] } : { success: true, data: {} });
  await booking.start(event, { registrants: [person] }); expect(booking.step).toBe('questionsBefore');
  await booking.submitBeforeForm([{ id: 5, type: 'open', answer: 'Anna' }]);
  const answer = requests.findIndex(({ params }) => params.get('action') === 'servv_add_event_answer');
  const order = requests.findIndex(({ params }) => params.get('action') === 'servv_process_free_order');
  expect(answer).toBeLessThan(order); expect(requests[answer].params.get('email')).toBe(person.email); expect(booking.step).toBe('confirmation');
});
it('does not submit orders from admin preview', async () => {
  const booking = bookingSetup(() => ({}), true); await booking.start(event, { registrants: [person] });
  expect(requests).toHaveLength(0); expect(booking.error).toBe('Registration is disabled in preview.');
});
it('loads all calendar pages with date bounds', async () => {
  piniaFor(runtime()); fetch.mockImplementation(async (url, { body }) => { requests.push({ params: body }); return json({ page_count: 2, meetings: [{ id: Number(body.get('page')) }] }); });
  const result = await useEventsStore().fetchCalendarMonth('2026-10'); expect(result).toHaveLength(2);
  expect(requests[0].params.get('start_datetime')).toBe('2026-10-01T00:00:00.000Z'); expect(requests[1].params.get('page')).toBe('2');
});
it('appends progressive pages and resets on page one', async () => {
  piniaFor({ ...runtime(), config: { ...config, view_mode: 'progressive' } });
  fetch.mockImplementation(async (url, { body }) => json({ page_count: 3, meetings: [{ id: Number(body.get('page')) }] }));
  const events = useEventsStore(); await events.fetchPage(1); await events.fetchPage(2); expect(events.items.map((item) => item.id)).toEqual([1, 2]);
  await events.fetchPage(1); expect(events.items.map((item) => item.id)).toEqual([1]);
});

it('keeps separate keys for recurring occurrences of the same event', () => {
  expect(normalizeEvent({ id: 12, occurrence_id: 'one' }).key).not.toBe(normalizeEvent({ id: 12, occurrence_id: 'two' }).key);
});
