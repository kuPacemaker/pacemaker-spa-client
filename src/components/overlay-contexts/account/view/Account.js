import React from 'react';
import classNames from 'classnames';

import cross from 'resources/images/icon/cross.png';
import concept from 'resources/images/concept/account-image.jpg';
import './Account.scss';

const Account = ({ user, show, texts, moveToModify, signoutHandler }) => {
  return (
    <div className="Account">
      <div className="Context">
        <img draggable="false" className="Close" src={cross} alt="" />
        <div className="Title">
          {texts.title}
          {user.name}!
        </div>
        <div className="ImageBox">
          <img
            draggable="false"
            className="ConceptImage"
            src={concept}
            alt=""
          />
          <div className="AccountData">
            <div className="UserType">{user.type}</div>
            <div
              draggable="false"
              className={classNames('ModifyAccount', {
                Show: show,
                Hide: !show,
              })}
              onClick={moveToModify}
            >
              {texts.modify}
            </div>
          </div>
        </div>
        <div
          draggable="false"
          className={classNames('SignOut', {
            Show: show,
            Hide: !show,
          })}
          onClick={signoutHandler}
        >
          {texts.signout}
        </div>
      </div>
    </div>
  );
};

export default Account;
