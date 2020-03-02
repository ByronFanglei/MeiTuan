<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
