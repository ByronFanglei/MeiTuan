<template>
  <div class="buyinfo">
    <div class="border-bottom buyinfo-one">购买信息</div>
    <div class="buyinfo-two">
      <div>
        <div class="buyinfo-color">有效期</div>
        <div class="buyinfo-tab">2019.8.7 至 2020.4.3 23:59（周末、法定节假日通用）</div>
      </div>
      <div>
        <div class="buyinfo-color">使用时间</div>
        <div class="buyinfo-tab">美团券24小时可用</div>
      </div>
      <div class="buyinfo-color">使用规则</div>
      <ul class="buyinfo-tab buyinfo-ul">
        <li>团购用户不可同时享受商家其他优惠</li>
        <li>酒水饮料等问题，请致电商家咨询，以商家反馈为准</li>
        <li>如部分菜品因时令或其他不可抗因素导致无法提供，商家会用等价菜品替换，具体事宜请与商家协商</li>
        <li>店内无包间</li>
        <li>无需预约，消费高峰期可能需要等位</li>
        <li>发票问题请询问商家</li>
        <li>堂食外带均可，可免费打包</li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .buyinfo
    background: #fff
    margin-bottom: .2rem
    display: flex
    flex-direction: column
    width: 100%
    .buyinfo-one
      width: 90%
      margin: 0 auto
      font-size: .34rem
      color: #333
      padding: .22rem .2rem
    .buyinfo-two
      width: 90%
      margin: 0 auto
      padding: .12rem 0
      font-size: .3rem
      color: #333
      .buyinfo-color
        color: #f90
      .buyinfo-tab
        padding: .2rem 0 0 .16rem
        margin-bottom: .2rem
        line-height: .6rem
      .buyinfo-ul
      >li
        list-style-type: disc
        margin-left: .4rem
</style>

<script>
export default {
  name: 'DetailBuyinfo'
}
</script>
