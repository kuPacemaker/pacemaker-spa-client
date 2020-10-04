import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { updateChannel } from 'store/modules/action/board';
import { requestSignIn } from 'store/modules/action/account';
import { LocalMainPage } from 'common/local-path';
import LeftImageForm from 'components/left-image-form';
import image from 'resources/images/concept/signin-image.jpg';
// import { account } from 'shared/test-data.js';

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

const SignInContainer = (props) => {
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
    const signin = props.requestSignIn;
    signin(state.id, state.pw);
  };

  if (props.token) {
    props.updateChannel(props.token);
    return <Redirect path={'*'} to={LocalMainPage.newspeed} />;
  }

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

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn, updateChannel }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
// export default SignInContainer;
