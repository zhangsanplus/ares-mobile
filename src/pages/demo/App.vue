<template>
  <div class="container bg-slate-100 text-xs overflow-hidden">
    <section class="bg-white p-4 m-4 rounded-1 ">
      <h1 text-center text-xl color-primary>
        Ares Mobile
      </h1>
      <p text-center text-gray>
        基于 Vant4 和 Vue3 的 H5 多页面前端模板
      </p>
    </section>

    <section class="bg-white p-4 m-4 rounded-1 ">
      <h3 mt-2 mb-4>
        ✨ 特性
      </h3>
      <p>1. 原子化 CSS <strong>UnoCSS</strong></p>
      <p>2. 移动端组件库 <strong>Vant</strong></p>
      <p>3. 默认配置<strong>自动导入</strong>、<strong>字体图标</strong>等常用插件</p>
      <p>4. 移动端调试插件 <strong>vconsole</strong></p>
      <p>5. 移动端适配插件 <strong>postcss-px-to-viewport</strong></p>
      <p>6. 前端规范配置 <strong>eslint</strong>、<strong>stylelint</strong>、<strong>commitlint</strong></p>
    </section>

    <section class="bg-white p-4 m-4 rounded-1">
      <h3 mt-2 mb-4>
        🔥 组件封装
      </h3>
      <div flex gap-2>
        <button
          class="btn"
          @click="visible = true"
        >
          全局组件
        </button>

        <button
          class="btn"
          @click="onClick"
        >
          函数调用
        </button>

        <a
          class="btn"
          href="./index.html"
          target="_self"
        >
          <span i-carbon-home mr-1 />
          返回首页
        </a>
      </div>
    </section>

    <section class="bg-white p-4 m-4 rounded-1">
      <h3 mt-2 mb-4>
        🌈 无限加载列表
      </h3>

      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item.id" :title="item.title" />
      </van-list>
    </section>

    <x-modal
      :visible="visible"
      title="我是标题"
      content="我是内容"
      @ok="visible = false"
      @close="visible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { getArticleList } from '@/api/article'
import Modal from '@/components/x-modal'

const visible = ref(false)

function onClick() {
  Modal.open({
    content: '感谢您的反馈，如果建议被成功采纳，我们会第一时间通知您',
  })
}

const list = ref<ArticleType.ListItem[]>([])
const loading = ref(false)
const finished = ref(false)
const form = reactive({
  title: '',
  pageNum: 1,
  pageSize: 20,
})

function onLoad() {
  ++form.pageNum
  getList()
}

async function getList() {
  loading.value = true
  try {
    const { data } = await getArticleList(form)
    list.value = form.pageNum === 1 ? data.list : [...list.value, ...data.list]
    finished.value = list.value.length >= data.count
  } catch (error) {
    console.error(error)
  }
  loading.value = false
}

getList()
</script>

<style lang="scss">
.btn {
  @apply px-4 py-2 flex items-center rounded-1 border-none text-sm text-white bg-primary hover:(bg-primary/70) active:(bg-primary/90)
}
</style>
