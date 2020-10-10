import React from 'react';
import classNames from 'classnames';
import './FloatingIcons.scss';

const FloatingIcons = ({ icons }) => {
  if (!icons) return <></>;
  return (
    <div className="FloatingIcons">
      {icons.map((icon, index) => {
        return (
          <img
            key={index}
            draggable="false"
            className={classNames('Icon', {
              RotateIcon: icon.rotate !== undefined,
              Rotate: icon.rotate,
              Disable: icon.disable,
            })}
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
