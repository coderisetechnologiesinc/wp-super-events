<script setup>
import { computed, onMounted, watch } from "vue";

import EventCard from "@/components/EventCard.vue";
import { useCategoriesStore } from "@/stores/categories";
import { useFiltersStore } from "@/stores/filters";
import { useI18nStore } from "@/stores/i18n";
import { useShopStore } from "@/stores/shop";

const emit = defineEmits(["open", "share", "book"]);

const categories = useCategoriesStore();
const filters = useFiltersStore();
const shop = useShopStore();
const i18n = useI18nStore();

const rowStyle = computed(() => ({
  "--svv-grid-columns": String(categories.rowLength),
}));

onMounted(categories.loadAll);

watch(() => filters.selected, categories.refresh, { deep: true });
watch(() => categories.list.map((category) => category.id).join(","), () =>
  categories.loadAll(),
);
</script>

<template>
  <div class="svv-categories">
    <p v-if="!categories.list.length" class="svv-events__state">
      {{
        i18n.t("mainWidget.labelForMonthWithoutEvents", {
          fallback: "There are no events scheduled",
        })
      }}
    </p>

    <section
      v-for="category in categories.list"
      :key="category.id"
      class="svv-categories__group"
    >
      <header class="svv-categories__head">
        <div class="svv-categories__title">
          <h3>{{ category.name }}</h3>
          <p v-if="category.details">{{ category.details }}</p>
        </div>

        <div v-if="categories.pageCountOf(category.id) > 1" class="svv-categories__nav">
          <button
            type="button"
            :disabled="!categories.hasPrev(category.id)"
            :aria-label="
              i18n.t('globalWidgetsTranslations.previousLabel', { fallback: 'Previous' })
            "
            @click="categories.prev(category.id)"
          >
            ‹
          </button>
          <button
            type="button"
            :disabled="!categories.hasNext(category.id)"
            :aria-label="
              i18n.t('globalWidgetsTranslations.nextLabel', { fallback: 'Next' })
            "
            @click="categories.next(category.id)"
          >
            ›
          </button>
        </div>
      </header>

      <p v-if="categories.isLoading(category.id)" class="svv-events__state">
        {{ i18n.t("globalWidgetsTranslations.loadingLabel", { fallback: "Loading" }) }}…
      </p>

      <p
        v-else-if="!categories.eventsOf(category.id).length"
        class="svv-events__state"
      >
        {{
          i18n.t("mainWidget.labelForMonthWithoutEvents", {
            fallback: "There are no events scheduled",
          })
        }}
      </p>

      <ul v-else class="svv-categories__row" :style="rowStyle">
        <li v-for="event in categories.eventsOf(category.id)" :key="event.key">
          <EventCard
            :event="event"
            :description-word-limit="shop.descriptionWordLimit"
            @open="emit('open', $event)"
            @share="emit('share', $event)"
            @book="emit('book', $event)"
          />
        </li>
      </ul>

      <ol v-if="categories.pageCountOf(category.id) > 1" class="svv-categories__dots">
        <li
          v-for="index in categories.pageCountOf(category.id)"
          :key="index"
          :class="{ 'is-active': categories.offsetOf(category.id) === index - 1 }"
        >
          <button
            type="button"
            :aria-label="String(index)"
            @click="categories.load(category.id, index - 1)"
          />
        </li>
      </ol>
    </section>
  </div>
</template>
