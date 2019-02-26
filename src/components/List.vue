<template>
    <div class="List-box">
      <div class=line1>
        <div class="btn">JavaScript</div>
        <div class="">更多>></div>
      </div>
      <div class="test-box">
        <div class="item" v-for="item in test">
          <h4>{{item.title}}</h4>
          <img src="../assets/logo.png" alt="">
          <h6>{{item.hot}}</h6>
          <div>{{item.difficutly}}<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "List",
      data(){
          return{
            test:[
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
              {title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:"},
            ]
          }
      }
    }
</script>

<style scoped>
.List-box{
  width: 1060px;
  margin: 0 auto 40px;
}
  .line1{
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    border-bottom: 2px solid #25BB9B;
  }
  .btn{
    color: #FFF;
    height: 50px;
    line-height: 50px;
    background-color: #25BB9B;
  }
  .item{
    width: 188px;
    height: 260px;
    margin-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #eeeeee;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
.item:nth-child(5n+5){
  margin-right: 0;
}
.test-box{
  justify-content: space-between;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
  img{
    width: 60px;
  }
</style>
