<script setup>
import { computed, ref, watch } from "vue";
import placeholderImage from "../../../public/assets/images/placeholder.png";

import AddToCalendar from "@/components/AddToCalendar.vue";
import BookingSteps from "@/components/BookingSteps.vue";
import HostCard from "@/components/HostCard.vue";
import MembersForm from "@/components/MembersForm.vue";
import RelatedEvents from "@/components/RelatedEvents.vue";
import CheckboxField from "@/components/ui/CheckboxField.vue";
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import { isFreeBooking, seatCappedQuantity, useBookingStore } from "@/stores/booking";
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
} from "@/utilities/format";

const props = defineProps({
  event: { type: Object, default: null },
});

const emit = defineEmits(["close", "book", "open", "share"]);

const shop = useShopStore();
const i18n = useI18nStore();
const preferences = usePreferencesStore();
const booking = useBookingStore();

const dialog = ref(null);
const body = ref(null);
const membersForm = ref(null);
const attendees = ref(1);
const consent = ref(false);
const ticketTotal = ref(null);
const pageUrl = typeof window === "undefined" ? "" : window.location.href;

const maxAttendees = computed(() => {
  const left = props.event?.seatsRemaining;

  return typeof left === "number" && left > 0 ? Math.min(left, 10) : 10;
});

const timeOptions = computed(() => ({
  locale: i18n.locale || "en",
  timeZone: preferences.timezone || props.event?.timezone,
  hour12: !shop.style.time_format_24_hours,
}));

const dateLabel = computed(() => formatDate(props.event?.startsAt, timeOptions.value));
const timeLabel = computed(() => formatTime(props.event?.startsAt, timeOptions.value));
const zoneLabel = computed(() =>
  shop.hideTimeZone && !preferences.timezone
    ? ""
    : formatTimeZone(props.event?.startsAt, timeOptions.value),
);
const durationLabel = computed(() => formatDuration(props.event?.duration));

const unitPrice = computed(() => props.event?.price || 0);
const totalLabel = computed(() =>
  formatPrice(ticketTotal.value ?? unitPrice.value * attendees.value, {
    locale: i18n.locale || "en",
    currency: shop.currency,
    freeLabel: i18n.t("globalWidgetsTranslations.priceFreeLabel", { fallback: "Free" }),
  }),
);

const isSoldOut = computed(() => props.event?.availability === "sold-out");

const availabilityLabel = computed(() => formatAvailability(props.event, i18n.t));

const isFreeFlow = computed(() => isFreeBooking(shop.booking, props.event));

const isSelfRegistration = computed(() => true);
const captchaRequired = computed(() => false);
const registrantRows = computed(() => isSoldOut.value ? 0 : attendees.value);
const registrationTitle = computed(() =>
  isSelfRegistration.value
    ? i18n.t("onProductWidget.freeRegistrationFormTitle", { fallback: "Registration" })
    : i18n.t("onProductWidget.additionalMembersFormTitle", { fallback: "Attendees" }),
);

const ctaLabel = computed(() => {
  if (isSoldOut.value) {
    if (!shop.booking.waitingList) return "Sold out";
    return i18n.t("onProductWidget.registerInWaitingList", { fallback: "Join the waiting list" });
  }

  if (props.event?.isFree) {
    return ticketTotal.value > 0 ? "Continue to payment" : i18n.t("onProductWidget.fastRegistration", { fallback: "Register" });
  }

  return "Continue to payment";
});

const step = (amount) => {
  attendees.value = Math.min(maxAttendees.value, Math.max(1, attendees.value + amount));
};

const inBooking = computed(
  () => !!booking.step && booking.event?.key === props.event?.key,
);

const book = () => {
  const details =
    registrantRows.value > 0
      ? membersForm.value?.validate()
      : { registrants: [], captchaToken: "" };

  if (!details) return;

  emit("book", {
    event: props.event,
    attendees: attendees.value,
    consent: consent.value,
    ...details,
  });
};

watch(
  () => booking.step,
  () => body.value?.scrollTo({ top: 0 }),
  { flush: "post" },
);

watch(
  () => props.event,
  (event) => {
    attendees.value = 1;
    ticketTotal.value = null;
    consent.value = false;

    if (!event || booking.event?.key !== event.key) booking.close();

    if (event) dialog.value?.showModal();
    else dialog.value?.close();
  },
);
</script>

