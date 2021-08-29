<template>
  <Collapse title="README">
    <div class="text" v-if="README.length > 0" v-html="README"></div>
    <div class="readme-icon">
      <div class="line" v-if="!playSetting.nowPlay">
        <ControlIcon type="randomPlay" />
        <div class="tip">{{ t(README_I18N.randomPlay) }}</div>
      </div>
      <div class="line" v-else>
        <ControlIcon type="stopPlay" />
        <div class="tip">{{ t(README_I18N.stop) }}</div>
      </div>
      <div class="line">
        <ControlIcon type="overlapChange" />
        <div class="tip">{{ overlap }}</div>
      </div>
      <div class="line">
        <ControlIcon type="autoRandomChange" />
        <div class="tip">{{ autoRandom }}</div>
      </div>
      <div class="line">
        <ControlIcon type="loopChange" />
        <div class="tip">{{ loop }}</div>
      </div>
      <div class="line">
        <ControlIcon type="changeShowInfo" />
        <div class="tip">{{ showInfo }}</div>
      </div>
    </div>
  </Collapse>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import { README_I18N } from '@/assets/script/type'
import { playSetting } from '@/store/setting'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Collapse from './common/Collapse.vue'
import ControlIcon from './Control/ControlIcon.vue'

const README = Setting['readme'] || ''

const { t } = useI18n()

const overlap = computed(() => {
  return playSetting.overlap ? t(README_I18N.overlapOn) : t(README_I18N.overlapOff)
})

const autoRandom = computed(() => {
  return playSetting.autoRandom ? t(README_I18N.autoRandomOn) : t(README_I18N.autoRandomOff)
})

const loop = computed(() => {
  if (playSetting.loop === 1) {
    return t(README_I18N.loop1)
  } else if (playSetting.loop === 2) {
    return t(README_I18N.loop2)
  } else if (playSetting.loop === 3) {
    return t(README_I18N.loop3)
  } else {
    return t(README_I18N.loop0)
  }
})

const showInfo = computed(() => {
  return playSetting.showInfo ? t(README_I18N.showInfoOn) : t(README_I18N.showInfoOff)
})
</script>

<style lang="stylus" scoped>
.text
  margin 0 5px 10px 5px
  padding-bottom 10px
  border-bottom 1px solid #eeeeee

.readme-icon
  display flex
  flex-wrap wrap

  .line
    flex 0 0 auto
    display flex
    align-items center
    margin 5px 10px 5px 0

    .tip
      margin-left 5px
      height 30px
      line-height 30px
</style>
