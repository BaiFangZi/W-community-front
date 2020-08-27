<template>
  <div class="community-section">
    <el-table :data="tableData" style="width: 100%" stripe :show-header="false">
      <el-table-column width="80">
        <template slot-scope="scope">
          <el-avatar
            shape="square"
            size="small"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="author" width="180"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="community-section-note-title" @click="handleRowClick">{{
            scope.row.title
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" width="180"></el-table-column>
      <el-table-column width="230">
        <template slot-scope="scope">
          <span class="note-meta-item">
            <i class="iconfont icon-good"></i>
            ({{ likeNum }})
          </span>
          <span class="note-meta-item">
            <i class="iconfont icon-comments"></i>
            ({{ commentNum }})
          </span>
          <span class="note-meta-item">
            <i class="iconfont icon-account"></i>
            ({{ viewNum }})
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30, 40]"
      :page-size="5"
      layout="sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
import { getArticalList } from "@api/artical";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          author: "王小虎",
          title: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        },
        {
          date: "2016-05-02",
          author: "王小虎",
          title: "1111111111111111111111111111111111111111111111",
        },
        {
          date: "2016-05-02",
          author: "王小虎",
          title: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        },
        {
          date: "2016-05-02",
          author: "王小虎",
          title: "1111111111111111111111111111111111111111111111",
        },
      ],
      currentPage: 1,
      likeNum: 9999,
      commentNum: 9999,
      viewNum: 9999,
    };
  },
  created() {
    getArticalList({
      type: this.$route.params.communityID,
    })
      .then((res) => {})
      .catch((err) => {});
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleRowClick(row, column) {
      this.$router.push({ name: "viewNote", params: { noteID: "223" } });
      // console.log(row);
      // console.log(column)
    },
  },
};
</script>
<style lang="scss">
.community-section {
  .el-pagination {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .note-meta-item,
  .community-section-note-title {
    &::hover {
      color: #407ee7;
      cursor: pointer;
    }
  }
}
</style>
