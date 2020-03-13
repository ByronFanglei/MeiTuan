<template>
  <div class="price-all">
    <div class="price border-bottom">
      <div class="price-inner">
        <div class="price-one">
          <span class="strong">{{this.price}}</span>
          <span class="strong-color">元</span>
          <span>门市价：{{this.oldPrice}}元</span>
        </div>
        <div class="proce-two">立即抢购</div>
      </div>
    </div>
    <div class="support">
      <div class="support-inner">
        <div class="support-one">
          <span class="iconfont">&#xe62c;</span>
          <span>支持随时退款</span>
        </div>
        <div class="support-one">
          <span class="iconfont">&#xe634;</span>
          <span>支持过期自动退</span>
        </div>
        <div class="support-one support-two">
          <span class="iconfont">&#xe751;</span>
          <span>已售：{{this.sales}}份</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .price-all
    margin-bottom: .2rem
    background: #fff
    .price
      width: 100%
      padding: .12rem 0
      .price-inner
        display: flex
        flex-direction: row
        margin: 0 auto
        width: 90%
        justify-content: space-between
        .price-one
          font-size: .28rem
          color: #999
          .strong
            font-size: .66rem
            color: #06c1ae
            font-weight: 600
          .strong-color
            color: #06c1ae
        .proce-two
          font-size: .4rem
          background: #f90
          color: #fff
          text-align: center
          line-height: .8rem
          padding: 0 .32rem
          border-radius: .1rem
    .support
      widows: 100%
      .support-inner
        width: 90%
        margin: 0 auto
        display: flex
        flex-wrap: wrap
        font-size: .28rem
        color: #6bbd00
        padding: .2rem 0
        .support-one
          width: 50%
          padding: .1rem 0
        .support-two
          color: #999
</style>
<script>
export default {
  name: 'DetailPrice',
  props: {
    price: String,
    oldPrice: String,
    sales: String
  }
}
</script>
