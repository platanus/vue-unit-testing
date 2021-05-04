/* eslint-disable no-magic-numbers */

import { shallowMount } from '@vue/test-utils';

import TodoListWithVuex from './TodoListWithVuex.vue';
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

const mockStore = {
  getters: {
    todosAsArray: todos,
  },
  dispatch: jest.fn(),
};

describe('TodoListWithRequest', () => {
  it('obtains todos from store', async () => {
    const wrapper = shallowMount(TodoListWithVuex, {
      mocks: {
        $store: mockStore,
      },
    });
    const todoItems = wrapper.findAllComponents(TodoItem);

    expect(todoItems.length).toBe(2);
  });

  it('dispatches toggleTodo on toggle', async () => {
    const wrapper = shallowMount(TodoListWithVuex, {
      mocks: {
        $store: mockStore,
      },
    });
    const todoItem = wrapper.findComponent(TodoItem);
    todoItem.vm.$emit('toggle');
    await wrapper.vm.$nextTick();
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });

  it('dispatches addTodo on add', async () => {
    jest.resetAllMocks();
    const wrapper = shallowMount(TodoListWithVuex, {
      data() {
        return {
          newTodo: 'new todo msg',
        };
      },
      mocks: {
        $store: mockStore,
      },
    });
    const addTodo = wrapper.findComponent(AddTodo);
    addTodo.vm.$emit('add');
    await wrapper.vm.$nextTick();
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  });
});
