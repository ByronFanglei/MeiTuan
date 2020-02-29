<template>
  <div class="babys">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotcitys"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      hotcitys: []
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
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>
