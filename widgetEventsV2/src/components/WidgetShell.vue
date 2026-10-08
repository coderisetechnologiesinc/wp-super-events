<script setup>
import { computed, useSlots } from "vue";

import { useFiltersStore } from "@/stores/filters";
import { useShopStore } from "@/stores/shop";

const shop = useShopStore();
const filters = useFiltersStore();

const slots = useSlots();

const showAside = computed(
  () => !!slots.aside &&
    (shop.showCalendar ||
      shop.showQuickDateFilters ||
      !!shop.controls.summaryCards ||
      (shop.filtersInAside && filters.hasFields)),
);
const asideFirst = computed(() => shop.layout.calendarPosition === "left");
</script>

<template>
  <div
    class="svv-shell"
    :class="{
      'svv-shell--with-aside': showAside,
      'svv-shell--aside-end': showAside && !asideFirst,
    }"
  >
    <header v-if="$slots.header" class="svv-shell__header">
      <slot name="header" />
    </header>

    <div v-if="$slots.strip" class="svv-shell__strip">
      <slot name="strip" />
    </div>

    <aside v-if="showAside" class="svv-shell__aside">
      <slot name="aside" />
    </aside>

    <main class="svv-shell__content">
      <slot />
    </main>
  </div>
</template>
