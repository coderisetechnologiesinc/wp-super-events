<script setup>
defineProps({
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});
</script>

<template>
  <button
    type="submit"
    class="svv-submit"
    :class="{ 'is-loading': loading }"
    :disabled="disabled || loading"
  >
    <slot />
  </button>
</template>
