import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comment: "",
    todos: [],
    status: "作業中",
    filterData: [],
    picked: "all",
  },
  mutations: {
    setPicked(state, picked) {
      state.picked = picked;
    },
    UpdateTodos(state, comment) {
      var todo = {
        id: 0,
        comment: comment,
        todoStatus: state.status,
      };
      if (state.todos.length !== 0) {
        todo.id = state.todos[state.todos.length - 1].id + 1;
      }
      state.todos.push(todo);
      const radio2 = document.getElementById("radio2");

      if (radio2.checked) {
        state.filterData.push(todo);
      }
    },
    removetodos(state, todo) {
      const number = Number(todo.target.value);
      const targetIndex = state.todos.findIndex(
        (todoData) => todoData.id === number
      );
      const targetfilterIndex = state.filterData.findIndex(
        (todoData) => todoData.id === number
      );
      state.todos.splice(targetIndex, 1);
      state.filterData.splice(targetfilterIndex, 1);
    },
    statustodos(state, todo) {
      const number = Number(todo.target.value);
      const targetIndex = state.todos.findIndex(
        (todoData) => todoData.id === number
      );
      if (state.todos[targetIndex].todoStatus === "作業中") {
        state.todos[targetIndex].todoStatus = "完了";
      } else if (state.todos[targetIndex].todoStatus === "完了") {
        state.todos[targetIndex].todoStatus = "作業中";
      }
    },
    filterTodos(state) {
      const radio1 = document.getElementById("radio1");
      const radio2 = document.getElementById("radio2");
      const radio3 = document.getElementById("radio3");
      if (radio1.checked) {
        state.todos.slice();
      } else if (radio2.checked) {
        const filterdoing = state.todos.filter((todo) => {
          return todo.todoStatus === "作業中";
        });
        state.filterData.splice(0);
        filterdoing.forEach((data) => {
          state.filterData.push(data);
        });
      } else if (radio3.checked) {
        const filterdone = state.todos.filter((todo) => {
          return todo.todoStatus === "完了";
        });
        state.filterData.splice(0);
        filterdone.forEach((data) => {
          state.filterData.push(data);
        });
      }
    },
  },
  actions: {
    UpdateTodos(context, todo) {
      context.commit("UpdateTodos", todo.comment);
    },
    removetodos({ commit }, todo) {
      commit("removetodos", todo);
    },
    statustodos({ commit }, todo) {
      commit("statustodos", todo);
    },
    filterTodos({ commit }, todo) {
      commit("filterTodos", todo);
    },
  },
});
