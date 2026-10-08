import { describe, expect, it } from "vitest";

import { enabledFilterKeys } from "@/utilities/blockSettings";
import {
  availabilityOf,
  normalizeEvent,
  normalizeShopSettings,
  toInstant,
} from "./normalize";

const apiEvent = {
  id: 91234,
  topic: "Live Yoga",
  description: "A live guided yoga class for busy teams and remote communities.",
  agenda: ["Breathwork", "Core flow"],
  type: "meeting",
  provider: "zoom",
  is_live_shopping: false,
  start_time: "2026-09-14T15:47:00Z",
  end_time: "2026-09-14T16:47:00Z",
  timezone: "America/Toronto",
  duration: 60,
  separator_label: "Today",
  category_id: 12,
  language_id: 7,
  location_id: 34,
  members_id: [5],
  product: {
    product_id: 921001,
    parent_product_id: 921000,
    price: 45,
    current_quantity: 3,
    image_src: "https://cdn.test/yoga.jpg",
  },
};

describe("normalizeEvent", () => {
  it("maps the api field names the widget reads", () => {
    const event = normalizeEvent(apiEvent);

    expect(event).toMatchObject({
      id: 91234,
      title: "Live Yoga",
      provider: "zoom",
      formatLabel: "Virtual",
      timezone: "America/Toronto",
      duration: 60,
      separatorLabel: "Today",
      productId: 921001,
      price: 45,
      isFree: false,
      image: "https://cdn.test/yoga.jpg",
      seatsRemaining: 3,
      availability: "few-left",
    });
  });

  it("treats a missing product as free with unknown seats", () => {
    const event = normalizeEvent({ ...apiEvent, product: undefined });

    expect(event.price).toBe(0);
    expect(event.isFree).toBe(true);
    expect(event.seatsRemaining).toBeNull();
    expect(event.availability).toBe("available");
  });

  it("reads a partner booking link only when the custom field names one", () => {
    expect(normalizeEvent(apiEvent).bookingLink).toBe("");
    expect(
      normalizeEvent({
        ...apiEvent,
        custom_field_1_name: "partner",
        custom_field_1_value: "https://partner.test/book",
      }).bookingLink,
    ).toBe("https://partner.test/book");
  });

  it("returns null for a missing event", () => {
    expect(normalizeEvent(null)).toBeNull();
  });
});

describe("toInstant", () => {
  it("parses an utc timestamp", () => {
    expect(toInstant("2026-09-14T15:47:00Z").toISOString()).toBe("2026-09-14T15:47:00.000Z");
  });

  it("treats a timestamp without a designator as utc", () => {
    expect(toInstant("2026-09-14T15:47:00").toISOString()).toBe("2026-09-14T15:47:00.000Z");
  });

  it("keeps an explicit offset", () => {
    expect(toInstant("2026-09-14T15:47:00+02:00").toISOString()).toBe("2026-09-14T13:47:00.000Z");
  });

  it("returns null for junk", () => {
    expect(toInstant("")).toBeNull();
    expect(toInstant("not a date")).toBeNull();
  });
});

describe("availabilityOf", () => {
  it.each([
    [{ seatsRemaining: 40 }, "available"],
    [{ seatsRemaining: 5 }, "few-left"],
    [{ seatsRemaining: 0 }, "sold-out"],
    [{ seatsRemaining: null }, "available"],
    [{ seatsRemaining: 0, isRecording: true }, "recording"],
  ])("%o is %s", (input, expected) => {
    expect(availabilityOf(input)).toBe(expected);
  });
});

describe("normalizeShopSettings", () => {
  const style = {
    available_filters: ["languages", "categories", "members", "teams", "locations"],
    ew_events_list_view: "grid",
    widgets_default_language: "en",
  };

  it("parses widget_style_settings delivered as a json string", () => {
    const settings = normalizeShopSettings({
      widget_view_mode: "plain",
      widget_style_settings: JSON.stringify(style),
    });

    expect(settings.style.available_filters).toHaveLength(5);
    expect(settings.style.ew_events_list_view).toBe("grid");
    expect(settings.presentation).toBe("plain");
  });

  it("parses a double encoded string", () => {
    const settings = normalizeShopSettings({
      widget_style_settings: JSON.stringify(JSON.stringify(style)),
    });

    expect(settings.style.available_filters).toHaveLength(5);
  });

  it("accepts an already parsed object", () => {
    expect(normalizeShopSettings({ widget_style_settings: style }).style).toEqual(style);
  });

  it("never throws on junk, missing or wrongly typed settings", () => {
    expect(normalizeShopSettings(null).style).toEqual({});
    expect(normalizeShopSettings({}).style).toEqual({});
    expect(normalizeShopSettings({ widget_style_settings: "" }).style).toEqual({});
    expect(normalizeShopSettings({ widget_style_settings: "{oops" }).style).toEqual({});
    expect(normalizeShopSettings({ widget_style_settings: "[1,2]" }).style).toEqual({});
  });

  it("maps the parsed available_filters onto schema keys", () => {
    const settings = normalizeShopSettings({
      widget_style_settings: JSON.stringify(style),
    });

    expect(enabledFilterKeys(settings.style)).toEqual([
      "category",
      "team",
      "member",
      "location",
      "language",
    ]);
  });
});
