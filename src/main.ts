import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import VoiceList from '@/setting/translate/voices.json'
import Locales from '@/setting/translate/locales.json'

import Setting from './setting/setting.json'
import './assets/style/transition.styl'

import { gtag } from './assets/script/gtag.js'

if (process.env.NODE_ENV === 'production' && (Setting as any).GA_ID) {
  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', (Setting as any).GA_ID)
}

const CN: any = { ...Locales['zh-CN'], voice: {}, voicecategory: {} }
const EN: any = { ...Locales['en-US'], voice: {}, voicecategory: {} }

CN.info = {
  ...CN.info,
  ...Setting.name.CN
}

EN.info = {
  ...EN.info,
  ...Setting.name.EN
}

for (const category of VoiceList.category) {
  if (category.translate !== undefined) {
    if (category.translate['zh-CN'] !== undefined) {
      CN.voicecategory[category.name] = category.translate['zh-CN']
    }
    if (category.translate['en-US'] !== undefined) {
      EN.voicecategory[category.name] = category.translate['en-US']
    }
  }
}

for (const voice of VoiceList.voices) {
  if (voice.translate !== undefined) {
    const category = VoiceList.category.find(item => {
      if (item.name === voice.category) {
        return item
      }
    })!
    if (voice.translate['zh-CN'] !== undefined && category.translate['zh-CN'] !== undefined) {
      CN.voice[voice.name] = voice.translate['zh-CN']
    }
    if (voice.translate['en-US'] !== undefined && category.translate['en-US'] !== undefined) {
      EN.voice[voice.name] = voice.translate['en-US']
    }
  }
}

CN.voiceTotal = Object.keys(CN.voice).length.toString()
EN.voiceTotal = Object.keys(EN.voice).length.toString()

const i18n = createI18n({
  locale: /ja/i.test(navigator.language) ? 'en-US' : 'zh-CN',
  messages: {
    'zh-CN': CN,
    'en-US': EN
  }
})

createApp(App).use(router).use(i18n).mount('#app')
