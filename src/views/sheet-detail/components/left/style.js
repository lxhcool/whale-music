import styled from 'styled-components';

export const SheetDetailLeftWrapper = styled.div`
  flex: 1;
  width: 68%;
  padding: 15px;
  border-radius: 5px;
  margin-right: 20px;
  .top {
    display: flex;
    .cover {
      width: 160px;
      height: 160px;
      border-radius: 8px;
      position: relative;
      margin-right: 30px;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        position: relative;
      }
      &::before {
        content: '';
        width: 95%;
        height: 95%;
        background: rgba(0, 0, 0, 0.2);
        display: block;
        position: absolute;
        top: 13px;
        right: -5px;
        z-index: 0;
        border-radius: 8px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      .title {
        width: 100%;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      .user {
        margin-bottom: 10px;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          position: relative;
          margin-right: 15px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: relative;
          }
        }
        .nickname {
          font-size: 14px;
          margin-right: 20px;
          cursor: pointer;
          &:hover {
            color: #fa2800;
          }
        }
        .createTime {
          font-size: 14px;
          color: #888888;
        }
      }
      .tag {
        span {
          color: #fff;
          background: #fa2800;
          margin-right: 10px;
          margin-left: 5px;
          font-size: 12px;
          cursor: pointer;
          padding: 2px 12px;
          border-radius: 15px;
          &::after {
            // content: '，'
          }
          &:last-child {
            &::after {
              content: ''
            }
          }
        }
      }
      .desc {
        display: flex;
        justify-content: space-between;
        line-height: 1.6;
        margin-top: 10px;
        width: 100%;       
        span {
          flex-shrink: 0;
          color: #fa2800;
          line-height: 1.38;
          cursor: pointer;
        }
        p {
          line-height: 1.6;
          max-width: 90%;
          font-weight: 400;
          flex: 1;
          font-size: 14px;
        }
      }
    }
  }
  .content {
    margin-top: 20px;
  }
`