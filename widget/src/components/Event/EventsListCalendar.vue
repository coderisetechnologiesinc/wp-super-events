<template>
  <div
    class="text-center section"
    style="min-height: 700px; position: relative"
  >
    <div
      id="calendar-card-portal"
      :class="{ 'card-animate': cardAnimating }"
      :style="{
        top: cardPosition && cardPosition.y,
        left: cardPosition && cardPosition.x,
      }"
      v-if="selectedEvent && cardPosition"
    >
      <div class="svv-event-card-modal-control">
        <a href="#" class="calendar-card-control" @click.prevent="closeModal">
          <CloseIcon />
        </a>
      </div>
      <CalendarCard
        :event="selectedEvent.customData.event"
        :widget-settings="widgetSettings"
        :show-sharing-controls="showSharingControls"
        :product-url="productUrl"
        :event-image="getEventImage"
        :on-event-click="onEventClick"
        :event-date-formatted="
          eventDateFormatted(selectedEvent.customData.event)
        "
        :event-provider-label="
          eventProviderLabel(selectedEvent.customData.event)
        "
        :on-open-sharing-controls-click="onOpenSharingControlsClick"
        :event-time-formatted="
          eventTimeFormatted(selectedEvent.customData.event)
        "
        :event-date-time="getEventDateTime(selectedEvent.customData.event)"
        :event-duration="eventDuration(selectedEvent.customData.event)"
        :event-types-list="eventTypesList(selectedEvent.customData.event)"
        :all-request-params="allRequestParams"
        :get-details-tooltip-content="getDetailsTooltipContent"
        :on-book-event-click="onBookEventClick"
        :event-price="getEventPrice(selectedEvent.customData.event)"
        :get-currency-symbol-text="getCurrencySymbolText"
        :shop-currency="widgetSettings.currency"
        :displayed-filters="displayedFilters(selectedEvent.customData.event)"
      />
    </div>

    <v-calendar
      class="servv-calendar custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      :view="viewMode"
      disable-page-swipe
      is-expanded
      @update:from-page="onPageChange"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="svv-day-wrapper">
          <span class="day-label">{{ day.day }}</span>

          <div class="svv-day-scroll">
            <div
              v-for="attr in attributes"
              :key="attr.key"
              class="svv-vc-event"
              @click="(e) => onCalendarEventClick(attr, e)"
            >
              <div class="svv-day-event-line">
                {{ attr.customData.title }}
              </div>
              <div class="svv-day-event-line">
                <div class="item-icon">
                  <ClockIcon />
                </div>
                <div>{{ attr.customData.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import forEach from "lodash.foreach";
import {
  getDurationDecorated,
  getItemDateTimeDataFormatted,
  getCurrencySymbol,
} from "@/services/utils";
import CalendarCard from "./EventCard/CalendarCard.vue";
import CloseIcon from "@/assets/images/icons/close.svg";
import ClockIcon from "@/assets/images/icons/clock.svg";
import moment from "moment-timezone";

export default {
  name: "EventsListCalendar",
  props: {
    attributes: {
      type: Array,
      default: () => [],
    },
    onBookEventClick: {
      type: Function,
      default: () => {},
    },
    onEventClick: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    CalendarCard,
    CloseIcon,
    ClockIcon,
  },
  data() {
    return {
      masks: {
        weekdays: "WWW",
      },
      viewMode: "monthly",
      selectedEvent: null,
      cardPosition: null,
      cardAnimating: false,
      productUrl: null,
      showSharingControls: false,
    };
  },
  watch: {
    attributes: {
      deep: true,
      handler() {
        this.syncRowsVisibility();
      },
    },
  },
  computed: {
    ...mapGetters({
      widgetSettings: "common/widgetSettings",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      allEventTypes: "types/eventTypes",
      allRequestParams: "search/allRequestParams",
      openDesktopCalendar: "common/openDesktopCalendar",
    }),

    getEventImage() {
      const event =
        this.selectedEvent &&
        this.selectedEvent.customData &&
        this.selectedEvent.customData.event;
      return event && event.product && event.product.image_src
        ? event.product.image_src
        : "https://servv-images.s3.us-east-2.amazonaws.com/placeholder.png";
    },
  },
  methods: {
    ...mapActions({
      fetchProductDetails: "events/fetchProductDetails",
    }),
    ...mapMutations({
      setOpenDesktopCalendar: "common/setOpenDesktopCalendar",
    }),
    closeModal() {
      this.selectedEvent = null;
      this.cardPosition = null;
    },
    getEventDateTime(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
      );
    },

    onPageChange({ month, year }) {
      const base = moment([year, month - 1]);
      this.$emit("month-change", base);
      this.$nextTick(() => {
        this.syncRowsVisibility();
      });
    },

    initCalendarObserver() {
      const calendarEl = this.$el.querySelector(".vc-weeks");
      if (!calendarEl) return;

      this._calendarObserver = new MutationObserver(() => {
        this.syncRowsVisibility();
      });

      this._calendarObserver.observe(calendarEl, {
        childList: true,
        subtree: true,
      });
    },

    syncRowsVisibility() {
      const root = this.$el;
      if (!root) return;

      const rowsToCheck = [1, 6, 7];

      rowsToCheck.forEach((rowNum) => {
        const cells = root.querySelectorAll(`.vc-grid-cell-row-${rowNum}`);
        if (!cells.length) return;

        const hasInMonth = Array.from(cells).some((cell) =>
          cell.querySelector(".vc-day.in-month")
        );

        cells.forEach((cell) => {
          if (!hasInMonth) cell.remove();
        });
      });
    },
    async onOpenSharingControlsClick() {
      if (this.showSharingControls) {
        this.showSharingControls = false;
        return;
      }

      if (!this.productUrl) {
        if (!this.selectedEvent.customData.event.product) return;
        const productHandle = await this.fetchProductDetails(
          this.selectedEvent.customData.event.product.parent_product_id
        );
        this.productUrl = `${window.location.origin}/products/${productHandle}?variant=${this.selectedEvent.customData.event.product.product_id}`;
      }

      this.showSharingControls = true;
    },
    eventTimeFormatted(event) {
      const eventDateTime = this.getEventDateTime(event);
      if (!this.widgetSettings.widget_style_settings.time_format_24_hours)
        return `${eventDateTime.timeSimple}${eventDateTime.timeDayPart}`;
      return eventDateTime.timeSimple24;
    },
    eventDuration(event) {
      return getDurationDecorated(event.duration, [
        this.$t("globalWidgetsTranslations.hourLabelSingular"),
        this.$t("globalWidgetsTranslations.hourLabelPlural"),
        this.$t("globalWidgetsTranslations.minuteLabelSingular"),
        this.$t("globalWidgetsTranslations.minuteLabelPlural"),
      ]);
    },
    eventDateFormatted(event) {
      switch (this.widgetsCurrentLanguage) {
        case "zh-cn":
        case "ja":
        case "ko":
          return event.dateFullAsia;
        default:
          return event.dateFull;
      }
    },
    getCurrencySymbolText() {
      if (this.widgetSettings.widget_style_settings.currency_format === "sign")
        return getCurrencySymbol(this.widgetSettings.currency);
      return this.widgetSettings.currency;
    },
    eventProviderLabel(event) {
      const fields = event.custom_fields || event;
      if (fields.custom_field_1_name === "Link" &&
          String(fields.custom_field_1_value || "").trim()) return "Hybrid";
      switch (event.provider) {
        case "zoom":
          if (event.type === "webinar") {
            return this.$t("mainWidget.webinarLabel");
          } else if (event.type === "meeting" && event.is_live_shopping) {
            return this.$t("mainWidget.liveShoppingLabel");
          } else {
            return this.$t("mainWidget.virtualEventLabel");
          }
        case "offline":
          return this.$t("mainWidget.inPersonEventLabel");
        default:
          return "";
      }
    },
    getEventPrice(event) {
      return event.product_price || 0;
    },
    displayedFilters(event) {
      if (
        this.widgetSettings.widget_style_settings.ew_widget_desplayed_filter &&
        this.widgetSettings.widget_style_settings.ew_widget_desplayed_filter
          .length > 0
      ) {
        return this.widgetSettings.widget_style_settings.ew_widget_desplayed_filter
          .split(",")
          .map((type) => type.toLowerCase());
      } else return [];
    },
    eventTypesList(event) {
      const itemsList = [];
      const { available_filters } = this.widgetSettings.widget_style_settings;

      if (available_filters.indexOf("locations") >= 0 && event.location_id) {
        const typeData = this.allEventTypes.locations.find(
          (item) => item.id === Number.parseInt(event.location_id, 10)
        );
        itemsList.push({
          ...typeData,
          typeName: "location",
          name: this.$t("customFilters.filter_label_locations"),
          value: typeData ? typeData.name : "",
        });
      }
      if (available_filters.indexOf("languages") >= 0 && event.language_id) {
        const typeData = this.allEventTypes.languages.find(
          (item) => item.id === Number.parseInt(event.language_id, 10)
        );
        itemsList.push({
          typeName: "language",
          name: this.$t("customFilters.filter_label_languages"),
          value: typeData ? typeData.name : "",
          details: false,
        });
      }
      if (available_filters.indexOf("categories") >= 0 && event.category_id) {
        const typeData = this.allEventTypes.categories.find(
          (item) => item.id === Number.parseInt(event.category_id, 10)
        );
        itemsList.push({
          ...typeData,
          typeName: "category",
          name: this.$t("customFilters.filter_label_categories"),
          value: typeData ? typeData.name : "",
        });
      }
      if (
        available_filters.indexOf("members") >= 0 &&
        event.members_id &&
        event.members_id.length > 0
      ) {
        const membersList = [];
        forEach(event.members_id.split(", "), (memberId) => {
          const memberData = this.allEventTypes.members.find(
            (member) => member.id === Number.parseInt(memberId, 10)
          );
          if (memberData) {
            membersList.push({
              ...memberData,
              typeName: "member",
            });
          }
        });
        itemsList.push({
          typeName: "member",
          name: this.$t("customFilters.filter_label_members"),
          details: false,
          multipleValue: membersList,
        });
      }

      return itemsList;
    },
    async onCalendarEventClick(attr, event) {
      this.cardAnimating = false;
      this.selectedEvent = attr;
      const target = event.target;
      const cell = target.closest(".vc-grid-cell");
      const cellRect = cell.getBoundingClientRect();

      const CARD_WIDTH = 250;

      this.cardPosition = { x: "-9999px", y: "-9999px" };
      await this.$nextTick();

      const cardEl = this.$el.querySelector("#calendar-card-portal");
      const cardInner = cardEl
        ? cardEl.querySelector(".svv-event-card-item.grid-layout-item")
        : null;
      const CARD_HEIGHT = cardInner
        ? cardInner.offsetHeight
        : cardEl
        ? cardEl.offsetHeight
        : 400;

      const root = this.$el;
      const rootRect = root.getBoundingClientRect();
      const scrollTop = root.scrollTop;
      const scrollLeft = root.scrollLeft;

      const calendarEl = this.$el.querySelector(".custom-calendar");
      const calendarRect = calendarEl.getBoundingClientRect();

      const cellLeft = cellRect.left - rootRect.left + scrollLeft;
      const cellRight = cellRect.right - rootRect.left + scrollLeft;
      const cellTop = cellRect.top - rootRect.top + scrollTop;
      const cellBottom = cellRect.bottom - rootRect.top + scrollTop;

      const calendarRight = calendarRect.right - rootRect.left + scrollLeft;
      const calendarBottom = calendarRect.bottom - rootRect.top + scrollTop;

      const overflowRight = cellRight + CARD_WIDTH > calendarRight;
      const overflowBottom = cellBottom + CARD_HEIGHT > calendarBottom;

      let x, y;

      if (!overflowRight && !overflowBottom) {
        x = cellRight;
        y = cellTop;
      } else if (overflowRight && !overflowBottom) {
        x = cellLeft - CARD_WIDTH;
        y = cellTop;
      } else if (!overflowRight && overflowBottom) {
        x = cellRight;
        y = cellBottom - CARD_HEIGHT;
      } else {
        x = cellLeft - CARD_WIDTH;
        y = cellBottom - CARD_HEIGHT;
      }

      this.cardPosition = { x: x + "px", y: y + "px" };
      await this.$nextTick();
      this.cardAnimating = true;
    },
  },
  mounted() {
    if (this.openDesktopCalendar) this.setOpenDesktopCalendar(false);

    this.initCalendarObserver();

    this.syncRowsVisibility();
  },
  beforeDestroy() {
    if (this._calendarObserver) {
      this._calendarObserver.disconnect();
    }
  },
};
</script>

<style lang="scss" scoped>
::v-deep ::-webkit-scrollbar {
  width: 0px;
}

::v-deep ::-webkit-scrollbar-track {
  display: none;
}

.custom-calendar {
  border-radius: 10px;
}

::v-deep .vc-grid-cell.hidden-row {
  display: none !important;
}

::v-deep .custom-calendar.vc-container {
  $day-border: 1px solid #b8c2cc;
  $day-border-highlight: 1px solid #b8c2cc;
  $day-width: 90px;
  $day-height: 120px;
  $weekday-border: 1px solid #eaeaea;

  border-radius: 10px;
  width: 100%;

  .grid {
    margin-bottom: 0 !important;
  }

  .vc-header {
    background-color: transparent;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .vc-weeks {
    padding: 0;
  }

  .vc-weekday {
    background-color: transparent;
    border-bottom: $weekday-border;
    border-top: none;
    padding: 5px 0;
  }

  .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: $day-height;
    min-width: $day-width;
    background-color: white;

    &:not(.on-bottom) {
      border-bottom: $day-border;
      &.weekday-1 {
        border-bottom: $day-border-highlight;
      }
    }

    &:not(.on-right) {
      border-right: $day-border;
    }

    &.svv-vc-event {
      background-color: var(--svv_blue_ultra_dark) !important;
    }
  }

  .vc-day-dots {
    margin-bottom: 5px;
  }

  .svv-vc-event {
    background-color: var(--servv-primary-color) !important;
    color: white;
    border-radius: 3px;
    padding: 4px;
    font-size: 12px;
    box-shadow: 1px 1px 3px;
    margin-bottom: 2px;
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  .svv-day-event-line {
    display: flex;
    flex-direction: row;
    align-items: center;

    .item-icon {
      width: 12px;
      height: 12px;
      margin-top: -3px;
      margin-right: 0.25em;
    }
  }

  .vc-grid-container {
    overflow: hidden;
  }

  .vc-day.on-bottom.weekday-position-1 {
    border-bottom-left-radius: 10px;
  }

  .vc-day.on-bottom.on-right {
    border-bottom-right-radius: 10px;
  }
}

#calendar-card-portal {
  position: absolute !important;
  z-index: 100;
  width: 205px;
  transform-origin: top center;
  opacity: 0;
  transform: scaleY(1);
}

#calendar-card-portal.card-animate {
  animation: card-expand 0.2s ease-out forwards;
}

