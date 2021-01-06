import styled from 'styled-components';

export const PlayerBarWrapper = styled.div `
  width: 100%;
  height: 72px;
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
  padding: 0 10px 0 20px;
  justify-content: space-between;
  .wrapper {
    align-items: center;
    height: 100%;
    margin: 0 -5px;
    position: relative;
    .left {     
      margin-right: 20px; 
      .player-btn {
        height: 40px;
        display: flex;
        align-items: center;
        i {
          cursor: pointer;
          &:active {
            opacity: 0.8;
          }
        }
        .icon-prev {
          font-size: 20px;
          color: #fa2800;
        }
        .icon-play {
          width: 43px;
          height: 43px;
          background: linear-gradient(90deg, #fa2800, #f95124 50%);
          border-radius: 50%;
          margin: 0 26px;
          i {
            font-size: 22px;
            color: #ffffff;
          }
        }
        .icon-next {
          font-size: 20px;
          color: #fa2800;
        }
      }
    }
    .center {
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      .cover {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 4px;
        cursor: pointer;
      }
      .info {
        width: 100%;
        margin: 0 20px 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 72px;
        .name {
          font-size: 13px;
          font-weight: bold;
          margin-right: 10px;
          span {
            font-size: 12px;
            color: #888888;
            font-weight: 200;
            margin-left: 10px;
          }
        }
      }
      .progress-wrap {
        width: 100%;
        span {
          font-size: 14px;
        }
        .ant-slider {
          margin: 15px 5px 0 5px;
        }
      }
    }
    .right {
      height: 72px;
      .volume-icon {
        font-size: 23px;
        font-weight: 700;
        cursor: pointer;
        margin-right: 10px;
      }
      .volume-wrap {
        width: 150px;
        margin-right: 10px;
        .ant-slider {
          margin-top: 9px;
        }
      }
      .tool {
        i {
          font-size: 26px;
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
`