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
import todosApi from '../api/todos';

export default {
  components: {
    TodoItem,
    AddTodo,
  },
  data() {
    return {
      newTodo: null,
      todos: [],
    };
  },
  async created() {
    try {
      this.todos = await todosApi.get();
    } catch {
      this.error = true;
    }
  },
  methods: {
    async toggle(todo) {
      try {
        todo.completed = !todo.completed;
        await todosApi.toggle(todo.id, todo.completed);
        this.todos = await todosApi.get();
      } catch {
        todo.completed = !todo.completed;
        this.error = true;
      }
    },
    async addTodo() {
      try {
        await todosApi.add(this.newTodo);
        this.todos = await todosApi.get();
      } catch {
        this.error = true;
      }
    },
  },
};
</script>
