<template>
  <transition name="slider-up" appear>
    <div class="control">
      <div class="playing">
        <transition name="fade">
          <Loading
            v-if="playSetting.nowPlay && playSetting.loading"
            class="tip"
          />
        </transition>
        <transition name="fade-delay">
          <Error v-if="playSetting.nowPlay && playSetting.error" class="tip" />
        </transition>
        <div :style="{ 'text-decoration': isError }">
          {{ title
          }}{{
            playSetting.showInfo && infoDate && infoDate.time
              ? `(${infoDate.time})`
              : ""
          }}
        </div>
      </div>
      <div class="btn-wrapper">
        <div
          class="icon"
          :title="t(ACTION_I18N.randomplay)"
          @click="Control.randomPlay"
        >
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M689.066667 170.666667c-40.533333 0-132.266667 19.2-177.066667 119.466666C467.2 189.866667 377.6 170.666667 334.933333 170.666667 211.2 170.666667 128 266.666667 128 373.333333 128 631.466667 512 853.333333 512 853.333333s384-221.866667 384-480c0-106.666667-83.2-202.666667-206.933333-202.666666z"
            />
          </svg>
        </div>
        <div
          class="icon"
          :title="t(ACTION_I18N.stopvoice)"
          @click="Control.stopPlay"
        >
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
        <div
          class="icon"
          :title="t(ACTION_I18N.overlap)"
          @click="Control.overlapChange"
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
        <div
          class="icon"
          :title="t(ACTION_I18N.autoRandom)"
          @click="Control.autoRandomChange"
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
        <div
          class="icon"
          :title="t(ACTION_I18N.loop)"
          @click="Control.loopChange"
          :class="{ 'icon-active': playSetting.loop !== 0 }"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            v-if="playSetting.loop === 0"
          >
            <path
              d="m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
            />
          </svg>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            v-if="playSetting.loop === 1"
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
            >
              1
            </text>
          </svg>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            v-if="playSetting.loop === 2"
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
            >
              C
            </text>
          </svg>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            v-if="playSetting.loop === 3"
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
            >
              A
            </text>
          </svg>
        </div>
        <div
          class="icon"
          @click="Control.changeShowInfo"
          :class="{ 'icon-active': playSetting.showInfo }"
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M694.857143 768v73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143H365.714286q-14.857143 0-25.714286-10.857143t-10.857143-25.714286v-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143h36.571428V512h-36.571428q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V402.285714q0-14.857143 10.857143-25.714285t25.714286-10.857143h219.428571q14.857143 0 25.714286 10.857143t10.857143 25.714285v329.142857h36.571428q14.857143 0 25.714286 10.857143t10.857143 25.714286zM621.714286 109.714286v109.714285q0 14.857143-10.857143 25.714286t-25.714286 10.857143H438.857143q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V109.714286q0-14.857143 10.857143-25.714286t25.714286-10.857143h146.285714q14.857143 0 25.714286 10.857143t10.857143 25.714286z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { inject, computed, Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ACTION_I18N, EVENT, PlaySetting, Mark } from '@/assets/script/type'
import mitt from '@/assets/script/mitt'
import Loading from '@/components/common/Loading.vue'
import Error from '@/components/common/Error.vue'

const initControl = () => {
  const { t } = useI18n()
  const playSetting = inject('playSetting') as PlaySetting

  // 控制栏文字显示
  const title = computed(() => {
    if (playSetting.overlap) {
      return t(ACTION_I18N.overlapTip)
    } else if (playSetting.nowPlay) {
      return t('voice.' + playSetting.nowPlay.name)
    } else if (playSetting.autoRandom) {
      return t(ACTION_I18N.autoRandomTip)
    } else if (playSetting.loop) {
      return t(ACTION_I18N.loopTip)
    } else {
      return t(ACTION_I18N.noplay)
    }
  })

  const isError = computed(() => {
    return playSetting.error ? 'line-through' : 'none'
  })

  const randomPlay = () => {
    mitt.emit(EVENT.randomPlay)
  }

  const stopPlay = () => {
    mitt.emit(EVENT.stopPlay)
  }

  const overlapChange = () => {
    playSetting.autoRandom = false
    playSetting.overlap = !playSetting.overlap
  }

  const autoRandomChange = () => {
    playSetting.overlap = false
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

  const infoDate = inject('infoDate') as Ref<Mark | null>
  const changeShowInfo = () => {
    playSetting.showInfo = !playSetting.showInfo
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    infoDate.value = null
  }

  return {
    isError,
    title,
    playSetting,
    infoDate,
    Control: {
      randomPlay,
      stopPlay,
      overlapChange,
      autoRandomChange,
      loopChange,
      changeShowInfo
    }
  }
}

export default {
  components: {
    Loading,
    Error
  },
  setup() {
    const { t } = useI18n()
    const {
      isError,
      title,
      playSetting,
      infoDate,
      Control
    } = initControl()

    return {
      ACTION_I18N,
      t,
      isError,
      title,
      playSetting,
      infoDate,
      Control
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  margin 0
  color $title-color
  font-size 14px

.control
  z-index 5
  display flex
  flex-direction column
  align-items center
  justify-content center
  position sticky
  bottom 0
  background rgba(255, 255, 255, 0.7)

  .playing
    position relative
    margin 10px 0
    max-width 80%
    line-height 21px
    text-align center
    color $title-color

    .tip
      position absolute
      left -23px
      top 0
      height 100%

  .btn-wrapper
    display flex
    align-items center
    justify-content center
    margin-bottom 10px

.icon
  width 30px
  height 30px
  margin 0 5px
  border-radius 50%
  background $main-color
  cursor pointer

  svg
    user-select none
    height 80%
    width 80%
    padding 10%
    fill #fff

  &:hover
    box-shadow 0px 0px 10px 0px $hover-color

  &:active
    background $hover-color

.icon-active
  background #93a3b3
</style>
