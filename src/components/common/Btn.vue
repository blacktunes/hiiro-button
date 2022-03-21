<template>
  <div class="btn" :style="{ background }" :class="{ disabled }">
    <div
      class="left"
      :style="{
        borderColor: `transparent transparent ${background} transparent`,
      }"
      v-if="nekoMimi"
    ></div>
    <div
      class="right"
      :style="{
        borderColor: `transparent transparent ${background} transparent`,
      }"
      v-if="nekoMimi"
    ></div>
    <a :href="url" target="_blank" :style="{ color }">{{ name }}</a>
  </div>
</template>

<script lang="ts" setup>
import { nekoMimi } from '@/store/setting'

defineProps({
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
})
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/function.styl'

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
  transform translate3d(0, 0, 0)

  .left
    ears('left', -32deg)

  .right
    ears('right', 32deg)

  &:hover
    animation shake 1s ease-in

@media only screen and (max-width 600px)
  .btn:hover
    animation none
</style>
