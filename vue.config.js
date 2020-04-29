'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = 'Demo'

// 如果用80端口，可能会有权限问题
// 可以在命令行里面自己输入默认的端口，也可以一个默认的 port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9528

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 资源目录，本地调试一般'./'或者'.'都没关系，然后production正式环境要看服务器那边的端口是怎么指定的
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production', // eslint是否在调试的时候就报错，一般本地开发的时候是打开，然后生产环境就关掉 防止以为这些格式在浏览器一堆报错
  productionSourceMap: false, // 是不是打包.map文件，有好有坏 你自己决定就好
  devServer: { // 本地调试的devserver
    port: port, // 端口
    open: true, // 是不是默认打开页面
    overlay: { // 报错的覆盖范围
      warnings: false, //
      errors: true
    }
  },
  configureWebpack: { // 类似web
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // webpakc-loader采用webpack-chain写法，增加上下文逻辑判断，不是简单的loade
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({ // 分包策略，建议将一些不经常改动的拆分即可
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs', // 将项目需要用到npm包如vue、vue-router那些，单独拆成一个文件提高打包效率 不用每次都打包这些基本不改动的东西
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: { // 拆分element-ui，理由同上
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: { // 其他的拆包，不建议全都拆包，拆的太散，用户浪费在请求过程的事件会较多，
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
