import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Study from "@/views/Study.vue";
import Study02 from "@/views/Study02.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/study",
    name: "Study",
    component: Study,
  },
  {
    path: "/study02",
    name: "Study02",
    component: Study02,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
