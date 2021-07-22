// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// https://www.cnblogs.com/ggjun/p/11037914.html
// el：官方解释为实例提供挂载的元素。此处为index.html中的<div id="app"><div>。
// router：为router:router,的简写，指向引入文件中的routes:[]
// components：注册哪些组件，需在顶部引入文件。
// template：替换挂载元素的模板组件，而挂载元素的内容都将被忽略。即用template替换index.html里面的<div id="app"></div>
