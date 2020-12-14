import styled from 'styled-components';

import logoUrl from '../../assets/images/logo.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  transition: all .4s ease-in-out;
  background-color: #fff;
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
      background-image: url(${logoUrl});
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
      &:hover {
        a {
          color: #fa2800;
        } 
      }
      .active {
        color: #fa2800;
        &::after {
          content: "";
          position: absolute;
          background: #fa2800;
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
  .user-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding-left: 20px;
    height: 64px;
    &::after {
      display: inline-block;
      margin-left: .3em;
      vertical-align: .1em;
      content: "";
      border-top: .4em solid;
      border-right: .4em solid transparent;
      border-bottom: 0;
      border-left: .4em solid transparent;
      transition: all .3s ease-in-out;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .user-dropdown {
      position: absolute;
      background-color: #fff;
      width: 110px;
      right: 0;
      top: 60px;
      opacity: 0;
      visibility: hidden;
      z-index: 999;
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
    &.active {
      &::after {
        transform:rotate(180deg);
      }
      .user-dropdown {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
        display: initial;
      }
    }
  }
`