"use strict";
(self["webpackChunkservv_plugin"] = self["webpackChunkservv_plugin"] || []).push([["src_Components_CreateEvent_CreateEventForm_jsx"],{

/***/ "./src/Components/CreateEvent/CreateEventForm.jsx":
/*!********************************************************!*\
  !*** ./src/Components/CreateEvent/CreateEventForm.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/attributes */ "./src/utilities/attributes.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons */ "./src/assets/icons/index.js");
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4WY6JWTD.mjs");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/events */ "./src/utilities/events.js");
/* harmony import */ var _Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/PageWrapper */ "./src/Components/Pages/PageWrapper.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var _utilities_tickets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/tickets */ "./src/utilities/tickets.js");
/* harmony import */ var _Pages_Events_useServvData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/Events/useServvData */ "./src/Components/Pages/Events/useServvData.js");
/* harmony import */ var _Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/SpinnerLoader */ "./src/Components/Pages/SpinnerLoader.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













const DateStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("vendors-node_modules_react-day-picker_dist_esm_DayPicker_js"), __webpack_require__.e("src_Components_CreateEvent_DateStep_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DateStep */ "./src/Components/CreateEvent/DateStep.jsx")));
const VenueStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_icons-material_esm_Close_js-node_modules_mui_icons-material_esm_Fibe-0ba647"), __webpack_require__.e("src_Components_CreateEvent_VenueStep_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./VenueStep */ "./src/Components/CreateEvent/VenueStep.jsx")));
const FiltersStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_Components_CreateEvent_FiltersStep_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./FiltersStep */ "./src/Components/CreateEvent/FiltersStep.jsx")));
const BrandingStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_CreateEvent_BrandingStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./BrandingStep */ "./src/Components/CreateEvent/BrandingStep.jsx")));
const TicketsStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-day-picker_dist_esm_DayPicker_js"), __webpack_require__.e("src_Components_CreateEvent_TicketsStep_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./TicketsStep */ "./src/Components/CreateEvent/TicketsStep.jsx")));
const RegistrantsStep = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_Components_CreateEvent_RegistrantsStep_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./RegistrantsStep */ "./src/Components/CreateEvent/RegistrantsStep.jsx")));



