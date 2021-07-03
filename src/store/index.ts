import { createStore } from "vuex";
import user from "./user";
export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      console.log("dddd");
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  modules: {
    user,
  },
});
