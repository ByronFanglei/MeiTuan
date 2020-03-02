<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="getElementInner"
        :ref="item"
        >{{item}}</li>
  </ul>
</template>

<style lang="stylus" scoped>
  .list
    position: absolute
    top: 1.89rem
    right: .2rem
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      line-height: .4rem
      text-align: center
      color: #FE8C00
</style>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      // 获取A字母距离搜索框的距离
      startY: 0,
      timer: null
    }
  },
  // 当页面渲染完毕后开始计算A到搜索框的值
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    getElementInner (e) {
      // 手指滑动逻辑开始
      // （1）通过点击事件向父组件发送点击内容
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)
    },
    handleTouchStart () {
      // （4）手指滑动时touchStatus为true
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // （6）当touchStatus为true时，开始执行滑动操作
      if (this.touchStatus) {
        // 当发现timer正在运行时，结束定时器--函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流，当判断手指在滑动时，停顿16ms后再次执行
        this.timer = setTimeout(() => {
          // 获取当前手指滑动字母距离搜索框的高度
          const touchY = e.touches[0].clientY - 97
          // 获取当先手指下滑到字母的下标值   20为字母间距
          const index = Math.floor((touchY - this.startY) / 20)
          // 判断计算得到的值是否符合数组长度大小
          if (index >= 0 && index < this.letters.length) {
            // 向父组件传递手指当前滑动到的字母，父组件再通过letter传入另一个子组件（完成手指滑动逻辑）
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      // （5）手指结束滑动时touchStatus为false
      this.touchStatus = false
    }
  }
}
</script>
