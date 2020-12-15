import React, { memo, useState } from 'react';
import classNames from 'classnames'
import { navLinks, userSelects } from '@/common/nav-data';
import useDarkMode from 'use-dark-mode';
import { NavLink } from 'react-router-dom'

import { HeaderWrapper, SearchBox } from './style'

const AppHeader = memo(() => {
  const [searchPop, setSearchPop] = useState('')
  const theme = useDarkMode(false);
  const isLogin = false;
  const changeTheme = () => {
    if(theme.value) {
      theme.disable()
    } else {
      theme.enable()
    }
  }

  return (
    <HeaderWrapper className="shadow header">
      <div className="container flex-row">
        <div className="logo">
          <NavLink to="/"></NavLink>
        </div>
        <ul className="nav flex-row">
          {
            navLinks.map(item => {
              return (
                <li key={item.title}>
                  <NavLink to={item.link} exact>{item.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className="tool">
          <span className="icon" onClick={() => {setSearchPop(true)}}>
            <i className="niceicon nicesousuo search-icon" title="搜索"></i>            
          </span>
          <span className="icon" onClick={() => {changeTheme()}}>
            <i className={classNames({"dark": theme.value},"niceicon niceheiye theme-icon")} title="黑白"></i>            
          </span>
        </div>
        {
          isLogin ?
          <div className="no-login transition">
            登录
          </div>
          :
          <div className="login flex-row">
            <div className="user-box">
              <div className="avatar">
                <img className="avatar" src="http://p3.music.126.net/CPOCNGKwvMJ7Njt17Lu-Tg==/109951164836393307.jpg?param=100y100" alt=""/>
              </div>
              <div className="user-dropdown">
                <ul>
                  {
                    userSelects.map(item => {
                      return (
                        <li key={item.title}>
                          <NavLink to={item.link} className="flex-row">
                            <img src={item.img} alt={item.title} />
                            {item.title}
                          </NavLink>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
      <SearchBox className={classNames({"open": searchPop, "close": searchPop === false})}>
        <div className="overlay" onClick={() => {setSearchPop(false)}}></div>
        <div className="search-body">
          <div className="search-content">
            <div className="search-popup-cover">
              <div className="bg-effect">
                <span className="layer"></span>
              </div>
              <div className="search-form">
                <input
                  className="text"
                  type="text"
                  placeholder="请输入搜索关键词并按回车键…" />
              </div>
            </div>
            <div className="search-hot">
              <div className="title flex-row">
                <i className="niceicon nicelishi"></i>
                <span>历史搜索</span>
                <p>清空</p>
              </div>
              <ul className="tags">
                <li v-for="item of searchHistory">
                  <span className="btn flex-row">薛之谦<i className="close-dark"></i></span>
                </li>
              </ul>
            </div>
            <div className="search-hot">
              <div className="title flex-row">
                <i className="niceicon niceremensousuo"></i>
                <span>热门搜索</span>
              </div>
              <ul className="tags">
                <li>
                  <span className="btn">张杰</span>
                </li>
              </ul>
            </div>            
          </div>
          <div className="btn-close flex-center">
            <span className="close-light" onClick={() => {setSearchPop(false)}}></span>
          </div>
        </div>
      </SearchBox>
    </HeaderWrapper>
    
  );
});

export default AppHeader;