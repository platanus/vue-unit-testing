import { mutations, actions } from './index';
const { setTodo } = mutations;

describe('mutations', () => {
  it('adds todo', () => {
    const state = {
      todos: {},
    };
    const todo = { id: 1, detail: 'A message' };

    setTodo(state, todo);
    expect(state.todos).toMatchObject({
      1: todo,
    });
  });

  it('updates todo', () => {
    const state = {
      todos: {
        1: { id: 1, detail: 'A message' },
      },
    };
    const todo = { id: 1, detail: 'Updated message' };

    setTodo(state, todo);
    expect(state.todos).toMatchObject({
      1: todo,
    });
  });
});

const { toggleTodo } = actions;

describe('actions', () => {
  it('it toggles and adds date on toggleTodo', () => {
    const state = {
      todos: {
        1: { id: 1, detail: 'A message', completed: false },
      },
    };
    const commit = jest.fn();
    toggleTodo({ commit, state }, 1);
    expect(commit).toHaveBeenCalledTimes(1);
    const todo = commit.mock.calls[0][1];
    expect(todo.completedDate).toBeTruthy();
    expect(todo.completed).toBe(true);
  });
});
