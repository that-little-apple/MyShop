<template>
  <div>
    <div class="product-desc">
      <ul>
        <li><span class="product-desc-span">
          {{productInfo.title}}
        </span></li>
        <li class="price-li">市场价:
          <s>￥ {{productInfo.market_price}}</s>销售价:<span>￥ {{productInfo.sell_price}}</span></li>
        <li class="number-li">购买数量：<span>-</span><span><span>+</span></span></li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger">加入购物车</mt-button>
        </li>
      </ul>
      <div class="product-props">
        <ul>
          <li>商品参数</li>
          <li>商品货号：{{productInfo.goods_no}}</li>
          <li>库存情况：{{productInfo.stock_quantity}}件</li>
          <li>上架时间：{{productInfo.add_time}}</li>
        </ul>
      </div>
      <div class="product-info">
        <ul>
          <li>
            <mt-button type="primary" size="large">图文介绍</mt-button>

          </li>
          <li>
            <mt-button type="danger" size="large">商品评论</mt-button>
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductDetail",
    data() {
      return {
        productInfo: {}
      }
    },
    created() {
      this.$axios.get(`getProductInfo/${this.$route.params.skuId}`).then(res => {
        this.productInfo = res.data.message[0]

      })
    }
  }
</script>

<style scoped>

</style>
