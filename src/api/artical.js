import request from '@utils/http'


//获取最新文章
export const getLatestArtical = () => request({
    url: '/api/v1/artical/latest',
    method: 'get',
    // data: userInfo,
})
//发布新文章
export const createArtical = (data) => request({
    url: '/api/v1/artical/create',
    method: 'post',
    data
    // data: userInfo,
})

