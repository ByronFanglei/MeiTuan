<template>
  <div class="babys">
    <city-header></city-header>
    <city-search></city-search>
    <city-list
          :cities="cities"
          :hot="hotcitys"
          :letter="letter"
          ></city-list>
    <city-alphabet
          :cities="cities"
          @change="getAlphabet"
          ></city-alphabet>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotcitys: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('./api/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.cities = data.cities
        this.hotcitys = data.hotCities
      }
    },
    getAlphabet (letter) {
      // （2）父组件接受子组件change并调用函数，参数为子组件返回值
      //  定义data中letter为子组件传值，通过data传值给另一个子组件
      this.letter = letter
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>
