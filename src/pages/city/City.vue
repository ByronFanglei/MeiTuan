<template>
  <div class="babys">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<style lang="stylus" scoped>
  .babys
    background: #eee
</style>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
