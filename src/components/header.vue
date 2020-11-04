<template>
  <div class="header" id="web-top">
    <div class="content">
      <i
        class="el-icon-user-solid"
        ref="myuser"
        v-show="showor"
        @click="userInfo"
      ></i>
      <i class="el-icon-minus" @click="min"></i
      ><i class="el-icon-copy-document" @click="normal"></i
      ><i class="el-icon-close" @click="close"></i>
    </div>
  </div>
</template>
<script>
// const { ipcRenderer } = window.require("electron"); //发送render消息
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: true,
    };
  },
  mounted() {
    let _this = this;
    dragElement(document.getElementById("web-top"));
    function dragElement(elmnt) {
      let [pos1, pos2, pos3, pos4] = [0, 0, 0, 0];
      if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(
          elmnt.id + "header"
        ).onmousedown = dragMouseDown;
      } else {
        elmnt.onmousedown = dragMouseDown;
      }
      function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
      function elementDrag(e) {
        e = e || window.event;
        // e.movementX、e.movementY分别为窗口移动的方位和像素，为正负数值
        var param = e.movementX + "," + e.movementY;
        electron.send("changeWinPosition", param);
      }
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  },
  methods: {
    ...mapMutations(["changeShow"]),
    min() {
      //是否正常显示
      electron.send("window-min");
    },
    normal() {
      //最小化窗体
      electron.send("window-max");
    },
    close() {
      //关闭窗体
      electron.send("window-close");
    },
    userInfo() {
      this.$confirm("是否登出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      })
        .then(({ value }) => {
          this.$router.push("/login");
          sessionStorage.removeItem("Authorization");
          localStorage.removeItem("lAuthorization");
          this.changeShow({ show: false });
          this.user = false;

          this.$message({
            type: "success",
            message: "登出成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消登出",
          });
        });
    },
  },
  computed: {
    showor() {
      if (this.$route.path == "/index") {
        this.user = true;
        return this.user;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 12;
  height: 3rem;
  line-height: 3rem;
  color: red;
  background: burlywood;
  .content {
    // background-color: pink;
    font-size: 20px;
    i {
      width: 30px;
      height: 25px;
      margin-left: 20px;
      margin-right: 10px;
    }
    i:hover {
      background: pink;
    }
  }
}
</style>