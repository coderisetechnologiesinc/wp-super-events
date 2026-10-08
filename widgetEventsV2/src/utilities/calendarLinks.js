const pad = (value) => String(value).padStart(2, "0");

export function toStamp(date) {
  if (!date) return "";

  return (
    `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}` +
    `T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`
  );
}

export const endOf = (event) =>
  event?.endsAt || (event?.startsAt ? new Date(event.startsAt.getTime() + (event.duration || 60) * 60000) : null);

const plain = (text) =>
  String(text || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export function googleCalendarUrl(event, { url = "" } = {}) {
  if (!event?.startsAt) return "";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title || "",
    dates: `${toStamp(event.startsAt)}/${toStamp(endOf(event))}`,
  });

  const details = [plain(event.description), url].filter(Boolean).join("\n\n");

  if (details) params.set("details", details);

  return `https://calendar.google.com/calendar/render?${params}`;
}

export function outlookCalendarUrl(event, { url = "" } = {}) {
  if (!event?.startsAt) return "";

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.title || "",
    startdt: event.startsAt.toISOString(),
    enddt: endOf(event).toISOString(),
  });

  const body = [plain(event.description), url].filter(Boolean).join("\n\n");

  if (body) params.set("body", body);

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params}`;
}

const escapeIcs = (text) =>
  plain(text).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");

export function icsFile(event, { url = "" } = {}) {
  if (!event?.startsAt) return "";

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Servv//Events Widget//EN",
    "BEGIN:VEVENT",
    `UID:servv-${event.id}@servv.io`,
    `DTSTAMP:${toStamp(new Date())}`,
    `DTSTART:${toStamp(event.startsAt)}`,
    `DTEND:${toStamp(endOf(event))}`,
    `SUMMARY:${escapeIcs(event.title)}`,
  ];

  const description = [escapeIcs(event.description), url].filter(Boolean).join("\\n");

  if (description) lines.push(`DESCRIPTION:${description}`);
  if (url) lines.push(`URL:${url}`);

  lines.push("END:VEVENT", "END:VCALENDAR");

  return lines.join("\r\n");
}
