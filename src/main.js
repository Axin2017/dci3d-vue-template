import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import { registerPlugins } from './plugins'
import { registerGlobalFilters } from './filters'
import '@/styles/index.scss'
// dci3dvue
import dci3dVueUi from 'dci3d-vue-ui'
import 'dci3d-vue-ui/lib/dci3d-vue-ui.css'
// dci3darcgis map
import dci3dArcmap from 'dci3d-vue-arcgismap'
import 'dci3d-vue-arcgismap/lib/dci3d-vue-arcgismap.css'

Vue.config.productionTip = false

Vue.use(dci3dVueUi)
Vue.use(dci3dArcmap)
// 注册自定义插件
registerPlugins(Vue)
// 注册全局过滤器
registerGlobalFilters(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
