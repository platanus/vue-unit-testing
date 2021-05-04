/* eslint-disable no-magic-numbers */

import { shallowMount } from '@vue/test-utils';
import cloneDeep from 'lodash/cloneDeep';
import flushPromises from 'flush-promises';

import TodoListWithRequest from './TodoListWithRequest.vue';
import TodoItem from './TodoItem.vue';

import todosApi from '../api/todos';
jest.mock('../api/todos');

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

describe('TodoListWithRequest', () => {
  it('makes request and displays all todos on create', async () => {
    todosApi.get.mockResolvedValueOnce(cloneDeep(todos));
    const wrapper = shallowMount(TodoListWithRequest);
    await flushPromises();
    const todoItems = wrapper.findAllComponents(TodoItem);

    expect(todosApi.get).toHaveBeenCalledTimes(1);
    expect(todoItems.length).toBe(2);
  });

  it('sets error on error', async () => {
    jest.resetAllMocks();
    todosApi.get.mockRejectedValueOnce();
    const wrapper = shallowMount(TodoListWithRequest);
    await flushPromises();
    const todoItems = wrapper.findAllComponents(TodoItem);

    expect(todosApi.get).toHaveBeenCalledTimes(1);
    expect(todoItems.length).toBe(0);
    expect(wrapper.vm.error).toBe(true);
  });

  it('makes request on toggle event', async () => {
    todosApi.get.mockResolvedValueOnce(cloneDeep(todos));
    const wrapper = shallowMount(TodoListWithRequest);
    await flushPromises();
    jest.resetAllMocks();

    const todoItem = wrapper.findComponent(TodoItem);
    const id = todoItem.props().todo.id;
    const updatedTodos = cloneDeep(todos);
    updatedTodos[0].completed = false;
    todosApi.get.mockResolvedValueOnce(updatedTodos);
    todoItem.vm.$emit('toggle');
    await wrapper.vm.$nextTick();
    await flushPromises();

    expect(todosApi.toggle).toHaveBeenCalledTimes(1);
    expect(todosApi.get).toHaveBeenCalledTimes(1);

    const todo = wrapper.vm.todos.find(t => t.id === id);
    expect(todo.completed).toBe(false);
  });
});
