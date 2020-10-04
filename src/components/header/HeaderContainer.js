import React from 'react';
import { connect } from 'react-redux';

import Header from './view/Header';
import LocalPath from 'common/local-path';

const buttons = {
  signin: {
    left: [
      ['MENU', undefined],
      ['SEARCH', undefined],
    ],
    right: [
      ['NEWS', LocalPath.main.newspeed],
      ['MY ACCOUNT', undefined],
    ],
  },
  signout: {
    left: [
      ['ABOUT US', LocalPath.help.aboutus],
      ['CONTACT', LocalPath.help.contact],
    ],
    right: [
      ['SIGN-UP', LocalPath.admission.signup],
      ['SIGN-IN', LocalPath.admission.root],
    ],
  },
};

const onClickHandler = (overlay) => (context) => {
  switch (context[0]) {
    case buttons.signin.left[0][0]:
    case buttons.signin.right[1][0]:
      overlay(context[0]);
      return;
    case buttons.signin.left[1][0]:
    default:
      console.log('Do ' + context[0]);
      return;
  }
};

const HeaderContainer = ({ overlay, token }) => {
  return (
    <Header
      onClickHandler={onClickHandler(overlay)}
      buttons={token ? buttons.signin : buttons.signout}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
// export default HeaderContainer;
