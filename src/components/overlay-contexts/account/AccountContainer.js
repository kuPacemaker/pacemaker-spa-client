import React from 'react';
import { useHistory } from 'react-router-dom';
import Account from './view/Account';

import { account } from 'shared/test-data';
import LocalPath from 'common/local-path';

const texts = {
  title: "Let's Run, ",
  modify: 'MODIFY ACCOUNT INFORMATION',
  signout: 'SIGNOUT',
};

const AccountContainer = ({ visible, moveToModify, changeHandler }) => {
  const history = useHistory();

  const signoutHandler = () => {
    changeHandler();
    history.push(LocalPath.root);
  };
  return (
    <Account
      user={account}
      show={visible}
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
