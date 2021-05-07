import styled from 'styled-components';

export const SheetDetailRightWrapper = styled.div`
  width: 27%;
  flex-shrink: 0;
  .module {
    padding: 15px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .card-header {
    height: 20px;
    margin-bottom: 15px;
    font-weight: bold;
    &::before {
      content: '';
      width: 2px;
      height: 13px;
      border-radius: 2px;
      background: #4b57ff;
      margin-right: 10px;
    }
  }
  .like {
    padding-bottom: 5px;
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -5px;
      li {
        flex: 0 0 14.285714285714%;
        max-width: 14.285714285714%;
        padding: 0 5px 10px;
        cursor: pointer;
        .avatar {
          width: 100%;
          border-radius: 3px;
          img {
            width: 100%;
            border-radius: 3px;
          }
        }
      }
    }
  }
  .related {
    padding-bottom: 5px;
    ul {
      li {
        display: flex;
        margin-bottom: 15px;
        cursor: pointer;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 3px;
          margin-right: 15px;
          flex-shrink: 0;
          img {
            width: 100%;
            border-radius: 3px;
          }
        }
        .info {
          height: 50px;
          width: calc(100% - 60px);
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
          h2 {
            font-size: 14px;
            margin-bottom: 10px;
            width: 100%;
          }
          span {
            font-size: 12px;
            color: #a5a5c1;
          }
          &:hover {
            h2 {
              color: #4b57ff;
            }
          }
        }
      }
    }
  }
  .comment {
    ul {
      li {
        padding: 10px 0;
        width: 100%;
        display: flex;
        .avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
          cursor: pointer;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .info {
          flex: 1;
          h2 {
            font-size: 14px;
            margin-right: 5px;
            margin-bottom: 10px;
            font-weight: bold;
            cursor: pointer;
            small {
              font-size: 12px;
              color: #a5a5c1;
              font-weight: 200;
            }
          }
          p {
            width: 100%;
            font-size: 12px;
            color: #a5a5c1;
            line-height: 1.6;
            padding: 5px 10px;
            background: #f9f9ff;
            margin-top: 5px;
            border-radius: 3px;
          }
        }
      }
    }
  }
`