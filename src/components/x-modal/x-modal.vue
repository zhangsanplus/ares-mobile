<template>
  <div v-if="visible" class="x-modal-wrap" @click.self="handleClose">
    <div class="x-modal" :class="{ 'hidden-title': !title }">
      <h3 v-if="title" class="x-modal-header">
        {{ title }}
      </h3>
      <div class="x-modal-body">
        <span>{{ content }}</span>
      </div>
      <div class="x-modal-footer">
        <button class="x-modal-btn" @click="handleOk">
          {{ okText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="x-modal">
import { computed } from 'vue'

const props = withDefaults(defineProps<ModalProps>(), {
  okText: '好的',
})

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'ok'): void
  (e: 'close'): void
}>()

interface ModalProps {
  visible: boolean
  content: string
  title?: string
  okText?: string
}

const visible = computed<boolean>({
  get() {
    return props.visible
  },
  set(val) {
    emit('update:visible', val)
  },
})

function handleOk() {
  visible.value = false
  emit('ok')
}

function handleClose() {
  visible.value = false
  emit('close')
}
</script>

<style lang="scss" scoped>
.x-modal {
  position: relative;
  width: 320px;
  margin-top: -10vh;
  padding: 26px 0;
  text-align: center;
  background-color: #fff;
  border-radius: 12px;

  &-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 75%);
  }

  &-header {
    margin: 0;
    padding: 5px 20px;
    color: #333;
    font-weight: bold;
    font-size: 18px;
  }

  &-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 30px 26px;
    color: #888;
    font-size: 16px;
    line-height: 24px;
  }

  &-footer {
    padding: 0 30px;
  }

  &-btn {
    width: 250px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 50px;
    background: var(--color-primary);
    border: none;
    border-radius: 25px;
  }

  &.hidden-title {
    .x-modal-body {
      min-height: 88px;
    }
  }
}
</style>