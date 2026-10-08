<script setup>
import { useI18nStore } from "@/stores/i18n";
import { useShopStore } from "@/stores/shop";

const MODES = ["list", "grid", "calendar"];

const shop = useShopStore();
const i18n = useI18nStore();

const labelFor = (mode) =>
  ({
    list: i18n.t("globalWidgetsTranslations.viewModeListLabel", { fallback: "List" }),
    grid: i18n.t("globalWidgetsTranslations.viewModeGridLabel", { fallback: "Grid" }),
    calendar: i18n.t("globalWidgetsTranslations.calendarLabel", { fallback: "Calendar" }),
  })[mode];
</script>

<template>
  <div class="svv-viewmode" role="group">
    <button
      v-for="mode in MODES"
      :key="mode"
      type="button"
      :class="{ 'is-active': shop.viewMode === mode }"
      :aria-pressed="shop.viewMode === mode"
      @click="shop.setViewMode(mode)"
    >
      {{ labelFor(mode) }}
    </button>
  </div>
</template>
