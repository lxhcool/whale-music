import React, { memo } from 'react';

import Banner from './components/banner';
import Recommend from './components/recommend';
import Album from './components/album';

const Home = memo(() => {
  return (
    <div className="container">
      <Banner />
      <Recommend />
      <Album />
    </div>
  );
});

export default Home;