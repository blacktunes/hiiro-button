<template>
  <transition name="fade" appear>
    <div class="index">
      <Search />
      <Voice />
      <Card>
        <div style="text-align: center">
          {{ t(INFO_I18N.voiceTotalTip) }}: {{ t(INFO_I18N.voiceTotal)
          }}{{ lastDate ? `(${lastDate})` : "" }}
        </div>
      </Card>
      <Card>
        <div class="content">
          <Btn
            class="btn"
            :name="t(INFO_I18N.vtbbtn)"
            url="https://vtbbtn.org/"
            background="rgb(100, 181, 246)"
          />
          <template v-for="item in friendlyLinkList" :key="item.name">
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

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { FriendlyLink, INFO_I18N } from '@/assets/script/option'
import Search from '@/components/SearchCard.vue'
import Voice from '@/components/Voice.vue'
import Card from '@/components/common/Card.vue'
import Btn from '@/components/common/Btn.vue'
import { inject } from 'vue'

export default {
  components: {
    Search,
    Voice,
    Card,
    Btn
  },
  setup() {
    const { t } = useI18n()
    const lastDate = inject('lastDate', '')

    const friendlyLinkList: FriendlyLink[] = [
      {
        name: '七奈按钮',
        url: 'http://kaguranana.moe/',
        background: '#c4afd0'
      }
    ]

    return {
      t,
      lastDate,
      friendlyLinkList,
      INFO_I18N
    }
  }
}
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

    .btn
      margin 5px
      transition background 0.2s

@media only screen and (max-width 600px)
  .index
    width 95%
</style>
