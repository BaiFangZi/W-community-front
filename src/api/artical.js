import request from '@utils/http'

export const getArticalLatest = () => request({
    url: '/api/v1/artical/latest',
    method: 'get',

})