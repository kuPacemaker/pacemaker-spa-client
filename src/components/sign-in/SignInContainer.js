import React, { useState } from 'react';

import SignIn from './view/SignIn';

const imageText = 'START A PERFECT MARATHON WITH PACEMAKER';
const goSignUp = 'I’M NOT A MEMBER YET';
const goFindAccount = 'I FORGOT MY ACCOUNT';

const SignInContainer = (prop) => {
  const [state, setState] = useState({
    id: '',
    pw: '',
  });
  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'E-MAIL':
        setState({ ...state, id: data });
        return;
      case 'PASSWORD':
        setState({ ...state, pw: data });
        return;
      default:
        return;
    }
  };
  const signInHandler = () => {
    console.log(state);
  };

  return (
    <SignIn
      imageText={imageText}
      goSignUp={goSignUp}
      goFindAccount={goFindAccount}
      onChangeHandler={onChangeHandler}
      signInHandler={signInHandler}
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
export default SignInContainer;
