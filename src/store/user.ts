import { createStore } from "vuex";

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
 
  modules: {},
});
