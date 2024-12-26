import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeIndex.vue";

import { useStore } from "vuex";
const routeList = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/case",
    name: "case",
    component: () => import("../views/CaseView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/download",
    name: "download",
    component: () => import("../views/DownloadView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routeList,
});

router.beforeEach((to, from, next) => {
  const currentRoute = routeList.findIndex((v) => v.name == to.name);
  if (currentRoute < 0) return false;

  const store = useStore();
  store.state.routerIndex = currentRoute;
  next();
  console.log(to, from, currentRoute, this, store, "beforeEach ");
});

export default router;
