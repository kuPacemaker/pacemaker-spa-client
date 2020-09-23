import React from 'react';

import Header from './view/Header';

import LocalPath from 'common/local-path';

const buttons = {
  left: {
    before: [
      ['ABOUT US', LocalPath.help.aboutus],
      ['CONTACT', LocalPath.help.contact],
    ],
    after: [
      ['MENU', undefined],
      ['SEARCH', undefined],
    ],
  },
  right: {
    before: [
      ['SIGN-UP', LocalPath.admission.signup],
      ['SIGN-IN', LocalPath.admission.root],
    ],
    after: [
      ['NEWS', LocalPath.main.newspeed],
      ['MY ACCOUNT', undefined],
    ],
  },
};

const onClickHandler = (overlay) => (context) => {
  switch (context[0]) {
    case buttons.left.after[0][0]:
    case buttons.right.after[1][0]:
      overlay(context[0]);
      return;
    case buttons.left.after[1][0]:
    default:
      console.log('Do ' + context[0]);
      return;
  }
};

const HeaderContainer = ({ overlay }) => {
  return <Header onClickHandler={onClickHandler(overlay)} buttons={buttons} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default HeaderContainer;