.svv-event-card-modal-control {
  position: absolute;
  right: 7px;
  top: 7px;
  z-index: 5;
  line-height: 30px;
  display: flex;
  justify-content: center;

  .calendar-card-control {
    background: white;
    border-radius: 12px;
    font-size: 20px;
    line-height: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@keyframes card-expand {
  from {
    opacity: 0;
    transform: scaleY(0.85);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

::v-deep .custom-calendar.vc-container {
  .vc-header {
    color: var(--svv_text_black);
    border-bottom: 1px solid var(--svv_text_border_gray);
  }

  .vc-weekday {
    color: var(--svv_text_gray_dark);
    border-bottom: 1px solid var(--svv_text_border_gray);
  }

  .vc-day {
    background-color: #fff;
    height: 120px;
    padding: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .day-label {
    color: var(--svv_text_black);
    font-weight: 600;
  }

  .svv-vc-event {
    background-color: var(--servv-primary-color);
    color: #fff;
    font-weight: 500;
    box-shadow: 0 2px 6px rgba(94, 32, 219, 0.15);

    &:hover {
      background-color: var(--svv_blue_dark);
    }
  }

  .svv-day-event-line {
    color: #fff;
  }

  .svv-day-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .svv-day-scroll {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 2px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--svv_text_border_gray);
      border-radius: 4px;
    }
  }
}

.vc-grid-cell-row-1:not(:has(.vc-day.in-month)),
.vc-grid-cell-row-2:not(:has(.vc-day.in-month)),
.vc-grid-cell-row-3:not(:has(.vc-day.in-month)),
.vc-grid-cell-row-4:not(:has(.vc-day.in-month)),
.vc-grid-cell-row-5:not(:has(.vc-day.in-month)),
.vc-grid-cell-row-6:not(:has(.vc-day.in-month)),
.vc-grid-cell-row-7:not(:has(.vc-day.in-month)) {
  display: none !important;
}

::v-deep
  .vc-weeks:not(:has(.vc-grid-cell-row-6 .in-month))
  .vc-grid-cell-row-6 {
  display: none !important;
}

::v-deep
  .vc-weeks:not(:has(.vc-grid-cell-row-5 .in-month))
  .vc-grid-cell-row-5 {
  display: none !important;
}

::v-deep .custom-calendar.vc-container {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #b8c2cc;
}

::v-deep .vc-weeks > .vc-grid-cell:nth-last-child(-n + 7) .vc-day {
  border-bottom: none !important;
}
</style>
