<script setup>
import {ref, onMounted} from 'vue'

const list = ref([])
const personage = ref(
  {
    name: '小林',
    avatar: '@/assets/img/header2.png'
  }
)
onMounted(async () => {
  list.value = [
    {
      mm: '12:25',
      date: '2018/06/08',
      content: '一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样。',
      img: (await import("@/assets/img/wy_img1.jpg")).default,
      NumbeLikes: 1200,
      NumberComments: 1200,
      children: [
        {
          img: (await import("@/assets/img/header.png")).default,
          txt: '敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久 不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！',
          name: '肖战',
          time: '2018/06/06'
        }
      ]
    }
  ]
})

</script>

<template>
    <div class="content whisper-content">
      <div class="cont">
        <div class="whisper-list">
          <!-- <div class="item-box">
            <div class="item">
              <div class="whisper-title">
                <i className="iconfont arrow-icon">
                  &#xe637;
                </i>
                <span class="hour">12:25</span>
                <span class="date">2018/06/08</span>
              </div>
              <p class="text-cont">
                一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样。
              </p>
              <div class="img-box">
                <img src="../res/img/wy_img1.jpg">
              </div>
              <div class="op-list">
                <p class="like"><i class="layui-icon layui-icon-praise"></i><span>1200</span></p>
                <p class="edit"><i class="layui-icon layui-icon-reply-fill"></i><span>1200</span></p>
                <p class="off"><span>展开</span><i class="layui-icon layui-icon-down"></i></p>
              </div>
            </div>
            <div class="review-version layui-hide">
              <div class="form">
                <img src="../res/img/header2.png">
                <form class="layui-form" action="">
                  <div class="layui-form-item layui-form-text">
                    <div class="layui-input-block">
                      <textarea name="desc" class="layui-textarea"></textarea>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-input-block" style="text-align: right;">
                      <button class="layui-btn definite">確定</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="list-cont">
                <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div>
                <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div>
                <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- <div class="item-box">
            <div class="item">
              <div class="whisper-title">
                <i class="layui-icon layui-icon-date"></i><span class="hour">12:25</span><span
                  class="date">2018/06/08</span>
              </div>
              <p class="text-cont">
                一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样。
              </p>
              <div class="img-box">
                <img src="../res/img/wy_img2.jpg">
                <img src="../res/img/wy_img3.jpg">
                <img src="../res/img/wy_img4.jpg">
              </div>
              <div class="op-list">
                <p class="like"><i class="layui-icon layui-icon-praise"></i><span>1200</span></p>
                <p class="edit"><i class="layui-icon layui-icon-reply-fill"></i><span>1200</span></p>
                <p class="off"><span>展开</span><i class="layui-icon layui-icon-down"></i></p>
              </div>
            </div>
            <div class="review-version layui-hide">
              <div class="form">
                <img src="../res/img/header2.png">
                <form class="layui-form" action="">
                  <div class="layui-form-item layui-form-text">
                    <div class="layui-input-block">
                      <textarea name="desc" class="layui-textarea"></textarea>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-input-block" style="text-align: right;">
                      <button class="layui-btn definite">確定</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="list-cont">
                <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div>
                <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div>
                <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <div class="item-box" v-for="item in list">
            <div class="item">
              <div class="whisper-title">
                <i className="iconfont arrow-icon">
                  &#xe637;
                </i>
                <span class="hour">{{ item.mm }}</span>
                <span class="date">{{ item.date }}</span>
              </div>
              <p class="text-cont">
                {{ item.content }}
                <!-- 一直听说牛油果吃起来像肥皂、肥肉，虽然很难吃，但是价格却很贵，我还是想尝试一下。今天公司新到了新西兰牛油果，这是新西兰牛油果是第一次在中国上市，个头比普通牛油果大了一倍，被誉为“超牛果”。好奇心驱使我尝了一颗，第一次吃牛油果没有见识，切开牛油果费了好大劲，切成了这样。 -->
              </p>
              <div class="img-box">
                <img :src="item.img">
              </div>
              <div class="op-list">
                <p class="like">
                  <i class="iconfont">
                    &#xe61e;
                  </i>
                  <span>{{ item.NumbeLikes }}</span>
                </p>
                <p class="edit">
                  <i class="iconfont">
                    &#xe68d;
                  </i>
                  <span>{{ item.NumberComments  }}</span>
                </p>
                <p class="off" off='true'>
                  <span>收起</span>
                  <i class="iconfont">&#xe61d;</i>
                </p>
              </div>
            </div>
            <div class="review-version">
              <div class="form">
                <img src="@/assets/img/header2.png">
                <form class="layui-form" action="">
                  <div class="layui-form-item layui-form-text">
                    <div class="layui-input-block">
                      <textarea name="desc" class="layui-textarea"></textarea>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-input-block" style="text-align: right;">
                      <button class="layui-btn definite">確定</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="list-cont">
                <!-- <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div> -->
                <!-- <div class="cont">
                  <div class="img">
                    <img src="../res/img/header.png" alt="">
                  </div>
                  <div class="text">
                    <p class="tit"><span class="name">吳亦凡</span><span class="data">2018/06/06</span></p>
                    <p class="ct">敢问大师，师从何方？上古高人呐逐一地看完你的作品后，我的心久久
                      不能平静！这世间怎么可能还有如此精辟的作品？我不敢相信自己的眼睛。自从改革开放以后，我就以为再也不会有任何作品能打动我，没想到今天看到这个如此精妙绝伦的作品好厉害！</p>
                  </div>
                </div> -->
                <div class="cont" v-for="it in item.children">
                  <div class="img">
                    <img :src="it.img" alt="">
                  </div>
                  <div class="text">
                    <p class="tit">
                      <span class="name">{{ it.name }}</span>
                      <span class="data">{{ it.time }}</span>
                    </p>
                    <p class="ct">{{ it.txt }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="demo" style="text-align: center;"></div>
      </div>
    </div>
</template>


<style src="./whisper.scss" scoped></style>
<style scoped lang="scss">

</style>
