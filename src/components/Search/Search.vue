<template>
  <div class="search">
    <div class="search-info">
      <input
        type="text"
        v-model="searchData.value"
        @keyup.enter="btnClick"
        @keydown.esc="clear"
        @input="search()"
      />
      <div class="total">
        <transition name="fade">
          <p v-if="searchData.list.length > 0">
            {{
              searchData.index > 0
                ? `${searchData.index}/${searchData.list.length}`
                : `${searchData.list.length}`
            }}
          </p>
        </transition>
      </div>
      <div class="clear">
        <ClearIcon
          @click="clear"
          style="cursor: pointer"
          v-if="searchData.value.length > 0"
        />
        <SearchIcon v-else />
      </div>
    </div>
    <div v-if="searchData.value" class="next" @click="btnClick">
      <NextIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
import mitt from '@/assets/script/mitt'
import { EVENT } from '@/assets/script/type'
import { getCategory } from '@/assets/script/utils'
import { searchData, voiceList } from '@/store/data'
import { isShowSearch, playSetting } from '@/store/setting'
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { ClearIcon, SearchIcon, NextIcon } from '@/components/common/Icon'

const { t, te, locale } = useI18n()

watch(() => {
  return playSetting.showInfo
}, () => {
  clear()
})

const clear = () => {
  if (searchData.value.length < 1) {
    isShowSearch.value = false
  }
  searchData.value = ''
  searchData.list.length = 0
}

const search = (voiceName?: string) => {
  searchData.list.length = 0
  if (!voiceName && searchData.value.length < 1) return

  for (const voice of voiceList.value) {
    const name: string = voice.translate[locale.value]

    if (voiceName) {
      if (voice.name === voiceName) {
        searchData.list.push(voice.name)
        break
      }
    } else {
      const category = getCategory(voice.category)!
      const flag = te(`voicecategory.${category['name']}`) && Boolean(t(`voicecategory.${category['name']}`))
      if (playSetting.showHide) {
        if (name && name.toUpperCase().includes(searchData.value.toUpperCase()) && flag && !category.hide) {
          searchData.list.push(voice.name)
        }
      } else {
        if (name && name.toUpperCase().includes(searchData.value.toUpperCase()) && flag && !category.hide && !voice.hide) {
          searchData.list.push(voice.name)
        }
      }
    }
  }
}

const btnClick = () => {
  mitt.emit(EVENT.autoScroll)
}

mitt.on(EVENT.search, (name?: string) => {
  search(name)
})

// css
const width = computed(() => searchData.value ? 'calc(100% - 30px)' : '100%')
const nextBtnWidth = computed(() => searchData.value ? '30px' : '0')
const borderRadius = computed(() => searchData.value ? '' : '0 10px 10px 0')
</script>

<style lang="stylus" scoped>
.search
  display flex
  align-items center
  justify-content space-between
  width 200px
  height 30px
  margin 0 10px
  overflow hidden
  transition all 0.3s
  color #888
  background rgba(0, 0, 0, 0) !important

  .search-info
    height 100%
    width v-bind(width)
    display flex
    align-items center
    justify-content center
    transition width 0.2s

    input
      flex 1
      width 100%
      height 100%
      box-sizing border-box
      border-radius 10px 0 0 10px
      padding 0 2px 0 10px
      border 1px solid #ddd
      border-right none
      color #888
      opacity 1

      &:focus
        outline none

    .total
      display flex
      align-items center
      justify-content center
      box-sizing border-box
      height 100%
      font-size 12px
      background #fff
      border 1px solid #ddd
      border-left none
      border-right none

      p
        margin auto

    .clear
      overflow hidden
      display flex
      align-items center
      justify-content center
      box-sizing border-box
      width 24px
      height 30px
      background #fff
      border 1px solid #ddd
      border-left none
      border-right none
      border-radius v-bind(borderRadius)

      svg
        width 15px
        fill #ddd

  .next
    box-sizing border-box
    width v-bind(nextBtnWidth)
    height 100%
    border-radius 0 10px 10px 0
    border-left none
    cursor pointer
    background $hover-color
    transition width 0.2s

    svg
      width 50%
      height 50%
      padding 25%

    &:active
      background $active-color

@media (prefers-color-scheme dark)
  .search
    input, .total, .clear
      background #eee

      svg
        fill #bbb !important

    .next
      background $main-color-dark
      border-color #ccc
</style>
