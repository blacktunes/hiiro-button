<template>
  <div class="btn" :style="{ background: background }">
    <a :href="url" target="_blank" :style="{ color: color }">{{ name }}</a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    url: String,
    color: String,
    background: String
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
  overflow hidden
  min-height 34px
  box-sizing border-box
  border-radius 18px
  background $main-color
  box-shadow 0px 1px 5px 0px #ddd
  user-select none
  cursor pointer
  transition box-shadow 0.25s

  &:hover
    background $hover-color
    box-shadow 0px 2px 10px 0px $main-color

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
