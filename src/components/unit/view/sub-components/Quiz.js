import React, { useState } from 'react';
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
const removeQuiz = (state, setState) => () => {
  setState({ ...state, removed: !state.removed });
};
const Quiz = ({ data }) => {
  const [state, setState] = useState({
    hideAnswer: true,
    hideCross: true,
    removed: false,
  });

  const answers = data.answer_set.split('/');
  return (
    <div
      className="Quiz"
      onMouseEnter={showCross(state, setState)(false)}
      onMouseLeave={showCross(state, setState)(true)}
    >
      <img
        className={classNames('RemoveQuiz', { Hide: state.hideCross })}
        src={state.removed ? restore : remove}
        alt=""
        onClick={removeQuiz(state, setState)}
      />
      <div
        className={classNames('QuizBody', { Removed: state.removed })}
        onClick={toggleHide(state, setState)}
      >
        {data.quiz}
      </div>
      <div
        className={classNames('AnswerSet', {
          Hide: state.hideAnswer,
          Removed: state.removed,
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
