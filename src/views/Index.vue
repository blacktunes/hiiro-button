<template>
  <transition name="first" appear>
    <div class="index">
      <Search />
      <Readme />
      <div ref="voice">
        <Voice />
      </div>
      <Card>
        <div style="text-align: center">{{ total }}</div>
      </Card>
      <Card>
        <div style="text-align: center">{{ playTimesText }}</div>
      </Card>
      <Card v-if="RELATED.length > 0">
        <div class="content">
          <template v-for="item in RELATED" :key="item.name">
            <Btn
              class="btn"
              :name="item.name"
              :url="item.url"
              :color="item.color"
              :background="item.background"
            />
          </template>
        </div>
      </Card>
      <Card v-if="LINK.length > 0">
        <div class="content">
          <Btn
            class="btn"
            :name="t(INFO_I18N.vtbbtn)"
            url="https://vbup-osc.github.io/vtuber-voice-button-collection/"
            background="rgb(100, 181, 246)"
          />
          <template v-for="item in LINK" :key="item.name">
            <Btn
              class="btn"
              :name="item.name"
              :url="item.url"
              :color="item.color"
              :background="item.background"
            />
          </template>
        </div>
      </Card>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import { FriendlyLink, INFO_I18N, PlaySetting } from '@/assets/script/type'
import Btn from '@/components/common/Btn.vue'
import Card from '@/components/common/Card.vue'
import Voice from '@/components/Player/Player.vue'
import Readme from '@/components/Readme.vue'
import Search from '@/components/Search/SearchCard.vue'
import { playTimes, playTimesNow } from '@/store/data'
import { playSetting } from '@/store/setting'
import { computed, ref, Ref, watch, WritableComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

// 相关链接
const RELATED: FriendlyLink[] = Setting['related'] || []
// 友链列表
const LINK: FriendlyLink[] = Setting['link'] || []

const setAnimation = (flag: boolean, voice: Ref<HTMLElement>) => {
  if (!voice.value) return flag
  if (flag) {
    voice.value.style.animation = 'voice 0.3s linear'
  } else {
    voice.value.style.animation = 'voice-restart 0.3s linear'
  }
  return !flag
}

/**
 * 切换分类模式时触发一次渐入动画
 */
const watchSettingChange = (playSetting: PlaySetting, locale: WritableComputedRef<string>, voice: Ref<HTMLElement>) => {
  let isRestart = false
  watch(() => {
    return playSetting.showInfo
  }, () => {
    isRestart = setAnimation(isRestart, voice)
  })
  watch(locale, () => {
    isRestart = setAnimation(isRestart, voice)
  })
}

const { t, locale } = useI18n()

const voice = ref() as Ref<HTMLElement>
watchSettingChange(playSetting, locale, voice)

const total = computed(() => {
  const msg = t(INFO_I18N.voiceTotalTip) + ': '
  if (playSetting.showHide) {
    return `${msg}${t(INFO_I18N.hideVoiceTotal)} ${t(INFO_I18N.hideLastDate) ? `(+${t(INFO_I18N.hideNewVoice)} · ${t(INFO_I18N.hideLastDate)})` : ''}`
  } else {
    return `${msg}${t(INFO_I18N.voiceTotal)} ${t(INFO_I18N.lastDate) ? `(+${t(INFO_I18N.newVoice)} · ${t(INFO_I18N.lastDate)})` : ''}`
  }
})

const playTimesText = computed(() => `${t(INFO_I18N.playTimes)}: ${playTimes.value}${playTimesNow.value > 0 ? `(+${playTimesNow.value})` : ''}`)
</script>

<style lang="stylus" scoped>
a
  margin 0 5px

.index
  margin 0 auto
  width 90%

  .content
    display flex
    flex-wrap wrap

@media only screen and (max-width 600px)
  .index
    width 95%
</style>
