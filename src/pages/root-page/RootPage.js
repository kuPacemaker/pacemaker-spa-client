import React from 'react';

import HeaderContainer from 'components/header';
import FooterContaioner from 'components/footer';
import Overlay from 'components/overlay';
import RootRouter from 'routes/RootRouter.js';

const RootPage = () => {
  return (
    <div>
      <HeaderContainer />
      <RootRouter />
      <FooterContaioner />
      <Overlay />
    </div>
  );
};

export default RootPage;
