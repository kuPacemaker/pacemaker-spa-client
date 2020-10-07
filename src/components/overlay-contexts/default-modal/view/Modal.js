import React from 'react';
import classNames from 'classnames';

import './Modal.scss';

const Modal = ({ show, title, body, buttons }) => {
  return (
    <div
      className={classNames('Modal', {
        Show: show,
        Hide: !show,
      })}
    >
      <div className="Title">
        {title.split('\n').map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div className="Body">
        {body.split('\n').map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div className="ButtonSet">
        {buttons.map((button, index) => (
          <div className="Button" key={index} onClick={button.onClickHandelr}>
            {button.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
