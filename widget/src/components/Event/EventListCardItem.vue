<template>
  <fragment>
    <EventCardListLayout
      v-if="listViewMode === 'list' || isBundlePage"
      :event="event"
      :widget-settings="widgetSettings"
      :show-sharing-controls="showSharingControls"
      :product-url="productUrl"
      :event-image="getEventImage(event)"
      :on-event-click="onEventClick"
      :event-date-formatted="eventDateFormatted"
      :event-provider-label="eventProviderLabel"
      :on-open-sharing-controls-click="onOpenSharingControlsClick"
      :event-time-formatted="eventTimeFormatted"
      :event-date-time="eventDateTime"
      :event-duration="eventDuration"
      :event-types-list="eventTypesList"
      :all-request-params="allRequestParams"
      :get-details-tooltip-content="getDetailsTooltipContent"
      :on-book-event-click="onBookEventClick"
      :event-price="eventPrice"
      :get-currency-symbol-text="getCurrencySymbolText"
      :shop-currency="shopCurrency"
      :is-bundle-page="isBundlePage"
      :events-list="eventsList"
      :displayed-filters="displayedFilters"
      :page-size="pageSize"
    />

    <EventCardGridLayout
      v-if="listViewMode === 'grid'"
      :event="event"
      :widget-settings="widgetSettings"
      :show-sharing-controls="showSharingControls"
      :product-url="productUrl"
      :event-image="getEventImage(event)"
      :on-event-click="onEventClick"
      :event-date-formatted="eventDateFormatted"
      :event-provider-label="eventProviderLabel"
      :on-open-sharing-controls-click="onOpenSharingControlsClick"
      :event-time-formatted="eventTimeFormatted"
      :event-date-time="eventDateTime"
      :event-duration="eventDuration"
      :event-types-list="eventTypesList"
      :all-request-params="allRequestParams"
      :get-details-tooltip-content="getDetailsTooltipContent"
      :on-book-event-click="onBookEventClick"
      :event-price="eventPrice"
      :get-currency-symbol-text="getCurrencySymbolText"
      :shop-currency="shopCurrency"
      :displayed-filters="displayedFilters"
      :page-size="pageSize"
    />
  </fragment>
</template>

<script>
// import moment from "moment-timezone";
import { mapActions, mapGetters } from "vuex";
import has from "lodash.has";
import forEach from "lodash.foreach";
import {
  getDurationDecorated,
  truncateString,
  getCurrencySymbol,
} from "@/services/utils";

import EventCardListLayout from "@/components/Event/EventCard/EventCardListLayout";
import EventCardGridLayout from "@/components/Event/EventCard/EventCardGridLayout";
import placeholderImage from "@/assets/images/placeholder.png";
import { Fragment } from "vue-frag";

