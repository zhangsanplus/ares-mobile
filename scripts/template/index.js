function renderVueFile(pagePath, pageName) {
  return `<template>
  <div class="container">
    ${pageName || pagePath}
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
</script>

<style lang="scss">
body {
  background-color: #f5f6f6;
}
</style>`
}

function renderMainFile() {
  return `import 'virtual:uno.css'
import '@/styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`
}

function renderHtmlFile(pagePath, pageName) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <meta name="format-detection" content="telephone=no" />
  <title>${pageName}</title>
  <%- VITE_DEV_TOOLS_SCRIPT %>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="./${pagePath}/main.ts"></script>
</body>

</html>`
}

module.exports = {
  renderVueFile,
  renderMainFile,
  renderHtmlFile,
}
