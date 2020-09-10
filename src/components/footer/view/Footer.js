import React from 'react';
import classnames from 'classnames';
import './Footer.scss';

const Icon = ({ type, clickEvent }) => {
  return <div className={classnames('Icon', type)} onClick={clickEvent} />;
};

const Footer = ({ icons, onClickHandler }) => {
  return (
    <div className="Footer">
      <span>© Pacemaker. All rights reserved.</span>
      <div className="IconSet">
        {icons.map((icon) => (
          <Icon
            key={icon}
            type={icon}
            clickEvent={() => onClickHandler(icon)}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
