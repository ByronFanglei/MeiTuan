<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">{{item.price}}元</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .title
    height: .84rem
    line-height: .84rem
    font-size: .34rem
    color: $darkFontColor
    margin-left: .2rem
    margin-top: .2rem
    border-bottom: 1px solid #eee
  .item
    overflow: hidden
    display: flex
    height: 2.04rem
    margin-left: .2rem
    margin-top: .2rem
    padding-bottom: .2rem
    border-bottom: 1px solid #eee
    color: $darkFontColor
    .item-img
      height: 100%
      max-width: 2.04rem
    .item-info
      flex: 1
      padding: .15rem
      min-width: 0
      .item-title
        font-size: .30rem
        ellipsis()
      .item-desc
        display:inline-block
        font-size: .24rem
        margin: .12rem 0 .12rem 0
        ellipsis()
      .item-price
        font-size: .36rem
        padding-bottom: .14rem
      .item-button
        padding: .1rem
        font-size: .24rem
        background: #F60
        color: #fff
</style>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://p0.meituan.net/200.0/deal/ec13bc77584009d04aac683494b2f73760915.jpg@141_0_436_436a%7C267h_267w_2e_90Q',
        title: '酒鬼爱烤鸡架',
        desc: '[十里河]招牌烤鸡架（店家招牌）1份',
        price: '9.9'
      }, {
        id: '002',
        imgUrl: 'http://p1.meituan.net/200.0/deal/7fa4d4497aab7b81ced0d3081616e77262464.jpg@117_0_468_468a%7C267h_267w_2e_90Q',
        title: '掉香缘掉渣饼',
        desc: '[西单]掉渣饼1份，提供免费WiFi',
        price: '7.9'
      }, {
        id: '003',
        imgUrl: 'http://p1.meituan.net/200.0/deal/c67f16980a3298696b22ea3467b86622159728.jpg@106_0_634_634a%7C267h_267w_2e_90Q',
        title: '郑大烤冷面',
        desc: '[安定门]主食2选1',
        price: '8.8'
      }, {
        id: '004',
        imgUrl: 'http://p0.meituan.net/200.0/deal/416d01cbc4b8a2871b3c260615b5998088199.jpg',
        title: '东来顺',
        desc: '[2店通用]4-5人套餐，节假日通用，中关村店/朝阳双井店通用',
        price: '209'
      }, {
        id: '005',
        imgUrl: 'http://p0.meituan.net/200.0/deal/f38a659eb827ed9571deddb74db2f388142809.jpg@1_0_1598_1598a%7C267h_267w_2e_90Q',
        title: '北京全聚德',
        desc: '[天安门广场]精品烤鸭3-4人餐1份',
        price: '458'
      }]
    }
  }
}
</script>
