import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { show, hide } from 'store/modules/creators/modal';
import Overlay from './view/Overlay';

const OverlayContainer = (props) => {
  const overlayHandler = (type) => {
    const { show: showOverlay, hide: hideOverlay } = props;
    if (type === undefined) hideOverlay();
    else showOverlay(type);
    console.log('overay action ', type);
  };
  return (
    <Overlay
      visible={props.visible}
      type={props.type}
      overlayHandler={overlayHandler}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  visible: modal.visible,
  type: modal.type,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ show, hide }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);
// export default OverlayContainer;
