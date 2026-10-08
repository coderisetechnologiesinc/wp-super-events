<script setup>
import { computed } from "vue";

import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";

const props = defineProps({
  event: { type: Object, required: true },
});

const filters = useFiltersStore();
const i18n = useI18nStore();

const ids = computed(() => {
  const raw = props.event.memberIds;

  if (Array.isArray(raw)) return raw;

  return raw === null || raw === undefined || raw === "" ? [] : [raw];
});

const hosts = computed(() =>
  ids.value
    .map((id) =>
      filters.optionsFor("member").find((member) => String(member.id) === String(id)),
    )
    .filter(Boolean),
);
</script>

<template>
  <section v-if="hosts.length" class="svv-drawer__section">
    <h3>{{ i18n.t("mainWidget.hostFilterLabel", { fallback: "Host" }) }}</h3>
    <ul class="svv-hosts">
      <li v-for="host in hosts" :key="host.id">
        <strong>{{ host.name }}</strong>
        <span v-if="host.email">{{ host.email }}</span>
      </li>
    </ul>
  </section>
</template>
