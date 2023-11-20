import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { defaultConfig, plugin } from '@formkit/vue'
import { useToast } from 'vue-toast-notification'
import config from '../formkit.config'

import 'vue-toast-notification/dist/theme-sugar.css'

const optionsSweetAlert2 = {
  confirmButtonColor: '#3A506B',
  cancelButtonColor: '#A17E6E'
}

const $toast = useToast({
  position: 'top-right',
  duration: 3000
})

const app = createApp(App)

app.provide('toast', $toast) // provide toast to all components
app.use(createPinia())
app.use(router)
app.use(VueSweetalert2, optionsSweetAlert2)
app.use(plugin, defaultConfig(config))

app.mount('#app')
