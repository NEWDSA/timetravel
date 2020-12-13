<template>
  <div class="study">
    <el-row class="header">
      <!-- <span>一起开始计划吧！</span>
          <el-button type="primary" icon="el-icon-plus" circle></el-button> -->
      <el-calendar v-model="value" id="calender">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{ date, data }">
          <!-- <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(1).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p> -->
          <!-- 自定义内容 -->
          <div>
            <div class="calendar-day">
              {{ data.day.split("-").slice(2).join("-") }}
            </div>
            <div v-for="item in calendarData">
              <div
                v-if="
                  item.months.indexOf(data.day.split('-').slice(1)[0]) != -1
                "
              >
                <div
                  v-if="
                    item.days.indexOf(data.day.split('-').slice(2).join('-')) !=
                    -1
                  "
                >
                  <el-tooltip
                    class="item"
                    effect="dark"
                    :content="item.things"
                    placement="right"
                  >
                    <div class="is-selected">{{ item.things }}</div>
                  </el-tooltip>
                </div>
                <div v-else></div>
              </div>
              <div v-else></div>
            </div>
          </div>
        </template>
      </el-calendar>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.study {
  width: 100%;
  height: 100%;
  .header {
    background: blue;
    span {
      font-size: 2rem;
    }
    i {
      float: right;
      margin: 0 1rem;
      line-height: 2rem;
    }
    .calendar-day {
      text-align: center;
      color: #202535;
      line-height: 30px;
      font-size: 12px;
    }
    .is-selected {
      color: #f8a535;
      font-size: 10px;
      margin-top: 5px;
    }
    #calendar
      .el-button-group
      > .el-button:not(:first-child):not(:last-child):after {
      content: "当月";
    }
    // .is-selected {
    //   color: #1989fa;
    // }
  }
}
</style>
<script>
export default {
  name: "calendar",
  data() {
    return {
      calendarData: [
        { months: ["09", "11"], days: ["15"], things: "看电影" },
        { months: ["10", "11"], days: ["02"], things: "去公园野炊" },
        { months: ["11"], days: ["02"], things: "看星星" },
        { months: ["11"], days: ["02"], things: "看月亮" },
      ],
      value: new Date(),
    };
  },
  watch: {
    isSelected: function (newValue, oldValue) {
      console.log(newValue);
    },
  },
  methods: {
    show() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>