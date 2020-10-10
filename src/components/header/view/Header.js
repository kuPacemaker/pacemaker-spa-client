import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import LocalPath from 'common/local-path';

const LetterButton = ({ context, onClick }) => {
  return context[1] ? (
    <Link draggable="false" to={context[1]}>
      <span className="LetterButton">{context[0]}</span>
    </Link>
  ) : (
    <span className="LetterButton" onClick={() => onClick(context)}>
      {context[0]}
    </span>
  );
};

const Header = ({ onClickHandler, buttons }) => {
  return (
    <div className="Header">
      <Link draggable="false" to={LocalPath.root}>
        <span className="CenterTitle">PACEMAKER</span>
      </Link>
      <span className="LeftButtonSet">
        {buttons.left.map((item) => (
          <LetterButton
            key={item}
            context={item}
            onClick={() => onClickHandler(item)}
          />
        ))}
      </span>
      <span className="RightButtonSet">
        {buttons.right.map((item) => (
          <LetterButton
            key={item}
            context={item}
            onClick={() => onClickHandler(item)}
          />
        ))}
      </span>
    </div>
  );
};

export default Header;
