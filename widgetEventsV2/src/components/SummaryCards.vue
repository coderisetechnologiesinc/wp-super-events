<script setup>
import { computed } from "vue";

import { useEventsStore } from "@/stores/events";
import { useI18nStore } from "@/stores/i18n";

const events = useEventsStore();
const i18n = useI18nStore();

const available = computed(
  () => events.visibleItems.filter((event) => event.availability !== "sold-out").length,
);

const waitlist = computed(
  () => events.visibleItems.filter((event) => event.availability === "sold-out").length,
);
</script>

<template>
  <div class="svv-summary">
    <p class="svv-summary__card">
      <strong>{{ available }}</strong>
      <span>
        {{
          i18n.t("mainWidget.summaryAvailableLabel", {
            fallback: "available event sessions",
          })
        }}
      </span>
    </p>

    <p v-if="waitlist" class="svv-summary__card">
      <strong>{{ waitlist }}</strong>
      <span>
        {{
          i18n.t("mainWidget.summaryWaitlistLabel", {
            fallback: "waitlist opportunities",
          })
        }}
      </span>
    </p>
  </div>
</template>
