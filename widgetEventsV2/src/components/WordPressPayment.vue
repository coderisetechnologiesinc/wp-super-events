<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { loadStripe } from '@stripe/stripe-js';
import { useBookingStore } from '@/stores/booking';
const booking = useBookingStore();
const target = ref(null);
let checkout = null;
let disposed = false;
async function mountPayment() {
  booking.error = '';
  try {
    const session = booking.payment;
    const stripe = await loadStripe(session.public_key, session.account_id ? { stripeAccount: session.account_id } : undefined);
    if (disposed) return;
    if (!stripe) throw new Error('Unable to load payment form.');
    const instance = await stripe.initEmbeddedCheckout({ clientSecret: session.client_secret, onComplete: () => {
      if (disposed) return;
      checkout?.destroy(); checkout = null; booking.paymentComplete();
    } });
    if (disposed) { instance.destroy(); return; }
    checkout = instance;
    checkout.mount(target.value);
  } catch (error) { if (!disposed) booking.error = error.message || 'Unable to load payment form.'; }
}
onMounted(mountPayment);
onBeforeUnmount(() => { disposed = true; checkout?.destroy(); });
</script>
<template>
  <div ref="target" class="svv-payment"></div>
  <button v-if="booking.error" type="button" class="svv-submit" @click="mountPayment">Retry payment</button>
</template>
