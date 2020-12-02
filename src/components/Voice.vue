<template>
  <div>
    <Search />
    <template v-for="item in voices" :key="item.name">
      <Card v-if="needToShow(item.translate)">
        <template v-slot:header>
          <div class="category">{{ t("voicecategory." + item.name) }}</div>
        </template>
        <div class="content">
          <div v-for="voice in item.voiceList" :key="voice.name">
            <VBtn
              v-if="needToShow(voice.translate)"
              :text="t('voice.' + voice.name)"
              :name="voice.name"
              :newIcon="voice.date === showNew"
              :showPic="
                needUsePicture(voice.usePicture) && !playSetting.showInfo
                  ? usePicture(voice.usePicture)
                  : null
              "
              :lowlight="
                (searchData.value && !searchData.list.includes(voice.name)) ||
                (playSetting.showInfo && !voice.mark)
              "
              :highlight="highlight === voice.name"
              :class="{
                disable: playSetting.showInfo && !voice.mark,
              }"
              @click="playSetting.showInfo ? showInfo(voice.mark) : play(voice)"
              :ref="
                (el) => {
                  el ? (btnList[voice.name] = el) : null;
                }
              "
            />
          </div>
        </div>
      </Card>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, inject, watch, Ref, ComponentPublicInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { gtag } from '@/assets/script/gtag'
import { EVENT, INFO_I18N, Player, PlayerList, PlaySetting, SearchData, Translate, Voices, VoicesItem } from '@/assets/script/option'
import mitt from '@/assets/script/mitt'
import Setting from '@/setting/setting.json'
import Card from './common/Card.vue'
import VBtn from './common/VoiveBtn.vue'
import Search from '@/components/SearchCard.vue'

