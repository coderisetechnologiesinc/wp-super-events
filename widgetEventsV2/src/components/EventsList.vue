<script setup>
import { computed } from "vue";

import EventCard from "./EventCard.vue";
import EventsCalendarView from "./EventsCalendarView.vue";
import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";
import { useShopStore } from "@/stores/shop";
import { dayKey, formatDayHeading } from "@/utilities/format";

const props = defineProps({
  events: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
});

const emit = defineEmits(["open", "share", "book"]);

const shop = useShopStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();

const isGrid = computed(() => shop.viewMode === "grid");
const isCalendar = computed(() => shop.viewMode === "calendar");

const descriptionWordLimit = computed(() => shop.descriptionWordLimit);

const separatorLabelOf = (event) => {
  if (event.separatorLabel) return event.separatorLabel;
  if (!event.startsAt) return "";

  const options = {
    locale: i18n.locale || "en",
    timeZone: preferences.timezone || undefined,
  };
  const key = dayKey(event.startsAt, options);
  const now = Date.now();

  if (key === dayKey(new Date(now), options)) {
    return i18n.t("mainWidget.todaySeparatorLabel", { fallback: "Today" });
  }

  if (key === dayKey(new Date(now + 86400000), options)) {
    return i18n.t("mainWidget.tomorrowSeparatorLabel", { fallback: "Tomorrow" });
  }

  return formatDayHeading(event.startsAt, options);
};

const groups = computed(() => {
  // day separators belong to the list layout only, as in the legacy widget:
  // in a grid every label would force its day onto a fresh row
  if (isGrid.value || !shop.showSeparatorBadges) {
    return [{ label: "", events: props.events }];
  }

  const ordered = [];

  for (const event of props.events) {
    const label = separatorLabelOf(event);
    const last = ordered.at(-1);

    if (last && last.label === label) last.events.push(event);
    else ordered.push({ label, events: [event] });
  }

  return ordered;
});
</script>

<template>
  <div class="svv-events" :class="isGrid ? 'svv-events--grid' : 'svv-events--list'">
    <p v-if="loading" class="svv-events__state">
      {{ i18n.t("globalWidgetsTranslations.loadingLabel", { fallback: "Loading" }) }}…
    </p>

    <p v-else-if="error" class="svv-events__state" role="alert">
      {{
        i18n.t("mainWidget.loadingErrorLabel", {
          fallback: "Something went wrong. Please try again later.",
        })
      }}
    </p>

    <p v-else-if="!events.length" class="svv-events__state">
      {{
        i18n.t("mainWidget.labelForMonthWithoutEvents", {
          fallback: "There are no events scheduled",
        })
      }}
    </p>

    <EventsCalendarView
      v-else-if="isCalendar"
      :events="events"
      @open="emit('open', $event)"
    />

    <ul v-else class="svv-events__items">
      <template v-for="(group, index) in groups" :key="group.label || index">
        <li v-if="group.label" class="svv-events__separator-item">
          <h3 class="svv-events__separator">{{ group.label }}</h3>
        </li>

        <li v-for="event in group.events" :key="event.key">
          <EventCard
            :event="event"
            :description-word-limit="descriptionWordLimit"
            @open="emit('open', $event)"
            @share="emit('share', $event)"
            @book="emit('book', $event)"
          />
        </li>
      </template>
    </ul>
  </div>
</template>
