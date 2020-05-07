import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      data: null
    },
    drawing: {
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_USER(state, data) {
      state.user.data = data
    },
    SET_DRAWING(state, data) {
      state.drawing.data = data
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('SET_USER', {id: user.id})
    },
    fetchDrawing({ commit }, drawing) {
      commit('SET_DRAWING', {lines: drawing.lines})
    }
  }
});