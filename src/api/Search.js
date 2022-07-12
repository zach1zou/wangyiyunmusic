import request from '@/utils/request'

export const gethotSearch = (params) => { 
    return request({
        url: '/search/hot',
         params
    })
}


export const getsearchReasult = (params) => { 
    return request({
         url: '/cloudsearch',
         params
    })
}