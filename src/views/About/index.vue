<template>
  <div>
    <div class="about-content">
      <div class="w1000">
        <div class="item info">
          <div class="title">
            <h3>我的介绍</h3>
          </div>
          <div class="cont">
            <img src="@/assets/img/xc_img1.jpg">
            <div class="per-info">
              <p>
                <span class="name">小明</span><br />
                <span class="age">24岁</span><br />
                <span class="Career">设计师, 前端工程师</span><br />
                <span class="interest">爱好旅游,打游戏</span>
              </p>
            </div>
          </div>
        </div>
        <div class="item tool">
          <div class="title">
            <h3>我的技能</h3>
          </div>
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs6 layui-col-sm3 layui-col-md3">
                <div class="cont-box">
                  <img src="@/assets/img/gr_img2.jpg">
                  <p>80%</p>
                </div>
              </div>
              <div class="layui-col-xs6 layui-col-sm3 layui-col-md3">
                <div class="cont-box">
                  <img src="@/assets/img/gr_img3.jpg">
                  <p>80%</p>
                </div>
              </div>
              <div class="layui-col-xs6 layui-col-sm3 layui-col-md3">
                <div class="cont-box">
                  <img src="@/assets/img/gr_img4.jpg">
                  <p>80%</p>
                </div>
              </div>
              <div class="layui-col-xs6 layui-col-sm3 layui-col-md3">
                <div class="cont-box">
                  <img src="@/assets/img/gr_img5.jpg">
                  <p>80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item contact">
          <div class="title">
            <h3>联系方式</h3>
          </div>
          <div class="cont">
            <img src="@/assets/img/erweima.jpg">
            <div class="text">
              <p class="WeChat">微信：<span>1234567890</span></p>
              <p class="qq">qq：<span>123456789</span></p>
              <p class="iphone">电话：<span>123456789</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.about-content {
  background: #faf8fb;



  .item {
    padding-bottom: 100px;

    h3 {
      font-size: 24px;
      color: #3f2863;
      line-height: 100px;
    }
  }

  .item.info .cont {
    overflow: hidden;
  }

  .item.info img {
    float: left;
    height: 220px;
    margin-right: 86px;
  }

  .item.info p {
    line-height: 50px;
    margin-top: 15px;
  }

  .item.info p {
    font-size: 16px;
  }

  .item.tool .cont-box {
    text-align: center;
  }

  .item.tool .cont-box img {}

  .item.tool .cont-box p {
    line-height: 56px;
  }

  .item.contact .cont {
    overflow: hidden;
  }

  .item.contact .cont img {
    width: 110px;
    height: 110px;
    float: left;
    margin: 0 100px;
  }

  .item.contact .cont .text {
    line-height: 36px;
  }
}
</style>
