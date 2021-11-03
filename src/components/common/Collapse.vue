<template>
  <Card>
    <template #header>
      <div class="title" @click="changeShow">
        <div class="text">{{ title }}</div>
        <div class="icon" :class="{ show: isShow }">
          <svg
            t="1616130580549"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2219"
            width="16"
            height="16"
          >
            <path
              d="M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z"
              p-id="2220"
            />
          </svg>
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
