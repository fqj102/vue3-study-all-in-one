import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import useAxiosInterceptor from "@/hooks/useAxiosInterceptor";
// import { Button, message } from 'ant-design-vue';
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

useAxiosInterceptor();
createApp(App)
  //   .use(Button)
  .use(antd)
  .use(store)
  .use(router)
  .mount("#app");
