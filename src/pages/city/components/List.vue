<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.stateCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
                v-for="item of hot"
                :key="item.id"
                @click="handChangeCity(item.name)"
                >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="button-all">
          <div class="button-one border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handChangeCity(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    position:absolute
    top: 1.89rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    // background: red
    .title
      padding: .2rem 0 .2rem .2rem
      color: $darkFontColor
      font-size: .28rem
      background: $cityBgcolor
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.3%
        float: left
        .button
          border: .02rem solid #ff6700
          text-align: center
          padding: .1rem 0
          margin: .1rem
    .button-all
      .button-one
        padding: .1rem 0 .1rem .2rem
        background: #fff
        line-height: .4rem
</style>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // vue高级用法
    ...mapState({
      stateCity: 'city'
    })
  },
  methods: {
    handChangeCity (city) {
      // this.$store.commit('changeCity', city)
      // vue高级用法
      this.changeCity(city)
      this.$router.push('/')
    },
    // vue高级用法
    ...mapMutations(['changeCity'])
  },
  watch: {
    // （3）通过props接受父组件传值，并通过watch监听值是否发生变化,通过scroll.scrollToElement函数指向到指定位置(自此点击活动到对应字母完毕)
    letter () {
      if (this.letter) {
        // 获取指定字母对应的list的DOM
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
