import { shallowMount } from '@vue/test-utils';

import AddTodo from './AddTodo.vue';

describe('AddTodo', () => {
  it('displays value prop', () => {
    const wrapper = shallowMount(AddTodo, {
      propsData: {
        value: 'A todo item',
      },
    });

    const input = wrapper.find('input');

    expect(input.element.value).toBe('A todo item');
  });

  it('emits add on click', () => {
    const wrapper = shallowMount(AddTodo, {
      propsData: {
        value: 'A todo item',
      },
    });

    const button = wrapper.find('button');
    button.trigger('click');

    expect(wrapper.emitted().add).toBeTruthy();
  });
});
