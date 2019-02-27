<template>
    <div class=imgBox>
      <div class="imgList">
          <div v-for="item in items">
            <img class="imgg" :src="item.src" alt="">
            <h5>{{item.title}}</h5>
            <P>{{item.info}}</P>
          </div>
      </div>
    </div>
</template>



<script>
  // import Vuepng from "../assets/images/Vue.png"
    export default {
        name: "classify",
      data(){
          return{
            items:[
              {src:require('../assets/images/Vue.png'),title:"VUE试题",info:"组件试开发"},
              {src:require('../assets/images/js.png'),title:"JS笔试",info:"前端的精髓"},
              {src:require('../assets/images/css.png'),title:"css笔试",info:"页面的灵魂"},
              {src:require('../assets/images/node.png'),title:"node笔试",info:"服务器开发"},
              {src:require('../assets/images/WeChat.png'),title:"小程序",info:"随用随走"},
            ],
          }
      }
    }
</script>

<style scoped>
  .imgBox{
    background-color: #eeeeee;
    padding: 30px 0;
  }

.imgList{
  display: flex;
  width: 1060px;
  justify-content: space-between;
  margin: 0 auto;
  height: ;
  text-align: center;
  background-color: #eee;
}
.imgg{
  width: 90px;
  height: 90px;
}
</style>
