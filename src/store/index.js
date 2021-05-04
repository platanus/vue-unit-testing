import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
  todos: {
    1: {
      completedDate: new Date('2021-04-30T14:50:00.630Z'),
      id: 1,
      completed: true,
      detail: 'Install Vue',
    },
    2: {
      completedDate: new Date('2021-04-30T14:52:00.630Z'),
      id: 2,
      completed: true,
      detail: 'Install Jest',
    },
    3: {
      completedDate: new Date('2021-04-30T14:56:00.630Z'),
      id: 3,
      completed: true,
      detail: 'Install Tailwind',
    },
    4: {
      completedDate: new Date('2021-04-30T14:59:00.630Z'),
      id: 4,
      completed: true,
      detail: 'Make the simplest possible todo app',
    },
  },
};

export const mutations = {
  setTodo(state, payload) {
    Vue.set(state.todos, payload.id, payload);
  },
};

export const actions = {
  toggleTodo({ commit, state }, payload) {
    const todo = state.todos[payload];
    // eslint-disable-next-line no-negated-condition
    const completed = !todo.completed;
    let completedDate;
    if (completed) {
      completedDate = new Date();
    } else {
      completedDate = null;
    }
    commit('setTodo', { ...todo, completed, completedDate });
  },
  addTodo({ commit, getters }, payload) {
    const lastTodo = getters.todosAsArray[getters.todosAsArray.length - 1];
    commit('setTodo', {
      id: lastTodo ? lastTodo.id + 1 : 1,
      completed: false,
      detail: payload,
    });
  },
};

export const getters = {
  todosAsArray(state) {
    return Object.values(state.todos).sort((a, b) => a.id - b.id);
  },
};

export default new Vuex.Store({
  strict: true,
  state: { ...initialState },
  mutations,
  actions,
  getters,
});
