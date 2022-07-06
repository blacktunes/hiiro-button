<template>
  <transition name="slide-down" appear>
    <div class="header">
      <img
        class="logo"
        v-if="showLogo"
        ref="logo"
        @click="logoClick"
        :src="HEADER.icon || ''"
        @error="logoError"
      />
      <div class="logo" v-else></div>
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

      <div class="search-btn" @click="showSearch" v-if="!isWideScreen">
        <SearchIcon />
      </div>

      <transition name="search">
        <div v-if="isWideScreen" style="overflow: hidden">
          <Search />
        </div>
      </transition>
      <div
        class="btn"
        :title="t(INFO_I18N.lang)"
        @click="changeLang"
        v-if="i18n"
      >
        <I18NIocn />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import bilibiliPng from '@/assets/image/bilibili-fill.png'
import twitterPng from '@/assets/image/twitter-fill.png'
import youtubePng from '@/assets/image/youtube-fill.png'
import { INFO_I18N } from '@/assets/script/type'
import { I18NIocn, SearchIcon } from '@/components/common/Icon'
import IBtn from '@/components/common/IconBtn.vue'
import Search from '@/components/Search/Search.vue'
import { searchData } from '@/store/data'
import { i18n, isShowSearch, isWideScreen, playSetting } from '@/store/setting'
import { computed, onMounted, ref, Ref } from 'vue'
import { useI18n } from 'vue-i18n'

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

const btnList = [
  {
    url: HEADER.youtube,
    img: youtubePng
  },
  {
    url: HEADER.twitter,
    img: twitterPng
  },
  {
    url: HEADER.bilibili,
    img: bilibiliPng
  }
]

// 点击图标时的放大动画
const logo = ref() as Ref<HTMLElement>
const logoClick = onLogoClick(logo)

const showLogo = ref(!!HEADER.icon)
const logoError = () => {
  showLogo.value = false
}

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

// 初次加载时获取localStorage的语言设定
onMounted(() => {
  if (i18n.value) {
    const lang = localStorage.getItem('lang')
    if (lang && ['zh-CN', 'en-US'].includes(lang)) locale.value = lang
    document.title = t(INFO_I18N.title)
  }
})
</script>

<style lang="stylus" scoped>
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
    background $main-color
    cursor pointer
    transition transform 0.2s

    svg
      height 70%
      width 70%
      padding 15%
      fill #fff

    &:hover
      box-shadow 0px 0px 5px 0px #fff
      transform scale(1.1)

    &:active
      transition none
      transform scale(1)

@media (prefers-color-scheme dark)
  .header
    background linear-gradient(to right, $main-color-dark, $sub-color-dark), rgba(100, 100, 100, 0.8)
</style>
