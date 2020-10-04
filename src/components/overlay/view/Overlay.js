import React from 'react';
import classNames from 'classnames';
import Menu from 'components/overlay-contexts/overlay-menu';
import Account from 'components/overlay-contexts/account';
import ModifyAccount from 'components/overlay-contexts/modify-account';
import './Overlay.scss';

const Overlay = ({ visible, type, overlayHandler }) => {
  const goModifyAccount = () => {
    overlayHandler('MODIFY ACCOUNT');
  };

  let context = '';
  switch (type) {
    case 'MENU':
      context = <Menu visible={visible} changeHandler={overlayHandler} />;
      break;
    case 'MY ACCOUNT':
      context = (
        <Account
          visible={visible}
          moveToModify={goModifyAccount}
          changeHandler={overlayHandler}
        />
      );
      break;
    case 'MODIFY ACCOUNT':
      context = (
        <ModifyAccount visible={visible} changeHandler={overlayHandler} />
      );
      break;
    case 'CREATE CHANNEL':
      context = <Menu visible={visible} changeHandler={overlayHandler} />;
      break;
    case 'ENTER CHANNEL':
      context = <Menu visible={visible} changeHandler={overlayHandler} />;
      break;
    case 'ACCESS CODE':
      context = <Menu visible={visible} changeHandler={overlayHandler} />;
      break;
    case 'CREATE UNIT':
      context = <Menu visible={visible} changeHandler={overlayHandler} />;
      break;
    default:
  }
  return (
    <div className="Overlay">
      <div
        className={classNames('OverlayBackground', {
          Show: visible,
          Hide: !visible,
        })}
        onClick={() => overlayHandler()}
      ></div>
      <div
        className={classNames('Container', {
          Show: visible,
          Hide: !visible,
        })}
      >
        {context}
      </div>
    </div>
  );
};
export default Overlay;
