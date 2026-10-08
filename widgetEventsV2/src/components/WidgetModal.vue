<script setup>
import { onMounted, ref } from "vue";

import { useI18nStore } from "@/stores/i18n";

defineProps({
  title: { type: String, default: "" },
});

const emit = defineEmits(["close"]);

const i18n = useI18nStore();
const dialog = ref(null);

onMounted(() => dialog.value?.showModal());
</script>

<template>
  <dialog
    ref="dialog"
    class="svv-modal"
    @close="emit('close')"
    @cancel="emit('close')"
  >
    <div class="svv-modal__panel">
      <header class="svv-modal__head">
        <h2 class="svv-modal__title">{{ title }}</h2>
        <button
          type="button"
          class="svv-modal__close"
          :aria-label="i18n.t('globalWidgetsTranslations.closeLabel', { fallback: 'Close' })"
          @click="dialog.close()"
        >
          ✕
        </button>
      </header>

      <div class="svv-modal__body">
        <slot />
      </div>
    </div>
  </dialog>
</template>
