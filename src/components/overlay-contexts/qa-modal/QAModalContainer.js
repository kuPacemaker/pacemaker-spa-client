import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import QAModal from './view/QAModal';
import { askQuestion } from 'store/modules/action/qa';
import { reset } from 'store/modules/creators/qa';
import { active, sleep } from 'store/modules/creators/modal';

const title = 'ASK ME ANYTHING!';

const onChangeQuestion = (setQuestion) => (data) => {
  const question = data.charAt(0).toUpperCase() + data.slice(1);
  setQuestion(question);
};

const onRecognitionHandler = (recognition, setRecognition) => (
  resetHandler
) => () => {
  resetHandler();
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

const resetRecognition = (recognition, setRecognition) => () => {
  setRecognition({
    ...recognition,
    onSpeach: false,
    info: 'CLICK THE MIC BEFORE SPEAK',
  });
};

const QAModalContainer = (props) => {
  const [question, setQuestion] = useState('');

  const [recognition, setRecognition] = useState({
    onSpeach: false,
    info: 'CLICK THE MIC BEFORE SPEAK',
  });

  useEffect(() => {
    if (!props.visible) return;
    props.reset();
  }, [props.visible]);

  useEffect(() => {
    props.setActive();
    resetRecognition(recognition, setRecognition)();
  }, [props.answer]);

  const sendQuestion = (token, document) => (q) => {
    props.ask(token, document, q);
    props.setSleep();
  };
  return (
    <QAModal
      show={props.visible}
      title={title}
      info={recognition.info}
      recognition={recognition.onSpeach}
      question={question}
      answer={props.answer}
      onOverlayHandler={props.changeHandler}
      onRecognitionHandler={onRecognitionHandler(
        recognition,
        setRecognition
      )(props.reset)}
      finishRecognition={finishRecognition(recognition, setRecognition)}
      resetRecognition={resetRecognition(recognition, setRecognition)}
      sendQuestion={sendQuestion(props.token, props.document)}
      onChangeQuestion={onChangeQuestion(setQuestion)}
    />
  );
};

const mapStateToProps = ({ account, unit, qa }) => ({
  token: account.token,
  document: unit.data.unit.document,
  question: qa.data.question,
  answer: qa.data.answer,
});

const mapDispatchToProps = (dispatch) => ({
  ask: (token, document, question) =>
    dispatch(askQuestion({ token, document, question })),
  reset: () => dispatch(reset()),
  setActive: () => dispatch(active()),
  setSleep: () => dispatch(sleep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QAModalContainer);
