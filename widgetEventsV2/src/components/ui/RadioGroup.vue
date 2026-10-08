<script setup>
defineProps({
  modelValue: { type: String, default: "" },
  options: { type: Array, default: () => [] },
  name: { type: String, required: true },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="svv-choices">
    <label v-for="option in options" :key="option" class="svv-choice">
      <input
        type="radio"
        :name="name"
        :value="option"
        :checked="modelValue === option"
        @change="$emit('update:modelValue', option)"
      />
      <span>{{ option }}</span>
    </label>
  </div>
</template>