const StepperIcon = ({
  Icon,
  iconClass,
  active,
  showLine
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "stepper-icon",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
      className: `icon-box ${active ? "is-active" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Icon, {
        className: `icon-box__svg ${iconClass}`,
        "aria-hidden": "true"
      })
    }), showLine && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "icon-line"
    })]
  });
};
const StepperText = ({
  title,
  subtitle,
  active
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: `stepper-text ${active ? "is-active" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "stepper-title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "stepper-subtitle",
      children: subtitle
    })]
  });
};
const CreateEventForm = () => {
  const settings = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.settings);
  const adminDashboardRaw = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.settings?.settings?.admin_dashboard);
  const zoomConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.zoomConnected);
  const stripeConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.stripeConnected);
  const calendarConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.calendarConnected);
  const gmailConnected = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.gmailConnected);
  const filtersList = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)(s => s.filtersList);
  const {
    fetchEventTickets
  } = (0,_Pages_Events_useServvData__WEBPACK_IMPORTED_MODULE_9__.useServvData)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  const [currentSettings, setCurrentSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    fetchSettings,
    syncFiltersFromServer
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_3__.useServvStore)();
  const [attributes, setAttributes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    location: "offline",
    defaultLocationChanged: false,
    meeting: {},
    tickets: [],
    product: {
      price: 0,
      quantity: 5
    },
    filters: {},
    branding: {},
    notifications: {
      google_calendar: false,
      disable_emails: false
    },
    custom_fields: {
      custom_field_1_name: "",
      custom_field_1_value: "",
      custom_field_2_name: "",
      custom_field_2_value: ""
    }
  });
  const [stepComponents, setStepComponents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    date: DateStep,
    venue: VenueStep,
    tickets: TicketsStep,
    filters: FiltersStep,
    branding: BrandingStep,
    registrants: RegistrantsStep
  });
  const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    key: "branding",
    title: "Event details",
    subtitle: "Add additional information and an image",
    Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_2__.BrushIcon,
    iconClass: "icon--angled"
  }, {
    key: "date",
    title: "Date and time",
    subtitle: "Select the event’s date, time, and frequency",
    Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_2__.CalendarIcon,
    iconClass: ""
  }, {
    key: "venue",
    title: "Location",
    subtitle: "Choose the event location",
    Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_2__.MapMarkIcon,
    iconClass: "icon--tall"
  }, {
    key: "tickets",
    title: "Tickets",
    subtitle: "Create ticket types and quantities",
    Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_2__.TicketIcon,
    iconClass: "icon--wide"
  }, {
    key: "filters",
    title: "Additional notes",
    subtitle: "Set filters and add notes",
    Icon: _assets_icons__WEBPACK_IMPORTED_MODULE_2__.Filter,
    iconClass: ""
  }]);
  const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(steps[0].key);
  const [isFullWidth, setIsFullWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsFullWidth(false);
  }, [currentStep]);
  const StepComponent = stepComponents[currentStep];
  const {
    id: routeId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams)();
  const [searchParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useSearchParams)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
  const occurrenceIdFromQuery = searchParams.get("occurrence_id") || searchParams.get("occurrenceId") || searchParams.get("occ") || null;
  const isOnboarding = searchParams.get("onboarding_step");
  const registrantsView = searchParams.get("registrants");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (registrantsView) setCurrentStep("registrants");
  }, [registrantsView]);
  const isNew = !routeId;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOnboarding) {
      fetchSettings();
      syncFiltersFromServer();
      let newSteps = [...steps];
      newSteps = newSteps.filter(s => s.key !== "filters");
      setSteps(newSteps);
    } else {}
  }, [isOnboarding]);

  // Images
  const WP_API_BASE = "/wp-json/wp/v2/posts";
  const PLACEHOLDER_IMAGE = window.servvData?.pluginUrl ? `${window.servvData.pluginUrl}public/assets/images/placeholder.png` : "";
  const featuredImageCache = new Map();
  async function fetchFeaturedImage(postId, signal) {
    if (!postId) return PLACEHOLDER_IMAGE;
    if (featuredImageCache.has(postId)) {
      return featuredImageCache.get(postId);
    }
    try {
      const url = await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.getFeaturedImage)(postId, signal);
      const resolved = url || PLACEHOLDER_IMAGE;
      featuredImageCache.set(postId, resolved);
      return resolved;
    } catch {
      if (!signal?.aborted) {
        featuredImageCache.set(postId, PLACEHOLDER_IMAGE);
      }
      return PLACEHOLDER_IMAGE;
    }
  }

  // End images
  // useEffect(() => {
  //   if (!isNew) {
  //     let newSteps = [...steps];
  //     if (attributes.meeting && !attributes.meeting.occurrences) {

  //       newSteps.push({
  //         key: "registrants",
  //         title: "Registrants",
  //         subtitle: "Manage registrants",
  //         Icon: Contacts,
  //         iconClass: "icon--left",
  //       });
  //       setSteps(newSteps);
  //     }
  //   }
  // }, [isNew]);

  const [loadingEvent, setLoadingEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventLoaded, setEventLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const stripMime = value => {
    if (!value) return "";
    if (value.startsWith("data:image")) {
      return value.split(",")[1];
    }
    return null;
  };
  const hasValue = value => {
    if (value === null || value === undefined) return false;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.keys(value).length > 0;
    return true;
  };
  const fetchEventInfo = async (postId, occurrenceId) => {
    setLoadingEvent(true);
    const controller = new AbortController();
    const getEventTypeFromPath = pathname => {
      if (pathname.includes("/events/zoom/")) return "zoom";
      if (pathname.includes("/events/offline/")) return "offline";
      return null;
    };
    const eventType = getEventTypeFromPath(location.pathname);
    try {
      const data = await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.getEvent)(postId, occurrenceId);
      const imageUrl = await fetchFeaturedImage(postId, controller.signal);
      let startTime = null;
      if (data.meeting.start_time) {
        startTime = moment.tz(data.meeting.start_time, data.meeting.timezone);
      } else if (data.meeting.occurrences) {
        const firstOccurrence = data.meeting.occurrences[0];
        startTime = moment.tz(firstOccurrence.start_time, data.meeting.timezone);
      }
      let payload = {
        image_content: imageUrl || null,
        meeting: {
          ...data.meeting,
          startTime: startTime
        },
        tickets: data.tickets.map(ticket => {
          const baseTicket = {
            ...ticket,
            title: ticket.name,
            ...(ticket.price != null && {
              price: ticket.price
            }),
            type: ticket.price === 0 && !ticket.is_donation ? "free" : ticket.is_donation ? "donation" : "paid"
          };
          if (ticket.start_datetime && data.meeting.timezone) {
            const utcMoment = moment.utc(ticket.start_datetime);
            const converted = utcMoment.tz(data.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss");
            baseTicket.start_datetime = converted;
          }
          if (ticket.end_datetime && data.meeting.timezone) {
            const utcMoment = moment.utc(ticket.end_datetime);
            const converted = utcMoment.tz(data.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss");
            baseTicket.end_datetime = converted;
          }
          return baseTicket;
        }) || [],
        product: data.product || {},
        filters: data.types || {},
        branding: data.branding || {},
        notifications: data.notifications || {},
        custom_fields: data.custom_fields || {}
      };
      delete payload.meeting.recurrence;
      if (hasValue(data.meeting?.recurrence)) {
        payload.meeting.recurrence = data.meeting.recurrence;
      }
      if (eventType === "offline") {
        payload.location = "offline";
      } else {
        payload.location = "zoom";
      }
      mergeAttributes(payload);
      let newSteps = [...steps];
      if (data.meeting.occurrences === undefined || data.meeting.occurrences === null || data.meeting.occurrences.length === 0 || occurrenceIdFromQuery) {
        // newSteps.push({
        //   key: "registrants",
        //   title: "Registrants",
        //   subtitle: "Manage registrants",
        //   Icon: Contacts,
        //   iconClass: "icon--left",
        // });
      }
      if (!isNew && data.wp_post_url) {
        mergeAttributes({
          wp_post_url: data.wp_post_url
        });
        // newSteps.push({
        //   key: "view",
        //   title: "View event",
        //   subtitle: "View event page",
        //   Icon: EyeIcon,
        //   iconClass: "icon--left",
        // });
      }

      // setSteps(newSteps);

      if (data.meeting.occurrences && data.meeting.occurrences.length > 0) {
        const occurrenceTickets = fetchEventTickets({
          postId,
          occurrenceId
        });
        if (occurrenceTickets.length > 0) {
          mergeAttributes({
            tickets: {
              ...attributes.tickets,
              ...occurrenceTickets
            }
          });
        }
      }
      setEventLoaded(true);
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 404) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Event not found or has been deleted.");
      } else if (error?.response?.status === 403) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("You do not have permission to open this event.");
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Unable to open the event. Please try again.");
      }
    }
    setLoadingEvent(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!adminDashboardRaw) return;
    let parsed;
    try {
      parsed = typeof adminDashboardRaw === "string" ? JSON.parse(adminDashboardRaw) : adminDashboardRaw;
    } catch (e) {
      console.error("Failed to parse admin dashboard", e);
      return;
    }
    setCurrentSettings(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        settings: {
          ...prev.settings?.settings,
          admin_dashboard: {
            ...prev.settings?.settings?.admin_dashboard,
            ...parsed
          }
        }
      }
    }));
    const defaultStart = parsed?.default_start_time;
    if (!defaultStart && !isNew) return;
    const timeMoment = moment(defaultStart, ["h:mm a", "hh:mm a", "H:mm"], true);
    if (!timeMoment.isValid()) {
      console.warn("Invalid default_start_time:", defaultStart);
      return;
    }
    const hours = timeMoment.hours();
    const minutes = timeMoment.minutes();
    setAttributes(prev => {
      const rawStart = prev?.meeting?.startTime;

      // Extract just the date portion regardless of format
      let datePart;
      if (typeof rawStart === "string") {
        datePart = rawStart.substring(0, 10); // "2026-02-13"
      } else if (moment.isMoment(rawStart)) {
        datePart = rawStart.format("YYYY-MM-DD");
      } else {
        datePart = moment().format("YYYY-MM-DD");
      }
      const newStart = `${datePart}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
      return {
        ...prev,
        meeting: {
          ...prev.meeting,
          startTime: newStart,
          duration: parsed?.default_duration ? parsed.default_duration * 60 : prev.meeting?.duration
        }
      };
    });
  }, [adminDashboardRaw]);

  // useEffect(() => {
  //   if (
  //     !zoomConnected &&
  //     (!filtersList?.locations || filtersList?.locations?.length === 0)
  //   ) {
  //     let newSteps = [...steps];
  //     newSteps = newSteps.filter((s) => s.key !== "venue");
  //     setSteps(newSteps);
  //   }
  // }, [filtersList, zoomConnected]);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isNew) {
      setEventLoaded(true);
      return;
    }
    if (routeId && !eventLoaded) {
      fetchEventInfo(routeId, occurrenceIdFromQuery);
    }
    if (occurrenceIdFromQuery) {
      const occurrenceTickets = fetchEventTickets();
      if (occurrenceTickets.length > 0) {
        mergeAttributes({
          tickets: {
            ...attributes.tickets,
            ...occurrenceTickets
          }
        });
      }
    }
  }, [routeId, occurrenceIdFromQuery]);
  const mergeAttributes = patch => {
    setAttributes(prev => (0,_utilities_attributes__WEBPACK_IMPORTED_MODULE_1__.mergeAttributesPatch)(prev, patch));
  };
  const updateTickets = async () => {
    const tickets = attributes.tickets?.map(ticket => ({
      ...ticket,
      name: ticket.title,
      ...(ticket.price != null && {
        price: ticket.price
      }),
      is_donation: ticket.type === "donation"
    })) || [];
    if (!tickets.length) return;
    const toCreate = [];
    const toUpdate = [];
    const toRemove = [];
    tickets.forEach(ticket => {
      // existing ticket removed
      if (ticket.event_id && ticket.action === "remove") {
        toRemove.push(ticket);
        return;
      }

      // existing ticket updated
      if (ticket.event_id && ticket.action === "update") {
        toUpdate.push(ticket);
        return;
      }

      // new ticket
      if (!ticket.event_id) {
        toCreate.push(ticket);
      }
    });

    // CREATE
    if (toCreate.length === 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_8__.createTicket)({
        postId: routeId,
        token: servvData.nonce,
        ticket: toCreate[0],
        occurrenceId: occurrenceIdFromQuery
      });
    } else if (toCreate.length > 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_8__.multipleTicketsCreate)({
        postId: routeId,
        token: servvData.nonce,
        tickets: toCreate,
        occurrenceId: occurrenceIdFromQuery
      });
    }

    // UPDATE
    if (toUpdate.length === 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_8__.updateTicket)({
        postId: routeId,
        token: servvData.nonce,
        ticket: toUpdate[0]
      });
    } else if (toUpdate.length > 1) {
      await (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_8__.multipleTicketsUpdate)({
        postId: routeId,
        token: servvData.nonce,
        tickets: toUpdate
      });
    }

    // REMOVE (soft delete on backend)

    if (toRemove.length) {
      await Promise.all(toRemove.map(ticket => (0,_utilities_tickets__WEBPACK_IMPORTED_MODULE_8__.deleteTicket)({
        postId: routeId,
        token: servvData.nonce,
        ticketId: ticket.id,
        occurrenceId: occurrenceIdFromQuery
      })));
    }
    setAttributes(prev => ({
      ...prev,
      tickets: prev.tickets.filter(t => t.action !== "remove").map(({
        action,
        ...t
      }) => t)
    }));
  };
  const handleFormSubmit = async (forceQuit = true) => {
    let requestURL = `/wp-json/servv-plugin/v1/`;
    if (isNew) {
      requestURL += `events/${attributes.location !== "zoom" ? "offline" : "zoom"}`;
    } else {
      requestURL += "event";
    }
    if (routeId) {
      requestURL += `/${routeId}`;
    }
    if (occurrenceIdFromQuery) {
      requestURL += `?occurrence_id=${occurrenceIdFromQuery}`;
    }
    const isRecurring = attributes.meeting?.recurrence?.type;
    const isOffline = attributes.location === "offline" || attributes.location === "hybrid" || attributes.location === "custom";
    let data = {
      meeting: {
        topic: attributes.meeting.topic,
        startTime: moment.tz(attributes.meeting.startTime, attributes.meeting.timezone).utc().format("YYYY-MM-DDTHH:mm:ss"),
        duration: attributes.meeting.duration,
        agenda: attributes.meeting.agenda,
        timezone: attributes.meeting.timezone,
        // eventType: attributes.meeting.eventType,
        recurrence: {
          ...attributes.meeting.recurrence
        }
      },
      // product: {
      //   price: attributes.product.price,
      //   quantity: attributes.product.quantity,
      // },
      notifications: {
        google_calendar: attributes.notifications.google_calendar,
        disable_emails: attributes.notifications.disable_emails
      },
      types: {
        location_id: attributes.location === "zoom" || attributes.location === "custom" ? null : attributes.filters.location_id,
        category_id: attributes.filters.category_id,
        language_id: attributes.filters.language_id,
        members: attributes.filters.members
      },
      custom_fields: {
        ...attributes.custom_fields
      },
      image_content: stripMime(attributes.image_content)
    };
    if (!isNew) {
      data.product = {
        ...attributes.product
      };
      data.meeting = {
        topic: attributes.meeting.topic,
        agenda: attributes.meeting.agenda,
        start_time: attributes.meeting.startTime,
        timezone: attributes.meeting.timezone,
        duration: attributes.meeting.duration,
        type: isRecurring ? isOffline ? 2 : 8 : isOffline ? 1 : 2
      };
      if (attributes.registrants && attributes.registrants.length > 0) {
        data.registrants = attributes.registrants.filter(reg => reg.status && reg.status === "create").map(reg => {
          return {
            first_name: reg.firstName,
            last_name: reg.lastName,
            email: reg.email
          };
        });
      }
    } else {
      data.meeting = {
        ...attributes.meeting,
        eventType: isRecurring ? isOffline ? 2 : 8 : isOffline ? 1 : 2
      };
    }
    if (isNew && settings?.current_plan?.id === 1) {
      // Free plan: no tickets, only product quantity
      const quantity = attributes.tickets.filter(ticket => ticket.action !== "remove").reduce((sum, ticket) => sum + (Number(ticket.quantity) || 0), 0);
      data.product = {
        quantity: quantity || Number(attributes.product?.quantity) || 1
      };
    } else if (isNew) {
      data.tickets = attributes.tickets.filter(ticket => Number.isFinite(Number(ticket.quantity)) && Number(ticket.quantity) > 0).map(ticket => {
        const timezone = attributes.meeting?.timezone;
        const payload = {
          name: ticket.title,
          quantity: Number(ticket.quantity),
          ...(ticket.price != null && {
            price: ticket.price
          }),
          is_donation: ticket.type === "donation"
        };
        if (ticket.start_datetime && timezone) {
          try {
            const inEventTz = moment.tz(ticket.start_datetime, "YYYY-MM-DDTHH:mm:ss", timezone);
            if (!inEventTz.isValid()) {
              console.error("Invalid start_datetime:", ticket.start_datetime);
              throw new Error("Invalid datetime format");
            }
            const utcDateTime = inEventTz.clone().utc();
            // Add 'Z' suffix to explicitly mark as UTC
            payload.start_datetime = utcDateTime.format("YYYY-MM-DDTHH:mm:ss") + "Z";
          } catch (error) {
            console.error("Start datetime conversion error:", error, {
              input: ticket.start_datetime,
              timezone
            });
          }
        }
        if (ticket.end_datetime && timezone) {
          try {
            const inEventTz = moment.tz(ticket.end_datetime, "YYYY-MM-DDTHH:mm:ss", timezone);
            if (!inEventTz.isValid()) {
              console.error("Invalid end_datetime:", ticket.end_datetime);
              throw new Error("Invalid datetime format");
            }
            const utcDateTime = inEventTz.clone().utc();
            // Add 'Z' suffix to explicitly mark as UTC
            payload.end_datetime = utcDateTime.format("YYYY-MM-DDTHH:mm:ss") + "Z";
          } catch (error) {
            console.error("End datetime conversion error:", error, {
              input: ticket.end_datetime,
              timezone
            });
          }
        }
        return payload;
      });
    }
    try {
      setLoadingEvent(true);
      if (!isNew) {
        await updateTickets();
      }
      if (isNew) {
        const location = attributes.location !== "zoom" ? "offline" : "zoom";
        await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.createEvent)(location, data);
      } else {
        await (0,_utilities_events__WEBPACK_IMPORTED_MODULE_5__.updateEvent)(routeId, data, occurrenceIdFromQuery);
      }
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(`Event ${isNew ? "created" : "updated"} successfully.`);
      if (isNew && !isOnboarding || forceQuit) navigate("/dashboard?created=success");else if (isNew) navigate("/dashboard?created=success");
      setLoadingEvent(false);
    } catch (e) {
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(isNew ? "Event creation failed. Please check the details and try again." : "Event update failed. Please check the details and try again.");
      setLoadingEvent(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // or omit
      });
    }
  }, [currentStep]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "create-event",
    children: [!registrantsView && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("aside", {
      className: `create-event__sidebar ${settings?.is_wp_marketplace ? "marketplace" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "logo-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "logo-bg",
          style: {
            backgroundImage: `url(${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__})`
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "sidebar__logo servv-logo-png"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "sidebar__stepper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          children: steps.map((step, index) => {
            const isActive = step.key === currentStep;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "stepper__row",
              onClick: () => step.key !== "view" ? !isError ? setCurrentStep(step.key) : () => {} : open(attributes.wp_post_url, "_blank"),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(StepperIcon, {
                Icon: step.Icon,
                iconClass: step.iconClass,
                active: isActive,
                showLine: index < steps.length - 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(StepperText, {
                title: step.title,
                subtitle: step.subtitle,
                active: isActive
              })]
            }, step.key);
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Pages_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      loading: false,
      withoutSpinner: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("main", {
        className: `create-event__content ${settings?.is_wp_marketplace ? "marketplace" : ""} ${registrantsView ? "registrants-centered" : ""}`,
        ref: contentRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "servv-create-form-close",
          onClick: () => {
            const from = location.state?.from;
            const allowed = ["/dashboard", "/events"];
            const canGoBack = from && allowed.some(path => from.includes(path));
            canGoBack ? navigate(-1) : navigate("/events");
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_assets_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {
            className: "servv-create-form-close-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: `step-content-wrapper ${isOnboarding && (currentStep === "tickets" || currentStep === "venue") ? "w-full" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
            fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "step-loading",
              children: "Loading\u2026"
            }),
            children: StepComponent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Pages_SpinnerLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
              isLoading: loadingEvent && currentStep !== "registrants",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "step-slide",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(StepComponent, {
                  attributes: attributes,
                  setAttributes: mergeAttributes,
                  settings: settings,
                  currentStep: currentStep,
                  changeStep: setCurrentStep,
                  handleFormSubmit: handleFormSubmit,
                  isNew: isNew,
                  loading: loadingEvent,
                  setLoading: setLoadingEvent,
                  zoomConnected: zoomConnected,
                  stripeConnected: stripeConnected,
                  calendarConnected: calendarConnected,
                  gmailConnected: gmailConnected,
                  isOccurrence: occurrenceIdFromQuery,
                  isError: isError,
                  setError: setError,
                  isOnboarding: isOnboarding,
                  setFullWidth: setIsFullWidth,
                  registrantsView: registrantsView
                })
              }, currentStep)
            })
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateEventForm);

