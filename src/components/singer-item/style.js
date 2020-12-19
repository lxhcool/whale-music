import styled from 'styled-components';

export const SingerItemWrapper = styled.li`
  padding: 0 15px 30px;
  flex: 0 0 10%;
  max-width: 10%;
  .cover {
    position: relative;
    z-index: 2;
    padding-top: 100%;
    border-radius: 50%;
    background-color: #d9d9d9;
    .ant-image {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        -webkit-box-shadow: 1px 1px 0 rgba(0,0,0,.05) inset, -1px -1px 0 rgba(0,0,0,.05) inset;
        box-shadow: inset 1px 1px 0 rgba(0,0,0,.05), inset -1px -1px 0 rgba(0,0,0,.05);
      }
    }
  }
  .info {
    margin-top: 15px;
    text-align: center;
    .name {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      word-break: break-word;
    }
    .count {
      font-size: 12px;
      margin-top: 10px;
      /* color: $color-theme; */
    }
  }
`