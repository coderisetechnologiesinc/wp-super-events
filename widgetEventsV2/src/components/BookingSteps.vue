<script setup>
import { computed } from "vue";

import WordPressPayment from "./WordPressPayment.vue";
import ErrorMessage from "./ui/ErrorMessage.vue";
import ConfirmationScreen from "@/components/ConfirmationScreen.vue";
import QuestionsForm from "@/components/QuestionsForm.vue";
import WaitingListForm from "@/components/WaitingListForm.vue";
import { STEPS, useBookingStore } from "@/stores/booking";
import { useI18nStore } from "@/stores/i18n";
import { useQuestionsStore } from "@/stores/questions";

const booking = useBookingStore();
const questions = useQuestionsStore();
const i18n = useI18nStore();

const questionsTitle = (title) =>
  title || i18n.t("onProductWidget.questionsFormTitle", { fallback: "Questions Form" });

const title = computed(() => {
  switch (booking.step) {
    case STEPS.questionsBefore:
      return questionsTitle(questions.before.title);
    case STEPS.questionsAfter:
      return questionsTitle(questions.after.title);
    case STEPS.waitingList:
      return i18n.t("onProductWidget.registerInWaitingList", {
        fallback: "Join the Waiting List",
      });
    default:
      return "";
  }
});
</script>

<template>
  <section class="svv-drawer__step">
    <h3 v-if="title" class="svv-drawer__step-title">{{ title }}</h3>

    <WordPressPayment v-if="booking.step === STEPS.payment" />
    <ErrorMessage v-if="booking.error">
      {{
        i18n.t(`onProductWidget.${booking.error}`, {
          fallback: "Something went wrong. Please try again.",
        })
      }}
    </ErrorMessage>
    <QuestionsForm
      v-if="booking.step === STEPS.questionsBefore"
      key="questions-before"
      :questions="questions.before.questions"
      :submitting="booking.submitting"
      @submit="booking.submitBeforeForm($event)"
    />

    <QuestionsForm
      v-else-if="booking.step === STEPS.questionsAfter"
      key="questions-after"
      :questions="questions.after.questions"
      :submitting="booking.submitting"
      @submit="booking.submitAfterForm($event)"
    />

    <WaitingListForm
      v-else-if="booking.step === STEPS.waitingList"
      :submitting="booking.submitting"
      :submit-error="booking.error"
      @submit="booking.submitWaitingList($event)"
    />

    <ConfirmationScreen
      v-else-if="
        booking.step === STEPS.confirmation || booking.step === STEPS.waitingListDone
      "
    />
  </section>
</template>
