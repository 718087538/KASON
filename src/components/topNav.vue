<template>
    <div>
      <div class="my-nav layui-nav">
        <ul class="" lay-filter="">
          <li class="layui-nav-item layui-this"><a href="">首页</a></li>
        </ul>
        <ul>
          <button class="layui-btn layui-btn-radius layui-btn-normal">注册</button>
          <button class="layui-btn layui-btn-radius">登录</button>
        </ul>
      </div>
    </div>
</template>

<script>

    export default {
        name: "nav",
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
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
