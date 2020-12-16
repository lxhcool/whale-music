import React, { memo } from 'react';

import Banner from './components/banner';

const Home = memo(() => {
  return (
    <div className="container">
      <Banner />
    </div>
  );
});

export default Home;