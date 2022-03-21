<template>
  <div class="wrapper" :class="{ lowlight, highlight: highlight || playing, disable }">
    <NewIcon class="new-icon" v-if="newIcon" />
    <img class="pic" v-if="showPic" :src="showPic" />
    <div class="left" v-if="nekoMimi"></div>
    <div class="right" v-if="nekoMimi"></div>
    <a class="btn" :href="url" :filename="url" target="_blank" >
      <div class="progress" ref="progressRef"></div>
      <span class="text">{{ text }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watch } from 'vue'
import { nekoMimi } from '@/store/setting'
import NewIcon from './NewIcon.vue'

defineProps({
  text: String,
  name: String,
  newIcon: {
    type: Boolean,
    default: false
  },
  showPic: {
    type: String,
    default: null
  },
  disable: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    default: null
  }
})

const progressRef = ref() as Ref<HTMLElement>

const progress = ref(0)
const lowlight = ref(false)
const highlight = ref(false)

const playing = ref(false)

let timer: any = null

watch(progress, (val) => {
  if (val === 0) {
    playing.value = false
    timer = setTimeout(() => {
      progressRef.value.style.transition = 'width 0.2s linear'
      progressRef.value.style.width = '0'
    }, 200)
  } else {
    playing.value = true
    clearTimeout(timer)
    timer = null
    progressRef.value.style.transition = 'width 0.25s linear'
    progressRef.value.style.width = val + 1 + '%'
  }
})

defineExpose({ progress, lowlight, highlight })
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/function.styl'

.disable
  pointer-events none

.lowlight
  &:active
    .left, .right
      border-color transparent transparent #ccc transparent !important

  .left, .right
    border-color transparent transparent #ccc transparent !important

    &:before
      border-color transparent transparent #ccc transparent !important

  .btn
    background #ccc !important
    box-shadow none !important

    &:before
      background #ccc !important

.highlight:after
  content ''
  box-sizing border-box
  position absolute
  height calc(100% + 10px)
  width calc(100% + 10px)
  top -5px
  left -5px
  border 2px solid $main-color
  border-radius 10px
  animation highlight-fade 1s infinite
  animation-direction alternate
  pointer-events none

.wrapper
  margin 5px
  position relative
  transform translate3d(0, 0, 0)

  &:hover
    animation shake 1s ease-in

  &:active
    animation none
    transform scale(0.95)

  .new-icon
    z-index 2
    position absolute
    top -12px
    right -15px
    opacity 1
    transition opacity 0.25s

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
    ears('left', -32deg)

  .right
    ears('right', 32deg)

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
    box-shadow 0 1px 2px 0 $main-color
    user-select none
    cursor pointer
    transition all 0.2s

    .progress
      position absolute
      bottom 50%
      left 0
      width 0
      height 60%
      background linear-gradient(to right, $sub-color 98%, transparent 100%)
      transform translateY(50%)

    .text
      position relative
      line-height 20px
      padding 5px 15px
      word-break break-all

@keyframes highlight-fade
  from
    opacity 0

  to
    opacity 1

@media only screen and (min-width 600px)
  .wrapper
    .pic
      transition opacity 0.5s

    &:hover
      .new-icon
        opacity 0

      .pic
        opacity 1
        box-shadow 0 5px 10px 0 $main-color

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

@media (prefers-color-scheme dark)
  .btn
    background $main-color-dark

  .wrapper
    .btn
      background $main-color-dark
</style>
