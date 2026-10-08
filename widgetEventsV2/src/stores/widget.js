import { ref } from "vue";
import { defineStore } from "pinia";

import { useEventsStore } from "./events";
import { useFiltersStore } from "./filters";
import { useShopStore } from "./shop";

export const useWidgetStore = defineStore("widget", () => {
  const shop = useShopStore();
  const filters = useFiltersStore();
  const events = useEventsStore();

  const ready = ref(false);
  const starting = ref(false);

  async function init() {
    if (starting.value || ready.value) return;

    starting.value = true;
    shop.refreshContext();

    await Promise.all([shop.fetchSettings(), filters.fetchTypes()]);

    filters.applyBlockSettings({
      defaults: shop.defaultFilters,
      enabled: shop.enabledFilters,
    });
    events.initPageSize(shop.eventsPerPage);

    await events.fetchPage(1);

    starting.value = false;
    ready.value = true;
  }

  return { ready, starting, init };
});
