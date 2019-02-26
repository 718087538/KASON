<template>
  <div id="app">
  <topNav></topNav>
    <swiper></swiper>
    <classify></classify>
    <List></List>
  <router-view/>
  </div>
</template>

<script>
  import topNav from "./components/topNav"
  import swiper from './components/Swiper'
  import classify from "./components/classify"
  import List from  "./components/List"

export default {
  name: 'App',
  components:{
    topNav,
    swiper,
    classify,
    List
  }
}
</script>

<style>

</style>
