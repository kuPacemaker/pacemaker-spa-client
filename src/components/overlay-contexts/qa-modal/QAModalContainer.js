import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import QAModal from './view/QAModal';
import { enterChannel } from 'store/modules/action/board';

const title = 'ASK ME ANYTHING!';

const onChangeHandler = (state, setState) => (data) => {
  setState({
    ...state,
    code: data,
  });
};

const onRecognitionHandler = (recognition, setRecognition) => () => {
  setRecognition({
    ...recognition,
    onSpeach: true,
    info: 'SPEAK YOUR QUESTION',
  });
};

const finishRecognition = (recognition, setRecognition) => () => {
  setRecognition({
    ...recognition,
    onSpeach: false,
    info: 'PLEASE WAIT',
  });
};

const QAModalContainer = (props) => {
  const [qa, setQA] = useState({
    question: '',
    answer: '',
  });

  const [recognition, setRecognition] = useState({
    onSpeach: false,
    info: 'CLICK THE MIC BEFORE SPEAK',
  });

  const onEnterHandler = (token, code) => () => {
    props.changeHandler();
  };
  return (
    <QAModal
      show={props.visible}
      title={title}
      info={recognition.info}
      recognition={recognition.onSpeach}
      onOverlayHandler={props.changeHandler}
      onRecognitionHandler={onRecognitionHandler(recognition, setRecognition)}
      finishRecognition={finishRecognition(recognition, setRecognition)}
      // onChangeHandler={}
      // onEnterHandler={}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) => ({
  enter: (token, code) => dispatch(enterChannel({ token, code })),
});

export default connect(mapStateToProps, mapDispatchToProps)(QAModalContainer);
