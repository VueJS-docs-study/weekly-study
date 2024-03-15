import { createRouter, createWebHistory } from "vue-router";
import LoginLayout from "@/layouts/LoginLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { useUserStore } from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginLayout,
    },
    {
      path: "/main",
      name: "main",
      component: MainLayout,
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore();
        // 사용자 아이디 값이 존재한다면 페이지 유지, 아니라면 로그인 페이지로 라우팅
        userStore.user.id !== "" ? next() : next({ name: "login" });
      },
    },
  ],
});

export default router;
