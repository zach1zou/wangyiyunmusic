//和home相关的接口
import request from '@/utils/request'

export const getRecommendList = (params) => {
 return  request({ 
     url: '/personalized',
     params
    })
}


export const getNewsongList = (params) => {
 return  request({ 
     url: '/personalized/newsong',
     params
    })
}