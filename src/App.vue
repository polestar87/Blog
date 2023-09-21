<template>
    <Header />
    <router-view></router-view>
    <Footer />
</template>

<script setup>
import { useRouter } from 'vue-router';
import Header from "@/components/Header/index.vue"
import Footer from "@/components/Footer/index.vue"
const router = useRouter();



</script>
<style src="@/style/base.scss"></style>
<style src="@/style/layui.scss"></style>
<style src="@/style/font-face.scss"></style>



<style scoped>
</style>
