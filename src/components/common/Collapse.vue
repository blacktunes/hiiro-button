<template>
  <Card>
    <template #header>
      <div class="title" @click="changeShow">
        <div class="text">{{ title }}</div>
        <div class="icon" :class="{ show: isShow }">
          <NextIcon />
        </div>
      </div>
    </template>
    <div class="collapse" v-show="isShow">
      <div class="collapse-item">
        <slot></slot>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import Card from '@/components/common/Card.vue'
import { NextIcon } from '@/components/common/Icon'
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  }
})

const isShow = ref(false)
const changeShow = () => {
  isShow.value = !isShow.value
}
</script>

<style lang="stylus" scoped>
.title
  display flex
  align-items center
  user-select none
  cursor pointer

  .text
    flex 1
    padding-left 10px
    height 35px
    line-height 35px
    font-size 16px

  .icon
    flex 0 0 35px
    display block
    width 35px
    height 35px
    transition transform 0.2s

    svg
      height 50%
      width 50%
      padding 25%

:deep(.card-text)
  padding 0 !important

.collapse
  overflow hidden
  transition height 0.2s

  .collapse-item
    padding 15px 10px

.show
  transform rotate(90deg)
</style>
