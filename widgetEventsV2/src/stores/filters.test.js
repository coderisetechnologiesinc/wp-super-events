import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useFiltersStore } from './filters';
import { quickRange, rangeFilters } from '../utilities/dateRanges';
import { useProductLinksStore } from './productLinks';
import { useI18nStore } from './i18n';
import { useShopStore } from './shop';
import schema from '../../../inc/widget-v2-schema.json';

const config = Object.fromEntries(schema.filter((f) => f.id).map((f) => [f.id, f.default ?? '']));
const runtime = (overrides = {}) => ({
  ajaxUrl: '/wp-admin/admin-ajax.php',
  nonce: 'one',
  config: { ...config, ...overrides },
  context: {},
  container: { currency: 'CAD', locale: 'en' },
});
const json = (data) => ({ ok: true, status: 200, json: async () => data });
const piniaFor = (data) => {
  const pinia = createPinia();
  pinia._servvRuntime = data;
  setActivePinia(pinia);
  return pinia;
};
const enabledFilters = ['category', 'team', 'member', 'location', 'language'];

beforeEach(() => vi.stubGlobal('fetch', vi.fn(async () => json({}))));
afterEach(() => vi.unstubAllGlobals());

it('shows no filters until the types answer arrives', async () => {
  piniaFor(runtime());
  const filters = useFiltersStore();
  filters.applyBlockSettings({ enabled: enabledFilters });

  // Enabled by the block, but which kinds have values is not known yet.
  expect(filters.typesLoaded).toBe(false);
  expect(filters.visibleKeys).toEqual([]);
  expect(filters.hasFields).toBe(false);

  fetch.mockResolvedValue(json({ categories: [{ id: 1, name: 'Talks' }] }));
  await filters.fetchTypes();
  expect(filters.visibleKeys).toEqual(['category']);
  expect(filters.hasFields).toBe(true);
});

it('drops a filter kind the shop has no values for', async () => {
  piniaFor(runtime());
  const filters = useFiltersStore();
  filters.applyBlockSettings({ enabled: enabledFilters });
  fetch.mockResolvedValue(
    json({
      categories: [{ id: 1, name: 'Talks' }],
      locations: [{ id: 4, name: 'Main hall' }],
      teams: [],
      members: [],
      languages: [],
    }),
  );
  await filters.fetchTypes();

  expect(filters.visibleKeys).toEqual(['category', 'location']);
  expect(filters.hasOptions('team')).toBe(false);
});

it('keeps the bar hidden when the types request fails', async () => {
  piniaFor(runtime());
  const filters = useFiltersStore();
  filters.applyBlockSettings({ enabled: enabledFilters });
  fetch.mockRejectedValue(new Error('network'));
  await filters.fetchTypes();

  // Answered, with nothing to offer: no half-filled bar, and no permanent wait.
  expect(filters.typesLoaded).toBe(true);
  expect(filters.visibleKeys).toEqual([]);
  expect(filters.typesError).toBeTruthy();
});

it('links an event to its own page only when the shop asks for it', () => {
  piniaFor(runtime());
  const event = { postUrl: 'https://site.test/event', occurrenceId: 'occ-2' };
  expect(useShopStore().openEventPage).toBe(false);
  // The occurrence travels with the link so a recurring event opens on the
  // date that was clicked.
  expect(useProductLinksStore().hrefFor(event)).toBe(
    'https://site.test/event?occurrence_id=occ-2',
  );

  piniaFor(runtime({ open_event_page: true }));
  expect(useShopStore().openEventPage).toBe(true);
  // A booking link of the shop's own wins, and is not given an occurrence.
  expect(
    useProductLinksStore().hrefFor({ ...event, bookingLink: 'https://shop.test/book' }),
  ).toBe('https://shop.test/book');
  expect(useProductLinksStore().hrefFor({ postUrl: 'javascript:alert(1)' })).toBe('');
  expect(useProductLinksStore().hrefFor({})).toBe('');
});

it('offers to clear a date filter whichever control set it', () => {
  piniaFor(runtime());
  const filters = useFiltersStore();
  expect(filters.hasDateFilter).toBe(false);

  // A single day, as the calendar and the Today/Tomorrow chips set it.
  filters.patch(rangeFilters(quickRange('today', { now: new Date('2026-10-09T12:00:00Z') })));
  expect(filters.selected.date).toBe('2026-10-09');
  expect(filters.hasDateFilter).toBe(true);

  // A window, as This week and Weekend set it: no date, two bounds. This is
  // what used to leave no clear control on screen.
  filters.patch(rangeFilters(quickRange('week', { now: new Date('2026-10-09T12:00:00Z') })));
  expect(filters.selected.date).toBe('');
  expect(filters.selected.startDate).toBeTruthy();
  expect(filters.hasDateFilter).toBe(true);

  filters.clearDates();
  expect(filters.hasDateFilter).toBe(false);
  expect(filters.selected.endDate).toBe('');
});

it('counts items with the singular and plural keys a shop translates', async () => {
  const translations = {
    en: {
      mainWidget: { itemsCounterLabel: 'events', singleEventItemsCounterLabel: 'event' },
    },
    uk: { mainWidget: { itemsCounterLabel: 'подій', singleEventItemsCounterLabel: 'подія' } },
  };
  piniaFor(runtime());
  const shop = useShopStore();
  const i18n = useI18nStore();

  // Falls back to English wording before any shop settings are in.
  expect(i18n.itemsCount(1)).toBe('1 item');
  expect(i18n.itemsCount(7)).toBe('7 items');

  fetch.mockResolvedValue(
    json({ widget_style_settings: JSON.stringify({ translations }) }),
  );
  await shop.fetchSettings();
  expect(i18n.itemsCount(1)).toBe('1 event');
  expect(i18n.itemsCount(0)).toBe('0 events');
  expect(i18n.itemsCount(12)).toBe('12 events');

  i18n.setLocale('uk');
  expect(i18n.itemsCount(1)).toBe('1 подія');
  expect(i18n.itemsCount(5)).toBe('5 подій');
});
