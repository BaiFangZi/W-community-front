import request from '@utils/http'
import time from '@utils/time'


//获取问答列表
export const getProblemList = (params) => request({
    url: '/api/v1/problem/list',
    method: 'get',
    params

})
//发布新问题
export const createProblem = (info) => request({
    url: '/api/v1/problem/create',
    method: 'post',
    data: {
        ...info,
        // type: 'problem',
        date: time.now(),
        likeNum: 0,
        commentNum: 0,
        viewNum: 0,
    }
})
//获取问题描述内容
export const getProblemContent = (params) => request({
    url: '/api/v1/problem/content',
    method: 'get',
    params,
})
//点赞这个问题
export const likeProblem = (params) => request({
    url: '/api/v1/problem/like',
    method: 'get',
    params
})