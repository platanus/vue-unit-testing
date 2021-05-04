<template>
  <div
    id="app"
    class="w-56 mx-auto"
  >
    <div class="mb-10">
      <TodoList v-if="type === 'normal'" />
      <TodoListWithRequest v-if="type === 'request'" />
      <TodoListWithVuex v-if="type === 'vuex'" />
    </div>
    <div class="flex">
      <button
        class="px-2 py-1 mr-2 bg-blue-600"
        @click="type = 'normal'"
      >
        Normal
      </button>
      <button
        class="px-2 py-1 mr-2 bg-green-600"
        @click="type = 'request'"
      >
        Request
      </button>
      <button
        class="px-2 py-1 bg-green-600"
        @click="type = 'vuex'"
      >
        Vuex
      </button>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoListWithRequest from './components/TodoListWithRequest.vue';
import TodoListWithVuex from './components/TodoListWithVuex.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoListWithRequest,
    TodoListWithVuex,
  },
  data() {
    return {
      type: 'normal',
    };
  },
};
</script>
