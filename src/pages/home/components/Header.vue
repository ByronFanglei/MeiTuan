<template>
  <div class="header">
    <router-link to="/city">
      <div class="header-left">{{this.city}}
        <span class="iconfont lefticon">&#xe695;</span>
      </div>
    </router-link>
    <div class="header-input">
      <span class="iconfont">&#xeb9c;</span>
      请输入商家名、品类或者商圈...
    </div>
    <div class="header-right">
      <span class="iconfont">&#xeb9a;</span>
    </div>
  </div>
</template>
<!-- scoped:指css代码值在本页面有效，其他页面无效 -->
<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    background-color: $bgColor
    font-size: .26rem
    .header-left
      min-width: 1.508rem
      float: left
      text-align: center
      color: $darkFontColor
      .lefticon
        width: 0.16rem
        height: 0.09rem
        margin-left: -.1rem
        font-size: .24rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .18rem
      background-color: #fff
      border-radius: .1rem
      padding-left: .2rem
      color: #999
    .header-right
      text-align: center
      width: 0.94rem
      float: right
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // ...展开运算符
    // vue高级用法
    ...mapState(['city'])
  }
}
</script>
