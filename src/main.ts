import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/assets/script/i18n'
import router from '@/router'
import '@/assets/style/transition.styl'
import '@/assets/style/animation.styl'
import '@/assets/script/analytics'

createApp(App).use(router).use(i18n).mount('#app')
