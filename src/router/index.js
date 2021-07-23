import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Order from '@/components/Order'
import Shopcart from '@/components/Shopcart'
import Mine from '@/components/Mine'


// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }

  ]
})
