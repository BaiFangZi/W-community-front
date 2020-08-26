<template>
  <el-row>
    <el-col :span="4" :offset="1">
      <el-card>
        <div class="user-note-info">
          <img :src="imgSrc" alt="" />
          <el-divider></el-divider>
          <div>
            <i class="el-icon-s-operation"></i>
            <span>文章：{{ noteCount }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="17" :offset="1">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column prop="date">
          <template slot="header" slot-scope="scope">
            <el-button
              type="success"
              plain
              style="padding: 10px 20px;"
              @click="cerateNote"
              >发布文章</el-button
            >
            <el-button
              type="success"
              plain
              style="padding: 10px 20px;"
              @click="cerateProblem"
              >发布问题</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="name"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="medium"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handlView(scope.$index, scope.row)"
              >查看</el-button
            >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="float: right;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="20"
        layout="sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-col>
  </el-row>
</template>



<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      search: "",
      noteCount: 0,
      imgSrc: "",
      currentPage: 1,
    };
  },
  created() {
    // console.log(this.editor);
  },
  methods: {
    handleEdit(index, row) {
      this.$router.push({ name: "editNote", params: { noteID: "12" } });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handlView(index, row) {
      this.$router.push({ name: "viewNote", params: { noteID: "223" } });
      // console.log(index, row);
    },
    cerateNote() {
      this.$router.push({ name: "createNote" });
    },
    cerateProblem() {
      this.$router.push({ name: "createProblem" });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss">
.user-note-info {
  img {
    width: 100%;
  }
  /* border: 1px solid #dde2d7; */
}
</style>
