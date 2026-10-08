<script setup>
import { languageName } from "@/i18n/languages";
import { useI18nStore } from "@/stores/i18n";

const i18n = useI18nStore();
</script>

<template>
  <label v-if="i18n.offeredLocales.length > 1" class="svv-select">
    <span class="svv-select__label">
      {{ i18n.t("globalWidgetsTranslations.languageLabel", { fallback: "Language" }) }}
    </span>
    <select :value="i18n.locale" @change="i18n.setLocale($event.target.value)">
      <option v-for="locale in i18n.offeredLocales" :key="locale" :value="locale">
        {{ languageName(locale) }}
      </option>
    </select>
  </label>
</template>
