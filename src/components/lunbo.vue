<template>
  <el-carousel  height="100vh" direction="vertical" trigger  ref="carousel">
    <el-carousel-item v-for="(item,index) in imgs" :key="index">
      <img :src="item.img" alt="" srcset=""  @click="setActive(index)">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    data() {
      return {
        imgs: [{img: require('../img/IMG_20190622_143231.jpg')},
        {img:require('../img/IMG_20190622_143233.jpg')},
        {img:require('../img/IMG_20190622_143413.jpg')},
        {img:require('../img/IMG_20190622_144118.jpg')},
        {img:require('../img/IMG_20190622_144120.jpg')},
        {img:require('../img/IMG_20190622_145336.jpg')},
        {img:require('../img/IMG_20190622_145339.jpg')}]
      }
    },
    methods:{
      //手动切换轮播图
      setActive(index){
        console.log(this.$refs.carousel.next())
      }
    }
  }

</script>
<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
img{
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: fill;
  z-index: 10;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
