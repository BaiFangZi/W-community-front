import request from '@utils/http'


//用户登陆
export const login = userInfo => request({
	url: '/api/v1/user/login',
	method: 'post',
	data: userInfo,
})


//用户注册
export const regist = userInfo => request({
	url: '/api/v1//user/regist',
	method: 'post',
	data: userInfo,
})



//普通请求 /api/v1/xxx
//用户操作 /api/v1/user/xxx

//后台匹配 api中含有user，然后做验证