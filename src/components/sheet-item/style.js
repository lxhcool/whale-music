import styled from 'styled-components';
import countAfter from '@/assets/images/count-after.png';

export const SheetitemWrapper = styled.div `
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
    &:before, &:after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      transition: all 0.4s;
    }
    &:before {
      right: 6px;
      transform: scale(.85);
      transform-origin: 100% 50%;
      z-index: 2;
      border-radius: 2px;
      opacity: 0.9;
    }
    &:after {
      right: 1px;
      transform: scale(.75);
      transform-origin: 100% 50%;
      z-index: 1;
      border-radius: 2px;
      opacity: .5;
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
    }
  }
  .info {
    margin-top: 12px;
    .name {
      font-size: 14px;
    }
  }
`