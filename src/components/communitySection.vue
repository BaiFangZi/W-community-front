<template>
	<div class="community-section">
		<el-table :data="tableData" style="width: 100%" stripe :show-header="false">
			<el-table-column width="80">
				<template slot-scope="scope">
					<el-avatar shape="square" size="small" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
				</template>
			</el-table-column>
			<el-table-column prop="author" width="180"></el-table-column>
			<el-table-column>
				<template slot-scope="scope">
					<span class="community-section-artical-title" @click="handleRowClick">{{ scope.row.title }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="date" width="180"></el-table-column>
			<el-table-column width="230">
				<template slot-scope="scope">
					<span class="artical-meta-item">
						<i class="iconfont icon-good"></i>
						({{ articalGood }})
					</span>
					<span class="artical-meta-item">
						<i class="iconfont icon-comments"></i>
						({{ articalComments }})
					</span>
					<span class="artical-meta-item">
						<i class="iconfont icon-account"></i>
						({{ articalAccount }})
					</span>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[10, 20, 30, 40]"
			:page-size="20"
			layout="sizes, prev, pager, next, jumper"
			:total="400"
		></el-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					date: '2016-05-02',
					author: '王小虎',
					title: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
				},
				{
					date: '2016-05-02',
					author: '王小虎',
					title: '1111111111111111111111111111111111111111111111'
				},
				{
					date: '2016-05-02',
					author: '王小虎',
					title: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
				},
				{
					date: '2016-05-02',
					author: '王小虎',
					title: '1111111111111111111111111111111111111111111111'
				}
			],
			currentPage: 1,
			articalGood: 9999,
			articalComments: 9999,
			articalAccount: 9999
		};
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		handleRowClick(row, column) {
			console.log(1111);
			this.$router.push({ name: 'viewArtical', params: { articalID: '223' } });
			// console.log(row);
			// console.log(column)
		}
	},
	created() {
		console.log('子组件');
	}
};
</script>
<style>
.community-section .el-pagination {
	position: absolute;
	bottom: 20px;
	right: 20px;
}

.community-section .artical-meta-item {
	/* margin: 0 5px; */
}
.community-section .artical-meta-item:hover,
.community-section .community-section-artical-title:hover {
	color: #407ee7;
	cursor: pointer;
}
</style>
