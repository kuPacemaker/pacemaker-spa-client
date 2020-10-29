import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../default-modal';
import { show } from 'store/modules/creators/modal';
import { exitChannel } from 'store/modules/action/board';

const title = 'DO YOU WANT TO\nEXIT THIS CHANNEL?';
const body =
  'Are you sure you want to exit this channel?\nExit channel is irreversible once executed.';

const ExitChannelContainer = (props) => {
  const history = useHistory();
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        props.exit(
          { token: props.token, channel: props.channel },
          (state, message) => {
            if (state) {
              props.changeHandler();
              history.goBack();
            } else {
              props.onShowWarningModal(message);
            }
          }
        );
      },
    },
    {
      name: 'NO',
      onClickHandelr: () => props.changeHandler(),
    },
  ];

  return (
    <Modal
      show={props.visible}
      changeHandler={props.changeHandler}
      title={title}
      body={body}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ account, channel }) => ({
  token: account.token,
  channel: channel.data.id,
});

const mapDispatchToProps = (dispatch) => ({
  exit: (payload, callbackHandler) =>
    dispatch(exitChannel(payload, callbackHandler)),
  onShowWarningModal: (message) => dispatch(show('ERROR MODAL', { message })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExitChannelContainer);
