template只能有一个根节点
<template>
  <div>
    <mt-swipe :auto="4000" style="height: 165px;width: 400px">
      <mt-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="list">
      <ul>
        <li v-for="info in newList" :key="info.id">
          <!--          <a href="#">-->
          <!--          https://router.vuejs.org/zh/api/-->
          <!--          表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。-->
          <router-link :to=info.route>
          <img :src="info.src">
          <p>{{info.title}}</p>
          </router-link>
          <!--          </a>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import img1 from '@/assets/3C.png'
  import img2 from '@/assets/plus会员.png'
  import img3 from '@/assets/京东到家.png'
  import img4 from '@/assets/服饰.png'
  import img5 from '@/assets/生鲜.png'
  var infoList = [
    {id: 1, src: img1, title: "新闻资讯", route: {name: 'NewList'}},
    {id: 2, src: img2, title: "图片分享", route: {name: 'PhotoList'}},
    {id: 3, src: img3, title: "商品展示", route: {name: 'ProductList'}},
    {id: 4, src: img4, title: "国际新闻", route: {name: 'News'}},
    {id: 5, src: img5, title: "留言反馈", route: {name: 'ShowMsg'}},
  ]

  export default {
    name: "home",
    data() {
      return {
        newList: infoList,
        imgList: []
      }
    },
    created() {
      // url前缀,与api.js中的api路径拼接得到完整地址http://localhost:8080/api/getSwipe
      this.$axios.get('/getSwipe').then(res => {
        console.log(res)
        this.imgList = res.data.message
      })
    }
  }
</script>

<style scoped>
  .list {
    width: 100%;
  }

  .list ul li {
    list-style: none;
    float: left;
    width: 33%;
    height: 100px;
    text-align: center;
    font-size: 14px;
  }

  .list ul li {
    display: inline-block;
    width: 70px;
    height: 50px;
    margin: 0 auto;
    text-decoration: none;
  }

  .list ul li a img {
    width: 50px;
  }
</style>
