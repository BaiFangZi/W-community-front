<template>
  <div class="community">
    <el-page-header
      @back="goBack"
      :content="sectionTitle"
      class="community-page-header"
    ></el-page-header>
    <el-divider></el-divider>
    <community-section></community-section>
  </div>
</template>

<script>
import CommunitySection from "./components/communitySection.vue";

export default {
  name: "community",
  components: {
    "community-section": CommunitySection,
  },
  data() {
    return {
      sectionTitle: "",
    };
  },
  created() {
    // console.log(this.$route.params);
    this.$nextTick(() => {
      this.$route.params.communityId == "note"
        ? (this.sectionTitle = "随笔板块")
        : (this.sectionTitle = "问答板块");
    });
    
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.community {
  border-radius: 5px;
}
.community .community-page-header {
  /* margin-bottom: 20px; */
  padding: 10px 0 10px 10px;
  background-color: #fff;
}
.community .el-divider {
  margin: 0;
}
</style>
