<template>
  <div class="view-note">
    <div class="note-body">
      <el-page-header @back="goBack" content="文章内容"></el-page-header>
      <el-divider></el-divider>
      <h2>{{ note.title }}</h2>
      <span>{{ note.userId }}</span>
      <div class="content" v-html="note.content"></div>
    </div>
    <div class="vote-body">
      <span>您的鼓励，是我创作的动力！！</span>
      <el-button @click="likeNote" type="danger" class="iconfont icon-good"
        >喜欢此文({{ note.likeNum }})</el-button
      >
      <el-button type="success" class="el-icon-hot-water"
        >给作者倒杯卡布奇诺</el-button
      >
    </div>
    <div class="discuss-body">
      <h4>全部评论 ({{ note.commentNum }})</h4>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
      <div class="discuss">323</div>
    </div>
  </div>
</template>

<script>
import { getNoteContent, likeNote } from "@api/note";
import marked from "marked";
export default {
  name: "viewNote",
  data() {
    return {
      note: {
        // title: "",
        // userId: "",
        // content: "",
        // commentNum: 0,
        // likeNum: 0,
      },
    };
  },
  created() {
    getNoteContent({
      articalId: this.$route.params.articalId,
    })
      .then((res) => {
        const { content, ...note } = res.data.data;
        this.note = note;
        const contentHtml = marked(content);
        this.note.content = contentHtml;
        // console.log(contentHtml);
        // document.querySelector(".content").innerHTML=contentHtml;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    likeNote() {
      likeNote({
        articalId: this.$route.params.articalId,
      })
        .then((res) => {
          const { likeNum } = res.data;
          this.note.likeNum = likeNum;
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
