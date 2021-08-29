<template>
  <transition name="fade" appear>
    <div class="footer">
      <div>
        <div class="author">
          <div>©2020</div>
          <template v-for="(item, index) in author" :key="index">
            <a style="margin-left: 5px" v-if="index > 0">&</a>
            <a style="margin-left: 5px" :href="item.url" target="_blank">{{ item.name }}</a>
          </template>
        </div>
        <div class="info">
          <template v-for="(item, index) in info" :key="index">
            <div v-html="item"></div>
          </template>
          <img style="margin: 5px 5px 0px -2px" alt="GitHub Repo stars" :src="lastUpdate">
        </div>
      </div>
      <div class="text-right">
        <div class="git">
          <IBtn class="btn" :url="githubUrl" :img="githubPng" />
          <a :href="githubUrl" target="_blank">{{ t(INFO_I18N.toGithub) }}</a>
        </div>
        <div>{{ t(INFO_I18N.notOfficial) }}</div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import githubPng from '@/assets/image/github-fill.png'
import { INFO_I18N } from '@/assets/script/type'
import IBtn from '@/components/common/IconBtn.vue'
import { useI18n } from 'vue-i18n'

const FOOTER: {
  author?: {
    name: string;
    url?: string;
  }[];
  info?: string[];
  githubUrl?: string;
} = Setting['footer']

const { t } = useI18n()

const author = FOOTER && FOOTER.author ? FOOTER.author : []
const info = FOOTER && FOOTER.info ? FOOTER.info : []
const githubUrl = FOOTER && FOOTER.githubUrl ? FOOTER.githubUrl : undefined

const lastUpdate = `https://img.shields.io/date/${(process.env.VUE_APP_LAST_UPDATE.substring(0, process.env.VUE_APP_LAST_UPDATE.length - 3))}?label=last%20update&style=social`
</script>

<style lang="stylus" scoped>
.footer
  display flex
  justify-content space-between
  flex-wrap wrap
  padding 5px
  background-color #ebebeb
  font-size 12px
  color #333

  .author
    display flex
    align-items center

  .info
    margin-top 5px
    line-height 18px

  .text-right
    text-align right

    .git
      display flex
      align-items center

      a
        margin 0

      .btn
        margin 0 5px

@media only screen and (max-width 600px)
  .footer
    flex-direction column

    .text-right
      text-align left

      .git
        display flex
        align-items center

        .btn
          order 10

@media (prefers-color-scheme dark)
  .footer
    background-color #ddd
</style>
