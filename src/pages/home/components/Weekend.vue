<template>
  <div>
    <div class="title">周末吃啥嘞</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .title
    height: .84rem
    line-height: .84rem
    font-size: .34rem
    color: $darkFontColor
    margin-left: .2rem
    margin-top: .2rem
    border-bottom: 1px solid #eee
  .item
    overflow: hidden
    margin-left: .2rem
    margin-top: .2rem
    border-bottom: 1px solid #eee
    color: $darkFontColor
    .item-img-wrapper
      overflow:hidden
      height: 0
      padding-bottom: 50%
      .item-img
        width: 100%
    .item-info
      padding-top: .2rem
      min-width: 0
      .item-title
        font-size: .30rem
        ellipsis()
      .item-desc
        display:inline-block
        font-size: .24rem
        margin: .15rem 0 .15rem 0
        ellipsis()
</style>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://p1.meituan.net/deal/f524ecf569143ba627a6f18529e4515d79443.jpg',
        title: '金语轩烤肉火锅自助餐',
        desc: '单人自助'
      }, {
        id: '002',
        imgUrl: 'http://p0.meituan.net/deal/a7b900ef68ff1933a4845a9d9b67e42a101111.jpg',
        title: '簋街大肠卤煮',
        desc: '大肠卤煮单人餐，提供免费WiFi'
      }, {
        id: '003',
        imgUrl: 'http://p1.meituan.net/deal/3bf4587938b51e414e38483496daff5150100.jpg',
        title: '旺顺阁鱼头泡饼',
        desc: '100元代金券1张，可叠加'
      }, {
        id: '004',
        imgUrl: 'http://p0.meituan.net/deal/a6ebaaf5960f46cb7d7fa227dd3b17ce33137.jpg',
        title: '味多美',
        desc: '【可自提】老婆饼（玫瑰味）1粒'
      }, {
        id: '005',
        imgUrl: 'http://p1.meituan.net/deal/08fb85a7fc83d0f7a085681202aad13b245093.jpg',
        title: '山城辣妹子重庆火锅',
        desc: '100元代金券1张，可叠加'
      }]
    }
  }
}
</script>