/***/ }),

/***/ "./src/Components/Menu/Spinner.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Menu/Spinner.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/esm/ClipLoader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const override = {
  display: "block",
  margin: "0 auto"
  //   borderColor: "#7319C6",
};
const Spinner = ({
  loading,
  color = "#7319C6"
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "svv-sweet-loading",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spinners__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: color,
      loading: loading,
      cssOverride: override,
      size: 75,
      "aria-label": "Loading Spinner",
      "data-testid": "loader"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/Components/Pages/Events/useServvData.js":
/*!*****************************************************!*\
  !*** ./src/Components/Pages/Events/useServvData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServvData: () => (/* binding */ useServvData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_useServvStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/useServvStore */ "./src/store/useServvStore.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);




const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return {
      "X-WP-Nonce": servvData.nonce
    };
  }
  return {};
};
const useServvData = () => {
  const {
    filtersList: storeFilters
  } = (0,_store_useServvStore__WEBPACK_IMPORTED_MODULE_1__.useServvStore)();

  /**
   * SETTINGS
   */
  const fetchSettings = async ({
    adminSection,
    settingsData
  }) => {
    let getSettingsResponse;
    if (!adminSection) {
      try {
        getSettingsResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/shop/info", {
          headers: getNonceHeaders()
        });
      } catch (e) {
        const err = new Error("Settings fetch failed");
        err.original = e;
        err.status = e?.response?.status;
        throw err;
      }
    } else {
      getSettingsResponse = {
        status: 200,
        data: settingsData
      };
    }
    if (getSettingsResponse && getSettingsResponse.status === 200) {
      const data = getSettingsResponse.data;
      return {
        ...data,
        settings: {
          ...data.settings,
          admin_dashboard: data?.settings?.admin_dashboard ? JSON.parse(data.settings.admin_dashboard) : {}
        }
      };
    }
    return null;
  };
  const fetchCalendarAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/calendar/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchZoomAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/zoom/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchStripeAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/stripe/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchGmailAccount = async () => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("/wp-json/servv-plugin/v1/gmail/account", {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) return res.data;
    return null;
  };
  const fetchFiltersByType = async type => {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`/wp-json/servv-plugin/v1/filters/${type}`, {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) {
      return res.data;
    }
    return [];
  };
  const fetchAllFilters = async ({
    filtersProp,
    settings
  }) => {
    if (filtersProp) {
      return filtersProp;
    }
    if (storeFilters && Object.keys(storeFilters).length > 0) {
      return storeFilters;
    }
    const result = {};
    result.locations = await fetchFiltersByType("locations");
    result.languages = await fetchFiltersByType("languages");
    result.categories = await fetchFiltersByType("categories");
    if (settings && settings.current_plan?.id !== 1) {
      result.members = await fetchFiltersByType("members");
    }
    return result;
  };
  const fetchEventTickets = async ({
    postId,
    occurrenceId
  }) => {
    let reqURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
    if (occurrenceId) {
      reqURL += `?occurrence_id=${occurrenceId}`;
    }
    const res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(reqURL, {
      headers: getNonceHeaders()
    });
    if (res && res.status === 200) {
      return res.data;
    }
    return [];
  };
  const fetchEventData = async ({
    postIDProp,
    occurrenceId,
    adminSection
  }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = postIDProp ? postIDProp : urlParams.get("post");
    let postStatus = "admin";
    if (!adminSection) {
      const {
        getEditedPostAttribute
      } = wp.data.select("core/editor");
      postStatus = getEditedPostAttribute("status");
    }
    if (!postId) {
      return {
        postId: null,
        status: postStatus,
        attributes: null,
        hasRecurrenceTab: false,
        notFoundError: null
      };
    }
    let url = `/servv-plugin/v1/event/${postId}`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    let res = null;
    let notFoundError = null;
    if (postStatus === "publish" || postStatus === "admin") {
      try {
        res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
          path: url
        });
      } catch (e) {
        notFoundError = e;
      }
    }
    if (!res || res.code === 404) {
      return {
        postId,
        status: postStatus,
        attributes: null,
        hasRecurrenceTab: false,
        notFoundError
      };
    }
    let startTime = null;
    if (res.meeting.provider === "offline") {
      if (res.meeting.providers_type === 1 || res.meeting.providers_type === 2 && occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      } else if (res.meeting.providers_type === 2 && !occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.occurrences[0].start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      }
    }
    if (res.meeting.provider === "zoom") {
      if (res.meeting.providers_type === 2 || res.meeting.providers_type === 8 && occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      } else if (res.meeting.providers_type === 8 && !occurrenceId) {
        startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(res.meeting.occurrences[0].start_time).tz(res.meeting.timezone).format("YYYY-MM-DDTHH:mm:ss:SSS").replace(/:\d\d\d$/, "");
      }
    }
    const hasRecurrenceTab = !!(res.meeting.recurrence && !occurrenceId);
    let eventRecurrence = null;
    if (res.meeting.recurrence && res.meeting.recurrence.type) {
      eventRecurrence = res.meeting.recurrence;
    }
    const attributes = {
      meeting: {
        eventType: res.meeting.providers_type,
        title: res.meeting.topic,
        location: res.meeting.provider,
        startTime: startTime,
        duration: res.meeting.duration,
        timezone: res.meeting.timezone,
        recurrence: eventRecurrence
      },
      product: {
        price: res.product.price,
        quantity: res.product.current_quantity,
        current_quantity: res.product.current_quantity
      },
      notifications: {
        google_calendar: res.notifications.google_calendar,
        disable_emails: res.notifications.disable_emails
      },
      types: {
        ...res.types
      },
      custom_fields: {
        ...res.custom_fields
      }
    };
    if (res.tickets) {
      attributes.tickets = res.tickets;
    }
    if (!res.product.current_quantity) {
      delete attributes.product.current_quantity;
    }
    return {
      postId,
      status: postStatus,
      attributes,
      hasRecurrenceTab,
      notFoundError
    };
  };

  /**
   * REGISTRANTS
   */
  const fetchEventRegistrants = async ({
    postID,
    page = 1,
    occurrenceId
  }) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=10&page=${page}`;
    if (occurrenceId) {
      url += `&occurrence_id=${occurrenceId}`;
    }
    let res = null;
    try {
      res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: url
      });
    } catch (e) {
      return {
        registrants: [],
        pagination: {
          pageNumber: 1,
          pageCount: 1
        }
      };
    }
    if (!res) {
      return {
        registrants: [],
        pagination: {
          pageNumber: 1,
          pageCount: 1
        }
      };
    }
    const registrantsForShow = res.registrants?.map(registrant => {
      if (!registrant) return null;
      return {
        id: registrant.id,
        firstName: registrant.first_name,
        lastName: registrant.last_name,
        email: registrant.email
      };
    }).filter(Boolean) || [];
    return {
      registrants: registrantsForShow,
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count
      }
    };
  };
  const deleteRegistrant = async ({
    postID,
    registrantID
  }) => {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE"
    });
  };
  const resendRegistrantNotification = async ({
    postID,
    registrantID,
    occurrenceId
  }) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: url,
      method: "POST"
    });
  };
  const resendAllNotifications = async ({
    postID,
    occurrenceId
  }) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }
    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url,
      method: "POST",
      headers: getNonceHeaders()
    });
    return res;
  };
  return {
    fetchSettings,
    fetchCalendarAccount,
    fetchZoomAccount,
    fetchStripeAccount,
    fetchGmailAccount,
    fetchFiltersByType,
    fetchAllFilters,
    fetchEventTickets,
    fetchEventData,
    fetchEventRegistrants,
    deleteRegistrant,
    resendRegistrantNotification,
    resendAllNotifications
  };
};

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pages/PageWrapper.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper.module.scss */ "./src/Components/Pages/PageWrapper.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// `flush` drops the wrapper's own side padding for pages that already frame
// themselves with <PageContent>, so the reference's 32px gutter is not doubled.

const PageWrapper = props => {
  const useNativeNavigation = Boolean(window.servvData?.nativeAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window.Intercom) {
      window.Intercom("update", {
        hide_default_launcher: true
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [props.withBackground && !useNativeNavigation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].backdrop
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: [_PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].root, props.flush ? "" : _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].gutterLeft].filter(Boolean).join(" "),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner,
        children: props.loading && !props.withoutSpinner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          loading: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: [_PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content, props.flush ? "" : _PageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].gutterRight,
        // `loading` is a legacy global (input.css) blur, not a module class.
        props.loading ? "loading" : ""].filter(Boolean).join(" "),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_0__.ToastContainer, {
          position: "bottom-right"
        }), props.children]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

/***/ }),

/***/ "./src/Components/Pages/SpinnerLoader.jsx":
/*!************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Spinner */ "./src/Components/Menu/Spinner.jsx");
/* harmony import */ var _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpinnerLoader.module.scss */ "./src/Components/Pages/SpinnerLoader.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// `customStyling` is a pass-through for the overlay's box — call sites use it
// to give the spinner a height when there are no children to cover.

const SpinnerLoader = ({
  isLoading,
  children,
  customStyling = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: isLoading ? _SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].blurred : "",
      children: children
    }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: [_SpinnerLoader_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].overlay, customStyling].filter(Boolean).join(" "),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Menu_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);

/***/ }),

/***/ "./src/utilities/attributes.js":
/*!*************************************!*\
  !*** ./src/utilities/attributes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeAttributesPatch: () => (/* binding */ mergeAttributesPatch)
/* harmony export */ });
// Shallow-merges a patch into the event attributes, one level deep: plain
// objects are merged with what is already there, while arrays and primitives
// replace it. Pass the result to a state setter's updater form.
const mergeAttributesPatch = (prev, patch) => {
  const next = {
    ...prev
  };
  Object.keys(patch).forEach(key => {
    const value = patch[key];
    const isPlainObject = typeof value === "object" && value !== null && !Array.isArray(value);
    next[key] = isPlainObject ? {
      ...(prev[key] || {}),
      ...value
    } : value;
  });
  return next;
};

/***/ }),

/***/ "./src/utilities/events.js":
/*!*********************************!*\
  !*** ./src/utilities/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   eventKey: () => (/* binding */ eventKey),
/* harmony export */   eventRoutePayload: () => (/* binding */ eventRoutePayload),
/* harmony export */   generateEventData: () => (/* binding */ generateEventData),
/* harmony export */   getEvent: () => (/* binding */ getEvent),
/* harmony export */   getFeaturedImage: () => (/* binding */ getFeaturedImage),
/* harmony export */   openEventPost: () => (/* binding */ openEventPost),
/* harmony export */   updateEvent: () => (/* binding */ updateEvent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const headers = () => ({
  "X-WP-Nonce": servvData.nonce
});
const getEvent = async (postId, occurrenceId = null) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/wp-json/servv-plugin/v1/event/${postId}`, {
    params: occurrenceId ? {
      occurrence_id: occurrenceId
    } : {},
    headers: headers()
  });
  return response.data;
};
const createEvent = async (location, data) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/events/${location}`, data, {
    headers: headers()
  });
  return response.data;
};
const generateEventData = async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/wp-json/servv-plugin/v1/event/data/generate`, data, {
    headers: headers()
  });
  return response.data;
};
const updateEvent = async (postId, data, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${postId}`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(url, data, {
    headers: headers()
  });
  return response.data;
};
const getFeaturedImage = async (postId, signal = null) => {
  const WP_API_BASE = `/wp-json/wp/v2/posts`;
  const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, {
    signal
  });
  console.log(res);
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
};

// Opens the public post an event is published as. The events endpoint only
// knows the post id, so the permalink has to come from WordPress itself.
const openEventPost = postId => {
  if (!postId) return;
  fetch(`/wp-json/wp/v2/posts/${postId}`).then(res => res.json()).then(post => {
    if (post?.link) open(post.link, "_blank");
  }).catch(e => console.log(e));
};

// One event can appear as its series and as a single occurrence, so neither id
// alone identifies a row.
const eventKey = event => `${event.id}${event.occurrence_id || ""}`;

// The shape Dashboard's handleOpenEvent expects. Kept in one place so every
// view — cards, rows, rail — navigates identically.
const eventRoutePayload = (event, {
  registrants = false
} = {}) => ({
  id: event.post_id,
  occurrence_id: event.occurrence_id,
  ...(registrants ? {
    registrants_view: true
  } : {})
});

/***/ }),

/***/ "./src/utilities/tickets.js":
/*!**********************************!*\
  !*** ./src/utilities/tickets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTicket: () => (/* binding */ createTicket),
/* harmony export */   deleteTicket: () => (/* binding */ deleteTicket),
/* harmony export */   multipleTicketsCreate: () => (/* binding */ multipleTicketsCreate),
/* harmony export */   multipleTicketsUpdate: () => (/* binding */ multipleTicketsUpdate),
/* harmony export */   updateTicket: () => (/* binding */ updateTicket)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const createTicket = async ({
  postId,
  occurrenceId = null,
  token,
  ticket
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: requestURL,
      headers: {
        "X-WP-Nonce": token
      },
      data: {
        ...ticket
      }
    });
    return response;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return null;
  }
};

// The editable fields of a ticket; the API ignores anything else on the object.
const ticketPayload = ticket => ({
  name: ticket.name,
  quantity: ticket.quantity,
  price: ticket.price,
  is_donation: ticket.is_donation,
  start_datetime: ticket.start_datetime,
  end_datetime: ticket.end_datetime
});
const patchTicket = async ({
  postId,
  token,
  ticket
}) => (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
  method: "PATCH",
  url: `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticket.id}`,
  headers: {
    "X-WP-Nonce": token
  },
  data: ticketPayload(ticket)
});
const updateTicket = async ({
  postId,
  token,
  ticket
}) => {
  try {
    return await patchTicket({
      postId,
      token,
      ticket
    });
  } catch (error) {
    console.error("Error on ticket update:", error);
    return null;
  }
};
const deleteTicket = async ({
  postId,
  occurrenceId = null,
  ticketId,
  token
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticketId}`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "DELETE",
      url: requestURL,
      headers: {
        "X-WP-Nonce": token
      }
    });
    return response;
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return null;
  }
};
const multipleTicketsCreate = async ({
  postId,
  occurrenceId = null,
  token,
  tickets
}) => {
  try {
    const responses = await Promise.all(tickets.map(ticket => (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: `/wp-json/servv-plugin/v1/event/${postId}/tickets`,
      headers: {
        "X-WP-Nonce": token
      },
      data: {
        ticket
      }
    })));
    return responses;
  } catch (error) {
    console.error("Error creating one or more tickets:", error);
    return null;
  }
};
const multipleTicketsUpdate = async ({
  postId,
  token,
  tickets
}) => {
  const responses = [];
  try {
    for (const ticket of tickets) {
      responses.push(await patchTicket({
        postId,
        token,
        ticket
      }));
    }
    return responses;
  } catch (error) {
    console.error("Error updating one or more tickets:", error);
    return null;
  }
};

/***/ }),

/***/ "./src/Components/Pages/PageWrapper.module.scss":
/*!******************************************************!*\
  !*** ./src/Components/Pages/PageWrapper.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"backdrop":"GwbBdwO7UxUbci6wtyds","root":"whZeFIc454jkDbuWw6zj","gutterLeft":"nH2l6oxNCJ28ihBOUf7w","gutterRight":"KKg_qLS4gdJXh4u6HnvG","spinner":"Al4EqMTkXH8MiW77lCyS","content":"DhHmGpnbQlurQkapo8Ei"});

/***/ }),

/***/ "./src/Components/Pages/SpinnerLoader.module.scss":
/*!********************************************************!*\
  !*** ./src/Components/Pages/SpinnerLoader.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"root":"NvXIBF17sKtsJ5DppGj6","blurred":"s8xU0aT_Upum9VaMUtFv","overlay":"rwBQn7Ep0HRpuD73wvEE"});

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.b4e524fb.png";

/***/ })

}]);
//# sourceMappingURL=src_Components_CreateEvent_CreateEventForm_jsx.js.map?ver=ba9d06c2ea2dbf1b07ae