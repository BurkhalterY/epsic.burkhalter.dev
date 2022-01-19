import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueGtag from 'vue-gtag-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'prismjs/themes/prism.css'

createApp(App)
	.use(VueGtag, { property: { id: "G-S0S5QEJLMW" }})
	.use(router)
	.mount('#app')
