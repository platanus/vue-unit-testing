<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      <TodoItem
        :todo="todo"
        @toggle="toggle(todo)"
      />
    </li>
    <li class="flex">
      <AddTodo
        v-model="newTodo"
        @add="addTodo"
      />
    </li>
  </ul>
</template>

<script>
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default {
  components: {
    TodoItem,
    AddTodo,
  },
  data() {
    return {
      newTodo: null,
    };
  },
  computed: {
    todos() {
      return this.$store.getters.todosAsArray;
    },
  },
  methods: {
    toggle(todo) {
      this.$store.dispatch('toggleTodo', todo.id);
    },
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodo);
      this.newTodo = null;
    },
  },
};
</script>
