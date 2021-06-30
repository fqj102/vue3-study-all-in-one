import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Study from "@/views/Study.vue";
import Study02 from "@/views/Study02.vue";
import Study03 from "@/views/Study03.vue";
import Study04 from "@/views/Study04.vue";
import Study05 from "@/views/Study05.vue";
import Study06 from "@/views/Study06.vue";
import Study07 from "@/views/Study07.vue";
import Study08 from "@/views/Study08.vue";
import Study09 from "@/views/Study09.vue";
import Study10 from "@/views/Study10.vue";
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
  {
    path: "/study03",
    name: "Study03",
    component: Study03,
  },
  {
    path: "/study04",
    name: "Study04",
    component: Study04,
  },
  {
    path: "/study05",
    name: "Study05",
    component: Study05,
  },
  {
    path: "/study06",
    name: "Study06",
    component: Study06,
  },
  {
    path: "/study07",
    name: "Study07",
    component: Study07,
  },
  {
    path: "/study08",
    name: "Study08",
    component: Study08,
  },
  {
    path: "/study09",
    name: "Study09",
    component: Study09,
  },
  {
    path: "/study10",
    name: "Study10",
    component: Study10,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
