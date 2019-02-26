<template>
    <div class=imgBox>
      <div class="imgList">
          <div v-for="item in items">

            <!--为什么这里绑定src不显示？？？-->

            <img class="imgg" :src="item.src" alt="">

            <h5>{{item.title}}</h5>
            <P>{{item.info}}</P>
          </div>
      </div>
      <!--<img src="../assets/images/Vue.png" alt="">-->
    </div>
</template>

<script>
    export default {
        name: "classify",
      data(){
          return{
            items:[
              {src:"../assets/images/Vue.png",title:"VUE试题",info:"天下无敌"},
              {src:"../assets/images/Vue.png",title:"JS笔试",info:"天下无敌"},
              {src:"../assets/images/Vue.png",title:"css笔试",info:"天下无敌"},
              {src:"../assets/images/Vue.png",title:"node笔试",info:"天下无敌"},
              {src:"../assets/images/Vue.png",title:"小程序",info:"天下无敌"},
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
  background-color: #eee;
}
.imgg{
  width: 90px;
  height: 90px;
}
</style>
