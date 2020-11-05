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
    props.onCreateQuestion(
      { token: props.token, unit: props.unit },
      (state, message) => {
        if (state) {
          props.onShowAlertModal(
            'YOUR QUESTION IS\nNOW DELIVERED!',
            'New questions have been generated!\nCheck it out at Newspeed!'
          );
        } else {
          props.onShowWarningModal(message);
        }
      }
    );
  };
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        if (props.paper.isStart || props.paper.isEnd) {
          props.onShowSubmitModal(
            'OOPS..!\nWATCH OUT!',
            'Papers have already been delivered!\nIf you generate new questions, all papers will be disappear.\nDo you really want to generate new questions?',
            createQuestion
          );
        } else {
          createQuestion();
          props.changeHandler();
        }
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
  unit: unit.data.unit.id,
  paper: unit.data.unit.paper,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateQuestion: (payload, callbackHandler) =>
    dispatch(makeQuestion(payload, callbackHandler)),
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
