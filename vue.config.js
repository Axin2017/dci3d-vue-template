const proConfig = require('./webpack.pro.config')
const devConfig = require('./webpack.dev.config')

module.exports = {
  devServer: {
    proxy: {
      // 增加rap接口跨域代理
      '/rapApi': {
        //自定义
        target: 'http://wiki.chinadci.com:8087', //这里可以跟随项目实际部署服务器来
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/rapApi': '' //自定义
        }
      }
    }
  },
  publicPath: './',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return proConfig
    } else {
      return devConfig
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variable.scss";'
      }
    }
  }
}
