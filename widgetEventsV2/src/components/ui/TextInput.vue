<script setup>
defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  maxlength: { type: [String, Number], default: null },
  required: { type: Boolean, default: false },
  error: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="svv-field">
    <span v-if="label" class="svv-field__label">
      {{ label }}<span v-if="required" class="svv-field__required">*</span>
    </span>
    <input
      class="svv-field__input"
      :class="{ 'is-invalid': !!error }"
      :type="type"
      :maxlength="maxlength"
      :value="modelValue"
      :aria-invalid="!!error"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="svv-field__error">{{ error }}</span>
  </label>
</template>
