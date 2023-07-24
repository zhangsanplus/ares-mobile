# modal 组件使用说明

调用方式一：

```ts
import Modal from '@/components/x-modal'

Modal.open({
  title: '我是标题。。。',
  content: '我是内容。。。',
  onOk() {
    console.log('ok')
  },
  onClose() {
    console.log('close')
  },
})
```

调用方式二：

```vue
<x-modal
  v-model:visible="modalVisible"
  title="我是标题。。。"
  content="我是内容。。。"
  @ok="handleModalOk"
  @close="handleModalClose"
></x-modal>

<script lang="ts" setup>
const modalVisible = ref(true)
function handleModalOk() {
  console.log('parent ok')
}
function handleModalClose() {
  console.log('parent close')
}
</script>
```
