<script setup>
import { computed, onMounted, ref, watch } from "vue";

import { useFiltersStore } from "@/stores/filters";
import { useEventsStore } from "@/stores/events";
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
import { formatDuration, formatTime } from "@/utilities/format";

const VISIBLE_PER_CELL = 2;

const props = defineProps({
  events: { type: Array, default: () => [] },
});

const emit = defineEmits(["open"]);

const events = useEventsStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();

const cursor = ref(startOfMonth(new Date()));
const expanded = ref({});
const monthEvents = ref([]);
const loading = ref(false);
const loadError = ref('');
const filters = useFiltersStore();
let requestId = 0;

const locale = computed(() => i18n.locale || "en");
const zone = computed(() => preferences.timezone || undefined);
const weekStart = computed(() => firstDayOfWeek(locale.value));
const weekdays = computed(() => weekdayNames(locale.value, weekStart.value));
const cells = computed(() =>
  buildMonthGrid(cursor.value, { firstDay: weekStart.value, adjacent: true }),
);

const today = computed(() => zonedDateKey(new Date(), preferences.timezone));

const monthLabel = computed(() =>
  new Intl.DateTimeFormat(locale.value, { month: "long", year: "numeric" }).format(cursor.value),
);

const cellLabeller = computed(
  () =>
    new Intl.DateTimeFormat(locale.value, { weekday: "short", month: "short", day: "numeric" }),
);

const byDate = computed(() => {
  const map = {};

  for (const event of monthEvents.value) {
    if (!event.startsAt) continue;

    const key = zonedDateKey(event.startsAt, preferences.timezone || event.timezone);

    (map[key] ||= []).push(event);
  }

  return map;
});

const timeFor = (event) => {
  const options = { locale: locale.value, timeZone: zone.value || event.timezone };
  const start = formatTime(event.startsAt, options);

  const time = event.endsAt ? `${start} - ${formatTime(event.endsAt, options)}` : start;
  const duration = formatDuration(event.duration, {
    hourLabel: i18n.t("globalWidgetsTranslations.hourLabelSingular", { fallback: "h" }),
    minuteLabel: i18n.t("globalWidgetsTranslations.minuteLabelSingular", { fallback: "m" }),
  });

  return [time, duration].filter(Boolean).join(" · ");
};

const eventsFor = (cell) => byDate.value[cell.key] || [];

const shownIn = (cell) => {
  const list = eventsFor(cell);

  return expanded.value[cell.key] ? list : list.slice(0, VISIBLE_PER_CELL);
};

const hiddenIn = (cell) => eventsFor(cell).length - shownIn(cell).length;

const moreLabel = (count) =>
  i18n.t("mainWidget.showMoreEventsLabel", { count, fallback: `+ ${count} More` });

const step = (amount) => {
  cursor.value = addMonths(cursor.value, amount);
};

const goToday = () => {
  cursor.value = startOfMonth(new Date());
};

async function loadMonth() {
  const current = ++requestId;
  loading.value = true; loadError.value = '';
  try {
    const list = await events.fetchCalendarMonth(monthKey(cursor.value));
    if (current === requestId) monthEvents.value = list;
  } catch (error) { if (current === requestId && error.name !== 'AbortError') loadError.value = 'Unable to load this month.'; }
  finally { if (current === requestId) loading.value = false; }
}
watch(() => JSON.stringify(filters.selected), loadMonth);

onMounted(loadMonth);
watch(cursor, () => {
  expanded.value = {};
  loadMonth();
});
</script>

<template>
  <section class="svv-monthview">
    <p v-if="loading" role="status">Loading events…</p>
    <p v-if="loadError" role="alert">{{ loadError }}</p>
    <header class="svv-monthview__head">
      <div class="svv-monthview__nav">
        <button type="button" aria-label="Previous month" @click="step(-1)">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button type="button" aria-label="Next month" @click="step(1)">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg>
        </button>
      </div>

      <button type="button" class="svv-monthview__today" @click="goToday">
        {{ i18n.t("mainWidget.quickDateToday", { fallback: "Today" }) }}
      </button>

      <h3 class="svv-monthview__month">{{ monthLabel }}</h3>
    </header>

    <div class="svv-monthview__weekdays" aria-hidden="true">
      <span v-for="name in weekdays" :key="name" class="svv-monthview__weekday">{{ name }}</span>
    </div>

    <div class="svv-monthview__grid">
      <div
        v-for="cell in cells"
        :key="cell.key"
        class="svv-monthview__cell"
        :class="{
          'is-outside': cell.outside,
          'is-past': cell.key < today,
          'is-today': cell.key === today,
          'is-empty': !eventsFor(cell).length,
        }"
        :data-label="cellLabeller.format(cell.date)"
      >
        <span class="svv-monthview__date">{{ cell.day }}</span>

        <div v-if="eventsFor(cell).length" class="svv-monthview__events">
          <button
            v-for="event in shownIn(cell)"
            :key="event.key"
            type="button"
            class="svv-monthview__event"
            :data-availability="event.availability"
            @click="emit('open', event)"
          >
            <span class="svv-monthview__time">
              {{ timeFor(event) }}
              <svg
                v-if="event.isRecurring"
                class="svv-monthview__recur"
                viewBox="0 0 14 14"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M2 7a5 5 0 0 1 8.5-3.5L12 5" />
                <path d="M12 2v3H9" />
                <path d="M12 7a5 5 0 0 1-8.5 3.5L2 9" />
                <path d="M2 12V9h3" />
              </svg>
            </span>
            <span class="svv-monthview__name">{{ event.title }}</span>
          </button>
        </div>

        <button
          v-if="hiddenIn(cell) > 0"
          type="button"
          class="svv-monthview__more"
          @click="expanded[cell.key] = true"
        >
          {{ moreLabel(hiddenIn(cell)) }}
        </button>
      </div>
    </div>
  </section>
</template>
