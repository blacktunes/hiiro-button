<template>
  <div class="wrapper" :class="{ lowlight, highlight, disable }">
    <NewIcon class="new-icon" v-if="newIcon" />
    <img class="pic" v-if="showPic" :src="showPic" />
    <div class="left" />
    <div class="right" />
    <div class="btn">
      <div class="progress" ref="progressRef"></div>
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, ref, watch } from 'vue'
import NewIcon from './NewIcon.vue'

const watchProgress = (progressRef) => {
  const progress = ref(0)
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

  return {
    progress,
    playing
  }
}

export default {
  components: {
    NewIcon
  },
  props: {
    text: String,
    name: String,
    newIcon: Boolean,
    showPic: String,
    disable: Boolean
  },
  setup() {
    const progressRef = ref() as Ref<HTMLElement>
    const { progress, playing } = watchProgress(progressRef)

    const lowlight = ref(false)
    const highlight = ref(false)

    return {
      progressRef,
      progress,
      playing,
      lowlight,
      highlight
    }
  }
}
</script>

<style lang="stylus" scoped>
.disable
  pointer-events none

.lowlight
  &:active
    .left, .right
      border-color transparent transparent $active-color transparent !important

    .btn
      background $active-color !important

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

  &:active
    .left, .right
      transition none
      border-color transparent transparent $active-color transparent !important

      &:before
        opacity 1
        transition opacity 0.6s
        transition-delay 0.2s

    .btn
      transition none
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

  ears(direction, deg)
    transform rotate(deg)
    width 0
    height 0
    border-style solid
    border-width 0 6px 8px 6px
    border-color transparent transparent $main-color transparent
    pointer-events none
    position absolute

    if (direction == 'left')
      left 0

    if (direction == 'right')
      right 0

    top -3px

    &:before
      content ''
      position absolute
      width 0
      height 0
      border-style solid
      border-width 0 6px 8px 6px
      border-color transparent transparent $main-color transparent
      pointer-events none
      position absolute
      left -6px
      top -1px
      opacity 0

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
    box-shadow 0px 1px 2px 0px $main-color
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

    .text
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
