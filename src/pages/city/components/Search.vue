<template>
  <div class="search">
    <input  type="text" :class="[SearchInput,texts]" placeholder="请输入城市" @click="getinput" />
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .search
    height: .78rem
    padding: .1rem 0 .1rem
    background: $cityBgcolor
    .search-input
      width: 95%
      display: table
      // vertical-align: middle
      margin 0 auto
      height: .68rem
      line-height: .68rem
      // text-align: center
      padding: 0 .3rem
      box-sizing: border-box
      color: $darkFontColor
    .texts
      text-align: center
</style>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      texts: '',
      SearchInput: 'search-input'
    }
  },
  methods: {
    getinput () {
      this.texts = 'texts'
    }
  }
}
</script>
