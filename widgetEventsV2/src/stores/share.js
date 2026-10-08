import { computed, ref } from "vue";
import { defineStore } from "pinia";

import { useProductLinksStore } from "./productLinks";

export const useShareStore = defineStore("share", () => {
  const productLinks = useProductLinksStore();

  const event = ref(null);
  const url = ref("");
  const loading = ref(false);
  const copied = ref(false);

  let requestId = 0;

  const isOpen = computed(() => !!event.value);

  async function open(nextEvent) {
    if (!nextEvent) return;

    const request = ++requestId;

    event.value = nextEvent;
    copied.value = false;
    url.value = "";

    if (nextEvent.bookingLink) {
      url.value = nextEvent.bookingLink;
      return;
    }

    if (!nextEvent.parentProductId) return;

    loading.value = true;

    const resolved = await productLinks.urlFor(nextEvent);

    if (request !== requestId) return;

    loading.value = false;
    url.value = resolved;
  }

  async function copy() {
    if (!url.value) return false;

    const done = await navigator.clipboard
      ?.writeText(url.value)
      .then(() => true)
      .catch(() => false);

    copied.value = !!done;

    return copied.value;
  }

  function close() {
    event.value = null;
    url.value = "";
    loading.value = false;
    copied.value = false;
  }

  return { event, url, loading, copied, isOpen, open, copy, close };
});
