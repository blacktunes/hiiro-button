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
const JP: any = { ...Locales['ja-JP'], voice: {}, voicecategory: {} }

CN.info = {
  ...CN.info,
  ...Setting.name.CN
}

JP.info = {
  ...JP.info,
  ...Setting.name.JP
}

for (const category of VoiceList.category) {
  if (category.translate !== undefined) {
    if (category.translate['zh-CN'] !== undefined) {
      CN.voicecategory[category.name] = category.translate['zh-CN']
    }
    if (category.translate['ja-JP'] !== undefined) {
      JP.voicecategory[category.name] = category.translate['ja-JP']
    }
  }
}

for (const voice of VoiceList.voices) {
  if (voice.translate !== undefined) {
    if (voice.translate['zh-CN'] !== undefined) {
      CN.voice[voice.name] = voice.translate['zh-CN']
    }
    if (voice.translate['ja-JP'] !== undefined) {
      JP.voice[voice.name] = voice.translate['ja-JP']
    }
  }
}

CN.voiceTotal = Object.keys(CN.voice).length.toString()
JP.voiceTotal = Object.keys(JP.voice).length.toString()

const i18n = createI18n({
  locale: /ja/i.test(navigator.language) ? 'ja-JP' : 'zh-CN',
  messages: {
    'zh-CN': CN,
    'ja-JP': JP
  }
})

createApp(App).use(router).use(i18n).mount('#app')
