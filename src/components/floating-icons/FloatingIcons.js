import React from 'react';
import classNames from 'classnames';
import './FloatingIcons.scss';

const FloatingIcons = ({ icons }) => {
  if (!icons) return <div></div>;
  return (
    <div className="FloatingIcons">
      {icons.map((icon, index) => {
        return (
          <img
            key={index}
            className={
              icon.observer !== undefined
                ? classNames('Icon', 'RotateIcon', {
                    Rotate: icon.observer,
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
