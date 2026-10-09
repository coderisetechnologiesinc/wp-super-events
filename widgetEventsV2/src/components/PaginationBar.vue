<script setup>
import { computed } from "vue";

import { useEventsStore } from "@/stores/events";
import { useI18nStore } from "@/stores/i18n";
import { useShopStore } from "@/stores/shop";

const PAGE_SIZES = [5, 10, 20, 50];

const events = useEventsStore();
const shop = useShopStore();
const i18n = useI18nStore();

const sizes = computed(() => [...new Set([...PAGE_SIZES, events.pageSize])].sort((a, b) => a - b));
const hasPages = computed(() => events.pageCount > 1);
const canPrev = computed(() => events.page > 1);
const canNext = computed(() => events.page < events.pageCount);
</script>

<template>
  <nav v-if="hasPages || shop.controls.pageSizeSelector" class="svv-pagination">
    <button v-if="shop.viewMode === 'progressive' && canNext" type="button" :disabled="events.loading" @click="events.fetchPage(events.page + 1)">Load more events</button>
    <template v-else-if="shop.controls.pagination && hasPages && shop.viewMode !== 'progressive'">
      <button type="button" :disabled="!canPrev" @click="events.fetchPage(events.page - 1)">
        ‹
      </button>
      <span class="svv-pagination__status">{{ events.page }} / {{ events.pageCount }}</span>
      <button type="button" :disabled="!canNext" @click="events.fetchPage(events.page + 1)">
        ›
      </button>
    </template>

    <span class="svv-pagination__count">
      {{ i18n.itemsCount(events.totalRecords) }}
    </span>

    <label v-if="shop.controls.pageSizeSelector" class="svv-pagination__size">
      <select :value="events.pageSize" @change="events.setPageSize(Number($event.target.value))">
        <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
      </select>
    </label>
  </nav>
</template>
