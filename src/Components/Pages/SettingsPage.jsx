// SettingsPage.jsx - Refactored with card layout
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utilities/adminApi";
import moment from "moment";
import { toast } from "react-toastify";
import startCase from "lodash.startcase";
import capitalize from "lodash.capitalize";
import {
  Cog6ToothIcon,
  BellIcon,
  LanguageIcon,
  CommandLineIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import BreadCrumbs from "../Menu/BreadCrumbs";
import PageWrapper from "./PageWrapper";
import PageContent from "../Containers/PageContent";
import PageHeader from "../Containers/PageHeader";
import pageStyles from "./SettingsPage.module.scss";
import { timezonesList } from "../../utilities/timezones";
import {
  mergeTranslations,
  getTranslationsTpl,
} from "../../utilities/translations";
import { getLanguagesList } from "../../utilities/languages";
import { useServvStore } from "../../store/useServvStore";
import CheckboxItem from "../Controls/CheckboxItem";
import NewInputFieldControl from "../Controls/NewInputFieldControl";
import BlockStack from "../Containers/BlockStack";

// Import new components
import SettingsSection from "./Settings/SettingsSection";
import GeneralSettings from "./Settings/GeneralSettings";
import RemindersSettings from "./Settings/RemindersSettings";
import CheckoutSettings from "./Settings/CheckoutSettings";
import TranslationsSection from "./Settings/TranslationsSection";
import WorkflowSettings from "./Settings/WorkflowSettings";
import SpinnerLoader from "./SpinnerLoader";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [zoomAccount, setZoomAccount] = useState(null);
  const [stripeAccount, setStripeAccount] = useState(null);
  const [defaultEndTime, setDefaultEndTime] = useState(moment());

  const [tabsList, setTabsList] = useState([]);
  const [n8nCurentSettings, setN8nSettings] = useState({});
  const [isN8NSettingsUpdated, setIsN8NSettingsUpdated] = useState(false);
  const [langForEdit, setLangForEdit] = useState("English");
  const [activeSection, setActiveSection] = useState(null);

  const stripeConnected = useServvStore((s) => s.stripeConnected);
  const fetchSettings = useServvStore((s) => s.fetchSettings);
  const timezones = Object.keys(timezonesList).map((zone) => ({
    id: zone,
    name: timezonesList[zone],
  }));

  const viewModeOptions = [
    { label: "List", value: "list" },
    { label: "Grid", value: "grid" },
    { label: "Calendar", value: "calendar" },
  ];

  const pageSizes = [
    { label: "12 items", value: 12 },
    { label: "24 items", value: 24 },
    { label: "48 items", value: 48 },
  ];

  const filters = ["Locations", "Languages", "Categories", "Members"];
  const availableViewMods = viewModeOptions.map((opt) => opt.label);
  const availablePageSizes = pageSizes.map((opt) => opt.label);

  const timeOptions = [
    { label: "24 hours", value: 24 },
    { label: "12 hours", value: 12 },
  ].map((format) => format.label);

  const eventTypes = [
    { label: "Event", value: "offline" },
    { label: "Zoom Event", value: "zoom" },
  ];

  const currencyOptions = [
    { label: "Currency sign: $ / 元" },
    { label: "Alphabets: USD / CAD / CNY" },
  ].map((format) => format.label);

  // Responsive helpers
  const responsiveBlockStack = "w-full min-w-0";
  const responsiveInlineStack = "flex-col md:flex-row w-full min-w-0";
  const responsiveInput = "w-full min-w-0";

  // All the handler functions and utility functions from original file
  // ... (keeping all existing functions: validateWidgetSettings, validateSettings, etc.)

  const validateWidgetSettings = async (newSettings) => {
    let settings = { ...newSettings };
    if (settings.ew_events_list_view === undefined)
      settings.ew_events_list_view = "list";
    if (settings.ew_events_grid_fluid_mode === undefined)
      settings.ew_events_grid_fluid_mode = false;
    if (settings.ew_card_description_display_words_limit === undefined)
      settings.ew_card_description_display_words_limit = 9;
    if (settings.ew_list_item_description_display_words_limit === undefined)
      settings.ew_list_item_description_display_words_limit = 9;
    if (settings.ew_events_list_page_size_default === undefined)
      settings.ew_events_list_page_size_default = 12;
    if (settings.available_filters === undefined)
      settings.available_filters = "locations,languages,categories,members";
    if (settings.ew_show_language_selector === undefined)
      settings.ew_show_language_selector = true;
    if (settings.ew_show_top_filters === undefined)
      settings.ew_show_top_filters = true;
    if (settings.show_calendar === undefined) settings.show_calendar = true;
    if (settings.permanently_open_calendar === undefined)
      settings.permanently_open_calendar = true;
    if (settings.show_widget_title === undefined)
      settings.show_widget_title = true;
    if (settings.ew_events_counter === undefined)
      settings.ew_events_counter = true;
    if (settings.ew_hide_view_mode_switch === undefined)
      settings.ew_hide_view_mode_switch = false;
    if (settings.show_event_images === undefined)
      settings.show_event_images = true;
    if (settings.ew_image_aspect === undefined)
      settings.ew_image_aspect = false;
    if (settings.show_events_list_separator_badge === undefined)
      settings.show_events_list_separator_badge = true;
    if (settings.ew_show_quantity === undefined)
      settings.ew_show_quantity = false;
    if (settings.ew_show_share_button === undefined)
      settings.ew_show_share_button = true;
    if (settings.ew_show_event_type_badge === undefined)
      settings.ew_show_event_type_badge = true;
    if (settings.translations === undefined) {
      settings.translations = mergeTranslations(
        getTranslationsTpl(),
        settings?.settings?.widget_style_settings?.translations || {},
      );
    }
    return settings;
  };

  const validateSettings = async (newSettings) => {
    let validatedSettings = { ...newSettings };
    validatedSettings.settings.widget_style_settings =
      validatedSettings.settings.widget_style_settings.length > 0
        ? JSON.parse(validatedSettings.settings.widget_style_settings)
        : {};
    validatedSettings.settings.admin_dashboard =
      validatedSettings.settings.admin_dashboard.length > 0
        ? JSON.parse(validatedSettings.settings.admin_dashboard)
        : {};

    if (!newSettings?.settings?.admin_dashboard?.default_timezone) {
      validatedSettings.settings.admin_dashboard.default_timezone =
        "America/Los_Angeles";
    }
    if (!newSettings?.settings?.admin_dashboard?.default_duration) {
      validatedSettings.settings.admin_dashboard.default_duration = 1;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_start_time) {
      validatedSettings.settings.admin_dashboard.default_start_time = moment(
        "10:00 am",
        "hh:mm a",
      ).format("hh:mm a");
    }
    if (!newSettings?.settings?.admin_dashboard?.default_price) {
      validatedSettings.settings.admin_dashboard.default_price = 10.0;
    }
    if (!newSettings.settings) {
      validatedSettings.settings.time_format_24_hours = false;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_quantity) {
      validatedSettings.settings.admin_dashboard.default_quantity = 1;
    }
    if (!newSettings?.settings?.admin_dashboard?.default_event_type) {
      validatedSettings.settings.admin_dashboard.default_event_type = "offline";
    }
    if (!newSettings.currency || newSettings.currency.length === 0) {
      validatedSettings.currency = "sign";
    }
    if (!newSettings.settings) {
      validatedSettings.hide_time_zone = false;
    }
    if (!newSettings.first_reminder_hours) {
      validatedSettings.first_reminder_hours = 24;
    }
    if (!newSettings.second_reminder_hours) {
      validatedSettings.second_reminder_hours = 2;
    }

    validatedSettings.settings.widget_style_settings =
      await validateWidgetSettings(
        validatedSettings.settings.widget_style_settings,
      );

    const baseTabs = [
      { label: "General", value: 0 },
      { label: "Reminders", value: 1 },
    ];

    const translationTabs = [
      { label: "Translations", value: 6 },
    ];

    const planId = validatedSettings?.current_plan?.id;

    let tabs = [...baseTabs];

    if (planId) {
      if (!newSettings.is_wp_marketplace) {
        tabs.push(...translationTabs);
      }
    } else {
      tabs.push(...translationTabs);
    }

    setTabsList(tabs);
    setSettings({ ...validatedSettings });
  };

  const updateN8NSettings = (newVal) => {
    setN8nSettings({ ...newVal });
    setIsN8NSettingsUpdated(true);
  };

  const getN8nSettings = async () => {
    setLoading(true);
    const getN8nResponse = await axios.get(
      "/wp-json/servv-plugin/v1/n8n/settings",
      { headers: { "X-WP-Nonce": servvData.nonce } },
    );
    if (getN8nResponse?.status === 200) {
      setN8nSettings(getN8nResponse.data);
    }
    setLoading(false);
  };

  const saveN8nSettings = async () => {
    setLoading(true);
    let settingsForSave = n8nCurentSettings;
    if (
      settingsForSave?.new_booking_url?.length > 0 &&
      !settingsForSave.new_booking_method?.length
    ) {
      settingsForSave.new_booking_method = "POST";
    }
    if (
      settingsForSave?.canceled_booking_url?.length > 0 &&
      !settingsForSave.canceled_booking_method?.length
    ) {
      settingsForSave.canceled_booking_method = "POST";
    }
    if (
      settingsForSave?.event_created_url?.length > 0 &&
      !settingsForSave.event_created_method?.length
    ) {
      settingsForSave.event_created_method = "POST";
    }

    const saveN8nResponse = await axios({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/n8n/settings",
      headers: { "X-WP-Nonce": servvData.nonce },
      data: n8nCurentSettings,
    });

    if (saveN8nResponse?.status === 200) {
      setLoading(false);
    }
  };

  const getSettings = async () => {
    const getSettingsResponse = await axios(
      "/wp-json/servv-plugin/v1/shop/info",
      { headers: { "X-WP-Nonce": servvData.nonce } },
    ).catch(() => toast("WP Super Events was unable to fetch settings."));

    if (getSettingsResponse?.status === 200) {
      await validateSettings(getSettingsResponse.data);
    }
  };


  const getZoomAccount = async () => {
    const getZoomAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/zoom/account",
      { headers: { "X-WP-Nonce": servvData.nonce } },
    );
    if (getZoomAccountResponse?.status === 200) {
      setZoomAccount(getZoomAccountResponse.data);
    }
  };

  const getStripeAccount = async () => {
    const getStripeAccountResponse = await axios.get(
      "/wp-json/servv-plugin/v1/stripe/account",
      { headers: { "X-WP-Nonce": servvData.nonce } },
    );
    if (getStripeAccountResponse?.status === 200) {
      setStripeAccount(getStripeAccountResponse.data);
    }
  };

  const defaultWidgetLanguage =
    settings?.settings?.widget_style_settings?.widgets_default_language || "en";

  const translations = mergeTranslations(
    getTranslationsTpl(),
    settings?.settings?.widget_style_settings?.translations || {},
  );

  const getDefaultWidgetLanguageName = () => {
    const fullList = getLanguagesList();
    const langCode = fullList.filter(
      (lang) => lang.value === defaultWidgetLanguage,
    )[0]?.label;
    return langCode || "English";
  };

  const saveSettings = async () => {
    setLoading(true);
    const saveSettingsResponse = await axios({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/shop/settings",
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        ...settings,
        settings: {
          ...settings.settings,
          admin_dashboard: JSON.stringify(settings.settings.admin_dashboard),
          widget_style_settings: JSON.stringify(
            settings.settings.widget_style_settings,
          ),
        },
      },
    }).catch((err) => console.error(err));

    if (saveSettingsResponse?.status === 200) {
      toast("Settings saved successfully.");
      fetchSettings();
    }
    setLoading(false);
  };

  const saveAllSettings = async () => {
    if (servvData.servv_plugin_mode === "development") {
      await saveSettings();
      if (isN8NSettingsUpdated) {
        await saveN8nSettings();
      }
    } else {
      saveSettings();
      if (isN8NSettingsUpdated) {
        saveN8nSettings();
      }
    }
  };

  const getSettingsInfo = async () => {
    if (servvData.servv_plugin_mode === "development") {
      setLoading(true);
      await getSettings();
      await getN8nSettings();
      if (settings.current_plan && settings?.current_plan?.id !== 1) {
        await getZoomAccount();
        await getStripeAccount();
      }
      setLoading(false);
    } else {
      setLoading(true);
      getSettings();
      getN8nSettings();
      if (settings.curent_plan && settings?.current_plan?.id !== 1) {
        getZoomAccount();
        getStripeAccount();
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getSettingsInfo();
  }, []);

  const durationOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      if (i === 1) options.push({ label: "1 hour", value: 1 });
      else options.push({ label: `${i} hours`, value: i });
    }
    return options.map((option) => option.label);
  };

  // All handler functions
  const handleTimezoneChange = (zone) => {
    let currentSettings = { ...settings };
    let currentSelectedTimezone = timezones.findIndex(
      (timezone) => timezone.name === zone,
    );
    if (currentSelectedTimezone >= 0) {
      currentSettings.settings.admin_dashboard.default_timezone =
        timezones[currentSelectedTimezone].id;
      setSettings(currentSettings);
    }
  };

  const handleDefaultStartTimeChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.settings.admin_dashboard.default_start_time =
      newVal.format("hh:mm a");
    setDefaultEndTime(
      newVal
        .clone()
        .add(
          currentSettings.settings.admin_dashboard.default_duration,
          "hours",
        ),
    );
    setSettings(currentSettings);
  };

  const handleDefaultEndTimeChange = (newVal) => {
    let currentSettings = { ...settings };
    let startTime = moment(
      currentSettings.settings.admin_dashboard.default_start_time,
      "hh:mm a",
    );

    const base = moment().startOf("day");
    const startNormalized = base.clone().set({
      hour: startTime.hour(),
      minute: startTime.minute(),
    });
    let endNormalized = base.clone().set({
      hour: newVal.hour(),
      minute: newVal.minute(),
    });

    let diffMinutes = endNormalized.diff(startNormalized, "minutes");

    // If negative, end time is next day (crossed midnight)
    if (diffMinutes < 0) {
      endNormalized.add(1, "day");
      diffMinutes = endNormalized.diff(startNormalized, "minutes");
    }

    // console.log(
    //   "start:",
    //   startNormalized.format("hh:mm a"),
    //   "end:",
    //   newVal.format("hh:mm a"),
    //   "diff:",
    //   diffMinutes,
    // );

    currentSettings.settings.admin_dashboard.default_duration =
      diffMinutes > 0 ? diffMinutes / 60 : 1;

    setSettings(currentSettings);
  };

  const handleDefaultDurationChange = (newVal) => {
    let currentSettings = { ...settings };
    let duration = durationOptions().indexOf(newVal);
    currentSettings.settings.admin_dashboard.default_duration = duration + 1;
    const newTime = moment(
      currentSettings.settings.admin_dashboard.default_start_time,
      "hh:mm a",
    );
    setDefaultEndTime(newTime.clone().add(duration + 1, "hours"));
    setSettings(currentSettings);
  };


  const handleTimeFormatChange = (format) => {
    let currentSettings = { ...settings };
    const newFormat = format === "24 hours";
    currentSettings.settings.time_format_24_hours = newFormat;
    setSettings(currentSettings);
  };

  const handleHideTimezoneChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.hide_time_zone =
      !currentSettings.settings.hide_time_zone;
    setSettings(currentSettings);
  };

  const handleCurrencyChange = (currencyFormat) => {
    let currentSettings = { ...settings };
    if (currencyFormat === "Alphabets: USD / CAD / CNY")
      currentSettings.settings.widget_style_settings.currency_format =
        "alphabets";
    else
      currentSettings.settings.widget_style_settings.currency_format = "sign";
    setSettings(currentSettings);
  };

  const handleDefaultPriceChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.settings.admin_dashboard.default_price = newVal;
    setSettings(currentSettings);
  };

  const handleDefaultQuantityChange = (newVal) => {
    let currentSettings = { ...settings };
    if (newVal <= settings.free_registrants_limit)
      currentSettings.settings.admin_dashboard.default_quantity = newVal;
    setSettings(currentSettings);
  };
  const formatDuration = (duration) => {
    if (!duration) return "1 hour";
    const hours = Math.floor(duration);
    const minutes = Math.round((duration - hours) * 60);
    if (hours > 0 && minutes > 0)
      return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${
        minutes !== 1 ? "s" : ""
      }`;
    if (hours > 0) return `${hours} hour${hours !== 1 ? "s" : ""}`;
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  };
  const getDurationOptions = () => {
    const options = durationOptions();
    const duration = settings?.settings?.admin_dashboard?.default_duration;
    if (duration && !Number.isInteger(duration)) {
      const custom = formatDuration(duration);
      if (!options.includes(custom)) {
        options.push(custom);
      }
    }
    return options;
  };

  const getDefaultStartTime = () => {
    if (settings?.settings?.admin_dashboard?.default_start_time) {
      return moment(
        settings.settings.admin_dashboard.default_start_time,
        "hh:mm a",
      );
    }
    return moment("10:00 am", "hh:mm a");
  };

  const handleEmailRemindersStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.disable_emails =
      !currentSettings.settings.disable_emails;
    setSettings(currentSettings);
  };

  const handleFirstReminderStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.first_reminder =
      !currentSettings.settings.first_reminder;
    setSettings(currentSettings);
  };

  const handleSecondReminderStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.second_reminder =
      !currentSettings.settings.second_reminder;
    setSettings(currentSettings);
  };

  const handleFinishedReminderStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.finished_reminder =
      !currentSettings.settings.finished_reminder;
    setSettings(currentSettings);
  };

  const handleFirstReminderHoursChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.first_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };

  const handleSecondReminderHoursChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.second_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };

  const handleDefaultTypeChange = (newVal) => {
    let currentSettings = { ...settings };
    if (newVal === "Zoom Event")
      currentSettings.settings.admin_dashboard.default_event_type = "zoom";
    else
      currentSettings.settings.admin_dashboard.default_event_type = "offline";
    setSettings(currentSettings);
  };

  const handleFreeCheckoutChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.free_events_skip_checkout =
      !currentSettings.settings.free_events_skip_checkout;
    setSettings(currentSettings);
  };

  const handleSkipCaptchaChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.free_events_skip_captcha =
      !currentSettings.settings.free_events_skip_captcha;
    setSettings(currentSettings);
  };

  const handleMarketingConsentChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.free_checkout_marketing_checkbox =
      !currentSettings.settings.free_checkout_marketing_checkbox;
    setSettings(currentSettings);
  };

  const handleNewAdditionalEmailsChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.additional_reminder_emails = newVal;
    setSettings(currentSettings);
  };

  const handleAdditionalRemindersHoursChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.members_reminder_hours = newVal;
    setSettings(currentSettings);
  };

  const handleStaffMemberEmailChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.skip_members_in_calendar_files =
      !currentSettings.settings.skip_members_in_calendar_files;
    setSettings(currentSettings);
  };

  const getDefaultEndTime = () => {
    if (
      settings?.settings?.admin_dashboard?.default_start_time &&
      settings?.settings?.admin_dashboard?.default_duration
    ) {
      let newTime = moment(
        settings.settings.admin_dashboard.default_start_time,
        "hh:mm a",
      );
      newTime.add(settings.settings.admin_dashboard.default_duration, "hours");
      return newTime;
    }
    return moment("11:00 am", "hh:mm a");
  };

  const handleViewModeChange = (val) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings.ew_events_list_view =
      val.toLowerCase();
    setSettings(currentSettings);
  };

  const handleChangeFluidGrid = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode =
      !currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode;
    setSettings(currentSettings);
  };

  const selectedView = settings?.settings?.widget_style_settings
    ?.ew_events_list_view
    ? viewModeOptions[
        viewModeOptions
          .map((opt) => opt.value)
          .indexOf(settings.settings.widget_style_settings.ew_events_list_view)
      ].label
    : "List";

  const selectedPageSize =
    settings?.settings?.widget_style_settings
      ?.ew_events_list_page_size_default &&
    pageSizes
      .map((opt) => opt.value)
      .indexOf(
        settings.settings.widget_style_settings
          .ew_events_list_page_size_default,
      ) >= 0
      ? pageSizes[
          pageSizes
            .map((opt) => opt.value)
            .indexOf(
              settings.settings.widget_style_settings
                .ew_events_list_page_size_default,
            )
        ].label
      : "12 items";

  const handleDescriptionLengthChange = (view, length) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings[view] =
      Number.parseInt(length);
    setSettings(currentSettings);
  };

  const handlePageSizeChange = (val) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings.ew_events_list_page_size_default =
      Number.parseInt(val.split(" ")[0]);
    setSettings(currentSettings);
  };

  const handleSelectedFilterChange = (filter) => {
    let currentSettings = { ...settings };
    const filterSettings =
      settings.settings.widget_style_settings.available_filters || "";
    let selectedFilters = filterSettings.split(",").filter((f) => f.length > 0);

    if (selectedFilters.indexOf(filter) >= 0) {
      selectedFilters = selectedFilters.filter((fil) => fil !== filter);
    } else {
      selectedFilters.push(filter);
    }

    currentSettings.settings.widget_style_settings.available_filters =
      selectedFilters.join(",");
    setSettings(currentSettings);
  };

  const handleSelectLanguageforEdit = (newVal) => setLangForEdit(newVal);

  const renderAvailableFilters = () => {
    const filterSettings =
      settings.settings.widget_style_settings.available_filters || "";
    const selectedFilters = filterSettings.split(",");

    return filters.map((filter, index) => (
      <CheckboxItem
        key={index}
        label={filter}
        checked={selectedFilters.some(
          (f) => f.toLowerCase() === filter.toLowerCase(),
        )}
        onChange={() => handleSelectedFilterChange(filter.toLowerCase())}
      />
    ));
  };

  const handleAdditionalPropertyChange = (prop) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings[prop] =
      !currentSettings.settings.widget_style_settings[prop];
    setSettings(currentSettings);
  };

  const getLangsSelectOptions = () => {
    const fullList = getLanguagesList();
    const currentLanguagesList = Object.keys(translations);
    return fullList.filter((lang) => currentLanguagesList.includes(lang.value));
  };

  const handleDefaultLanguageChange = (newVal) => {
    let currentSettings = { ...settings };
    const fullList = getLanguagesList();
    const langCode = fullList.filter((lang) => lang.label === newVal)[0]?.value;

    if (langCode) {
      currentSettings.settings.widget_style_settings.widgets_default_language =
        langCode;
      setSettings(currentSettings);
    }
  };

  const handleTranslationChange = (section, lang, field, newVal) => {
    const currentSettings = { ...settings };
    const widgetSettings = currentSettings.settings.widget_style_settings;
    const stored = widgetSettings.translations || {};
    const storedLang = stored[lang] || {};

    widgetSettings.translations = {
      ...stored,
      [lang]: {
        ...storedLang,
        [section]: { ...storedLang[section], [field]: newVal },
      },
    };
    setSettings(currentSettings);
  };

  const renderTranslations = (section = "globalWidgetsTranslations") => {
    const fullList = getLanguagesList();
    const langCode =
      fullList.filter((lang) => lang.label === langForEdit)[0]?.value || "en";

    if (!langCode) return null;

    const translationSection = translations?.[langCode]?.[section] || {};
    const getFieldLabel = (field) => {
      if (section !== "customFilters") return capitalize(startCase(field));
      if (field === "filter_label_dates") return "Dates";
      if (field.startsWith("filter_label_")) {
        return capitalize(settings?.settings?.widget_style_settings?.[field]);
      }
      return capitalize(startCase(field).replace("Filter Property", ""));
    };

    return Object.keys(translationSection).map((translation, index) => (
      <BlockStack key={index} gap={1} className={responsiveBlockStack}>
        <span className="font-semibold">{getFieldLabel(translation)}</span>
        <div className="flex items-center gap-2">
          <NewInputFieldControl
            width="100%"
            value={translationSection[translation]}
            type="text"
            align="left"
            onChange={(newVal) =>
              handleTranslationChange(section, langCode, translation, newVal)
            }
          />
          <span className="text-sm text-gray-500">{langCode}</span>
        </div>
      </BlockStack>
    ));
  };

  const isBillingPlanRestriction =
    settings?.current_plan && settings.current_plan.id === 1;
  // console.log(loading);
  return (
    <PageWrapper loading={false} withBackground={true} flush>
      <PageContent className={pageStyles.page}>
        {/* An open section brings its own header with it. */}
        {!activeSection && (
          <>
          <BreadCrumbs
            breadcrumbs={[
              { label: t("Dashboard"), to: "/dashboard" },
              { label: t("Settings") },
            ]}
          />
          <PageHeader
            eyebrow="WP Super Events by ServvAI"
            title={t("Settings")}
            description="Set defaults once so every new event starts right"
          >
            <div className={pageStyles.divider} />
          </PageHeader>
          </>
        )}

        <div className={activeSection ? pageStyles.single : pageStyles.grid}>
            {/* General Settings */}
            {(!activeSection || activeSection === "general") && (
              <SettingsSection
                icon={Cog6ToothIcon}
                title="General"
                description="Time zone, format and event defaults"
                editDescription="Time zone, formats, and the defaults every new event inherits."
                statusText="General settings configured"
                status="available"
                onSave={saveAllSettings}
                onCancel={getSettingsInfo}
                sectionId={"general"}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                <SpinnerLoader isLoading={loading}>
                  <GeneralSettings
                    settings={settings}
                    timezones={timezones}
                    timeOptions={timeOptions}
                    currencyOptions={currencyOptions}
                    durationOptions={durationOptions}
                    eventTypes={eventTypes}
                    responsiveBlockStack={responsiveBlockStack}
                    responsiveInput={responsiveInput}
                    isBillingPlanRestriction={isBillingPlanRestriction}
                    stripeConnected={stripeConnected}
                    zoomAccount={zoomAccount}
                    handleTimezoneChange={handleTimezoneChange}
                    handleTimeFormatChange={handleTimeFormatChange}
                    handleHideTimezoneChange={handleHideTimezoneChange}
                    handleCurrencyChange={handleCurrencyChange}
                    handleDefaultDurationChange={handleDefaultDurationChange}
                    handleDefaultStartTimeChange={handleDefaultStartTimeChange}
                    getDefaultStartTime={getDefaultStartTime}
                    getDefaultEndTime={getDefaultEndTime}
                    handleDefaultPriceChange={handleDefaultPriceChange}
                    handleDefaultQuantityChange={handleDefaultQuantityChange}
                    handleDefaultTypeChange={handleDefaultTypeChange}
                    handleDefaultEndTimeChange={handleDefaultEndTimeChange}
                    getDurationOptions={getDurationOptions}
                    formatDuration={formatDuration}
                  />
                </SpinnerLoader>
              </SettingsSection>
            )}

            {!activeSection && (
              <SettingsSection
                icon={DocumentTextIcon}
                title="Email templates"
                description="Customize booking confirmations, reminders, and event updates"
                statusText="Manage notification email content"
                status="available"
                sectionId="email-templates"
                activeSection={activeSection}
                direct
                onView={() => navigate("/templates")}
              />
            )}

            {/* Reminders Settings */}
            {(!activeSection || activeSection === "reminders") && (
              <SettingsSection
                icon={BellIcon}
                title="Reminders"
                description="Email notifications and reminder settings"
                statusText={
                  settings?.settings?.disable_emails === false
                    ? "Reminders enabled"
                    : "Reminders disabled"
                }
                status={
                  settings?.settings?.disable_emails === false
                    ? "available"
                    : "unavailable"
                }
                onSave={saveAllSettings}
                onCancel={getSettingsInfo}
                sectionId={"reminders"}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                <SpinnerLoader isLoading={loading}>
                  <RemindersSettings
                    settings={settings}
                    responsiveBlockStack={responsiveBlockStack}
                    responsiveInput={responsiveInput}
                    isBillingPlanRestriction={isBillingPlanRestriction}
                    handleEmailRemindersStateChange={
                      handleEmailRemindersStateChange
                    }
                    handleFirstReminderStateChange={
                      handleFirstReminderStateChange
                    }
                    handleFirstReminderHoursChange={
                      handleFirstReminderHoursChange
                    }
                    handleSecondReminderStateChange={
                      handleSecondReminderStateChange
                    }
                    handleSecondReminderHoursChange={
                      handleSecondReminderHoursChange
                    }
                    handleFinishedReminderStateChange={
                      handleFinishedReminderStateChange
                    }
                    handleNewAdditionalEmailsChange={
                      handleNewAdditionalEmailsChange
                    }
                    handleAdditionalRemindersHoursChange={
                      handleAdditionalRemindersHoursChange
                    }
                    handleStaffMemberEmailChange={handleStaffMemberEmailChange}
                  />
                </SpinnerLoader>
              </SettingsSection>
            )}

            {/* Checkout Settings */}
            {(!activeSection || activeSection === "checkout") && (
                <SettingsSection
                  icon={ShoppingCartIcon}
                  title="Checkout"
                  description="Fast checkout and marketing consent settings"
                  statusText={
                    settings?.settings?.free_events_skip_checkout
                      ? "Fast checkout enabled"
                      : "Standard checkout"
                  }
                  status="available"
                  onSave={saveAllSettings}
                  onCancel={getSettingsInfo}
                  sectionId={"checkout"}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                >
                  <SpinnerLoader isLoading={loading}>
                    <CheckoutSettings
                      settings={settings}
                      handleFreeCheckoutChange={handleFreeCheckoutChange}
                      handleSkipCaptchaChange={handleSkipCaptchaChange}
                      handleMarketingConsentChange={
                        handleMarketingConsentChange
                      }
                    />
                  </SpinnerLoader>
                </SettingsSection>
              )}

            {/* Translations Settings */}
            {(!activeSection || activeSection === "translations") &&
              settings &&
              settings.is_wp_marketplace === false && (
                <SettingsSection
                  icon={LanguageIcon}
                  title="Translations"
                  description="Translate widget text to any language"
                  statusText={`Default: ${getDefaultWidgetLanguageName()}`}
                  status="available"
                  onSave={saveAllSettings}
                  onCancel={getSettingsInfo}
                  sectionId={"translations"}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                >
                  <SpinnerLoader isLoading={loading}>
                    <TranslationsSection
                      responsiveBlockStack={responsiveBlockStack}
                      responsiveInput={responsiveInput}
                      getLangsSelectOptions={getLangsSelectOptions}
                      getDefaultWidgetLanguageName={
                        getDefaultWidgetLanguageName
                      }
                      handleDefaultLanguageChange={handleDefaultLanguageChange}
                      langForEdit={langForEdit}
                      handleSelectLanguageforEdit={handleSelectLanguageforEdit}
                      renderTranslations={renderTranslations}
                    />
                  </SpinnerLoader>
                </SettingsSection>
              )}

            {/* Workflow Settings */}
            {/* {(!activeSection || activeSection === "workflow") && (
              <SettingsSection
                icon={CommandLineIcon}
                title="Workflow"
                description="N8N integration and automation settings"
                statusText="Workflow configured"
                status="available"
                onSave={saveAllSettings}
                onCancel={getSettingsInfo}
                sectionId={"workflow"}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                <WorkflowSettings
                  responsiveBlockStack={responsiveBlockStack}
                  responsiveInlineStack={responsiveInlineStack}
                  n8nCurentSettings={n8nCurentSettings}
                  updateN8NSettings={updateN8NSettings}
                />
              </SettingsSection>
            )} */}
        </div>
      </PageContent>
    </PageWrapper>
  );
};

export default SettingsPage;
