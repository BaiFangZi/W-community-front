import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '@views/common/home.vue'
import About from '@views/common/about.vue'
import Regist from '@views/user/userRegist.vue'
import CreateArtical from '@views/artical/createArtical.vue'
import UserArticalList from '@views/artical/userArticalList.vue'
import ViewArtical from '@views/artical/viewArtical.vue'
import Community from '@views/common/community.vue'
import Login from '@views/user/userLogin.vue'
import Layout from '@views/layout/layout.vue'
import CreateProblem from '@views/problem/createProblem.vue'
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
					path: '/user/:userID/articalList', //单一用户文章列表
					name: 'userArticalList',
					component: UserArticalList
				},

				{
					path: '/artical/create', //创建文章
					name: 'createArtical',
					component: CreateArtical
				},
			
				{
					path: '/artical/:articalID', //查看某一文章
					name: 'viewArtical',
					component: ViewArtical
				},
				{
					path: '/community/:communityID',//社区板块
					name: 'community',
					component: Community,
				},
				{
					path: '/problem/create', //单一用户文章列表
					name: 'createProblem',
					component: CreateProblem
				},
			]

		}

	]
})
