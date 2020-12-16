import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getBannerAction } from '../../store/actionCreators'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import {
  BannerWrapper
} from './style';

SwiperCore.use([Pagination]);

const Banner = memo(() => {

  // 设置轮播参数
  const params = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 18,
    slidesPerGroup: 3,
    loop: true
  }

  // 
  const { banners } = useSelector(state => ({
    banners: state.getIn(["home", "banners"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // 派发请求
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  return (
    <BannerWrapper className="banner">
      <Swiper {...params} pagination={{ clickable: true }}>
        {
          banners.map(item => {
            return (
              <SwiperSlide key={item.scm}>
                <img src={item.imageUrl} alt={item.typeTitle} title={item.typeTitle} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </BannerWrapper>
  );
});

export default Banner;