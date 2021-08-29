const path = require('path')
const Check = require('./plugins/check')

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
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.info']
    }
    return {
      plugins: [
        new Check()
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
