import Vue from 'vue'
import Vuex from 'vuex'
import { TodoService } from "../services/todo.service";

const todoService = new TodoService();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    GET_ALL_TODOS(state, todos) {
      state.todos = todos;
    },

    DELETE_TODO(state, id) {
      let index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1);
    }
  },
  actions: {
    getTodos({ commit }) {
      todoService.getTodos().then(res => {
        commit("GET_ALL_TODOS", res.data);
      });
    },

    deleteTodo({ commit }, id) {
      commit("DELETE_TODO", id);
    }
  },
  getters: {
    GET_TODOS: (state) => { return state.todos; }
  }
})
