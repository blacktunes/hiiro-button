<template>
  <template v-for="item in voices" :key="item.name || item.title">
    <transition-group name="fade">
      <div v-if="isShowCategory(item)">
        <Card>
          <template #header>
            <div class="category">
              <template v-if="playSetting.showInfo">
                <a :href="item['url']" target="_blank">
                  {{
                    item['title'] === "unknown" ? t("unknown") : item['title']
                  }}
                </a>
              </template>
              <template v-else>{{ t(`voicecategory.${item['name']}`) }}</template>
            </div>
          </template>
          <div class="content">
            <template v-for="voice in item.voiceList" :key="voice.name">
              <VBtn
                v-if="isShowVoice(voice)"
                :url="getDownloadUrl(voice.path)"
                :title="isShowTime(voice.mark)"
                :text="t(`voice.${voice.name}`)"
                :name="voice.name"
                :newIcon="isShowNewIcon(voice.date)"
                :showPic="getPicUrl(voice.usePicture)"
                :ref="(el) => { btnList[voice.name] = el }"
                @click.prevent="play(voice)"
              />
            </template>
          </div>
        </Card>
      </div>
    </transition-group>
  </template>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Card from '../common/Card.vue'
import VBtn from '../common/VoiceBtn.vue'
import { createPlayer, initListen, useSearch } from './Player'

const { t } = useI18n()
const btnList = reactive({})
const {
  playSetting,
  voices,
  play,
  isShowCategory,
  isShowVoice,
  isShowTime,
  isShowNewIcon,
  getPicUrl,
  getDownloadUrl
} = createPlayer(btnList)

useSearch(btnList)
initListen(btnList)
</script>

<style lang="stylus" scoped>
.category
  font-size 24px
  padding 14px 10px
  user-select none

.content
  display flex
  flex-wrap wrap
</style>
