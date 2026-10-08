<script setup>
import { computed, onBeforeUnmount, ref } from "vue";

import { FILTER_SCHEMA } from "@/api/filters";
import FiltersBar from "@/components/FiltersBar.vue";
import { useEventsStore } from "@/stores/events";
import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { useShopStore } from "@/stores/shop";

const events = useEventsStore();
const filters = useFiltersStore();
const i18n = useI18nStore();
const shop = useShopStore();

const dialog = ref(null);

const activeCount = computed(
  () =>
    filters.visibleKeys.filter(
      (key) => FILTER_SCHEMA[key]?.typesKey && filters.activeKeys.includes(key),
    ).length,
);

const title = computed(() =>
  i18n.t("globalWidgetsTranslations.filtersLabel", { fallback: "Filters" }),
);

const open = () => dialog.value?.showModal();
const close = () => dialog.value?.close();

onBeforeUnmount(close);
</script>

<template>
  <template v-if="filters.hasFields">
    <button type="button" class="svv-filters__toggle" @click="open()">
      <span>{{ title }}</span>
      <span v-if="activeCount" class="svv-filters__toggle-count">{{ activeCount }}</span>
    </button>

    <dialog
      ref="dialog"
      class="svv-drawer svv-drawer--filters"
      :class="`svv-drawer--${shop.layout.drawerSide || 'right'}`"
    >
      <div class="svv-drawer__panel">
        <header class="svv-drawer__head">
          <strong class="svv-drawer__pane-title">{{ title }}</strong>
          <div class="svv-drawer__head-actions">
            <button type="button" class="svv-drawer__icon" @click="close()">✕</button>
          </div>
        </header>

        <div class="svv-drawer__body">
          <FiltersBar id-prefix="svv-filter-drawer" :show-clear="false" />
        </div>

        <footer class="svv-drawer__foot">
          <button
            type="button"
            class="svv-filters__clear"
            :disabled="!filters.hasActiveFilters"
            @click="filters.clear()"
          >
            {{ i18n.t("mainWidget.clearFiltersLabel", { fallback: "Clear" }) }}
          </button>

          <button type="button" class="svv-drawer__cta" @click="close()">
            <span>{{ i18n.t("mainWidget.applyFiltersLabel", { fallback: "Show results" }) }}</span>
            <span class="svv-filters__toggle-count">{{ events.totalRecords }}</span>
          </button>
        </footer>
      </div>
    </dialog>
  </template>
</template>
