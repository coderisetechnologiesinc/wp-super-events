<script setup>
import { computed, ref } from "vue";

import CheckboxGroup from "@/components/ui/CheckboxGroup.vue";
import RadioGroup from "@/components/ui/RadioGroup.vue";
import SubmitButton from "@/components/ui/SubmitButton.vue";
import TextInput from "@/components/ui/TextInput.vue";
import { useI18nStore } from "@/stores/i18n";
import { QUESTION_TYPES, isAnswered } from "@/stores/questions";

const props = defineProps({
  questions: { type: Array, required: true },
  submitting: { type: Boolean, default: false },
});

const emit = defineEmits(["submit"]);

const i18n = useI18nStore();

const draft = ref(
  props.questions.map((question) => ({
    ...question,
    answer: Array.isArray(question.answer) ? [...question.answer] : question.answer,
  })),
);

const showErrors = ref(false);

const invalidIds = computed(() =>
  draft.value
    .filter((question) => question.mandatory && !isAnswered(question))
    .map((question) => question.id),
);

const mandatoryMessage = computed(() =>
  i18n.t("onProductWidget.mandatoryRequiermentsMessageHeader", {
    fallback: "This field is mandatory",
  }),
);

const onSubmit = () => {
  showErrors.value = true;

  if (invalidIds.value.length) return;

  emit("submit", draft.value);
};
</script>

<template>
  <form class="svv-form" novalidate @submit.prevent="onSubmit">
    <div v-for="question in draft" :key="question.id" class="svv-form__question">
      <TextInput
        v-if="question.type === QUESTION_TYPES.open"
        v-model="question.answer"
        :label="question.text"
        :required="question.mandatory"
        :error="showErrors && invalidIds.includes(question.id) ? mandatoryMessage : ''"
      />

      <template v-else>
        <p class="svv-form__question-text">
          {{ question.text }}
          <span v-if="question.mandatory" class="svv-field__required">*</span>
        </p>

        <RadioGroup
          v-if="question.type === QUESTION_TYPES.onechoice"
          v-model="question.answer"
          :name="`svv-question-${question.id}`"
          :options="question.variants || []"
        />

        <CheckboxGroup
          v-else-if="question.type === QUESTION_TYPES.multichoice"
          v-model="question.answer"
          :options="question.variants || []"
        />

        <p
          v-if="showErrors && invalidIds.includes(question.id)"
          class="svv-field__error"
        >
          {{ mandatoryMessage }}
        </p>
      </template>
    </div>

    <SubmitButton :loading="submitting">
      {{ i18n.t("onProductWidget.submitQuestionsForm", { fallback: "Submit" }) }}
    </SubmitButton>
  </form>
</template>
