import { PlaySetting } from '@/assets/script/type'
import { reactive, ref } from 'vue'

/** 播放设置 */
const playSetting: PlaySetting = reactive({
  loading: true,
  error: false,
  nowPlay: null,
  overlap: false,
  autoRandom: false,
  loop: 0,
  showInfo: false,
  showHide: false
})
const info = localStorage.getItem('info')
if (info) playSetting.showInfo = info === 'true'

/** 是否宽屏 */
const isWideScreen = ref(window.innerWidth > 550)

window.onresize = () => {
  const temp = window.innerWidth > 550
  if (isWideScreen.value !== temp) {
    isWideScreen.value = temp
  }
}

/** 是否显示搜索栏 */
const isShowSearch = ref(false)

export { playSetting, isWideScreen, isShowSearch }
