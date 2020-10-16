import React from 'react';
import classNames from 'classnames';

import mic from 'resources/images/icon/mic.png';
import './SpeechRecognition.scss';

const SpeechRecognition = (props) => {
  return (
    <div className="SpeechRecognition" style={props.position}>
      <span
        className={classNames('EffectHalo', {
          'Halo-Blink': !props.state,
          'Halo-Runnig': props.state,
        })}
      />
      <span
        className={classNames('EffectHalo', {
          'Halo-Blink': !props.state,
          'Halo-Runnig': props.state,
        })}
      />
      <span className="NodeCore" onClick={props.onClickHandler}>
        <img className="CoreImage" src={mic} alt="" />
      </span>
    </div>
  );
};

export default SpeechRecognition;
