import React, { memo } from 'react';

import { PlayerBarWrapper } from './style'

import { Slider } from 'antd';

const AppFooter = memo(() => {
  return (
    <PlayerBarWrapper className="player-bar shadow">
      <div className="container">
        <div className="wrapper flex-between">
          <div className="left flex-row">
            <img className="cover" src="//pic.xiami.net/images/album/img36/75936/21001845161440558485.jpg?x-oss-process=image/resize,limit_0,m_fill,s_144/quality,q_80/format,jpg" alt=""/>
            <div className="info">
              <h2 className="name">在哪里都很好</h2>
              <p className="singer">蔡健雅 / 王源</p>
            </div>
          </div>
          <div className="center">
            <div className="player-btn">
              <i className="niceicon icon-prev niceshangyishou"></i>
              <i className="niceicon icon-play nicezanting1"></i>
              <i className="niceicon icon-next nicexiayishou"></i>
            </div>         
          </div>
          <div className="right flex-row">
            <div className="volume-wrap flex-row">
              <i className="niceicon volume-icon niceshengyin1"></i>
              <Slider defaultValue={30} />
            </div>
          </div>
          <div className="progress-wrap">
            <Slider defaultValue={30} />
          </div>
        </div>
      </div>
    </PlayerBarWrapper>
  );
});

export default AppFooter;