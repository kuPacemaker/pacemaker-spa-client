import React from 'react';

import HeaderContainer from 'components/header';
import FooterContaioner from 'components/footer';
import Overlay from 'components/overlay';
import RootRouter from 'routes/RootRouter.js';

// FIXME: make id token cache in localstorage
const RootPage = () => {
  return (
    <>
      <HeaderContainer />
      <FooterContaioner />
      <RootRouter />
      <Overlay />
    </>
  );
};

export default RootPage;
