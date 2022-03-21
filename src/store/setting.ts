import { PlaySetting } from '@/assets/script/type'
import { reactive, ref } from 'vue'
import Setting from '@/../setting/setting.json'

const i18n = ref(Setting['i18n'] ?? true)
const nekoMimi = ref(Setting['neko_mimi'] ?? true)

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

export { i18n, nekoMimi, playSetting, isWideScreen, isShowSearch }
