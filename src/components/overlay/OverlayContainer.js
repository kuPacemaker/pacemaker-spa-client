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
  };
  return (
    <Overlay
      visible={props.visible}
      type={props.type}
      active={props.active}
      overlayHandler={overlayHandler}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  visible: modal.visible,
  type: modal.type,
  active: modal.active,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ show, hide }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);
