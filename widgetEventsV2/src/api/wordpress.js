import { getActivePinia, defineStore } from 'pinia';
import { markRaw } from 'vue';
import { ApiError } from './client';
import { toRequestParams } from './filters';

// Capture the runtime while a store is created, never from a global DOM selector
// during an asynchronous request. Each shortcode owns its own client and scopes.
export const useRuntimeStore = defineStore('wordpressRuntime', () => {
  const runtime = getActivePinia()?._servvRuntime || { config: {}, container: {}, context: {} };
  const api = markRaw(createWordPressApi(runtime));
  return { runtime: markRaw(runtime), api };
});

export function encodeParams(values) {
  const params = new URLSearchParams();
  const append = (key, value) => {
    if (value === undefined || value === null || value === '') return;
    if (Array.isArray(value)) value.forEach((item, index) => append(`${key}[${typeof item === 'object' ? index : ''}]`, item));
    else if (typeof value === 'object') Object.entries(value).forEach(([child, item]) => append(`${key}[${child}]`, item));
    else params.append(key, String(value));
  };
  Object.entries(values).forEach(([key, value]) => append(key, value));
  return params;
}

export function createWordPressApi(runtime) {
  const controllers = new Map();
  let disposed = false;
  async function request(action, values = {}, scope) {
    if (disposed) throw new DOMException('Widget removed', 'AbortError');
    if (scope) controllers.get(scope)?.abort();
    const controller = new AbortController();
    const key = scope || Symbol();
    controllers.set(key, controller);
    try {
      const response = await fetch(runtime.ajaxUrl, {
        method: 'POST', credentials: 'same-origin', signal: controller.signal,
        headers: { Accept: 'application/json' },
        body: encodeParams({ action, security: runtime.nonce, ...values }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || payload === null || payload === -1 || payload === 0 || payload?.success === false || payload?.errorCode || payload?.error) {
        throw new ApiError(payload?.data?.message || payload?.message || 'Unable to load event data.', { status: response.status, body: payload });
      }
      return payload?.success === true ? payload.data : payload;
    } finally {
      if (controllers.get(key) === controller) controllers.delete(key);
    }
  }
  return {
    request,
    dispose() { disposed = true; controllers.forEach((controller) => controller.abort()); controllers.clear(); },
    fetchSettings: () => request('servv_get_shop_settings'),
    fetchTypes: () => request('servv_get_types_list'),
    fetchMeetings: ({ filters, defaults, page = 1, pageSize = 10, withoutOccurrences, scope = 'meetings:list' } = {}) =>
      request('servv_get_events_filtered_list', { ...toRequestParams(filters, { defaults }), page, page_size: pageSize, ...(withoutOccurrences ? { without_occurrences: 1 } : {}) }, scope),
    // No month means every matching date, which is how one reply serves every
    // month the widget shows.
    fetchDates: ({ filters, defaults, month } = {}) => request('servv_get_events_filtered_list_dates', { ...toRequestParams(filters, { defaults }), date: month }, `meetings:dates:${month || 'all'}`),
    fetchEventInfo: (postId) => request('servv_get_event_info', { post_id: postId }),
    fetchQuestions: (postId, formType) => request('servv_get_event_questions_list', { post_id: postId, form_type: formType }),
    saveAnswers: (postId, { questions, email, occurrenceId }) => request('servv_add_event_answer', { post_id: postId, answers: questions, email, occurrence_id: occurrenceId }),
    waitlist: (event, body) => request('servv_add_to_waitinglist', { post_id: event.productId, occurrence_id: event.occurrenceId, ...body }),
    registerFree: (event, body) => request('servv_process_free_order', { post_id: event.productId, occurrence_id: event.occurrenceId, ...body }),
    checkout: (event, body) => request('servv_create_checkout_session', { post_id: event.productId, occurrence_id: event.occurrenceId, ...body }),
  };
}
