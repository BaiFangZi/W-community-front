<template>
  <div class="create-problem">
    <el-page-header @back="goBack" content="撰写问题"></el-page-header>
    <el-divider></el-divider>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="form-create-problem"
    >
      <el-form-item
        ><el-input v-model="form.name" placeholder="输入标题"></el-input
      ></el-form-item>
      <!-- <el-form-item> <textarea name="" id="editor" ></textarea></el-form-item> -->
      <el-form-item> </el-form-item>
      <!-- <el-form-item><el-input type="textarea" id="editor"></el-input></el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button>预览</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  name: "createArtical",
  components: {},
  data() {
    return {
      form: {
        name: "",
        content: "",
      },
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
  },
};
</script>
<style></style>
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
