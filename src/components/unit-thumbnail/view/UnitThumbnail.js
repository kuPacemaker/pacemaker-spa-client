import React from 'react';
import classNames from 'classnames';

import edit from 'resources/images/icon/edit.png';
import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';
import quiz from 'resources/images/icon/quiz.png';
import answer from 'resources/images/icon/answer.png';

import './UnitThumbnail.scss';

const IconSet = ({ type, state, onIconClickHandler }) => {
  if (type === 'leader')
    return (
      <div className="IconSet">
        <img
          className="Icon"
          name="edit"
          src={edit}
          alt=""
          onClick={onIconClickHandler}
        />
        <img
          className="Icon"
          name="document"
          src={document}
          alt=""
          onClick={onIconClickHandler}
        />
        <img
          className="Icon"
          name="upload"
          src={upload}
          alt=""
          onClick={onIconClickHandler}
        />
        <img
          className="Icon"
          name="remove"
          src={remove}
          alt=""
          onClick={onIconClickHandler}
        />
      </div>
    );
  else if (type === 'runner')
    return (
      <div className="IconSet">
        <img
          className={classNames('Icon', {
            On: state.active,
            Off: !state.active,
          })}
          name={state.isQuiz ? 'quiz' : 'answer'}
          src={state.isQuiz ? quiz : answer}
          alt=""
          onClick={onIconClickHandler}
        />
        <img
          className="Icon"
          name="document"
          src={document}
          alt=""
          onClick={onIconClickHandler}
        />
      </div>
    );
  else return <div />;
};

const UnitThumbnail = ({
  type,
  id,
  title,
  state,
  onUnitClickHandler,
  onClickHandler,
}) => {
  return (
    <div className="UnitThumbnail">
      <div className="ContextSet" onClick={onUnitClickHandler(type, id)}>
        <div className="UnitIndex">Unit {id}</div>
        <div className="UnitTitle">{title}</div>
      </div>
      <IconSet type={type} state={state} onClickHandler={onClickHandler} />
    </div>
  );
};

export default UnitThumbnail;
