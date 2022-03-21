<template>
  <transition name="slide-down" appear>
    <div class="header">
      <img class="logo" v-if="showLogo" ref="logo" @click="logoClick" :src="HEADER.icon || ''" @error="logoError">
      <div class="logo" v-else></div>
      <div
        class="title"
        :class="{ pointer: !playSetting.showHide && isShowPointer }"
        @click="changeHide"
      >{{ t(INFO_I18N.title) }}</div>

      <template v-for="(btn, index) in btnList" :key="index">
        <IBtn v-if="btn.url" :url="btn.url" :img="btn.img" />
      </template>

      <div class="search-btn" @click="showSearch" v-if="!isWideScreen">
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

      <transition name="search">
        <div v-if="isWideScreen" style="overflow: hidden">
          <Search />
        </div>
      </transition>
      <div class="btn" :title="t(INFO_I18N.lang)" @click="changeLang" v-if="i18n">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1269"
          width="30"
          height="30"
        >
          <path
            d="M512 0c282.773333 0 512 229.226667 512 512S794.773333 1024 512 1024 0 794.773333 0 512 229.226667 0 512 0z m169.749333 554.666667H342.250667c9.429333 217.792 89.813333 384 169.749333 384 79.914667 0 160.32-166.208 169.749333-384z m-424.917333 0l-169.386667 0.021333c15.658667 157.568 117.034667 289.92 256.853334 349.76-50.282667-85.738667-82.069333-210.346667-87.466667-349.76z m679.722667 0.021333h-169.386667c-5.397333 139.434667-37.184 264.021333-87.466667 349.738667 139.818667-59.797333 241.194667-192.170667 256.853334-349.738667zM344.32 119.573333l-4.736 2.048C202.176 182.378667 102.912 313.536 87.466667 469.333333h169.386666c5.397333-139.434667 37.184-264.042667 87.466667-349.76zM512 85.333333l-3.2 0.085334c-78.848 4.352-157.226667 169.045333-166.549333 383.914666h339.498666C672.32 251.562667 591.936 85.333333 512 85.333333z m167.701333 34.218667l3.136 5.44C731.306667 210.496 761.877333 332.8 767.146667 469.333333h169.386666c-15.637333-157.589333-117.034667-289.941333-256.853333-349.781333z"
            p-id="1270"
          />
        </svg>
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
