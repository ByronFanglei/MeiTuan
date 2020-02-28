# Meituan

> A Vue.js project
## 简介
采用**vue**框架搭载美团网前端页面

## 技术方面

### css
```css
reset.css		//格式化css
border.css		//解决border 1px问题
iconfont		//字体图标
```
### 插件
	vue.cil			//vue脚手架
	stylus			//简化css语法插件
	stylus-loader
	FastClick		//解决用户点击屏幕大约延迟300毫秒后才会触发点击事件问题
	vue-awesome-swiper	//vueSwiper插件
	axios			//vue推荐ajax，可以实现跨平台

### 单个页面要点内容
index-icons页面
  轮播页面算法:

  ```javascript
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
  ```
index-recommended页面
  当网络较慢时加载页面时，下方字体可能会提前比上方图片预先加载，此时字体极有可能在图片位置停留，影响用户体验，采用以下方法解决：

  ```css
	height: 0
	padding-bottom: 50%  //高比宽的值，当页面加载直接保留图片的位置
  ```
  内容溢出省略号（自己老是记不住哇记不住）
  ```css
	overflow: hidden
	white-space: nowrap
	text-overflow: ellipsis
  ```
index-ajax方面
  ajax方式：fetch，vue-resource,axios(vue官方推荐，可以实现跨平台)

  ```bash
  # axios安装
  npm install axios --save
  # axios使用promise所以要使用.then方法获取返回对象
  ```
  swiper页面：
    用空数组进行创建时，初始渲染页面内容为最后一项，需要进行数组长度判定，为空不创建，否则再创建

## 其他方面

多页面应用（返回html）
	优点：首屏时间快，SEO效果好
	缺点：页面切换慢

单页面应用（js渲染）*推荐*
	优点：页面切换快
	缺点：首屏事件慢，SEO差






## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
