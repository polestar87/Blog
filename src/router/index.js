import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    // name: "index",
    redirect: 'home',
    // component: () => import("../components/Home.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
      },  
      {
        path: "/whisper",
        name: "Whisper",
        component: () => import("@/views/Whisper/index.vue"),
      },
      {
        path: "/leacots",
        name: "Leacots",
        component: () => import("@/views/Leacots/index.vue"),
      },
      {
        path: "/album",
        name: "Album",
        component: () => import("@/views/Album/index.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/About/index.vue"),
      },
    ],
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../components/Login.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
