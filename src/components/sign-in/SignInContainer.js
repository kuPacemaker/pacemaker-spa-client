import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LeftImageForm from 'components/left-image-form';
import image from 'resources/images/concept/signin-image.jpg';
import { account } from 'shared/test-data.js';
import { LocalMainPage } from 'local-path';

const title = 'SIGN-IN';
const imageText = 'START A PERFECT MARATHON WITH PACEMAKER';
const goSignUp = 'I’M NOT A MEMBER YET';
const goFindAccount = 'I FORGOT MY ACCOUNT';

const inputForms = [
  {
    title: 'E-MAIL',
    type: 'email',
    fontSize: '1.35em',
  },
  {
    title: 'PASSWORD',
    type: 'password',
    fontSize: '1.35em',
  },
];

const SignInContainer = (prop) => {
  const history = useHistory();
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

  // history.push('/main-page');
  const signInHandler = () => {
    console.log(state);
    account.id = state.id;
    account.pw = state.pw;
    account.token = state.id;
    console.log(account);
    history.push(LocalMainPage.root);
  };

  return (
    <LeftImageForm
      title={title}
      imageText={imageText}
      goSignUp={goSignUp}
      goFindAccount={goFindAccount}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signInHandler={signInHandler}
      image={image}
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
