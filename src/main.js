// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
//引入并使用mintUI
import Mint from 'mint-ui';
Vue.use(Mint);
//引入mintUI使用的css
import 'mint-ui/lib/style.css'

//将axios挂到vue对象上.prototype(原型)，扩展vue属性，方便获取
Vue.prototype.$axios=Axios
// url前缀,与api.js中的api路径拼接得到完整地址http://localhost:8080/api/getSwape
Axios.defaults.baseURL="http://localhost:8080/api"

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
