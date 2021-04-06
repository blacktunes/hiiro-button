<template>
  <div class="btn" :style="{ background: background }">
    <div
      class="left"
      :style="{
        'border-color': `transparent transparent ${background} transparent`
      }"
    />
    <div
      class="right"
      :style="{
        'border-color': `transparent transparent ${background} transparent`
      }"
    />
    <a :href="url" target="_blank" :style="{ color: color }">{{ name }}</a>
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
    }
  }
}
</script>

<style lang="stylus" scoped>
a
  margin 0
  color $btn-text-color
  padding 5px 15px

.btn
  display flex
  align-items center
  position relative
  min-height 34px
  box-sizing border-box
  border-radius 18px
  background $main-color
  user-select none
  cursor pointer
  transition box-shadow 0.25s

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
    background $hover-color
    box-shadow 0 1px 10px 0 $main-color

    a
      animation shake 3s linear infinite

@media only screen and (max-width 600px)
  .btn:hover
    background $main-color
    box-shadow none

    a
      animation none

  .btn:active
    background $active-color

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
