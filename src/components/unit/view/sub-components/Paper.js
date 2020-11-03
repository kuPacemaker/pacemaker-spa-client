import React, { useState } from 'react';
import classNames from 'classnames';

import './Paper.scss';

import arrow_left from 'resources/images/icon/arrow-left.png';
import arrow_right from 'resources/images/icon/arrow-right.png';
import check from 'resources/images/icon/check-symbol.png';
import { startUpperCase } from 'common/utility/string';

const alphabat = 'ABCDEFGHIJKLMNOPQUSTUVWXYZ';

const Paper = ({ questions, onAnswerHandler, isEnd }) => {
  const [index, setState] = useState(0);
  const changeQuiz = (sign, length) => () => {
    if (index + sign < 0 || index + sign >= length) return;
    setState(index + sign);
  };
  if (questions.length === 0) return <></>;
  return (
    <div className="Paper">
      <div className="QuizPaper">
        <div className="QuizNumber">{index + 1}.</div>
        <div className="QuizBody">{questions[index].quiz}</div>
      </div>
      <div className="AnswerContainer">
        <div className="AnswerSet">
          {questions[index].answer_set.split('|^|').map((answer, i) => (
            <div
              key={i}
              className={classNames('Answer', {
                Disable: isEnd,
                Correct: isEnd && questions[index].answer === answer,
              })}
              onClick={onAnswerHandler(index, answer)}
            >
              <img
                draggable="false"
                className={classNames('Checked', {
                  Show: questions[index].user_answer === answer,
                })}
                src={check}
                alt=""
              />
              {`${alphabat.charAt(i)}) ${startUpperCase(answer)}`}
            </div>
          ))}
        </div>
      </div>

      <div className="IconSet">
        <img
          draggable="false"
          src={arrow_left}
          alt=""
          onClick={changeQuiz(-1, questions.length)}
        />
        <div className="Index">
          {index + 1}/{questions.length}
        </div>
        <img
          draggable="false"
          src={arrow_right}
          alt=""
          onClick={changeQuiz(+1, questions.length)}
        />
      </div>
    </div>
  );
};

export default Paper;
