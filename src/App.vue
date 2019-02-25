<template>
  <div id="app">
  <topNav></topNav>
    <swiper></swiper>
  <router-view/>
  </div>
</template>

<script>
  import topNav from "./components/topNav";
  import swiper from './components/Swiper'
export default {
  name: 'App',
  components:{
    topNav,
    swiper

  }
}
</script>

<style>

</style>
