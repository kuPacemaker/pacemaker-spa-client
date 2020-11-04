import React from 'react';
import { connect } from 'react-redux';

import Modal from '../default-modal';

const SubmitModalContainer = (props) => {
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        if (props.callbackHandler) props.callbackHandler();
        props.changeHandler();
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
      title={props.title}
      body={props.body}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  title: modal.argument.title,
  body: modal.argument.body,
  callbackHandler: modal.argument.callbackHandler,
});

export default connect(mapStateToProps, null)(SubmitModalContainer);
