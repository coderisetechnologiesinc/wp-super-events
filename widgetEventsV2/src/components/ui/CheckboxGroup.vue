<script setup>
const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  options: { type: Array, default: () => [] },
});

const emit = defineEmits(["update:modelValue"]);

const toggle = (option, checked) => {
  const next = props.modelValue.filter((value) => value !== option);

  if (checked) next.push(option);

  emit("update:modelValue", next);
};
</script>

<template>
  <div class="svv-choices">
    <label v-for="option in options" :key="option" class="svv-choice">
      <input
        type="checkbox"
        :value="option"
        :checked="modelValue.includes(option)"
        @change="toggle(option, $event.target.checked)"
      />
      <span>{{ option }}</span>
    </label>
  </div>
</template>
