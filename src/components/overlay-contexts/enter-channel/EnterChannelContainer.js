import React, { useState } from 'react';
import { connect } from 'react-redux';
import { show } from 'store/modules/creators/modal';
import EnterChannel from './view/EnterChannel';
import { enterChannel } from 'store/modules/action/board';

const title = 'INTO MY NEW CHANNEL';
const info = 'ENTER YOUR ACCESS CODE';

const onChangeHandler = (state, setState) => (data) => {
  setState({
    ...state,
    code: data,
  });
};

const EnterChannelContainer = (props) => {
  const [state, setState] = useState({
    code: '',
  });

  const onEnterHandler = (token, code) => () => {
    props.changeHandler();
    props.enter(token, code, (state, message) => {
      if (state);
      else {
        props.onShowWarningModal(message);
      }
    });
  };
  return (
    <EnterChannel
      show={props.visible}
      title={title}
      info={info}
      onOverlayHandler={props.changeHandler}
      onChangeHandler={onChangeHandler(state, setState)}
      onEnterHandler={onEnterHandler(props.token, state.code)}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) => ({
  enter: (token, code, callback) =>
    dispatch(enterChannel({ token, code }, callback)),
  onShowWarningModal: (message) => dispatch(show('ERROR MODAL', { message })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterChannelContainer);
