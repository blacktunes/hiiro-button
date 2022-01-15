const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

/**
 * 在构建目录创建语音文件列表
 */
module.exports = class Voices {
  apply = (compiler) => {
    compiler.hooks.done.tap('voices', () => {
      if (process.env.NODE_ENV === 'development') return
      try {
        const dir = path.join(__dirname, '../setting/translate')
        let VoicesList = []
        const jsonList = fs.readdirSync(dir).filter(name => name !== 'locales.json' && name !== 'category.json')

        jsonList.forEach(name => {
          const voice = fs.readJsonSync(path.join(dir, name))
          VoicesList = [...VoicesList, ...voice]
        })

        const dist = path.join(__dirname, '../dist')

        fs.ensureDirSync(dist)
        fs.writeJSONSync(path.join(dist, 'voices.json'), VoicesList, { spaces: 2 })
      } catch (e) {
        console.error(e)
      }
    })
  }
}
