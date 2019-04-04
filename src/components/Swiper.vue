<template>
    <div>
      <div class="swiper">
      <div class="swiper-nav" style="position:relative" v-on:mouseleave="removeActive">
        <ul v-on:mouseover="addActive">
          <li v-for="(item,index) in menuList" :data-id='index'>{{item}}</li>
        </ul>
        <div class="plug" v-show='num == 0'>
          第1个二级菜单
        </div>
        <div class="plug" v-show='num == 1'>
          第2个二级菜单
        </div>
        <div class="plug" v-show='num == 2'>
          第3个二级菜单
        </div>
        <div class="plug" v-show='num == 3'>
          第4个二级菜单
        </div>
      </div>
      <div class="swiper-img layui-carousel"  id="test1">
        <div  carousel-item>
          <div><img class="slideImg" src="/static/images/ko.png" alt=""></div>
          <div>条目2</div>
          <div>条目4</div>
          <div>条目3</div>
          <div>条目5</div>
        </div>
      </div>
    </div>
      <Classify></Classify>
      <List :test1="test1"></List>
      <List></List>
    </div>
</template>

<script>
  import Classify from './classify'
  import List from './List'
    export default {
        name: "Swiper",
      data(){
        return{
          menuList: ['学习空间','小程序','Vue','JavaScript','CSS3','HTML5','Node','软件和工具',],
          num:10,
          test1:[
            {id:"0",title:"数据来自父组件",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"1",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"2",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"3",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"4",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"5",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"6",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"7",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"8",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
            {id:"9",title:"JS经典笔试第1套",hot:"热度指数:223",difficutly:"难度:",show:false},
          ],
        }
      },
      components:{
        Classify,
        List
      },
      mounted(){
        layui.use('carousel', function(){
          var carousel = layui.carousel;
          //建造实例
          carousel.render({
            elem: '#test1'
            ,width: '100%'
            ,arrow: 'always'
            //,anim: 'updown'
            ,height:'100%'
          });
        });

      },
      methods:{
        addActive:function (e) {
          // console.log(e.target.dataset.id);
          this.num=e.target.dataset.id;
        },
        removeActive:function (e) {
          this.num='10';
        }
      }
    }
</script>

<style scoped>
.swiper{
  margin: 40px auto;
  width: 1060px;
  height: 480px;
  display: flex;
  border-radius: 10px;
  position: relative;
  background-color: deeppink;
}
  .swiper ul li{
    width: 180px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .swiper ul li:hover{
    background-color: #FFFF00;
  }
  .swiper-img{
    flex: 1;
  }
  /*悬停显示的内容*/
  .plug{
    width: 800px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 180px;
    z-index: 10;
    background-color: #00FF00;
  }
  .slideImg{
    width: 100%;
    height: 100%;
  }
</style>
