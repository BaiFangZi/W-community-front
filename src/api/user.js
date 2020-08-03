import request from '@utils/http'


//用户登陆
export const login = userInfo => request({
	url: '/api/v1/login',
	method: 'post',
	data: userInfo,
})


//用户注册
export const regist = userInfo => request({
	url: '/api/v1/regist',
	method: 'post',
	data: userInfo,
})
