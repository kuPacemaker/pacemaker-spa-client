import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import QAModal from './view/QAModal';
import { enterChannel } from 'store/modules/action/board';

const title = 'ASK ME ANYTHING!';

const onChangeQuestion = (qa, setQA) => (data) => {
  setQA({
    ...qa,
    question: data,
  });
};

const onAnswerQuestion = (qa, setQA) => (data) => {
  setQA({
    ...qa,
    answer: data,
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
  const [data, setData] = useState({
    question: '',
    answer: '',
  });

  const [recognition, setRecognition] = useState({
    onSpeach: false,
    info: 'CLICK THE MIC BEFORE SPEAK',
  });

  const sendQuestion = (token) => (question) => {
    console.log(token, question);
    // props.changeHandler();
  };
  return (
    <QAModal
      show={props.visible}
      title={title}
      info={recognition.info}
      recognition={recognition.onSpeach}
      data={data}
      onOverlayHandler={props.changeHandler}
      onRecognitionHandler={onRecognitionHandler(recognition, setRecognition)}
      finishRecognition={finishRecognition(recognition, setRecognition)}
      sendQuestion={sendQuestion(props.token)}
      onChangeQuestion={onChangeQuestion(data, setData)}
      onAnswerQuestion={onAnswerQuestion(data, setData)}
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
