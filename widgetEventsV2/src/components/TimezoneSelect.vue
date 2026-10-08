<script setup>
import { computed } from "vue";

import { useI18nStore } from "@/stores/i18n";
import { usePreferencesStore } from "@/stores/preferences";

const preferences = usePreferencesStore();
const i18n = useI18nStore();

const zones = computed(() => {
  const all = preferences.zones;
  const detected = preferences.detected;

  if (!detected) return all;

  const pinned = all.find((item) => item.zone === detected);

  if (!pinned) return all;

  return [pinned, ...all.filter((item) => item.zone !== detected)];
});
</script>

<template>
  <label class="svv-select">
    <span class="svv-select__label">
      {{ i18n.t("globalWidgetsTranslations.timezoneLabel", { fallback: "Timezone" }) }}
    </span>
    <select
      :value="preferences.timezone"
      @change="preferences.setTimezone($event.target.value)"
    >
      <option value="">
        {{ i18n.t("globalWidgetsTranslations.eventTimeLabel", { fallback: "Event time" }) }}
      </option>
      <option v-for="item in zones" :key="item.zone" :value="item.zone">
        {{ item.label }}
      </option>
    </select>
  </label>
</template>
