<template>
  <label>
    <input
      type="checkbox"
      v-model="todo.completed"
      @input="$emit('toggle')"
    >
    {{ todo.detail }}
  </label>
</template>

<script>
export default {
  props: {
    todo: {
      required: true,
      type: Object,
    },
  },
};
</script>
