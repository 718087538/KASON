<template>
    <div class=imgBox>
      <div class="imgList">
          <div v-for="item in items">
            <img class="imgg" :src="item.src" alt="">
            <h5>{{item.title}}</h5>
            <P>{{item.info}}</P>
          </div>
      </div>
      <img :src="srcc" alt="">
    </div>
</template>

<script>
    export default {
        name: "classify",
      data(){
          return{
            items:[
              {"src":"../assets/images/Vue.png",title:"VUE题",info:"学会之后，天下无敌"},
              {"src":"../assets/images/Vue.png",title:"VUE题",info:"学会之后，天下无敌"},
              {"src":"../assets/images/Vue.png",title:"VUE题",info:"学会之后，天下无敌"},
              {"src":"../assets/images/Vue.png",title:"VUE题",info:"学会之后，天下无敌"},
              {"src":"../assets/images/Vue.png",title:"VUE题",info:"学会之后，天下无敌"},
            ],
            srcc:"../assets/images/Vue.png"
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
