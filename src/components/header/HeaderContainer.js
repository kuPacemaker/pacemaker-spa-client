import React from 'react';

import Header from './view/Header';

import LocalPath from 'local-path';

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

const click = (context) => {
  console.log('Do ' + context[0]);
};

const HeaderContainer = (prop) => {
  return <Header onClickHandler={click} buttons={buttons} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default HeaderContainer;
