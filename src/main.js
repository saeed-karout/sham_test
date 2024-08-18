
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import '../node_modules/flowbite-vue/dist/index.css'


const app = createApp(App)

// Create the Pinia instance
const pinia = createPinia()
pinia.use(piniaPluginPersist)









// Use the router
app.use(router)

// Use the Pinia store
app.use(pinia)

// Mount the Vue app to the DOM
app.mount('#app')

