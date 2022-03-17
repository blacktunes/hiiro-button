const path = require('path')
const Check = require('./plugins/check')
const Voives = require('./plugins/voices')

process.env.VUE_APP_LAST_UPDATE = Date.now()

/**
 *  @typedef { import("@vue/cli-service").ProjectOptions } Options
 *  @type { Options }
 */
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        stylusOptions: {
          import: [path.join(__dirname, './setting/color.styl')]
        }
      }
    }
  },
  configureWebpack: () => {
    return {
      plugins: [
        new Check(),
        new Voives()
      ],
      performance: {
        hints: false
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial' // 只打包初始时依赖的第三方
            },
            corejs: {
              name: 'chunk-corejs', // 单独将 core-js 拆包
              priority: 15,
              test: /[\\/]node_modules[\\/]core-js[\\/]/
            }
          }
        }
      }
    }
  }
}
