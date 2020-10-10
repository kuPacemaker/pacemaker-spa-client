import React from 'react';
import classNames from 'classnames';

import arrow from 'resources/images/icon/arrow-right.png';
import './EnterChannel.scss';

const EnterChannel = ({
  show,
  title,
  info,
  onChangeHandler,
  onEnterHandler,
}) => {
  return (
    <div
      className={classNames('EnterChannel', {
        Show: show,
        Hide: !show,
      })}
    >
      <div className="Title">
        {title.split('\n').map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div className="InputLine">
        <input
          className={classNames('AccessCode', {
            Show: show,
            Hide: !show,
          })}
          placeholder={info}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      <div className="InputLine">
        <img
          draggable="false"
          className={classNames('Arrow', {
            Show: show,
            Hide: !show,
          })}
          src={arrow}
          alt=""
          onClick={onEnterHandler}
        />
      </div>
    </div>
  );
};

export default EnterChannel;
