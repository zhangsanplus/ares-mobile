<template>
  <div class="container">
    <div px-4>
      <p class="text-orange-500 text-[15px]">
        纯静态页面建议直接放 <strong>public</strong> 目录下
      </p>

      <p mb-4>
        <span class="color-primary text-lg">unocss</span>
        <span class="text-stone-400 pl-2">The instant on-demand Atomic CSS engine.</span>
      </p>

      <div class="flex gap-2 mb-5">
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
          首页
        </a>
      </div>
    </div>

    <div class="px-4 bg-slate-100">
      <h3 py-4 m-0>
        无限加载列表
      </h3>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item.id" :title="item.title" />
      </van-list>
    </div>

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
