<template>
  <div class="create-note">
    <el-page-header @back="goBack" content="编辑文章"></el-page-header>
    <el-divider></el-divider>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="form-create-note"
    >
      <el-form-item
        ><el-input v-model="form.name" placeholder="输入文章标题"></el-input
      ></el-form-item>
      <el-form-item></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">重新发布</el-button>
        <el-button>预览</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import VueSimplemde from 'vue-simplemde';
// import hljs from 'highlight.js';
// window.hljs = hljs;
export default {
  name: "createNote",
  components: {},
  data() {
    return {
      form: {
        name: "",
        content: "",
      },
    };
  },
  created() {
    //拿文章数据
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    //返回主页或者管理页面
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style></style>
<style></style>
