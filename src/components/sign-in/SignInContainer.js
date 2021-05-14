import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { refresh } from 'store/modules/action/refresh';
import { requestSignIn } from 'store/modules/action/account';
import { show } from 'store/modules/creators/modal';

import { LocalMainPage } from 'common/local-path';
import LeftImageForm from 'components/left-image-form';
import image from 'resources/images/concept/signin-image.jpg';

const title = 'SIGN-IN';
const imageText = 'START A PERFECT MARATHON WITH PACEMAKER';
const goSignUp = 'I’M NOT A MEMBER YET';
const goFindAccount = 'I FORGOT MY ACCOUNT';

const inputForms = [
  {
    title: 'E-MAIL',
    type: 'email',
    fontSize: '1.35em',
    max: 22,
  },
  {
    title: 'PASSWORD',
    type: 'password',
    fontSize: '1.35em',
    max: 20,
  },
];

const SignInContainer = (props) => {
  const [state, setState] = useState({
    id: '',
    pw: '',
  });
  const history = useHistory();
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
  const signInHandler = (historyHandler) => () => {
    props.requestSignIn({ id: state.id, pw: state.pw }, (token) => {
      if (token) {
        props.refresh({ token });
        historyHandler(LocalMainPage.newspeed.path);
      } else {
        props.show('ALERT MODAL', {
          title: 'SERVER OFF\nONLY CAN USE DUMMY',
          body: 'App server is down!\nPlease use "id:test, pw:test" to access dummy account.',
          callback: () => console.log('로그인 실패!'),
        });
        // props.show('ALERT MODAL', {
        //   title: 'SIGN-IN DENIED\nID OR PW DO NOT MATCH!',
        //   body: 'Did you forget your password?\nYou can reset your password from below button.',
        //   callback: () => console.log('로그인 실패!'),
        // });
      }
    });
  };

  return (
    <LeftImageForm
      title={title}
      imageText={imageText}
      goSignUp={goSignUp}
      goFindAccount={goFindAccount}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      signInHandler={signInHandler(history.push)}
      image={image}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn, refresh, show }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
