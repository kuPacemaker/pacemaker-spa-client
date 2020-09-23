import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import LocalPath from 'common/local-path';

import { account } from 'shared/test-data';

const LetterButton = ({ context, onClick }) => {
  return context[1] ? (
    <Link to={context[1]}>
      <span className="LetterButton">{context[0]}</span>
    </Link>
  ) : (
    <span className="LetterButton" onClick={() => onClick(context)}>
      {context[0]}
    </span>
  );
};

const Header = ({ onClickHandler, buttons }) => {
  const left = account.token ? buttons.left.after : buttons.left.before;
  const right = account.token ? buttons.right.after : buttons.right.before;

  return (
    <div className="Header">
      <Link to={LocalPath.root}>
        <span className="CenterTitle">PACEMAKER</span>
      </Link>
      <span className="LeftButtonSet">
        {left.map((item) => (
          <LetterButton
            key={item}
            context={item}
            onClick={() => onClickHandler(item)}
          />
        ))}
      </span>
      <span className="RightButtonSet">
        {right.map((item) => (
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
