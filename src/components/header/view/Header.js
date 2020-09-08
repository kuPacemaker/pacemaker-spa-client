import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import { account } from 'shared/test-data';

const leftItems = {
  before: [
    ['ABOUT US', '/about-us'],
    ['CONTACT', '/contect'],
  ],
  after: [
    ['MENU', undefined],
    ['SEARCH', undefined],
  ],
};
const rightItems = {
  before: [
    ['SIGN-UP', '/sign-up'],
    ['SIGN-IN', '/sign-in'],
  ],
  after: [
    ['NEWS', '/main/newspeed'],
    ['MY ACCOUNT', undefined],
  ],
};

const LetterButton = ({ context, onClick }) => {
  return context[1] ? (
    <Link to={context[1]}>
      <span className="LetterButton UnderlineEffect">{context[0]}</span>
    </Link>
  ) : (
    <span
      className="LetterButton UnderlineEffect"
      onClick={() => onClick(context)}
    >
      {context[0]}
    </span>
  );
};

const Header = () => {
  const click = (context) => {
    console.log('Do ' + context[0]);
  };

  const left = account.token ? leftItems.after : leftItems.before;
  const right = account.token ? rightItems.after : rightItems.before;

  return (
    <div className="Header">
      <Link to="/">
        <span className="CenterTitle">PACEMAKER</span>
      </Link>
      <span className="LeftButtonSet">
        {left.map((item) => (
          <LetterButton key={item} context={item} onClick={() => click(item)} />
        ))}
      </span>
      <span className="RightButtonSet">
        {right.map((item) => (
          <LetterButton key={item} context={item} onClick={() => click(item)} />
        ))}
      </span>
    </div>
  );
};

export default Header;
