<template>
  <div class="one">
    <detail-banner  :gallaryImgs="gallaryImgs"
                    :sightName="sightName"
                    :bannerImg="bannerImg"
                    ></detail-banner>
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
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      gallaryImgs: [],
      sightName: '',
      bannerImg: '',
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailIInfoSuccess)
    },
    getDetailIInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
