import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ title, type, size, onChangeHandler = undefined }) => {
  const fontSize = { fontSize: size };
  return (
    <span className="CustomInput">
      <span style={fontSize}>{title}</span>
      <input
        type={type}
        style={fontSize}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </span>
  );
};

export default CustomInput;
