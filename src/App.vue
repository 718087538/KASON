<template>
  <div id="app">
  <topNav></topNav>
    <router-view/>
  </div>
</template>

<script>
  import topNav from "./components/topNav";
export default {
  name: 'App',
  components:{
    topNav
  }
}
</script>

<style>

</style>
