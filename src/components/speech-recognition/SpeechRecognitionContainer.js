import React, { useEffect } from 'react';
import recognition, { useSpeechRecognition } from 'react-speech-recognition';

import SpeechRecognition from './view/SpeechRecognition';

const SpeechRecognitionContainer = (props) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    props.onChangeQuestion(transcript);
  }, [transcript]);

  useEffect(() => {
    if (!transcript || listening) return;
    props.callBackHandler();
    props.sendQuestion(transcript);
  }, [listening]);

  return (
    <SpeechRecognition
      position={props.position}
      state={props.state}
      onClickHandler={() => {
        resetTranscript();
        if (listening) {
          props.resetRecognition();
          recognition.stopListening();
        } else {
          props.onClickHandler();
          recognition.startListening({
            language: 'en-US',
          });
        }
      }}
    />
  );
};

export default SpeechRecognitionContainer;
