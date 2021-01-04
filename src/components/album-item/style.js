import styled from 'styled-components';
import countAfter from '@/assets/images/count-after.png';

export const AlbumItemWrapper = styled.div`
  flex: 0 0 12.5%;
  max-width: 12.5%;
  padding: 0 10px 25px;
  cursor: pointer;
  &.two {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .wrapper {
    position: relative;
    padding-right: 10px;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      right: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 100%;
      padding-top: 100%;
      background-color: #000;
      border-radius: 50%;
    }
    .cover {
      position: relative;
      z-index: 2;
      padding-top: 100%;
      border-radius: 2px;
      .ant-image {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        &:after {
          content: "";
          position: absolute;
          transition: all 0.4s;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          background: rgba(0, 0, 0, 0.05);
          -webkit-box-shadow: 1px 1px 0 rgba(0,0,0,.05) inset, -1px -1px 0 rgba(0,0,0,.05) inset;
          box-shadow: inset 1px 1px 0 rgba(0,0,0,.05), inset -1px -1px 0 rgba(0,0,0,.05);
        }
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 100%;
        }
      }
      .count {
        position: absolute;
        right: 16px;
        top: 1px;
        height: 24px;
        padding-left: 9px;
        background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;
        background-size: cover;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        .arrow {
          display: block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 4px 0 4px 6px;
          border-color: transparent transparent transparent #ffffff;
          margin-right: 5px;
        }
        &:after {
          content: "";
          position: absolute;
          right: -14px;
          top: 0;
          width: 14px;
          height: 24px;
          background: url(${countAfter}) no-repeat 100%;
          background-size: cover;
        }
      }
      .play {
        width: 28px;
        height: 28px;
        padding: 0;
        border: none;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        background-color: #fa2800;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: none;
        i {
          font-size: 15px;
        }
      }
    }
  }
  &:hover {
    .cover {
      .play {
        display: block;
      }
    }
  }
  .info {
    margin-top: 12px;
    .name {
      font-size: 14px;
    }
    .singer {
      font-size: 12px;
      color: #888888;
      font-weight: 400;
    }
  }
`