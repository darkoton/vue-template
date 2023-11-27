import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router
// import store from './store/store' // vuex
// import axios from './plugins/axios' //axios
// import i18n from "@/locales/i18n-config"; //i18n localization
import VueClipboard from 'vue-clipboard2'

import "@/assets/style/main.scss"


const app = createApp(App)

app.use(VueClipboard) // router
app.use(router) // router
// app.use(store) // vuex
// app.use(axios) //axios
// app.use(i18n); //i18n localization


app.mount('#app')
