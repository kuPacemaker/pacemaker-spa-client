import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../default-modal';
import { show } from 'store/modules/creators/modal';
import { submitPaper } from 'store/modules/action/unit';

const title = 'DO YOU WANT TO\nSUBMIT YOUR QUIZ?';
const body = 'Answers cannot be modified after submission.';

const SubmitPaperContainer = (props) => {
  const history = useHistory();
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        const answers = props.paper.questions.map((question) => ({
          id: question.id,
          user_answer: question.user_answer,
        }));
        props.submit(
          { token: props.token, unit: props.unit, answers },
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

const mapStateToProps = ({ account, unit }) => ({
  token: account.token,
  unit: unit.data.unit.id,
  paper: unit.data.unit.paper,
});

const mapDispatchToProps = (dispatch) => ({
  submit: (paper, callbackHandler) =>
    dispatch(submitPaper(paper, callbackHandler)),
  onShowWarningModal: (message) => dispatch(show('ERROR MODAL', { message })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitPaperContainer);
