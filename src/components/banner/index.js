import React, { memo, useEffect } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import http from "@/apis/http"
import {
  BannerWrapper
} from './style';

SwiperCore.use([Pagination]);

const Banner = memo(() => {
  const params = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true
  }

  useEffect(() => {
    http({
      url: 'banner'
    }).then(res => {
      console.log(res)
    })
  })

  return (
    <BannerWrapper className="banner">
      <Swiper {...params} pagination={{ clickable: true }}>
        <SwiperSlide><img src="http://p1.music.126.net/W3mzcDAG4jAQI7Y94EULeQ==/109951165543389379.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="http://p1.music.126.net/2bzCBNe6-vSi4soP7Jo3XA==/109951165543470986.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="http://p1.music.126.net/mRyL0_3LQDXD8DcIQ_UxOw==/109951165543120118.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="http://p1.music.126.net/W3mzcDAG4jAQI7Y94EULeQ==/109951165543389379.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="http://p1.music.126.net/2bzCBNe6-vSi4soP7Jo3XA==/109951165543470986.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </BannerWrapper>
  );
});

export default Banner;