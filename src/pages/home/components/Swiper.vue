<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showList">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showList () {
      return this.list.length
    }
  }
}
</script>
