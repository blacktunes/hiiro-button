import Setting from '@/../setting/setting.json'
import { gtag } from '@/assets/script/analytics/gtag'
import mitt from '@/assets/script/mitt'
import { EVENT, INFO_I18N, Mark, Player, PlayerList, PlaySetting, SearchData, Translate, Voices, VoicesCategory, VoicesItem, VoicesOrigin } from '@/assets/script/type'
import { getrRandomInt } from '@/assets/script/utils'
import { inject, reactive, ref, Ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const MEDIA = Setting['mediaSession']
const CDN = Setting['CDN']
const GA_ID = Setting['GA_ID']

const useSearch = (btnList) => {
  const searchData: SearchData = inject('searchData') as SearchData
  // 需要高亮显示的name
  const highlight = ref('')

  // 搜索数据改变时重新匹配高亮低亮
  watch(searchData, (data) => {
    for (const i in btnList) {
      if (!btnList[i]) continue
      if (data.value.length > 0) {
        btnList[i].lowlight = !data.list.includes(i)
      } else {
        btnList[i].lowlight = false
      }
      btnList[i].highlight = i === highlight.value
    }
  })
  // 搜索栏文字改变时清除高亮
  watch(() => searchData.value, (newVal, oldVal) => {
    if (newVal !== oldVal) {
      searchData.index = 0
    }
    highlight.value = ''
  })

  // 滚动到高亮的DOM
  mitt.on(EVENT.autoScroll, () => {
    if (searchData.list && searchData.list.length > 0) {
      for (const i in btnList) {
        if (searchData.index + 1 > searchData.list.length) searchData.index = 0
        if (i === searchData.list[searchData.index]) {
          searchData.index++
          const scrollPos = document.documentElement.scrollTop + btnList[i].$el.getBoundingClientRect().top - 200
          highlight.value = i
          window.scrollTo({ top: scrollPos, behavior: 'smooth' })
          break
        }
      }
    }
  })

  return { searchData, highlight }
}

const getBtnList = () => {
  // 所有按钮的引用
  const btnList: { [name: string]: any } = reactive({})
  const setBtnList = (name: string, el) => {
    btnList[name] = el
  }

  return { btnList, setBtnList }
}

const createPlayer = (btnList) => {
  const { t, te, locale } = useI18n()

  const playSetting: PlaySetting = inject('playSetting') as PlaySetting

  const voices = inject('voices', ref([]) as Ref<Voices>)
  const voiceList = inject('voiceList', ref([]) as Ref<VoicesItem[]>)
  const infoDate = inject('infoDate') as Ref<Mark | null>

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
    infoDate.value = null
  }

  const playerList: PlayerList = new Map()

  /**
   * 播放语音
   * @param voice 语音对象
   * @param category 所属分类的name
   */
  const play = (voice: VoicesItem) => {
    // GA的事件上报
    if (process.env.NODE_ENV === 'production' && GA_ID) {
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
          artwork: MEDIA ? [{ src: `/img/${MEDIA}`, sizes: '128x128' }] : []
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
    if (key === 'once' && playerList.has(key)) {
      playerList.get(key)!.audio.oncanplay = null
    }
    const path = process.env.NODE_ENV === 'production' && CDN ? `${CDN}/${voice.path}` : `voices/${voice.path}`
    playerList.set(key, {
      name: voice.name,
      audio: new Audio(path)
    })
    if (!playSetting.overlap) {
      playSetting.nowPlay = voice
      if (voice.mark) {
        infoDate.value = voice.mark
      }
    }
    playerList.get(key)!.audio.play()
    playerList.get(key)!.audio.onerror = () => {
      if (CDN && playerList.get(key)!.audio.src.startsWith(CDN)) {
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
          btnList[voice.name].progress = 100
        } else {
          btnList[voice.name].progress = currentTime
        }
      }
      playerList.get(key)!.audio.onended = () => {
        btnList[voice.name].progress = 0
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
    }
  }

  mitt.on(EVENT.randomPlay, () => {
    randomPlay()
  })

  /**
   * 随机播放
   */
  const randomPlay = () => {
    const list: VoicesItem[] = []
    voices.value.forEach((item: VoicesCategory | VoicesOrigin) => {
      if (isShowCategory(item)) {
        item.voiceList.forEach(voice => {
          if (isShowVoice(voice.name)) {
            list.push(voice)
          }
        })
      }
    })
    play(list[getrRandomInt(list.length)])
  }

  /**
   * 循环播放
   */
  const listLoop = (voice: VoicesItem) => {
    if (playSetting.loop === 1) {
      play(voice)
    } else if (playSetting.loop === 2) {
      let list: VoicesItem[] = []
      if (!playSetting.showInfo) {
        list = (voices.value as VoicesCategory[]).find(voicesCategory => {
          if (voicesCategory.name === voice.category) {
            return voicesCategory.voiceList
          }
        })!.voiceList
      } else {
        if (voice.mark && voice.mark.title) {
          list = (voices.value as VoicesOrigin[]).find(mark => {
            if (mark.title === voice.mark!.title) {
              return mark.voiceList
            }
          })!.voiceList
        } else {
          list = (voices.value as VoicesOrigin[]).find(mark => {
            if (mark.title === 'unknown') {
              return mark.voiceList
            }
          })!.voiceList
        }
      }
      const nextVoice = list[getLoopIndex(voice, list)]
      if (nextVoice) {
        play(nextVoice)
      }
    } else if (playSetting.loop === 3) {
      const nextVoice = voiceList.value[getLoopIndex(voice, voiceList.value)]
      if (nextVoice) {
        play(nextVoice)
      }
    }
  }

  /**
   * 获取列表播放的下一个索引
   */
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

  /**
   * 判断该模式或语言下是否可播放
   */
  const isCanPlay = (voice: VoicesItem) => {
    return (voices.value.some(item => {
      if (playSetting.showInfo) {
        if (voice.mark) {
          return item.title === voice.mark.title
        } else {
          return item.title === 'unknown'
        }
      } else {
        return item.name === voice.category && Boolean(item.translate[locale.value])
      }
    })) && Boolean(voice.translate[locale.value])
  }

  mitt.on(EVENT.stopPlay, () => {
    clearTimeout(timer)
    for (const key of playerList.keys()) {
      playerList.get(key)!.audio.pause()
      playerList.get(key)!.audio.onerror = null
      playerList.get(key)!.audio.oncanplay = null
      playerList.get(key)!.audio.ontimeupdate = null
      playerList.get(key)!.audio.onended = null
      const name = playerList.get(key)!.name
      btnList[name].progress = 0
    }
    playerList.clear()
    reset()
  })

  /**
   * 是否需要显示分类
   */
  const isShowCategory = (item: VoicesCategory | VoicesOrigin) => {
    const flag = item.voiceList.every(voice => {
      return !isShowVoice(voice.name)
    })
    if (flag) {
      return false
    } else if (playSetting.showInfo) {
      return Boolean(item['title'])
    } else {
      return te(`voicecategory.${item['name']}`) && Boolean(t(`voicecategory.${item['name']}`))
    }
  }

  /**
   * 是否需要显示语音
   */
  const isShowVoice = (name: string) => {
    return te(`voice.${name}`) && Boolean(t(`voice.${name}`))
  }

  /**
   * 鼠标停留时是否显示时间
   */
  const isShowTime = (mark) => {
    return playSetting.showInfo && mark && mark.time ? mark.time : ''
  }

  /**
   * 返回需要显示的表情包url
   */
  const getPicUrl = (usePicture?: Translate) => {
    return usePicture && Boolean(usePicture[locale.value]) ? `/voices/img/${usePicture[locale.value]}` : null
  }

  return {
    playSetting,
    voices,
    play,
    isShowCategory,
    isShowVoice,
    isShowTime,
    getPicUrl
  }
}

export {
  useSearch,
  getBtnList,
  createPlayer
}
