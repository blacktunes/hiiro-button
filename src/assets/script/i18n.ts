import Setting from '@/../setting/setting.json'
import { createI18n } from 'vue-i18n'
import { CategoryList, Locales, VoicesList } from './voices'

const CN: any = { ...Locales['zh-CN'], voice: {}, voicecategory: {} }
const EN: any = { ...Locales['en-US'], voice: {}, voicecategory: {} }

const NAME = Setting['name'] || {}

CN.info = {
  ...CN.info,
  ...NAME['CN'] || {
    title: '语音按钮',
    fullName: ''
  }
}

EN.info = {
  ...EN.info,
  ...NAME['EN'] || {
    title: 'Voices Button',
    fullName: ''
  }
}

for (const category of CategoryList) {
  if (category.translate !== undefined) {
    if (category.translate['zh-CN'] !== undefined) {
      CN.voicecategory[category.name] = category.translate['zh-CN']
    }
    if (category.translate['en-US'] !== undefined) {
      EN.voicecategory[category.name] = category.translate['en-US']
    }
  }
}

for (const voice of VoicesList) {
  if (voice.translate !== undefined) {
    const category = CategoryList.find(item => {
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
  locale: /en/i.test(navigator.language) ? 'en-US' : 'zh-CN',
  messages: {
    'zh-CN': CN,
    'en-US': EN
  }
})

export default i18n
