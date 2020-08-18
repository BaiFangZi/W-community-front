<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
    class="form-user"
  >
    <h4 style="text-align: center;">更改账户信息</h4>
    <el-form-item label="用户名" prop="name"
      ><el-input v-model="ruleForm.name"></el-input
    ></el-form-item>
    <el-form-item label="邮箱" prop="email"
      ><el-input v-model="ruleForm.email"></el-input
    ></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      <el-button @click="goBack">取消</el-button>
    </el-form-item>
    <!-- <el-form-item><el-button " @click="submitForm('ruleForm')">取消</el-button></el-form-item> -->
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
    var checkEmail = (rule, value, callback) => {
      callback();
      // if (/^\w{6,16}$/.test(value)) {
      // 	callback();
      // } else {
      // 	callback('输入6-16位字符');
      // }
    };

    return {
      ruleForm: {
        name: "",
        email: "",
      },
      rules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
          this.goBack();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
.form-user {
  width: calc(33% + 13px);
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}
</style>
