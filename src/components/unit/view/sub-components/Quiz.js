import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import remove from 'resources/images/icon/remove.png';
import restore from 'resources/images/icon/restore.png';

import './Quiz.scss';

const alphabat = 'ABCDEFGHIJKLMNOPQUSTUVWXYZ';

const toggleHide = (state, setState) => () => {
  setState({ ...state, hideAnswer: !state.hideAnswer });
};
const showCross = (state, setState) => (isEnter) => () => {
  setState({ ...state, hideCross: isEnter });
};

const Quiz = ({ data, onVerifyHandler }) => {
  const [state, setState] = useState({
    hideAnswer: true,
    hideCross: true,
  });

  useEffect(() => {
    setState({
      ...state,
      hideAnswer: true,
    });
  }, [data.id]);

  const answers = data.answer_set.split('/');
  return (
    <div
      className="Quiz"
      onMouseEnter={showCross(state, setState)(false)}
      onMouseLeave={showCross(state, setState)(true)}
    >
      <img
        className={classNames('RemoveQuiz', { Hide: state.hideCross })}
        src={data.verified ? remove : restore}
        alt=""
        onClick={onVerifyHandler(data.id)}
      />
      <div
        className={classNames('QuizBody', { Remove: !data.verified })}
        onClick={toggleHide(state, setState)}
      >
        {data.quiz}
      </div>
      <div
        className={classNames('AnswerSet', {
          Hide: state.hideAnswer,
          Remove: !data.verified,
        })}
      >
        {answers.map((answer, index) => (
          <span
            key={index}
            className={classNames('Answer', {
              Checked: answer === data.answer,
            })}
          >{`${alphabat.charAt(index)}) ${answer}`}</span>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
