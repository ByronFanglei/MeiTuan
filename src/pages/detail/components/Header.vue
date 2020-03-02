<template>
  <div>
    <router-link  tag="div"
                  to="/"
                  class="header-abs"
                  v-show="showAbs">
      <div class="iconfont header-abs-back">&#xeb99;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle" >
      <router-link to="/">
        <div class="iconfont headericon">&#xeb99;</div>
      </router-link>
      美食详情
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .75)
    // z-index: 2
    .header-abs-back
      font-size: .32rem
      color: #fff
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    background: #06c1ae
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
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScrolle () {
      const top = document.documentElement.scrollTop
      if (top > 55) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScrolle)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScrolle)
  }
}
</script>
