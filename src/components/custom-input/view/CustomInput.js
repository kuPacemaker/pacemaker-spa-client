import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ value, onFocus, onChange }) => {
  const clickEvent = (icon) => {
    console.log('Redirect to ' + icon);
  };
  return (
    <div className="Footer">
      <span>© Pacemaker. All rights reserved.</span>
      <div className="IconSet">
        {icons.map((icon) => (
          <Icon key={icon} type={icon} clickEvent={() => clickEvent(icon)} />
        ))}
      </div>
    </div>
  );
};

export default CustomInput;
