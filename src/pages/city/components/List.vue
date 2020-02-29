<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">山西</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广东</div>
          </div>
          <div class="button-wrapper">
            <div class="button">西藏</div>
          </div>
          <div class="button-wrapper">
            <div class="button">黑龙江</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">全部城市</div>
        <div class="title">A</div>
        <div class="button-all">
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
        </div>
        <div class="title">A</div>
        <div class="button-all">
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
        </div>
        <div class="title">A</div>
        <div class="button-all">
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
          <div class="button-one border-bottom">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    position:absolute
    top: 1.89rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    // background: red
    .title
      padding: .2rem 0 .2rem .2rem
      color: $darkFontColor
      font-size: .28rem
      background: $cityBgcolor
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.3%
        float: left
        .button
          border: .02rem solid #ff6700
          text-align: center
          padding: .1rem 0
          margin: .1rem
    .button-all
      .button-one
        padding: .1rem 0 .1rem .2rem
        background: #fff
        line-height: .4rem
</style>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
