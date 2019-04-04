<template>
    <div class="List-box">
      <div class=line1>
        <div class="btn">JavaScript</div>
        <div class="">更多>></div>
      </div>
      <div class="test-box">
        <div class="item" v-for="item in test1" v-on:mouseover="mouseover" v-on:mouseleave="mouseout" :data-id="item.id">
          <h4>{{item.title}}</h4>
          <img src="../assets/logo.png" alt="">
          <h6>{{item.hot}}</h6>
          <div>{{item.difficutly}}<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></div>

          <!--鼠标悬浮时显示-->
          <div class="test-box begin-test-box" v-show="item.show">
            <div class="begin-test">开始答题</div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "List",
      data(){
          return{

          }
      },
      props:{
        test1:{
          type:Array
        }
      },
      methods:{
        mouseover:function(e){
          // console.log(this);
          // console.log(this.test1[1].show);
          // console.log(this.test1.show);
          // console.log(e.target.dataset.id);
          let index=e.target.dataset.id;
          this.test1[index].show=true;
        },
        mouseout(e){
          let index=e.target.dataset.id;
          this.test1[index].show=false;
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
    position: relative;
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
  /*margin-top: 20px;*/
  display: flex;
  flex-wrap: wrap;
}
  img{
    width: 60px;
  }

  /*隐藏的开始答题*/
.begin-test-box{
  /*display: none;*/
  background-color: rgba(255,156,124,0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0 auto;
  font-size: 30px;
  color: #FFF;
}
.begin-test{
    margin: 48% auto auto;
  background-color: greenyellow;
  }
</style>
