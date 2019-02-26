<template>
  <div id="app">
  <topNav></topNav>

  <router-view/>
  <router-link to="resume" class="big">测试跳转</router-link>
  <Footer></Footer>
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
.big{
  font-size: 100px;
}
</style>
