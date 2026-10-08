import React from "react";
import { mergeAttributesPatch } from "../../utilities/attributes";
import {
  CalendarIcon,
  MapMarkIcon,
  Filter,
  BrushIcon,
  TicketIcon,
  CloseIcon,
} from "../../assets/icons";
import { EyeIcon } from "@heroicons/react/24/outline";

import { useEffect, useState, useRef } from "react";
import { useServvStore } from "../../store/useServvStore";
import logo from "../../assets/images/logo.png";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import {
  getEvent,
  getFeaturedImage,
  createEvent,
  updateEvent,
} from "../../utilities/events";
import PageWrapper from "../Pages/PageWrapper";
import { toast } from "react-toastify";
import {
  createTicket,
  updateTicket,
  multipleTicketsCreate,
  multipleTicketsUpdate,
  deleteTicket,
} from "../../utilities/tickets";
import { useServvData } from "../Pages/Events/useServvData";
const DateStep = React.lazy(() => import("./DateStep"));
const VenueStep = React.lazy(() => import("./VenueStep"));
const FiltersStep = React.lazy(() => import("./FiltersStep"));
const BrandingStep = React.lazy(() => import("./BrandingStep"));
const TicketsStep = React.lazy(() => import("./TicketsStep"));
const RegistrantsStep = React.lazy(() => import("./RegistrantsStep"));
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../Pages/SpinnerLoader";

const StepperIcon = ({ Icon, iconClass, active, showLine }) => {
  return (
    <div className="stepper-icon">
      <span className={`icon-box ${active ? "is-active" : ""}`}>
        <Icon className={`icon-box__svg ${iconClass}`} aria-hidden="true" />
      </span>

      {showLine && <div className="icon-line" />}
    </div>
  );
};

const StepperText = ({ title, subtitle, active }) => {
  return (
    <div className={`stepper-text ${active ? "is-active" : ""}`}>
      <div className="stepper-title">{title}</div>
      <div className="stepper-subtitle">{subtitle}</div>
    </div>
  );
};

