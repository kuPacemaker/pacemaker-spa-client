import React from 'react';
import { connect } from 'react-redux';
import Modal from '../default-modal';
import { show } from 'store/modules/creators/modal';
import { makeQuestion } from 'store/modules/action/unit';

const title = 'DO YOU WANT TO\nMAKE YOUR OWN QUIZ?';
const body =
  'It will take few minutes,\nand it can’t be cancelled in progress.';

const SubmitDocumentContainer = (props) => {
  const createQuestion = () => {
    props.onCreateQuestion(props.document, () => {
      props.onShowAlertModal(
        'YOUR QUESTION IS\nNOW DELIVERED!',
        'New questions have been generated!\nCheck it out at Newspeed!'
      );
    });
  };

  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        createQuestion();
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
      title={title}
      body={body}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ account, unit }) => ({
  token: account.token,
  document: unit.data.unit.document,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateQuestion: (document, callbackHandler) =>
    dispatch(makeQuestion(document, callbackHandler)),
  onShowWarningModal: (message) => dispatch(show('ERROR MODAL', { message })),
  onShowSubmitModal: (title, body, callbackHandler) =>
    dispatch(show('SUBMIT MODAL', { title, body, callbackHandler })),
  onShowAlertModal: (title, body) =>
    dispatch(show('ALERT MODAL', { title, body })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitDocumentContainer);
