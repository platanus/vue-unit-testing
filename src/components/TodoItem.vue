<template>
  <label>
    <input
      type="checkbox"
      v-model="todo.completed"
      @input="$emit('toggle')"
    >
    {{ todo.detail }}
    <span
      class="text-xs"
      v-if="todo.completed"
    >&mdash; {{ todo.completedDate | formatDate }}</span>
  </label>
</template>

<script>
import formatDate from '../filters/format-date';

export default {
  props: {
    todo: {
      required: true,
      type: Object,
    },
  },
  filters: {
    formatDate,
  },
};
</script>