export default {
  components: {
    Card,
    VBtn,
    Search
  },
  setup() {
    const { t, locale } = useI18n()

    const playSetting: PlaySetting = inject('playSetting') as PlaySetting

    // 所有按钮的引用
    const btnList: Ref<{ [x: string]: ComponentPublicInstance }> = ref({})

    const searchData: SearchData = inject('searchData') as SearchData
    const highlight = ref('')

    mitt.on(EVENT.autoScroll, () => {
      if (searchData.list && searchData.list.length > 0) {
        for (const i in btnList.value) {
          if (searchData.index + 1 > searchData.list.length) searchData.index = 0
          if (i === searchData.list[searchData.index]) {
            searchData.index++
            const scrollPos = document.documentElement.scrollTop + btnList.value[i].$el.getBoundingClientRect().top - 200
            highlight.value = i
            window.scrollTo({ top: scrollPos, behavior: 'smooth' })
            break
          }
        }
      }
    })

    watch(() => {
      return searchData.value
    }, () => {
      highlight.value = ''
    })

    const voices = inject('voices', {} as Voices)
    const showNew = inject('showNew', '')

    const playList: VoicesItem[] = []
    voices.forEach(category => {
      category.voiceList.forEach(voice => {
        playList.push(voice)
      })
    })

    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        randomPlay()
      })
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        randomPlay()
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        if (playerList.has('once')) (playerList.get('once') as Player).audio.pause()
        navigator.mediaSession.playbackState = 'paused'
      })
    }

    let timer: any = null

    /**
     * 重置播放状态
     */
    const reset = () => {
      playSetting.loading = true
      playSetting.nowPlay = null
      playSetting.error = false
    }

    const playerList: PlayerList = new Map()

    /**
     * @param voice 语音对象
     * @param category 所属分类的name
     */
    const play = (voice: VoicesItem) => {
      // GA的事件上报
      if (process.env.NODE_ENV === 'production') {
        /* eslint-disable @typescript-eslint/camelcase */
        gtag('event', '播放语音', {
          event_category: voice.name,
          event_label: voice.category,
          value: 1
        })
        /* eslint-enable */
      }
      if (!playSetting.overlap) {
        if (playerList.has('once')) (playerList.get('once') as Player).audio.pause()
        if (playSetting.nowPlay && playSetting.nowPlay.name === voice.name) {
          clearTimeout(timer)
          timer = setTimeout(() => {
            addPlayer(voice, 'once')
          }, 250)
        } else {
          addPlayer(voice, 'once')
        }
        if ('mediaSession' in navigator) {
          const meta = {
            title: t('voice.' + voice.name),
            artist: t(INFO_I18N.fullName),
            album: t(INFO_I18N.title),
            artwork: (Setting as any).mediaSession ? [{ src: `/img/${(Setting as any).mediaSession}`, sizes: '128x128' }] : []
          }
          navigator.mediaSession.metadata = new window.MediaMetadata(meta)
          navigator.mediaSession.playbackState = 'playing'
        }
      } else {
        const key = new Date().getTime()
        addPlayer(voice, key)
      }
    }

    /**
     * 把语音对象添加到MAP
     */
    const addPlayer = (voice: VoicesItem, key: any) => {
      reset()
      const path = process.env.NODE_ENV === 'production' ? `https://cdn.jsdelivr.net/gh/blacktunes/hiiro-button@master/public/voices/${voice.path}` : `voices/${voice.path}`
      playerList.set(key, {
        name: voice.name,
        audio: new Audio(path)
      })
      if (!playSetting.overlap) playSetting.nowPlay = voice
      playerList.get(key)!.audio.play()
      playerList.get(key)!.audio.onerror = () => {
        if (playerList.get(key)!.audio.src.includes('jsdelivr')) {
          playerList.get(key)!.audio.src = `voices/${voice.path}`
          playerList.get(key)!.audio.play()
        } else {
          playSetting.loading = false
          playSetting.error = true
          navigator.mediaSession.playbackState = 'paused'
        }
      }
      playerList.get(key)!.audio.oncanplay = () => {
        playSetting.loading = false
        // eslint-disable-next-line no-labels
        voices:
        for (const i in voices) {
          for (const j in voices[i].voiceList) {
            if (voices[i].voiceList[j].name === voice.name) {
              playerList.get(key)!.voicesKey = [i, j]
              const duration = playerList.get(key)!.audio.duration
              let currentTime = 0
              playerList.get(key)!.audio.ontimeupdate = () => {
                currentTime = Number(((playerList.get(key)!.audio.currentTime / duration) * 100).toFixed(0))
                let num = 0
                for (const k of playerList.keys()) {
                  if (playerList.get(k)!.name === voice.name) {
                    num++
                  }
                }
                if (num > 1) {
                  voices[i].voiceList[j].progress = 100
                } else {
                  voices[i].voiceList[j].progress = currentTime
                }
              }
              playerList.get(key)!.audio.onended = () => {
                voices[i].voiceList[j].progress = 0
                playerList.delete(key)
                if (playSetting.loop > 0) {
                  listLoop(voice)
                } else {
                  reset()
                }
                if (playSetting.autoRandom) {
                  randomPlay()
                }
              }
              // eslint-disable-next-line no-labels
              break voices
            }
          }
        }
      }
    }

    mitt.on(EVENT.randomPlay, () => {
      randomPlay()
    })

    /**
     * 随机播放失败次数
     */
    let randomErrTimes = 0
    /**
     * 随机播放
     */
    const randomPlay = () => {
      const randomList = voices[_getrRandomInt(voices.length)]
      const randomVoice = randomList.voiceList[_getrRandomInt(randomList.voiceList.length)]
      if (needToShow(randomList.translate) && needToShow(randomVoice.translate)) {
        randomErrTimes = 0
        play(randomVoice)
      } else if (randomErrTimes <= 5) {
        ++randomErrTimes
        randomPlay()
        // 连续五次不存在停止随机
      }
    }

    /**
     * 随机播放
     */
    const listLoop = (voice: VoicesItem) => {
      if (playSetting.loop === 1) {
        play(voice)
      } else if (playSetting.loop === 2) {
        const list = voices.find(voicesCategory => {
          if (voicesCategory.name === voice.category) {
            return voicesCategory.voiceList
          }
        })!.voiceList
        const nextVoice = list[getLoopIndex(voice, list)]
        if (nextVoice) {
          play(nextVoice)
        }
      } else if (playSetting.loop === 3) {
        const nextVoice = playList[getLoopIndex(voice, playList)]
        if (nextVoice) {
          play(nextVoice)
        }
      }
    }

    const getLoopIndex = (voice: VoicesItem, list: VoicesItem[]): number => {
      let index = -1
      for (const i in list) {
        if (Number(i) === list.length - 1) {
          index = 0
          break
        }
        if (list[i].name === voice.name) {
          index = Number(i) + 1
          if (!isCanPlay(list[index])) {
            index = getLoopIndex(list[index], list)
          }
          break
        }
      }
      return index
    }

    const isCanPlay = (voice: VoicesItem) => {
      return (voices.some(item => {
        return item.name === voice.category && Boolean(item.translate[locale.value])
      })) && Boolean(voice.translate[locale.value])
    }

    const infoDate = inject('infoDate') as any
    const showInfo = (showInfo) => {
      infoDate.value = showInfo
    }

    mitt.on(EVENT.stopPlay, () => {
      clearTimeout(timer)
      for (const key of playerList.keys()) {
        playerList.get(key)!.audio.pause()
        playerList.get(key)!.audio.onerror = null
        playerList.get(key)!.audio.oncanplay = null
        playerList.get(key)!.audio.ontimeupdate = null
        playerList.get(key)!.audio.onended = null
        const voicesKey = playerList.get(key)!.voicesKey
        if (voicesKey) {
          voices[voicesKey[0]].voiceList[voicesKey[1]].progress = 0
        }
      }
      playerList.clear()
      reset()
    })

    /**
     * 返回需要显示的表情包url
     */
    const usePicture = (name?: Translate): string | void => {
      if (name) {
        const lang = locale.value
        return `/voices/img/${name[lang]}`
      }
    }

    /**
     * 判断是否使用表情包
     */
    const needUsePicture = (usePicture?: Translate): boolean => {
      if (usePicture) {
        return locale.value in usePicture
      } else {
        return false
      }
    }

    /**
     * 判断是否需要显示
     */
    const needToShow = (translate: Translate): boolean => {
      return Boolean(translate[locale.value])
    }

    /**
     * 获取随机数
     */
    const _getrRandomInt = (max): number => {
      return Math.floor(Math.random() * Math.floor(max))
    }

    return {
      t,
      playSetting,
      btnList,
      searchData,
      highlight,
      voices,
      showNew,
      play,
      showInfo,
      usePicture,
      needUsePicture,
      needToShow
    }
  }
}

</script>
<style lang="stylus" scoped>
.disable
  pointer-events none

.category
  font-size 24px
  padding 14px 10px
  user-select none

.content
  display flex
  flex-wrap wrap
</style>
