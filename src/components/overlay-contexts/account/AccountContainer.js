import React from 'react';
import { useHistory } from 'react-router-dom';
import Account from './view/Account';

import { account } from 'shared/test-data';
import LocalPath from 'local-path';

const texts = {
  title: "Let's Run, ",
  modify: 'MODIFY ACCOUNT INFORMATION',
  signout: 'SIGNOUT',
};

const AccountContainer = ({ show, moveToModify, changeHandler }) => {
  const history = useHistory();

  const signoutHandler = () => {
    changeHandler();
    history.push(LocalPath.root);
  };
  return (
    <Account
      user={account}
      show={show}
      texts={texts}
      moveToModify={moveToModify}
      signoutHandler={signoutHandler}
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
export default AccountContainer;
