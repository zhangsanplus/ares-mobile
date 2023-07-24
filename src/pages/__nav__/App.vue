<template>
  <div class="container">
    <table>
      <tr>
        <th>序号</th>
        <th>页面</th>
        <th>标题（单击打开）</th>
      </tr>
      <template v-for="(page, index) in pages" :key="page.path">
        <tr>
          <td>
            <span title="复制" @click="handleCopy(page.path)">{{ index + 1 }}</span>
          </td>
          <td>
            <span title="复制" @click="handleCopy(page.path, page.title)">{{ page.path }}</span>
          </td>
          <td>
            <a :href="`./${page.path}.html`" title="打开">{{ page.title }}</a>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script setup lang="ts">
import pages from '../../../pages.json'

function handleCopy(name: string, title?: string) {
  const pathname = location.pathname.substring(0, location.pathname.lastIndexOf('/'))
  const url = `${location.origin}${pathname}/${name}.html`
  if (title) {
    copyToClipboard(`${title}: ${url}`)
  } else {
    copyToClipboard(url)
  }
}

function copyToClipboard(text: string) {
  const textarea = document.createElement('textarea')
  document.body.appendChild(textarea)
  textarea.style.position = 'fixed'
  textarea.style.top = '10px'
  textarea.value = text
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  showToast(text)
}

function showToast(message: string) {
  const toast = document.createElement('div')
  toast.textContent = message
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    z-index: 9999;
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);
  `
  document.body.appendChild(toast)
  setTimeout(() => {
    document.body.removeChild(toast)
  }, 1000)
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f6f6;
}

table,
tr,
th,
td {
  border: 1px solid #ddd;
}

table {
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    transition: background 0.25s;

    &:hover {
      background: #f5f6f6;
    }
  }

  td,
  th {
    padding: 8px;

    &:nth-child(1) {
      text-align: center;
    }
  }

  td {
    cursor: pointer;
    user-select: text;

    &:nth-child(1),
    &:nth-child(2) {
      span {
        &:hover {
          color: rgba(0, 0, 255);
        }
      }
    }
  }
}

a {
  display: block;
  color: var(--van-primary-color);

  &:hover {
    opacity: 0.8;
  }
}
</style>
