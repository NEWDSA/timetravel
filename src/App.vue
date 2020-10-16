<template>
  <div  id="app">
    <canvas class="canvas"></canvas>
    <router-view class="view"/>
  </div>
</template>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #2c3e50;
  width: 100%;
  height: 100%;
  // font-size: 62.5%;
  font-size: calc(100vw / 192);
  @media screen and (max-width: 1920px) {
    font-size: 10px;
  }
  .canvas{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    // background-color: red;
    
  }
  .view{
    display: none;
  }
}
</style>
<script>
import {printColor} from '@/utils/screenAni'
export default {
  mounted() {
    setTimeout(() => {
      printColor($("canvas"))
      
      setTimeout(()=>{
        $('.view').css('display','block')
      },6000)
    },1000);
  },
}
</script>
