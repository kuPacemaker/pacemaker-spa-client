import React from 'react';
import './CustomInput.scss';

const CustomInput = ({
  title,
  type,
  size,
  maxLength = 32,
  placeholder = '',
  onChangeHandler = undefined,
}) => {
  return (
    <div className="CustomInput">
      <span style={{ fontSize: size }}>{title}</span>

      <input
        type={type}
        style={{ fontSize: size, width: maxLength + 'em' }}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
