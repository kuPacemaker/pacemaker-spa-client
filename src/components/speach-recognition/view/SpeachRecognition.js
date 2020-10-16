import React from 'react';
import classNames from 'classnames';

import mic from 'resources/images/icon/mic.png';
import './SpeachRecognition.scss';

const SpeachRecognition = (props) => {
  return (
    <div class="SpeechRecognition" style={props.position}>
      <span
        class={classNames('EffectHalo', {
          'Halo-Blink': !props.state,
          'Halo-Runnig': props.state,
        })}
      />
      <span
        class={classNames('EffectHalo', {
          'Halo-Blink': !props.state,
          'Halo-Runnig': props.state,
        })}
      />
      <span
        class="NodeCore"
        onClick={() => {
          props.onClickHandler();
          setTimeout(props.callBackHandler, 5000);
        }}
      >
        <img class="CoreImage" src={mic} alt="" />
      </span>
    </div>
  );
};

export default SpeachRecognition;
