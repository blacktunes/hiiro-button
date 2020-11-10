<template>
  <transition name="slider-up" appear>
    <div class="control">
      <div class="playing" v-if="!playSetting.showInfo">
        <transition name="fade">
          <loading
            v-if="playSetting.nowPlay && playSetting.loading"
            class="tip"
          />
        </transition>
        <transition name="fade-delay">
          <error v-if="playSetting.nowPlay && playSetting.error" class="tip" />
        </transition>
        <div :style="{ 'text-decoration': isError }">{{ title }}</div>
      </div>
      <div v-else class="info-wrapper">
        <div v-if="infoDate.title">
          <div>
            {{ infoDate.title
            }}{{ infoDate.time ? "(" + infoDate.time + ")" : "" }}
          </div>
          <a v-if="infoDate.url" :href="infoDate.url" target="_blank">{{
            infoDate.url
          }}</a>
        </div>
      </div>
      <div class="btn-wrapper">
        <div
          class="btn"
          :style="{
            width: playSetting.showInfo ? '0px' : '200px',
            opacity: playSetting.showInfo ? '0' : '1',
          }"
        >
          <div
            class="icon"
            :title="t(ACTION_I18N.randomplay)"
            @click="randomPlay"
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
          <div
            class="icon"
            :title="t(ACTION_I18N.loop)"
            @click="loopChange"
            :class="{ 'icon-active': playSetting.loop }"
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
                d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z"
              />
            </svg>
          </div>
        </div>
        <div
          class="icon"
          @click="changeShowInfo"
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
import { inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ACTION_I18N, EVENT, PlaySetting } from '@/assets/script/option'
import mitt from '@/assets/script/mitt'
import Loading from '@/components/common/Loading.vue'
import Error from '@/components/common/Error.vue'

export default {
  components: {
    Loading,
    Error
  },
  setup() {
    const { t } = useI18n()
    const playSetting: PlaySetting = inject('playSetting') as PlaySetting

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
      playSetting.loop = false
      playSetting.autoRandom = !playSetting.autoRandom
    }

    const loopChange = () => {
      playSetting.autoRandom = false
      playSetting.loop = !playSetting.loop
    }

    const infoDate = inject('infoDate') as any
    const changeShowInfo = () => {
      playSetting.showInfo = !playSetting.showInfo
      infoDate.value = {}
    }

    return {
      ACTION_I18N,
      t,
      isError,
      title,
      playSetting,
      infoDate,
      randomPlay,
      stopPlay,
      overlapChange,
      autoRandomChange,
      loopChange,
      changeShowInfo
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

  .info-wrapper
    margin 10px 0
    max-width 90%
    line-height 21px
    text-align center
    color $title-color
    word-wrap break-word

  .btn-wrapper
    display flex
    align-items center
    justify-content center
    margin-bottom 10px

    .btn
      overflow hidden
      display flex
      align-items center
      justify-content center
      transition all 0.3s

      .icon
        flex-shrink 0

.icon
  width 30px
  height 30px
  margin 0 5px
  border-radius 50%
  background $main-color
  cursor pointer

  svg
    height 80%
    width 80%
    padding 10%
    fill #fff

  &:hover
    box-shadow 0px 0px 10px 0px $sub-color

  &:active
    background $title-color

.icon-active
  background $sub-color
</style>
