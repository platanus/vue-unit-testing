/* eslint-disable no-magic-numbers */
import { shallowMount } from '@vue/test-utils';
import cloneDeep from 'lodash/cloneDeep';
import TodoList from './TodoList.vue';
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';

const todos = [
  {
    completedDate: new Date('2021-04-30T14:50:00.630Z'),
    id: 1,
    completed: true,
    detail: 'Install Vue',
  },
  {
    completedDate: new Date('2021-04-30T14:52:00.630Z'),
    id: 2,
    completed: false,
    detail: 'Install Jest',
  },
];

describe('TodoList', () => {
  it('displays all todos', () => {
    const wrapper = shallowMount(TodoList, {
      data() {
        return {
          todos: cloneDeep(todos),
        };
      },
    });

    const todoItems = wrapper.findAllComponents(TodoItem);

    expect(todoItems.length).toBe(2);
  });

  it('displays all todos (with data-testid)', () => {
    const wrapper = shallowMount(TodoList, {
      data() {
        return {
          todos: cloneDeep(todos),
        };
      },
    });

    const todoItems = wrapper.findAll('[data-test="todo-item"]');

    expect(todoItems.length).toBe(2);
  });

  it('toggles on received event (with data-testid)', async () => {
    const wrapper = shallowMount(TodoList, {
      data() {
        return {
          todos: cloneDeep(todos),
        };
      },
    });

    const todoItem = wrapper.find('[data-test="todo-item"]');
    todoItem.vm.$emit('toggle');
    await wrapper.vm.$nextTick();

    const id = todoItem.props().todo.id;

    const todo = wrapper.vm.todos.find(t => t.id === id);
    expect(todo.completed).toBe(false);
  });

  it('adds todo on received event', async () => {
    const wrapper = shallowMount(TodoList, {
      data() {
        return {
          todos: cloneDeep(todos),
          newTodo: 'This is a todo',
        };
      },
    });
    const addTodo = wrapper.findComponent(AddTodo);
    addTodo.vm.$emit('add');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.todos.length).toBe(3);
  });
});
