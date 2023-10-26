import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios'
var app = createApp(App)
app.config.globalProperties.Axios = Axios

app.use(router).use(ElementPlus,{ size: 'small', zIndex: 3000 }).mount('#app')
