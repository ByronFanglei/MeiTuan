<template>
  <div>
    <div class="banner" @click="handClickBanner">
      <img class="banner-img" src="http://p0.meituan.net/deal/1fa88e2ea6042f076ec89b3d688947a0315165.jpg">
      <div class="banner-info">
        <div class="banner-title">沪上阿姨</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xeb9a;</span>2</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handCloseBanner"></common-gallary>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      right: 0
      left: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .75)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://p0.meituan.net/deal/1fa88e2ea6042f076ec89b3d688947a0315165.jpg',
        'http://p0.meituan.net/440.0/dealwatera/31ff8cc1f75f0412e2b0404392c6d2ee211174.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handClickBanner () {
      this.showGallary = true
    },
    handCloseBanner () {
      this.showGallary = false
    }
  }
}
</script>
