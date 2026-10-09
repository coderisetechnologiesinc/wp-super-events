<script setup>
import { computed } from "vue";

import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";
import { useShopStore } from "@/stores/shop";
import { firstDayOfWeek } from "@/utilities/calendar";
import { QUICK_RANGES, matchesRange, quickRange, rangeFilters } from "@/utilities/dateRanges";

const filters = useFiltersStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();
const shop = useShopStore();

// The calendar carries the clear control when it is on screen; without it this
// row is the only place a date choice can be undone.
const showClear = computed(() => filters.hasDateFilter && !shop.showCalendar);

const LABELS = {
  today: ["mainWidget.quickDateToday", "Today"],
  tomorrow: ["mainWidget.quickDateTomorrow", "Tomorrow"],
  week: ["mainWidget.quickDateThisWeek", "This Week"],
  weekend: ["mainWidget.quickDateWeekend", "Weekend"],
};

const options = computed(() =>
  QUICK_RANGES.map((kind) => {
    const range = quickRange(kind, {
      timeZone: preferences.timezone,
      firstDay: firstDayOfWeek(i18n.locale || "en"),
    });

    return {
      kind,
      range,
      label: i18n.t(LABELS[kind][0], { fallback: LABELS[kind][1] }),
      active: matchesRange(filters.selected, range),
    };
  }),
);

const toggle = (option) => {
  filters.patch(rangeFilters(option.active ? null : option.range));
};
</script>

<template>
  <div class="svv-quick">
    <button
      v-for="option in options"
      :key="option.kind"
      type="button"
      :class="{ 'is-active': option.active }"
      :aria-pressed="option.active"
      @click="toggle(option)"
    >
      {{ option.label }}
    </button>

    <button
      v-if="showClear"
      type="button"
      class="svv-quick__clear"
      @click="filters.clearDates()"
    >
      {{ i18n.t("mainWidget.clearFiltersLabel", { fallback: "Clear" }) }}
    </button>
  </div>
</template>
