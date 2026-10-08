<script setup>
import { computed } from "vue";

import WidgetModal from "@/components/WidgetModal.vue";
import { useI18nStore } from "@/stores/i18n";
import { useShareStore } from "@/stores/share";
import { SHARE_TARGETS, shareLink } from "@/utilities/share";

const i18n = useI18nStore();
const share = useShareStore();

const LABELS = {
  facebook: "Facebook",
  x: "X",
  linkedin: "LinkedIn",
  whatsapp: "WhatsApp",
  email: "Email",
};

const GLYPHS = {
  facebook: "f",
  x: "X",
  linkedin: "in",
  whatsapp: "W",
  email: "@",
};

const targets = computed(() =>
  SHARE_TARGETS.map((target) => ({
    target,
    label: LABELS[target],
    glyph: GLYPHS[target],
    href: shareLink(target, {
      url: share.url,
      title: share.event?.title || "",
      image: share.event?.image || "",
    }),
  })).filter((item) => item.href),
);
</script>

<template>
  <WidgetModal
    v-if="share.isOpen"
    :title="i18n.t('mainWidget.shareEventPanelTitle', { fallback: 'Share this event' })"
    @close="share.close()"
  >
    <div class="svv-share">
      <p v-if="share.loading" class="svv-form__text">
        {{ i18n.t("globalWidgetsTranslations.loadingLabel", { fallback: "Loading" }) }}…
      </p>

      <template v-else-if="share.url">
        <div class="svv-share__link">
          <input class="svv-field__input" type="text" readonly :value="share.url" />
          <button type="button" class="svv-submit" @click="share.copy()">
            {{
              share.copied
                ? i18n.t("mainWidget.copiedLabel", { fallback: "Copied" })
                : i18n.t("mainWidget.copyLinkLabel", { fallback: "Copy link" })
            }}
          </button>
        </div>

        <ul class="svv-share__targets">
          <li v-for="item in targets" :key="item.target">
            <a class="svv-share__target" :href="item.href" target="_blank" rel="noopener">
              <span class="svv-share__icon" aria-hidden="true">{{ item.glyph }}</span>
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </template>

      <p v-else class="svv-form__text">
        {{
          i18n.t("onProductWidget.genericErrorMessage", {
            fallback: "Something went wrong. Please try again.",
          })
        }}
      </p>
    </div>
  </WidgetModal>
</template>
