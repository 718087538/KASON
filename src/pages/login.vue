<template>
    <div>
      <div class="box">
        <form action="">
        <h1>登录</h1>
        <input class="layui-input" required type="text" placeholder="请输入账号"><br>
        <input class="layui-input" required  type="text" placeholder="请输入密码"><br>

        <button class="layui-btn layui-btn-normal">登录</button>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
.box{
  width: 280px;
  height: 500px;
  margin: 0 auto;
  margin-top: 60px;
}
  h1{
    margin-bottom: 26px;
  }
</style>
