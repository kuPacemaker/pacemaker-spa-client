import React from 'react';
import classNames from 'classnames';

import edit from 'resources/images/icon/edit.png';
import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';
import paper from 'resources/images/icon/quiz.png';
import answer from 'resources/images/icon/answer.png';

import './UnitThumbnail.scss';

const IconSet = ({ type, state, onClickHandler, showModalHandler }) => {
  if (type === 'leader')
    return (
      <div className="IconSet">
        <img
          draggable="false"
          className="Icon"
          name="edit"
          src={edit}
          alt=""
          onClick={showModalHandler('edit')}
        />
        <img
          draggable="false"
          className={classNames('Icon', {
            On: state.hasDocument,
            Off: !state.hasDocument,
          })}
          name="document"
          src={document}
          alt=""
          onClick={onClickHandler}
        />
        <img
          draggable="false"
          className={classNames('Icon', {
            On: state.hasPaper,
            Off: !state.hasPaper,
          })}
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
          onClick={showModalHandler('remove')}
        />
      </div>
    );
  else if (type === 'runner')
    return (
      <div className="IconSet">
        <img
          draggable="false"
          className={classNames('Icon', {
            On: state.startQuiz,
            Off: !state.startQuiz,
          })}
          name={state.endQuiz ? 'answer' : 'paper'}
          src={state.endQuiz ? answer : paper}
          alt=""
          onClick={onClickHandler}
        />
        <img
          draggable="false"
          className={classNames('Icon', {
            On: state.hasDocument,
            Off: !state.hasDocument,
          })}
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
  index,
  title,
  state,
  onClickHandler,
  showModalHandler,
}) => {
  return (
    <div className="UnitThumbnail">
      <div className="ContextSet" name="root" onClick={onClickHandler}>
        <div className="UnitIndex">Unit {index}</div>
        <div className="UnitTitle">{title}</div>
      </div>
      <IconSet
        type={type}
        state={state}
        onClickHandler={onClickHandler}
        showModalHandler={showModalHandler}
      />
    </div>
  );
};

export default UnitThumbnail;
