import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'bootstrap'
import 'prismjs/themes/prism.css'

createApp(App)
  .use(router)
  .mount('#app')
