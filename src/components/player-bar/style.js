import styled from 'styled-components';

export const PlayerBarWrapper = styled.div `
  width: 100%;
  height: 72px;
  background: #fff;
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
      .cover {
        width: 72px;
        height: 72px;
      }
      .info {
        margin-left: 15px;
        .name {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .singer {
          font-size: 12px;
          color: #888888;
        }
      }
    }
    .center {
      width: 700px;
      height: 72px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .player-btn {
        height: 40px;
        display: flex;
        align-items: center;
        /* overflow: hidden; */
        i {
          cursor: pointer;
          &:active {
            opacity: 0.8;
          }
        }
        .icon-prev {
          font-size: 40px;
          margin-top: 3px;
        }
        .icon-play {
          font-size: 60px;
          margin: 3px 10px 0;
        }
        .icon-next {
          font-size: 40px;
          margin-top: 3px;
        }
      }    
    }
    .right {
      height: 72px;
      .volume-icon {
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
        margin-right: 10px;
      }
      .volume-wrap {
        width: 160px;
        .ant-slider {
          margin-top: 9px;
        }
      }
    }
    .progress-wrap {
      width: 100%;
      left: 0;
      top: -1px;
      position: absolute;
    }
  }
`