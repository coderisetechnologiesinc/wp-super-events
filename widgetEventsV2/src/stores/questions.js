import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useRuntimeStore } from "@/api/wordpress";



export const QUESTION_TYPES = {
  open: "open",
  onechoice: "onechoice",
  multichoice: "multiple",
  title: "title",
};

export const FORM_TYPES = { before: 1, after: 2 };


const emptyForm = () => ({ title: "", questions: [] });

export function normalizeForm(payload) {
  const form = emptyForm();

  for (const question of payload?.questions || []) {
    if (question.type === QUESTION_TYPES.title) {
      form.title = question.text || "";
      continue;
    }

    form.questions.push({
      ...question,
      answer: question.type === QUESTION_TYPES.multichoice ? [] : "",
    });
  }

  form.questions.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return form;
}

export const isAnswered = (question) =>
  Array.isArray(question.answer)
    ? question.answer.length > 0
    : String(question.answer ?? "").trim() !== "";

export const toAnswerPayload = (question) => ({
  id: question.id,
  text:
    question.type === QUESTION_TYPES.multichoice
      ? JSON.stringify(question.answer)
      : question.answer,
});

export const useQuestionsStore = defineStore("questions", () => {
  const { api } = useRuntimeStore();

  const before = ref(emptyForm());
  const after = ref(emptyForm());
  const answers = ref([]);
  const customerUuid = ref("");

  const hasBefore = computed(() => before.value.questions.length > 0);
  const hasAfter = computed(() => after.value.questions.length > 0);

  let loadVersion = 0;
  function reset() {
    loadVersion++;
    before.value = emptyForm();
    after.value = emptyForm();
    answers.value = [];
    customerUuid.value = "";
  }

  async function load(productId) {
    reset();
    const version = loadVersion;

    if (!productId) return;

    try {
      const [beforePayload, afterPayload] = await Promise.all([
        api.fetchQuestions(productId, FORM_TYPES.before),
        api.fetchQuestions(productId, FORM_TYPES.after),
      ]);

      if (version !== loadVersion) return;
      before.value = normalizeForm(beforePayload);
      after.value = normalizeForm(afterPayload);

    } catch (error) {
      if (version !== loadVersion) return;
      reset();
      throw error;
    }
  }

  function cache(list) {
    answers.value = (list || []).filter(isAnswered);
  }

  async function save(productId, email = "", occurrenceId = null) {
    if (!answers.value.length || !productId) return;

    const saved = await api
      .saveAnswers(productId, {
        questions: answers.value.map(toAnswerPayload),
        occurrenceId,
        ...(email ? { email } : {}),
      })
      .then(() => true)
      .catch(() => false);

    if (!saved) throw new Error("Unable to save answers");

    answers.value = [];
  }

  return {
    before,
    after,
    answers,
    customerUuid,
    hasBefore,
    hasAfter,
    load,
    cache,
    save,
    reset,
  };
});
