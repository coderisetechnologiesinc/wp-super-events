<script setup>
import { computed, onMounted, ref, watch } from "vue";

import { useEventsStore } from "@/stores/events";
import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";
import { addMonths, monthKey, startOfMonth, zonedDateKey } from "@/utilities/calendar";

const MAX_CHIPS = 30;

const events = useEventsStore();
const filters = useFiltersStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();

const locale = computed(() => i18n.locale || "en");
const today = computed(() => zonedDateKey(new Date(), preferences.timezone));
const selected = computed(() => filters.selected.date || "");

const monthOffset = ref(0);

const windowStart = computed(() => addMonths(startOfMonth(new Date()), monthOffset.value));

const months = computed(() => [
  monthKey(windowStart.value),
  monthKey(addMonths(windowStart.value, 1)),
]);

const weekdayOf = (key) =>
  new Intl.DateTimeFormat(locale.value, { weekday: "short", timeZone: "UTC" }).format(
    new Date(`${key}T12:00:00Z`),
  );

const dayOf = (key) =>
  new Intl.DateTimeFormat(locale.value, { month: "short", day: "numeric", timeZone: "UTC" }).format(
    new Date(`${key}T12:00:00Z`),
  );

const days = computed(() =>
  [...new Set(months.value.flatMap((month) => events.datesByMonth[month] || []))]
    .filter((key) => monthOffset.value > 0 || key >= today.value)
    .sort()
    .slice(0, MAX_CHIPS)
    .map((key) => ({ key, weekday: weekdayOf(key), day: dayOf(key) })),
);

const monthLabel = computed(() =>
  new Intl.DateTimeFormat(locale.value, { month: "long", year: "numeric", timeZone: "UTC" }).format(
    windowStart.value,
  ),
);

const step = (delta) => {
  monthOffset.value = Math.max(0, monthOffset.value + delta);
};

const load = () => months.value.forEach((month) => events.fetchDates(month));

const select = (key) => filters.set("date", key === selected.value ? "" : key);

onMounted(load);
watch(() => filters.selected, load);
watch(months, load);
</script>

<template>
  <div
    v-if="days.length || monthOffset"
    class="svv-datestrip"
    :aria-label="i18n.t('globalWidgetsTranslations.calendarLabel', { fallback: 'Dates' })"
  >
    <button
      type="button"
      class="svv-datestrip__nav"
      aria-label="Previous month"
      :disabled="!monthOffset"
      @click="step(-1)"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
    </button>

    <div class="svv-datestrip__days">
      <button
        type="button"
        class="svv-datestrip__chip"
        :class="{ 'is-selected': !selected }"
        :aria-pressed="!selected"
        @click="filters.set('date', '')"
      >
        {{ i18n.t("mainWidget.allDatesLabel", { fallback: "All" }) }}
        <span>{{ days.length }}</span>
      </button>

      <button
        v-for="day in days"
        :key="day.key"
        type="button"
        class="svv-datestrip__chip"
        :class="{ 'is-selected': day.key === selected }"
        :aria-pressed="day.key === selected"
        @click="select(day.key)"
      >
        {{ day.weekday }}
        <span>{{ day.day }}</span>
      </button>

      <p v-if="!days.length" class="svv-datestrip__empty">
        {{
          i18n.t("mainWidget.labelForMonthWithoutEvents", {
            fallback: "There are no events scheduled",
          })
        }}
      </p>
    </div>

    <button
      type="button"
      class="svv-datestrip__nav svv-datestrip__nav--next"
      :aria-label="`Next month, ${monthLabel}`"
      @click="step(1)"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
    </button>
  </div>
</template>
