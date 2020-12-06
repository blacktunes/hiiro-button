<template>
  <div id="app">
    <VHeader />
    <router-view style="min-height: calc(100vh - 48px - 67px)" />
    <Control v-if="showControl" />
    <VFooter />
  </div>
</template>

<script lang="ts">
import { provide, reactive, ref, watch, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { IsShowSearch, PlaySetting, SearchData, Voices, VoicesCategory } from '@/assets/script/option'
import Setting from '@/setting/setting.json'
import VHeader from '@/views/Header.vue'
import Control from '@/views/Control.vue'
import VFooter from '@/views/Footer.vue'
import VoiceList from '@/setting/translate/voices.json'

export default {
  components: {
    VHeader,
    Control,
    VFooter
  },
  setup() {
    const lastDate = ref('')
    let temp
    for (const i in VoiceList.voices) {
      if (VoiceList.voices[i].date) {
        const voiceDate = new Date(VoiceList.voices[i].date!)
        if (!temp) {
          temp = voiceDate
        }
        if (voiceDate > temp) {
          temp = voiceDate
          lastDate.value = VoiceList.voices[i].date!
        }
      }
    }
    provide('lastDate', lastDate)

    const voices: Voices = reactive([])
    VoiceList.category.forEach(category => {
      const temp: VoicesCategory = { ...category, voiceList: [] }
      VoiceList.voices.forEach(voice => {
        if (voice.category === category.name) {
          temp.voiceList.push(voice)
        }
      })
      voices.push(temp)
    })
    provide('voices', voices)

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

    const infoDate = ref({
      title: '',
      time: '',
      url: ''
    })
    provide('infoDate', infoDate)

    const searchData: SearchData = reactive({
      value: '',
      list: [],
      index: 0
    })
    provide('searchData', searchData)

    const isShowSearch: Ref<IsShowSearch> = ref(false)
    provide('isShowSearch', isShowSearch)

    // 是否显示控制栏
    const route = useRoute()
    const showControl = ref(false)
    watch(route, () => {
      // 路由改变后重置搜索
      isShowSearch.value = false
      if (!isShowSearch.value) {
        searchData.value = ''
        searchData.list.length = 0
      }

      if (route.path === '/') {
        showControl.value = true
      } else {
        showControl.value = false
      }
    })

    if ((Setting as any).console && ((Setting as any).console.text || (Setting as any).console.img)) {
      const text = (Setting as any).console.text || ''
      const size = (Setting as any).console.size || '16px'
      const color = (Setting as any).console.color || ''

      const width = (Setting as any).console.imgWidth || '100%'
      const height = (Setting as any).console.imgHeight || '100%'
      const img = (Setting as any).console.img ? `padding-right:${width};padding-top:${height};background:url('${location.origin}/img/${(Setting as any).console.img}') no-repeat;background-size:100% 100%` : ''

      console.log(`%c${text}%c `, `font-size:${size};color:${color}`, img)
    }

    return {
      showControl
    }
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
