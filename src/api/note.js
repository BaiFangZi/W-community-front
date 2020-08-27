import request from '@utils/http'
import time from '@utils/time'

//获取随笔列表
export const getNoteList = (params) => request({
    url: '/api/v1/note/list',
    method: 'get',
    params,
})


//发布新文章
// title,
// content,
// userId,
// type,
// date: Date(),
// likeNum: 0,
// commentNum: 0,
// viewNum: 0,
export const createNote = (info) => request({
    url: '/api/v1/note/create',
    method: 'post',
    data: {
        ...info,
        // type: 'note',
        date: time.now(),
        likeNum: 0,
        commentNum: 0,
        viewNum: 0,
    }
    // data: userInfo,
})
//获取随笔内容
export const getNoteContent = (params) => request({
    url: '/api/v1/note/content',
    method: 'get',
    params,
})
//喜欢这个随笔
//点赞这个问题
export const likeNote = (params) => request({
    url: '/api/v1/note/like',
    method: 'get',
    params
})