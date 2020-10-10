import React from 'react';
import classNames from 'classnames';

import edit from 'resources/images/icon/edit.png';
import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';
import quiz from 'resources/images/icon/quiz.png';
import answer from 'resources/images/icon/answer.png';

import './UnitThumbnail.scss';

const IconSet = ({ type, state, onClickHandler }) => {
  if (type === 'leader')
    return (
      <div className="IconSet">
        <img
          draggable="false"
          className="Icon"
          name="edit"
          src={edit}
          alt=""
          onClick={onClickHandler}
        />
        <img
          draggable="false"
          className="Icon"
          name="document"
          src={document}
          alt=""
          onClick={onClickHandler}
        />
        <img
          draggable="false"
          className="Icon"
          name="upload"
          src={upload}
          alt=""
          onClick={onClickHandler}
        />
        <img
          draggable="false"
          className="Icon"
          name="remove"
          src={remove}
          alt=""
          onClick={onClickHandler}
        />
      </div>
    );
  else if (type === 'runner')
    return (
      <div className="IconSet">
        <img
          draggable="false"
          className={classNames('Icon', {
            On: state.active,
            Off: !state.active,
          })}
          name="paper"
          src={state.isQuiz ? quiz : answer}
          alt=""
          onClick={onClickHandler}
        />
        <img
          draggable="false"
          className="Icon"
          name="document"
          src={document}
          alt=""
          onClick={onClickHandler}
        />
      </div>
    );
  else return <div />;
};

const UnitThumbnail = ({
  type,
  id,
  index,
  title,
  state,
  onUnitClickHandler,
  onIconClickHandler,
}) => {
  return (
    <div className="UnitThumbnail">
      <div className="ContextSet" onClick={onUnitClickHandler(type, id, '')}>
        <div className="UnitIndex">Unit {index}</div>
        <div className="UnitTitle">{title}</div>
      </div>
      <IconSet type={type} state={state} onClickHandler={onIconClickHandler} />
    </div>
  );
};

export default UnitThumbnail;
