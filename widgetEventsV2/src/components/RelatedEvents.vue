<script setup>
import { computed } from "vue";

import { useEventsStore } from "@/stores/events";
import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";
import { useShopStore } from "@/stores/shop";
import { formatDate, formatPrice, formatTime } from "@/utilities/format";

const props = defineProps({
  event: { type: Object, required: true },
  limit: { type: Number, default: 3 },
});

const emit = defineEmits(["open"]);

const events = useEventsStore();
const i18n = useI18nStore();
const shop = useShopStore();
const preferences = usePreferencesStore();

const related = computed(() => {
  const pool = events.visibleItems.filter((item) => item.id !== props.event.id);
  const sameCategory = pool.filter(
    (item) =>
      props.event.categoryId !== null && item.categoryId === props.event.categoryId,
  );

  return (sameCategory.length ? sameCategory : pool).slice(0, props.limit);
});

const timeOptions = (event) => ({
  locale: i18n.locale || "en",
  timeZone: preferences.timezone || event.timezone,
  hour12: !shop.style.time_format_24_hours,
});

const whenLabel = (event) =>
  `${formatDate(event.startsAt, timeOptions(event))} · ${formatTime(event.startsAt, timeOptions(event))}`;

const priceLabel = (event) =>
  formatPrice(event.price, {
    locale: i18n.locale || "en",
    currency: shop.currency,
    freeLabel: i18n.t("globalWidgetsTranslations.priceFreeLabel", { fallback: "Free" }),
  });
</script>

<template>
  <section v-if="related.length" class="svv-drawer__section">
    <h3>{{ i18n.t("mainWidget.relatedEventsLabel", { fallback: "Related events" }) }}</h3>

    <ul class="svv-related">
      <li v-for="item in related" :key="item.key">
        <button type="button" class="svv-related__title" @click="emit('open', item)">
          {{ item.title }}
        </button>
        <p class="svv-related__meta">{{ whenLabel(item) }} — {{ priceLabel(item) }}</p>
      </li>
    </ul>
  </section>
</template>
