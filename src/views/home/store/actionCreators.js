import * as actionTypes from './actionTypes';

import { getBanners, getRecommends } from '@/apis/services/home'

// 获取 banner( 轮播图 )
const changeBannerAction = res => ({
  type: actionTypes.GET_BANNERS,
  banners: res.banners
})

export const getBannerAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeBannerAction(res))
    })
  }
}

// 获取推荐歌单
const changeRecommendAction = res => ({
  type: actionTypes.GET_RECOMMENDS,
  recommends: res.result
})

export const getRecommendAction = (limit) => {
  return dispatch => {
    getRecommends(limit).then(res => {
      dispatch(changeRecommendAction(res))
    })
  }
}