<template>
  <div id="app">
    <!-- 除了Detail，其他页面都会使用缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>

</style>

<script>
export default {
  name: 'App'
}
</script>
