<template>
  <div class="container">
    <img src="@/assets/logo.png">
    <h2>Ares Mobile</h2>
    <p>基于 Vant4 和 Vue3 的 H5 多页面前端模板</p>
    <div class="nav">
      <van-button type="primary" url="https://github.com/zhangsanplus/ares-mobile/tree/mpa">
        github
      </van-button>
      <van-button type="primary" url="./__toc__.html">
        页面目录
      </van-button>
    </div>

    <p style="color: #aaa;">
      PC端建议打开 <strong style="color: #a0a0a0;">F12</strong> 在移动端模式下访问
    </p>
  </div>
</template>

<script setup lang="ts">
console.log('drop console test')
</script>

<style lang="scss">
.container {
  padding-top: 15vh;
  text-align: center;

  img {
    width: 80px;
  }

  .nav {
    margin: 30px auto;
  }

  .van-button + .van-button {
    margin-left: 10px;
  }
}
</style>
