import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ placeHolder, value, onFocus, onChange }) => {
  return (
    <from className="CustomInput">
      <input
        placeholder={placeHolder}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
      />
    </from>
  );
};

export default CustomInput;
