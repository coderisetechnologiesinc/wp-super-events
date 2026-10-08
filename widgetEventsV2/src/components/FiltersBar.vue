<script setup>
import { computed } from "vue";

import { FILTER_SCHEMA } from "@/api/filters";
import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";

const props = defineProps({
  idPrefix: { type: String, default: "svv-filter" },
  showClear: { type: Boolean, default: true },
});

const filters = useFiltersStore();
const i18n = useI18nStore();

const fields = computed(() =>
  filters.visibleKeys
    .filter((key) => FILTER_SCHEMA[key]?.typesKey)
    .map((key) => ({
      key,
      typesKey: FILTER_SCHEMA[key].typesKey,
      multiple: !!FILTER_SCHEMA[key].multiple,
      options: filters.optionsFor(key),
      label: i18n.t(`customFilters.filter_label_${FILTER_SCHEMA[key].typesKey}`, {
        fallback: FILTER_SCHEMA[key].label || key,
      }),
      allLabel: i18n.t(`customFilters.filter_all_${FILTER_SCHEMA[key].typesKey}`, {
        fallback: FILTER_SCHEMA[key].allLabel || "All",
      }),
    })),
);

const valueOf = (field) => {
  const current = filters.selected[field.key];

  return (field.multiple ? current?.[0] : current) ?? "";
};

const onChange = (field, raw) => {
  const value = raw === "" ? null : raw;

  filters.set(field.key, field.multiple ? (value ? [value] : []) : (value ?? ""));
};
</script>

<template>
  <form v-if="filters.hasFields" class="svv-filters" @submit.prevent>
    <div v-for="field in fields" :key="field.key" class="svv-filters__field">
      <label :for="`${props.idPrefix}-${field.key}`">{{ field.label }}</label>
      <select
        :id="`${props.idPrefix}-${field.key}`"
        :value="valueOf(field)"
        @change="onChange(field, $event.target.value)"
      >
        <option value="">{{ field.allLabel }}</option>
        <option v-for="option in field.options" :key="option.id" :value="option.id">
          {{ option.name }}
        </option>
      </select>
    </div>

    <button
      v-if="props.showClear"
      type="button"
      class="svv-filters__clear"
      :disabled="!filters.hasActiveFilters"
      @click="filters.clear()"
    >
      {{ i18n.t("mainWidget.clearFiltersLabel", { fallback: "Clear" }) }}
    </button>
  </form>
</template>
