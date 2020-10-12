<template>
  <div class="contanier">
    <Lunbo class="lunbo"></Lunbo>
    <div @click="drawer = true" class="dcontent" id="dcontent">{{ date }}</div>
    <canvas @click="drawer = true" class="canvas"></canvas>
    <el-drawer size="40%" title="添加计划" :visible.sync="drawer" :with-header="false" :direction="direction"
      :before-close="handleClose">
      <div style="margin-top: 3rem">
        <h1>开始你的计划吧</h1>
      </div>
      <template>
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-time"></i>闹钟</span>
            <el-container>
              <el-main>
                <el-form :model="formm" ref="elForm" size="medium" label-width="100px">
                  <template v-for="(item, index) in formData">
                    <el-row>
                      <el-col :span="6">
                        <el-button @click="remove(index)" type="danger" icon="el-icon-delete" circle></el-button>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item>
                          <span slot="label">
                            {{ item.note }} 
                          </span>
                          <el-time-picker v-model="item.time" format="HH:mm" value-format="HH:mm"
                            :style="{ width: '100%' }" placeholder="请选择时间选择" clearable></el-time-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="开关" required>
                          <el-switch active-value="1" inactive-value="2" v-model="item.check"
                            @change="handlecheckCell(index)"></el-switch>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </template>

                  <el-row>
                    <el-button type="success" @click="add" icon="el-icon-plus" circle></el-button>
                  </el-row>
                </el-form>
              </el-main>
            </el-container>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-s-finance"></i>月度消费</span>
          </el-tab-pane>
          <el-tab-pane label="学习计划">学习计划</el-tab-pane>
          <el-tab-pane label="年度计划">年度计划</el-tab-pane>
          <el-tab-pane label="铁盒子">铁盒子</el-tab-pane>
        </el-tabs>
      </template>
    </el-drawer>
  </div>
</template>
<script>
  // import {
  //   handleSpeak,
  //   sayTo
  // } from "../utils/voice";
  
  import Lunbo from '../components/lunbo'
  export default {
    data() {
      return {
        date: new Date().toLocaleTimeString("en-GB"),
        drawer: false,
        direction: "rtl",
        activeName: "second",
        formData: [],
        formm: {},
        wakeUp: {}
      };
    },
    mounted() {
      var a = JSON.parse(localStorage.hou);
      this.formData = JSON.parse(localStorage.hou);
      a.forEach((item, index) => {
        this.formm[index] = item;
      });
      const time = this.date.substring(0, 5);
      
      this.timer = setInterval(() => {
        this.date = new Date();
        this.date = this.date.toLocaleTimeString("en-GB");
        const time = this.date.substring(0, 5);
        // sayTo(time);
      }, 1000);
    },
    methods: {
      handleClose(done) {
        done();
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      change(e) {
        console.log(e);
      },
      add() {
        this.formData.push({});
        localStorage.setItem("hou", JSON.stringify(this.formData));
      },
      remove(index) {
        this.formData.splice(index, 1);
        localStorage.setItem("hou", JSON.stringify(this.formData));
      },
      handlecheckCell(index) {
        localStorage.setItem("hou", JSON.stringify(this.formData));
        location.reload();
      },
    },
    components:{
      Lunbo
    }
  };

</script>
<style lang="scss" scoped>
  .contanier {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    color: #3366ff;
    .dcontent {
      position: absolute;
      justify-self: center;
      align-self: center;
      font-size: 20rem;
      color: rgba(255, 255, 255, 0.2);
      -webkit-animation: 4s linear 0s infinite alternate dcontent;
      animation: 4s linear 0s infinite alternate dcontent;
      z-index: 11;
      cursor: pointer;
      user-select: none;
    }
    .dcontent:active {
      color: red;
    }
    .lunbo{
      width: 100%;
    }

    @-webkit-keyframes dcontent {
      from {
        margin-left: -25%;
      }

      to {
        margin-left: calc(100% - 153rem);
      }
    }

    @keyframes dcontent {
      from {
        margin-left: -25%;
      }

      to {
        margin-left: calc(100% - 153rem);
      }
    }

    .canvas {
      position: absolute;
      justify-self: center;
      align-self: center;
      font-size: 20rem;
    }

    .el-tabs--top {
      text-align: center;
    }

    .el-drawer__body>* {
      box-sizing: border-box;
      /* top: 2rem; */
      margin-top: 4rem;
    }
  }

  /deep/.el-col-12 {
    width: auto;
  }

</style>
