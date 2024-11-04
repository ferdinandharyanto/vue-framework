import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './pages/todo/components/pokeList.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
