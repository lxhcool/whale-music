import * as actionTypes from './actionTypes';

import { getBanners } from '@/apis/services/home'

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