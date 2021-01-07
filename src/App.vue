<template>
  <div id="app">
    <VHeader />
    <router-view style="min-height: calc(100vh - 48px - 78px)" />
    <Control />
    <VFooter />
  </div>
</template>

<script lang="ts">
import { provide, reactive, ref, Ref, computed } from 'vue'
import { PlaySetting, SearchData, VoicesOrigin, VoicesCategory, VoicesItem, Mark } from '@/assets/script/type'
import Setting from '@/../setting/setting.json'
import VHeader from '@/views/Header.vue'
import Control from '@/views/Control.vue'
import VFooter from '@/views/Footer.vue'
import { CategoryList, VoicesList } from './assets/script/voices'

const CONSOLE = Setting['console'] || {}
if (CONSOLE && (CONSOLE.text || CONSOLE.img)) {
  const text = CONSOLE.text || ''
  const size = CONSOLE.size || '16px'
  const color = CONSOLE.color || ''

  const width = CONSOLE.imgWidth || '100%'
  const height = CONSOLE.imgHeight || '100%'
  const img = CONSOLE.img ? `padding-right:${width};padding-top:${height};background:url('${location.origin}/img/${CONSOLE.img}') no-repeat;background-size:100% 100%` : ''

  console.log(`%c${text}%c `, `font-size:${size};color:${color}`, img)
}

/**
 * 初始化播放设置
 */
const initPlaySetting = () => {
  const playSetting: PlaySetting = reactive({
    loading: true,
    error: false,
    nowPlay: null,
    overlap: false,
    autoRandom: false,
    loop: 0,
    showInfo: false
  })
  provide('playSetting', playSetting)

  return playSetting
}

/**
 * 获取最后更新时间和更新数量
 */
const initVoicesDate = () => {
  const lastDate = ref('')
  let temp: null | Date = null
  for (const i in VoicesList) {
    if (VoicesList[i].date) {
      const voiceDate = new Date(VoicesList[i].date!)
      if (!temp) {
        temp = voiceDate
        lastDate.value = VoicesList[i].date!
      }
      if (voiceDate > temp) {
        temp = voiceDate
        lastDate.value = VoicesList[i].date!
      }
    }
  }
  provide('lastDate', lastDate)
  provide('newVoiceNum', VoicesList.filter((item) => item.date && item.date === lastDate.value).length)
}

/**
 * 初始化语音列表
 */
const initVoicesList = (playSetting) => {
  // 获取分类排序列表
  const categoryList: VoicesCategory[] = []
  CategoryList.forEach(category => {
    const temp: VoicesCategory = { ...category, voiceList: [] }
    VoicesList.forEach(voice => {
      if (voice.category === category.name) {
        temp.voiceList.push(voice)
      }
    })
    categoryList.push(temp)
  })

  // 获取来源排序列表
  const temp1: {
    [name: string]: {
      url?: string;
      list: VoicesItem[];
    };
  } = {}
  const temp2: {
    title: string;
    voiceList: VoicesItem[];
  } = {
    title: 'unknown',
    voiceList: []
  }
  const originList: VoicesOrigin[] = []
  VoicesList.forEach(voice => {
    if (voice.mark && voice.mark.title) {
      if (temp1[voice.mark.title]) {
        temp1[voice.mark.title].list.push(voice)
      } else {
        temp1[voice.mark.title] = {
          url: voice.mark.url,
          list: [voice]
        }
      }
    } else {
      temp2.voiceList.push(voice)
    }
  })
  for (const i in temp1) {
    originList.push({
      title: i,
      url: temp1[i].url,
      voiceList: temp1[i].list
    })
  }
  originList.push(temp2)

  const voices = computed(() => playSetting.showInfo ? originList : categoryList)
  provide('voices', voices)

  const voiceList: Ref<VoicesItem[]> = computed(() => {
    const temp: VoicesItem[] = []
    voices.value.forEach((item: VoicesCategory | VoicesOrigin) => {
      item.voiceList.forEach(voice => {
        temp.push(voice)
      })
    })
    return temp
  })
  provide('voiceList', voiceList)
}

const initData = () => {
  // 需要显示的来源信息
  const infoDate: Ref<Mark | null> = ref({
    title: '',
    time: '',
    url: ''
  })
  provide('infoDate', infoDate)

  // 搜索结果
  const searchData: SearchData = reactive({
    value: '',
    list: [],
    index: 0
  })
  provide('searchData', searchData)

  // 窄屏状态下是否显示搜索栏
  const isShowSearch = ref(false)
  provide('isShowSearch', isShowSearch)
}

export default {
  components: {
    VHeader,
    Control,
    VFooter
  },
  setup() {
    const playSetting = initPlaySetting()
    initVoicesDate()
    initVoicesList(playSetting)
    initData()
  }
}
</script>

<style lang="stylus">
body
  margin 0
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)

a
  margin-left 5px
  color #888
  text-decoration none

::-webkit-scrollbar
  width 7px
  height 7px

::-webkit-scrollbar-track
  box-shadow inset 0 0 6px rgba(0, 0, 0, 0.3)
  -webkit-box-shadow inset 0 0 6px rgba(0, 0, 0, 0.3)
  background-color $sub-color

::-webkit-scrollbar-thumb
  box-shadow inset 0 0 6px rgba(0, 0, 0, 0.1)
  -webkit-box-shadow inset 0 0 6px rgba(0, 0, 0, 0.1)
  background-color $main-color

::-webkit-scrollbar-thumb:active
  background-color $active-color
</style>
