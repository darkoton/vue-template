import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // router
import { createPinia } from "pinia";
// import axios from './plugins/axios' //axios
// import i18n from "@/locales/i18n-config"; //i18n localization
import Clipboard from "v-clipboard";
import MySpoiler from "@/components/ui/spoiler.vue";

import "@/assets/style/main.scss";

const pinia = createPinia();
const app = createApp(App);

app.component("MySpoiler", MySpoiler);

app.use(Clipboard);

app.use(router); // router
app.use(pinia); // pinia
// app.use(axios) //axios
// app.use(i18n); //i18n localization

app.mount("#app");
