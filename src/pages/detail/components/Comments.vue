<template>
  <div class="comments">
    <div class="comments-one border-bottom">
      <div class="comments-one-text">评论</div>
      <div class="comments-one-star">
        <div v-for="(item, index) of setStar" :key="index">
          <span class="iconfont" v-if="item">&#xe607;</span>
          <span class="iconfont" v-else>&#xe621;</span>
        </div>
        <span class="comments-one-star-score">{{setScore}}分</span>
      </div>
    </div>
    <div class="comments-two border-bottom" v-for="(item,index) of comments" :key="index" :address="address" :resultStar="resultStar">
      <div class="comments-two-user">
        <div class="comments-two-user-img">
          <img :src="item.userImg" class="comments-two-user-img-inner" />
        </div>
        <div class="comments-two-user-text">
          <div>{{item.userName}}</div>
          <div class="comments-two-user-star">
            <div v-for="(item,index) of resultStar[index]" :key="index">
              <span class="iconfont" v-if="item">&#xe607;</span>
              <span class="iconfont" v-else>&#xe621;</span>
            </div>
            <span class="comments-two-user-star-time">{{item.commentTime}}</span>
          </div>
        </div>
      </div>
      <div class="comments-two-text">{{item.comment}}</div>
      <div class="comments-two-imgs">
        <swiper :options="swiperOption">
          <swiper-slide class="comments-two-imgs-swiper" v-for="(item, index) of item.commentImg" :key="index">
            <img class="comments-two-imgs-inner" :src="item" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="comments-two-address">{{address}}</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .comments
    background: #fff
    margin-bottom: .2rem
    .comments-one
      width: 90%
      margin: 0 auto
      display: flex
      flex-direction: row
      justify-content: space-between
      .comments-one-text
        font-size: .34rem
        color: #333
        padding: .22rem .2rem
      .comments-one-star
        display: flex
        flex-direction: row
        font-size: .34rem
        color: #fa952f
        padding: .22rem .2rem
        .comments-one-star-score
          margin-left: .1rem
    .comments-two
      display: flex
      flex-direction: column
      width: 90%
      margin: 0 auto
      .comments-two-user
        display: flex
        flex-direction: row
        color: #333
        padding: .3rem 0
        .comments-two-user-img
          width: .73rem
          height: .73rem
          border-radius: 50%
          overflow: hidden
          .comments-two-user-img-inner
            width: 100%
            height: 100%
        .comments-two-user-text
          display: flex
          flex-direction: column
          .comments-two-user-star
            display: flex
            flex-direction: row
            margin-top: .1rem
            color: $starColor
            .comments-two-user-star-time
              margin-left: .2rem
      .comments-two-text
        font-size: .3rem
        color: #333
        line-height: .4rem
      .comments-two-imgs
        padding: .12rem 0
        .comments-two-imgs-swiper
          display: flex
          flex-wrap: nowrap
          .comments-two-imgs-inner
            width: 2.2rem
            height: 2.2rem
            margin-right: .01rem
      .comments-two-address
        color: #666
        padding: .1rem 0 .2rem 0
</style>

<script>
export default {
  name: 'DetailComments',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3
      }
    }
  },
  props: {
    comments: Array,
    address: String,
    score: String
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
    },
    resultStar () {
      var starsArr = []
      var comments = this.comments
      for (let i = 0; i < comments.length; i++) {
        starsArr.push(comments[i].userStar)
      }
      var userStarsArr = []
      for (let i = 0; i < starsArr.length; i++) {
        var num = starsArr[i].substring(0, 1)
        for (let i = 0; i < 5; i++) {
          if (num > i) {
            userStarsArr.push(1)
          } else {
            userStarsArr.push(0)
          }
        }
      }
      var result = []
      for (let i = 0; i < userStarsArr.length; i += 5) {
        result.push(userStarsArr.slice(i, i + 5))
      }
      return result
    }
  }
}
</script>
