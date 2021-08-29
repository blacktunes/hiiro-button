<template>
  <transition name="slide-up" appear>
    <div class="control">
      <div class="wrapper">
        <transition name="slide-up-text">
          <div class="playing" v-if="!showNext">
            <div class="text" @click="toBtn()">
              {{
                text + time
              }}
              <transition name="fade">
                <Loading v-if="playSetting.nowPlay && playSetting.loading" class="tip" />
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
            <div class="text" @click="toBtn()">
              {{
                next + time
              }}
              <transition name="fade">
                <Loading v-if="playSetting.nowPlay && playSetting.loading" class="tip" />
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

<script lang="ts" setup>
import mitt from '@/assets/script/mitt'
import { ACTION_I18N, EVENT } from '@/assets/script/type'
import Error from '@/components/common/Error.vue'
import Loading from '@/components/common/Loading.vue'
import ControlIcon from '@/components/Control/ControlIcon.vue'
import { infoDate } from '@/store/data'
import { playSetting } from '@/store/setting'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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

const time = computed(() => playSetting.showInfo && infoDate.value && infoDate.value.time ? `(${infoDate.value.time})` : '')

const toBtn = () => {
  if (playSetting.nowPlay) {
    mitt.emit(EVENT.nameClick, playSetting.nowPlay.name)
  }
}

// css
const isError = computed(() => playSetting.error && !playSetting.overlap ? 'line-through' : 'none')
const isPlaying = computed(() => playSetting.nowPlay ? 'pointer' : '')
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
        user-select none
        text-decoration v-bind(isError)
        cursor v-bind(isPlaying)

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
