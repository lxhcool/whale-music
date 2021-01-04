import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import store from '@/store';

import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';
import PlayerBar from '@/components/player-bar';
import { HashRouter } from 'react-router-dom';

import { BackTop } from 'antd';
import gotopImg  from '@/assets/images/gotop.png';


const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <div className="app-layout">
          {renderRoutes(routes)}
        </div>
        <AppFooter />
      </HashRouter>
      <BackTop visibilityHeight={300} duration={800}>
        <img src={gotopImg} alt=""/>
      </BackTop>
      <PlayerBar />
    </Provider>
  );
});

export default App;