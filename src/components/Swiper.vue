<template>
    <div class="swiper">
      <div class="swiper-nav">
        <ul>
          <li v-on:mouseover="doThis">学习网站</li>
          <li>JavaScript</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Vue</li>
          <li>小程序</li>
          <li>Node</li>
          <li>软件和工具</li>
        </ul>
      </div>
      <div class="swiper-img layui-carousel"  id="test1">
        <div  carousel-item>
          <div>条目1</div>
          <div>条目2</div>
          <div>条目3</div>
          <div>条目4</div>
          <div>条目5</div>
        </div>
        <div class="plug" v-show='num == 1'>
        第1个二级菜单
        </div>
        <div class="plug" v-show='num == 2'>
          第2个二级菜单
        </div>
        <div class="plug" v-show='num == 3'>
          第3个二级菜单
        </div>
        <div class="plug" v-show='num == 4'>
          第4个二级菜单
        </div>
        <div class="plug" v-show='num == 5'>
          第5个二级菜单
        </div>
        <div class="plug" v-show='num == 6'>
        第6个二级菜单
      </div>
        <div class="plug" v-show='num == 7'>
          第7个二级菜单
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
      data(){
        return{
          num:2
        }
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
        doThis:function () {
          this.num=1;
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
    background-color: #00FF00;
  }
</style>
