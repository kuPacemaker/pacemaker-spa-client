import React from 'react';
import classNames from 'classnames';

import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';
import quiz from 'resources/images/icon/quiz.png';
import answer from 'resources/images/icon/answer.png';

const TopIconSet = ({ type, unit, onClickHandler }) => {
  if (type === 'leader') {
    return (
      <div>
        <img
          className="Icon"
          src={document}
          alt=""
          onClick={onClickHandler('document')}
        />
        <img
          className={classNames('Icon', { Disable: unit.paper.isStart })}
          src={upload}
          alt=""
          onClick={onClickHandler('upload')}
        />
        <img className="Icon" src={remove} alt="" />
      </div>
    );
  } else if (type === 'runner') {
    return (
      <div>
        <img
          className={classNames('Icon', {
            Disable: !unit.paper.isStart,
          })}
          src={unit.paper.isStart && unit.paper.isEnd ? answer : quiz}
          alt=""
          onClick={onClickHandler('paper')}
        />
        <img
          className={classNames('Icon', {
            Disable: !unit.document.visible,
          })}
          src={document}
          alt=""
          onClick={onClickHandler('document')}
        />
      </div>
    );
  } else return <div></div>;
};

export default TopIconSet;
