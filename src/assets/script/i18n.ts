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

/**
 * 获取音频总数
 */
function getVoiceTotal(obj: { [name: string]: string }) {
  let num = 0
  for (const i in obj) {
    if (obj[i]) num += 1
  }
  return num.toString()
}
CN.voiceTotal = getVoiceTotal(CN.voice)
EN.voiceTotal = getVoiceTotal(EN.voice)

/**
 * 获取音频对应语言的更新日期和更新数量
 */
let CNLastDate = ''
let ENLastDate = ''
let CNTemp: null | Date = null
let ENTemp: null | Date = null
for (const i in VoicesList) {
  if (VoicesList[i].date) {
    const voiceDate = new Date(VoicesList[i].date!)
    if (VoicesList[i].translate['zh-CN'] && CategoryList.find(item => item.name === VoicesList[i].category)!.translate['zh-CN']) {
      if (!CNTemp) {
        CNTemp = voiceDate
        CNLastDate = VoicesList[i].date!
      }
      if (voiceDate > CNTemp) {
        CNTemp = voiceDate
        CNLastDate = VoicesList[i].date!
      }
    }
    if (VoicesList[i].translate['en-US'] && CategoryList.find(item => item.name === VoicesList[i].category)!.translate['en-US']) {
      if (!ENTemp) {
        ENTemp = voiceDate
        ENLastDate = VoicesList[i].date!
      }
      if (voiceDate > ENTemp) {
        ENTemp = voiceDate
        ENLastDate = VoicesList[i].date!
      }
    }
  }
}
CN.lastDate = CNLastDate || ''
EN.lastDate = ENLastDate || ''
CN.newVoice = VoicesList.filter((item) => item.date && item.date === CNLastDate && item.translate['zh-CN'] && CategoryList.find(category => category.name === item.category)!.translate['zh-CN']).length.toString() || ''
EN.newVoice = VoicesList.filter((item) => item.date && item.date === ENLastDate && item.translate['en-US'] && CategoryList.find(category => category.name === item.category)!.translate['en-US']).length.toString() || ''

const i18n = createI18n({
  locale: /en/i.test(navigator.language) ? 'en-US' : 'zh-CN',
  messages: {
    'zh-CN': CN,
    'en-US': EN
  }
})

export default i18n
