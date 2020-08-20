<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    class="form-login"
  >
    <el-form-item label="用户名" prop="username"
      ><el-input v-model="ruleForm.username"></el-input
    ></el-form-item>
    <el-form-item label="密码" prop="password"
      ><el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input
    ></el-form-item>
    <el-form-item label="验证码" prop="verifyCode"
      ><el-input v-model.number="ruleForm.verifyCode"></el-input
    ></el-form-item>
    <el-form-item label="">
      <div class="verifyImg">
        <img alt="" src="../../assets/img/timg.jpg" />
        <span>换一张</span>
      </div>
    </el-form-item>
    <el-form-item
      ><el-button
        style="width: 100%;"
        type="primary"
        :disabled="isLanding"
        @click="submitForm('ruleForm')"
        >登陆</el-button
      ></el-form-item
    >
  </el-form>
</template>
<script>
import { login } from "@api/user.js";
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (/^[a-zA-Z0-9_]{4,16}$/.test(value)) {
        callback();
      } else {
        callback("输入4-16位字母、数字、下划线的组合");
      }
    };
    var validatePsd = (rule, value, callback) => {
      if (/^\w{6,16}$/.test(value)) {
        callback();
      } else {
        callback("输入6-16位字符");
      }
    };

    var verifyCode = (rule, value, callback) => {
      callback();
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        verifyCode: "",
      },
      rules: {
        username: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: validatePsd, trigger: "blur" }],
        verifyCode: [{ validator: verifyCode, trigger: "blur" }],
      },
      isLanding: false,
    };
  },
  methods: {
    submitForm(formName) {
      console.log(1234)
      this.isLanding = true;
      // console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { username, password } = this.ruleForm;
          login({
            username,
            password,
          })
            .then((res) => {
              switch (res.data.code) {
                case 0:
                  {
                    this.$router.push({ name: "home" });
                    this.$store.state.isLogin = true;
                  }
                  break;
                case 10001:
                  {
                    this.$notify.error({
                      title: "错误",
                      message: "用户名或密码错误",
                    });
                  }
                  break;
              }
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              console.log(3344);
              this.isLanding = false;
            });
        } else {
          console.log("error submit!!");
          this.isLanding = false;
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.form-login {
  width: calc(33% + 13px);
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 100px;
  .verifyImg {
    width: 300px;
    height: 40px;
    img {
      width: 150px;
      height: 100%;
    }
    span {
      margin: 10px;
    }
    span:hover {
      color: #409eff;
    }
  }
}
</style>
