import Setting from '@/../setting/setting.json'
import { i18n } from '@/store/setting'
import { createI18n } from 'vue-i18n'
import { getCategory } from './utils'
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
  if (category.translate) {
    if (category.translate['zh-CN']) {
      CN.voicecategory[category.name] = category.translate['zh-CN']
    }
    if (category.translate['en-US']) {
      EN.voicecategory[category.name] = category.translate['en-US']
    }
  }
}

/**
 * 获取音频对应语言的数量
 */
let CNNum = 0
let ENNum = 0
let HideCNNum = 0
let HideENNum = 0
for (const voice of VoicesList) {
  if (voice.translate) {
    const category = getCategory(voice.category)!
    if (voice.translate['zh-CN'] && category.translate['zh-CN']) {
      CN.voice[voice.name] = voice.translate['zh-CN']
      if (voice.hide || category.hide) {
        HideCNNum++
      } else {
        CNNum++
      }
    }
    if (voice.translate['en-US'] && category.translate['en-US']) {
      EN.voice[voice.name] = voice.translate['en-US']
      if (voice.hide || category.hide) {
        HideENNum++
      } else {
        ENNum++
      }
    }
  }
}

CN.voiceTotal = CNNum.toString()
EN.voiceTotal = ENNum.toString()
CN.hideVoiceTotal = (CNNum + HideCNNum).toString()
EN.hideVoiceTotal = (ENNum + HideENNum).toString()

/**
 * 获取音频对应语言的更新日期和更新数量
 */
let CNLastDate = ''
let ENLastDate = ''
let CNTemp: null | Date = null
let ENTemp: null | Date = null
let hideCNLastDate = ''
let hideENLastDate = ''
let hideCNTemp: null | Date = null
let hideENTemp: null | Date = null
for (const voice of VoicesList) {
  if (voice.date) {
    const voiceDate = new Date(voice.date!)
    const category = getCategory(voice.category)!
    if (voice.translate['zh-CN'] && category.translate['zh-CN']) {
      if (!(voice.hide || category.hide)) {
        if (!CNTemp) {
          CNTemp = voiceDate
          CNLastDate = voice.date!
        }
        if (voiceDate > CNTemp) {
          CNTemp = voiceDate
          CNLastDate = voice.date!
        }
      }
      if (!hideCNTemp) {
        hideCNTemp = voiceDate
        hideCNLastDate = voice.date!
      }
      if (voiceDate > hideCNTemp) {
        hideCNTemp = voiceDate
        hideCNLastDate = voice.date!
      }
    }
    if (voice.translate['en-US'] && category.translate['en-US']) {
      if (!(voice.hide || category.hide)) {
        if (!ENTemp) {
          ENTemp = voiceDate
          ENLastDate = voice.date!
        }
        if (voiceDate > ENTemp) {
          ENTemp = voiceDate
          ENLastDate = voice.date!
        }
      }
      if (!hideENTemp) {
        hideENTemp = voiceDate
        hideENLastDate = voice.date!
      }
      if (voiceDate > hideENTemp) {
        hideENTemp = voiceDate
        hideENLastDate = voice.date!
      }
    }
  }
}

CN.lastDate = CNLastDate || ''
EN.lastDate = ENLastDate || ''
CN.hideLastDate = hideCNLastDate || ''
EN.hideLastDate = hideENLastDate || ''

CN.newVoice = VoicesList.filter((item) => item.date && item.date === CNLastDate && item.translate['zh-CN'] && CategoryList.find(category => category.name === item.category)!.translate['zh-CN']).length.toString() || ''
EN.newVoice = VoicesList.filter((item) => item.date && item.date === ENLastDate && item.translate['en-US'] && CategoryList.find(category => category.name === item.category)!.translate['en-US']).length.toString() || ''
CN.hideNewVoice = VoicesList.filter((item) => item.date && item.date === hideCNLastDate && item.translate['zh-CN'] && CategoryList.find(category => category.name === item.category)!.translate['zh-CN']).length.toString() || ''
EN.hideNewVoice = VoicesList.filter((item) => item.date && item.date === hideENLastDate && item.translate['en-US'] && CategoryList.find(category => category.name === item.category)!.translate['en-US']).length.toString() || ''

const I18N = createI18n({
  locale: (/en/i.test(navigator.language) && i18n.value) ? 'en-US' : 'zh-CN',
  messages: {
    'zh-CN': CN,
    'en-US': EN
  }
})

export default I18N
