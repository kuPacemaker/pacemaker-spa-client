import React from 'react';
import classNames from 'classnames';

import SpeachRecognition from 'components/speach-recognition';
import arrow from 'resources/images/icon/arrow-right.png';
import './QAModal.scss';

const QAModal = ({
  show,
  title,
  info,
  recognition,
  onChangeHandler,
  onEnterHandler,
  onRecognitionHandler,
  finishRecognition,
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

      <SpeachRecognition
        position={{ position: 'absolute', top: '50px', right: '50px' }}
        state={recognition}
        onClickHandler={onRecognitionHandler}
        callBackHandler={finishRecognition}
      />

      <div className="InputLine">
        <div>Q.</div>
      </div>
      <div className="InputLine">
        <div>A.</div>
      </div>
      <div className="InputLine"></div>
    </div>
  );
};

export default QAModal;
