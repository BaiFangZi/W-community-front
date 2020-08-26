import VueRouter from 'vue-router'
import Vue from 'vue'

//主页
import Home from '@views/home/index'
import About from '@views/common/about.vue'
import Community from '@views/community/index.vue'
//文章
import CreateNote from '@views/note/createNote.vue'
import UserNoteList from '@views/note/userNoteList.vue'
import ViewNote from '@views/note/viewNote.vue'
import EditNote from '@views/note/editNote.vue'
//问题
import CreateProblem from '@views/problem/createProblem.vue'
//用户
import Regist from '@views/user/userRegist.vue'
import Login from '@views/user/userLogin.vue'
import User from '@views/user/user.vue'
//布局框架
import Layout from '@/layout/layout.vue'



Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
	mode: 'history',
	// linkActiveClass:'top-nav-active', 
	routes: [{
			path: '',
			redirect: {
				name: 'layout'
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/regist', //用户注册
			name: 'regist',
			component: Regist,
		},
		{
			path: '/layout',
			name: 'layout',
			component: Layout,
			redirect: {
				name: 'home',
			},
			children: [{
					path: '/home',
					name: 'home',
					component: Home,
				},
				{
					path: '/about',
					name: 'about',
					component: About,
				},
				{
					path: '/community/:communityID', //社区板块
					name: 'community',
					component: Community,
				},
				{
					path: '/user/:userID/noteList', //单一用户文章列表
					name: 'userNoteList',
					component: UserNoteList
				},

				{
					path: '/note/create', //创建文章
					name: 'createNote',
					component: CreateNote
				},

				{
					path: '/note/:noteID', //查看某一文章
					name: 'viewNote',
					component: ViewNote
				},
				{
					path: '/note/edit/:noteID', //编辑某一文章
					name: 'editNote',
					component: EditNote
				},
				{
					path: '/problem/create', //创建问题
					name: 'createProblem',
					component: CreateProblem
				},
				{
					path: '/user', //创建问题
					name: 'user',
					component: User
				},
			]

		}

	]
})
