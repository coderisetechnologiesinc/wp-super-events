import React, { useEffect, useId, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import {
  ArrowUpTrayIcon,
  MapPinIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import BreadCrumbs from "../Menu/BreadCrumbs";
import { useServvStore } from "../../store/useServvStore";
import PageWrapper from "../Pages/PageWrapper";
import PageContent from "../Containers/PageContent";
import PageActionButton from "../Controls/PageActionButton";
import NewRecurringControl from "../Controls/NewRecurringControl";
import NewDatePickerControl from "../Controls/NewDatePickerControl";
import EventTimeControl from "./EventTimeControl";
import NewEndDateControl from "./NewEndDateControl";
import RegistrantsStep from "./RegistrantsStep";
import useUnifiedEventForm from "./useUnifiedEventForm";
import { readDefaults, uses24HourClock } from "./eventFormData";
import { COVER_IMAGE_ACCEPT, readCoverImage } from "./coverImage";
import CreateFilterModal from "../Pages/Filters/CreateFilterModal";
import { useFilterLimits } from "../Pages/Filters/useFilterLimits";
import styles from "./UnifiedEventForm.module.scss";

const Section = ({ step, title, children }) => (
  <section className={styles.card}>
    <header className={styles.cardHeader}>
      <span className={styles.eyebrow}>Step {step}</span>
      <h2>{title}</h2>
    </header>
    <div className={styles.body}>{children}</div>
  </section>
);
const Field = ({ label, hint, children }) => {
  const id = useId();
  return (
    <label className={styles.field}>
      <span id={id}>{label}</span>
      {React.cloneElement(children, {
        "aria-labelledby": id,
        ...(hint ? { "aria-describedby": `${id}-hint` } : {}),
      })}
      {hint && <small id={`${id}-hint`}>{hint}</small>}
    </label>
  );
};
const Choice = ({ selected, label, note, icon: Icon, onClick, disabled }) => (
  <button
    type="button"
    className={`${styles.choice} ${selected ? styles.selected : ""}`}
    aria-pressed={selected}
    onClick={onClick}
    disabled={disabled}
  >
    <span className={styles.radio} />
    {Icon && <Icon className={styles.formatIcon} />}
    <span>
      <strong>{label}</strong>
      <small>{note}</small>
    </span>
  </button>
);
const Toggle = ({ label, note, checked, onChange, disabled }) => (
  <div className={styles.toggleRow}>
    <div>
      <strong>{label}</strong>
      <small>{note}</small>
    </div>
    <button
      type="button"
      role="switch"
      aria-label={label}
      aria-checked={checked}
      disabled={disabled}
      className={`${styles.toggle} ${checked ? styles.on : ""}`}
      onClick={() => onChange?.(!checked)}
    >
      <span />
    </button>
  </div>
);

export default function UnifiedEventForm() {
  const {
    event,
    patch,
    settings,
    loading,
    saving,
    error,
    save,
    saveDraft,
    isNew,
    id,
    occurrence,
    registrantsView,
    recoverDraft,
  } = useUnifiedEventForm();
  const filters = useServvStore((s) => s.filtersList);
  const stripe = useServvStore((s) => s.stripeConnected);
  const zoom = useServvStore((s) => s.zoomConnected);
  const calendar = useServvStore((s) => s.calendarConnected);
  const calendarSynced = useServvStore((s) => s.calendarSynced);
  const navigate = useNavigate();

  // BrandingStep renders the Google Calendar toggle from `calendar`, and the
  // dashboard bootstrap defers that read — this form can open before it ran,
  // or on a reload that never passed through the dashboard at all.
  useEffect(() => {
    if (!calendarSynced) useServvStore.getState().syncCalendarAccount();
  }, [calendarSynced]);
  const formRef = useRef(null);
  const [editingTicket, setEditingTicket] = useState(null);
  const [imageError, setImageError] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageBusy, setImageBusy] = useState(false);
  const [creatingFilter, setCreatingFilter] = useState(null);
  const imageInputId = useId();
  const meeting = event.meeting;
  // image_content holds a freshly picked data URL, sent to the API as base64;
  // featured_image_url is the cover already attached to the WordPress post.
  const cover = event.image_content || event.featured_image_url || "";
  const freePlan = Number(settings.current_plan?.id) === 1;
  const recurringAllowed = settings.current_plan?.features?.some(
    (f) => f.title === "Recurring" && String(f.value) === "true",
  );
  const defaults = readDefaults(settings);
  // A filter kind the plan does not expose, or a store that has used up its
  // allowance, cannot gain values from here either.
  const { isLimitReached, filterCategories } = useFilterLimits(
    settings,
    filters,
  );
  const activeTickets = event.tickets.filter((t) => t.action !== "remove");
  const activeTicket = activeTickets.find((t) => t.id === editingTicket);
  const patchMeeting = (update) => patch({ meeting: update });
  const patchTicket = (id, update) =>
    patch({
      tickets: event.tickets.map((t) =>
        t.id === id
          ? { ...t, ...update, action: t.persisted ? "update" : undefined }
          : t,
      ),
    });
  const addTicket = () => {
    const ticket = {
      id: uuid(),
      title: "Standard",
      type: "free",
      quantity: Number(defaults.default_quantity) || 1,
      price: 0,
    };
    patch({ tickets: [...event.tickets, ticket] });
    setEditingTicket(ticket.id);
  };
  const publish = () => {
    if (imageBusy) {
      toast.warning("Wait for the cover image to finish processing.");
      return;
    }
    if (formRef.current?.reportValidity()) save();
  };
  const updateStart = (part, value) => {
    const [date = "", time = "00:00:00"] = (meeting.startTime || "").split("T");
    patchMeeting({
      startTime: part === "date" ? `${value}T${time}` : `${date}T${value}:00`,
    });
  };
  // Reading and re-encoding is asynchronous, so publishing stays blocked until
  // it finishes: otherwise the payload is built without image_content and the
  // cover is dropped without any error.
  const readImage = async (file) => {
    if (!file) return;
    setImageBusy(true);
    setImageError("");
    try {
      patch({ image_content: await readCoverImage(file) });
      setImageName(file.name);
    } catch (failure) {
      setImageError(failure.message || "Unable to read this image.");
    } finally {
      setImageBusy(false);
    }
  };
  // What the chips below do on click, so a value created in the modal ends up
  // selected the same way.
  const selectFilterValue = (key, id) =>
    patch({
      filters: {
        [key]:
          key === "members"
            ? [...(event.filters.members || []), Number(id)]
            : Number(id),
      },
    });
  const filterCards = [
    ["location_id", "locations", "Location", "Where the event happens"],
    [
      "category_id",
      "categories",
      "Category",
      "Groups events in the public list",
    ],
    ["members", "members", "Member", "Host shown to attendees"],
    ["language_id", "languages", "Language", "Language of the session"],
  ];

  return (
    <PageWrapper flush loading={loading}>
      <PageContent className={styles.root}>
        <header className={styles.header}>
          <BreadCrumbs
            breadcrumbs={[
              { label: "Events", to: "/events" },
              {
                label: registrantsView
                  ? "Registrants"
                  : isNew
                  ? "New event"
                  : "Edit event",
              },
            ]}
          />
          <div className={styles.headingRow}>
            <div>
              <h1>
                {registrantsView
                  ? "Registrants"
                  : isNew
                  ? "New event"
                  : "Edit event"}
              </h1>
              <p>
                {registrantsView
                  ? meeting.topic
                  : "Five sections, then publish. Everything else can be edited later."}
              </p>
            </div>
            <div className={styles.actions}>
              <PageActionButton
                text="Cancel"
                type="ghost"
                onAction={() => navigate("/events")}
                disabled={saving}
              />
              {!registrantsView && isNew && (
                <PageActionButton
                  text="Save draft"
                  type="secondary"
                  onAction={saveDraft}
                  disabled={loading || saving || imageBusy || Boolean(error)}
                />
              )}
              <PageActionButton
                text={
                  saving ? "Saving…" : isNew ? "Publish event" : "Save changes"
                }
                onAction={publish}
                disabled={loading || saving || imageBusy || Boolean(error)}
              />
            </div>
          </div>
          <div className={styles.divider} />
        </header>
        {error ? (
          <div role="alert" className={styles.warning}>
            {error}
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              save();
            }}
          >
            <fieldset className={styles.fieldset} disabled={loading || saving}>
              {registrantsView ? (
                <RegistrantsStep
                  settings={settings}
                  attributes={event}
                  setAttributes={patch}
                  changeStep={() =>
                    navigate(
                      `/events/${
                        event.location === "zoom" ? "zoom" : "offline"
                      }/${id}${
                        occurrence
                          ? `?occurrence_id=${encodeURIComponent(occurrence)}`
                          : ""
                      }`,
                    )
                  }
                  handleFormSubmit={save}
                  registrantsView
                />
              ) : (
                <div className={styles.layout}>
                  <div className={styles.sections}>
                    <Section step="1" title="Basics">
                      <Field
                        label={
                          <>
                            Event title <em>*</em>
                          </>
                        }
                      >
                        <input
                          required
                          value={meeting.topic || ""}
                          placeholder="e.g. Autumn ceramics workshop"
                          onChange={(e) =>
                            patchMeeting({ topic: e.target.value })
                          }
                        />
                      </Field>
                      <Field
                        label="Description"
                        hint="Shown on the public event page and in confirmation emails."
                      >
                        <textarea
                          rows="4"
                          value={meeting.agenda || ""}
                          placeholder="What will attendees learn or experience?"
                          onChange={(e) =>
                            patchMeeting({ agenda: e.target.value })
                          }
                        />
                      </Field>
                      <details className={styles.details}>
                        <summary>Cover image and additional notes</summary>
                        <div className={styles.detailsBody}>
                          <div className={styles.upload}>
                            {cover ? (
                              <img
                                className={styles.cover}
                                src={cover}
                                alt="Event cover"
                              />
                            ) : (
                              <div className={styles.coverEmpty}>
                                <PhotoIcon className={styles.coverEmptyIcon} />
                                <span>No cover image yet</span>
                              </div>
                            )}
                            <span className={styles.fieldTitle}>
                              Cover image
                            </span>
                            <div className={styles.uploadRow}>
                              <input
                                id={imageInputId}
                                className={styles.fileInput}
                                type="file"
                                accept={COVER_IMAGE_ACCEPT}
                                disabled={imageBusy}
                                onChange={(e) => {
                                  readImage(e.target.files?.[0]);
                                  // Allows re-picking the same file after an
                                  // error, which fires no change event.
                                  e.target.value = "";
                                }}
                              />
                              <label
                                className={`${styles.uploadButton} ${
                                  imageBusy ? styles.uploadBusy : ""
                                }`}
                                htmlFor={imageInputId}
                                aria-busy={imageBusy}
                              >
                                <ArrowUpTrayIcon
                                  className={styles.uploadIcon}
                                />
                                {imageBusy
                                  ? "Preparing image…"
                                  : cover
                                  ? "Replace image"
                                  : "Upload image"}
                              </label>
                              <small className={styles.uploadHint}>
                                {imageName ||
                                  "JPG, PNG, GIF or WEBP · resized before upload"}
                              </small>
                            </div>
                            {imageError && (
                              <small
                                className={styles.uploadError}
                                role="alert"
                              >
                                {imageError}
                              </small>
                            )}
                          </div>
                          <Field label="Additional note title">
                            <input
                              value={
                                event.custom_fields.custom_field_2_name || ""
                              }
                              onChange={(e) =>
                                patch({
                                  custom_fields: {
                                    custom_field_2_name: e.target.value,
                                  },
                                })
                              }
                            />
                          </Field>
                          <Field label="Additional note">
                            <textarea
                              rows="2"
                              value={
                                event.custom_fields.custom_field_2_value || ""
                              }
                              onChange={(e) =>
                                patch({
                                  custom_fields: {
                                    custom_field_2_value: e.target.value,
                                  },
                                })
                              }
                            />
                          </Field>
                        </div>
                      </details>
                    </Section>
                    <Section step="2" title="Format & location">
                      <div className={styles.formats}>
                        {[
                          [
                            "offline",
                            "In-person",
                            "Physical address, shown on the public page",
                            MapPinIcon,
                          ],
                          [
                            "custom",
                            "Online",
                            "Meeting link sent with the confirmation",
                            VideoCameraIcon,
                          ],
                          [
                            "hybrid",
                            "Hybrid",
                            "Both an address and a meeting link",
                            VideoCameraIcon,
                          ],
                        ].map(([value, label, note, icon]) => (
                          <Choice
                            key={value}
                            selected={
                              event.location === value ||
                              (value === "custom" && event.location === "zoom")
                            }
                            label={label}
                            note={note}
                            icon={icon}
                            disabled={
                              !isNew &&
                              (event.location === "zoom") !==
                                (value === "zoom") &&
                              event.location === "zoom"
                            }
                            onClick={() =>
                              patch({
                                location: value,
                                custom_fields: {
                                  custom_field_1_name:
                                    value === "custom"
                                      ? "Meeting link"
                                      : value === "hybrid"
                                      ? "Link"
                                      : "",
                                  custom_field_1_value:
                                    value === "offline"
                                      ? ""
                                      : event.custom_fields
                                          .custom_field_1_value || "",
                                },
                              })
                            }
                          />
                        ))}
                      </div>
                      {["custom", "hybrid", "zoom"].includes(
                        event.location,
                      ) && (
                        <>
                          <Field label="Meeting provider">
                            <select
                              value={
                                event.location === "zoom" ? "zoom" : "custom"
                              }
                              disabled={!isNew}
                              onChange={(e) =>
                                patch({
                                  location:
                                    e.target.value === "zoom"
                                      ? "zoom"
                                      : "custom",
                                })
                              }
                            >
                              <option value="custom">
                                Custom meeting link
                              </option>
                              <option value="zoom" disabled={!zoom}>
                                Zoom{!zoom ? " — connect first" : ""}
                              </option>
                            </select>
                          </Field>
                          {event.location !== "zoom" && (
                            <Field label="Meeting link">
                              <input
                                type="url"
                                required
                                value={
                                  event.custom_fields.custom_field_1_value || ""
                                }
                                placeholder="https://…"
                                onChange={(e) =>
                                  patch({
                                    custom_fields: {
                                      custom_field_1_name:
                                        event.location === "hybrid"
                                          ? "Link"
                                          : "Meeting link",
                                      custom_field_1_value: e.target.value,
                                    },
                                  })
                                }
                              />
                            </Field>
                          )}
                        </>
                      )}
                      <div className={styles.divider} />
                      <div className={styles.filterHeading}>
                        <strong>Filters</strong>
                        <small>
                          Four attributes drive the public filter bar. Unset
                          values are hidden.
                        </small>
                      </div>
                      <div className={styles.filters}>
                        {filterCards.map(([key, list, label, note]) => {
                          const options = filters?.[list] || [];
                          const selected = options.filter((option) =>
                            key === "members"
                              ? event.filters.members
                                  ?.map(Number)
                                  .includes(Number(option.id))
                              : Number(event.filters[key]) ===
                                Number(option.id),
                          );
                          const disabled =
                            key === "location_id" &&
                            ["custom", "zoom"].includes(event.location);
                          // useFilterLimits names the kinds in title case.
                          const planAllows = filterCategories.includes(
                            list.charAt(0).toUpperCase() + list.slice(1),
                          );
                          const canCreate =
                            planAllows && !isLimitReached && !disabled;
                          return (
                            <div className={styles.filterCard} key={key}>
                              <div>
                                <strong>{label}</strong>
                                <small>{note}</small>
                              </div>
                              <span className={styles.filterValue}>
                                {selected.map((o) => o.name).join(", ") ||
                                  "Not set"}
                              </span>
                              <div className={styles.chips}>
                                {options.map((option) => {
                                  const checked = selected.includes(option);
                                  return (
                                    <button
                                      type="button"
                                      key={option.id}
                                      disabled={disabled}
                                      aria-pressed={checked}
                                      className={`${styles.chip} ${
                                        checked ? styles.selected : ""
                                      }`}
                                      onClick={() =>
                                        patch({
                                          filters: {
                                            [key]:
                                              key === "members"
                                                ? checked
                                                  ? (
                                                      event.filters.members ||
                                                      []
                                                    ).filter(
                                                      (id) =>
                                                        Number(id) !==
                                                        Number(option.id),
                                                    )
                                                  : [
                                                      ...(event.filters
                                                        .members || []),
                                                      Number(option.id),
                                                    ]
                                                : checked
                                                ? null
                                                : Number(option.id),
                                          },
                                        })
                                      }
                                    >
                                      {option.name}
                                    </button>
                                  );
                                })}
                                {canCreate && (
                                  <button
                                    type="button"
                                    className={`${styles.chip} ${styles.chipAdd}`}
                                    onClick={() => setCreatingFilter(list)}
                                  >
                                    ＋ New
                                  </button>
                                )}
                              </div>
                              {!options.length && (
                                <small>
                                  No {label.toLowerCase()} filters yet.{" "}
                                  <Link to="/filters">Manage filters</Link>
                                </small>
                              )}
                              {!canCreate && planAllows && isLimitReached && (
                                <small>
                                  Your plan's filter allowance is used up.{" "}
                                  <Link to="/filters">Manage filters</Link>
                                </small>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Section>
                    <Section step="3" title="Schedule">
                      <div className={styles.schedule}>
                        <div className={styles.field}>
                          <span>Start date</span>
                          <NewDatePickerControl
                            mode="single"
                            variant="field"
                            fullWidth
                            ariaLabel="Start date"
                            value={(meeting.startTime || "").slice(0, 10)}
                            minDate={isNew ? new Date() : undefined}
                            onChange={(date) =>
                              updateStart("date", date.format("YYYY-MM-DD"))
                            }
                          />
                        </div>
                        <div className={styles.field}>
                          <span>Start time</span>
                          <EventTimeControl
                            value={(meeting.startTime || "").slice(11, 16)}
                            use24Hours={uses24HourClock(settings)}
                            onChange={(time) => updateStart("time", time)}
                          />
                        </div>
                        <Field label="Duration (minutes)">
                          <input
                            type="number"
                            required
                            min="1"
                            step="1"
                            value={meeting.duration ?? ""}
                            onChange={(e) =>
                              patchMeeting({ duration: e.target.value })
                            }
                          />
                        </Field>
                      </div>
                      <Field label="Time zone">
                        <select
                          value={meeting.timezone}
                          onChange={(e) =>
                            patchMeeting({ timezone: e.target.value })
                          }
                        >
                          {moment.tz.names().map((zone) => (
                            <option key={zone} value={zone}>
                              {zone}
                            </option>
                          ))}
                        </select>
                      </Field>
                      {!occurrence && (
                        <>
                          <span className={styles.fieldTitle}>Recurrence</span>
                          <div className={styles.recurrence}>
                            {[
                              ["one", "One-time", "Single occurrence"],
                              ["weekly", "Weekly", "Repeats every week"],
                              ["custom", "Custom", "Daily, weekly or monthly"],
                            ].map(([value, label, note]) => (
                              <Choice
                                key={value}
                                selected={
                                  value === "one"
                                    ? !meeting.recurrence
                                    : value === "weekly"
                                    ? meeting.recurrence?.type === 2
                                    : Boolean(meeting.recurrence) &&
                                      meeting.recurrence.type !== 2
                                }
                                label={label}
                                note={note}
                                disabled={value !== "one" && !recurringAllowed}
                                onClick={() =>
                                  patchMeeting({
                                    recurrence:
                                      value === "one"
                                        ? null
                                        : {
                                            type: value === "weekly" ? 2 : 1,
                                            repeat_interval: 1,
                                            end_times: 1,
                                            ...(value === "weekly"
                                              ? {
                                                  weekly_days: [
                                                    moment(
                                                      meeting.startTime,
                                                    ).day() + 1,
                                                  ],
                                                }
                                              : {}),
                                          },
                                  })
                                }
                              />
                            ))}
                          </div>
                          {!recurringAllowed && (
                            <small>
                              Recurring events require a plan with the Recurring
                              feature.
                            </small>
                          )}
                          {meeting.recurrence && (
                            <div className={styles.recurringControls}>
                              <NewRecurringControl
                                recurrence={meeting.recurrence}
                                onChange={(recurrence) =>
                                  patchMeeting({ recurrence })
                                }
                              />
                              <NewEndDateControl
                                recurrence={meeting.recurrence}
                                meetingType={
                                  event.location === "zoom" ? "zoom" : "offline"
                                }
                                onChange={(recurrence) =>
                                  patchMeeting({ recurrence })
                                }
                              />
                            </div>
                          )}
                        </>
                      )}
                    </Section>
                    <Section step="4" title="Tickets">
                      {!activeTickets.length && (
                        <Field
                          label="Capacity"
                          hint={
                            freePlan
                              ? `Free plan: up to ${
                                  settings.free_registrants_limit || 15
                                } registrations.`
                              : "Total registrations available for this event."
                          }
                        >
                          <input
                            type="number"
                            min="1"
                            max={
                              freePlan
                                ? settings.free_registrants_limit || 15
                                : undefined
                            }
                            required
                            value={
                              event.product.quantity ??
                              event.product.current_quantity ??
                              5
                            }
                            onChange={(e) =>
                              patch({
                                product: { quantity: Number(e.target.value) },
                              })
                            }
                          />
                        </Field>
                      )}
                      {!isNew && !activeTickets.length && !freePlan && (
                        <Field
                          label="Registration price"
                          hint="Price for the existing single registration type."
                        >
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={event.product.price ?? 0}
                            onChange={(e) =>
                              patch({
                                product: { price: Number(e.target.value) },
                              })
                            }
                          />
                        </Field>
                      )}
                      {activeTickets.map((ticket) => (
                        <div className={styles.ticketRow} key={ticket.id}>
                          <div>
                            <strong>{ticket.title}</strong>
                            <small>
                              Capacity {ticket.quantity}
                              {ticket.start_datetime || ticket.end_datetime
                                ? " · Scheduled sales"
                                : " · Open sales"}
                            </small>
                          </div>
                          <strong>
                            {ticket.type === "free"
                              ? "Free"
                              : ticket.type === "donation"
                              ? "Donation"
                              : `${
                                  settings.settings?.currency || "USD"
                                } ${Number(ticket.price || 0).toFixed(2)}`}
                          </strong>
                          <PageActionButton
                            text={editingTicket === ticket.id ? "Done" : "Edit"}
                            type="secondary"
                            size="xs"
                            onAction={() =>
                              setEditingTicket(
                                editingTicket === ticket.id ? null : ticket.id,
                              )
                            }
                          />
                        </div>
                      ))}
                      {activeTicket && (
                        <div className={styles.ticketEditor}>
                          <Field label="Ticket name">
                            <input
                              required
                              value={activeTicket.title}
                              onChange={(e) =>
                                patchTicket(activeTicket.id, {
                                  title: e.target.value,
                                })
                              }
                            />
                          </Field>
                          <div className={styles.schedule}>
                            <Field label="Type">
                              <select
                                value={activeTicket.type}
                                onChange={(e) =>
                                  patchTicket(activeTicket.id, {
                                    type: e.target.value,
                                    price:
                                      e.target.value === "free"
                                        ? 0
                                        : Number(defaults.default_price) || 1,
                                  })
                                }
                              >
                                <option value="free">Free</option>
                                <option
                                  value="paid"
                                  disabled={freePlan || !stripe}
                                >
                                  Paid
                                </option>
                                <option
                                  value="donation"
                                  disabled={freePlan || !stripe}
                                >
                                  Donation
                                </option>
                              </select>
                            </Field>
                            <Field label="Capacity">
                              <input
                                type="number"
                                min="1"
                                step="1"
                                required
                                value={activeTicket.quantity}
                                onChange={(e) =>
                                  patchTicket(activeTicket.id, {
                                    quantity: Number(e.target.value),
                                  })
                                }
                              />
                            </Field>
                            {activeTicket.type === "paid" && (
                              <Field label="Price">
                                <input
                                  type="number"
                                  min="0.01"
                                  step="0.01"
                                  required
                                  value={activeTicket.price ?? ""}
                                  onChange={(e) =>
                                    patchTicket(activeTicket.id, {
                                      price: e.target.value,
                                    })
                                  }
                                />
                              </Field>
                            )}
                          </div>
                          <div className={styles.schedule}>
                            {["start_datetime", "end_datetime"].map((key) => {
                              const label =
                                key === "start_datetime"
                                  ? "Sales start"
                                  : "Sales end";
                              const value = activeTicket[key];
                              const update = (date, time) =>
                                patchTicket(activeTicket.id, {
                                  [key]: `${date}T${time}:00`,
                                });
                              return (
                                <div key={key} className={styles.field}>
                                  <span>{label} (optional)</span>
                                  <NewDatePickerControl
                                    mode="single"
                                    variant="field"
                                    fullWidth
                                    ariaLabel={`${label} date`}
                                    label="Select date"
                                    value={value?.slice(0, 10)}
                                    onChange={(date) =>
                                      update(
                                        date.format("YYYY-MM-DD"),
                                        value?.slice(11, 16) || "00:00",
                                      )
                                    }
                                  />
                                  {value && (
                                    <>
                                      <EventTimeControl
                                        label={`${label} time`}
                                        value={value.slice(11, 16)}
                                        use24Hours={uses24HourClock(settings)}
                                        onChange={(time) =>
                                          update(value.slice(0, 10), time)
                                        }
                                      />
                                      <PageActionButton
                                        text="Clear"
                                        type="ghost"
                                        size="xs"
                                        onAction={() =>
                                          patchTicket(activeTicket.id, {
                                            [key]: null,
                                          })
                                        }
                                      />
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          <PageActionButton
                            text="Remove ticket"
                            type="danger-ghost"
                            onAction={() => {
                              patch({
                                tickets: event.tickets.flatMap((t) =>
                                  t.id !== activeTicket.id
                                    ? [t]
                                    : t.persisted
                                    ? [{ ...t, action: "remove" }]
                                    : [],
                                ),
                              });
                              setEditingTicket(null);
                            }}
                          />
                        </div>
                      )}
                      {(!freePlan || !activeTickets.length) && (
                        <button
                          className={styles.addTicket}
                          type="button"
                          onClick={addTicket}
                        >
                          ＋ Add ticket type
                        </button>
                      )}
                    </Section>
                  </div>
                  <aside className={styles.aside}>
                    <section className={`${styles.card} ${styles.visibility}`}>
                      <span className={styles.asideEyebrow}>
                        Step 5 · Visibility
                      </span>
                      <Toggle
                        label="Public page"
                        note="Listed on the events widget"
                        checked={!meeting.is_hidden}
                        onChange={(value) =>
                          patchMeeting({ is_hidden: !value })
                        }
                      />
                      <div className={styles.divider} />
                      <Toggle
                        label="Confirmation emails"
                        note="Send event emails to attendees"
                        checked={!event.notifications.disable_emails}
                        onChange={(value) =>
                          patch({ notifications: { disable_emails: !value } })
                        }
                      />
                      <Toggle
                        label="Google Calendar"
                        note={
                          calendar
                            ? "Add this event to your calendar"
                            : "Connect Google Calendar to enable"
                        }
                        checked={Boolean(event.notifications.google_calendar)}
                        disabled={!calendar}
                        onChange={(value) =>
                          patch({ notifications: { google_calendar: value } })
                        }
                      />
                    </section>
                    <section className={styles.warning}>
                      <strong>Before you publish</strong>
                      <ul>
                        {!stripe && (
                          <li>
                            Stripe is not connected — paid tickets are
                            unavailable.
                          </li>
                        )}
                        {event.location === "zoom" && !zoom && (
                          <li>
                            Connect Zoom before publishing an online meeting.
                          </li>
                        )}
                        {!activeTickets.length && (
                          <li>
                            This event uses a single registration capacity.
                          </li>
                        )}
                        <li>Check the time zone and ticket availability.</li>
                      </ul>
                      {!stripe && (
                        <PageActionButton
                          text="Connect Stripe"
                          type="secondary"
                          size="xs"
                          onAction={() => navigate("/integrations")}
                        />
                      )}
                    </section>
                    {isNew && (
                      <p className={styles.draftNote}>
                        {recoverDraft
                          ? "Your saved draft has been restored. "
                          : ""}
                        Saved drafts stay in this browser tab and are restored
                        when you reopen New event.
                      </p>
                    )}
                  </aside>
                </div>
              )}
            </fieldset>
          </form>
        )}
        {creatingFilter && (
          <CreateFilterModal
            type={creatingFilter}
            onClose={() => setCreatingFilter(null)}
            onCreated={(created) => {
              const key = filterCards.find(
                ([, list]) => list === creatingFilter,
              )?.[0];
              if (key && created?.id) selectFilterValue(key, created.id);
            }}
          />
        )}
      </PageContent>
    </PageWrapper>
  );
}
