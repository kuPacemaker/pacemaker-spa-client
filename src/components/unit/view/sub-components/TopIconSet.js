import React from 'react';
import classNames from 'classnames';

import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';
import quiz from 'resources/images/icon/quiz.png';
import answer from 'resources/images/icon/answer.png';

const TopIconSet = ({ type, unit, onClickHandler, onRemoveUnitHandler }) => {
  if (type === 'leader') {
    return (
      <>
        <img
          draggable="false"
          className={classNames('Icon', {
            Disable: !unit.document.id,
          })}
          src={document}
          alt=""
          onClick={onClickHandler('document')}
        />
        <img
          draggable="false"
          className={classNames('Icon', {
            Disable: unit.paper.questions.length === 0,
          })}
          src={upload}
          alt=""
          onClick={onClickHandler('upload')}
        />
        <img
          draggable="false"
          className="Icon"
          src={remove}
          alt=""
          onClick={onRemoveUnitHandler}
        />
      </>
    );
  } else if (type === 'runner') {
    return (
      <>
        <img
          draggable="false"
          className={classNames('Icon', {
            Disable: !unit.paper.isStart,
          })}
          src={unit.paper.isStart && unit.paper.isEnd ? answer : quiz}
          alt=""
          onClick={onClickHandler(
            unit.paper.isStart && unit.paper.isEnd ? 'answer' : 'paper'
          )}
        />
        <img
          draggable="false"
          className={classNames('Icon', {
            Disable: !unit.document.visible,
          })}
          src={document}
          alt=""
          onClick={onClickHandler('document')}
        />
      </>
    );
  } else return <></>;
};

export default TopIconSet;
