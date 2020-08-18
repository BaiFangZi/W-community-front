<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    class="form-regist"
  >
    <el-form-item label="用户名" prop="name"
      ><el-input v-model="ruleForm.name"></el-input
    ></el-form-item>
    <el-form-item label="密码" prop="pass"
      ><el-input
        type="password"
        v-model="ruleForm.pass"
        autocomplete="off"
      ></el-input
    ></el-form-item>
    <el-form-item label="确认密码" prop="checkPass"
      ><el-input
        type="password"
        v-model="ruleForm.checkPass"
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
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { regist } from "@api/user.js";
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (/^[a-zA-Z0-9_]{4,16}$/.test(value)) {
        callback();
      } else {
        callback("输入4-16位字母、数字、下划线的组合");
      }
    };
    var validatePass = (rule, value, callback) => {
      if (/^\w{6,16}$/.test(value)) {
        callback();
      } else {
        callback("输入6-16位字符");
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var verifyCode = (rule, value, callback) => {
      callback();
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
        verifyCode: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }],
        verifyCode: [{ validator: verifyCode, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          regist(this.ruleForm)
            .then((res) => {
              console.log("创建成功");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss">
.form-regist {
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
