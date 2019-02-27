<template>
  <div id="app">
    <div class="my-nav layui-nav">
      <div class="logo-box">
        <img src="/static/images/logo.png" alt="" class="logo">
        <ul class="" lay-filter="">
          <li class="layui-nav-item layui-this"><a href="">首页</a></li>
          <li class="layui-nav-item">

            <router-link to="resume">简述</router-link>

          </li>
        </ul>
      </div>
      <ul>
        <button class="layui-btn layui-btn-radius layui-btn-normal">注册</button>
        <button class="layui-btn layui-btn-radius">登录</button>
      </ul>
    </div>

  <router-view/>
  <Footer></Footer>
  </div>
</template>

<script>
  import swiper from './components/Swiper'
  import classify from "./components/classify"
  import List from  "./components/List"
  import Footer from "./components/Footer"

export default {
  name: 'App',
  components:{
    swiper,
    classify,
    List,
    Footer
  },
  mounted(){
    layui.use('element', function(){
      var element = layui.element
    })
  },
}
</script>

<style>

.my-nav{
  min-width: 960px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  width: 150px;
  height: 46px;
  margin-right: 4%;
}
.logo-box{
  flex: 1;
  display: flex;
  align-items: center;
}
</style>
