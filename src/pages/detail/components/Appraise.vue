<template>
  <div class="appraise">
    <div class="appraise-inner">
      <div class="appraise-star border-bottom">
        <div class="appraise-star-inner">
          <div v-for="(item,index) of setStar" :key="index">
            <span class="iconfont" v-if="item">&#xe607;</span>
            <span class="iconfont" v-else>&#xe621;</span>
          </div>
          <span class="appraise-star-score">{{setScore}}分</span>
        </div>
        <div>{{this.evaluation}}人评价<span class="iconfont">&#xeb9a;</span></div>
      </div>
    </div>
    <div class="appraise-eva">
      <div class="appraise-eva-inner">
        <div class="appraise-eva-inner-div" v-for="(item,index) of evaluations" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .appraise
    background: #fff
    margin-bottom: .2rem
    width: 100%
    display: flex
    flex-direction: column
    .appraise-inner
      width : 90%
      margin: 0 auto
      .appraise-star
        display: flex
        flex-directives: row
        justify-content: space-between
        padding: .28rem .2rem
        font-size: .28rem
        color: #999
        .appraise-star-inner
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center
          color: #fa952f
          .appraise-star-score
            margin-left: .1rem
    .appraise-eva
      width: 90%
      margin: 0 auto
      padding: .2rem 0
      .appraise-eva-inner
        display: flex
        flex-wrap: wrap
        .appraise-eva-inner-div
          color: #333
          padding: .1rem .11rem
          margin: 0 .1rem .14rem 0
          border: .02rem solid #FDB338
</style>

<script>
export default {
  name: 'DetailAppraise',
  props: {
    score: String,
    evaluation: String,
    evaluations: Array
  },
  computed: {
    setScore () {
      return this.score.charAt(0).concat('.', this.score.charAt(1))
    },
    setStar () {
      var num = this.score.substring(0, 1)
      var starArr = []
      for (let i = 1; i <= 5; i++) {
        if (num >= i) {
          starArr.push(1)
        } else {
          starArr.push(0)
        }
      }
      return starArr
    }
  }
}
</script>
