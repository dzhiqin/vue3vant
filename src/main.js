
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vueWechatTitle from 'vue-wechat-title'
import "normalize.css"
import "./assets/css/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueWechatTitle)
app.mount('#app')
