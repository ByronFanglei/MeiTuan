<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<style lang="stylus" scoped>
  .list
    position: absolute
    top: 1.89rem
    right: .2rem
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      line-height: .4rem
      text-align: center
      color: #FE8C00
</style>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
