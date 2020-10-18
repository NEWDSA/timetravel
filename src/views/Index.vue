<template>
  <div class="contanier">
    <Lunbo class="lunbo"></Lunbo>
    <div @click="drawer = true" class="dcontent" id="dcontent">{{ date }}</div>
    <el-drawer
      size="100%"
      title="添加计划"
      :visible.sync="drawer"
      :with-header="false"
      :direction="direction"
      :before-close="handleClose"
    >
      <div style="margin-top: 3rem" @click="drawer = false">
        <h1>开始你的计划吧</h1>
      </div>
      <template>
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-time"></i>闹钟</span>
            <el-container>
              <el-main>
                <el-form
                  :model="formm"
                  ref="elForm"
                  size="medium"
                  label-width="100px"
                >
                  <template v-for="(item, index) in formData">
                    <el-row>
                      <el-col :span="6">
                        <el-button
                          @click="remove(index)"
                          type="danger"
                          icon="el-icon-delete"
                          circle
                        ></el-button>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item>
                          <span slot="label">
                            {{ item.note }}
                          </span>
                          <el-time-picker
                            v-model="item.time"
                            format="HH:mm"
                            value-format="HH:mm"
                            :style="{ width: '100%' }"
                            placeholder="请选择时间选择"
                            clearable
                          ></el-time-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="开关" required>
                          <el-switch
                            active-value="1"
                            inactive-value="2"
                            v-model="item.check"
                            @change="handlecheckCell(index)"
                          ></el-switch>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </template>

                  <el-row>
                    <el-button
                      type="success"
                      @click="add"
                      icon="el-icon-plus"
                      circle
                    ></el-button>
                  </el-row>
                </el-form>
              </el-main>
            </el-container>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-s-finance"></i>月度消费</span>
            <el-container>
              <el-main>
                <el-calendar>
                  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                  <template slot="dateCell" slot-scope="{ date, data }">
                    <p :class="data.isSelected ? 'is-selected' : ''">
                      {{ data.day.split("-").slice(1).join("-") }}
                      {{ data.isSelected ? "✔️" : "" }}
                    </p>
                  </template>
                </el-calendar>
              </el-main>
            </el-container>
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
import Lunbo from "../components/lunbo";
export default {
  data() {
    return {
      date: new Date().toLocaleTimeString("en-GB"),
      drawer: false,
      direction: "rtl",
      activeName: "second",
      formData: [],
      formm: {},
    };
  },
  mounted() {
    var a = localStorage.getItem("hou");
    this.formData = JSON.parse(localStorage.hou);
    if (!a == undefined) {
      var bb = JSON.stringify(localStorage.getItem("hou"));
      bb.forEach((item, index) => {
        this.formm[index] = item;
      });
    }

    const time = this.date.substring(0, 5);
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
      // location.reload();
    },
  },
  components: {
    Lunbo,
  },
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  height: 100%;
  color: #3366ff;
  .dcontent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20rem;
    color: rgba(255, 255, 255, 0.2);
    z-index: 11;
    cursor: pointer;
    user-select: none;
  }
  .dcontent:active {
    color: red;
  }
  .lunbo {
    //  position: absolute;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
  }
  .is-selected {
    color: #1989fa;
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

  .el-drawer__body > * {
    box-sizing: border-box;
    /* top: 2rem; */
    margin-top: 4rem;
  }
  /deep/.el-drawer {
    position: absolute;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* background-color: #FFF; */
    background-color: rgba(255, 255, 255, 0.2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
  /deep/.el-tabs--border-card > .el-tabs__content {
    padding: 15px;
    height: 80rem;
    @media screen and (max-width: 1080px) {
      height: 700px;
    }
    background-color: rgba(255, 255, 255, 0.2);
    overflow-y: scroll;
  }
  /deep/.el-tabs--border-card {
    background-color: rgba(255, 255, 255, 0.2);
    /* border: 1px solid #DCDFE6; */
    /* -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04); */
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04); */
  }
}

/deep/.el-col-12 {
  width: auto;
}
</style>
