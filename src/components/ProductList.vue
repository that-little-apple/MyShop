<template>
  <div>
    <ul>
      <li v-for="product in productList" :key="product.id">
        <a href="#"></a>
        <img :src="product.img_url">
        <div class="title">{{product.title}}</div>
        <div class="desc">
          <div class="sell">
            <span>￥{{product.sell_price}}</span>
            <s>￥{{product.market_price}}</s>
        </div>
          <div class="detail">
            <div class="hot">
              热卖中
            </div>
            <div class="count">
              剩{{product.stock_quantity}}件
            </div>

          </div>

        </div>
      </li>
    </ul>
    <p>&nbsp;</p>
  </div>
</template>

<script>
  export default {
    name: "ProductList",
    data() {
      return {
        productList: []
      }
    },
    created() {
      this.$axios.get('/getProductList').then(res => {
        console.log(res)
        this.productList = res.data.message
      }).catch(err =>{//异常处理
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  ul {
    overflow: hidden;
    margin: 0 auto;
  }

  li {
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;
    list-style: none;
  }

  li > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid blue;
    box-shadow: 0 0 4px rgb(194, 137, 137);
    width: 100%;
    display: block;
  }

  li > a:not(.mui-btn) img {
    width: 10%;
  }

  .sell > span {
    float: left;
    color: red;
    text-align: left;
  }

  .detail > .count {
    float: right;
    font-size: 15px;
    text-align: right;
  }

  .detail {
    overflow: hidden;
  }

  .desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(115, 134, 218, 0.2);
  }

  img {
    height: 200px;
  }
</style>
