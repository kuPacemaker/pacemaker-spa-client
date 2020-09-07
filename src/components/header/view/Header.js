import React from 'react';
import './Header.scss';

const accout = false;
const leftItems = {
  before: ['ABOUT US', 'CONTACT'],
  after: ['MENU', 'SEARCH'],
};
const rightItems = {
  before: ['SIGN-UP', 'SIGN-IN'],
  after: ['NEWS', 'MY ACCOUNT'],
};

const LetterButton = ({ context, onClick }) => {
  return (
    <span
      className="LetterButton UnderlineEffect"
      onClick={() => onClick(context)}
    >
      {context}
    </span>
  );
};

const Header = () => {
  const click = (context) => {
    console.log('Do ' + context);
  };

  const left = accout ? leftItems.after : leftItems.before;
  const right = accout ? rightItems.after : rightItems.before;

  return (
    <div className="Header">
      <span className="CenterTitle">PACEMAKER</span>

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
