import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: relative;
  margin-top: 5px;
  .swiper-container {
    position: static;
  }
  .swiper-pagination {
    width: 100%;
    bottom: -26px;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #a3a3ac;
    opacity: 0.8;
    border-radius: 50%;
    margin: 0 5px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 15px;
    border-radius: 4px;
    background: #fa2800;
  }
  img {
    /* width: 430px; */
    border-radius: 4px;
  }
`