import styled from 'styled-components';
import searchBg from '@/assets/images/personal.jpg';
import closeLight from '@/assets/images/close.svg';
import closeDark from '@/assets/images/close-dark.svg';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  .logo {
    width: 146px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    a {
      width: 100%;
      display: block;
      height: 64px;
      background-position: 0;
      background-repeat: no-repeat;
      background-size: 146px 26px;
    }
  }
  .nav {
    flex: 1;
    height: 64px;
    li {
      font-size: 14px;
      height: 100%;
      padding: 0 15px;
      position: relative;
      a {
        display: flex;
        align-items: center;
        height: 100%;
        transition: all 0.4s;
      }
      .active {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          margin: 0 auto;
          opacity: 1;
        }
      }
    }
  }
  .tool {
    .icon {
      padding: .5rem .85rem;
      cursor: pointer;
      i {
        font-size: 16px;
        color: #9fa0a7;
        transition: all 0.4s;
        &.dark {
          color: #ffc107;
        }
      }
    }
  }
  .user-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding-left: 15px;
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .user-dropdown {
      position: absolute;
      background-color: #fff;
      width: 110px;
      right: 0;
      top: 40px;
      opacity: 0;
      visibility: hidden;
      z-index: -1;
      border-radius: 3px;
      transition: all .3s ease-in-out;
      box-shadow: 0 20px 40px rgba(0,0,0,.2);
      transform: translateY(20px);
      ul {
        font-size: 0.75rem;
        padding: 0.5rem;
        li {
          padding: 0.5rem;
          transition: all 0.3s ease-in-out;
          a {
            color: #2f3447;
            img {
              width: 14px;
              margin-right: 8px;
            }
          }
          &:hover {
            margin-left: 5px;
            a {
              color: #2f3447;
            }
          }
        }
      }
    }
    &:hover {
      .user-dropdown {
        visibility: visible;
        opacity: 1;
        z-index: 100;
        transform: translateY(0px);
        display: initial;
      }
    }
  }
  .no-login {
    padding: .3rem 1.125rem;
    color: #9fa0a7;
    cursor: pointer;
  }
`

export const SearchBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  .overlay {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    transition: opacity .3s;
    -webkit-backface-visibility: hidden;
    transition-duration: .3s;
  }
  .search-body {
    position: relative;
    opacity: 0;
    width: 100%;
    max-width: 790px;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    .search-content {
      background: #fff;
      position: relative;
      border-radius: 4px;
      box-shadow: 0 10px 50px -5px rgba(6, 39, 67, 0.12);
      padding: 0;
      border: 0;
      width: 100%;
      height: auto;
      overflow: hidden;
      .search-popup-cover {
        position: relative;
        overflow: hidden;
        padding: 3rem;
        .bg-effect {
          background-image: url(${searchBg});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          filter: blur(8px);
          transform: scale(1.05);
          background-position: center;
          .layer {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            position: absolute;
            opacity: 1;
            top: 0;
            left: 0;
            transition: opacity 0.3s ease-in-out;
          }
        }
        .search-form {
          position: relative;
          padding: 3rem 0;
          .text {
            display: block;
            width: 100%;
            background-clip: padding-box;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            font-size: .9375rem;
            line-height: 1.5;
            padding: .625rem .75rem;
            height: calc(1.5em + 1.71875rem + 2px);
            text-align: center;
            font-weight: normal;
            color: #fff;
            border-color: transparent;
            background-color: rgba(255, 255, 255, 0.03);
            transition: all .3s ease;
            border-radius: 5px;
            &:hover {
              background-color: rgba(255, 255, 255, 0.04);
              border-color: transparent;
            }
            &:focus {
              background-color: rgba(255, 255, 255, 0.04);
              border-color: transparent;
              color: #fff;
            }
            &::placeholder {
              color: #fff;
              opacity: 1
            }
          }
        }
      }
      .search-hot {
        padding: 1.5rem 3rem;
        .title {
          margin-bottom: 15px;
          i {
            font-size: 1.225rem;
            margin-right: 8px;
            color: #F4606C;
          }
          .nicelishi {
            font-size: 1.425rem;
          }
          span {
            font-size: 14px;
            flex: 1;
            color: #333;
          }
          p {
            color: #fa2800;
            cursor: pointer;
          }
        }
        .tags {
          width: 100%;
          margin: 0 -0.25rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          li {
            padding: 0.25rem;
            cursor: pointer;
            .btn {
              display: flex;
              font-weight: 400;
              color: #6D7685;
              background-color: #f4f4f5;
              text-align: center;
              vertical-align: middle;
              user-select: none;
              border: 1px solid transparent;
              font-size: .75rem;
              padding: .3125rem .75rem;
              line-height: 1.5;
              border-radius: .25rem;
              transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              border-radius: 4px;
              .close-dark {
                display: inline-block;
                background-image: url(${closeDark});
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                vertical-align: middle;
                width: 14px;
                height: 14px;
                margin-left: 8px;
                margin-top: 1px;
                opacity: 0.7;
              }
              &:hover {
                color: #161E27;
                .close-dark {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
    .btn-close {
      position: absolute;
      bottom: -50px;
      left: 0;
      width: 100%;
      z-index: 99;
      cursor: pointer;
      text-align: center;
      .close-light {
        display: inline-block;
        background-image: url(${closeLight});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        vertical-align: middle;
        width: 28px;
        height: 28px;
      }
    }
  }
  &.open {
    z-index: 1031;
    .overlay {
      opacity: 1;
      pointer-events: auto;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
    .search-body {
      pointer-events: auto;
      -webkit-animation-name: tips-open;
      animation-name: tips-open;
    }
  }
  &.close {
    .search-body {
      -webkit-animation-name: tips-close;
      animation-name: tips-close
    }
  }

`