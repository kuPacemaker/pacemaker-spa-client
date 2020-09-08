import React from 'react';
import classnames from 'classnames';
import './Footer.scss';

const icons = ['Facebook', 'Instargram', 'Youtube'];

const Icon = ({ type, clickEvent }) => {
  return <div className={classnames('Icon', type)} onClick={clickEvent} />;
};

const AboutUs = () => {
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

export default AboutUs;
