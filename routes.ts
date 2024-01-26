import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingPage from "./src/views/LandingPage.vue";
import PetIndexPage from "./src/views/PetIndexPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: LandingPage },
  { path: "/:petType", component: PetIndexPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
