<template>
  <div id="app">
  <topNav></topNav>
    <swiper></swiper>
    <classify></classify>
  <router-view/>
  </div>
</template>

<script>
  import topNav from "./components/topNav"
  import swiper from './components/Swiper'
  import classify from "./components/classify"

export default {
  name: 'App',
  components:{
    topNav,
    swiper,
    classify
  }
}
</script>

<style>

</style>
