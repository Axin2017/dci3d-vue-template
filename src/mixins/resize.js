const resizeMixin = {
  data() {
    return {
      reEvt: 'resize',
      // 是否开启了px2rem
      px2remOn: false
    }
  },
  mounted() {
    // 开启px2rem
    if (process.env.VUE_APP_PXTOREM_ON === 'true') {
      this.px2remOn = true
      this.px2remConfig()
    }
  },
  beforeDestroy() {
    if (this.px2remOn) {
      window.removeEventListener(this.reEvt, this.resetFontSize)
    }
  },
  methods: {
    // 绑定事件
    px2remConfig() {
      // orientationchange->手机屏幕转屏事件
      // resize->页面大小改变事件(兼容pc，移动端)
      this.reEvt =
        'orientationchange' in window ? 'orientationchange' : 'resize'
      window.addEventListener(this.reEvt, this.resetFontSize)
      // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
      document.addEventListener('DOMContentLoaded', this.setHtmlFontSize)
    },
    // 设置根字号
    setHtmlFontSize() {
      const html = document.getElementsByTagName('html')[0]
      const designWidth = process.env.VUE_APP_DISIGN_WIDTH
      const clientW =
        document.documentElement.clientWidth || document.body.clientWidth
      if (!clientW) {
        return
      }
      let fontSize = process.env.VUE_APP_ROOT_VALUE * (clientW / parseInt(designWidth, 10))
      // 判断宽度是否小于1024
      if (fontSize * 19.2 < 1024) {
        fontSize = 1024 / 19.2
      }
      html.style.fontSize = fontSize + 'px'
      // tx 2019/09/25 在窗口尺寸变化时地图需要适配，需要把根字体保存起来
      this.$store.commit('global/setHtmlFontSize', fontSize)
    },
    // 重置根字号
    resetFontSize() {
      const _this = this
      if (window.resetFontTimeout) {
        clearTimeout(window.resetFontTimeout)
      }
      //防抖
      window.resetFontTimeout = setTimeout(() => {
        _this.setHtmlFontSize()
      }, 500)
    }
  }
}
export default resizeMixin
