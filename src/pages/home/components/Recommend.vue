<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  }
}
</script>
