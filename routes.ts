import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingPage from "./src/views/LandingPage.vue";
import PetIndexPage from "./src/views/PetIndexPage.vue";
import UserProfilePage from "./src/views/UserProfilePage.vue";
import LoginPage from "./src/views/LoginPage.vue";
import SignUpPage from "./src/views/SignUpPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: LandingPage },
  { path: "/pet/", component: PetIndexPage },
  { path: "/user/:userId", component: UserProfilePage },
  {
    path: "/auth/login",
    component: LoginPage
  }, {
    path: '/auth/signup',
    component: SignUpPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
