<template>
  <div id="app">
  <topNav></topNav>
    <swiper></swiper>
    <classify></classify>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <List></List>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
  import topNav from "./components/topNav"
  import swiper from './components/Swiper'
  import classify from "./components/classify"
  import List from  "./components/List"
  import Footer from "./components/Footer"

export default {
  name: 'App',
  components:{
    topNav,
    swiper,
    classify,
    List,
    Footer
  }
}
</script>

<style>

</style>
