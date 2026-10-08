const assert = require("node:assert/strict");
const { test } = require("node:test");
const path = require("node:path");
const babel = require("@babel/core");
const file = path.resolve(
  __dirname,
  "../src/Components/CreateEvent/eventFormData.js",
);
const loader = require.extensions[".js"];
require.extensions[".js"] = (mod, filename) => {
  if (filename !== file) return loader(mod, filename);
  mod._compile(
    babel.transformFileSync(filename, {
      babelrc: false,
      configFile: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    }).code,
    filename,
  );
};
const {
  initialEvent,
  loadEvent,
  eventPayload,
  ticketPayload,
  uses24HourClock,
  displayEventTime,
  parseEventTime,
} = require(file);

test("time preferences handle 12/24-hour clocks, midnight and noon", () => {
  for (const value of [true, 1, "1", "true"])
    assert.equal(
      uses24HourClock({ settings: { time_format_24_hours: value } }),
      true,
    );
  for (const value of [false, 0, "0", "false", undefined])
    assert.equal(
      uses24HourClock({ settings: { time_format_24_hours: value } }),
      false,
    );
  assert.deepEqual(displayEventTime("18:30", false), {
    time: "06:30",
    period: "PM",
  });
  assert.deepEqual(displayEventTime("00:30", false), {
    time: "12:30",
    period: "AM",
  });
  assert.equal(displayEventTime("18:30", true).time, "18:30");
  assert.equal(parseEventTime("06:30", "PM", false), "18:30");
  assert.equal(parseEventTime("12:00", "AM", false), "00:00");
  assert.equal(parseEventTime("12:00", "PM", false), "12:00");
  assert.equal(parseEventTime("00:30", "AM", true), "00:30");
  assert.equal(parseEventTime("23:59", "PM", true), "23:59");
  for (const value of ["00:30", "13:00", "6:75", "6:3", "abc", ""])
    assert.equal(parseEventTime(value, "AM", false), null);
  assert.equal(parseEventTime("24:00", "AM", true), null);
});

test("defaults accept object and JSON settings without overriding edit data", () => {
  const defaults = {
    default_timezone: "Europe/Kyiv",
    default_start_time: "18:30",
    default_duration: 2,
    default_quantity: 12,
  };
  for (const raw of [defaults, JSON.stringify(defaults)]) {
    const event = initialEvent({ settings: { admin_dashboard: raw } });
    assert.equal(event.meeting.timezone, "Europe/Kyiv");
    assert.equal(event.meeting.startTime.slice(11, 16), "18:30");
    assert.equal(event.meeting.duration, 120);
    assert.equal(event.product.quantity, 12);
  }
  assert.doesNotThrow(() =>
    initialEvent({ settings: { admin_dashboard: "invalid" } }),
  );
  assert.doesNotThrow(() =>
    initialEvent({ settings: { admin_dashboard: "null" } }),
  );
});

test("editing loads UTC timestamps into the meeting time zone and keeps ticket identity", () => {
  const event = loadEvent(
    {
      meeting: {
        start_time: "2026-10-18T15:00:00Z",
        timezone: "Europe/Kyiv",
        recurrence: { type: 2, weekly_days: "1,3" },
      },
      types: { location_id: 9 },
      custom_fields: { custom_field_1_value: "https://meet.example.test" },
      tickets: [
        {
          id: 7,
          name: "Early bird",
          price: "0",
          start_datetime: "2026-10-10T10:00:00Z",
        },
      ],
      product: { current_quantity: 8 },
    },
    "offline",
  );
  assert.equal(event.location, "hybrid");
  assert.equal(event.meeting.startTime, "2026-10-18T18:00:00");
  assert.deepEqual(event.meeting.recurrence.weekly_days, [1, 3]);
  assert.equal(event.tickets[0].start_datetime, "2026-10-10T13:00:00");
  assert.equal(event.tickets[0].type, "free");
  assert.equal(event.tickets[0].persisted, true);
  assert.equal(event.product.quantity, 8);
});

test("ticket sales convert local time to UTC across daylight saving boundaries", () => {
  const ticket = {
    title: "Standard",
    quantity: "10",
    type: "paid",
    price: "35",
    start_datetime: "2026-10-24T18:00:00",
    end_datetime: "2026-10-26T18:00:00",
  };
  const payload = ticketPayload(ticket, "Europe/Kyiv");
  assert.equal(payload.start_datetime, "2026-10-24T15:00:00Z");
  assert.equal(payload.end_datetime, "2026-10-26T16:00:00Z");
  assert.equal(payload.price, 35);
  assert.equal(payload.quantity, 10);
  assert.equal(
    ticketPayload({ ...ticket, type: "free" }, "Europe/Kyiv").price,
    0,
  );
  assert.equal(
    ticketPayload({ ...ticket, type: "donation" }, "Europe/Kyiv").price,
    null,
  );
});

test("create and edit payloads use the backend's respective meeting contracts", () => {
  const event = initialEvent({});
  event.meeting.topic = " Workshop ";
  event.meeting.recurrence = {
    type: 2,
    weekly_days: [1, 3],
    repeat_interval: 1,
  };
  event.meeting.is_hidden = true;
  event.location = "zoom";
  event.filters.location_id = 42;
  event.image_content = "https://example.test/existing-cover.jpg";
  const create = eventPayload(event, true, false);
  const edit = eventPayload(event, false, false);
  assert.equal(create.meeting.eventType, 8);
  assert.equal(edit.meeting.type, 8);
  assert.equal(create.meeting.startTime, event.meeting.startTime);
  assert.equal(edit.meeting.start_time, event.meeting.startTime);
  assert.deepEqual(create.meeting.recurrence.weekly_days, [1, 3]);
  assert.equal(edit.meeting.recurrence.weekly_days, "1,3");
  assert.equal(create.types.location_id, null);
  assert.equal(create.meeting.is_hidden, true);
  assert.equal(create.meeting.topic, "Workshop");
  assert.equal("image_content" in edit, false);
  assert.equal("tickets" in edit, false);
});

test("free plan publishes registration capacity and excludes removed tickets", () => {
  const event = initialEvent({});
  event.tickets = [
    { title: "Standard", quantity: 6, type: "free" },
    { quantity: 99, action: "remove" },
  ];
  const free = eventPayload(event, true, true);
  assert.deepEqual(free.product, { quantity: 6 });
  assert.equal("tickets" in free, false);
  assert.equal(eventPayload(event, true, false).tickets.length, 1);
  event.image_content = "data:image/png;base64,Zm9v";
  assert.equal(eventPayload(event, true, false).image_content, "Zm9v");
  event.meeting.recurrence = null;
  assert.equal(eventPayload(event, false, false).meeting.recurrence, null);
});
