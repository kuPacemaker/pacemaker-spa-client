import React from 'react';
import './CustomInput.scss';

const onChangeHandler = (e) => {
  this.value.setState({});
};

const CustomInput = ({
  title,
  size,
  placeHolder = '',
  value,
  type = 'text',
  onFocus = undefined,
  onCreate,
}) => {
  const fontSize = { 'font-size': size };
  return (
    <span className="CustomInput">
      <span style={fontSize}>{title}</span>
      <input
        style={fontSize}
        // placeholder={placeHolder}
        // value={value}
        // type={type}
        // onFocus={onFocus}
        // onChange={onChange}
      />
    </span>
  );
};

export default CustomInput;
