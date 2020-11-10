<template>
  <div class="new-icon">
    <div>n</div>
    <div>e</div>
    <div>w</div>
  </div>
</template>

<style lang="stylus" scoped>
.new-icon
  pointer-events none
  display flex
  height 18px
  align-items center
  justify-content center
  padding 0 6px
  font-size 9px
  font-weight 700
  color $btn-text-color
  background-color $sub-color
  border-radius 20px
  div
    animation shake 2s infinite
    padding-bottom 2px
    &:nth-child(1)
      animation-delay 0.5s
    &:nth-child(2)
      animation-delay 0.6s
    &:nth-child(3)
      animation-delay 0.7s

@keyframes shake
  0%
    transform translate(0, 0)
  50%
    transform translate(0, 0)
  75%
    transform translate(0, -25%)
  100%
    transform translate(0, 0)
</style>
