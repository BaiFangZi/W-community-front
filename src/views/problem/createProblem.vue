<template>
	<div class="create-problem">
		<el-page-header @back="goBack" content="撰写问题"></el-page-header>
		<el-divider></el-divider>
		<el-form ref="form" :model="form" label-width="80px" class="form-create-problem">
			<el-form-item><el-input v-model="form.name" placeholder="输入标题"></el-input></el-form-item>
			<!-- <el-form-item> <textarea name="" id="editor" ></textarea></el-form-item> -->
			<el-form-item><vue-simplemde v-model="form.content" ref="markdownEditor" :highlight="true" /></el-form-item>
			<!-- <el-form-item><el-input type="textarea" id="editor"></el-input></el-form-item> -->
			<el-form-item>
				<el-button type="primary" @click="onSubmit">发布</el-button>
				<el-button>预览</el-button>
				<el-button>取消</el-button>
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
	mounted() {},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		goBack() {
			this.$router.push({name:'home'})
		}
	}
};
</script>
<style>
@import '~simplemde/dist/simplemde.min.css';
@import '~highlight.js/styles/atom-one-dark.css';
</style>
<style>
.create-problem {
	background-color: #fff;
}
.create-problem .el-page-header {
	padding: 10px;
}
.create-problem .el-divider {
	margin: 0;
}
.create-problem .form-create-problem {
	width: 80%;
	margin: 0 auto;
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
}

/* .markdown-editor .CodeMirror {
  height: 300px;
} */
</style>
