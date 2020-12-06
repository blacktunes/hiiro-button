<template>
  <div class="wrapper" :class="{ playing, lowlight, highlight, disable }">
    <NewIcon class="new-icon" v-if="newIcon" />
    <img class="pic" v-if="showPic" :src="showPic" />
    <div class="left" />
    <div class="right" />
    <div class="btn">
      <div class="progress" ref="progress"></div>
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref, ref, watch } from 'vue'
import { Voices } from '@/assets/script/option'
import NewIcon from './NewIcon.vue'

export default {
  components: {
    NewIcon
  },
  props: {
    text: String,
    name: String,
    newIcon: Boolean,
    showPic: String,
    lowlight: Boolean,
    highlight: Boolean,
    disable: Boolean
  },
  setup(props) {
    const progress: Ref<HTMLElement> = ref() as Ref<HTMLElement>
    let timer: any = null

    const voices: Voices = inject('voices') as Voices
    const playing = ref(false)

    watch(() => {
      for (const i in voices) {
        for (const j in voices[i].voiceList) {
          if (voices[i].voiceList[j].name === props.name) {
            return voices[i].voiceList[j].progress
          }
        }
      }
    }, (val) => {
      if (val === 0) {
        playing.value = false
        timer = setTimeout(() => {
          progress.value.style.transition = 'width 0.2s linear'
          progress.value.style.width = '0'
        }, 200)
      } else {
        playing.value = true
        clearTimeout(timer)
        timer = null
        progress.value.style.transition = 'width 0.25s linear'
        progress.value.style.width = val! + 5 + '%'
      }
    })

    return {
      progress,
      playing
    }
  }
}
</script>

<style lang="stylus" scoped>
.disable
  pointer-events none

.lowlight
  .left
    border-color transparent transparent #ccc transparent !important

  .right
    border-color transparent transparent #ccc transparent !important

  .btn
    background #ccc !important

    &:before
      width 0 !important
      height 0 !important

.highlight
  .left
    border-color transparent transparent $active-color transparent !important

  .right
    border-color transparent transparent $active-color transparent !important

  .btn
    background $active-color !important

    &:before
      width 0 !important
      height 0 !important

.wrapper
  margin 5px
  position relative

  &:active
    .left
      animation color 0.5s
      animation-fill-mode forwards

    .right
      animation color 0.5s
      animation-fill-mode forwards

    .btn
      background $active-color !important

      &:before
        transform scale(2, 1)
        opacity 1
        transition transform 0.6s, opacity 0.2s
        transition-delay 0.2s

  .new-icon
    z-index 2
    position absolute
    top -12px
    right -15px

  .pic
    position absolute
    bottom calc(100% + 10px)
    left 50%
    width 120%
    min-width 100px
    max-width 200px
    opacity 0
    transform translateX(-50%)
    pointer-events none

  .left
    transform rotate(-32deg)
    width 0
    height 0
    border-style solid
    border-width 0 6px 8px 6px
    border-color transparent transparent $main-color transparent
    pointer-events none
    position absolute
    left 0
    top -3px

  .right
    transform rotate(32deg)
    width 0
    height 0
    border-style solid
    border-width 0 6px 8px 6px
    border-color transparent transparent $main-color transparent
    pointer-events none
    position absolute
    right 0
    top -3px

  .btn
    display flex
    align-items center
    position relative
    overflow hidden
    min-height 34px
    box-sizing border-box
    border-radius 18px
    color $btn-text-color
    background $main-color
    box-shadow 0px 1px 5px 0px $main-color
    user-select none
    cursor pointer

    .progress
      position absolute
      bottom 0
      left 0
      width 0
      min-height 34px
      height 100%
      background linear-gradient(to right, $sub-color 98%, transparent 100%)

    span
      position relative
      line-height 20px
      padding 5px 15px
      word-break break-all

    &:before
      content ''
      display block
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      pointer-events none
      background-image radial-gradient(circle, $main-color 99%, transparent 100%)
      background-repeat no-repeat
      background-position 50%
      transform scale(0, 1)
      opacity 0

.playing
  .text
    animation shake 3s linear infinite

@keyframes playing
  0%
    width 0

  100%
    width 100%

@keyframes shake
  0%
    transform translateY(0px)

  20%
    transform translateY(0px)

  25%
    transform translateY(-4px)

  30%
    transform translateY(0px)

  35%
    transform translateY(-4px)

  40%
    transform translateY(0px)

  100%
    transform translateY(0px)

@keyframes color
  0%
    border-color transparent transparent $active-color transparent

  30%
    border-color transparent transparent $active-color transparent

  100%
    border-color transparent transparent $main-color transparent

@media only screen and (min-width 600px)
  .wrapper
    .pic
      transition opacity 0.5s

    &:hover
      .pic
        opacity 1
        box-shadow 0px 5px 10px 0px $main-color

      .left
        border-color transparent transparent $hover-color transparent

      .right
        border-color transparent transparent $hover-color transparent

      .btn
        background $hover-color
        box-shadow 0px 2px 10px 0px $main-color

        .text
          animation shake 3s linear infinite

@media only screen and (max-width 600px)
  .wrapper
    .pic
      transition opacity 0.5s
      transition-delay 1s

    &:active
      .pic
        opacity 1
        transition opacity 0s
        transition-delay 0s
</style>
