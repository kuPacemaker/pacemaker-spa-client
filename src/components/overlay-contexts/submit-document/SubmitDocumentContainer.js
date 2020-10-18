import React from 'react';
import { connect } from 'react-redux';
import Modal from '../default-modal';
import { makeQuestion } from 'store/modules/action/unit';

const title = 'DO YOU WANT TO\nMAKE YOUR OWN QUIZ?';
const body =
  'It will take few minutes,\nand it can’t be cancelled in progress.';

const SubmitDocumentContainer = (props) => {
  const buttons = [
    {
      name: 'YES',
      onClickHandelr: () => {
        props.onCreateQuestion(props.document, () => {
          console.log('Create Question');
          // props.changeHandler();
        });
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
  document: unit.unit.document,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateQuestion: (document, callbackHandler) =>
    dispatch(makeQuestion(document, callbackHandler)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitDocumentContainer);
