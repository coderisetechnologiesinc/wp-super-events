<script setup>
import { computed } from "vue";

import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";
import { useShopStore } from "@/stores/shop";
import {
  formatAvailability,
  formatDate,
  formatDuration,
  formatPrice,
  formatTime,
  formatTimeZone,
  truncateWords,
} from "@/utilities/format";

const props = defineProps({
  event: { type: Object, required: true },
  descriptionWordLimit: { type: Number, default: 25 },
});

const emit = defineEmits(["open", "share", "book"]);

const shop = useShopStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();
const filters = useFiltersStore();

const nameOf = (key, id) => {
  const wanted = Array.isArray(id) ? id[0] : id;

  if (wanted === null || wanted === undefined || wanted === "") return "";

  return filters.optionsFor(key).find((option) => String(option.id) === String(wanted))?.name || "";
};

const facets = computed(() =>
  [
    nameOf("member", props.event.memberIds),
    nameOf("location", props.event.locationId),
    nameOf("language", props.event.languageId),
  ].filter(Boolean),
);

const timeOptions = computed(() => ({
  locale: i18n.locale || "en",
  timeZone: preferences.timezone || props.event.timezone,
  hour12: !shop.style.time_format_24_hours,
}));

const dateLabel = computed(() => formatDate(props.event.startsAt, timeOptions.value));
const timeLabel = computed(() => formatTime(props.event.startsAt, timeOptions.value));
const zoneLabel = computed(() =>
  shop.hideTimeZone && !preferences.timezone
    ? ""
    : formatTimeZone(props.event.startsAt, timeOptions.value),
);
const durationLabel = computed(() =>
  formatDuration(props.event.duration, {
    hourLabel: i18n.t("globalWidgetsTranslations.hourLabelSingular", { fallback: "h" }),
    minuteLabel: i18n.t("globalWidgetsTranslations.minuteLabelSingular", { fallback: "m" }),
  }),
);

const priceLabel = computed(() =>
  formatPrice(props.event.price, {
    locale: i18n.locale || "en",
    currency: shop.currency,
    freeLabel: i18n.t("globalWidgetsTranslations.priceFreeLabel", { fallback: "Free" }),
  }),
);

const description = computed(() =>
  truncateWords(props.event.description, props.descriptionWordLimit),
);

const availabilityLabel = computed(() => formatAvailability(props.event, i18n.t));

const ctaLabel = computed(() => {
  if (props.event.availability === "sold-out") {
    if (!shop.booking.waitingList) {
      return i18n.t("onProductWidget.eventSoldOut", { fallback: "Sold out" });
    }

    return i18n.t("onProductWidget.registerInWaitingList", { fallback: "Join the waiting list" });
  }

  return i18n.t("mainWidget.bookButtonLabel", { fallback: "Book now" });
});

const isSoldOut = computed(() => props.event.availability === "sold-out");
</script>

<template>
  <article class="svv-card" :data-availability="event.availability">
    <a
      v-if="shop.showEventImages && event.image"
      class="svv-card__media"
      href="#"
      :aria-label="event.title"
      :style="{ backgroundImage: `url('${event.image}')` }"
      @click.prevent="emit('open', event)"
    ></a>

    <div class="svv-card__body">
      <p class="svv-card__when">
        <span>{{ dateLabel }}</span>
        <span>{{ timeLabel }}</span>
        <span v-if="zoneLabel" class="svv-card__zone">{{ zoneLabel }}</span>
        <span v-if="durationLabel" class="svv-card__duration">· {{ durationLabel }}</span>
      </p>

      <h3 class="svv-card__title">
        <a href="#" @click.prevent="emit('open', event)">{{ event.title }}</a>
      </h3>

      <ul v-if="shop.card.badges" class="svv-card__badges">
        <li v-if="event.formatLabel" class="svv-badge">{{ event.formatLabel }}</li>
        <li v-if="event.isLiveShopping" class="svv-badge svv-badge--info">
          {{ i18n.t("mainWidget.liveShoppingLabel", { fallback: "Live Shopping" }) }}
        </li>
        <li v-if="event.isFree && !shop.card.price" class="svv-badge svv-badge--success">
          {{ i18n.t("globalWidgetsTranslations.priceFreeLabel", { fallback: "Free" }) }}
        </li>
        <li v-if="event.isRecurring" class="svv-badge svv-badge--accent">
          {{ i18n.t("mainWidget.recurringEventLabel", { fallback: "Recurring" }) }}
        </li>
      </ul>

      <p v-if="description" class="svv-card__description">{{ description }}</p>

      <ul v-if="facets.length" class="svv-card__meta">
        <li v-for="facet in facets" :key="facet">{{ facet }}</li>
      </ul>
    </div>

    <div class="svv-card__action">
      <div class="svv-card__pricing">
        <p v-if="shop.card.price" class="svv-card__price">{{ priceLabel }}</p>
        <p
          v-if="shop.showSeats && availabilityLabel"
          class="svv-card__availability"
        >
          {{ availabilityLabel }}
        </p>
      </div>

      <div class="svv-card__actions">
        <button
          v-if="shop.controls.shareButton"
          type="button"
          class="svv-card__share"
          :aria-label="i18n.t('mainWidget.shareEventPanelTitle', { fallback: 'Share this event' })"
          @click="emit('share', event)"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M6 3.5H4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V10" />
            <path d="M9.5 2.5h4v4" />
            <path d="M13.5 2.5 7.5 8.5" />
          </svg>
        </button>
        <button
          type="button"
          class="svv-card__cta"
          :class="{ 'svv-card__cta--muted': isSoldOut }"
          :disabled="isSoldOut && !shop.booking.waitingList"
          @click="emit('book', event)"
        >
          {{ ctaLabel }}
        </button>
      </div>
    </div>
  </article>
</template>
