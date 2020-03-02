<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index"  >
      <div class="item-title border-bottom" >
        <span class="iconfont item-icon">&#xeb99;</span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    color: $darkFontColor
  .item-children
    padding: 0 .2rem
</style>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
