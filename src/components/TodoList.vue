<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      <TodoItem
        :todo="todo"
        @toggle="todo.completed = !todo.completed"
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
      todos: [
        {
          id: 1,
          completed: true,
          detail: 'Install Vue',
        },
        {
          id: 2,
          completed: true,
          detail: 'Install Jest',
        },
        {
          id: 3,
          completed: true,
          detail: 'Install Tailwind',
        },
        {
          id: 4,
          completed: true,
          detail: 'Make the simplest possible todo app',
        },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos[this.todos.length - 1].id + 1,
        completed: false,
        detail: this.newTodo,
      });
      this.newTodo = null;
    },
  },
};
</script>
