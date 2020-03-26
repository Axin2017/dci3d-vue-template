import Vue from 'vue'
import Router from 'vue-router'
import registerRouterHook from './routerPermission'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/onemapApplication'
    },
    {
      path: '/onemapApplication',
      component: () => import(/* webpackChunkName: "onemapApplication" */'@/views/onemapApplication'),
      children: [
        {
          path: '',
          name: 'onemap',
          component: () => import('@/views/onemapApplication/onemap')
        },
        {
          path: 'onemap1',
          name: 'onemap1',
          component: () => import('@/views/onemapApplication/onemap1')
        }
      ]
    },
    {
      path: '/other',
      component: () => import(/* webpackChunkName: "other" */'@/views/other'),
      children: [
        {
          path: '',
          name: 'otherIndex',
          component: () => import('@/views/other/index')
        }
      ]
    }
  ]
})

registerRouterHook(router)

export default router
