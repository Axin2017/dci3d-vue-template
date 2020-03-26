
import Vue from 'vue'
import Vuex from 'vuex'

import onemapApplication from './onemapApplication'

Vue.use(Vuex)

const global = {
  namespaced: true,
  state: {
    userinfo: {},
    routerPath: '', // 路由路径
    htmlFontSize: 0 // html的字号大小
  },
  getters: {
    userKey: state => {
      return state.userinfo.userKey
    }
  },
  mutations: {
    setUserInfo (state, userinfo) {
      state.userinfo = userinfo
    },
    setRouterPath (state, routerPath) {
      state.routerPath = routerPath
    },
    setHtmlFontSize (state, fontSize) {
      state.htmlFontSize = fontSize
    }
  }
}

export default new Vuex.Store({
  modules: {
    global,
    onemapApplication
  }
})
