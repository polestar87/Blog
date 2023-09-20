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
      // {
      //   path: "/helloWorld2",
      //   name: "HelloWorld2",
      //   component: () => import("../components/HelloWorld2.vue"),
      // },
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
