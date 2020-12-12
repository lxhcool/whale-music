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
`