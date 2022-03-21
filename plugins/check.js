const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

/**
 * 分类是否存在
 * 语音是否存在
 * 语音是否被使用
 * 图片是否存在
 * 图片是否被使用
 */
module.exports = class Check {
  apply = (compiler) => {
    compiler.hooks.done.tap('check', () => {
      try {
        const mp3List = fs.readdirSync(path.join(__dirname, '../public/voices'))
          .filter(name => !((fs.statSync(path.join(__dirname, `../public/voices/${name}`))).isDirectory()))

        let imgList = []
        const imgPath = path.join(__dirname, '../public/voices/img')
        if (fs.existsSync(imgPath)) {
          imgList = fs.readdirSync(imgPath)
            .filter(name => !((fs.statSync(path.join(__dirname, `../public/voices/img/${name}`))).isDirectory()))
        }

        let CategoryList
        let VoicesList = []
        fs.readdirSync(path.join(__dirname, '../setting/translate')).forEach(dir => {
          if (dir.endsWith('.json') && dir !== 'locales.json') {
            if (dir === 'category.json') {
              CategoryList = fs.readJSONSync(path.join(__dirname, '../setting/translate/category.json'))
            } else {
              const voice = fs.readJSONSync(path.join(__dirname, `../setting/translate/${dir}`))
              VoicesList = [...VoicesList, ...voice]
            }
          }
        })

        const categoryNotExist = []
        const mp3NotExist = []
        const imgNotExist = []
        const nameList = []
        const nameRepeat = []
        VoicesList.forEach(item => {
          const isExist = CategoryList.some(category => {
            return category.name === item.category
          })
          if (!isExist) {
            categoryNotExist.push(item.category)
          }
          if (!mp3List.includes(item.path)) {
            mp3NotExist.push(item.path)
          }
          if (item.usePicture) {
            for (const i in item.usePicture) {
              if (!imgList.includes(item.usePicture[i]) && !imgNotExist.includes(item.usePicture[i])) {
                imgNotExist.push(item.usePicture[i])
              }
            }
          }
          if (nameList.includes(item.name)) {
            nameRepeat.push(item.name)
          }
          nameList.push(item.name)
        })

        const categoryList = []
        const categoryRepeat = []
        CategoryList.forEach(item => {
          if (categoryList.includes(item.name)) {
            categoryRepeat.push(item.name)
          }
          categoryList.push(item.name)
        })

        if (categoryNotExist.length > 0) {
          console.log(`  分类不存在(${categoryNotExist.length}):`)
          categoryNotExist.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }
        if (mp3NotExist.length > 0) {
          console.log(`  语音不存在(${mp3NotExist.length}):`)
          mp3NotExist.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }
        if (imgNotExist.length > 0) {
          console.log(`  图片不存在(${imgNotExist.length}):`)
          imgNotExist.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }
        if (categoryRepeat.length > 0) {
          console.log(`  分类name重复(${categoryRepeat.length}):`)
          categoryRepeat.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }
        if (nameRepeat.length > 0) {
          console.log(`  语音name重复(${nameRepeat.length}):`)
          nameRepeat.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }

        const mp3NotUse = []
        mp3List.forEach(name => {
          const isUse = VoicesList.some(item => {
            return item.path === name
          })
          if (!isUse) {
            mp3NotUse.push(name)
          }
        })
        if (mp3NotUse.length > 0) {
          console.log(`  语音未被使用(${mp3NotUse.length}):`)
          mp3NotUse.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }

        const imgNotUse = []
        imgList.forEach(name => {
          const isUse = VoicesList.some(item => {
            if (item.usePicture) {
              let flag = false
              for (const i in item.usePicture) {
                if (item.usePicture[i] === name) {
                  flag = true
                  break
                }
              }
              return flag
            } else {
              return true
            }
          })
          if (!isUse) {
            imgNotUse.push(name)
          }
        })
        if (imgNotUse.length > 0) {
          console.log(`  图片未被使用(${imgNotUse.length}):`)
          imgNotUse.forEach(name => {
            console.warn('  -', chalk.yellow(name))
          })
        }
      } catch (e) {
        console.error(e)
      }
    })
  }
}
