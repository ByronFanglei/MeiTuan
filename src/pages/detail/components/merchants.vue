<template>
  <div class="merchants">
    <div class="merchants-one">商家信息</div>
    <div class="merchants-two">
      <div class="merchants-two-left">
        <div class="merchants-title">{{this.title}}</div>
        <div class="merchants-address">{{this.address}}</div>
        <div class="merchants-distance">
          <span class="iconfont">&#xe615;</span>
          <span class="merchants-distance-text">里我最近</span>
        </div>
      </div>
      <div class="merchants-two-right border-left">
        <span class="iconfont">&#xe64c;</span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .merchants
    margin-bottom: .2rem
    background: #fff
    display: flex
    flex-direction: column
    width: 100%
    .merchants-one
      width: 90%
      margin: 0 auto
      font-size: .34rem
      color: #333
      padding: .22rem .2rem
    .merchants-two
      width 90%
      margin: 0 auto
      padding: .12rem 0
      display: flex
      flex-direction: row
      justify-content: space-between
      .merchants-two-left
        width: 80%
        display: flex
        flex-direction: column
        flex: 1
        .merchants-title
          font-size: .32rem
          margin-bottom: .06rem
          color: #000
          font-weight: 600
        .merchants-address
          font-size: .28rem
          padding-right: .2rem
          color: #666
          ellipsis()
        .merchants-distance
          margin-top: .12rem
          .merchants-distance-text
            color: #eb8706
      .merchants-two-right
        display: flex
        width: 20%
        color: #eb8706
        justify-content: center
        align-items: center
</style>

<script>
export default {
  namr: 'DetailMerchants',
  props: {
    title: String,
    address: String
  }
}
</script>
