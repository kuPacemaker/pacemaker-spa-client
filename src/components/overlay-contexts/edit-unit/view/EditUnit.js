import React from 'react';
import classNames from 'classnames';

import Input from 'components/custom-input';
import arrow from 'resources/images/icon/arrow-right.png';

import './EditUnit.scss';

const EditUnit = ({
  show,
  title,
  index,
  inputForms,
  onChangeHandler,
  requestCreateUnit,
}) => {
  return (
    <div className="EditUnit">
      <div className="Title">{title}</div>
      <div className="UnitIndex">UNIT. {index}</div>
      <div className="InputForms">
        {inputForms.map((input, i) => (
          <div key={i} className="InputLine">
            <div
              draggable="false"
              key={i}
              className={classNames('Input', {
                Show: show,
                Hide: !show,
              })}
            >
              <Input
                title={input.title}
                type={input.type}
                size={input.fontSize}
                maxLength={input.max}
                onChangeHandler={onChangeHandler(input.title)}
              />
            </div>
          </div>
        ))}
        <div className="InputLine">
          <div className="Start">
            <div className="Padding" />
            <div
              className={classNames('Button', { Show: show, Hide: !show })}
              onClick={requestCreateUnit}
            >
              <img draggable="false" className="Arrow" src={arrow} alt="" />
              <span>START</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUnit;
