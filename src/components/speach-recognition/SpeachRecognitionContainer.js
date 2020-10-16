import React from 'react';
import SpeachRecognition from './view/SpeachRecognition';

const SpeachRecognitionContainer = (props) => {
  return (
    <SpeachRecognition
      position={props.position}
      state={props.state}
      onClickHandler={props.onClickHandler}
      callBackHandler={props.callBackHandler}
    />
  );
};

export default SpeachRecognitionContainer;
