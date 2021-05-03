<template>
  <transition name="slide-down" appear>
    <div class="header">
      <transition name="logo" appear>
        <div class="logo" ref="logo" @click="logoClick">
          {{ icon }}
        </div>
      </transition>
      <div
        class="title"
        :class="{ pointer: !playSetting.showHide && isShowPointer }"
        @click="changeHide"
      >
        {{ t(INFO_I18N.title) }}
      </div>
      <template v-for="(btn, index) in btnList" :key="index">
        <IBtn v-if="btn.url" :url="btn.url" :img="btn.img" />
      </template>
      <div class="search-btn" @click="showSearch">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8859"
          width="30"
          height="30"
        >
          <path
            d="M995.209792 859.621209c17.352203 17.350157 28.086685 41.318034 28.086685 67.807339 0 52.928466-42.916439 95.869465-95.869465 95.869465-26.463722 0-50.429553-10.734482-67.781756-28.086685l0 0L578.68426 714.24726c-57.097416 33.703613-123.432217 53.401234-194.509019 53.401234-211.783451 0-383.472741-171.688267-383.472741-383.472741S172.390767 0.703011 384.176264 0.703011s383.472741 171.687244 383.472741 383.471718c0 71.076802-19.696598 137.41058-53.402257 194.483436L995.209792 859.621209 995.209792 859.621209zM384.176264 96.54587c-158.831448 0-287.605324 128.772852-287.605324 287.62886 0 158.832472 128.772852 287.606347 287.605324 287.606347S671.781588 543.007201 671.781588 384.17473C671.779541 225.318722 543.008736 96.54587 384.176264 96.54587z"
            p-id="8860"
          />
        </svg>
      </div>
      <Search class="search" ref="search" />
      <div class="btn" :title="t(INFO_I18N.lang)" @click="changeLang">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          role="img"
          aria-hidden="true"
        >
          <path
            d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
          />
        </svg>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, inject, onMounted, Ref, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { INFO_I18N, PlaySetting, SearchData, EVENT } from '@/assets/script/type'
import IBtn from '@/components/common/IconBtn.vue'
import Search from '@/components/Search/Search.vue'
import Setting from '@/../setting/setting.json'
import { useRouter } from 'vue-router'
import mitt from '@/assets/script/mitt'

const HEADER: {
  icon?: string;
  youtube?: string;
  twitter?: string;
  bilibili?: string;
} = Setting['header'] || {}

const onLogoClick = (logo: Ref<HTMLElement>) => {
  let isRestart = false
  const logoClick = () => {
    if (!logo.value) return
    if (isRestart) {
      logo.value.style.animation = 'logo 1s'
    } else {
      logo.value.style.animation = 'logo-restart 1s'
    }
    isRestart = !isRestart
  }

  return logoClick
}

export default {
  components: {
    IBtn,
    Search
  },
  setup() {
    const btnList = [
      {
        url: HEADER.youtube,
        img: require('../assets/image/youtube-fill.png')
      },
      {
        url: HEADER.twitter,
        img: require('../assets/image/twitter-fill.png')
      },
      {
        url: HEADER.bilibili,
        img: require('../assets/image/bilibili-fill.png')
      }
    ]

    // 点击图标时的放大动画
    const logo = ref() as Ref<HTMLElement>
    const logoClick = onLogoClick(logo)

    const isShowSearch = inject('isShowSearch') as Ref<boolean>

    const searchData: SearchData = inject('searchData') as SearchData

    /**
     * 显示/隐藏搜索并重置搜索
     */
    const showSearch = () => {
      isShowSearch.value = !isShowSearch.value
      if (!isShowSearch.value) {
        searchData.value = ''
        searchData.list.length = 0
      }
    }

    const { t, locale } = useI18n()

    /**
     * 切换语言
     */
    const changeLang = () => {
      searchData.value = ''
      searchData.list.length = 0
      if (locale.value === 'en-US') {
        locale.value = 'zh-CN'
        localStorage.setItem('lang', 'zh-CN')
        document.title = t(INFO_I18N.title)
      } else {
        locale.value = 'en-US'
        localStorage.setItem('lang', 'en-US')
        document.title = t(INFO_I18N.title)
      }
    }

    const playSetting = inject('playSetting') as PlaySetting
    const changeHide = () => {
      if (!isShowPointer.value || playSetting.showHide) return
      playSetting.showHide = true
      if (!isShowSearch.value) {
        searchData.value = ''
        searchData.list.length = 0
      }
    }

    const isShowPointer = computed(() => {
      return Number(t(INFO_I18N.hideVoiceTotal)) > Number(t(INFO_I18N.voiceTotal))
    })

    const search = ref()
    const router = useRouter()

    // 初次加载时获取localStorage的语言设定
    onMounted(() => {
      const lang = localStorage.getItem('lang')
      if (lang) locale.value = lang
      document.title = t(INFO_I18N.title)

      router.isReady()
        .then(() => {
          if (router.currentRoute.value.query['k']) {
            isShowSearch.value = true
            searchData.value = router.currentRoute.value.query['k'] as string
            (search.value as any).search()
            nextTick(() => {
              if (searchData.list.length > 0) {
                mitt.emit(EVENT.autoScroll)
              }
            })
          }
        })
    })

    return {
      icon: HEADER.icon || '',
      btnList,
      logo,
      logoClick,
      t,
      showSearch,
      changeLang,
      changeHide,
      isShowPointer,
      playSetting,
      search,
      INFO_I18N
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo-enter-active
  animation logo 1s
  animation-delay 0.5s

.pointer
  cursor pointer

.header
  z-index 5
  display flex
  align-items center
  position sticky
  top 0
  height 48px
  background linear-gradient(to right, $main-color, $sub-color), rgba(255, 255, 255, 0.8)

  *
    flex-shrink 0

  .logo
    display block
    width 35px
    height 35px
    font-size 25px
    line-height 35px
    margin 0 10px
    text-align center
    user-select none
    animation logo 1s
    animation-delay 0.5s

  .title
    color #eee
    font-size 20px
    margin-right 10px
    user-select none

  .search-btn
    width 30px
    height 30px
    margin 0 5px
    border-radius 50%
    background rgba(255, 255, 255, 0.5)

    svg
      width 60%
      height 60%
      padding 20%
      fill #666

    &:active
      background rgba(255, 255, 255, 0.6)
      box-shadow 0px 0px 10px 0px $sub-color

  .btn
    flex-shrink 0
    width 30px
    height 30px
    margin 0 10px 0 auto
    border-radius 50%
    background rgba(245, 193, 187, 0.5)
    cursor pointer

    svg
      height 70%
      width 70%
      padding 15%
      fill #fff

    &:hover
      box-shadow 0px 0px 5px 0px #fff

    &:active
      background rgba(245, 193, 187, 0.6)

@media only screen and (min-width 550px)
  .search-btn
    display none

@media only screen and (max-width 550px)
  .search-btn
    display block

  .search
    width 0px
    margin 0
    opacity 0

@media (prefers-color-scheme dark)
  .header
    background linear-gradient(to right, $main-color-dark, $sub-color-dark), rgba(100, 100, 100, 0.8)
</style>
