<template>
  <div>
    <div class="banner" @click="handClickBanner">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xeb9a;</span>{{this.imgLength}}</div>
      </div>
    </div>
    <common-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handCloseBanner">
      </common-gallary>
    </common-animation>
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
        margin-right: .2rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .75)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>

<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonAnimation from 'common/animation/Animation'
export default {
  name: 'DetailBanner',
  props: {
    gallaryImgs: Array,
    bannerImg: String,
    sightName: String
  },
  data () {
    return {
      showGallary: false
    }
  },
  computed: {
    imgLength () {
      return this.gallaryImgs.length
    }
  },
  components: {
    CommonGallary,
    CommonAnimation
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
