import React from 'react';
import { connect } from 'react-redux';

import Modal from '../default-modal';
import { removeUnit } from 'store/modules/action/channel';

const title = 'DO YOU WANT TO\nREMOVE THIS UNIT?';
const body = 'Remove cannot be stoped after submission.';

const RemoveUnitContainer = (props) => {
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () =>
        props.remove(
          { token: props.token, channel: props.channel, unit: props.unit },
          () => {
            props.changeHandler();
          }
        ),
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

const mapStateToProps = ({ account, modal }) => ({
  token: account.token,
  channel: modal.argument.channel,
  unit: modal.argument.unit,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (payload, callbackHandler) =>
    dispatch(removeUnit(payload, callbackHandler)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveUnitContainer);
