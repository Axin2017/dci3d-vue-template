import store from '@/stores'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

function registerRouterHook(router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // 记录路由
    store.commit('global/setRouterPath', to.path)
    next()
  })
  router.afterEach((to, from, next) => {
    NProgress.done()
  })
}

export default registerRouterHook
