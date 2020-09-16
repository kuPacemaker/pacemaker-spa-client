import React from 'react';
import classNames from 'classnames';

import exit from 'resources/images/icon/exit.png';
import concept from 'resources/images/concept/account-image.jpg';
import './Account.scss';

const Account = ({ user, show, moveToModify, signoutHandler }) => {
  return (
    <div className="Account">
      <div className="Context">
        <img className="Close" src={exit} alt="" />
        <div className="Title">Let's Run, {user.name}!</div>
        <div className="ImageBox">
          <img className="ConceptImage" src={concept} alt="" />
          <div className="AccountData">
            <div className="UserType">{user.type}</div>
            <div
              className={classNames('ModifyAccount', {
                Show: show,
                Hide: !show,
              })}
              onClick={moveToModify}
            >
              MODIFY ACCOUNT INFORMATION
            </div>
          </div>
        </div>
        <div
          className={classNames('SignOut', {
            Show: show,
            Hide: !show,
          })}
          onClick={signoutHandler}
        >
          SIGNOUT
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default Account;
