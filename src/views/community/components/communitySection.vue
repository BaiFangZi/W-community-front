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
      <el-table-column prop="userId" width="180"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span
            class="community-section-note-title"
            @click="titleClick(scope.row)"
            >{{ scope.row.title }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="date" width="180"></el-table-column>
      <el-table-column width="230">
        <template slot-scope="scope">
          <span class="note-meta-item">
            <i class="iconfont icon-good"></i>
            ({{ scope.row.likeNum }})
          </span>
          <span class="note-meta-item">
            <i class="iconfont icon-comments"></i>
            ({{ scope.row.commentNum }})
          </span>
          <span class="note-meta-item">
            <i class="iconfont icon-account"></i>
            ({{ scope.row.viewNum }})
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="pageSizeChange"
      @current-change="currentPageChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total,sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getNoteList } from "@api/note";
import { getProblemList } from "@api/problem";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  created() {
    // console.log(getNoteList);
    this.getDataList(1, 10);
  },
  methods: {
    getDataList(page, limit) {
      // console.log(getNoteList);
      const getDataList =
        this.$route.params.communityId == "note" ? getNoteList : getProblemList;
      getDataList({
        page,
        limit,
      })
        .then((res) => {
          this.tableData = res.data.data;
          this.total = res.data.count;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageSizeChange(val) {
      this.pageSize = val;
      this.getDataList(this.currentPage, this.pageSize);
    },
    currentPageChange(val) {
      this.currentPage = val;
      this.getDataList(this.currentPage, this.pageSize);
    },
    titleClick(row) {
      const routerName =
        this.$route.params.communityId == "note" ? "viewNote" : "viewProblem";
      this.$router.push({
        name: routerName,
        params: { articalId: row._id },
      });
    },
  },
};
</script>
<style lang="scss">
$hover-color: #407ee7;
.community-section {
  .el-pagination {
    text-align: right;
  }
  .note-meta-item,
  .community-section-note-title {
    &:hover {
      color: $hover-color;
      cursor: pointer;
    }
  }
}
</style>
