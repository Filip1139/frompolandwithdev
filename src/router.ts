import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./HomeView.vue";

const routes = [{ path: "/", component: HomeView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