<template>
  <dialog
    ref="dialog"
    class="svv-drawer"
    :class="[
      `svv-drawer--${shop.layout.drawerSide || 'right'}`,
      { 'svv-drawer--booking': inBooking },
    ]"
    @close="emit('close')"
    @cancel="emit('close')"
  >
    <article v-if="event" class="svv-drawer__panel">
      <header class="svv-drawer__head">
        <button
          v-if="inBooking"
          type="button"
          class="svv-drawer__icon"
          :aria-label="i18n.t('globalWidgetsTranslations.backLabel', { fallback: 'Back' })"
          @click="booking.close()"
        >
          ←
        </button>

        <div v-else class="svv-drawer__badges">
          <span v-if="event.formatLabel" class="svv-badge">{{ event.formatLabel }}</span>
          <span v-if="event.isRecurring" class="svv-badge svv-badge--accent">
            {{ i18n.t("mainWidget.recurringEventLabel", { fallback: "Recurring" }) }}
          </span>
          <span
            v-if="availabilityLabel"
            class="svv-badge"
            :class="isSoldOut ? 'svv-badge--critical' : 'svv-badge--success'"
          >
            {{ availabilityLabel }}
          </span>
        </div>
        <div class="svv-drawer__head-actions">
          <button
            v-if="shop.controls.shareButton && !inBooking"
            type="button"
            class="svv-drawer__icon"
            @click="emit('share', event)"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M6 3.5H4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V10" />
              <path d="M9.5 2.5h4v4" />
              <path d="M13.5 2.5 7.5 8.5" />
            </svg>
          </button>
          <button type="button" class="svv-drawer__icon" @click="dialog.close()">✕</button>
        </div>
      </header>

      <div ref="body" class="svv-drawer__body">
        <template v-if="inBooking">
          <div class="svv-drawer__summary">
            <img
              v-if="shop.showEventImages"
              class="svv-drawer__summary-image"
              :src="event.image || placeholderImage"
              :alt="event.title"
            />
            <div class="svv-drawer__summary-text">
              <strong>{{ event.title }}</strong>
              <span>{{ dateLabel }} · {{ timeLabel }} {{ zoneLabel }}</span>
              <span v-if="!isSoldOut">
                {{ event.tickets?.length ? `${attendees} tickets` : `${attendees} × ${formatPrice(unitPrice, { currency: shop.currency })}` }}
                · {{ totalLabel }}
              </span>
            </div>
          </div>

          <BookingSteps />
        </template>

        <template v-else>
          <img
            v-if="shop.showEventImages"
            class="svv-drawer__hero"
            :src="event.image || placeholderImage"
            :alt="event.title"
          />

          <h2 class="svv-drawer__title">{{ event.title }}</h2>

          <dl class="svv-drawer__meta">
            <div><dt>Date</dt><dd>{{ dateLabel }}</dd></div>
            <div><dt>Time</dt><dd>{{ timeLabel }} {{ zoneLabel }}</dd></div>
            <div v-if="durationLabel"><dt>Duration</dt><dd>{{ durationLabel }}</dd></div>
          </dl>

          <section v-if="event.description" class="svv-drawer__section">
            <h3>
              {{ i18n.t("mainWidget.eventDescriptionFieldLabel", { fallback: "Description" }) }}
            </h3>
            <p>{{ event.description }}</p>
          </section>

          <section v-if="event.agenda.length" class="svv-drawer__section">
            <h3>Agenda</h3>
            <ul>
              <li v-for="(item, index) in event.agenda" :key="index">{{ item }}</li>
            </ul>
          </section>

          <section v-if="!isSoldOut" class="svv-drawer__section">
            <h3>{{ registrationTitle }}</h3>

            <div class="svv-stepper">
              <button type="button" :disabled="attendees <= 1" @click="step(-1)">−</button>
              <output>{{ attendees }}</output>
              <button type="button" :disabled="attendees >= maxAttendees" @click="step(1)">+</button>
            </div>

            <MembersForm
              v-if="registrantRows > 0"
              ref="membersForm"
              :key="event.key"
              :rows="registrantRows"
              :tickets="event.tickets || []"
              @total="ticketTotal = $event"
              :free-flow="isFreeFlow"
              :captcha-required="captchaRequired"
            />

            <CheckboxField v-if="shop.booking.marketingConsent" v-model="consent">
              {{
                i18n.t("onProductWidget.freeCheckoutNewslettersAgreement", {
                  fallback:
                    "Select the checkbox to receive marketing emails and newsletters.",
                })
              }}
            </CheckboxField>
          </section>

          <HostCard :event="event" />

          <AddToCalendar :event="event" :url="pageUrl" />

          <RelatedEvents :event="event" @open="emit('open', $event)" />
        </template>
      </div>

      <footer v-if="!inBooking" class="svv-drawer__foot">
        <ErrorMessage v-if="booking.error" class="svv-drawer__foot-error">
          {{
            i18n.t(`onProductWidget.${booking.error}`, {
              fallback: "Something went wrong. Please try again.",
            })
          }}
        </ErrorMessage>

        <div class="svv-drawer__total">
          <span>{{ event.tickets?.length ? `${attendees} tickets` : `${attendees} × ${formatPrice(unitPrice, { currency: shop.currency })}` }}</span>
          <strong>{{ totalLabel }}</strong>
        </div>
        <button
          type="button"
          class="svv-drawer__cta"
          :class="{ 'svv-drawer__cta--muted': isSoldOut }"
          :disabled="booking.submitting || (isSoldOut && !shop.booking.waitingList)"
          @click="book"
        >
          {{ ctaLabel }}
        </button>
      </footer>
    </article>
  </dialog>
</template>
