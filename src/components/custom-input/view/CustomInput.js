import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ title, type, size, onChangeHandler = undefined }) => {
  // let len = 'calc(100% - ' + Number(title.length) * 0.65 + 'em - 50px)';
  return (
    <div className="CustomInput">
      <span style={{ fontSize: size }}>{title}</span>

      <input
        type={type}
        style={{ fontSize: size }}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
