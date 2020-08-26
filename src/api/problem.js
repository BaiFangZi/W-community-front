import request from '@utils/http'


//获取最新问答
export const getLatestProblem = () => request({
    url: '/api/v1/problem/latest',
    method: 'get',
    // data: userInfo,
})
//发布新问题
export const createProblem = (info) => request({
    url: '/api/v1/problem/create',
    method: 'post',
    data: {
        ...info,
        type: 'problem',
        date: Date(),
        likeNum: 0,
        commentNum: 0,
        viewNum: 0,
    }
})
// //获取问题板块列表
// export const getNoteList = () => request({
//     url: '/api/v1/note/list',
//     method: 'get',
// })