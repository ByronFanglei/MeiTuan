<template>
  <div class="header">
    选择城市
    <router-link to="/">
      <div class="iconfont headericon">&#xeb99;</div>
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    font-size: .32rem
    color: $darkFontColor
    text-align: center
    .headericon
      position: absolute
      top: 0
      left: 0
      width: .88rem
      font-size: .4rem
      text-align: center
      color: $darkFontColor
</style>

<script>
export default {
  name: 'CityHeader'
}
</script>
