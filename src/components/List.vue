<template>
    <div class="List-box">
      <div class=line1>
        <div class="btn">JavaScript</div>
        <div class="">更多>></div>
      </div>
      <div class="test-box">
        <div class="item">
          <h4>JS经典笔试题第1套</h4>
          <img src="../assets/logo.png" alt="">
          <h6>热度指数:223</h6>
          <div>难度系数</div>
        </div>

        <div class="item">
          <h4>JS经典笔试题第1套</h4>
          <img src="../assets/logo.png" alt="">
          <h6>热度指数:223</h6>
          <div>难度系数</div>
        </div>

        <div class="item">
          <h4>JS经典笔试题第1套</h4>
          <img src="../assets/logo.png" alt="">
          <h6>热度指数:223</h6>
          <div>难度系数</div>
        </div>

        <div class="item">
          <h4>JS经典笔试题第1套</h4>
          <img src="../assets/logo.png" alt="">
          <h6>热度指数:223</h6>
          <div>难度系数</div>
        </div>

        <div class="item">
          <h4>JS经典笔试题第1套</h4>
          <img src="../assets/logo.png" alt="">
          <h6>热度指数:223</h6>
          <div>难度系数</div>
        </div>
      </div>



      <div style="height:300px"></div>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>
.List-box{
  width: 1060px;
  margin: 0 auto;
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
}
  img{
    width: 60px;
  }
</style>
