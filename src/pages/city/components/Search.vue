<template>
  <div>
    <div class="search">
      <input v-model="keyword"  type="text" :class="[SearchInput,texts]" placeholder="请输入城市或拼音" @click="getinput" />
    </div>
    <div class="search-login" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list"
            :key="item.id"
            class="search-item border-bottom"
            @click="handChangeCity(item.name)"
            >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="isList">未匹配到对应城市</li>
      </ul>
    </div>
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
  .search-login
    overflow: hidden
    z-index: 1
    background: #eee
    position: absolute
    top: 1.86rem
    left: 0
    right: 0
    bottom: 0
    .search-item
      background: #fff
      color: $darkFontColor
      padding-left: .2rem
      line-height: .62rem
</style>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      texts: '',
      SearchInput: 'search-input',
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    isList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1 ||
                value.spell.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    getinput () {
      this.texts = 'texts'
    },
    handChangeCity (city) {
      // this.$store.commit('changeCity', city)
      // vue高级用法
      this.changeCity(city)
      this.$router.push('/')
      this.keyword = ''
    },
    // vue高级用法
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
