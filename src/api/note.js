import request from '@utils/http'


//获取最新随笔
export const getLatestNote = () => request({
    url: '/api/v1/note/latest',
    method: 'get',
    // data: userInfo,
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
        type: 'note',
        date: Date(),
        likeNum: 0,
        commentNum: 0,
        viewNum: 0,
    }
    // data: userInfo,
})
// //获取随笔板块列表
// export const getNoteList = () => request({
//     url: '/api/v1/note/list',
//     method: 'get',
// })