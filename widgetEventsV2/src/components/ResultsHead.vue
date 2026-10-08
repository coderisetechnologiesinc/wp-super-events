<script setup>
import { computed } from "vue";

import { useEventsStore } from "@/stores/events";
import { useI18nStore } from "@/stores/i18n";
import { useShopStore } from "@/stores/shop";

const events = useEventsStore();
const i18n = useI18nStore();
const shop = useShopStore();

const title = computed(
  () =>
    shop.style.widget_header ||
    i18n.t("mainWidget.widgetHeaderLabel", { fallback: "Events" }),
);

const meta = computed(() => {
  if (events.loading) {
    return i18n.t("globalWidgetsTranslations.loadingLabel", { fallback: "Loading" });
  }

  return `${events.totalRecords} ${i18n.t("mainWidget.itemsCounterLabel", {
    fallback: "events",
  })}`;
});
</script>

<template>
  <header class="svv-results">
    <h2 class="svv-results__title">{{ title }}</h2>
    <p class="svv-results__meta">{{ meta }}</p>
  </header>
</template>
