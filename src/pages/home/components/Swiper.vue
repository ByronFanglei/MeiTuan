<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
    <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
  //  >>>:穿透效果，抵消scoped效果
    background-color: #fff
  .wrapper
    overflow: hidden
    width: 100%
    hidden 0
    background-color: #eee
    // padding-bottom: 30.4%        //图片高比宽
    .swiper-img
      width: 100%
</style>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
      }]
    }
  }
}
</script>
