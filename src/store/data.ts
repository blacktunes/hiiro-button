import { Mark, SearchData, VoicesCategory, VoicesItem, VoicesOrigin } from '@/assets/script/type'
import { CategoryList, VoicesList } from '@/assets/script/voices'
import { computed, reactive, Ref, ref } from 'vue'
import { playSetting } from './setting'

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
  originList.unshift({
    title: i,
    url: temp1[i].url,
    voiceList: temp1[i].list
  })
}
originList.push(temp2)

/** 语音渲染列表 */
const voices = computed(() => playSetting.showInfo ? originList : categoryList)

/** 语音顺序列表 */
const voiceList: Ref<VoicesItem[]> = computed(() => {
  const temp: VoicesItem[] = []
  voices.value.forEach((item: VoicesCategory | VoicesOrigin) => {
    item.voiceList.forEach(voice => {
      temp.push(voice)
    })
  })
  return temp
})

/** 当前播放的来源信息 */
const infoDate: Ref<Mark | null> = ref({
  title: '',
  time: '',
  url: ''
})

/** 搜索结果 */
const searchData: SearchData = reactive({
  value: '',
  list: [],
  index: 0
})

const playTimes = ref(0)
const play = localStorage.getItem('play')
if (play) playTimes.value = Number(play) || 0

const playTimesNow = ref(0)

export { infoDate, searchData, voices, voiceList, playTimes, playTimesNow }
