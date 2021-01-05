import styled from 'styled-components';
import countAfter from '@/assets/images/count-after.png';

export const RecommendMvWrapper = styled.div`
  margin-top: 20px;
  .title {
    margin-bottom: 15px;
    font-weight: bold;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    .item {
      flex: 0 0 25%;
      max-width: 25%;
      padding: 0 15px 30px;
      .cover {
        position: relative;
        z-index: 2;
        padding-top: 48%;
        border-radius: 4px;
        .cover-img {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 4px;
            width: 100%;
          }
        }
        .count {
          position: absolute;
          right: 16px;
          top: 1px;
          height: 24px;
          padding-left: 9px;
          background: url(${countAfter}) no-repeat 0;
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
          width: 100%;
          height: 100%;
          padding: 0;
          border: none;          
          position: absolute;
          background: none;
          top: 50%;
          left: 50%;
          cursor: pointer;
          transform: translate(-50%,-50%);
          display: none;
          i {
            width: 28px;
            height: 28px;
            display: inline-block;
            text-align: center;
            line-height: 28px;
            border-radius: 50%;
            color: #fff;            
            background-color: #fa2800;
            font-size: 15px;
          }
        }
      }
      .info {
        margin-top: 8px;
        h2 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
          color: #888888;
          font-weight: 400
        }
      }
      &:hover {
        .play {
          display: block;
        }
      }
    }
  }
`