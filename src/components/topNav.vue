<template>
    <div>
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
    </div>
</template>

<script>
import resume from "../pages/resume"
    export default {
        name: "nav",
components:{
          resume
},
      mounted(){
        layui.use('element', function(){
          var element = layui.element
        })
      },
      methods: {}
    }
</script>

<style scoped>
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
