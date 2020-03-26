import { toFixed } from './toFixed'

export function registerGlobalFilters(Vue) {
  Vue.filter('toFixed', toFixed)
}
