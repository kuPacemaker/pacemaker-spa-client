import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Account from './view/Account';
import { signout } from 'store/modules/creators/account';

import LocalPath from 'common/local-path';

const texts = {
  title: "Let's Run, ",
  modify: 'MODIFY ACCOUNT INFORMATION',
  signout: 'SIGNOUT',
};

const AccountContainer = (props) => {
  const history = useHistory();

  const signoutHandler = () => {
    props.signout();
    props.changeHandler();
    history.push(LocalPath.root);
  };
  return (
    <Account
      user={{ id: props.id, name: props.name, type: props.type }}
      show={props.visible}
      texts={texts}
      moveToModify={props.moveToModify}
      signoutHandler={signoutHandler}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  id: account.id,
  name: account.name,
  type: account.type,
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
// export default AccountContainer;
