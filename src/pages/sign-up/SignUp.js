import React from 'react';

import HeaderContainer from 'components/header';
import FooterContaioner from 'components/footer';
import RootRouter from 'routes/RootRouter.js';

const RootPage = () => {
  return (
    <div>
      <HeaderContainer />
      <RootRouter />
      <FooterContaioner />
    </div>
  );
};

export default RootPage;
