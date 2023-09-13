<template>
  <div class="container bg-slate-100 text-xs overflow-hidden">
    <section class="bg-white p-4 m-4 rounded-1 ">
      <h1 text-center text-xl color-primary>
        Ares Mobile
      </h1>
      <p text-center text-gray>
        基于 Vant4 和 Vue3 的 H5 移动端模板
      </p>
    </section>

    <section class="bg-white p-4 m-4 rounded-1 ">
      <h3 mt-2 mb-4>
        ✨ 特性
      </h3>
      <p>1. <a href="https://github.com/zhangsanplus/ares-mobile" class="underline">单页面SPA</a>和<a href="https://github.com/zhangsanplus/ares-mobile/tree/mpa" class="underline">多页面MPA</a>模板适用于不同的需求</p>
      <p>2. 移动端组件库 - <strong>Vant</strong></p>
      <p>3. 原子化 CSS - <strong>UnoCSS</strong></p>
      <p>4. 应用程序级 JavaScript 的语言 - <strong>TypeScript</strong></p>
      <p>5. 默认配置<strong>自动导入</strong>、<strong>字体图标</strong>等常用插件</p>
      <p>6. 移动端调试插件 - <strong>eruda</strong></p>
      <p>7. 移动端适配插件 - <strong>postcss-px-to-viewport</strong></p>
      <p>8. 前端规范配置 - <strong>eslint</strong>、<strong>stylelint</strong>、<strong>commitlint</strong></p>
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
          自定义组件
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

    <section class="bg-white p-2 m-4 rounded-1">
      <van-tabs v-model:active="active">
        <van-tab title="无限加载">
          <scroll-list />
        </van-tab>
        <van-tab title="幸运抽奖">
          <luck-draw />
        </van-tab>
      </van-tabs>
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
import Modal from '@/components/x-modal'
import XModal from '@/components/x-modal/x-modal.vue'
import LuckDraw from './components/luck-draw.vue'
import ScrollList from './components/scroll-list.vue'

const visible = ref(false)
const active = ref(0)

function onClick() {
  Modal.open({
    title: 'Ares Moblie',
    content: '基于 Vue3 和 Vant4 的H5多页面模板，让开发变得更简单。',
  })
}
</script>