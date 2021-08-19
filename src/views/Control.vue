<template>
  <transition name="slide-up" appear>
    <div class="control">
      <div class="wrapper">
        <transition name="slide-up-text">
          <div class="playing" v-if="!showNext">
            <div
              class="text"
              :style="{
                textDecoration: isError,
                cursor: playSetting.nowPlay ? 'pointer' : '',
              }"
              @click="toBtn()"
            >
              {{ text
              }}{{
                playSetting.showInfo && infoDate && infoDate.time
                  ? `(${infoDate.time})`
                  : ""
              }}
              <transition name="fade">
                <Loading
                  v-if="playSetting.nowPlay && playSetting.loading"
                  class="tip"
                />
              </transition>
              <transition name="fade-delay">
                <Error
                  v-if="playSetting.nowPlay && playSetting.error && !playSetting.overlap"
                  class="tip"
                />
              </transition>
            </div>
          </div>
          <div class="playing" v-else>
            <div
              class="text"
              :style="{
                textDecoration: isError,
                cursor: playSetting.nowPlay ? 'pointer' : '',
              }"
              @click="toBtn()"
            >
              {{ next
              }}{{
                playSetting.showInfo && infoDate && infoDate.time
                  ? `(${infoDate.time})`
                  : ""
              }}
              <transition name="fade">
                <Loading
                  v-if="playSetting.nowPlay && playSetting.loading"
                  class="tip"
                />
              </transition>
              <transition name="fade-delay">
                <Error
                  v-if="playSetting.nowPlay && playSetting.error && !playSetting.overlap"
                  class="tip"
                />
              </transition>
            </div>
          </div>
        </transition>
      </div>
      <div class="btn-wrapper">
        <ControlIcon type="randomPlay" />
        <ControlIcon type="stopPlay" />
        <ControlIcon type="overlapChange" />
        <ControlIcon type="autoRandomChange" />
        <ControlIcon type="loopChange" />
        <ControlIcon type="changeShowInfo" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { inject, computed, Ref, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ACTION_I18N, PlaySetting, Mark, EVENT } from '@/assets/script/type'
import mitt from '@/assets/script/mitt'
import Loading from '@/components/common/Loading.vue'
import Error from '@/components/common/Error.vue'
import ControlIcon from '@/components/Control/ControlIcon.vue'

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
    } else if (playSetting.loop === 1) {
      return t(ACTION_I18N.loopTip1)
    } else if (playSetting.loop === 2) {
      return t(ACTION_I18N.loopTip2)
    } else if (playSetting.loop === 3) {
      return t(ACTION_I18N.loopTip3)
    } else {
      return t(ACTION_I18N.noplay)
    }
  })

  const showNext = ref(false)
  const text = ref(t(ACTION_I18N.noplay))
  const next = ref('')

  watch(title, val => {
    if (showNext.value) {
      text.value = val
    } else {
      next.value = val
    }
    showNext.value = !showNext.value
  })

  const isError = computed(() => {
    return playSetting.error && !playSetting.overlap ? 'line-through' : 'none'
  })

  const infoDate = inject('infoDate') as Ref<Mark | null>

  return {
    showNext,
    text,
    next,
    isError,
    title,
    playSetting,
    infoDate
  }
}

export default {
  components: {
    Loading,
    Error,
    ControlIcon
  },
  setup() {
    const { t } = useI18n()
    const Control = initControl()

    const toBtn = () => {
      if (Control.playSetting.nowPlay) {
        mitt.emit(EVENT.nameClick, Control.playSetting.nowPlay.name)
      }
    }

    return {
      ACTION_I18N,
      t,
      ...Control,
      toBtn
    }
  }
}
</script>

<style lang="stylus" scoped>
.control
  z-index 5
  display flex
  flex-direction column
  align-items center
  justify-content center
  position sticky
  bottom 0
  background rgba(255, 255, 255, 0.7)

  .wrapper
    position relative
    height 20px
    width 80%
    margin 10px 0
    line-height 21px

    .playing
      position absolute
      top 0
      margin auto
      height 100%
      width 100%
      text-align center
      color $title-color

      .text
        display inline-block
        position relative
        userSelect none

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

@media (prefers-color-scheme dark)
  .control
    background rgba(100, 100, 100, 0.7)

    .playing
      color #ddd
</style>
