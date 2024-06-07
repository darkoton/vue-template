import "@/assets/style/main.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import axios from './plugins/axios' //axios
// import i18n from "@/locales/i18n-config"; //i18n localization
import MySpoiler from "@/components/ui/spoiler.vue";


const app = createApp(App)

//plugins
app.use(createPinia())
app.use(router)
// app.use(axios)
// app.provide('axios', app.config.globalProperties.$axios)  // provide 'axios'


//components
app.component('MySpoiler', MySpoiler)


app.mount('#app')
