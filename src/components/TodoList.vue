<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      <TodoItem
        :todo="todo"
        @toggle="toggleTodo(todo)"
        data-test="todo-item"
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
          completedDate: new Date('2021-04-30T14:50:00.630Z'),
          id: 1,
          completed: true,
          detail: 'Install Vue',
        },
        {
          completedDate: new Date('2021-04-30T14:52:00.630Z'),
          id: 2,
          completed: true,
          detail: 'Install Jest',
        },
        {
          completedDate: new Date('2021-04-30T14:56:00.630Z'),
          id: 3,
          completed: true,
          detail: 'Install Tailwind',
        },
        {
          completedDate: new Date('2021-04-30T14:59:00.630Z'),
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
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      if (todo.completed) {
        todo.completedDate = new Date();
      } else {
        todo.completedDate = null;
      }
    },
  },
};
</script>
