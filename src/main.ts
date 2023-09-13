import 'virtual:uno.css'
import '@/styles/index.scss'
import { createApp } from 'vue'
import { setupRouter } from '@/routers'
import App from './App.vue'

const app = createApp(App)
// 配置路由
setupRouter(app)
// 挂载
app.mount('#app')