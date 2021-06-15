<template>
  <transition name="slide-up" appear>
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
        <div
          :style="{
            userSelect: 'none',
            textDecoration: isError,
            cursor: playSetting.nowPlay ? 'pointer' : ''
          }"
          @click="toBtn()"
        >
          {{ title
          }}{{
            playSetting.showInfo && infoDate && infoDate.time
              ? `(${infoDate.time})`
              : ""
          }}
        </div>
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
import { inject, computed, Ref } from 'vue'
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

  const isError = computed(() => {
    return playSetting.error ? 'line-through' : 'none'
  })

  const infoDate = inject('infoDate') as Ref<Mark | null>

  return {
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
    const {
      isError,
      title,
      playSetting,
      infoDate
    } = initControl()

    const toBtn = () => {
      if (playSetting.nowPlay) {
        mitt.emit(EVENT.nameClick, playSetting.nowPlay.name)
      }
    }

    return {
      ACTION_I18N,
      t,
      isError,
      title,
      playSetting,
      infoDate,
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

@media (prefers-color-scheme dark)
  .control
    background rgba(100, 100, 100, 0.7)

    .playing
      color #ddd
</style>
