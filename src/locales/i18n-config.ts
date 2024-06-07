import { createI18n } from 'vue-i18n'
import en from "@/locales/dictionary/en";
import ru from "@/locales/dictionary/ru";

const i18n = createI18n({
  locale: localStorage.language ? localStorage.language : "ru", // set locale
  fallbackLocale: 'ru', // set fallback locale
  messages: { en, ru }, // set locale messages
})

export default i18n