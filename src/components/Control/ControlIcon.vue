<template>
  <template v-if="type === 'randomPlay'">
    <div class="icon" :title="t(ACTION_I18N.randomplay)" @click="randomPlay">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          d="M689.066667 170.666667c-40.533333 0-132.266667 19.2-177.066667 119.466666C467.2 189.866667 377.6 170.666667 334.933333 170.666667 211.2 170.666667 128 266.666667 128 373.333333 128 631.466667 512 853.333333 512 853.333333s384-221.866667 384-480c0-106.666667-83.2-202.666667-206.933333-202.666666z"
        />
      </svg>
    </div>
  </template>
  <template v-else-if="type === 'stopPlay'">
    <div class="icon" :title="t(ACTION_I18N.stopvoice)" @click="stopPlay">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        role="img"
        aria-hidden="true"
      >
        <path d="M18,18H6V6H18V18Z" />
      </svg>
    </div>
  </template>
  <template v-else-if="type === 'overlapChange'">
    <div
      class="icon"
      :title="t(ACTION_I18N.overlap)"
      @click="overlapChange"
      :class="{ 'icon-active': playSetting.overlap }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        role="img"
        aria-hidden="true"
      >
        <path d="M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z" />
      </svg>
    </div>
  </template>
  <template v-else-if="type === 'autoRandomChange'">
    <div
      class="icon"
      :title="t(ACTION_I18N.autoRandom)"
      @click="autoRandomChange"
      :class="{ 'icon-active': playSetting.autoRandom }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z"
        />
      </svg>
    </div>
  </template>
  <template v-else-if="type === 'loopChange'">
    <div
      class="icon"
      :title="t(ACTION_I18N.loop)"
      @click="loopChange"
      :class="{ 'icon-active': playSetting.loop !== 0 }"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" v-if="playSetting.loop === 0">
        <path
          d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
        />
      </svg>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" v-if="playSetting.loop === 1">
        <path
          d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
        />
        <text
          font-weight="bold"
          transform="matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) "
          xml:space="preserve"
          text-anchor="start"
          font-family="'Trebuchet MS', Gadget, sans-serif"
          font-size="24"
          y="21.67922"
          x="-1.13436"
        >1</text>
      </svg>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        v-else-if="playSetting.loop === 2"
      >
        <path
          d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
        />
        <text
          font-weight="bold"
          transform="matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) "
          xml:space="preserve"
          text-anchor="start"
          font-family="'Trebuchet MS', Gadget, sans-serif"
          font-size="24"
          y="21.67922"
          x="-1.13436"
        >C</text>
      </svg>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        v-else-if="playSetting.loop === 3"
      >
        <path
          d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
        />
        <text
          font-weight="bold"
          transform="matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) "
          xml:space="preserve"
          text-anchor="start"
          font-family="'Trebuchet MS', Gadget, sans-serif"
          font-size="24"
          y="21.67922"
          x="-1.13436"
        >A</text>
      </svg>
    </div>
  </template>
  <template v-else-if="type === 'changeShowInfo'">
    <div
      class="icon"
      @click="changeShowInfo"
      :class="{ 'icon-active': playSetting.showInfo }"
      :title="t(ACTION_I18N.showInfo)"
    >
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          d="M694.857143 768v73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143H365.714286q-14.857143 0-25.714286-10.857143t-10.857143-25.714286v-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143h36.571428V512h-36.571428q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V402.285714q0-14.857143 10.857143-25.714285t25.714286-10.857143h219.428571q14.857143 0 25.714286 10.857143t10.857143 25.714285v329.142857h36.571428q14.857143 0 25.714286 10.857143t10.857143 25.714286zM621.714286 109.714286v109.714285q0 14.857143-10.857143 25.714286t-25.714286 10.857143H438.857143q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V109.714286q0-14.857143 10.857143-25.714286t25.714286-10.857143h146.285714q14.857143 0 25.714286 10.857143t10.857143 25.714286z"
        />
      </svg>
    </div>
  </template>
</template>

<script lang="ts" setup>
import mitt from '@/assets/script/mitt'
import { ACTION_I18N, EVENT } from '@/assets/script/type'
import { infoDate } from '@/store/data'
import { playSetting } from '@/store/setting'
import { PropType } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
  type: String as PropType<'randomPlay' | 'stopPlay' | 'overlapChange' | 'autoRandomChange' | 'loopChange' | 'changeShowInfo'>
})

const { t } = useI18n()

const randomPlay = () => {
  mitt.emit(EVENT.randomPlay)
}

const stopPlay = () => {
  mitt.emit(EVENT.stopPlay)
}

const overlapChange = () => {
  playSetting.overlap = !playSetting.overlap
}

const autoRandomChange = () => {
  playSetting.loop = 0
  playSetting.autoRandom = !playSetting.autoRandom
}

const loopChange = () => {
  playSetting.autoRandom = false
  if (playSetting.loop < 3) {
    playSetting.loop += 1
  } else {
    playSetting.loop = 0
  }
}

const changeShowInfo = () => {
  playSetting.showInfo = !playSetting.showInfo
  localStorage.setItem('info', playSetting.showInfo.toString())
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  infoDate.value = null
}
</script>

<style lang="stylus" scoped>
.icon
  width 30px
  height 30px
  margin 0 5px
  border-radius 50%
  background $main-color
  cursor pointer
  transition all 0.2s

  svg
    user-select none
    height 80%
    width 80%
    padding 10%
    fill #fff

  &:hover
    transform scale(1.1)

  &:active
    transition none
    transform scale(1)
    background $hover-color

.icon-active
  background $icon-active-color

@media (prefers-color-scheme dark)
  .icon
    svg
      fill $title-color-dark

  .icon-active
    background #ddd
</style>
