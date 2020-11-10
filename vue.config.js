/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        import: [path.join(__dirname, './src/setting/color.styl')]
      }
    }
  },
  configureWebpack: () => {
    return {
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
