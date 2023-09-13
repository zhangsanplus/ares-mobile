import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import type { App } from 'vue'

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

function setupRouter(app: App) {
  app.use(router)
}

export { router, setupRouter }
