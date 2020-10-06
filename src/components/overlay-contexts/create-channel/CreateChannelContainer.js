import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createChannel } from 'store/modules/action/board';
import CreateChannel from './view/CreateChannel';

const title = 'OPEN MY NEW CLASS';

const inputForms = [
  {
    title: 'NAME',
    type: 'text',
    fontSize: '1.35em',
    max: 15,
  },
  {
    title: 'DESCRIPTION',
    type: 'text',
    fontSize: '1.35em',
    max: 25,
  },
];

const CreateChannelContainer = ({
  visible,
  token,
  changeHandler,
  createChannel,
}) => {
  const [state, setState] = useState({
    title: '',
    detail: '',
    imgType: 0,
  });

  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'NAME':
        setState({ ...state, title: data });
        return;
      case 'DESCRIPTION':
        setState({ ...state, detail: data });
        return;
      default:
        return;
    }
  };

  const changeImageHandler = () => {
    setState({
      ...state,
      imgType: state.imgType + 1 < 8 ? state.imgType + 1 : 0,
    });
  };

  const requestCreateChannel = () => {
    createChannel({ token, ...state });
    changeHandler();
  };

  return (
    <CreateChannel
      show={visible}
      title={title}
      inputForms={inputForms}
      channelImage={state.imgType}
      onChangeHandler={onChangeHandler}
      changeImageHandler={changeImageHandler}
      requestCreateChannel={requestCreateChannel}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createChannel }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannelContainer);
// export default CreateChannelContainer;
