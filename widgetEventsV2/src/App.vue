<script setup>
import { onMounted, ref } from "vue";

import { useRuntimeStore } from "@/api/wordpress";
import CalendarPanel from "@/components/CalendarPanel.vue";
import DateStrip from "@/components/DateStrip.vue";
import EventDrawer from "@/components/EventDrawer.vue";
import EventsCategories from "@/components/EventsCategories.vue";
import EventsList from "@/components/EventsList.vue";
import FiltersBar from "@/components/FiltersBar.vue";
import FiltersDrawer from "@/components/FiltersDrawer.vue";
import LanguageSelect from "@/components/LanguageSelect.vue";
import PaginationBar from "@/components/PaginationBar.vue";
import QuickDateFilters from "@/components/QuickDateFilters.vue";
import ResultsHead from "@/components/ResultsHead.vue";
import SearchField from "@/components/SearchField.vue";
import SharePanel from "@/components/SharePanel.vue";
import SummaryCards from "@/components/SummaryCards.vue";
import TimezoneSelect from "@/components/TimezoneSelect.vue";
import ViewModeToggle from "@/components/ViewModeToggle.vue";
import WidgetShell from "@/components/WidgetShell.vue";
import { openBookingLink, useBookingStore } from "@/stores/booking";
import { useEventsStore } from "@/stores/events";
import { useProductLinksStore } from "@/stores/productLinks";
import { useShareStore } from "@/stores/share";
import { useShopStore } from "@/stores/shop";
import { useWidgetStore } from "@/stores/widget";

const widget = useWidgetStore();
const shop = useShopStore();
const events = useEventsStore();
const booking = useBookingStore();
const share = useShareStore();
const productLinks = useProductLinksStore();
const openedEvent = ref(null);
const detailError = ref('');
const detailLoading = ref(false);
const { api, runtime } = useRuntimeStore();
let openRequest = 0;
async function openEvent(event) {
  // The shop can ask for the event's own page instead of the drawer. Preview
  // inside the block editor keeps the drawer: there is nowhere to navigate to.
  if (shop.openEventPage && !runtime.preview && productLinks.goToPage(event))
    return;

  const request = ++openRequest;
  detailError.value = ''; detailLoading.value = true;
  try {
    const info = await api.fetchEventInfo(event.productId);
    if (request !== openRequest) return;
    const meeting = info?.meeting || info || {};
    const occurrence = meeting.occurrences?.find((item) => String(item.id) === String(event.occurrenceId));
    openedEvent.value = { ...event, tickets: occurrence?.tickets || meeting.tickets || info?.tickets || [] };
  } catch (error) { if (request === openRequest) detailError.value = error.message; }
  finally { if (request === openRequest) detailLoading.value = false; }
}
function closeEvent() { openRequest++; openedEvent.value = null; booking.close(); }

const bookFromDrawer = ({ event, ...details }) => booking.start(event, details);

const bookFromCard = async (event) => {
  if (runtime.preview) { await openEvent(event); return; }
  if (event.bookingLink) {
    openBookingLink(event.bookingLink);
    return;
  }

  if (shop.redirectToProductPage) {
    const url = await productLinks.urlFor(event);

    if (url) {
      openBookingLink(url);
      return;
    }
  }

  await openEvent(event);
};

onMounted(widget.init);
</script>

<template>
  <div class="svv-wgt-v2">
    <WidgetShell>
      <template #header>
        <SearchField v-if="shop.controls.search" />
        <FiltersDrawer />
        <ViewModeToggle v-if="shop.showViewToggle" />
        <LanguageSelect v-if="shop.showLanguageSelector" />
        <TimezoneSelect v-if="shop.controls.timezoneSelector" />
      </template>

      <template v-if="shop.controls.mobileDateStrip" #strip>
        <DateStrip />
      </template>

      <template #aside>
        <CalendarPanel v-if="shop.showCalendar" />
        <QuickDateFilters v-if="shop.showQuickDateFilters" />
        <SummaryCards v-if="shop.controls.summaryCards" />
        <FiltersBar v-if="shop.filtersInAside" />
      </template>

      <p v-if="detailError" role="alert">{{ detailError }}</p>
      <p v-if="detailLoading" role="status">Loading event details…</p>
      <FiltersBar v-if="!shop.filtersInAside" />

      <ResultsHead v-if="!shop.isCategoryView" />

      <EventsCategories
        v-if="shop.isCategoryView"
        @open="openEvent($event)"
        @share="share.open($event)"
        @book="bookFromCard($event)"
      />

      <template v-else>
        <EventsList
          :events="events.visibleItems"
          :loading="events.loading"
          :error="!!events.error"
          @open="openEvent($event)"
          @share="share.open($event)"
          @book="bookFromCard($event)"
        />

        <PaginationBar />
      </template>

      <EventDrawer
        :event="openedEvent"
        @close="closeEvent"
        @open="openEvent($event)"
        @share="share.open($event)"
        @book="bookFromDrawer"
      />

      <SharePanel />
    </WidgetShell>
  </div>
</template>

<style lang="scss">
@use "@/styles/tokens.scss";
@use "@/styles/wordpress";
</style>
