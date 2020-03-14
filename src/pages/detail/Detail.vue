<template>
  <div class="one">
    <detail-banner  :gallaryImgs="gallaryImgs"
                    :sightName="sightName"
                    :bannerImg="bannerImg"
                    ></detail-banner>
    <detail-header></detail-header>
    <detail-Price  :price="price"
                   :oldPrice="oldPrice"
                   :sales="sales"
                    ></detail-Price>
    <detail-appraise  :score="score"
                      :evaluation="evaluation"
                      :evaluations="evaluations"
                      ></detail-appraise>
    <detail-merchants :title="title"
                      :address="address"
                      ></detail-merchants>
    <detail-buyinfo></detail-buyinfo>
    <div class="contend">
      <detail-list :list="list"></detail-list>
    </div>
    <detail-comments  :comments="comments"
                      :score="score"
                      :address="address"
                      ></detail-comments>
    <home-bottom></home-bottom>
  </div>
</template>

<style lang="stylus" scoped>
  .one
    background: #f0f0f0
</style>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailPrice from './components/Price'
import DetailAppraise from './components/Appraise'
import DetailMerchants from './components/Merchants'
import DetailBuyinfo from './components/Buyinfo'
import DetailComments from './components/Comments'
import HomeBottom from '../home/components/Bottom'

import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailPrice,
    DetailAppraise,
    DetailMerchants,
    DetailBuyinfo,
    DetailComments,
    HomeBottom
  },
  data () {
    return {
      gallaryImgs: [],
      sightName: '',
      bannerImg: '',
      list: [],
      id: '',
      price: '',
      oldPrice: '',
      sales: '',
      score: '',
      evaluation: '',
      evaluations: [],
      title: '',
      address: '',
      comments: []
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
        const data = res.data[this.id]
        console.log(data)
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.price = data.price
        this.oldPrice = data.oldPrice
        this.sales = data.sales
        this.score = data.score
        this.evaluation = data.evaluation
        this.evaluations = data.evaluations
        this.title = data.title
        this.address = data.address
        this.comments = data.comments
      }
    }
  },
  created () {
    this.id = this.$store.state.index
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
