import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createChannel } from 'store/modules/action/channel';
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
    max: 20,
  },
];

const CreateChannelContainer = ({
  visible,
  token,
  // createChannel: requestCreateChannel,
}) => {
  const [state, setState] = useState({
    name: '',
    description: '',
    channelImage: 0,
  });

  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'NAME':
        setState({ ...state, name: data });
        return;
      case 'DESCRIPTION':
        setState({ ...state, description: data });
        return;
      default:
        return;
    }
  };

  const changeImageHandler = () => {
    setState({
      ...state,
      channelImage: state.channelImage + 1 < 8 ? state.channelImage + 1 : 0,
    });
  };

  return (
    <CreateChannel
      show={visible}
      title={title}
      inputForms={inputForms}
      channelImage={state.channelImage}
      onChangeHandler={onChangeHandler}
      changeImageHandler={changeImageHandler}
      // requestCreateChannel={requestCreateChannel}
    />
  );
};

// const mapStateToProps = ({}) => ({});

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ createChannel }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CreateChannelContainer);
export default CreateChannelContainer;
