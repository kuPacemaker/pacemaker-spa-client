import React, { useState } from 'react';

import HeaderContainer from 'components/header';
import FooterContaioner from 'components/footer';
import Overlay from 'components/overlay';
import RootRouter from 'routes/RootRouter.js';

const RootPage = () => {
  const [state, setState] = useState({
    showOverlay: false,
    overlayTpye: 'CREATE CHANNEL',
  });
  const changeOverlay = (type) => {
    setState({
      showOverlay: type ? true : false,
      overlayTpye: type ? type : state.overlayTpye,
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
      <Overlay />
      {/* <Overlay
        show={state.showOverlay}
        type={state.overlayTpye}
        changeHandler={changeOverlay}
      /> */}
    </div>
  );
};

export default RootPage;