export default {
  name: "EventListCardItem",
  components: {
    EventCardListLayout,
    EventCardGridLayout,
    Fragment,
  },
  props: {
    event: {
      type: Object,
      default: () => [],
    },
    onShowMoreDetailsClick: {
      type: Function,
      default: () => {},
    },
    onBookEventClick: {
      type: Function,
      default: () => {},
    },
    onEventClick: {
      type: Function,
      default: () => {},
    },
    eventDateTime: {
      type: Object,
      default: () => {},
    },
    eventsList: {
      type: Array,
      default: () => [],
    },
    moreDetailsLabel: {
      type: String,
      default: "",
    },
    eventPrice: {
      type: Number,
      default: 0,
    },
    openDetailsItem: {
      type: String,
      default: "",
    },
    shopCurrency: {
      type: String,
      default: "",
    },
    listViewMode: {
      type: String,
      default: "list",
    },
  },
  data() {
    return {
      openDetails: this.$store.state.common.widgetSettings.widget_style_settings
        .show_event_details_open,
      showSharingControls: false,
      productUrl: null,
    };
  },
  mounted() {
    // console.log(this.listViewMode);
  },
  computed: {
    ...mapGetters({
      allRequestParams: "search/allRequestParams",
      widgetSettings: "common/widgetSettings",
      allEventTypes: "types/eventTypes",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      isBundlePage: "events/isBundlePage",
      pageSize: "events/pageSize",
    }),
    eventDuration() {
      return getDurationDecorated(this.event.duration, [
        this.$t("globalWidgetsTranslations.hourLabelSingular"),
        this.$t("globalWidgetsTranslations.hourLabelPlural"),
        this.$t("globalWidgetsTranslations.minuteLabelSingular"),
        this.$t("globalWidgetsTranslations.minuteLabelPlural"),
      ]);
    },
    displayedFilters() {
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
    eventDateFormatted() {
      switch (this.widgetsCurrentLanguage) {
        case "zh-cn":
        case "ja":
        case "ko":
          // if (
          //   this.widgetSettings.widget_style_settings.date_format &&
          //   this.widgetSettings.widget_style_settings.date_format.length > 0
          // ) {
          //   const formattedDate = moment(
          //     this.eventDateTime.dateFullAsia

          //   ).locale.format(widgetSettings.widget_style_settings.date_format)
          //   return formattedDate;
          // } else {
          //   }

          return this.eventDateTime.dateFullAsia;
        default:
          // if (
          //   this.widgetSettings.widget_style_settings.date_format &&
          //   this.widgetSettings.widget_style_settings.date_format.length > 0
          // ) {
          //   const formattedDate = moment(this.eventDateTime.dateFull);
          //   return formattedDate.format(
          //     this.widgetSettings.widget_style_settings.date_format
          //   );
          // } else {
          //   }
          return this.eventDateTime.dateFull;
      }
    },
    eventTimeFormatted() {
      if (!this.widgetSettings.widget_style_settings.time_format_24_hours)
        return `${this.eventDateTime.timeSimple}${this.eventDateTime.timeDayPart}`;
      return this.eventDateTime.timeSimple24;
    },
    eventProviderLabel() {
      const fields = this.event.custom_fields || this.event;
      if (fields.custom_field_1_name === "Link" &&
          String(fields.custom_field_1_value || "").trim()) return "Hybrid";
      switch (this.event.provider) {
        case "zoom":
          if (this.event.type === "webinar") {
            return this.$t("mainWidget.webinarLabel");
          } else if (
            this.event.type === "meeting" &&
            this.event.is_live_shopping
          ) {
            return this.$t("mainWidget.liveShoppingLabel");
          } else if (
            this.event.custom_field_1_name !== "Link" &&
            this.event.custom_field_1_name !== "Meeting link"
          ) {
            return this.$t("mainWidget.virtualEventLabel");
          }

        case "offline":
          if (
            this.event.custom_field_1_name === "Link" ||
            this.event.custom_field_1_name === "Meeting link"
          )
            return this.$t("mainWidget.virtualEventLabel");
          else return this.$t("mainWidget.inPersonEventLabel");
        default:
          return "";
      }
    },
    eventTypesList() {
      const itemsList = [];
      const { available_filters } = this.widgetSettings.widget_style_settings;

      if (
        available_filters.indexOf("locations") >= 0 &&
        this.event.location_id
      ) {
        const typeData = this.allEventTypes.locations.find(
          (item) => item.id === Number.parseInt(this.event.location_id, 10),
        );
        itemsList.push({
          ...typeData,
          typeName: "location",
          name: this.$t("customFilters.filter_label_locations"),
          value: typeData ? typeData.name : "",
        });
      }
      if (
        available_filters.indexOf("languages") >= 0 &&
        this.event.language_id
      ) {
        const typeData = this.allEventTypes.languages.find(
          (item) => item.id === Number.parseInt(this.event.language_id, 10),
        );
        itemsList.push({
          typeName: "language",
          name: this.$t("customFilters.filter_label_languages"),
          value: typeData ? typeData.name : "",
          details: false,
        });
      }
      if (
        available_filters.indexOf("categories") >= 0 &&
        this.event.category_id
      ) {
        const typeData = this.allEventTypes.categories.find(
          (item) => item.id === Number.parseInt(this.event.category_id, 10),
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
        this.event.members_id &&
        this.event.members_id.length > 0
      ) {
        const membersList = [];
        forEach(this.event.members_id.split(", "), (memberId) => {
          const memberData = this.allEventTypes.members.find(
            (member) => member.id === Number.parseInt(memberId, 10),
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

      // console.log('itemsList - ', itemsList);

      return itemsList;
    },
  },
  watch: {
    openDetailsItem(newVal) {
      if (
        !this.$store.state.common.widgetSettings.widget_style_settings
          .show_event_details_open
      ) {
        this.openDetails = newVal === this.event.wgtItemId;
      }
    },
  },
  methods: {
    ...mapActions({
      fetchProductDetails: "events/fetchProductDetails",
    }),
    has,
    truncateString,
    getCurrencySymbol,

    getCurrencySymbolText(rawCurrency) {
      if (this.widgetSettings.widget_style_settings.currency_format === "sign")
        return getCurrencySymbol(rawCurrency);
      return rawCurrency;
    },
    onShowMoreDetails(e) {
      if (this.widgetSettings.widget_style_settings.show_event_details_open) {
        this.openDetails = !this.openDetails;
      }
      this.onShowMoreDetailsClick(e, this.event);
    },
    getEventImage(currentEvent) {
      return currentEvent.product && currentEvent.product.image_url
        ? currentEvent.product.image_url
        : `${servvAjax.assets_url}img/placeholder.png`;
    },
    getDetailsTooltipContent(item) {
      let itemsList = "";

      switch (item.typeName) {
        case "member":
          if (item.description && item.description.length > 0) {
            itemsList = `<div class="tooltip-content-item">
                  <div class="tooltip-content-item-label">${this.$t(
                    "customFilters.filterPropertyDetailsLabel",
                  )}: </div>
                  <div class="tooltip-content-item-value">${
                    item.description
                  }</div>
                </div>`;
          }
          if (item.email && item.email.length > 0) {
            itemsList += `<div class="tooltip-content-item">
                  <div class="tooltip-content-item-label">${this.$t(
                    "customFilters.filterPropertyEmailLabel",
                  )}: </div>
                  <div class="tooltip-content-item-value">${item.email}</div>
                </div>`;
          }
          if (item.phone && item.phone.length > 0) {
            itemsList += `<div class="tooltip-content-item">
                  <div class="tooltip-content-item-label">${this.$t(
                    "customFilters.filterPropertyPhoneLabel",
                  )}: </div>
                  <div class="tooltip-content-item-value">${item.phone}</div>
                </div>`;
          }
          break;
        case "location":
          if (item.details && item.details.length > 0) {
            itemsList = `<div class="tooltip-content-item">
                  <div class="tooltip-content-item-label">${this.$t(
                    "customFilters.filterPropertyDetailsLabel",
                  )}: </div>
                  <div class="tooltip-content-item-value">${item.details}</div>
                </div>`;
          }
          if (item.operational_hours && item.operational_hours.length > 0) {
            itemsList += `<div class="tooltip-content-item">
                  <div class="tooltip-content-item-label">${this.$t(
                    "customFilters.filterPropertyOperationalHoursLabel",
                  )}: </div>
                  <div class="tooltip-content-item-value">${
                    item.operational_hours
                  }</div>
                </div>`;
          }
          break;
        default:
          if (item.details && item.details.length > 0) {
            itemsList += `<div class="tooltip-content-item">
                  <div class="tooltip-content-item-label">${this.$t(
                    "customFilters.filterPropertyDetailsLabel",
                  )}: </div>
                  <div class="tooltip-content-item-value">${item.details}</div>
                </div>`;
          }
      }

      return itemsList.length > 0
        ? `<div class="tooltip-custom-content">${itemsList}</div>`
        : false;
    },
    async onOpenSharingControlsClick() {
      // showSharingControls: false,
      //     productUrl: null,

      if (this.showSharingControls) {
        this.showSharingControls = false;
        return;
      }

      if (!this.productUrl) {
        if (!this.event.product) return;
        // const productHandle = await this.fetchProductDetails(
        //   this.event.product.parent_product_id
        // );

        this.productUrl = this.event.product.post_url;
      }

      this.showSharingControls = true;
    },
  },
};
</script>
