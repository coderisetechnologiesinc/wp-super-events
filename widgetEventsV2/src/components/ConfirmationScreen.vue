<script setup>
import { STEPS, useBookingStore } from "@/stores/booking";
import { useI18nStore } from "@/stores/i18n";

const i18n = useI18nStore();
const booking = useBookingStore();
</script>

<template>
  <div class="svv-confirmation">
    <span class="svv-confirmation__mark" aria-hidden="true"></span>

    <h3 class="svv-confirmation__title">
      {{
        booking.step === STEPS.waitingListDone ? "You’re on the waiting list" : i18n.t("onProductWidget.registrationCompletedMessageTitle", {
          fallback: "Registration completed!",
        })
      }}
    </h3>

    <p class="svv-confirmation__text">
      {{
        booking.step === STEPS.waitingListDone ? "Your waiting list request has been received." : i18n.t("onProductWidget.registrationCompletedMessageDescription", {
          fallback:
            "You have successfully registered. A confirmation email has been sent to the provided email address.",
        })
      }}
    </p>
  </div>
</template>
