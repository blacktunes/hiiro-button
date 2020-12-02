<template>
  <transition name="fade" appear>
    <div class="waterfall">
      <transition-group name="fade">
        <div
          v-for="(col, index) in list"
          :key="'col' + index"
          class="col"
          :ref="
            (el) => {
              el ? (refList[index] = el) : null;
            }
          "
        >
          <transition-group name="slider">
            <div class="item" v-for="item in col" :key="item">
              <slot :item="item" name="item"></slot>
            </div>
          </transition-group>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, reactive, watch, nextTick, computed, onUnmounted } from 'vue'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 150
    }
  },
  setup(props) {
    const refList: HTMLElement[] = reactive([])
    const list: any[] = reactive([])
    const line = ref(0)
    let first = true

    const sleep = (interval: number) => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          resolve()
        }, interval)
      })
    }

    const waterfallInit = (isSearch = true) => {
      line.value = Math.floor(document.documentElement.clientWidth / props.width) || 1
      list.length = 0
      for (let i = 0; i < line.value; i++) {
        list.push([])
      }
      if (first || isSearch) {
        nextTick(async () => {
          refList.forEach(item => {
            item.style.flex = `0 0 ${1 / line.value * 100}%`
          })
          let temp = 0
          for (const i in props.data) {
            list[temp].push(props.data[i])
            temp++
            if (temp === line.value) {
              temp = 0
            }
            await sleep(10)
          }
          first = false
        })
      } else {
        let temp = 0
        for (const i in props.data) {
          list[temp].push(props.data[i])
          temp++
          if (temp === line.value) {
            temp = 0
          }
        }
        nextTick(async () => {
          refList.forEach(item => {
            item.style.flex = `0 0 ${1 / line.value * 100}%`
          })
        })
      }
    }

    const dataTemp = computed(() => JSON.parse(JSON.stringify(props.data)))

    watch(dataTemp, () => {
      waterfallInit()
    })

    waterfallInit()
    window.onresize = () => {
      const temp = Math.floor(document.documentElement.clientWidth / props.width) || 1
      if (temp !== line.value) {
        waterfallInit(false)
      }
    }

    onUnmounted(() => {
      window.onresize = null
    })

    return {
      refList,
      list,
      line
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.waterfall
  display flex
  flex-wrap wrap
  align-items flex-start

  .col
    overflow hidden

    .item
      overflow hidden
      margin 0
</style>
