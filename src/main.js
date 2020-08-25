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


// router.beforeEach((to, from, next) => {
// 	if (to.path !== '/login' && !store.state.userToken) { //每次跳转没有Token就重新返回login页面登录
// 		return next('/login')
// 	} else { //有的话
// 		if (!store.state.permission.permissionList) { // 没有路由列表就取获取
// 			store.dispatch('FETCH_PERMISSION')
// 				.then((res) => {
// 					next(to.fullPath)
// 				})
// 			// next()
// 		} else {
// 			if (to.path !== '/login') {

// 				next()
// 			} else {

// 				next()
// 				// next(from.fullPath)
// 			}
// 		}
// 	}
// })

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")