<template>
  <div>
    <div class="title">周末吃啥嘞</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
    margin-left: .2rem
    margin-top: .2rem
    border-bottom: 1px solid #eee
    color: $darkFontColor
    .item-img-wrapper
      overflow:hidden
      height: 0
      padding-bottom: 50%
      .item-img
        width: 100%
    .item-info
      padding-top: .2rem
      min-width: 0
      .item-title
        font-size: .30rem
        ellipsis()
      .item-desc
        display:inline-block
        font-size: .24rem
        margin: .15rem 0 .15rem 0
        ellipsis()
</style>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
