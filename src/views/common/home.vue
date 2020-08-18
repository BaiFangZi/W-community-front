<template>
  <el-row>
    <el-col :span="8" :offset="1">
      <el-card shadow="hover">
        <div slot="header" class="community-card-header-tittle">
          <span>文章板块</span>
          <router-link
            :to="{ name: 'community', params: { communityID: 'artical' } }"
            >进入</router-link
          >
        </div>
        <div>板块介绍</div>
      </el-card>
    </el-col>
    <el-col :span="8" :offset="1">
      <el-card shadow="hover">
        <div slot="header" class="community-card-header-tittle">
          <span>问答板块</span>
          <router-link
            :to="{ name: 'community', params: { communityID: 'problem' } }"
            >进入</router-link
          >
        </div>
        <div>板块介绍</div>
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

<style lang="scss">
.community-card-header-tittle {
  a {
    float: right;
  }
}
</style>
