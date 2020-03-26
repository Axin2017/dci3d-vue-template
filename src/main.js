import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import { registerPlugins } from './plugins'
import { registerGlobalFilters } from './filters'
import '@/styles/index.scss'

import dci3dVueUi from 'dci3d-vue-ui'
import 'dci3d-vue-ui/lib/dci3d-vue-ui.css'

Vue.config.productionTip = false

Vue.use(dci3dVueUi)

// 注册自定义插件
registerPlugins(Vue)
// 注册全局过滤器
registerGlobalFilters(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
