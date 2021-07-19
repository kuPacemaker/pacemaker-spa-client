import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { requestModifyAccount } from 'store/modules/action/account';
import { show } from 'store/modules/creators/modal';
import LocalPath from 'common/local-path';
import { checkPassword } from 'common/security/check-password';

import ModifyAccount from './view/ModifyAccount';
import { Logger } from '../../../utils/logger/debugger';

const title = 'MODIFY ACCOUNT INFORMATION';

const inputForms = [
  {
    title: 'NAME',
    type: 'text',
    fontSize: '1.35em',
    max: 56,
  },
  {
    title: 'CURRENT PASSWARD',
    type: 'password',
    fontSize: '1.35em',
    max: 48,
  },
  {
    title: 'NEW PASSWORD',
    type: 'password',
    fontSize: '1.35em',
    max: 50,
  },
  {
    title: 'COMFIRM NEW PASSWORD',
    type: 'password',
    fontSize: '1.35em',
    max: 46,
  },
];

const ModifyAccountContainer = ({
  visible,
  changeHandler,
  token,
  userId: id,
  show: showModal,
  requestModifyAccount: modifyAccount,
}) => {
  const [state, setState] = useState({
    name: '',
    currentPassword: '',
    newPassword: '',
    newPassword_re: '',
  });

  const history = useHistory();

  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'NAME':
        setState({ ...state, name: data });
        return;
      case 'CURRENT PASSWARD':
        setState({ ...state, currentPassword: data });
        return;
      case 'NEW PASSWORD':
        setState({ ...state, newPassword: data });
        return;
      case 'COMFIRM NEW PASSWORD':
        setState({ ...state, newPassword_re: data });
        return;
      default:
        return;
    }
  };

  const modiftAccountHandler = (historyHandler) => () => {
    if (state.currentPassword.length === 0) return;

    const invalid = checkPassword(state.newPassword, state.newPassword_re);
    if (invalid) {
      showModal('ALERT MODAL', {
        title: `${invalid}\nCHECK YOUR PASSWORD`,
        body: 'Please check your password again!\nMake your password 6 or more\nwith a combination of letters, numbers and marks',
      });
    } else {
      modifyAccount(
        {
          token,
          id,
          pw: state.currentPassword,
          new_pw: state.newPassword,
          name: state.name,
        },
        (success) => {
          Logger(success);
          if (success) {
            Logger('YES');
            changeHandler();
            historyHandler(LocalPath.root);
            showModal('ALERT MODAL', {
              title: 'MODIFY SUCCESS\nSIGN-IN AGAIN!',
              body: 'Your account data is changed!\nPlease sign-in with your new data.',
            });
          } else {
            Logger('NO');
            showModal('ALERT MODAL', {
              title: 'MODIFY DENIED\nPASSWORD MISMATCH!',
              body: 'The password you entered is incorrect!\nYou must enter the correct password to change the data.',
            });
          }
        }
      );
    }
  };

  return (
    <ModifyAccount
      show={visible}
      title={title}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      modiftAccountHandler={modiftAccountHandler(history.push)}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
  userId: account.id,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestModifyAccount, show }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyAccountContainer);
// export default ModifyAccountContainer;
