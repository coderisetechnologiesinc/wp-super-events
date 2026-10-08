import forEach from "lodash.foreach";

export const translationsKeysTpl = {
  customFilters: {
    filter_label_dates: "Dates",
    filter_label_locations: "Location",
    filter_label_languages: "Language",
    filter_label_categories: "Category",
    filter_label_members: "Member",
    filter_label_teams: "Team",
    filter_all_dates: "All dates",
    filter_all_locations: "All locations",
    filter_all_languages: "All languages",
    filter_all_categories: "All categories",
    filter_all_members: "All members",
    filter_all_teams: "All teams",
    filterPropertyDetailsLabel: "Details",
    filterPropertyEmailLabel: "Email",
    filterPropertyPhoneLabel: "Phone",
    filterPropertyOperationalHoursLabel: "Operational hours",
  },
  globalWidgetsTranslations: {
    priceLabel: "Price",
    filtersLabel: "Filters",
    calendarLabel: "Calendar",
    priceFreeLabel: "Free",
    dayLabelPlural: "d",
    dayLabelSingular: "d",
    hourLabelPlural: "h",
    hourLabelSingular: "h",
    minuteLabelPlural: "m",
    minuteLabelSingular: "m",
    loadingLabel: "Loading",
    backLabel: "Back",
    closeLabel: "Close",
    nextLabel: "Next",
    previousLabel: "Previous",
    languageLabel: "Language",
    timezoneLabel: "Timezone",
    eventTimeLabel: "Event time",
    viewModeListLabel: "List",
    viewModeGridLabel: "Grid",
  },
  mainWidget: {
    openDialogButton: "Book event",
    eventsListTitle: "Events list",
    bundlesListTitle: "Bundles list",
    widgetEventsListSwitchLabel: "Events",
    widgetBundlesListSwitchLabel: "Bundles",
    bundleAddToCartButtonLabel: "Add to Cart",
    eventAddToCartButtonLabel: "Add to Cart",
    liveShoppingJoinButtonLabel: "Join",
    liveShoppingStartCountdown: "in",
    bundleEventsListTitle: "Included events",
    shareEventPanelTitle: "Share this event",
    searchEventPlaceholder: "Search",
    itemsCounterLabel: "items",
    singleEventItemsCounterLabel: "item",
    clearFiltersLabel: "clear",
    bookButtonLabel: "Book now",
    virtualAppointmentLabel: "Appointment",
    virtualEventLabel: "Virtual",
    inPersonEventLabel: "Event",
    webinarLabel: "Webinar",
    liveShoppingLabel: "Live Shopping",
    eventDetailsButtonLabel: "Details",
    eventDescriptionFieldLabel: "Description",
    todaySeparatorLabel: "Today",
    tomorrowSeparatorLabel: "Tomorrow",
    filtersStepLabel: "Filters",
    resultStypeLabel: "Result",
    goToFiltersResultButton: "Next: Result",
    labelForMonthWithoutEvents: "There are no events scheduled for this month",
    nextMonthButton: "Next",
    availableQuantitySuffix: "left",
    widgetHeaderLabel: "Events",
    hostFilterLabel: "Host",
    allDatesLabel: "All",
    quickDateToday: "Today",
    quickDateTomorrow: "Tomorrow",
    quickDateThisWeek: "This Week",
    quickDateWeekend: "Weekend",
    applyFiltersLabel: "Show results",
    showMoreEventsLabel: "+ ### More",
    summaryAvailableLabel: "available event sessions",
    summaryWaitlistLabel: "waitlist opportunities",
    recurringEventLabel: "Recurring",
    relatedEventsLabel: "Related events",
    addToCalendarLabel: "Add to calendar",
    copyLinkLabel: "Copy link",
    copiedLabel: "Copied",
    loadingErrorLabel: "Something went wrong. Please try again later.",
  },
  onProductWidget: {
    selectTimeButton: "Select the Date and Time",
    selectDateAndTimeButton: "Select the Date and Time",
    addToCartButton: "Add To Cart",
    registerInWaitingList: "Join the Waiting List",
    eventSoldOut: "Sold out",
    appointmentSoldOut: "Sold out",
    remainingBookingsLabel: "Hurry! Only ### left in stock!",
    addToCartLabel: "Confirm",
    questionsFormTitle: "Questions Form",
    additionalMembersFormTitle: "Multi Booking",
    memberFormDescription: "Add Email Addresses for Additional Recipients",
    freeCheckoutNewslettersAgreement:
      "Click here to receive marketing emails and newsletters",
    termsOfUseAgreement: "By selecting this checkbox, you agree to our",
    termsOfUseAnd: "and",
    freeCheckoutCloseRegistrationButton: "Close",
    freeCheckoutInvalidEmailMessage: "Please enter a valid email address",
    freeCheckoutMandatoryRequiermentsMessageHeader:
      "Please fill in the form below with your email and name to complete your registration",
    freeRegistrationFormTitle: "Registration",
    freeRegistrationFormDescription:
      "Please fill in the form below with your email and name to complete your registration",
    fastRegistration: "Checkout",
    memberFormMember: "Additional Registrant",
    memberFormEmail: "Email",
    memberFormFirstName: "First Name",
    memberFormLastName: "Last Name",
    eventQuestionsFormTitle: "Event Questions Form",
    submitQuestionsForm: "Submit",
    mandatoryRequiermentsMessageHeader: "This field is mandatory",
    mandatoryRequiermentsMessage: "Please fill in this field",
    invalidEmailMessage: "Please enter a valid email address.",
    noAvailableSlots: "No appointment slots available at the moment",
    registrationCompletedMessageTitle: "Registration completed!",
    privacyPolicyLinkText: "Privacy Policy",
    termsOfUseLinkText: "Terms of Use",
    registrationCompletedMessageDescription:
      "You have successfully registered. A confirmation email has been sent to the provided email address. Please check your inbox.",
    waitingListNameLabel: "Name",
    waitingListEmailLabel: "Email",
    memberFormPrimaryBadge: "Primary contact",
    captchaRequiredMessage: "Please complete the captcha to continue",
    genericErrorMessage: "Something went wrong. Please try again.",
  },
  liveShoppingWidget: {
    joinToCallButton: "Join",
    enterAdmittedUser: "Enter",
    joinUserWithEmailButton: "Join",
    usernameInputLabel: "Username",
    emailInputLabel: "Email",
    usernameInputPlaceholder: "john.doe",
    emailInputPlaceholder: "john.doe@acme.com",
    loginFormTitle: "Please enter your username and email to join the call",
    waitForConnectionMessage: "Please wait until the owner allows you in",
    reconnectionMessage:
      "Something has gone wrong, we are trying to reconnect you",
    waitForAdmitMessage: "Please wait, we are trying to connect you",
    connectionErrorMessage: "Please reload the page",
    productAddedToCartMessage: "The product has been added to the cart",
    emptyUsernameWarning: "Please enter your username",
    emptyEmailWarning: "Please enter your email",
    wrongEmailFormatWarning: "Please enter the correct email",
    audioRequirmentsIssue:
      "The system does not support VOIP, but you can join the audio by phone",
    screenRequirmentsIssue:
      "The screen is not compatible with the current web browser.",
    videoRequirmentsIssue:
      "The video is not compatible with the current web browser.",
    browserRequirmentsIssue: "Please update your browser",
  },
};

