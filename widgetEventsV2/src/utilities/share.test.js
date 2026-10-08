import { describe, expect, it } from "vitest";

import { eventProductUrl, shareLink } from "./share";

const event = {
  url: "https://shop.test/products/yoga?variant=5001",
  title: "Morning Yoga",
  image: "https://cdn.test/yoga.jpg",
};

describe("shareLink", () => {
  it("builds a facebook link with the title and image", () => {
    const link = new URL(shareLink("facebook", event));

    expect(link.origin + link.pathname).toBe(
      "https://www.facebook.com/sharer/sharer.php",
    );
    expect(link.searchParams.get("u")).toBe(event.url);
    expect(link.searchParams.get("title")).toBe("Morning Yoga");
    expect(link.searchParams.get("picture")).toBe(event.image);
  });

  it("puts the title in the post text for x", () => {
    const link = new URL(shareLink("x", event));

    expect(link.searchParams.get("url")).toBe(event.url);
    expect(link.searchParams.get("text")).toBe("Morning Yoga");
  });

  it("keeps the linkedin mini flag", () => {
    const link = new URL(shareLink("linkedin", event));

    expect(link.searchParams.get("mini")).toBe("true");
    expect(link.searchParams.get("url")).toBe(event.url);
  });

  it("sends one message body to whatsapp", () => {
    const link = new URL(shareLink("whatsapp", event));

    expect(link.searchParams.get("text")).toBe(`Morning Yoga ${event.url}`);
  });

  it("builds a mailto link", () => {
    expect(shareLink("email", event)).toBe(
      `mailto:?subject=Morning+Yoga&body=${encodeURIComponent(event.url).replace(/%20/g, "+")}`,
    );
  });

  it("returns nothing without a url or for an unknown target", () => {
    expect(shareLink("facebook", { url: "" })).toBe("");
    expect(shareLink("myspace", event)).toBe("");
  });

  it("omits empty values instead of sending blanks", () => {
    const link = new URL(shareLink("facebook", { url: event.url }));

    expect(link.searchParams.has("title")).toBe(false);
    expect(link.searchParams.has("picture")).toBe(false);
  });
});

describe("eventProductUrl", () => {
  it("points at the variant of the parent product", () => {
    expect(
      eventProductUrl({
        origin: "https://shop.test",
        handle: "yoga",
        variantId: 5001,
      }),
    ).toBe("https://shop.test/products/yoga?variant=5001");
  });

  it("keeps the locale or domain prefix in the path", () => {
    expect(
      eventProductUrl({
        origin: "https://shop.test",
        handle: "yoga",
        variantId: 5001,
        prefix: "/fr/",
      }),
    ).toBe("https://shop.test/fr/products/yoga?variant=5001");
  });

  it("returns nothing when the handle is unknown", () => {
    expect(eventProductUrl({ origin: "https://shop.test", handle: "" })).toBe("");
  });
});
