<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item.id" :title="item.title" />
  </van-list>
</template>

<script setup lang="ts">
import { getArticleList } from '@/api/article'

const list = ref<ArticleType.ListItem[]>([])
const loading = ref(false)
const finished = ref(false)
const form = reactive({
  title: '',
  pageNum: 0,
  pageSize: 10,
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
    finished.value = true
    console.error(error)
  }
  loading.value = false
}
</script>
