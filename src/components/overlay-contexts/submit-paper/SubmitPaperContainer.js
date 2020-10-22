import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from '../default-modal';
import { submitPaper } from 'store/modules/action/unit';

const title = 'DO YOU WANT TO\nSUBMIT YOUR QUIZ?';
const body = 'Answers cannot be modified after submission.';

const SubmitPaperContainer = (props) => {
  const history = useHistory();
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () =>
        props.submit(props.paper, (success) => {
          props.changeHandler();
          history.goBack();
        }),
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
  paper: unit.data.unit.paper,
});

const mapDispatchToProps = (dispatch) => ({
  submit: (document, callbackHandler) =>
    dispatch(submitPaper(document, callbackHandler)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitPaperContainer);
