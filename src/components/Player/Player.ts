import Setting from '@/../setting/setting.json'
import { gtag } from '@/assets/script/analytics'
import mitt from '@/assets/script/mitt'
import { EVENT, INFO_I18N, Mark, Player, PlayerList, QUERY, SearchData, Translate, Voices, VoicesCategory, VoicesItem, VoicesOrigin } from '@/assets/script/type'
import { getCategory, getRandomInt } from '@/assets/script/utils'
import { infoDate, playTimes, playTimesNow, searchData, voiceList, voices } from '@/store/data'
import { isShowSearch, playSetting } from '@/store/setting'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Router, useRouter } from 'vue-router'

const MEDIA = Setting['mediaSession']
const CDN = Setting['CDN']

const useSearch = (btnList: { [name: string]: any }) => {
  const router = useRouter()

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

  watch(() => searchData.value, (newVal, oldVal) => {
    // 搜索栏文字改变时清除路由参数
    if (oldVal && (QUERY.search in router.currentRoute.value.query || QUERY.name in router.currentRoute.value.query)) {
      router.push({
        query: {}
      })
    }

    // 搜索栏文字改变时清除高亮
    if (newVal !== oldVal) {
      searchData.index = 0
    }
    if (highlight.value) {
      highlight.value = ''
    }
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

  initRouter(searchData, router)
}

const initRouter = (searchData: SearchData, router: Router) => {
  onMounted(() => {
    const scrollToBtn = () => {
      nextTick(() => {
        setTimeout(() => {
          if (searchData.list.length > 0) {
            mitt.emit(EVENT.autoScroll)
          }
        }, 500)
      })
    }

    router.isReady()
      .then(() => {
        if (router.currentRoute.value.query[QUERY.name]) {
          isShowSearch.value = true
          searchData.value = router.currentRoute.value.query[QUERY.name] as string
          mitt.emit(EVENT.search, router.currentRoute.value.query[QUERY.name])
          scrollToBtn()
        } else if (router.currentRoute.value.query[QUERY.search]) {
          isShowSearch.value = true
          searchData.value = router.currentRoute.value.query[QUERY.search] as string
          mitt.emit(EVENT.search)
          scrollToBtn()
        }
      })
  })
}

const setPlayCount = () => {
  ++playTimes.value
  ++playTimesNow.value
  localStorage.setItem('play', playTimes.value.toString())
}

const createPlayer = (btnList: { [name: string]: any }) => {
  const { t, te, locale } = useI18n()

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
   */
  const play = (voice: VoicesItem) => {
    gtag('event', '播放语音', {
      event_category: voice.name,
      event_label: voice.category,
      value: 1
    })
    if (!playSetting.overlap) {
      stopPlay()
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
    const path = getDownloadUrl(voice.path)
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
      }
    }
    playerList.get(key)!.audio.oncanplay = () => {
      setPlayCount()

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
          if (isShowVoice(voice)) {
            list.push(voice)
          }
        })
      }
    })
    play(list[getRandomInt(list.length)])
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
        const category = (voices.value as Voices<'c'>).find(voicesCategory => voicesCategory.name === voice.category && voicesCategory.voiceList)
        list = category ? category.voiceList : []
      } else {
        if (voice.mark && voice.mark.title) {
          const origin = (voices.value as Voices<'o'>).find(mark => voice.mark && mark.title === voice.mark.title && mark.voiceList)
          list = origin ? origin.voiceList : []
        } else {
          const origin = (voices.value as Voices<'o'>).find(mark => mark.title === 'unknown' && mark.voiceList)
          list = origin ? origin.voiceList : []
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
    const flag = (voices.value.some((item: VoicesOrigin | VoicesCategory) => {
      if (playSetting.showInfo) {
        if (voice.mark) {
          return (item as VoicesOrigin).title === voice.mark.title
        } else {
          return (item as VoicesOrigin).title === 'unknown'
        }
      } else {
        return (item as VoicesCategory).name === voice.category && Boolean((item as VoicesCategory).translate[locale.value])
      }
    })) && Boolean(voice.translate[locale.value])
    if (playSetting.showHide) {
      return flag
    } else {
      return flag && !voice.hide
    }
  }

  mitt.on(EVENT.stopPlay, () => {
    stopPlay()
  })

  const stopPlay = () => {
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
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'none'
    }
  }

  /**
   * 是否需要显示分类
   */
  const isShowCategory = (item: VoicesCategory | VoicesOrigin) => {
    const flag = item.voiceList.every(voice => {
      return !isShowVoice(voice)
    })
    if (flag) {
      return false
    } else if (playSetting.showInfo) {
      return Boolean(item['title'])
    } else {
      return playSetting.showHide ? te(`voicecategory.${item['name']}`) && Boolean(t(`voicecategory.${item['name']}`)) : te(`voicecategory.${item['name']}`) && Boolean(t(`voicecategory.${item['name']}`)) && !(item as VoicesCategory).hide
    }
  }

  /**
   * 是否需要显示语音
   */
  const isShowVoice = (voice: VoicesItem) => {
    if (playSetting.showHide) {
      return te(`voice.${voice.name}`) && Boolean(t(`voice.${voice.name}`))
    } else {
      let flag = true
      if (playSetting.showInfo) {
        const category = getCategory(voice.category)!
        flag = te(`voicecategory.${category['name']}`) && Boolean(t(`voicecategory.${category['name']}`)) && !category.hide
      }
      return te(`voice.${voice.name}`) && Boolean(t(`voice.${voice.name}`)) && !voice.hide && flag
    }
  }

  /**
   * 鼠标停留时是否显示时间
   */
  const isShowTime = (mark?: Mark) => {
    return playSetting.showInfo && mark && mark.time ? mark.time : ''
  }

  /**
   * 是否显示new图标
   */
  const isShowNewIcon = (date?: string) => {
    if (!date) return false
    return playSetting.showHide ? date === t(INFO_I18N.hideLastDate) : date === t(INFO_I18N.lastDate)
  }

  /**
   * 返回需要显示的表情包url
   */
  const getPicUrl = (usePicture?: Translate) => {
    return usePicture && Boolean(usePicture[locale.value]) ? `/voices/img/${usePicture[locale.value]}` : undefined
  }

  const getDownloadUrl = (url: string) => {
    return process.env.NODE_ENV === 'production' && CDN ? `${CDN}/${url}` : `voices/${url}`
  }

  /**
   * 返回带时间点的B站视频URL
   * @deprecated
   */
  const getUrl = (mark?: Mark): string | undefined => {
    if (mark && mark.url && mark.time) {
      const timeList = mark.time.split('~')[0].split(':')
      let time = ''
      if (timeList.length === 2) {
        time = `?t=${timeList[0]}m${timeList[1]}s`
      } else if (timeList.length === 3) {
        time = `?t=${timeList[0]}h${timeList[1]}m${timeList[2]}s`
      }
      return mark.url + time
    }
  }

  return {
    playSetting,
    voices,
    play,
    isShowCategory,
    isShowVoice,
    isShowTime,
    isShowNewIcon,
    getPicUrl,
    getDownloadUrl
  }
}

const initListen = (btnList: { [name: string]: any }) => {
  mitt.on(EVENT.nameClick, (name?: string) => {
    if (!name) return
    for (const i in btnList) {
      if (i === name) {
        const scrollPos = document.documentElement.scrollTop + btnList[i].$el.getBoundingClientRect().top - 200
        window.scrollTo({ top: scrollPos, behavior: 'smooth' })
        break
      }
    }
  })
}

export {
  useSearch,
  createPlayer,
  initListen
}
