import Vue from 'vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import '@assets/font/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import App from './App.vue'

Vue.config.productionTip = false

import HTTP from '@utils/http'
Vue.prototype.$http = HTTP

import * as filters from '@filters'


Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})


// new Vue({
// 	el: '#app',
// 	router,
// 	store,
// 	components: {
// 		App
// 	},
// 	template: '<App/>'
// })



// const whiteList = ['/login']
// router.beforeEach((to, form, next) => {
// 	if (store.state.user.token) { //有token
// 		if (to.path === '/login') { //如果之前是登陆界面，就跳转到下个页面
// 			next()
// 		} else { //如果是其他页面 ，根据token去获取相应权限
// 			const hasRole = store.state.user.role
// 			if(hasRole){ //拿权限

// 			}
// 		}
// 	}
// 	next()
// })
// router.beforeEach((to, from, next) => {
// 	if (store.state.permission.userToken) { //如果有token
// 		if (to.path === '/login') { //如果之前是登陆界面，就跳转到下个页面
// 			console.log('0000')
// 			next()
// 		} else { //如果是其他页面 ，根据token去获取相应权限
// 			const hasRoles = store.state.permission.roles.length
// 			if (hasRoles) { //有权限，就继续跳转
// 				next()
// 			} else {
// 				try {
// 					store.commit('permission/SET_ROLES', ['admin']) //这里应该根据token去异步获取roles
// 					store.commit('permission/GENERATE_ROUTES', store.state.permission.roles) //根据权限获取路由列表
// 					next({
// 						...to,
// 						replace: true
// 					})
// 				} catch (err) {
// 					console.log(err)
// 					store.commit('permission/CLEAR_TOKEN', '')
// 					store.commit('permission/SET_ROLES', [])
// 					next('/login') //跳转到login重新登陆
// 				}
// 			}
// 		}
// 	} else { //如果没有token
// 		if (whiteList.indexOf(to.path) !== -1) { //设置login白名单，防止login无token时陷入死循环
// 			console.log(3333)
// 			console.log(to.path)
// 			next()
// 		} else { //如果不是login，跳到login登陆去获取token
// 			console.log(6666)
// 			next('/login')
// 		}
// 	}
// })

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")