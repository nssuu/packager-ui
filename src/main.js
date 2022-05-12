import { createApp } from 'vue'
import axios from 'axios'

import router from './router'
import App from './App.vue'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
const app = createApp(App)
app.use(router, axios)
app.mount('#app')
