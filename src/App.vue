<template>
    <Header />
    <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Header from "@/components/Header/index.vue"

const router = useRouter();



</script>
<style src="@/style/base.scss"></style>

<style scoped>
</style>