export const defaultTranslationLanguages = [
  "zh-cn",
  "nl",
  "en",
  "fr",
  "de",
  "hi",
  "it",
  "ja",
  "ko",
  "no",
  "ru",
  "es",
  "sv",
];

export const languagesCodeName = {
  "zh-cn": "zh-CN",
  nl: "nl",
  en: "en-US",
  fr: "fr",
  de: "de",
  hi: "hi",
  it: "it",
  ja: "ja",
  ko: "ko",
  no: "no",
  ru: "ru",
  es: "es",
  sv: "sv",
};

export const getTranslationsTpl = () => {
  const tpl = {};

  forEach(defaultTranslationLanguages, (langCode) => {
    tpl[langCode] = translationsKeysTpl;
  });

  return tpl;
};

export const mergeTranslations = (
  recipientTranslations = {},
  injectedTranslations = {}
) => {
  const languagesForProcessing = Object.keys(recipientTranslations);

  const mergedTranslations = {};

  forEach(languagesForProcessing, (langCode) => {
    if (injectedTranslations[langCode] === undefined) {
      mergedTranslations[langCode] = translationsKeysTpl;
    } else {
      const langData = {};

      forEach(recipientTranslations[langCode], (sectionValue, sectionName) => {
        if (injectedTranslations[langCode][sectionName] === undefined) {
          langData[sectionName] = recipientTranslations[langCode][sectionName];
        } else {
          if (!langData[sectionName]) langData[sectionName] = {};
          const fieldsForProcessing = Object.keys(
            recipientTranslations[langCode][sectionName]
          );

          forEach(
            {
              ...recipientTranslations[langCode][sectionName],
              ...injectedTranslations[langCode][sectionName],
            },
            (fieldValue, fieldName) => {
              if (fieldsForProcessing.includes(fieldName)) {
                langData[sectionName][fieldName] = fieldValue;
              }
            }
          );
        }
      });
      mergedTranslations[langCode] = langData;
    }
  });

  return mergedTranslations;
};
