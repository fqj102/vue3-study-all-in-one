import { createStore } from "vuex";
import user from "./user";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    dogImg: "",
    isLoading: false,
  },
  mutations: {
    increment(state) {
      console.log("dddd");
      state.count++;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setDog(state, payload) {
      state.dogImg = payload;
    },
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    getDog({ commit }, payload) {
      axios.get(payload).then((resp) => {
        commit("setDog", resp.data.message[0]);
      });
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
