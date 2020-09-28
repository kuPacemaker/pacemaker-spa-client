import React from 'react';
import classNames from 'classnames';
import Menu from 'components/overlay-contexts/overlay-menu';
import Account from 'components/overlay-contexts/account';
import ModifyAccount from 'components/overlay-contexts/modify-account';
import './Overlay.scss';

const Overlay = ({ show, type, changeHandler }) => {
  const goModifyAccount = () => {
    changeHandler('MODIFY ACCOUNT');
  };

  let context = '';
  switch (type) {
    case 'MENU':
      context = <Menu show={show} changeHandler={changeHandler} />;
      break;
    case 'MY ACCOUNT':
      context = (
        <Account
          show={show}
          moveToModify={goModifyAccount}
          changeHandler={changeHandler}
        />
      );
      break;
    case 'MODIFY ACCOUNT':
      context = <ModifyAccount show={show} changeHandler={changeHandler} />;
      break;
    case 'CREATE CHANNEL':
      context = <ModifyAccount show={show} changeHandler={changeHandler} />;
      break;
    case 'ENTER CHANNEL':
      context = <ModifyAccount show={show} changeHandler={changeHandler} />;
      break;
    case 'ACCESS CODE':
      context = <ModifyAccount show={show} changeHandler={changeHandler} />;
      break;
    case 'CREATE UNIT':
      context = <ModifyAccount show={show} changeHandler={changeHandler} />;
      break;
    default:
  }
  return (
    <div className="Overlay">
      <div
        className={classNames('OverlayBackground', {
          Show: show,
          Hide: !show,
        })}
        onClick={() => changeHandler()}
      ></div>
      <div
        className={classNames('Container', {
          Show: show,
          Hide: !show,
        })}
      >
        {context}
      </div>
    </div>
  );
};
export default Overlay;
