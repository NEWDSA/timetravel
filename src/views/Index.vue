<template>
  <div class="contanier">
    <div class="lpanel">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
        >
          <el-menu-item index="1">
            <i class="el-icon-notebook-1"></i>
            <span slot="title"  @click="study">学习计划</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-finance"></i>
            <span slot="title" @click="finat">消费金额</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-bell"></i>
            <span slot="title" @click="main">重要事项</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-notebook-2"></i>
            <span slot="title" @click="note">日记</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="lcont">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      direction: "rtl",
      activeName: "second",
    };
  },
  mounted() {},
  methods: {
    study(){
     //跳转路由到学习计划部分
     console.log(this.$router.push({name:'study'}));
    },
    finat(){
      //跳转路由到消费金额
    },
    main(){
       //跳转路由到重要事项
    },
    note(){
       //跳转路由到笔记
    },
    handleClose(done) {
      done();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    change(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  height: 100%;
  .lpanel {
    position: absolute;
    margin-top: 3rem;
    width: auto;
    height: calc(100% - 3rem);
    background: #000;
    user-select: none;
  }
  .lcont {
    position: absolute;
    margin-top: 3rem;
    margin-left: 12.5rem;
    width: calc(100% - 12.5rem);
    height: calc(100% - 3rem);
    background: #ffff;
    // border: 1px solid red;
  }
  // .is-selected {
  //   color: #1989fa;
  // }

  .canvas {
    position: absolute;
    justify-self: center;
    align-self: center;
    font-size: 20rem;
  }

  /deep/.el-col-12 {
    // width: 50%;
    width: 100%;
    height: 100%;
  }
  /deep/.el-menu {
    // border-right: solid 1px #e6e6e6;
    border: none;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    // background-color: #fff;
    height: 100%;
  }
}
</style>
