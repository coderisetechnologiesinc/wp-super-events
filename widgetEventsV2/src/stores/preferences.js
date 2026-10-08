import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { curatedZones, fallbackLabel } from "@/utilities/timezones";

export const detectTimezone = () => {
  try {
    return modernZoneName(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
  } catch {
    return "";
  }
};

const MODERN_ZONE_NAMES = {
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Godthab": "America/Nuuk",
  "Asia/Calcutta": "Asia/Kolkata",
  "Asia/Katmandu": "Asia/Kathmandu",
  "Asia/Rangoon": "Asia/Yangon",
  "Asia/Saigon": "Asia/Ho_Chi_Minh",
  "Asia/Ulan_Bator": "Asia/Ulaanbaatar",
  "Atlantic/Faeroe": "Atlantic/Faroe",
  "Europe/Kiev": "Europe/Kyiv",
  "Europe/Uzhgorod": "Europe/Kyiv",
  "Europe/Zaporozhye": "Europe/Kyiv",
  "Pacific/Ponape": "Pacific/Pohnpei",
  "Pacific/Truk": "Pacific/Chuuk",
};

export const modernZoneName = (zone) => MODERN_ZONE_NAMES[zone] || zone;

export const supportedTimezones = () => curatedZones(modernZoneName);

export function zonesWithDetected(detectedZone) {
  const list = supportedTimezones();

  if (!detectedZone || list.some((item) => item.zone === detectedZone)) return list;

  return [{ zone: detectedZone, label: fallbackLabel(detectedZone) }, ...list];
}

export const usePreferencesStore = defineStore("preferences", () => {
  const timezone = ref("");

  const detected = computed(detectTimezone);
  const zones = computed(() => zonesWithDetected(detected.value));

  function setTimezone(value) {
    timezone.value = value ? modernZoneName(value) : "";
  }

  return { timezone, detected, zones, setTimezone };
});
