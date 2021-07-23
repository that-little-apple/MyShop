<template>
  <div id="app">
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view/>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/首页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Order">
        <img slot="icon" src="./assets/商品.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="./assets/购物车.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <img slot="icon" src="./assets/我的.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  //https://www.h5w3.com/9059.html
  export default {
    name: 'App',
    data() {
      return {
        selected: ''
      }
    },
    //watch见识selected,当selected中的值发生变化，会自动调用后面的方法
    //当点击底部导航中菜单项时，selected这个属性会发生变化，同时watch监视到该属性变化，会自动调用同名watch函数
    watch: {
      selected: function name(newCompent, oldComment) {
        //newCompent:存储当前点击的菜单项
        //oldComment：存储前面点击的菜单项
        console.log("newCompent", newCompent)
        console.log("oldComment", oldComment)
        console.log(this.selected)//返回的是组件当中id组件的值
        //去执行对应的路由，找到对应的页面并展示
        //https://router.vuejs.org/zh/guide/essentials/navigation.html
        this.$router.push({name:this.selected})
      }
    }
  }
</script>

<style>

</style>
