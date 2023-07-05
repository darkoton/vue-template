import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import axios from './plugins/axios'
import "@/assets/style/main.scss"
<<<<<<< HEAD
=======

>>>>>>> f39c05d4781859325d7cb72f487a2fae14095cbf


const app = createApp(App)

app.use(router)
app.use(store)
// app.use(axios)

app.mount('#app')
