import XModal from './x-modal/x-modal.vue'
import type { App } from 'vue'

const components: Record<string, Component> = {
  XModal,
}

export function setupGlobalComponents(app: App) {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })
}
