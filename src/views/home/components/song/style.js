import styled from 'styled-components';

export const RecommendSongWrapper = styled.div`
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
      flex: 0 0 50%;
      max-width: 50%;
      margin-bottom: 20px;
      height: 80px;
      padding: 0 15px 30px;
      .wrapper {
        width: 100%;
        height: 70px;
        justify-content: start;
        border-radius: 5px;
        padding-right: 2%;
        position: relative;
        .index-container {
          width: 70px;
          margin-right: 20px;
          position: relative;
          .cover {
            width: 70px;
            height: 70px;   
            position: absolute;
            border-radius: 4px;
            .cover-img {
              border-radius: 4px;
            }
            &:after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              background: rgba(0, 0, 0, 0);
              transition: all 0.15s;
              border-radius: 4px;
            }   
          }
          .play-icon {
            display: none;
            height: 16px;
            min-width: 18px;
            overflow: hidden;
            position: relative;
            z-index: 1;
            .line {
              width: 2px;
              height: 100%;
              margin-left: 2px;
              background-color: #ff410f;
              animation: play .9s linear infinite alternate;
            }
          }
          .play-btn {
            color: #fa2800;
            font-size: 30px;
            display: none;
            text-align: left;
            position: relative;
            cursor: pointer;
          }
          .pause-btn {
            color: #fa2800;
            font-size: 32px;
            display: none;
            position: relative;
            text-align: left;
            cursor: pointer;
          }
        }
        .info {
          flex: 1;
          .left {
            flex: 1;
          }
          .name {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .author {
            font-size: 12px;
            color: #888888;
            font-weight: 400;
            &:after{
              content:'/';
              margin:0 3px;
            }
            &:last-child {
              &:after{
                content:'';
              }
            }
          }
        }
        .duration {
          font-size: 14px;
          font-weight: bold;
          margin-left: 30px;
          &:after {
            content: '';
            width:1px;
            height: 8px;
            background: #333;
          }
        }
      }
      &.playing {
        p {
          color: #fa2800;
        }
        i {
          color: #fa2800;
        }
        .index-container {
          .cover {
            &::after {
              background: rgba(0, 0, 0, 0.5);
            }
          }
          .play-icon {
            display: flex;
          }
          .play-btn {
            display: none;
          }
        }
      }
      &:hover {
        .index-container {
          .cover {
            &::after {
              background: rgba(0, 0, 0, 0.5);
            }
          }
          .play-btn {
            display: block;
          }
        }
        &.playing {
          .index-container {
            .play-btn {
              display: none;
            }
            .play-icon {
              display: none;
            }
            .pause-btn {
              display: block;
            }
          }
        }
      }
    }
  }
`