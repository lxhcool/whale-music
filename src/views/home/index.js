import React, { memo } from 'react';

import Banner from './components/banner';
import Recommend from './components/recommend';

const Home = memo(() => {
  return (
    <div className="container">
      <Banner />
      <Recommend />
    </div>
  );
});

export default Home;