import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ModifyAccount from './view/ModifyAccount';

import LocalPath from 'local-path';

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

const ModifyAccountContainer = ({ show, changeHandler }) => {
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    currentPassWord: '',
    newPassword: '',
    newPassword_re: '',
  });

  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'NAME':
        setState({ ...state, name: data });
        return;
      case 'CURRENT PASSWARD':
        setState({ ...state, currentPassWord: data });
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

  const modiftAccountHandler = () => {
    console.log(state);
    changeHandler();
    history.push(LocalPath.root);
  };

  return (
    <ModifyAccount
      show={show}
      title={title}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      modiftAccountHandler={modiftAccountHandler}
    />
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default ModifyAccountContainer;
