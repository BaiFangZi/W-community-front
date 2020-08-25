<template>
  <el-row>
    <el-col :span="8" :offset="1">
      <el-card shadow="hover">
        <div slot="header" class="community-card-header-tittle">
          <span>文章板块</span>
          <router-link
            class="enter"
            :to="{ name: 'community', params: { communityID: 'artical' } }"
            >进入</router-link
          >
        </div>
        <ul class="community-card-content">
          <li
            class="community-card-content-item"
            v-for="(item, index) in artical"
            :key="index"
          >
            {{ item.title | stringMaxLength(40) }}
            <!-- <el-divider></el-divider> -->
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :span="8" :offset="1">
      <el-card shadow="hover">
        <div slot="header" class="community-card-header-tittle">
          <span>问答板块</span>
          <router-link
            class="enter"
            :to="{ name: 'community', params: { communityID: 'problem' } }"
            >进入</router-link
          >
        </div>
        <ul class="community-card-content">
          <li
            class="community-card-content-item"
            v-for="(item, index) in problem"
            :key="index"
          >
            {{ item.title | stringMaxLength(40) }}
            <!-- <el-divider></el-divider> -->
          </li>
        </ul>
      </el-card>
    </el-col>
    <el-col :span="4" :offset="1">
      <el-card shadow="hover">
        <div slot="header" class="community-card-header-tittle">公告</div>
        <div>公告内容</div>
      </el-card>
    </el-col>
  </el-row>
  <!-- <el-card class="box-card"></el-card> -->
</template>
<script>
import { getToken } from "@utils/auth";
import { getLatestArtical } from "@api/artical";
import { getLatestProblem } from "@api/problem";


export default {
  name: "home",
  data() {
    return {
      artical: [],
      problem: [],
    };
  },
  created() {
    getLatestArtical()
      .then((res) => {
        this.artical = res.data.data;
        // console.log(this.artical);
        // console.log(res);
      })
      .catch((err) => {});
    getLatestProblem()
      .then((res) => {
        this.problem = res.data.data;
      })
      .catch((err) => {});
  },
  mounted() {
    // console.log(getToken());
  },
};
</script>
>

<style lang="scss">
.community-card-header-tittle {
  a.enter {
    float: right;
  }
}
.community-card-content {
  padding-left: 5px;
  .community-card-content-item {
    padding: 5px;
    border-bottom: 1px solid #f0f0f0;
  }
}
</style>
