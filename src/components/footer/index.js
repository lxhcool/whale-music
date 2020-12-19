import React, { memo } from 'react';

import { FooterWrapper } from './style'

const AppFooter = memo(() => {
  return (
    <FooterWrapper className="footer">
      <div className="container flex-between">
        <p className="links">
          <a href="https://music.163.com/#/user/home?id=119832090" target="_blank" rel="noreferrer">
            <i className="niceicon nicewangyiyunyinle"></i>
          </a>
          <a href="https://github.com/lxhcool" target="_blank" rel="noreferrer">
            <i className="niceicon niceicon_githubb"></i>
          </a>
        </p>
        <p>Copyright © 2012-2020nicemusic 演示站. Designed by <a href="https://www.lxhcool.cn" target="_blank" rel="noreferrer">lxhcool.</a></p>        
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;