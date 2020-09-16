import React from 'react';
import classNames from 'classnames';
import './OverlayMenu.scss';

const MenuItem = ({ show, item, onClickHandler }) => (
  <span
    className={classNames('MenuItem', { Show: show, Hide: !show })}
    onClick={() => onClickHandler(item[1])}
  >
    {item[0]}
  </span>
);

const OverlayMenu = ({ show, main, optional, onClickHandler }) => {
  return (
    <div className="OverlayMenu">
      <div className="MenuContext">
        <div className="MainMenu">
          {main.map((item, index) => (
            <MenuItem
              key={index}
              show={show}
              item={item}
              onClickHandler={onClickHandler}
            />
          ))}
        </div>
        <div className="Line"></div>
        <div className="OptionalMenu">
          {optional.map((item, index) => (
            <MenuItem
              key={index}
              show={show}
              item={item}
              onClickHandler={onClickHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OverlayMenu;
