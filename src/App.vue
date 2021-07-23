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
      <mt-tab-item id="外卖">
        <img slot="icon" src="./assets/首页.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/商品.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/购物车.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
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
  data(){
    return {
      selected:''
    }
  }
}
</script>

<style>

</style>
