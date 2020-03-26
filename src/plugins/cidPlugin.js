/*
 *@description: 给每一个vue组件根元素添加cid属性，方便调试的时候，从界面直接找到组件名
 *@author: 谭新
 *@date: 2019-04-10 17:50:53
 *@note: 请为每个组件添加name属性，否则无法起作用
*/
export default {
  install(Vue) {
    Vue.mixin({
      mounted() {
        const name = this.$options.name
        const el = this.$el
        name && el && el.setAttribute && el.setAttribute('cid', name)
      }
    })
  }
}
