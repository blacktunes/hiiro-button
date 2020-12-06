<template>
  <card class="search-wrapper" :class="{ 'show-search': isShowSearch }">
    <Search class="search" />
  </card>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Search from '@/components/Search.vue'
import Card from '@/components/common/Card.vue'
import { IsShowSearch } from '@/assets/script/option'

export default {
  components: {
    Search,
    Card
  },
  setup() {
    const isShowSearch: Ref<IsShowSearch> = inject('isShowSearch') as Ref<IsShowSearch>

    return {
      isShowSearch
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-wrapper
  z-index 1
  overflow hidden
  position sticky
  top 58px
  height 0
  opacity 0
  margin-top 0
  margin-bottom 0
  transition all 0.3s
  background #fff

  .search
    width 90%
    margin auto

@media only screen and (min-width 550px)
  .search-wrapper
    height 0
    opacity 0
    margin-top 0
    margin-bottom 0

@media only screen and (max-width 550px)
  .show-search
    height 60px
    opacity 1
    margin-top 10px
</style>
