<template>
  <div>
    <input
      type="text"
      class="px-2 py-1 border border-gray-600"
      placeholder="Escribe lo que quieres hacer"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <button
      class="px-2 py-1 bg-green-600 border border-green-600"
      @click="$emit('add')"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
};
</script>
