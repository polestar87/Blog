<template>
  <h1>这是登录页</h1>
  sadjasjfhsafhasfjkashfjkashjkd
  <div> 
    <el-row>
      <el-button type="primary">Primary</el-button>
    </el-row>
  
    <el-row>
      <el-button type="success" plain>Success</el-button>
    </el-row>
  
    <el-row>
      <el-button type="info" round>Info</el-button>
    </el-row>
  
    <el-row>
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
  
  
  </div>
</template>

<script setup>
import {
  Delete
} from '@element-plus/icons-vue'

</script>

<style scoped>

</style>
