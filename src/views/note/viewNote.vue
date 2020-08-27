<template>
  <div class="view-note">
    <div class="note-body">
      <el-page-header @back="goBack" content="文章内容"></el-page-header>
      <el-divider></el-divider>
      <h2>{{ noteHeader }}</h2>
      <span>{{ noteAuthor }}</span>
      <div class="content" v-html="content"></div>
    </div>
    <div class="vote-body">
      <span>您的鼓励，是我创作的动力！！</span>
      <el-button type="success" class="el-icon-hot-water"
        >给作者倒杯卡布奇诺</el-button
      >
    </div>
    <div class="discuss-body">
      <h4>全部评论 ({{ discussCount }})</h4>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewNote",
  data() {
    return {
      noteHeader: "这是文章标题",
      noteAuthor: "xiaoming",
      content: "<p>这是文章内容</p>",
      discussCount: 0,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
@mixin wrapper {
  background-color: #fff;
  border: 1px solid #dde2d7;
  text-align: center;
}
.view-note {
  .el-page-header {
    padding: 10px 0 10px 10px;
    background-color: #fff;
  }
  .el-divider {
    margin: 0;
  }
  .note-body {
    @include wrapper();
    .content {
      padding: 20px 0;
    }
  }
  .vote-body,
  .discuss-body {
    @include wrapper();
    padding: 20px 0;
    margin-top: 50px;
    .discuss {
      text-align: left;
      padding: 10px 20px;
      border-bottom: 1px solid #f0f0f0;
    }
  }
  //   .discuss-body{

  //   }
}
// .view-note .note-body,
// .view-note .vote-body,
// .view-note .discuss-body {
//   background-color: #fff;
//   border: 1px solid #dde2d7;
//   text-align: center;
// }

// .view-note .note-body .content {
//   //   padding: 20px 0;
// }
// .view-note .vote-body,
// .view-note .discuss-body {
//   padding: 20px 0;
//   margin-top: 50px;
// }
// .view-note .discuss-body .discuss {
//   text-align: left;
//   padding: 10px 20px;
//   border-bottom: 1px solid #f0f0f0;
// }
.view-note .el-divider {
  margin: 0;
}
</style>
