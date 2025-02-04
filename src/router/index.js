import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserPage from "@/views/UserPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import AboutPage from "@/page/AboutPage.vue";
import CatalogPage from "@/page/CatalogPage.vue";
import WherePage from "@/page/WherePage.vue";
import MainPage from "@/page/MainPage.vue";
import AboutProduct from "@/components/AboutProduct.vue";
import CartPage from "@/page/CartPage.vue";
import ProfilePage from "@/page/ProfilePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomePage,
    //   children: [
    //     {
    //       path: "/",
    //       component: MainPage,
    //     },
    //     {
    //       path: "/about",
    //       component: AboutPage,
    //     },
    //     {
    //       path: "/catalog",
    //       component: CatalogPage,
    //     },
    //     {
    //       path: "/where",
    //       component: WherePage,
    //     },
    //     {
    //       path: "/products/:id",
    //       name: "AboutProduct",
    //       component: AboutProduct,
    //     },
    //   ],
    // },
    {
      path: "/",
      name: "User",
      component: UserPage,
      meta: { requiresAuth: true },
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
        },
        {
          path: "/cart",
          component: CartPage,
        },
        {
          path: "/profile",
          component: ProfilePage,
        },
        {
          path: "/product/:id",
          name: "product",
          component: AboutProduct,
        }
      ],
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
  ],
});

export default router;
