import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/table.vue"),
  },
  {
    path: "/advert",
    name: "advert",
    component: () => import("../views/Advert.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../views/form.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