const CreateEventForm = () => {
  const settings = useServvStore((s) => s.settings);
  const adminDashboardRaw = useServvStore(
    (s) => s.settings?.settings?.admin_dashboard,
  );
  const zoomConnected = useServvStore((s) => s.zoomConnected);
  const stripeConnected = useServvStore((s) => s.stripeConnected);
  const calendarConnected = useServvStore((s) => s.calendarConnected);
  const gmailConnected = useServvStore((s) => s.gmailConnected);
  const filtersList = useServvStore((s) => s.filtersList);

  const { fetchEventTickets } = useServvData();
  const navigate = useNavigate();
  const [currentSettings, setCurrentSettings] = useState({});
  const contentRef = useRef(null);
  const { fetchSettings, syncFiltersFromServer } = useServvStore();
  const [attributes, setAttributes] = useState({
    location: "offline",
    defaultLocationChanged: false,
    meeting: {},
    tickets: [],
    product: {
      price: 0,
      quantity: 5,
    },
    filters: {},
    branding: {},
    notifications: {
      google_calendar: false,
      disable_emails: false,
    },
    custom_fields: {
      custom_field_1_name: "",
      custom_field_1_value: "",
      custom_field_2_name: "",
      custom_field_2_value: "",
    },
  });
  const [stepComponents, setStepComponents] = useState({
    date: DateStep,
    venue: VenueStep,
    tickets: TicketsStep,
    filters: FiltersStep,
    branding: BrandingStep,
    registrants: RegistrantsStep,
  });
  const [isError, setError] = useState(false);
  const [steps, setSteps] = useState([
    {
      key: "branding",
      title: "Event details",
      subtitle: "Add additional information and an image",
      Icon: BrushIcon,
      iconClass: "icon--angled",
    },
    {
      key: "date",
      title: "Date and time",
      subtitle: "Select the event’s date, time, and frequency",
      Icon: CalendarIcon,
      iconClass: "",
    },
    {
      key: "venue",
      title: "Location",
      subtitle: "Choose the event location",
      Icon: MapMarkIcon,
      iconClass: "icon--tall",
    },
    {
      key: "tickets",
      title: "Tickets",
      subtitle: "Create ticket types and quantities",
      Icon: TicketIcon,
      iconClass: "icon--wide",
    },
    {
      key: "filters",
      title: "Additional notes",
      subtitle: "Set filters and add notes",
      Icon: Filter,
      iconClass: "",
    },
  ]);
  const [currentStep, setCurrentStep] = useState(steps[0].key);
  const [isFullWidth, setIsFullWidth] = useState(false);

  useEffect(() => {
    setIsFullWidth(false);
  }, [currentStep]);

  const StepComponent = stepComponents[currentStep];

  const { id: routeId } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const occurrenceIdFromQuery =
    searchParams.get("occurrence_id") ||
    searchParams.get("occurrenceId") ||
    searchParams.get("occ") ||
    null;
  const isOnboarding = searchParams.get("onboarding_step");
  const registrantsView = searchParams.get("registrants");
  useEffect(() => {
    if (registrantsView) setCurrentStep("registrants");
  }, [registrantsView]);
  const isNew = !routeId;
  useEffect(() => {
    if (isOnboarding) {
      fetchSettings();
      syncFiltersFromServer();
      let newSteps = [...steps];
      newSteps = newSteps.filter((s) => s.key !== "filters");
      setSteps(newSteps);
    } else {
    }
  }, [isOnboarding]);

  // Images
  const WP_API_BASE = "/wp-json/wp/v2/posts";
  const PLACEHOLDER_IMAGE = window.servvData?.pluginUrl
    ? `${window.servvData.pluginUrl}public/assets/images/placeholder.png`
    : "";

  const featuredImageCache = new Map();

  async function fetchFeaturedImage(postId, signal) {
    if (!postId) return PLACEHOLDER_IMAGE;

    if (featuredImageCache.has(postId)) {
      return featuredImageCache.get(postId);
    }

    try {
      const url = await getFeaturedImage(postId, signal);
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

  const [loadingEvent, setLoadingEvent] = useState(false);
  const [eventLoaded, setEventLoaded] = useState(false);
  const stripMime = (value) => {
    if (!value) return "";

    if (value.startsWith("data:image")) {
      return value.split(",")[1];
    }

    return null;
  };
  const hasValue = (value) => {
    if (value === null || value === undefined) return false;

    if (Array.isArray(value)) return value.length > 0;

    if (typeof value === "object") return Object.keys(value).length > 0;

    return true;
  };

  const fetchEventInfo = async (postId, occurrenceId) => {
    setLoadingEvent(true);
    const controller = new AbortController();
    const getEventTypeFromPath = (pathname) => {
      if (pathname.includes("/events/zoom/")) return "zoom";
      if (pathname.includes("/events/offline/")) return "offline";
      return null;
    };
    const eventType = getEventTypeFromPath(location.pathname);

    try {
      const data = await getEvent(postId, occurrenceId);
      const imageUrl = await fetchFeaturedImage(postId, controller.signal);
      let startTime = null;
      if (data.meeting.start_time) {
        startTime = moment.tz(data.meeting.start_time, data.meeting.timezone);
      } else if (data.meeting.occurrences) {
        const firstOccurrence = data.meeting.occurrences[0];
        startTime = moment.tz(
          firstOccurrence.start_time,
          data.meeting.timezone,
        );
      }
      let payload = {
        image_content: imageUrl || null,
        meeting: {
          ...data.meeting,
          startTime: startTime,
        },
        tickets:
          data.tickets.map((ticket) => {
            const baseTicket = {
              ...ticket,
              title: ticket.name,
              ...(ticket.price != null && { price: ticket.price }),
              type:
                ticket.price === 0 && !ticket.is_donation
                  ? "free"
                  : ticket.is_donation
                  ? "donation"
                  : "paid",
            };

            if (ticket.start_datetime && data.meeting.timezone) {
              const utcMoment = moment.utc(ticket.start_datetime);

              const converted = utcMoment
                .tz(data.meeting.timezone)
                .format("YYYY-MM-DDTHH:mm:ss");

              baseTicket.start_datetime = converted;
            }

            if (ticket.end_datetime && data.meeting.timezone) {
              const utcMoment = moment.utc(ticket.end_datetime);

              const converted = utcMoment
                .tz(data.meeting.timezone)
                .format("YYYY-MM-DDTHH:mm:ss");

              baseTicket.end_datetime = converted;
            }

            return baseTicket;
          }) || [],
        product: data.product || {},
        filters: data.types || {},
        branding: data.branding || {},
        notifications: data.notifications || {},
        custom_fields: data.custom_fields || {},
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

      if (
        data.meeting.occurrences === undefined ||
        data.meeting.occurrences === null ||
        data.meeting.occurrences.length === 0 ||
        occurrenceIdFromQuery
      ) {
        // newSteps.push({
        //   key: "registrants",
        //   title: "Registrants",
        //   subtitle: "Manage registrants",
        //   Icon: Contacts,
        //   iconClass: "icon--left",
        // });
      }

      if (!isNew && data.wp_post_url) {
        mergeAttributes({ wp_post_url: data.wp_post_url });
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
        const occurrenceTickets = fetchEventTickets({ postId, occurrenceId });
        if (occurrenceTickets.length > 0) {
          mergeAttributes({
            tickets: { ...attributes.tickets, ...occurrenceTickets },
          });
        }
      }

      setEventLoaded(true);
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 404) {
        toast.error("Event not found or has been deleted.");
      } else if (error?.response?.status === 403) {
        toast.error("You do not have permission to open this event.");
      } else {
        toast.error("Unable to open the event. Please try again.");
      }
    }

    setLoadingEvent(false);
  };

  useEffect(() => {
    if (!adminDashboardRaw) return;

    let parsed;
    try {
      parsed =
        typeof adminDashboardRaw === "string"
          ? JSON.parse(adminDashboardRaw)
          : adminDashboardRaw;
    } catch (e) {
      console.error("Failed to parse admin dashboard", e);
      return;
    }

    setCurrentSettings((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        settings: {
          ...prev.settings?.settings,
          admin_dashboard: {
            ...prev.settings?.settings?.admin_dashboard,
            ...parsed,
          },
        },
      },
    }));

    const defaultStart = parsed?.default_start_time;
    if (!defaultStart && !isNew) return;

    const timeMoment = moment(
      defaultStart,
      ["h:mm a", "hh:mm a", "H:mm"],
      true,
    );
    if (!timeMoment.isValid()) {
      console.warn("Invalid default_start_time:", defaultStart);
      return;
    }

    const hours = timeMoment.hours();
    const minutes = timeMoment.minutes();

    setAttributes((prev) => {
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

      const newStart = `${datePart}T${String(hours).padStart(2, "0")}:${String(
        minutes,
      ).padStart(2, "0")}:00`;

      return {
        ...prev,
        meeting: {
          ...prev.meeting,
          startTime: newStart,
          duration: parsed?.default_duration
            ? parsed.default_duration * 60
            : prev.meeting?.duration,
        },
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

  useEffect(() => {
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
          tickets: { ...attributes.tickets, ...occurrenceTickets },
        });
      }
    }
  }, [routeId, occurrenceIdFromQuery]);

  const mergeAttributes = (patch) => {
    setAttributes((prev) => mergeAttributesPatch(prev, patch));
  };

  const updateTickets = async () => {
    const tickets =
      attributes.tickets?.map((ticket) => ({
        ...ticket,
        name: ticket.title,
        ...(ticket.price != null && { price: ticket.price }),
        is_donation: ticket.type === "donation",
      })) || [];

    if (!tickets.length) return;

    const toCreate = [];
    const toUpdate = [];
    const toRemove = [];

    tickets.forEach((ticket) => {
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
      await createTicket({
        postId: routeId,
        token: servvData.nonce,
        ticket: toCreate[0],
        occurrenceId: occurrenceIdFromQuery,
      });
    } else if (toCreate.length > 1) {
      await multipleTicketsCreate({
        postId: routeId,
        token: servvData.nonce,
        tickets: toCreate,
        occurrenceId: occurrenceIdFromQuery,
      });
    }

    // UPDATE
    if (toUpdate.length === 1) {
      await updateTicket({
        postId: routeId,
        token: servvData.nonce,
        ticket: toUpdate[0],
      });
    } else if (toUpdate.length > 1) {
      await multipleTicketsUpdate({
        postId: routeId,
        token: servvData.nonce,
        tickets: toUpdate,
      });
    }

    // REMOVE (soft delete on backend)

    if (toRemove.length) {
      await Promise.all(
        toRemove.map((ticket) =>
          deleteTicket({
            postId: routeId,
            token: servvData.nonce,
            ticketId: ticket.id,
            occurrenceId: occurrenceIdFromQuery,
          }),
        ),
      );
    }
    setAttributes((prev) => ({
      ...prev,
      tickets: prev.tickets
        .filter((t) => t.action !== "remove")
        .map(({ action, ...t }) => t),
    }));
  };

  const handleFormSubmit = async (forceQuit = true) => {
    let requestURL = `/wp-json/servv-plugin/v1/`;

    if (isNew) {
      requestURL += `events/${
        attributes.location !== "zoom" ? "offline" : "zoom"
      }`;
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

    const isOffline =
      attributes.location === "offline" ||
      attributes.location === "hybrid" ||
      attributes.location === "custom";

    let data = {
      meeting: {
        topic: attributes.meeting.topic,
        startTime: moment
          .tz(attributes.meeting.startTime, attributes.meeting.timezone)
          .utc()
          .format("YYYY-MM-DDTHH:mm:ss"),
        duration: attributes.meeting.duration,
        agenda: attributes.meeting.agenda,
        timezone: attributes.meeting.timezone,
        // eventType: attributes.meeting.eventType,
        recurrence: {
          ...attributes.meeting.recurrence,
        },
      },

      // product: {
      //   price: attributes.product.price,
      //   quantity: attributes.product.quantity,
      // },
      notifications: {
        google_calendar: attributes.notifications.google_calendar,
        disable_emails: attributes.notifications.disable_emails,
      },
      types: {
        location_id:
          attributes.location === "zoom" || attributes.location === "custom"
            ? null
            : attributes.filters.location_id,
        category_id: attributes.filters.category_id,
        language_id: attributes.filters.language_id,
        members: attributes.filters.members,
      },
      custom_fields: {
        ...attributes.custom_fields,
      },
      image_content: stripMime(attributes.image_content),
    };
    if (!isNew) {
      data.product = { ...attributes.product };
      data.meeting = {
        topic: attributes.meeting.topic,
        agenda: attributes.meeting.agenda,
        start_time: attributes.meeting.startTime,
        timezone: attributes.meeting.timezone,
        duration: attributes.meeting.duration,
        type: isRecurring ? (isOffline ? 2 : 8) : isOffline ? 1 : 2,
      };
      if (attributes.registrants && attributes.registrants.length > 0) {
        data.registrants = attributes.registrants
          .filter((reg) => reg.status && reg.status === "create")
          .map((reg) => {
            return {
              first_name: reg.firstName,
              last_name: reg.lastName,
              email: reg.email,
            };
          });
      }
    } else {
      data.meeting = {
        ...attributes.meeting,
        eventType: isRecurring ? (isOffline ? 2 : 8) : isOffline ? 1 : 2,
      };
    }
    if (isNew && settings?.current_plan?.id === 1) {
      // Free plan: no tickets, only product quantity
      const quantity = attributes.tickets
        .filter((ticket) => ticket.action !== "remove")
        .reduce((sum, ticket) => sum + (Number(ticket.quantity) || 0), 0);
      data.product = {
        quantity: quantity || Number(attributes.product?.quantity) || 1,
      };
    } else if (isNew) {
      data.tickets = attributes.tickets
        .filter(
          (ticket) =>
            Number.isFinite(Number(ticket.quantity)) &&
            Number(ticket.quantity) > 0,
        )
        .map((ticket) => {
          const timezone = attributes.meeting?.timezone;

          const payload = {
            name: ticket.title,
            quantity: Number(ticket.quantity),
            ...(ticket.price != null && { price: ticket.price }),
            is_donation: ticket.type === "donation",
          };

          if (ticket.start_datetime && timezone) {
            try {
              const inEventTz = moment.tz(
                ticket.start_datetime,
                "YYYY-MM-DDTHH:mm:ss",
                timezone,
              );

              if (!inEventTz.isValid()) {
                console.error("Invalid start_datetime:", ticket.start_datetime);
                throw new Error("Invalid datetime format");
              }

              const utcDateTime = inEventTz.clone().utc();
              // Add 'Z' suffix to explicitly mark as UTC
              payload.start_datetime =
                utcDateTime.format("YYYY-MM-DDTHH:mm:ss") + "Z";
            } catch (error) {
              console.error("Start datetime conversion error:", error, {
                input: ticket.start_datetime,
                timezone,
              });
            }
          }

          if (ticket.end_datetime && timezone) {
            try {
              const inEventTz = moment.tz(
                ticket.end_datetime,
                "YYYY-MM-DDTHH:mm:ss",
                timezone,
              );

              if (!inEventTz.isValid()) {
                console.error("Invalid end_datetime:", ticket.end_datetime);
                throw new Error("Invalid datetime format");
              }

              const utcDateTime = inEventTz.clone().utc();
              // Add 'Z' suffix to explicitly mark as UTC
              payload.end_datetime =
                utcDateTime.format("YYYY-MM-DDTHH:mm:ss") + "Z";
            } catch (error) {
              console.error("End datetime conversion error:", error, {
                input: ticket.end_datetime,
                timezone,
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
        await createEvent(location, data);
      } else {
        await updateEvent(routeId, data, occurrenceIdFromQuery);
      }
      toast.success(`Event ${isNew ? "created" : "updated"} successfully.`);
      if ((isNew && !isOnboarding) || forceQuit)
        navigate("/dashboard?created=success");
      else if (isNew) navigate("/dashboard?created=success");
      setLoadingEvent(false);
    } catch (e) {
      toast.error(
        isNew
          ? "Event creation failed. Please check the details and try again."
          : "Event update failed. Please check the details and try again.",
      );
      setLoadingEvent(false);
    }
  };
  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // or omit
      });
    }
  }, [currentStep]);

  return (
    <div className="create-event">
      {/* SIDEBAR */}
      {!registrantsView && (
        <aside
          className={`create-event__sidebar ${
            settings?.is_wp_marketplace ? "marketplace" : ""
          }`}
        >
          <div className="logo-wrapper">
            <div
              className="logo-bg"
              style={{ backgroundImage: `url(${logo})` }}
            />
            <div className="sidebar__logo servv-logo-png" />
          </div>

          <div className="sidebar__stepper">
            <div>
              {steps.map((step, index) => {
                const isActive = step.key === currentStep;

                return (
                  <div
                    className="stepper__row"
                    key={step.key}
                    onClick={() =>
                      step.key !== "view"
                        ? !isError
                          ? setCurrentStep(step.key)
                          : () => {}
                        : open(attributes.wp_post_url, "_blank")
                    }
                  >
                    <StepperIcon
                      Icon={step.Icon}
                      iconClass={step.iconClass}
                      active={isActive}
                      showLine={index < steps.length - 1}
                    />

                    <StepperText
                      title={step.title}
                      subtitle={step.subtitle}
                      active={isActive}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      )}

      {/* CONTENT */}

      <PageWrapper loading={false} withoutSpinner={true}>
        <main
          className={`create-event__content ${
            settings?.is_wp_marketplace ? "marketplace" : ""
          } ${registrantsView ? "registrants-centered" : ""}`}
          ref={contentRef}
        >
          <div
            className="servv-create-form-close"
            onClick={() => {
              const from = location.state?.from;
              const allowed = ["/dashboard", "/events"];

              const canGoBack =
                from && allowed.some((path) => from.includes(path));
              canGoBack ? navigate(-1) : navigate("/events");
            }}
          >
            <CloseIcon className="servv-create-form-close-icon" />
          </div>
          <div
            className={`step-content-wrapper ${
              isOnboarding &&
              (currentStep === "tickets" || currentStep === "venue")
                ? "w-full"
                : ""
            }`}
          >
            <React.Suspense
              fallback={<div className="step-loading">Loading…</div>}
            >
              {StepComponent && (
                <SpinnerLoader
                  isLoading={loadingEvent && currentStep !== "registrants"}
                >
                  <div key={currentStep} className="step-slide">
                    <StepComponent
                      attributes={attributes}
                      setAttributes={mergeAttributes}
                      settings={settings}
                      currentStep={currentStep}
                      changeStep={setCurrentStep}
                      handleFormSubmit={handleFormSubmit}
                      isNew={isNew}
                      loading={loadingEvent}
                      setLoading={setLoadingEvent}
                      zoomConnected={zoomConnected}
                      stripeConnected={stripeConnected}
                      calendarConnected={calendarConnected}
                      gmailConnected={gmailConnected}
                      isOccurrence={occurrenceIdFromQuery}
                      isError={isError}
                      setError={setError}
                      isOnboarding={isOnboarding}
                      setFullWidth={setIsFullWidth}
                      registrantsView={registrantsView}
                    />
                  </div>
                </SpinnerLoader>
              )}
            </React.Suspense>
          </div>
        </main>
      </PageWrapper>
    </div>
  );
};

export default CreateEventForm;
