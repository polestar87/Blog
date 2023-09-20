<template>
    <h1>Home首页</h1>
    <el-row>
        <el-button type="primary" @click="goToPage('HelloWorld')"
            >HelloWorld</el-button
        >
    </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router';

const currentView = useRouter();

const goToPage = (page) => {
    // 跳转
    currentView.push({ name: page });
};



</script>

<style scoped>
</style>
