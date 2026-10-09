<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

import { useEventsStore } from "@/stores/events";
import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";
import {
  addMonths,
  buildMonthGrid,
  firstDayOfWeek,
  monthKey,
  startOfMonth,
  weekdayNames,
  zonedDateKey,
} from "@/utilities/calendar";

const events = useEventsStore();
const filters = useFiltersStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();

const cursor = ref(startOfMonth(new Date()));
const today = computed(() => zonedDateKey(new Date(), preferences.timezone));

const locale = computed(() => i18n.locale || "en");
const weekStart = computed(() => firstDayOfWeek(locale.value));
const weekdays = computed(() =>
  weekdayNames(locale.value, weekStart.value).map((short, index) => ({
    short,
    narrow: weekdayNames(locale.value, weekStart.value, "narrow")[index],
  })),
);
const cells = computed(() => buildMonthGrid(cursor.value, { firstDay: weekStart.value }));

const monthLabel = computed(() =>
  new Intl.DateTimeFormat(locale.value, { month: "long", year: "numeric" }).format(cursor.value),
);

const markedDates = computed(
  () => new Set(events.datesByMonth[monthKey(cursor.value)] || []),
);

const selected = computed(() => filters.selected.date || "");

const loadMonth = () => events.fetchDates(monthKey(cursor.value));

const step = (amount) => {
  cursor.value = addMonths(cursor.value, amount);
};

const select = (cell) => {
  if (!cell) return;

  filters.set("date", cell.key === selected.value ? "" : cell.key);
};

onMounted(loadMonth);
onUnmounted(() => {
  if (selected.value) filters.set("date", "");
});
watch([cursor, () => filters.selected], loadMonth);
</script>

<template>
  <section class="svv-calendar" :aria-label="i18n.t('globalWidgetsTranslations.calendarLabel', { fallback: 'Calendar' })">
    <header class="svv-calendar__head">
      <h3 class="svv-calendar__month">{{ monthLabel }}</h3>
      <div class="svv-calendar__nav">
        <button type="button" aria-label="Previous month" @click="step(-1)">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button type="button" aria-label="Next month" @click="step(1)">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
        </button>
      </div>
    </header>

    <div class="svv-calendar__grid" role="grid">
      <span v-for="name in weekdays" :key="name.short" class="svv-calendar__weekday">
        <span class="svv-calendar__weekday-short">{{ name.short }}</span>
        <span class="svv-calendar__weekday-narrow">{{ name.narrow }}</span>
      </span>

      <template v-for="(cell, index) in cells">
        <span v-if="!cell" :key="`pad-${index}`" class="svv-calendar__pad"></span>
        <button
          v-else
          :key="cell.key"
          type="button"
          class="svv-calendar__day"
          :class="{
            'is-marked': markedDates.has(cell.key),
            'is-selected': cell.key === selected,
            'is-today': cell.key === today,
          }"
          :aria-pressed="cell.key === selected"
          @click="select(cell)"
        >
          {{ cell.day }}
        </button>
      </template>
    </div>

    <button
      v-if="filters.hasDateFilter"
      type="button"
      class="svv-calendar__clear"
      @click="filters.clearDates()"
    >
      {{ i18n.t("mainWidget.clearFiltersLabel", { fallback: "clear" }) }}
    </button>
  </section>
</template>
