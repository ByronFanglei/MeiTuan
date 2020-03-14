<template>
  <div class="gallary" @click="handClosebanner">
    <div class="warpper" @touchmove.prevent>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .gallary >>> .swiper-container
    overflow: inherit
  .gallary
    display:flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .warpper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 重现判断图片宽高距离，可以使swiper正常加载
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handClosebanner () {
      this.$emit('close')
    }
  }
}
</script>
