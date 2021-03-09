import { CategoryItem, VoicesItem } from './type'

const jsonList = import.meta.globEager('../../../setting/translate/*.json')

let Locales: {
  'zh-CN': any
  'en-US': any
}
let CategoryList: CategoryItem[] = []
let VoicesList: VoicesItem[] = []

for (const name in jsonList) {
  if (name.endsWith('locales.json')) {
    Locales = jsonList[name].default as any
  } else if (name.endsWith('category.json')) {
    CategoryList = jsonList[name].default as any
  } else {
    const voice = jsonList[name].default as any
    VoicesList = [...VoicesList, ...voice]
  }
}

export { Locales, CategoryList, VoicesList }
