import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comment: '',
    todos: [],
    status: '作業中',
    filterData: [],
    picked: 'all',
  },
  mutations: {
    setPicked(state, picked) {
      state.picked = picked;
    },
    updateTodos(state, comment) {
      var todo = {
        id: 0,
        comment: comment,
        todoStatus: state.status,
      };
      if (state.todos.length !== 0) {
        todo.id = state.todos[state.todos.length - 1].id + 1;
      }
      state.todos.push(todo);
      const radio2 = document.getElementById('radio2');

      if (radio2.checked) {
        state.filterData.push(todo);
      }
    },
    removeTodos(state, todo) {
      const number = Number(todo.target.value);
      const targetIndex = state.todos.findIndex(
        (todoData) => todoData.id === number
      );
      const filterIndex = state.filterData.findIndex(
        (todoData) => todoData.id === number
      );
      state.todos.splice(targetIndex, 1);
      state.filterData.splice(filterIndex, 1);
    },
    changeTodos(state, todo) {
      const number = Number(todo.target.value);
      const targetIndex = state.todos.findIndex(
        (todoData) => todoData.id === number
      );
      if (state.todos[targetIndex].todoStatus === '作業中') {
        state.todos[targetIndex].todoStatus = '完了';
        const filterDoing = state.todos.filter((todo) => {
          return todo.todoStatus === '作業中';
        });
        state.filterData.splice(0);
        filterDoing.forEach((data) => {
          state.filterData.push(data);
        });
      } else if (state.todos[targetIndex].todoStatus === '完了') {
        state.todos[targetIndex].todoStatus = '作業中';
        const filterDone = state.todos.filter((todo) => {
          return todo.todoStatus === '完了';
        });
        state.filterData.splice(0);
        filterDone.forEach((data) => {
          state.filterData.push(data);
        });
      }
    },
    filterTodos(state) {
      const radio1 = document.getElementById('radio1');
      const radio2 = document.getElementById('radio2');
      const radio3 = document.getElementById('radio3');
      if (radio1.checked) {
        state.todos.slice();
      } else if (radio2.checked) {
        const filterDoing = state.todos.filter((todo) => {
          return todo.todoStatus === '作業中';
        });
        state.filterData.splice(0);
        filterDoing.forEach((data) => {
          state.filterData.push(data);
        });
      } else if (radio3.checked) {
        const filterDone = state.todos.filter((todo) => {
          return todo.todoStatus === '完了';
        });
        state.filterData.splice(0);
        filterDone.forEach((data) => {
          state.filterData.push(data);
        });
      }
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    filterData(state) {
      return state.filterData;
    },
  },
  actions: {
    updateTodos(context, todo) {
      context.commit('updateTodos', todo.comment);
    },
    removeTodos({ commit }, todo) {
      commit('removeTodos', todo);
    },
    changeTodos({ commit }, todo) {
      commit('changeTodos', todo);
    },
    filterTodos({ commit }, todo) {
      commit('filterTodos', todo);
    },
  },
});
