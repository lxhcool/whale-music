import styled from 'styled-components';

export const SongListWrapper = styled.div`
  width: 100%;
  .tool-head {
    display: flex;
    align-items: center;
    margin: 15px 0;
    .num {
      width: 100%;
      flex: 1;
    }
    .item {
      background: #f2f2f2;
      color: #333333;
      padding: 3px 12px;
      border-radius: 3px;
      cursor: pointer;
      margin-left: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s;
      i {
        margin-right: 5px;
      }
      .nicefenxiang1 {
        font-size: 18px;
      }
      &.active {
        background: #fa2800;
        color: #fff;
      }
    }
    .play-item {
      background: #fa2800;
      color: #fff;
      i {
        margin-left: -2px;
        margin-top: 1px;
      }
    }
  }
  .list-table {
    width: 100%;
    thead {
      width: 100%;
      height: 46px;
      line-height: 46px;
      background: #f7f7f7;
      color: #666;
      th {
        padding: 0 9px;
        text-align: left;
        font-weight: 300;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        &.th-index {
          width: 10%;
          text-align: center;
        }
        &.th-name {
          width: 40%;
        }
        &.th-artist {
          width: 25%;
        }
        &.th-album {
          width: 15%;
        }
        &.th-duration {
          width: 15%;
          text-align: right;
          padding-right: 40px;
        }
      }
    }
    tbody {
      width: 100%;
      tr {
        height: 46px;
        line-height: 46px;
        transition: background-color .2s linear;
        td {
          padding: 0 9px;
          white-space: nowrap;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
        }
        .index-container {
          .num {
            color: #4a4a4a;
            font-weight: 500;
          }
          .play-icon {
            display: none;
            height: 16px;
            min-width: 18px;
            overflow: hidden;
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
            font-size: 28px;
            display: none;
            text-align: left;
            cursor: pointer;
          }
          .pause-btn {
            color: #fa2800;
            font-size: 30px;
            display: none;
            text-align: left;
            cursor: pointer;
          }
        }
        .duration-container {
          text-align: right;
          padding-right: 15px;
          position: relative;
          p {
            padding-right: 10px;
          }
          .song-tools {
            display: flex;
            justify-content: flex-end;
            top: 50%;
            margin-top: -25px;
            right: 10px;
            position: absolute;
            display: none;
            i {
              flex-shrink: 0;
              cursor: pointer;
              margin-right: 15px;
              font-size: 20px;
            }
          }
        }
        &:nth-child(2n) {
          background: #f7f7f7;
        }
        &.playing {
          p {
            color: #fa2800;
          }
          i {
            color: #fa2800;
          }
          .index-container {
            .num {
              display: none;
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
          background: #e8e9ed;
          .index-container {
            .num {
              display: none;
            }
            .play-btn {
              display: block;
            }
          }
          .duration-container {
            p {
              display: block;
            }
            .song-tools {
              display: none;
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
      p {
        cursor: pointer;
      }
    }
  }
`