import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useRuntimeStore } from '@/api/wordpress';
import { useShopStore } from './shop';
import { useQuestionsStore } from './questions';

export const STEPS = {
  questionsBefore: 'questionsBefore', questionsAfter: 'questionsAfter',
  waitingList: 'waitingList', waitingListDone: 'waitingListDone',
  confirmation: 'confirmation', payment: 'payment',
};
export const GENERIC_ERROR = 'genericErrorMessage';
export const isFreeBooking = (booking, event) => !!event?.isFree;
export const seatCappedQuantity = (event, attendees) => {
  const seats = event?.seatsRemaining;
  return Math.max(1, typeof seats === 'number' && seats > 0 ? Math.min(seats, attendees) : attendees);
};
export const serializeRegistrants = (registrants) => registrants.map(({ email, first_name, last_name, ticket_id, donation_amount }) =>
  [email, first_name, last_name, ...(ticket_id ? [ticket_id, donation_amount || 0] : [])].join(',')).join(';');
export function openBookingLink(link) {
  const url = new URL(link, window.location.href);
  if (!['http:', 'https:'].includes(url.protocol)) return;
  window.open(url.href, '_blank', 'noopener,noreferrer');
}
export const useBookingStore = defineStore('booking', () => {
  const { api, runtime } = useRuntimeStore();
  const questions = useQuestionsStore();
  const shop = useShopStore();
  const event = ref(null);
  const step = ref(null);
  const quantity = ref(1);
  const registrants = ref([]);
  const submitting = ref(false);
  const error = ref('');
  const primaryEmail = ref('');
  const payment = ref(null);
  const completed = ref(false);
  const isFreeFlow = computed(() => {
    if (!event.value) return false;
    const tickets = event.value.tickets || [];
    if (!tickets.length) return event.value.isFree;
    return registrants.value.every((person) => {
      const ticket = tickets.find((item) => String(item.id) === String(person.ticket_id));
      return ticket && !ticket.is_donation && Number(ticket.price || 0) === 0;
    });
  });
  const isSelfRegistration = computed(() => true);
  const captchaRequired = computed(() => false);
  let attempt = 0;
  function reset() {
    attempt++;
    event.value = null; step.value = null; quantity.value = 1; registrants.value = [];
    submitting.value = false; error.value = ''; primaryEmail.value = ''; payment.value = null; completed.value = false;
    questions.reset();
  }
  const close = reset;
  async function start(nextEvent, details = {}) {
    if (!nextEvent || submitting.value) return;
    if (runtime.preview) { error.value = 'Registration is disabled in preview.'; return; }
    if (nextEvent.bookingLink) { openBookingLink(nextEvent.bookingLink); return; }
    reset();
    event.value = nextEvent;
    if (nextEvent.availability === 'sold-out') {
      if (shop.booking.waitingList) step.value = STEPS.waitingList;
      else error.value = 'This event is sold out.';
      return;
    }
    quantity.value = seatCappedQuantity(nextEvent, details.attendees || 1);
    registrants.value = details.registrants || [];
    primaryEmail.value = registrants.value[0]?.email || '';
    const current = attempt;
    submitting.value = true;
    try {
      await questions.load(nextEvent.productId);
      if (current !== attempt) return;
      submitting.value = false;
      if (questions.hasBefore) step.value = STEPS.questionsBefore;
      else await submit();
    } catch (e) {
      if (current === attempt) { error.value = e.message || GENERIC_ERROR; submitting.value = false; }
    }
  }
  function payload() {
    const [primary, ...additional] = registrants.value;
    if (!primary?.email) throw new Error('Please enter the primary contact email.');
    if (registrants.value.length !== quantity.value) throw new Error('Please provide details for every attendee.');
    return { ...primary, additional_registrants: serializeRegistrants(additional), same_for_all: false };
  }
  async function submit() {
    if (!event.value || submitting.value) return;
    submitting.value = true; error.value = '';
    const current = attempt;
    try {
      const body = payload();
      await questions.save(event.value.productId, primaryEmail.value, event.value.occurrenceId);
      if (current !== attempt) return;
      if (isFreeFlow.value) {
        await api.registerFree(event.value, body);
        if (current !== attempt) return;
        completed.value = true;
        finish();
      } else {
        const session = await api.checkout(event.value, body);
        if (current !== attempt) return;
        if (!session?.client_secret || !session?.public_key) throw new Error('Unable to start payment.');
        payment.value = { ...session, account_id: session.account_id || runtime.stripeAccountId || '' };
        step.value = STEPS.payment;
      }
    } catch (e) {
      if (current === attempt) error.value = e.message || GENERIC_ERROR;
    } finally { if (current === attempt) submitting.value = false; }
  }
  function paymentComplete() { completed.value = true; payment.value = null; finish(); }
  function finish() {
    if (!completed.value) return;
    step.value = questions.hasAfter ? STEPS.questionsAfter : STEPS.confirmation;
  }
  async function submitBeforeForm(answered) { questions.cache(answered); await submit(); }
  async function submitAfterForm(answered) {
    if (submitting.value) return;
    submitting.value = true; error.value = '';
    try {
      questions.cache(answered);
      await questions.save(event.value.productId, primaryEmail.value, event.value.occurrenceId);
      step.value = STEPS.confirmation;
    } catch (e) { error.value = e.message || GENERIC_ERROR; }
    finally { submitting.value = false; }
  }
  async function submitWaitingList(body) {
    if (submitting.value || runtime.preview) return;
    submitting.value = true; error.value = '';
    try { await api.waitlist(event.value, body); step.value = STEPS.waitingListDone; }
    catch (e) { error.value = e.message || GENERIC_ERROR; }
    finally { submitting.value = false; }
  }
  return { event, step, quantity, registrants, submitting, error, primaryEmail, payment, completed, isFreeFlow,
    isSelfRegistration, captchaRequired, start, submit, submitBeforeForm, submitAfterForm, submitWaitingList,
    paymentComplete, finish, close, reset };
});
