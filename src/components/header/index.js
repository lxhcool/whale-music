import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper className="shadow">
      <div className="container flex-row">
        <div className="logo">
          <NavLink to="/"></NavLink>
        </div>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/mine">排行榜</NavLink>
        <NavLink to="/mine">歌单</NavLink>
        <NavLink to="/mine">歌手</NavLink>
        <NavLink to="/mine">视频</NavLink>
        <NavLink to="/mine">MV</NavLink>
      </div>
    </HeaderWrapper>
  );
});

export default AppHeader;