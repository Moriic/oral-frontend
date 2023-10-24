import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios'
var app = createApp(App)
app.config.globalProperties.Axios = Axios

app.use(router).mount('#app')
