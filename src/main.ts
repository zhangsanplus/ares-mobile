import 'virtual:uno.css'
import './styles/index.scss'
import { createApp } from 'vue'
import { setupGlobalComponents } from '@/components'
import { setupGlobalDirectives } from '@/directives'
import { setupRouter } from '@/routers'
import { setupStore } from '@/store'
import App from './App.vue'

const app = createApp(App)

// 配置 store
setupStore(app)
// 注册全局组件
setupGlobalComponents(app)
// 注册全局指令
setupGlobalDirectives(app)
// 配置路由
setupRouter(app)

app.mount('#app')
