import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios'
import pinia from '@/stores/index'
import '@/styles/index.scss'

// 路由鉴权
// import '@/router/permission'

var app = createApp(App)
app.config.globalProperties.Axios = Axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(pinia)
  .mount('#app')
