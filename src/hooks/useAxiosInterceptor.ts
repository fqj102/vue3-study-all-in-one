import axios from "axios";
import store from "@/store";
export default function useAxiosInterceptor() {
  axios.defaults.baseURL = "http://localhost:8080";
  axios.interceptors.request.use((config) => {
    console.log("====req===");
    store.commit("setLoading", true);
    return config;
  });
  axios.interceptors.response.use((config) => {
    console.log("====resp===");
    store.commit("setLoading", false);
    return config;
  });
}
