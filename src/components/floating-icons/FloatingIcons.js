import React from 'react';
import classNames from 'classnames';
import './FloatingIcons.scss';

const data = [
  {
    type: '',
    observer: '',
    onClickHandler: '',
  },
];
const FloatingIcons = ({ icons }) => {
  if (!icons) return <div></div>;
  return (
    <div className="FloatingIcons">
      {icons.map((icon, index) => {
        return (
          <img
            key={index}
            className={
              icon.observer
                ? classNames('Icon', {
                    Up: icon.observer,
                    Down: !icon.observer,
                  })
                : 'Icon'
            }
            src={require(`resources/images/icon/${icon.type}.png`)}
            alt=""
            onClick={icon.onClickHandler}
          />
        );
      })}
    </div>
  );
};

export default FloatingIcons;
