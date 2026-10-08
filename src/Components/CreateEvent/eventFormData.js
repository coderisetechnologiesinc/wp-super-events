import moment from "moment-timezone";

export const uses24HourClock = (settings) =>
  [true, 1, "1", "true"].includes(settings?.settings?.time_format_24_hours);
export const displayEventTime = (value, use24Hours) => {
  const parsed = moment(value || "00:00", "HH:mm", true);
  return {
    time: parsed.isValid() ? parsed.format(use24Hours ? "HH:mm" : "hh:mm") : "",
    period: parsed.isValid() ? parsed.format("A") : "AM",
  };
};
export const parseEventTime = (value, period, use24Hours) => {
  if (!/^\d{1,2}:\d{2}$/.test(value.trim())) return null;
  const [hours, minutes] = value.trim().split(":").map(Number);
  if (
    minutes > 59 ||
    hours > (use24Hours ? 23 : 12) ||
    (!use24Hours && hours < 1)
  )
    return null;
  const parsed = moment(
    use24Hours ? value.trim() : `${value.trim()} ${period}`,
    use24Hours ? ["HH:mm", "H:mm"] : ["hh:mm A", "h:mm A"],
    true,
  );
  return parsed.isValid() ? parsed.format("HH:mm") : null;
};

export const readDefaults = (settings) => {
  const raw = settings?.settings?.admin_dashboard;
  try {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
};

export const initialEvent = (settings) => {
  const defaults = readDefaults(settings);
  const timezone = moment.tz.zone(defaults.default_timezone)
    ? defaults.default_timezone
    : moment.tz.guess();
  const start = moment().tz(timezone).add(1, "day").second(0);
  const time = moment(defaults.default_start_time, ["h:mm a", "HH:mm"], true);
  if (time.isValid()) start.hour(time.hour()).minute(time.minute());
  return {
    location: ["offline", "zoom", "custom", "hybrid"].includes(
      defaults.default_event_type,
    )
      ? defaults.default_event_type
      : "offline",
    meeting: {
      topic: "",
      agenda: "",
      startTime: start.format("YYYY-MM-DDTHH:mm:ss"),
      timezone,
      duration: Number(defaults.default_duration || 1) * 60,
      recurrence: null,
      is_hidden: false,
    },
    tickets: [],
    product: { price: 0, quantity: Number(defaults.default_quantity) || 5 },
    filters: {},
    custom_fields: {},
    notifications: { google_calendar: false, disable_emails: false },
  };
};

export const loadEvent = (data, location) => {
  const meeting = data.meeting || {};
  const timezone = meeting.timezone || "UTC";
  const start = meeting.start_time || meeting.occurrences?.[0]?.start_time;
  const customFields = data.custom_fields || {};
  return {
    ...data,
    location:
      location === "zoom"
        ? "zoom"
        : customFields.custom_field_1_value
        ? data.types?.location_id
          ? "hybrid"
          : "custom"
        : "offline",
    meeting: {
      ...meeting,
      startTime: start
        ? moment.tz(start, timezone).format("YYYY-MM-DDTHH:mm:ss")
        : "",
      recurrence: meeting.recurrence?.type
        ? {
            ...meeting.recurrence,
            weekly_days:
              typeof meeting.recurrence.weekly_days === "string"
                ? meeting.recurrence.weekly_days.split(",").map(Number)
                : meeting.recurrence.weekly_days,
          }
        : null,
    },
    tickets: (data.tickets || []).map((ticket) => ({
      ...ticket,
      persisted: true,
      title: ticket.name,
      type: ticket.is_donation
        ? "donation"
        : Number(ticket.price) === 0
        ? "free"
        : "paid",
      ...Object.fromEntries(
        ["start_datetime", "end_datetime"].map((key) => [
          key,
          ticket[key]
            ? moment.utc(ticket[key]).tz(timezone).format("YYYY-MM-DDTHH:mm:ss")
            : null,
        ]),
      ),
    })),
    product: {
      ...data.product,
      quantity: data.product?.current_quantity ?? data.product?.quantity ?? 5,
    },
    filters: data.types || {},
    custom_fields: customFields,
    notifications: data.notifications || {},
  };
};

export const ticketPayload = (ticket, timezone) => ({
  name: ticket.title,
  quantity: Number(ticket.quantity),
  price:
    ticket.type === "free"
      ? 0
      : ticket.type === "donation"
      ? null
      : Number(ticket.price),
  is_donation: ticket.type === "donation",
  ...Object.fromEntries(
    ["start_datetime", "end_datetime"].map((key) => [
      key,
      ticket[key]
        ? moment
            .tz(ticket[key], timezone)
            .utc()
            .format("YYYY-MM-DDTHH:mm:ss[Z]")
        : null,
    ]),
  ),
});

export const eventPayload = (event, isNew, freePlan) => {
  const { meeting, filters } = event;
  const offline = event.location !== "zoom";
  const type = meeting.recurrence?.type ? (offline ? 2 : 8) : offline ? 1 : 2;
  const payload = {
    meeting: {
      topic: meeting.topic.trim(),
      agenda: meeting.agenda || "",
      timezone: meeting.timezone,
      duration: Number(meeting.duration),
      recurrence: meeting.recurrence
        ? {
            ...meeting.recurrence,
            weekly_days: isNew
              ? meeting.recurrence.weekly_days
              : Array.isArray(meeting.recurrence.weekly_days)
              ? meeting.recurrence.weekly_days.join(",")
              : meeting.recurrence.weekly_days,
          }
        : null,
      is_hidden: Boolean(meeting.is_hidden),
      [isNew ? "startTime" : "start_time"]: meeting.startTime,
      [isNew ? "eventType" : "type"]: type,
    },
    types: {
      ...filters,
      location_id: ["zoom", "custom"].includes(event.location)
        ? null
        : filters.location_id || null,
    },
    custom_fields: event.custom_fields,
    notifications: event.notifications,
    product: { ...event.product },
  };
  if (event.image_content?.startsWith("data:image/"))
    payload.image_content = event.image_content.split(",")[1];
  if (isNew && freePlan)
    payload.product = {
      quantity:
        event.tickets
          .filter((t) => t.action !== "remove")
          .reduce((sum, t) => sum + Number(t.quantity), 0) ||
        Number(event.product.quantity) ||
        1,
    };
  if (isNew && !freePlan)
    payload.tickets = event.tickets
      .filter((t) => t.action !== "remove")
      .map((t) => ticketPayload(t, meeting.timezone));
  if (!isNew && event.registrants)
    payload.registrants = event.registrants
      .filter((r) => r.status === "create")
      .map((r) => ({
        first_name: r.firstName,
        last_name: r.lastName,
        email: r.email,
      }));
  return payload;
};
