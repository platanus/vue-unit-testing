import { shallowMount } from '@vue/test-utils';

import TodoItem from './TodoItem.vue';
import formatDate from '../filters/format-date';

const todo = {
  completedDate: new Date('2021-04-30T14:50:00.630Z'),
  id: 1,
  completed: true,
  detail: 'Install Vue',
};

describe('TodoItem', () => {
  it('displays detail', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: { ...todo },
      },
    });

    expect(wrapper.text()).toContain(todo.detail);
  });

  it('emits toggle on check', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: { ...todo },
      },
    });

    const input = wrapper.find('input');
    input.trigger('click');

    expect(wrapper.emitted().toggle).toBeTruthy();
  });

  it('shows date if there\'s one', () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: { ...todo },
      },
    });

    expect(wrapper.find('[data-testid="todo-date"]').exists()).toBe(true);
  });

  it('doesn\'t show date if not completed', () => {
    const updatedTodo = { ...todo, completed: false };
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: updatedTodo,
      },
    });

    expect(wrapper.text()).not.toContain(formatDate(todo.completedDate));
  });

  it('doesn\'t show date if not completed (with data-testid)', () => {
    const updatedTodo = { ...todo, completed: false };
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: updatedTodo,
      },
    });

    expect(wrapper.find('[data-testid="todo-date"]').exists()).toBe(false);
  });
});
