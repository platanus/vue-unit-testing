import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
  todos: {
    1: {
      'id': 1,
      'completed': true,
      'detail': 'Install Vue',
    },
    2: {
      'id': 2,
      'completed': true,
      'detail': 'Install Jest',
    },
    3: {
      'id': 3,
      'completed': true,
      'detail': 'Install Tailwind',
    },
    4: {
      'id': 4,
      'completed': true,
      'detail': 'Make the simplest possible todo app',
    },
  },
};

const mutations = {
  setTodo(state, payload) {
    Vue.set(state.todos, payload.id, payload);
  },
};

const actions = {
  toggleTodo({ commit, state }, payload) {
    const todo = state.todos[payload];
    commit('setTodo', { ...todo, completed: !todo.completed });
  },
  addTodo({ commit, getters }, payload) {
    commit('setTodo', {
      id: getters.todosAsArray[getters.todosAsArray.length - 1].id + 1,
      completed: false,
      detail: payload,
    });
  },
};

const getters = {
  todosAsArray(state) {
    return Object.values(state.todos).sort((a, b) => a.id - b.id);
  },
};

export default new Vuex.Store({
  state: { ...initialState },
  mutations,
  actions,
  getters,
});
