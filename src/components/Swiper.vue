<template>
    <div class="swiper">
      <div class="swiper-nav">
        <ul>
          <li>前端开发</li>
          <li>前端开发</li>
          <li>前端开发</li>
          <li>前端开发</li>
          <li>前端开发</li>
          <li>前端开发</li>
          <li>前端开发</li>
          <li>前端开发</li>
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

      </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
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
</style>
