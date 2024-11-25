import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserPage from "@/views/UserPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import AboutPage from "@/page/AboutPage.vue";
import CatalogPage from "@/page/CatalogPage.vue";
import WherePage from "@/page/WherePage.vue";
import MainPage from "@/page/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      children: [
        {
          path: "/",
          component: MainPage,
        },
        {
          path: "/about",
          component: AboutPage,
        },
        {
          path: "/catalog",
          component: CatalogPage,
        },
        {
          path: "/where",
          component: WherePage,
        }
      ],
    },
    {
      path: "/user",
      name: "User",
      component: UserPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
