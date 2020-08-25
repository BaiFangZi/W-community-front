<template>
  <div class="create-artical">
    <el-page-header @back="goBack" content="撰写问题"></el-page-header>
    <el-divider></el-divider>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
      class="form-create-artical"
      :rules="rules"
    >
      <el-form-item prop="title"
        ><el-input
          v-model="ruleForm.title"
          placeholder="输入文章标题"
        ></el-input
      ></el-form-item>
      <el-form-item>
        <markdown-editor
          @get-value="createProblem"
          :isPublishing="isPublishing"
        ></markdown-editor>
      </el-form-item>
      <el-form-item> </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createProblem } from "@api/problem";
import MarkdownEditor from "@components/editor/MarkdownEditor";

export default {
  name: "createProblem",
  components: {
    MarkdownEditor,
  },
  data() {
    let validateTitle = (rule, value, callback) => {
      if (value !== "") {
        callback();
      } else {
        callback("请输入标题！！！");
      }
    };
    return {
      ruleForm: {
        title: "",
        content: "22332",
      },
      rules: {
        title: [{ validator: validateTitle, trigger: "blur" }],
        // content: [{ trigger: "blur" }],
      },
      isPublishing: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    createProblem(content) {
      this.isPublishing = true;
      this.ruleForm.content = content;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const { title, content } = this.ruleForm;

          // console.log(title);
          // console.log(content);
          createProblem({
            title,
            content, //xxs？？？
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              this.isPublishing = false;
            });
        } else {
          this.isPublishing = false;
          return false;
        }
      });
    },
    goBack() {
      this.$router.push({ name: "home" });
    },
    change(val) {
      //编辑框改变事件
      // console.log(val);
    },
  },
};
</script>
<style></style>
<style lang="scss">
// .create-artical {
//   background-color: #fff;
//   .form-create-artical {
//     width: 80%;
//     margin: 0 auto;
//     background-color: #fff;
//     padding: 20px;
//     border-radius: 8px;
//   }
//   .el-page-header {
//     padding: 10px;
//   }
//   .el-divider {
//     margin: 0;
//   }
// }
</style>

<style lang="scss">
.create-problem {
  background-color: #fff;
  .form-create-problem {
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  .el-page-header {
    padding: 10px;
  }
  .el-divider {
    margin: 0;
  }
}
</style>
