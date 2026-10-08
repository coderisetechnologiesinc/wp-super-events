<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

import { useI18nStore } from "@/stores/i18n";
import { HCAPTCHA_SITEKEY, loadHcaptcha } from "@/utilities/hcaptcha";

const emit = defineEmits(["verify", "reset"]);

const i18n = useI18nStore();

const host = ref(null);
const failed = ref(false);

let api = null;
let widgetId = null;

onMounted(async () => {
  try {
    api = await loadHcaptcha();
  } catch {
    failed.value = true;

    return;
  }

  widgetId = api.render(host.value, {
    sitekey: HCAPTCHA_SITEKEY,
    callback: (token) => emit("verify", token),
    "expired-callback": () => emit("reset"),
    "error-callback": () => emit("reset"),
  });
});

onBeforeUnmount(() => {
  if (api && widgetId !== null) api.remove(widgetId);
});
</script>

<template>
  <div class="svv-captcha">
    <div ref="host"></div>
    <p v-if="failed" class="svv-error">
      {{
        i18n.t("onProductWidget.genericErrorMessage", {
          fallback: "Something went wrong. Please try again.",
        })
      }}
    </p>
  </div>
</template>
