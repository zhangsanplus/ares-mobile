<template>
  <van-empty class="exception" image="error" description="抱歉，你无权访问这个页面。">
    <van-button type="primary" @click="goHome">
      返回首页
    </van-button>
  </van-empty>
</template>

<script setup lang='ts'>
const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.exception {
  padding-top: 15vh;
}
</style>
