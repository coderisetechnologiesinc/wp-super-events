import { defineStore } from 'pinia';

// Where an event lives on this site: its booking link when the shop set one,
// otherwise the WordPress post, with the occurrence carried along so a
// recurring event opens on the date that was clicked.
export const useProductLinksStore = defineStore('productLinks', () => {
  function hrefFor(event) {
    const url = event?.bookingLink || event?.postUrl || '';
    if (!url) return '';
    let parsed;
    try {
      // A relative post url is resolved against the page the widget sits on.
      parsed = new URL(url, globalThis.window?.location?.href);
    } catch {
      return '';
    }
    if (!['http:', 'https:'].includes(parsed.protocol)) return '';
    if (event.occurrenceId && !event.bookingLink) parsed.searchParams.set('occurrence_id', event.occurrenceId);
    return parsed.href;
  }

  // Kept async: callers await it.
  async function urlFor(event) {
    return hrefFor(event);
  }

  // Same tab: this replaces opening the drawer, so it reads as going to the
  // event's own page rather than as leaving the site.
  function goToPage(event) {
    const url = hrefFor(event);
    if (!url || !globalThis.window?.location) return false;
    window.location.assign(url);
    return true;
  }

  return { hrefFor, urlFor, goToPage };
});
