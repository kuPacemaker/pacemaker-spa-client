import React, { useState } from 'react';
import classNames from 'classnames';

import './Paper.scss';

import arrow_left from 'resources/images/icon/arrow-left.png';
import arrow_right from 'resources/images/icon/arrow-right.png';
import check from 'resources/images/icon/check-symbol.png';

const alphabat = 'ABCDEFGHIJKLMNOPQUSTUVWXYZ';

const Paper = ({ questions, onAnswerHandler }) => {
  const [state, setState] = useState({
    index: 0,
  });
  const changeQuiz = (sign) => () => {
    if (state.index + sign < 0) return;
    setState({ ...state, index: state.index + sign });
  };
  if (questions.length === 0) return <></>;
  return (
    <div className="Paper">
      <div className="QuizPaper">
        <div className="QuizNumber">{state.index + 1}.</div>
        <div className="QuizBody">{questions[state.index].quiz}</div>
      </div>
      <div className="AnswerContainer">
        <div className="AnswerSet">
          {questions[state.index].answer_set.split('/').map((answer, index) => (
            <div
              key={index}
              className="Answer"
              onClick={onAnswerHandler(state.index, answer)}
            >
              <img
                className={classNames('Checked', {
                  Show: questions[state.index].answer === answer,
                })}
                src={check}
                alt=""
              />
              {`${alphabat.charAt(index)}) ${answer}`}
            </div>
          ))}
        </div>
      </div>

      <div className="IconSet">
        <img src={arrow_left} alt="" onClick={changeQuiz(-1)} />
        <div className="Index">
          {state.index + 1}/{questions.length}
        </div>
        <img src={arrow_right} alt="" onClick={changeQuiz(+1)} />
      </div>
    </div>
  );
};

export default Paper;
