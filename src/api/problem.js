import request from '@utils/http'


//获取最新问答
export const getLatestProblem = () => request({
    url: '/api/v1/problem/latest',
    method: 'get',
    // data: userInfo,
})
//发布新问题
export const createProblem = (data) => request({
    url: '/api/v1/problem/create',
    method: 'post',
    data
})