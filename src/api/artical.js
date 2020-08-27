import request from '@utils/http'


/**
 * 
 * @param {*} type 
 */
export const getArticalList = (params) => request({
    url: '/api/v1/artical/list',
    method: 'get',
    params
    // data: userInfo,
})