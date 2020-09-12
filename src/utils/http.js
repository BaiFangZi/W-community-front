import Axios from 'axios'
import store from '@/store'
import router from '../router/index'
import {
	getToken
} from '@utils/auth'
// import router from '../router/index.js'

const http = Axios.create({
	// timeout: 5000,
	// baseURL: 'http://192.168.1.71:8080/',
})
// 每次请求都为http头增加Authorization字段，其内容为Token
http.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		// console.log(token)
		if (token) {
			config.headers.common['Authorization'] = token;
			// config.headers['token'] = token
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// http response 拦截器
http.interceptors.response.use(response => {
	// let data = response.data
	return response

}, error => {
	console.log(error)
	switch (error.response.status) {
		// 	// case 400:
		case 401:
			statusCode_401();
			break;
		case 504:
			statusCode_504();
			break;
	}
	return Promise.reject(error)

})

export default http



function statusCode_401() {
	// localStorage.removeItem('token')
	store.commit('user/CLEAR_TOKEN')
	alert('用户信息过期，请重新登陆！')

	router.replace({
		path: '/login' // 到登录页重新获取token
	});
}

function statusCode_504() {
	alert('请求超时！')
}