import React from 'react';

import Header from './view/Header';

const buttons = {
  left: {
    before: [
      ['ABOUT US', '/about-us'],
      ['CONTACT', '/contect'],
    ],
    after: [
      ['MENU', undefined],
      ['SEARCH', undefined],
    ],
  },
  right: {
    before: [
      ['SIGN-UP', '/sign-up'],
      ['SIGN-IN', '/sign-in'],
    ],
    after: [
      ['NEWS', '/main/newspeed'],
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
