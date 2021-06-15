<template>
  <div class="btn" :style="{ background }" :class="{ disabled }">
    <div
      class="left"
      :style="{
        borderColor: `transparent transparent ${background} transparent`
      }"
    />
    <div
      class="right"
      :style="{
        borderColor: `transparent transparent ${background} transparent`
      }"
    />
    <a :href="url" target="_blank" :style="{ color }">{{ name }}</a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    url: String,
    color: {
      type: String,
      default: null
    },
    background: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  margin 0
  color $btn-text-color
  padding 5px 15px

.disabled
  background #ccc !important
  cursor no-drop !important
  a
    pointer-events none
    color #666 !important

  &:hover
    box-shadow none !important
    a
      animation none !important

  .left
    border-color transparent transparent #ccc transparent !important

  .right
    border-color transparent transparent #ccc transparent !important

.btn
  display flex
  align-items center
  position relative
  min-height 34px
  margin 5px
  box-sizing border-box
  border-radius 18px
  background $main-color
  user-select none
  cursor pointer

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

  .left
    ears('left', -32deg)

  .right
    ears('right', 32deg)

  &:hover
    a
      animation shake 3s linear infinite

@media only screen and (max-width 600px)
  .btn:hover
    a
      animation none

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
</style>
