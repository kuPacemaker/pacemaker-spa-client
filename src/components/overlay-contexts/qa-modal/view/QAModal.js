import React from 'react';
import classNames from 'classnames';

import SpeechRecognition from 'components/speech-recognition';

import './QAModal.scss';

const QAModal = ({
  show,
  title,
  info,
  recognition,
  question,
  answer,
  onRecognitionHandler,
  finishRecognition,
  sendQuestion,
  onChangeQuestion,
}) => {
  return (
    <div
      className={classNames('QAModal', {
        Show: show,
        Hide: !show,
      })}
    >
      <div className="TopArticle">
        <div className="Title">
          {title.split('\n').map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div className="Info">
          {info.split('\n').map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>

      <SpeechRecognition
        position={{ position: 'absolute', top: '50px', right: '50px' }}
        state={recognition}
        onClickHandler={onRecognitionHandler}
        callBackHandler={finishRecognition}
        sendQuestion={sendQuestion}
        onChangeQuestion={onChangeQuestion}
      />

      <div className="InputLine">
        <div className="Tag">Q.</div>
        <textarea className="Body Question" readOnly={true} value={question} />
      </div>
      <div className="InputLine">
        <div className="Tag">A.</div>
        <textarea className="Body Answer" readOnly={true} value={answer} />
      </div>
      <div className="InputLine" />
    </div>
  );
};

export default QAModal;
