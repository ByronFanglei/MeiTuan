<template>
  <div class="one">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="contend">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .one
    height: 30rem
</style>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '一人餐',
        children: [{
          title: '一人套餐A',
          children: [{
            title: '鱼肉'
          }, {
            title: '鸡肉'
          }]
        }, {
          title: '一人套餐B'
        }]
      }, {
        title: '二人餐'
      }, {
        title: '三人餐'
      }, {
        title: '四人餐'
      }]
    }
  }
}
</script>
