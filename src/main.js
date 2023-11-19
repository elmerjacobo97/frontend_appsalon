import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const optionsSweetAlert2 = {
  confirmButtonColor: '#3A506B',
  cancelButtonColor: '#A17E6E'
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2, optionsSweetAlert2)

app.mount('#app')
