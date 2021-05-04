import axios from 'axios';

export default {
  get() {
    return axios.get('http://localhost:3000/todos').then((res) => res.data);
  },
  toggle(id, completed) {
    axios.patch(`http://localhost:3000/todos/${id}/`, {
      completed,
    }).then((res) => res.data);
  },
  add(newTodo) {
    return axios
      .post('http://localhost:3000/todos', {
        detail: newTodo,
      })
      .then((res) => res.data);
  },
};
