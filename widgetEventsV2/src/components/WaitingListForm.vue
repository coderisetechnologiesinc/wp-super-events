<script setup>
import { computed, ref } from "vue";

import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import SubmitButton from "@/components/ui/SubmitButton.vue";
import TextInput from "@/components/ui/TextInput.vue";
import { useI18nStore } from "@/stores/i18n";
import { isValidEmail } from "@/utilities/validation";

defineProps({
  submitting: { type: Boolean, default: false },
  submitError: { type: String, default: "" },
});

const emit = defineEmits(["submit"]);

const i18n = useI18nStore();

const name = ref("");
const email = ref("");
const showErrors = ref(false);

const nameError = computed(() =>
  name.value.trim()
    ? ""
    : i18n.t("onProductWidget.mandatoryRequiermentsMessageHeader", {
        fallback: "This field is mandatory",
      }),
);

const emailError = computed(() =>
  isValidEmail(email.value)
    ? ""
    : i18n.t("onProductWidget.invalidEmailMessage", {
        fallback: "Please enter a valid email address.",
      }),
);

const onSubmit = () => {
  showErrors.value = true;

  if (nameError.value || emailError.value) return;

  emit("submit", { name: name.value.trim(), email: email.value.trim() });
};
</script>

<template>
  <form class="svv-form" novalidate @submit.prevent="onSubmit">
    <TextInput
      v-model="name"
      required
      :label="i18n.t('onProductWidget.waitingListNameLabel', { fallback: 'Name' })"
      :error="showErrors ? nameError : ''"
    />

    <TextInput
      v-model="email"
      type="email"
      maxlength="40"
      required
      :label="i18n.t('onProductWidget.waitingListEmailLabel', { fallback: 'Email' })"
      :error="showErrors ? emailError : ''"
    />

    <ErrorMessage v-if="submitError">
      {{
        i18n.t(`onProductWidget.${submitError}`, {
          fallback: "Something went wrong. Please try again.",
        })
      }}
    </ErrorMessage>

    <SubmitButton :loading="submitting">
      {{ i18n.t("onProductWidget.submitQuestionsForm", { fallback: "Submit" }) }}
    </SubmitButton>
  </form>
</template>
