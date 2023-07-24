/* eslint-disable @typescript-eslint/no-use-before-define */
import { h, render } from 'vue'
import XModal from './x-modal.vue'
import type { App } from 'vue'

interface XModalProps {
  visible?: boolean
  title?: string
  content: string
  okText?: string
  onClose?: () => void
  onOk?: () => void
}

function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function'
}

const Modal = {
  install(app: App) {
    app.component(XModal.name, XModal)
  },
  open(config: XModalProps) {
    let container: HTMLElement | null = document.createElement('div')

    const handleOk = () => {
      if (vm.component) {
        vm.component.props.visible = false
      }

      if (isFunction(config.onOk)) {
        config.onOk()
      }
    }

    const handleClose = () => {
      if (container) {
        render(null, container)
        document.body.removeChild(container)
      }
      container = null
      if (isFunction(config.onClose)) {
        config.onClose()
      }
    }

    const defaultConfig = {
      visible: true,
      onOk: handleOk,
      onClose: handleClose,
    }

    const vm = h(XModal, {
      ...config,
      ...defaultConfig,
    })

    render(vm, container)
    document.body.appendChild(container)

    return {
      close: handleClose,
    }
  },
}

export default Modal
