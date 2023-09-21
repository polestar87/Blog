<script setup>
import { ref, shallowRef, onMounted } from 'vue'


const componentId = ref();
const tab = [
  {
    name: '设计文章',
    component: 'DesignArticle',
  },
  {
    name: '前端文章',
    component: 'FrontArticle',
  },
  {
    name: '旅游杂记',
    component: 'TravelMiscellany',
  }
]
function handleTab(item) {
  componentId.value = item.component;
}
const list = ref([])
onMounted(async () => {
  list.value = [
    {
      img: (await import("@/assets/img/sy_img1.jpg")).default,
      title: '空间立体效果图，完美呈现最终效果',
      type: '设计文章',
      content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在',
    },
    {
      img: (await import("@/assets/img/sy_img2.jpg")).default,
      title: '空间立体效果图，完美呈现最终效果',
      type: '设计文章',
      content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'
    },
    {
      img: (await import("@/assets/img/sy_img3.jpg")).default,
      title: '空间立体效果图，完美呈现最终效果',
      type: '设计文章',
      content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'
    },
    {
      img: (await import("@/assets/img/sy_img4.jpg")).default,
      title: '空间立体效果图，完美呈现最终效果',
      type: '设计文章',
      content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'
    },
    {
      img: (await import("@/assets/img/sy_img5.jpg")).default,
      title: '空间立体效果图，完美呈现最终效果',
      type: '设计文章',
      content: '室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在'
    }
  ];
});


</script>

<template>
  <div class="banner">
    <div class="cont w1000">
      <div class="title">
        <h3>MY <br> BLOG</h3>
        <h4>well-balanced heart</h4>
      </div>
      <div class="amount">
        <p>
          <span class="text">访问量:</span>
          <span class="access">1000</span>
        </p>
        <p>
          <span class="text">日志:</span>
          <span class="access">1000</span>
        </p>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="cont w1000">
      <div class="title">
        <span v-for="(item, index) in tab" class="layui-breadcrumb" @click="handleTab">
          <span class="layui-breadcrumb-title">{{ item.name }}</span>
          <span v-show="index<2">|</span>
        </span>
        <!-- <span class="layui-breadcrumb" lay-separator="|">
          <a href="javascript:;" class="active">设计文章</a>
          <a href="javascript:;">前端文章</a>
          <a href="javascript:;">旅游杂记</a>
        </span> -->
      </div>
      <div class="list-item">
        <div class="item" v-for="item in list">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img">
                  <img :src="item.img" alt="">
                </div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>{{ item.title }}<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>{{ item.type }}</h5>
                  <p>{{ item.content }}</p>
                  <div class="go-icon"></div>
                  <!-- <a href="details.html" class="go-icon"></a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>

  </div>
  
</template>


<style scoped src="./home.scss"></style>

<style scoped lang="scss"></style>
