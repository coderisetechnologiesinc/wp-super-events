<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="svv-choice">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span><slot /></span>
  </label>
</template>
