<template>
  <div class="create-artical">
    <el-page-header @back="goBack" content="撰写文章"></el-page-header>
    <el-divider></el-divider>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="form-create-artical"
    >
      <el-form-item
        ><el-input v-model="form.name" placeholder="输入文章标题"></el-input
      ></el-form-item>
      <!-- <el-form-item> <textarea name="" id="editor" ></textarea></el-form-item> -->
      <el-form-item>
        <editor-bar
          v-model="detail"
          :isClear="isClear"
          @change="change"
        ></editor-bar>
      </el-form-item>
      <!-- <el-form-item><el-input type="textarea" id="editor"></el-input></el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button>预览</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import hljs from "highlight.js";
import EditorBar from "@components/editor";
// window.hljs = hljs;
export default {
  name: "createArtical",
  components: {
    EditorBar,
  },
  data() {
    return {
      form: {
        name: "",
        content: "",
      },
      isClear: false,
      detail: "",
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    goBack() {
      this.$router.push({ name: "home" });
    },
    change(val) {//编辑框改变事件
      // console.log(val);
    },
  },
};
</script>
<style></style>
<style lang="scss">
.create-artical {
  background-color: #fff;
  .form-create-artical {
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
