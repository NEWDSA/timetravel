<template>
  <div id="app">
    <Header></Header>
    <canvas class="canvas"></canvas>
    <!-- 添加过渡动效 -->
    <transition>
      <router-view class="view" v-show="show" />
    </transition>
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
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
<script>
import { printColor } from "@/utils/screenAni";
import { mapMutations } from "vuex";
import Header from "./components/header"; //引入头部组件

export default {
  data() {
    return {
      show:''
    }
  },
  mounted() {

    this.myShow()
    setTimeout(() => {
      printColor($("canvas"));
      setTimeout(()=>{
        this.myCShow()
      },6000)
    }, 1000);
  },
  methods: {
    ...mapMutations(["changeShow"]),
    myShow() {
      this.changeShow({show:false})
      this.show=this.$store.state.show
    },
    myCShow(){
      this.changeShow({show:true})
      this.show=this.$store.state.show
    }
  },
  components: {
    Header,
  },
};
</script>
