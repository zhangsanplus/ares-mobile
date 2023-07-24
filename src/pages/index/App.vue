<template>
  <div class="container">
    <img src="@/assets/logo.png">
    <h2>Ares Mobile</h2>
    <p>基于 Vant4 和 Vue3 的 H5 多页面前端模板</p>
    <div>
      <van-button type="primary" url="https://github.com/zhangsanplus/ares-mobile">
        github
      </van-button>
      <van-button type="primary" url="./__nav__.html">
        页面导航
      </van-button>
    </div>
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

  p {
    margin-bottom: 60px;
  }

  .van-button + .van-button {
    margin-left: 10px;
  }
}
</style>
