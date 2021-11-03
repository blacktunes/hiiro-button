<template>
  <transition name="search-card">
    <card class="search-wrapper" :class="{ 'show-search': isShowSearch }" v-if="!isWideScreen">
      <Search class="search" />
    </card>
  </transition>
</template>

<script lang="ts" setup>
import Card from '@/components/common/Card.vue'
import { isShowSearch, isWideScreen } from '@/store/setting'
import Search from './Search.vue'

</script>

<style lang="stylus" scoped>
.search-wrapper
  z-index 10
  overflow hidden
  position sticky
  top 58px
  height 0
  opacity 0
  margin-top 0
  margin-bottom 0
  transition all 0.3s
  background rgba(0,0,0,0.05)

  .search
    width 90%
    margin auto

.show-search
  height 60px
  opacity 1
  margin-top 10px
</style>
