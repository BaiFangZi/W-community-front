<template>
	<div class="create-artical">
		<el-page-header @back="goBack" content="编辑文章"></el-page-header>
		<el-divider></el-divider>
		<el-form ref="form" :model="form" label-width="80px" class="form-create-artical">
			<el-form-item><el-input v-model="form.name" placeholder="输入文章标题"></el-input></el-form-item>
			<el-form-item><vue-simplemde v-model="form.content" ref="markdownEditor" :highlight="true" /></el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">重新发布</el-button>
				<el-button>预览</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import VueSimplemde from 'vue-simplemde';
import hljs from 'highlight.js';
window.hljs = hljs;
export default {
	name: 'createArtical',
	components: {
		VueSimplemde
	},
	data() {
		return {
			form: {
				name: '',
				content: ''
			},
			configs: {
				spellChecker: false // 禁用拼写检查
			}
		};
	},
	created() {
		//拿文章数据
	},
	mounted() {},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		//返回主页或者管理页面
		goBack() {
			
			this.$router.push({ name: 'home' });
		}
	}
};
</script>
<style>
@import '~simplemde/dist/simplemde.min.css';
@import '~highlight.js/styles/atom-one-dark.css';
</style>
<style>
.create-artical .form-create-artical {
	width: 80%;
	margin: 0 auto;
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
}
.create-artical {
	background-color: #fff;
}
.create-artical .el-page-header {
	padding: 10px;
}
.create-artical .el-divider {
	margin: 0;
}
/* .markdown-editor .CodeMirror {
  height: 300px;
} */
</style>
