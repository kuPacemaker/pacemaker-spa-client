import React, { useState } from 'react';

import HeaderContainer from 'components/header';
import FooterContaioner from 'components/footer';
import Overlay from 'components/overlay';
import RootRouter from 'routes/RootRouter.js';

const RootPage = () => {
  const [state, setState] = useState({
    showOverlay: false,
    overlayTpye: '',
  });
  const changeOverlay = (type) => {
    setState({
      showOverlay: false,
      overlayTpye: type,
    });
  };
  const showOverlay = (type) => {
    setState({
      showOverlay: true,
      overlayTpye: type,
    });
  };

  return (
    <div>
      <HeaderContainer overlay={showOverlay} />
      <RootRouter />
      <FooterContaioner />
      <Overlay
        show={state.showOverlay}
        type={state.overlayTpye}
        change={changeOverlay}
      />
    </div>
  );
};

export default RootPage;
