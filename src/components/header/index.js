import React, { memo, useEffect, useState, useRef } from 'react';
import classNames from 'classnames'
import { navLinks, userSelects } from '@/common/nav-data';
import useDarkMode from 'use-dark-mode';
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  const [userDropdown, setUserdropdown] = useState(false)
  const userDropdownRef = useRef(null | HTMLElement);
  const theme = useDarkMode(false);
  useEffect(() => {
    const handler = (e) => {
      if (userDropdownRef.current && userDropdown) {
        setUserdropdown(false)
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  })
  return (
    <HeaderWrapper className="shadow">
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
        <div className="login flex-row">
          <i className="niceicon niceneirong-taiyang-heiyemoshi "></i>
          {/* <div onClick={theme.disable}>白</div>
          <div onClick={theme.enable}>黑</div> */}
          <div className={classNames({"active": userDropdown},"user-box")} onClick={() => {setUserdropdown(true)}} ref={userDropdownRef}>
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
      </div>
    </HeaderWrapper>
  );
});

export default AppHeader;