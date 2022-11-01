import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// ----- ElementPlus
import {elementPlus} from "@/stores/element-plus"
elementPlus(app)

// ----- Axios
import VueAxios from 'vue-axios'
import axios from "@/stores/axios";
app.use(VueAxios, axios)


// ----- 动画css
import  'animate.css';
// ----- 自定义css必须在后面否则会被其他样式给覆盖掉
import './assets/index.scss'


// ----- Vue默认
app.use(createPinia())
app.use(router)
app.mount('#app')
