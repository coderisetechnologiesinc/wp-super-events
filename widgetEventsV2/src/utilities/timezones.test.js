import { describe, expect, it } from "vitest";

import { CURATED_ZONES, curatedZones, fallbackLabel } from "./timezones";

describe("curated zones", () => {
  it("carries the whole list the admin app offers", () => {
    expect(CURATED_ZONES).toHaveLength(135);
  });

  it("keeps every label attached to its zone", () => {
    const labels = Object.fromEntries(curatedZones().map((item) => [item.zone, item.label]));

    expect(labels["America/New_York"]).toBe("Eastern Time (US and Canada)");
    expect(labels["Asia/Tokyo"]).toBe("Osaka, Sapporo, Tokyo");
    expect(labels["Pacific/Auckland"]).toBe("Auckland, Wellington");
  });

  it("merges zones that renaming collapses into one", () => {
    const renamed = (zone) => (zone === "Europe/Kiev" ? "Europe/Kyiv" : zone);
    const ids = curatedZones(renamed).map((item) => item.zone);

    expect(ids).toContain("Europe/Kyiv");
    expect(ids).not.toContain("Europe/Kiev");
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps the aliases the runtime does not list but still formats", () => {
    const ids = curatedZones().map((item) => item.zone);

    for (const alias of ["UTC", "CET", "Canada/Atlantic", "Etc/Greenwich"]) {
      expect(ids).toContain(alias);
      expect(() => new Intl.DateTimeFormat("en", { timeZone: alias })).not.toThrow();
    }
  });
});

describe("fallbackLabel", () => {
  it("reads a zone id as a place name", () => {
    expect(fallbackLabel("Antarctica/Troll")).toBe("Troll");
    expect(fallbackLabel("America/Argentina/Buenos_Aires")).toBe("Argentina · Buenos Aires");
    expect(fallbackLabel("UTC")).toBe("UTC");
  });
});
