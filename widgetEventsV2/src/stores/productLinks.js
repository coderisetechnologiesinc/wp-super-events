import { defineStore } from 'pinia';
export const useProductLinksStore = defineStore('productLinks', () => {
  async function urlFor(event) {
    const url = event?.bookingLink || event?.postUrl || '';
    if (!url) return '';
    const parsed = new URL(url, window.location.origin);
    if (!['http:', 'https:'].includes(parsed.protocol)) return '';
    if (event.occurrenceId && !event.bookingLink) parsed.searchParams.set('occurrence_id', event.occurrenceId);
    return parsed.href;
  }
  return { urlFor };
});
