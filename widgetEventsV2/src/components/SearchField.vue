<script setup>
import { onBeforeUnmount, ref, watch } from "vue";

import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { debounce } from "@/utilities/debounce";

const filters = useFiltersStore();
const i18n = useI18nStore();

const draft = ref(filters.selected.search || "");

const commit = debounce((value) => filters.set("search", value), 350);

watch(draft, commit);
watch(
  () => filters.selected.search,
  (value) => {
    if (value !== draft.value) {
      commit.cancel();
      draft.value = value || "";
    }
  },
);

onBeforeUnmount(() => commit.cancel());
</script>

<template>
  <div class="svv-search">
    <label class="svv-visually-hidden" for="svv-search-input">
      {{ i18n.t("mainWidget.searchEventPlaceholder", { fallback: "Search" }) }}
    </label>
    <input
      id="svv-search-input"
      v-model="draft"
      type="search"
      autocomplete="off"
      :placeholder="i18n.t('mainWidget.searchEventPlaceholder', { fallback: 'Search' })"
      @keydown.enter.prevent="commit.flush(draft)"
    />
  </div>
</template>
