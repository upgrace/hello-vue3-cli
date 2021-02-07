import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {UseIview} from './components/index'

import './assets/base.css'


let app = createApp(App)

app = UseIview(app)

app.use(store).use(router).mount('#app')
