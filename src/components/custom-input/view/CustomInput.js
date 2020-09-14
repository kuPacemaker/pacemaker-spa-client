import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ title, size, onChangeHandler = undefined }) => {
  const fontSize = { fontSize: size };
  return (
    <span className="CustomInput">
      <span style={fontSize}>{title}</span>
      <input
        style={fontSize}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </span>
  );
};

export default CustomInput;
