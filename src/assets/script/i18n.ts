import Setting from '@/../setting/setting.json'
import { createI18n } from 'vue-i18n'
import { VoicesItem } from './type'
import { CategoryList, Locales, VoicesList, HideList } from './voices'

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

const addVoice = (list: VoicesItem[]) => {
  let CNNum = 0
  let ENNum = 0
  for (const voice of list) {
    if (voice.translate) {
      const category = CategoryList.find(item => {
        if (item.name === voice.category) {
          return item
        }
      })!
      if (voice.translate['zh-CN'] && category.translate['zh-CN']) {
        CN.voice[voice.name] = voice.translate['zh-CN']
        CNNum++
      }
      if (voice.translate['en-US'] && category.translate['en-US']) {
        EN.voice[voice.name] = voice.translate['en-US']
        ENNum++
      }
    }
  }
  return {
    CNNum,
    ENNum
  }
}

const num = addVoice(VoicesList)
CN.voiceTotal = num.CNNum.toString()
EN.voiceTotal = num.ENNum.toString()

const hideNum = addVoice(HideList)
CN.hideVoiceTotal = hideNum.CNNum.toString()
EN.hideVoiceTotal = hideNum.ENNum.toString()

/**
 * 获取音频对应语言的更新日期和更新数量
 */
const getLastDate = (list: VoicesItem[]) => {
  let CNLastDate = ''
  let ENLastDate = ''
  let CNTemp: null | Date = null
  let ENTemp: null | Date = null
  for (const i in list) {
    if (list[i].date) {
      const voiceDate = new Date(list[i].date!)
      if (list[i].translate['zh-CN'] && CategoryList.find(item => item.name === list[i].category)!.translate['zh-CN']) {
        if (!CNTemp) {
          CNTemp = voiceDate
          CNLastDate = list[i].date!
        }
        if (voiceDate > CNTemp) {
          CNTemp = voiceDate
          CNLastDate = list[i].date!
        }
      }
      if (list[i].translate['en-US'] && CategoryList.find(item => item.name === list[i].category)!.translate['en-US']) {
        if (!ENTemp) {
          ENTemp = voiceDate
          ENLastDate = list[i].date!
        }
        if (voiceDate > ENTemp) {
          ENTemp = voiceDate
          ENLastDate = list[i].date!
        }
      }
    }
  }
  return {
    CNLastDate,
    ENLastDate
  }
}

const lastDate = getLastDate(VoicesList)
CN.lastDate = lastDate.CNLastDate || ''
EN.lastDate = lastDate.ENLastDate || ''
CN.newVoice = VoicesList.filter((item) => item.date && item.date === lastDate.CNLastDate && item.translate['zh-CN'] && CategoryList.find(category => category.name === item.category)!.translate['zh-CN']).length.toString() || ''
EN.newVoice = VoicesList.filter((item) => item.date && item.date === lastDate.ENLastDate && item.translate['en-US'] && CategoryList.find(category => category.name === item.category)!.translate['en-US']).length.toString() || ''

const hideLastDate = getLastDate(HideList)
CN.hideLastDate = hideLastDate.CNLastDate || ''
EN.hideLastDate = hideLastDate.ENLastDate || ''
CN.hideNewVoice = HideList.filter((item) => item.date && item.date === hideLastDate.CNLastDate && item.translate['zh-CN'] && CategoryList.find(category => category.name === item.category)!.translate['zh-CN']).length.toString() || ''
EN.hideNewVoice = HideList.filter((item) => item.date && item.date === hideLastDate.ENLastDate && item.translate['en-US'] && CategoryList.find(category => category.name === item.category)!.translate['en-US']).length.toString() || ''

const i18n = createI18n({
  locale: /en/i.test(navigator.language) ? 'en-US' : 'zh-CN',
  messages: {
    'zh-CN': CN,
    'en-US': EN
  }
})

export default i18n
