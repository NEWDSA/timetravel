
<template>
  <div class="login_container">
    <div class="hea">贾维斯系统</div>
    <div class="login_box">
      <!-- 登录表单区域 -->
      <el-form ref="elForm" :rules="rules" :model="formData" size="medium">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            placeholder="用户名"
            clearable
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            placeholder="密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 记住我 -->
        <el-form-item>
          <el-checkbox
            label="记住我"
            class="rememberMe"
            @click="rember"
          ></el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button @click="submitForm" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { getLogin } from "@/api/login";
export default {
  data() {
    return {
      formData: {
        username: undefined,
        password: undefined,
      },
      // userToken: "",
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // TODO: 验证登录
        let params = {
          username: this.formData.username,
          password: this.formData.password,
        };
        // getLogin(params).then(res=>{
        //   console.log(res)
        //   this.userToken=res.data[0].username
        //   this.storeLogin({Authorization:this.userToken})
        //   this.$router.push('/')
        // }).catch(err=>{
        //     //Element-ui 弹窗
        //     this.$message('登录失败');
        // })

        getLogin(this.formData)
          .then((res) => {
            // const resp = res.data
            console.log(res.data[0].username);
            this.userToken = "Bearer" + res.data[0].username;
            // 将用户token保存到vuex中
            this.changeLogin({ Authorization: this.userToken });
            this.$router.push("/index").catch((er) => {
              console.log(er);
            });
          })
          .catch((er) => {
            console.log(er)
            this.$message("登录失败");
          });
      });
    },
    rember() {
      getLogin(this.formData).then((res) => {
        // const resp = res.data
        console.log(res.data[0].username);
        this.userToken = "Bearer" + res.data[0].username;
        // 将用户token保存到vuex中
        this.saveLogin({ lAuthorization: this.userToken });
        this.$router.push("/index").catch((er) => {
          console.log(er);
        });
        // location.reload()
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login_container {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /*background-image: url("../images/bg_login.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.hea {
  background: #000;
  font-size: 3rem;
  // height: 3rem;
  @media screen and (max-width: 1080px) {
    font-size: 30px;
  }
}
.login_box {
  width: 40rem;
  height: 35rem;
  /* background-color: #fff; */
  background-color: #2e527bb3;
  // background-color: red;
  border-radius: 5px;
  @media screen and (max-width: 1080px) {
    width: 400px;
    height: 350px;
  }

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-form {
  padding: 3.2rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 1080px) {
    padding: 32px;
  }
}
.el-button {
  width: 100%;
}
.code {
  width: 45%;
}
.rememberMe {
  color: #fff;
}
</style>

