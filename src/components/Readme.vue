<template>
  <Collapse title="README">
    <div class="text" v-if="text.length > 0" v-html="text"></div>
    <div class="readme-icon">
      <div class="line" v-if="!playSetting.nowPlay">
        <ControlIcon type="randomPlay" />
        <div class="tip">这个按钮可以随机播放</div>
      </div>
      <div class="line" v-else>
        <ControlIcon type="stopPlay" />
        <div class="tip">这个按钮可以停止播放</div>
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

<script lang="ts">
import Collapse from './common/Collapse.vue'
import ControlIcon from './Control/ControlIcon.vue'
import { inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { PlaySetting } from '@/assets/script/type'

export default {
  components: {
    Collapse,
    ControlIcon
  },
  setup() {
    const { t } = useI18n()
    const playSetting = inject('playSetting') as PlaySetting

    const text = ref('')
    const overlap = computed(() => {
      return playSetting.overlap ? '现在可以同时播放多个按钮了' : '这个按钮可以开启重叠播放'
    })

    const autoRandom = computed(() => {
      return playSetting.autoRandom ? '现在播放结束会随机播放下一个按钮了' : '这个按钮可以开启随机连播'
    })

    const loop = computed(() => {
      if (playSetting.loop === 0) {
        return '这个按钮可以切换连续播放模式'
      } else if (playSetting.loop === 1) {
        return '现在是单曲循环模式'
      } else if (playSetting.loop === 2) {
        return '现在是分类循环模式'
      } else if (playSetting.loop === 3) {
        return '现在是全部循环模式'
      }
    })

    const showInfo = computed(() => {
      return playSetting.showInfo ? '这个按钮可以切换成分类排序' : '这个按钮可以查看按钮的出处'
    })

    return {
      t,
      playSetting,
      overlap,
      autoRandom,
      loop,
      showInfo
    }
  }
}
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
