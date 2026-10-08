<script setup>
import { computed, onBeforeUnmount, ref } from "vue";

import { useI18nStore } from "@/stores/i18n";
import { googleCalendarUrl, icsFile, outlookCalendarUrl } from "@/utilities/calendarLinks";

const props = defineProps({
  event: { type: Object, required: true },
  url: { type: String, default: "" },
});

const i18n = useI18nStore();

const options = computed(() => ({ url: props.url }));
const google = computed(() => googleCalendarUrl(props.event, options.value));
const outlook = computed(() => outlookCalendarUrl(props.event, options.value));

const objectUrl = ref("");

const revoke = () => {
  if (objectUrl.value) URL.revokeObjectURL(objectUrl.value);
  objectUrl.value = "";
};

const downloadIcs = () => {
  revoke();

  const blob = new Blob([icsFile(props.event, options.value)], {
    type: "text/calendar;charset=utf-8",
  });

  objectUrl.value = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = objectUrl.value;
  link.download = `${props.event.title || "event"}.ics`;
  link.click();
};

onBeforeUnmount(revoke);
</script>

<template>
  <section v-if="event.startsAt" class="svv-drawer__section">
    <h3>
      {{ i18n.t("mainWidget.addToCalendarLabel", { fallback: "Add to calendar" }) }}
    </h3>

    <div class="svv-calendar-links">
      <a class="svv-pill" :href="google" target="_blank" rel="noopener">Google</a>
      <a class="svv-pill" :href="outlook" target="_blank" rel="noopener">Outlook</a>
      <button type="button" class="svv-pill" @click="downloadIcs">Apple / .ics</button>
    </div>
  </section>
</template>
