import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { requestModifyAccount } from 'store/modules/action/account';
import ModifyAccount from './view/ModifyAccount';
import LocalPath from 'common/local-path';

const title = 'MODIFY ACCOUNT INFORMATION';

const inputForms = [
  {
    title: 'NAME',
    type: 'text',
    fontSize: '1.35em',
  },
  {
    title: 'CURRENT PASSWARD',
    type: 'password',
    fontSize: '1.35em',
  },
  {
    title: 'NEW PASSWORD',
    type: 'password',
    fontSize: '1.35em',
  },
  {
    title: 'COMFIRM NEW PASSWORD',
    type: 'password',
    fontSize: '1.35em',
  },
];

const ModifyAccountContainer = ({
  visible,
  changeHandler,
  token,
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
    modifyAccount(
      {
        token: token,
        pw: state.currentPassword,
        new_pw: state.newPassword,
        name: state.name,
      },
      () => {
        changeHandler();
        historyHandler(LocalPath.root);
      }
    );
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestModifyAccount }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyAccountContainer);
// export default ModifyAccountContainer;
