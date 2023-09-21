<script setup lang="ts">


</script>

<template>
  <div class="footer-wrap">
    <div class="footer w1000">
      <div class="qrcode">
        <img src="@/assets/img/erweima.jpg">
      </div>
      <div class="practice-mode">
        <img src="@/assets/img/down_img.jpg">
        <div class="text">
          <h4 class="title">我的联系方式</h4>
          <p>微信<span class="WeChat">1234567890</span></p>
          <p>手机<span class="iphone">1234567890</span></p>
          <p>邮箱<span class="email">1234567890@qq.com</span></p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.w1000 {
    max-width: 1000px!important;
    margin: 0 auto;
}
.footer-wrap {
  border-top: 1px solid #402863;
}
.footer {
  padding: 60px 0 80px 0;
  position: relative;
  overflow: hidden;
}
.footer .qrcode {
  float: left;
}
.footer .practice-mode {
  position: absolute;
  right: 0;
  overflow: hidden;
}
.footer .practice-mode img {
  float: left;
  padding-right: 28px;
}
.footer .practice-mode .text {
  color: #3f2863;
  float: left;
}
.footer .practice-mode .text h4 {
  font-size: 20px;
  line-height: 60px;
}
.footer .practice-mode .text p {
  line-height: 32px;
}
.footer .practice-mode .text p span {
  padding-left: 24px;
}
</style>
