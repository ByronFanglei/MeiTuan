<template>
  <div class="bottom">
    <div class="bottom-one">
      <button class="button">登录</button>
      <button class="button">注册</button>
      <div class="bottom-city">
        城市:
        <span class="iconfont buttom-icon">&#xe615;</span>
        {{this.city}}
      </div>
    </div>
    <div class="bottom-two">
      <ul>
        <li class="bottom-two-li">首页</li>
        <li class="bottom-two-li">我的</li>
        <li class="bottom-two-li">美团下载</li>
        <li class="bottom-two-li">电脑版</li>
        <li class="bottom-two-li">帮助</li>
      </ul>
    </div>
    <div class="bottom-three">
      <a class="bottom-three-first bottom-three-a" href="#">友情链接：猫眼电影</a>
      <a class="bottom-three-a" href="#">大众点评</a>
      <a class="bottom-three-a" href="#">美团旅行</a>
      <a class="bottom-three-a" href="#">榛果民宿</a>
      <a class="bottom-three-a" href="#">大众点评下载</a>
      <a class="bottom-three-a" href="#">美团收银官网</a>
      <a class="bottom-three-a" href="#">美团点评餐饮学院</a>
      <a class="bottom-three-a" href="#">快驴进货商家合作</a>
    </div>
    <div class="bottom-four">
      <div class="bottom-four-hr"></div>
      <span class="bottom-four-text">©2020 美团网 京ICP证070791号</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .bottom
    background: #fff
    .bottom-one
      padding: .3rem 0 .4rem .3rem
      .bottom-city
        display: inline
        float: right
        margin-right: .4rem
        line-height: .64rem
        .buttom-icon
          color: $starColor
      .button
        font-size: .26rem
        width:1.1rem
        height:.54rem
        color:$darkFontColor
        margin-right: .2rem
        background: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%)
        border-radius: .1rem
    .bottom-two
      margin: 0 auto
      width: 7.1rem
      height: .58rem
      padding: .18rem 0
    .bottom-two ul
      display: flex
      flex-decoration: row
      color: #FE8C00
      .bottom-two-li
        padding: .18rem 0
        font-size: .24rem
        flex: 1
        // border-right: .02rem solid #666
        text-align: center
    .bottom-three
      margin 0 auto
      width: 6.27rem
      height: 1.26rem
      display: flex
      flex-decoration: row
      flex-wrap: wrap
      padding: 0 0 .2rem 0
      .bottom-three-a
        font-size: .22rem
        padding: 0 0 .2rem .75rem
        color: #646464
      .bottom-three-first
        padding: 0
    .bottom-four
      width: 7.1rem
      height: .22rem
      margin: .2rem 0
      position: relative
      font-size: .22rem
      margin: 0 auto
      .bottom-four-hr
        display: block
        content: ""
        width: 100%
        border-top: 1px solid #999
        position: absolute
        top: 50%
      .bottom-four-text
        width: 50%
        background: #fff
        position: relative
        padding: 0 .3rem
        display: block
        text-align: center
        color: #999
        margin: 0 auto .4rem
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeBottom',
  computed: {
    ...mapState(['city'])
  }
}
</script>
