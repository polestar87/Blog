<script setup>
import { Delete } from "@element-plus/icons-vue";
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const list = [
  {
    path: "/home",
    name: "文章",
  },
  {
    path: "/whisper",
    name: "微语",
  },
  {
    path: "/leacots",
    name: "留言",
  },
  {
    path: "/album",
    name: "相册",
  },
  {
    path: "/about",
    name: "关于",
  },
];
const isClose = ref(true)
const name = ref('小明')
</script>
<template>
  <div class="header">
    <div class="menu-btn" @click="isClose = !isClose">
      <div class="menu" :class="{on: isClose}"></div>
    </div>
    <h1 class="logo">
      <img src="@/assets/logo.png" alt="" />
    </h1>
    <div class="nav">
      <div v-for="item in list" class="nav-li" :class="{ active: route.path === item.path }">
        {{ item.name }}
      </div>
    </div>
    <ul class="layui-nav header-down-nav" v-if="isClose">
      <li
        class="layui-nav-item"
        v-for="item in list"
        :class="{ active: route.path === item.path }"
      >
      {{ item.name }}
      </li>
    </ul>
    <p class="welcome-text">
      欢迎来到{{ name }}的博客
    </p>
  </div>
</template>
<style scoped src="./header.scss"></style>

<style scoped></style>
