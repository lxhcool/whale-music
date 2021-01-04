import React, { memo } from 'react';

import Banner from './components/banner';
import Sheet from './components/sheet';
import Song from './components/song';
import Album from './components/album';
import Singer from './components/singer';
import Mv from './components/mv';

const Home = memo(() => {
  return (
    <div className="container">
      <Banner />
      <Sheet />
      <Song />
      <Album />
      <Singer />
      <Mv />
    </div>
  );
});

export default Home;