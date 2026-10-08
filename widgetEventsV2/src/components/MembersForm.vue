<script setup>
import { computed, reactive, ref, watch } from "vue";

import CaptchaBox from "@/components/ui/CaptchaBox.vue";
import ErrorMessage from "@/components/ui/ErrorMessage.vue";
import TextInput from "@/components/ui/TextInput.vue";
import { useI18nStore } from "@/stores/i18n";
import { useShopStore } from "@/stores/shop";
import { formatPrice } from "@/utilities/format";
import { isValidEmail } from "@/utilities/validation";

const props = defineProps({
  rows: { type: Number, required: true },
  tickets: { type: Array, default: () => [] },
  freeFlow: { type: Boolean, default: false },
  captchaRequired: { type: Boolean, default: false },
});

const emit = defineEmits(["total"]);
const i18n = useI18nStore();
const shop = useShopStore();

const blankRegistrant = () => ({ email: "", first_name: "", last_name: "", ticket_id: "", donation_amount: "" });

const registrants = reactive([]);
const captchaToken = ref("");
const showErrors = ref(false);

watch(
  () => props.rows,
  (rows) => {
    while (registrants.length > rows) registrants.pop();
    while (registrants.length < rows) registrants.push(blankRegistrant());
  },
  { immediate: true }
);

const mandatoryMessage = computed(() =>
  i18n.t("onProductWidget.mandatoryRequiermentsMessageHeader", {
    fallback: "This field is mandatory",
  })
);

const emailMessage = computed(() =>
  i18n.t("onProductWidget.freeCheckoutInvalidEmailMessage", {
    fallback: "Please enter a valid email address",
  })
);

const rowErrors = computed(() =>
  registrants.map((registrant) => ({
    email: isValidEmail(registrant.email) ? "" : emailMessage.value,
    first_name: registrant.first_name.trim() ? "" : mandatoryMessage.value,
    last_name: registrant.last_name.trim() ? "" : mandatoryMessage.value,
  }))
);

const isValid = computed(() =>
  rowErrors.value.every(
    (row) => !row.email && !row.first_name && !row.last_name
  )
);

const captchaMissing = computed(
  () => props.captchaRequired && captchaToken.value === ""
);

const isSelfRegistration = computed(() => true);

const description = computed(() =>
  isSelfRegistration.value
    ? i18n.t("onProductWidget.freeRegistrationFormDescription", {
        fallback:
          "Please fill in the form below with your email and name to complete your registration",
      })
    : i18n.t("onProductWidget.memberFormDescription", {
        fallback: "Add email addresses for additional recipients",
      })
);

const validate = () => {
  showErrors.value = true;

  if (!isValid.value || captchaMissing.value) return null;
  if (registrants.some((row) => /[,;]/.test(row.email + row.first_name + row.last_name))) return null;
  if (props.tickets.length && registrants.some((row) => {
    const ticket = ticketOf(row);
    return !ticket || !ticketAvailable(ticket) || (ticket.is_donation && !(Number(row.donation_amount) > 0));
  })) return null;

  return {
    registrants: registrants.map((registrant) => ({
      email: registrant.email.trim(),
      first_name: registrant.first_name.trim(),
      last_name: registrant.last_name.trim(),
      ticket_id: registrant.ticket_id,
      donation_amount: registrant.donation_amount,
    })),
    captchaToken: captchaToken.value,
  };
};

const ticketOf = (row) => props.tickets.find((ticket) => String(ticket.id) === String(row.ticket_id));
const ticketAvailable = (ticket) => (ticket.current_quantity == null || Number(ticket.current_quantity) > 0) &&
  (!ticket.start_datetime || Date.parse(ticket.start_datetime) <= Date.now()) &&
  (!ticket.end_datetime || Date.parse(ticket.end_datetime) >= Date.now());
watch(() => registrants.map((row) => ({ ...row })), () => {
  if (!props.tickets.length) { emit('total', null); return; }
  const total = registrants.reduce((sum, row) => {
    const ticket = ticketOf(row);
    return sum + (ticket?.is_donation ? Number(row.donation_amount) || 0 : Number(ticket?.price) || 0);
  }, 0);
  emit('total', total);
}, { deep: true, immediate: true });
defineExpose({ validate });
</script>

<template>
  <div class="svv-form">
    <p class="svv-form__text">{{ description }}</p>

    <fieldset
      v-for="(registrant, index) in registrants"
      :key="index"
      class="svv-members__row"
    >
      <legend class="svv-members__legend">
        {{
          i18n.t("onProductWidget.memberFormMember", { fallback: "Member" })
        }}
        <span
          v-if="index === 0 && isSelfRegistration"
          class="svv-badge svv-badge--success"
        >
          {{
            i18n.t("onProductWidget.memberFormPrimaryBadge", {
              fallback: "Primary contact",
            })
          }}
        </span>
      </legend>

      <label v-if="tickets.length" class="svv-field">
        <span class="svv-field__label">
          Ticket<span class="svv-field__required">*</span>
        </span>
        <span class="svv-field__control">
          <select v-model="registrant.ticket_id" class="svv-field__input svv-field__select" required>
            <option value="">Select a ticket</option>
            <option v-for="ticket in tickets" :key="ticket.id" :value="ticket.id" :disabled="!ticketAvailable(ticket)">
              {{ ticket.name }} · {{ ticket.is_donation ? 'Donation' : formatPrice(Number(ticket.price || 0), { currency: shop.currency }) }}
            </option>
          </select>
        </span>
      </label>
      <TextInput v-if="ticketOf(registrant)?.is_donation" v-model="registrant.donation_amount" type="number" min="0.01" step="0.01" label="Donation amount" required />
      <ErrorMessage v-if="showErrors && tickets.length && (!ticketOf(registrant) || !ticketAvailable(ticketOf(registrant)) || (ticketOf(registrant)?.is_donation && !(Number(registrant.donation_amount) > 0)))">Select an available ticket and enter a donation amount if required.</ErrorMessage>
      <ErrorMessage v-if="showErrors && /[,;]/.test(registrant.email + registrant.first_name + registrant.last_name)">Contact details cannot contain commas or semicolons.</ErrorMessage>
      <TextInput
        v-model="registrant.email"
        type="email"
        maxlength="40"
        required
        :label="
          i18n.t('onProductWidget.memberFormEmail', { fallback: 'Email' })
        "
        :error="showErrors ? rowErrors[index].email : ''"
      />

      <div class="svv-members__names">
        <TextInput
          v-model="registrant.first_name"
          maxlength="30"
          required
          :label="
            i18n.t('onProductWidget.memberFormFirstName', {
              fallback: 'First Name',
            })
          "
          :error="showErrors ? rowErrors[index].first_name : ''"
        />
        <TextInput
          v-model="registrant.last_name"
          maxlength="30"
          required
          :label="
            i18n.t('onProductWidget.memberFormLastName', {
              fallback: 'Last Name',
            })
          "
          :error="showErrors ? rowErrors[index].last_name : ''"
        />
      </div>
    </fieldset>

    <CaptchaBox
      v-if="captchaRequired"
      @verify="captchaToken = $event"
      @reset="captchaToken = ''"
    />

    <ErrorMessage v-if="showErrors && captchaMissing">
      {{
        i18n.t("onProductWidget.captchaRequiredMessage", {
          fallback: "Please complete the captcha to continue",
        })
      }}
    </ErrorMessage>
  </div>
</template>
