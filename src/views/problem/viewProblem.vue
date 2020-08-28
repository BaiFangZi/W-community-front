<template>
  <div class="view-problem">
    <div class="problem-body">
      <el-page-header @back="goBack" content="问题描述"></el-page-header>
      <el-divider></el-divider>
      <h2>{{ problem.title }}</h2>
      <span>{{ problem.userId }}</span>
      <div class="content" v-html="problem.content"></div>
    </div>
    <div class="vote-body">
      <span>您的鼓励，是我创作的动力！！</span>
      <el-button @click="likeProblem" type="danger" class="iconfont icon-good"
        >喜欢此文({{ problem.likeNum }})</el-button
      >
      <el-button type="success" class="el-icon-hot-water"
        >给作者倒杯卡布奇诺</el-button
      >
    </div>
    <div class="discuss-body">
      <h4>全部评论 ({{ problem.commentNum }})</h4>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
    </div>
  </div>
</template>

<script>
import { getProblemContent, likeProblem } from "@api/problem";
import marked from "marked";
export default {
  name: "viewNote",
  data() {
    return {
      problem: {},
    };
  },
  created() {
    getProblemContent({
      articalId: this.$route.params.articalId,
    })
      .then((res) => {
        console.log(res.data);
        const { content, ...problem } = res.data.data;
        this.problem = problem;
        const contentHtml = marked(content);
        this.problem.content = contentHtml;
        console.log(contentHtml);
        document.querySelector(".content").innerHTML = contentHtml;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    likeProblem() {
      likeProblem({
        articalId: this.$route.params.articalId,
      })
        .then((res) => {
          const { likeNum } = res.data;
          this.problem.likeNum = likeNum;
        })
        .catch((err) => {
          console.log();
        });
    },
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
.view-problem {
  .el-page-header {
    padding: 10px 0 10px 10px;
    background-color: #fff;
  }
  .el-divider {
    margin: 0;
  }
  .problem-body {
    @include wrapper();
    .content {
      text-align: left;
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
}
</style>
